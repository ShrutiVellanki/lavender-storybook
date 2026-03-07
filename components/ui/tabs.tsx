import React, {
    createContext,
    useContext,
    useId,
    useMemo,
    useState,
    ReactNode,
    KeyboardEvent,
  } from "react";
  
  type TabsContextValue = {
    value: string;
    setValue: (value: string) => void;
    baseId: string;
    orientation: "horizontal" | "vertical";
  };
  
  const TabsContext = createContext<TabsContextValue | null>(null);
  
  function useTabsContext() {
    const ctx = useContext(TabsContext);
    if (!ctx) {
      throw new Error("Tabs components must be used within <Tabs>");
    }
    return ctx;
  }
  
  type TabsProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
    children: ReactNode;
  };
  
  export function Tabs({
    value,
    defaultValue,
    onValueChange,
    orientation = "horizontal",
    children,
  }: TabsProps) {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const selectedValue = isControlled ? value! : internalValue;
    const baseId = useId();
  
    const setValue = (next: string) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    };
  
    const contextValue = useMemo(
      () => ({
        value: selectedValue,
        setValue,
        baseId,
        orientation,
      }),
      [selectedValue, baseId, orientation]
    );
  
    return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
  }
  
  type TabsListProps = {
    children: ReactNode;
    "aria-label"?: string;
  };
  
  export function TabsList({ children, "aria-label": ariaLabel }: TabsListProps) {
    const { orientation } = useTabsContext();
  
    return (
      <div
        role="tablist"
        aria-orientation={orientation}
        aria-label={ariaLabel}
        style={{
          display: "flex",
          gap: 8,
          borderBottom: orientation === "horizontal" ? "1px solid #e5e7eb" : undefined,
          flexDirection: orientation === "horizontal" ? "row" : "column",
        }}
      >
        {children}
      </div>
    );
  }
  
  type TabsTriggerProps = {
    value: string;
    children: ReactNode;
    disabled?: boolean;
  };
  
  export function TabsTrigger({ value, children, disabled = false }: TabsTriggerProps) {
    const { value: activeValue, setValue, baseId, orientation } = useTabsContext();
    const selected = activeValue === value;
  
    const tabId = `${baseId}-tab-${value}`;
    const panelId = `${baseId}-panel-${value}`;
  
    function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
      const list = e.currentTarget.parentElement;
      if (!list) return;
  
      const tabs = Array.from(
        list.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
      );
      const currentIndex = tabs.indexOf(e.currentTarget);
      if (currentIndex === -1) return;
  
      const isHorizontal = orientation === "horizontal";
  
      let nextIndex: number | null = null;
  
      switch (e.key) {
        case "ArrowRight":
          if (isHorizontal) nextIndex = (currentIndex + 1) % tabs.length;
          break;
        case "ArrowLeft":
          if (isHorizontal) nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case "ArrowDown":
          if (!isHorizontal) nextIndex = (currentIndex + 1) % tabs.length;
          break;
        case "ArrowUp":
          if (!isHorizontal) nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = tabs.length - 1;
          break;
        default:
          break;
      }
  
      if (nextIndex !== null) {
        e.preventDefault();
        const nextTab = tabs[nextIndex];
        nextTab.focus();
        nextTab.click(); // automatic activation
      }
    }
  
    return (
      <button
        id={tabId}
        role="tab"
        type="button"
        aria-selected={selected}
        aria-controls={panelId}
        tabIndex={selected ? 0 : -1}
        disabled={disabled}
        onClick={() => setValue(value)}
        onKeyDown={handleKeyDown}
        style={{
          padding: "10px 14px",
          border: "none",
          borderBottom: selected ? "2px solid #111827" : "2px solid transparent",
          background: "transparent",
          cursor: disabled ? "not-allowed" : "pointer",
          fontWeight: selected ? 600 : 400,
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {children}
      </button>
    );
  }
  
  type TabsPanelProps = {
    value: string;
    children: ReactNode;
    forceMount?: boolean;
  };
  
  export function TabsPanel({ value, children, forceMount = false }: TabsPanelProps) {
    const { value: activeValue, baseId } = useTabsContext();
    const selected = activeValue === value;
  
    const tabId = `${baseId}-tab-${value}`;
    const panelId = `${baseId}-panel-${value}`;
  
    if (!selected && !forceMount) return null;
  
    return (
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId}
        hidden={!selected}
        tabIndex={0}
        style={{ padding: "16px 0" }}
      >
        {children}
      </div>
    );
  }