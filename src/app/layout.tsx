import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/shared/providers/ThemeProvider";
import { Metadata } from "next";
import Header from "@/widgets/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimerApp",
  description: "Посмотреть сколько осталось врмемени до события",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Header />
          <main style={{ paddingTop: "64px" }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
