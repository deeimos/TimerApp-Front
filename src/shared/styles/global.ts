import { createGlobalStyle } from "styled-components";
import { themes } from "@/shared/const/theme";

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