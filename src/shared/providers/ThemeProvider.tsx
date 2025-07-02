"use client";

import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import useMounted from "@/shared/hooks/useMounted";

export const metadata: Metadata = {
  title: "TimerApp",
  description: "Посмотреть сколько осталось врмемени до события",
};

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
