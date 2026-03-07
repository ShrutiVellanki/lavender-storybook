import React, { useMemo, useState } from "react";

type CardType = "Visa" | "Mastercard" | "Amex" | "Unknown";

function detectCardType(value: string): CardType {
  if (/^4/.test(value)) return "Visa";
  if (/^(5[1-5]|2[2-7])/.test(value)) return "Mastercard";
  if (/^3[47]/.test(value)) return "Amex";
  return "Unknown";
}

function formatCardNumber(value: string, cardType: CardType): string {
  const digits = value.replace(/\D/g, "");

  if (cardType === "Amex") {
    // 4-6-5
    const part1 = digits.slice(0, 4);
    const part2 = digits.slice(4, 10);
    const part3 = digits.slice(10, 15);
    return [part1, part2, part3].filter(Boolean).join(" ");
  }

  // Default 4-4-4-4
  return digits.match(/.{1,4}/g)?.join(" ") ?? "";
}

function luhnCheck(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\D/g, "");
  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return digits.length >= 12 && sum % 10 === 0;
}

function validateCardNumber(rawValue: string): string {
  const digits = rawValue.replace(/\D/g, "");
  if (!digits) return "Card number is required.";

  const cardType = detectCardType(digits);

  if (cardType === "Amex" && digits.length !== 15) {
    return "American Express cards must be 15 digits.";
  }

  if (cardType !== "Amex" && digits.length !== 16) {
    return "Card number must be 16 digits.";
  }

  if (!luhnCheck(digits)) {
    return "Card number is invalid.";
  }

  return "";
}

function validateExpiry(value: string): string {
  if (!value.trim()) return "Expiry date is required.";

  const match = value.match(/^(\d{2})\/(\d{2})$/);
  if (!match) return "Expiry must be in MM/YY format.";

  const month = Number(match[1]);
  const year = Number(match[2]);

  if (month < 1 || month > 12) return "Expiry month must be between 01 and 12.";

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear() % 100;

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return "Card is expired.";
  }

  return "";
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function validateCvc(value: string, cardType: CardType): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "CVC is required.";

  if (cardType === "Amex") {
    if (digits.length !== 4) return "American Express CVC must be 4 digits.";
  } else {
    if (digits.length !== 3) return "CVC must be 3 digits.";
  }

  return "";
}

export default function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const [touched, setTouched] = useState({
    cardNumber: false,
    expiry: false,
    cvc: false,
  });

  const cardType = useMemo(
    () => detectCardType(cardNumber.replace(/\D/g, "")),
    [cardNumber]
  );

  const cardNumberError = useMemo(
    () => validateCardNumber(cardNumber),
    [cardNumber]
  );

  const expiryError = useMemo(() => validateExpiry(expiry), [expiry]);

  const cvcError = useMemo(() => validateCvc(cvc, cardType), [cvc, cardType]);

  const isValid = !cardNumberError && !expiryError && !cvcError;

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawDigits = e.target.value.replace(/\D/g, "");
    const nextCardType = detectCardType(rawDigits);
    const maxLength = nextCardType === "Amex" ? 15 : 16;
    const truncated = rawDigits.slice(0, maxLength);
    setCardNumber(formatCardNumber(truncated, nextCardType));
  }

  function handleExpiryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExpiry(formatExpiry(e.target.value));
  }

  function handleCvcChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxLength = cardType === "Amex" ? 4 : 3;
    setCvc(e.target.value.replace(/\D/g, "").slice(0, maxLength));
  }

  function handleBlur(field: "cardNumber" | "expiry" | "cvc") {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTouched({
      cardNumber: true,
      expiry: true,
      cvc: true,
    });

    if (!isValid) return;

    alert("Payment details submitted");
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 420 }}>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="cardNumber" style={{ display: "block", marginBottom: 6 }}>
          Card Number
        </label>
        <input
          id="cardNumber"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          onBlur={() => handleBlur("cardNumber")}
          aria-invalid={touched.cardNumber && !!cardNumberError}
          aria-describedby={touched.cardNumber && cardNumberError ? "cardNumber-error" : undefined}
          placeholder="4242 4242 4242 4242"
          style={{ width: "100%", padding: 8 }}
        />
        <div style={{ marginTop: 6, fontSize: 14 }}>Card type: {cardType}</div>
        {touched.cardNumber && cardNumberError && (
          <div id="cardNumber-error" role="alert" style={{ color: "crimson", marginTop: 6 }}>
            {cardNumberError}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="expiry" style={{ display: "block", marginBottom: 6 }}>
            Expiry
          </label>
          <input
            id="expiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={expiry}
            onChange={handleExpiryChange}
            onBlur={() => handleBlur("expiry")}
            aria-invalid={touched.expiry && !!expiryError}
            aria-describedby={touched.expiry && expiryError ? "expiry-error" : undefined}
            placeholder="MM/YY"
            style={{ width: "100%", padding: 8 }}
          />
          {touched.expiry && expiryError && (
            <div id="expiry-error" role="alert" style={{ color: "crimson", marginTop: 6 }}>
              {expiryError}
            </div>
          )}
        </div>

        <div style={{ width: 120 }}>
          <label htmlFor="cvc" style={{ display: "block", marginBottom: 6 }}>
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            value={cvc}
            onChange={handleCvcChange}
            onBlur={() => handleBlur("cvc")}
            aria-invalid={touched.cvc && !!cvcError}
            aria-describedby={touched.cvc && cvcError ? "cvc-error" : undefined}
            placeholder={cardType === "Amex" ? "1234" : "123"}
            style={{ width: "100%", padding: 8 }}
          />
          {touched.cvc && cvcError && (
            <div id="cvc-error" role="alert" style={{ color: "crimson", marginTop: 6 }}>
              {cvcError}
            </div>
          )}
        </div>
      </div>

      <button type="submit" disabled={!isValid} style={{ padding: "8px 12px" }}>
        Pay
      </button>
    </form>
  );
}