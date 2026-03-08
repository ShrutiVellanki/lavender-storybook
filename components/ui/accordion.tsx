import React, {
    createContext,
    ReactNode,
    useContext,
    useId,
    useMemo,
    useState,
    KeyboardEvent,
  } from "react";
  
  type AccordionType = "single" | "multiple";
  
  type AccordionContextValue = {
    type: AccordionType;
    openValues: string[];
    toggleValue: (value: string) => void;
    baseId: string;
  };
  
  const AccordionContext = createContext<AccordionContextValue | null>(null);
  
  function useAccordionContext() {
    const ctx = useContext(AccordionContext);
    if (!ctx) {
      throw new Error("Accordion components must be used within <Accordion>");
    }
    return ctx;
  }
  
  type AccordionProps = {
    type?: AccordionType;
    value?: string | string[];
    defaultValue?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    children: ReactNode;
  };
  
  export function Accordion({
    type = "single",
    value,
    defaultValue,
    onValueChange,
    children,
  }: AccordionProps) {
    const isControlled = value !== undefined;
  
    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue ?? (type === "single" ? "" : [])
    );
  
    const openValues = useMemo(() => {
      const rawValue = isControlled ? value : internalValue;
  
      if (type === "single") {
        return rawValue && typeof rawValue === "string" ? [rawValue] : [];
      }
  
      return Array.isArray(rawValue) ? rawValue : [];
    }, [isControlled, value, internalValue, type]);
  
    const setNextValue = (next: string | string[]) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    };
  
    const toggleValue = (itemValue: string) => {
      if (type === "single") {
        const currentlyOpen = openValues[0];
        const next = currentlyOpen === itemValue ? "" : itemValue;
        setNextValue(next);
        return;
      }
  
      const nextSet = new Set(openValues);
      if (nextSet.has(itemValue)) {
        nextSet.delete(itemValue);
      } else {
        nextSet.add(itemValue);
      }
      setNextValue(Array.from(nextSet));
    };
  
    const contextValue = useMemo(
      () => ({
        type,
        openValues,
        toggleValue,
        baseId: useId(),
      }),
      // baseId shouldn't be inside useMemo deps, so we'll restructure below
      []
    );
  
    // Avoid calling useId inside useMemo
    const baseId = useId();
  
    const finalContextValue = useMemo(
      () => ({
        type,
        openValues,
        toggleValue,
        baseId,
      }),
      [type, openValues, baseId]
    );
  
    return (
      <AccordionContext.Provider value={finalContextValue}>
        <div>{children}</div>
      </AccordionContext.Provider>
    );
  }
  
  type AccordionItemContextValue = {
    value: string;
    isOpen: boolean;
  };
  
  const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);
  
  function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);
    if (!ctx) {
      throw new Error("Accordion item components must be used within <AccordionItem>");
    }
    return ctx;
  }
  
  type AccordionItemProps = {
    value: string;
    children: ReactNode;
  };
  
  export function AccordionItem({ value, children }: AccordionItemProps) {
    const { openValues } = useAccordionContext();
    const isOpen = openValues.includes(value);
  
    return (
      <AccordionItemContext.Provider value={{ value, isOpen }}>
        <div style={{ borderBottom: "1px solid #e5e7eb" }}>{children}</div>
      </AccordionItemContext.Provider>
    );
  }
  
  type AccordionTriggerProps = {
    children: ReactNode;
  };
  
  export function AccordionTrigger({ children }: AccordionTriggerProps) {
    const { toggleValue, baseId } = useAccordionContext();
    const { value, isOpen } = useAccordionItemContext();
  
    const triggerId = `${baseId}-trigger-${value}`;
    const contentId = `${baseId}-content-${value}`;
  
    function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
      const container = e.currentTarget.closest("[data-accordion-root]");
      const root = container ?? e.currentTarget.parentElement?.parentElement?.parentElement;
      if (!root) return;
  
      const triggers = Array.from(
        root.querySelectorAll<HTMLButtonElement>("[data-accordion-trigger]")
      );
      const currentIndex = triggers.indexOf(e.currentTarget);
      if (currentIndex === -1) return;
  
      let nextIndex: number | null = null;
  
      switch (e.key) {
        case "ArrowDown":
          nextIndex = (currentIndex + 1) % triggers.length;
          break;
        case "ArrowUp":
          nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = triggers.length - 1;
          break;
        default:
          break;
      }
  
      if (nextIndex !== null) {
        e.preventDefault();
        triggers[nextIndex].focus();
      }
    }
  
    return (
      <h3 style={{ margin: 0 }}>
        <button
          id={triggerId}
          data-accordion-trigger
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => toggleValue(value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "100%",
            textAlign: "left",
            padding: "14px 16px",
            background: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{children}</span>
          <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
      </h3>
    );
  }
  
  type AccordionContentProps = {
    children: ReactNode;
    forceMount?: boolean;
  };
  
  export function AccordionContent({
    children,
    forceMount = false,
  }: AccordionContentProps) {
    const { baseId } = useAccordionContext();
    const { value, isOpen } = useAccordionItemContext();
  
    const triggerId = `${baseId}-trigger-${value}`;
    const contentId = `${baseId}-content-${value}`;
  
    if (!isOpen && !forceMount) return null;
  
    return (
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
        style={{
          padding: "0 16px 16px",
          color: "#374151",
        }}
      >
        {children}
      </div>
    );
  }