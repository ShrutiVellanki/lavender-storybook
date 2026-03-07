import React, { useEffect, useMemo, useRef, useState } from "react";

type PinInputProps = {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  autoFocus?: boolean;
  masked?: boolean;
  disabled?: boolean;
};

export default function PinInput({
  length = 6,
  value,
  defaultValue = "",
  onChange,
  onComplete,
  autoFocus = true,
  masked = false,
  disabled = false,
}: PinInputProps) {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<string[]>(
    Array.from({ length }, (_, i) => defaultValue[i] ?? "")
  );

  const digits = isControlled
    ? Array.from({ length }, (_, i) => value?.[i] ?? "")
    : internalValue;

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const joinedValue = useMemo(() => digits.join(""), [digits]);

  useEffect(() => {
    if (autoFocus && !disabled) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus, disabled]);

  useEffect(() => {
    onChange?.(joinedValue);

    if (joinedValue.length === length && !digits.includes("")) {
      onComplete?.(joinedValue);
    }
  }, [joinedValue, length, onChange, onComplete, digits]);

  function updateDigits(nextDigits: string[]) {
    if (!isControlled) {
      setInternalValue(nextDigits);
    }
  }

  function handleInputChange(index: number, rawValue: string) {
    const numeric = rawValue.replace(/\D/g, "");

    if (!numeric) {
      const nextDigits = [...digits];
      nextDigits[index] = "";
      updateDigits(nextDigits);
      return;
    }

    // Handle cases like mobile autofill or typing multiple chars
    const nextDigits = [...digits];
    let cursor = index;

    for (const char of numeric) {
      if (cursor >= length) break;
      nextDigits[cursor] = char;
      cursor += 1;
    }

    updateDigits(nextDigits);

    const nextFocusIndex = Math.min(index + numeric.length, length - 1);
    inputRefs.current[nextFocusIndex]?.focus();
    inputRefs.current[nextFocusIndex]?.select();
  }

  function handleKeyDown(
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    switch (e.key) {
      case "Backspace": {
        e.preventDefault();
        const nextDigits = [...digits];

        if (nextDigits[index]) {
          nextDigits[index] = "";
          updateDigits(nextDigits);
          return;
        }

        if (index > 0) {
          nextDigits[index - 1] = "";
          updateDigits(nextDigits);
          inputRefs.current[index - 1]?.focus();
          inputRefs.current[index - 1]?.select();
        }
        return;
      }

      case "ArrowLeft":
        e.preventDefault();
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          inputRefs.current[index - 1]?.select();
        }
        return;

      case "ArrowRight":
        e.preventDefault();
        if (index < length - 1) {
          inputRefs.current[index + 1]?.focus();
          inputRefs.current[index + 1]?.select();
        }
        return;

      case " ":
        e.preventDefault();
        return;

      default:
        return;
    }
  }

  function handlePaste(
    index: number,
    e: React.ClipboardEvent<HTMLInputElement>
  ) {
    e.preventDefault();

    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;

    const nextDigits = [...digits];
    let cursor = index;

    for (const char of pasted) {
      if (cursor >= length) break;
      nextDigits[cursor] = char;
      cursor += 1;
    }

    updateDigits(nextDigits);

    const focusIndex = Math.min(cursor, length - 1);
    inputRefs.current[focusIndex]?.focus();
    inputRefs.current[focusIndex]?.select();
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    e.target.select();
  }

  return (
    <fieldset
      style={{ border: "none", padding: 0, margin: 0 }}
      disabled={disabled}
    >
      <legend style={{ marginBottom: 8 }}>Verification code</legend>

      <div
        role="group"
        aria-label={`${length}-digit verification code`}
        style={{ display: "flex", gap: 8 }}
      >
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type={masked ? "password" : "text"}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete={index === 0 ? "one-time-code" : undefined}
            maxLength={length}
            value={digit}
            disabled={disabled}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={(e) => handlePaste(index, e)}
            onFocus={handleFocus}
            aria-label={`Digit ${index + 1} of ${length}`}
            style={{
              width: 44,
              height: 48,
              textAlign: "center",
              fontSize: 20,
            }}
          />
        ))}
      </div>
    </fieldset>
  );
}