import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
    useId,
  } from "react";
  
  type AutocompleteProps<T> = {
    fetchSuggestions: (query: string) => Promise<T[]>;
    getOptionLabel: (option: T) => string;
    onSelect: (option: T) => void;
    placeholder?: string;
    debounceMs?: number;
    minQueryLength?: number;
  };
  
  export function Autocomplete<T>({
    fetchSuggestions,
    getOptionLabel,
    onSelect,
    placeholder = "Search...",
    debounceMs = 300,
    minQueryLength = 1,
  }: AutocompleteProps<T>) {
    const [query, setQuery] = useState("");
    const [options, setOptions] = useState<T[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const rootRef = useRef<HTMLDivElement | null>(null);
    const requestIdRef = useRef(0);
    const listboxId = useId();
  
    const hasResults = options.length > 0;
    const showDropdown = isOpen && (loading || hasResults || !!error);
  
    useEffect(() => {
      function handleDocumentClick(event: MouseEvent) {
        if (!rootRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
      }
  
      document.addEventListener("mousedown", handleDocumentClick);
      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }, []);
  
    useEffect(() => {
      const trimmed = query.trim();
  
      if (trimmed.length < minQueryLength) {
        setOptions([]);
        setLoading(false);
        setError("");
        setHighlightedIndex(-1);
        return;
      }
  
      const currentRequestId = ++requestIdRef.current;
      setLoading(true);
      setError("");
  
      const timeoutId = window.setTimeout(async () => {
        try {
          const results = await fetchSuggestions(trimmed);
  
          if (requestIdRef.current !== currentRequestId) {
            return;
          }
  
          setOptions(results);
          setIsOpen(true);
          setHighlightedIndex(results.length > 0 ? 0 : -1);
        } catch {
          if (requestIdRef.current !== currentRequestId) {
            return;
          }
  
          setOptions([]);
          setError("Could not load suggestions.");
          setHighlightedIndex(-1);
          setIsOpen(true);
        } finally {
          if (requestIdRef.current === currentRequestId) {
            setLoading(false);
          }
        }
      }, debounceMs);
  
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [query, debounceMs, minQueryLength, fetchSuggestions]);
  
    function selectOption(option: T) {
      const label = getOptionLabel(option);
      setQuery(label);
      setOptions([]);
      setIsOpen(false);
      setHighlightedIndex(-1);
      setError("");
      onSelect(option);
    }
  
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      setQuery(e.target.value);
      setIsOpen(true);
    }
  
    function handleInputFocus() {
      if (options.length > 0 || loading || error) {
        setIsOpen(true);
      }
    }
  
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (!showDropdown) return;
  
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            Math.min(prev + 1, options.length - 1)
          );
          break;
  
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => Math.max(prev - 1, 0));
          break;
  
        case "Enter":
          if (highlightedIndex >= 0 && highlightedIndex < options.length) {
            e.preventDefault();
            selectOption(options[highlightedIndex]);
          }
          break;
  
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
  
        default:
          break;
      }
    }
  
    const activeDescendant =
      highlightedIndex >= 0 ? `${listboxId}-option-${highlightedIndex}` : undefined;
  
    return (
      <div
        ref={rootRef}
        style={{ position: "relative", width: 320 }}
      >
        <label htmlFor={`${listboxId}-input`} style={{ display: "block", marginBottom: 6 }}>
          Search
        </label>
  
        <input
          id={`${listboxId}-input`}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={activeDescendant}
          style={{ width: "100%", padding: 8 }}
        />
  
        {showDropdown && (
          <ul
            id={listboxId}
            role="listbox"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              margin: 4,
              padding: 0,
              listStyle: "none",
              border: "1px solid #ccc",
              background: "white",
              maxHeight: 240,
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {loading && (
              <li style={{ padding: 8 }}>Loading...</li>
            )}
  
            {!loading && error && (
              <li role="alert" style={{ padding: 8, color: "crimson" }}>
                {error}
              </li>
            )}
  
            {!loading && !error && options.length === 0 && query.trim().length >= minQueryLength && (
              <li style={{ padding: 8 }}>No results found.</li>
            )}
  
            {!loading &&
              !error &&
              options.map((option, index) => {
                const label = getOptionLabel(option);
                const isHighlighted = index === highlightedIndex;
  
                return (
                  <li
                    key={`${label}-${index}`}
                    id={`${listboxId}-option-${index}`}
                    role="option"
                    aria-selected={isHighlighted}
                    onMouseDown={(e) => {
                      // Prevent input blur before selection
                      e.preventDefault();
                      selectOption(option);
                    }}
                    style={{
                      padding: 8,
                      cursor: "pointer",
                      background: isHighlighted ? "#eee" : "white",
                    }}
                  >
                    {label}
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    );
  }