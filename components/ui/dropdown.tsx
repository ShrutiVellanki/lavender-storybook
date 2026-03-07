import React, {
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
  } from "react";
  
  type SelectProps<T> = {
    options: T[];
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
    getOptionLabel: (option: T) => string;
    getOptionKey?: (option: T) => string;
    placeholder?: string;
    disabled?: boolean;
    renderOption?: (option: T, state: { isSelected: boolean; isHighlighted: boolean }) => React.ReactNode;
  };
  
  export function Select<T>({
    options,
    value,
    defaultValue,
    onChange,
    getOptionLabel,
    getOptionKey,
    placeholder = "Select an option",
    disabled = false,
    renderOption,
  }: SelectProps<T>) {
    const isControlled = value !== undefined;
  
    const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
    const rootRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const listboxId = useId();
  
    const selectedValue = isControlled ? value : internalValue;
  
    const selectedIndex = useMemo(() => {
      if (selectedValue === undefined) return -1;
      return options.findIndex((option) => option === selectedValue);
    }, [options, selectedValue]);
  
    const selectedLabel =
      selectedIndex >= 0 ? getOptionLabel(options[selectedIndex]) : placeholder;
  
    useEffect(() => {
      function handleDocumentMouseDown(event: MouseEvent) {
        if (!rootRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
      }
  
      document.addEventListener("mousedown", handleDocumentMouseDown);
      return () => {
        document.removeEventListener("mousedown", handleDocumentMouseDown);
      };
    }, []);
  
    function openDropdown() {
      if (disabled) return;
      setIsOpen(true);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  
    function closeDropdown() {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  
    function selectOption(option: T) {
      if (!isControlled) {
        setInternalValue(option);
      }
      onChange?.(option);
      closeDropdown();
      buttonRef.current?.focus();
    }
  
    function handleButtonClick() {
      if (disabled) return;
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    }
  
    function handleButtonKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
      if (disabled) return;
  
      switch (e.key) {
        case "ArrowDown":
        case "ArrowUp":
          e.preventDefault();
          if (!isOpen) {
            openDropdown();
          } else {
            setHighlightedIndex((prev) => {
              if (e.key === "ArrowDown") {
                return Math.min(prev + 1, options.length - 1);
              }
              return Math.max(prev - 1, 0);
            });
          }
          break;
  
        case "Enter":
        case " ":
          e.preventDefault();
          if (isOpen) {
            if (highlightedIndex >= 0 && highlightedIndex < options.length) {
              selectOption(options[highlightedIndex]);
            }
          } else {
            openDropdown();
          }
          break;
  
        case "Escape":
          if (isOpen) {
            e.preventDefault();
            closeDropdown();
          }
          break;
  
        default:
          break;
      }
    }
  
    function handleOptionMouseEnter(index: number) {
      setHighlightedIndex(index);
    }
  
    const activeDescendant =
      isOpen && highlightedIndex >= 0
        ? `${listboxId}-option-${highlightedIndex}`
        : undefined;
  
    return (
      <div
        ref={rootRef}
        style={{ position: "relative", width: 280 }}
      >
        <label
          htmlFor={`${listboxId}-button`}
          style={{ display: "block", marginBottom: 6 }}
        >
          Select
        </label>
  
        <button
          id={`${listboxId}-button`}
          ref={buttonRef}
          type="button"
          disabled={disabled}
          onClick={handleButtonClick}
          onKeyDown={handleButtonKeyDown}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-haspopup="listbox"
          aria-activedescendant={activeDescendant}
          style={{
            width: "100%",
            padding: 8,
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{selectedLabel}</span>
          <span aria-hidden="true">{isOpen ? "▲" : "▼"}</span>
        </button>
  
        {isOpen && (
          <ul
            id={listboxId}
            role="listbox"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              marginTop: 4,
              padding: 0,
              listStyle: "none",
              border: "1px solid #ccc",
              background: "white",
              maxHeight: 240,
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {options.length === 0 && (
              <li style={{ padding: 8 }}>No options available.</li>
            )}
  
            {options.map((option, index) => {
              const isSelected = index === selectedIndex;
              const isHighlighted = index === highlightedIndex;
              const label = getOptionLabel(option);
              const key = getOptionKey ? getOptionKey(option) : `${label}-${index}`;
  
              return (
                <li
                  key={key}
                  id={`${listboxId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => handleOptionMouseEnter(index)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    selectOption(option);
                  }}
                  style={{
                    padding: 8,
                    cursor: "pointer",
                    background: isHighlighted ? "#eee" : "white",
                    fontWeight: isSelected ? 600 : 400,
                  }}
                >
                  {renderOption
                    ? renderOption(option, { isSelected, isHighlighted })
                    : label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }