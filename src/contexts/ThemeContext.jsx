import { createContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
const KEY = "pp_theme";

function getInitialTheme() {
  const saved = localStorage.getItem(KEY);
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    typeof window === "undefined" ? "dark" : getInitialTheme(),
  );

  useEffect(() => {
    localStorage.setItem(KEY, theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;

