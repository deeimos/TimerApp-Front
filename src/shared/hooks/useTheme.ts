"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [manualTheme, setManualTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (manualTheme) {
      setTheme(manualTheme);
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(media.matches ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [manualTheme]);

  const toggleTheme = () => {
    setManualTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const resetTheme = () => {
    setManualTheme(null);
  };

  return { theme, toggleTheme, resetTheme };
}
