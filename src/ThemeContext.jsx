import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const themes = {
  dark: {
    pageBg: "#0f172a",
    heroBg: "#0f172a",
    heroBorder: "#1e293b",
    cardBg: "#1e293b",
    cardBorder: "#334155",
    cardBorderHover: null, // overridden per plan
    textPrimary: "#f1f5f9",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    metaRowBg: "#0f172a",
    metaRowBorder: "#1e293b",
    sidebarBg: "#1e293b",
    sidebarBorder: "#334155",
    sidebarDotInactive: "#334155",
    inputBg: "#0f172a",
    divider: "#1e293b",
    greenCardBg: "#052e16",
    greenCardBorder: "#14532d",
    greenCardText: "#86efac",
    amberCardBg: "#1c1003",
    amberCardBorder: "#78350f",
    amberCardText: "#fcd34d",
    summaryText: "#94a3b8",
    navBg: "rgba(15, 23, 42, 0.85)",
    navBorder: "#1e293b",
    tagInactive: "#475569",
    tagHover: "#1e293b",
    footerText: "#334155",
    pillBg: "#1e293b",
    reflectionsCardBg: "#1a1a2e",
    reflectionsCardBorder: "#312e81",
    reflectionsIconBg: "#1e1b4b",
    reflectionsIconColor: "#a5b4fc",
    reflectionsText: "#a5b4fc",
  },
  light: {
    pageBg: "#f8fafc",
    heroBg: "#ffffff",
    heroBorder: "#e2e8f0",
    cardBg: "#ffffff",
    cardBorder: "#e2e8f0",
    textPrimary: "#0f172a",
    textSecondary: "#64748b",
    textMuted: "#374151",
    metaRowBg: "#f8fafc",
    metaRowBorder: "#e2e8f0",
    sidebarBg: "#ffffff",
    sidebarBorder: "#e2e8f0",
    sidebarDotInactive: "#e2e8f0",
    divider: "#f1f5f9",
    greenCardBg: "#f0fdf4",
    greenCardBorder: "#bbf7d0",
    greenCardText: "#15803d",
    amberCardBg: "#fffbeb",
    amberCardBorder: "#fde68a",
    amberCardText: "#b45309",
    summaryText: "#475569",
    navBg: "rgba(255,255,255,0.85)",
    navBorder: "#e2e8f0",
    tagInactive: "#94a3b8",
    tagHover: "#f8fafc",
    footerText: "#cbd5e1",
    pillBg: "#f1f5f9",
    reflectionsCardBg: "#eef2ff",
    reflectionsCardBorder: "#c7d2fe",
    reflectionsIconBg: "#e0e7ff",
    reflectionsIconColor: "#4f46e5",
    reflectionsText: "#3730a3",
  },
};

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => setMode(m => m === "dark" ? "light" : "dark");
  const theme = themes[mode];

  return (
    <ThemeContext.Provider value={{ theme, mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
