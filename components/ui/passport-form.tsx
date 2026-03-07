import React, { useMemo, useState } from "react";

type Country = "USA" | "Canada" | "UK" | "";

const PASSPORT_RULES: Record<Exclude<Country, "">, RegExp> = {
  USA: /^\d{9}$/,           // 9 digits
  Canada: /^[A-Z]{2}\d{6}$/, // 2 letters + 6 digits
  UK: /^[A-Z0-9]{9}$/,     // 9 alphanumeric
};

function validatePassport(country: Country, value: string): string {
  if (!country) return "Please select a country.";
  if (!value.trim()) return "Passport number is required.";

  if (country === "Canada" || country === "UK") {
    value = value.toUpperCase();
  }

  const rule = PASSPORT_RULES[country as Exclude<Country, "">];
  if (!rule.test(value)) {
    switch (country) {
      case "USA":
        return "USA passport must be exactly 9 digits.";
      case "Canada":
        return "Canada passport must be 2 letters followed by 6 digits.";
      case "UK":
        return "UK passport must be exactly 9 alphanumeric characters.";
      default:
        return "Invalid passport number.";
    }
  }

  return "";
}

export default function PassportForm() {
  const [country, setCountry] = useState<Country>("");
  const [passport, setPassport] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const error = useMemo(() => {
    return validatePassport(country, passport);
  }, [country, passport]);

  const showError = (touched || submitted) && !!error;
  const isValid = country !== "" && passport.trim() !== "" && !error;

  function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextCountry = e.target.value as Country;
    setCountry(nextCountry);
    setPassport("");
    setTouched(false);
    setSubmitted(false);
  }

  function handlePassportChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;
    const normalizedValue =
      country === "Canada" || country === "UK"
        ? rawValue.toUpperCase()
        : rawValue;

    setPassport(normalizedValue);
  }

  function handlePassportBlur() {
    setTouched(true);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    setSubmitted(true);

    if (!isValid) return;

    alert(`Submitted: ${country} - ${passport}`);
  }

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    fontSize: 14,
    border: "1px solid #d1d5db",
    borderRadius: 6,
    backgroundColor: "#fff",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 500,
    color: "#374151",
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 400, padding: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="country" style={labelStyle}>
          Country
        </label>
        <select
          id="country"
          value={country}
          onChange={handleCountryChange}
          aria-invalid={showError && !country ? "true" : "false"}
          style={fieldStyle}
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="passport" style={labelStyle}>
          Passport Number
        </label>
        <input
          id="passport"
          type="text"
          value={passport}
          onChange={handlePassportChange}
          onBlur={handlePassportBlur}
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? "passport-error" : undefined}
          placeholder={
            country === "USA"
              ? "123456789"
              : country === "Canada"
              ? "AB123456"
              : country === "UK"
              ? "A12BC34DE"
              : "Enter passport number"
          }
          style={{
            ...fieldStyle,
            ...(showError ? { borderColor: "#dc2626" } : {}),
          }}
        />
        {showError && (
          <div
            id="passport-error"
            role="alert"
            style={{ color: "#dc2626", marginTop: 6, fontSize: 13 }}
          >
            {error}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        style={{
          padding: "10px 16px",
          fontSize: 14,
          fontWeight: 500,
          border: "1px solid #d1d5db",
          borderRadius: 6,
          backgroundColor: isValid ? "#111" : "#f3f4f6",
          color: isValid ? "#fff" : "#9ca3af",
          cursor: isValid ? "pointer" : "not-allowed",
        }}
      >
        Submit
      </button>
    </form>
  );
}