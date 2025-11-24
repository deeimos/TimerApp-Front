"use client";

import { DefaultTheme, ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";
import { themes } from "@/shared/const/theme";
import useTheme from "@/shared/hooks/useTheme";

export const GlobalStyles = createGlobalStyle<{ themeMode: "light" | "dark" }>`
  body {
    background-color: ${({ themeMode }) => themes[themeMode].bgColor};
    color: ${({ themeMode }) => themes[themeMode].textColor};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-align: center;
  }
`;

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  if (!theme) return null;

  return (
    <>
      <StyledThemeProvider theme={themes[theme] as DefaultTheme}>
        <GlobalStyles themeMode={theme} />
        {children}
      </StyledThemeProvider>
    </>
  );
}
