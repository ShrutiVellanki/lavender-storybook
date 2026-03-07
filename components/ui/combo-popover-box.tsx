import React, { useEffect, useMemo, useRef, useState } from "react";

type ComboboxProps<T> = {
  options: T[];
  value?: T | null;
  defaultValue?: T | null;
  onChange?: (value: T | null) => void;
  getOptionLabel: (option: T) => string;
  renderOption?: (option: T, state: { isHighlighted: boolean; isSelected: boolean }) => React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
};

export function Combobox<T>({
  options,
  value,
  defaultValue = null,
  onChange,
  getOptionLabel,
  renderOption,
  placeholder = "Select an option",
  disabled = false,
}: ComboboxProps<T>) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<T | null>(defaultValue);
  const selectedValue = isControlled ? value! : internalValue;

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = "combobox-listbox";

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((option) =>
      getOptionLabel(option).toLowerCase().includes(q)
    );
  }, [options, query, getOptionLabel]);

  useEffect(() => {
    if (highlightedIndex >= filteredOptions.length) {
      setHighlightedIndex(0);
    }
  }, [filteredOptions.length, highlightedIndex]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function updateValue(next: T | null) {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  }

  function selectOption(option: T) {
    updateValue(option);
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (disabled) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          return;
        }
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1)
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          return;
        }
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        break;

      case "Enter":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          return;
        }
        if (filteredOptions[highlightedIndex]) {
          selectOption(filteredOptions[highlightedIndex]);
        }
        break;

      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setQuery("");
        break;
    }
  }

  const displayValue =
    isOpen ? query : selectedValue ? getOptionLabel(selectedValue) : "";

  return (
    <div
      ref={rootRef}
      style={{ position: "relative", width: 280 }}
    >
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          isOpen && filteredOptions[highlightedIndex]
            ? `option-${highlightedIndex}`
            : undefined
        }
        disabled={disabled}
        value={displayValue}
        placeholder={placeholder}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
          setHighlightedIndex(0);
        }}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #d0d7de",
          fontSize: 14,
        }}
      />

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            border: "1px solid #d0d7de",
            borderRadius: 10,
            background: "white",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            maxHeight: 220,
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          <ul
            id={listboxId}
            role="listbox"
            style={{ listStyle: "none", margin: 0, padding: 6 }}
          >
            {filteredOptions.length === 0 ? (
              <li
                style={{
                  padding: "10px 12px",
                  color: "#6b7280",
                  fontSize: 14,
                }}
              >
                No results
              </li>
            ) : (
              filteredOptions.map((option, index) => {
                const isHighlighted = index === highlightedIndex;
                const isSelected = selectedValue === option;

                return (
                  <li
                    key={index}
                    id={`option-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectOption(option)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      cursor: "pointer",
                      background: isHighlighted ? "#f3f4f6" : "transparent",
                      fontWeight: isSelected ? 600 : 400,
                    }}
                  >
                    {renderOption
                      ? renderOption(option, { isHighlighted, isSelected })
                      : getOptionLabel(option)}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}