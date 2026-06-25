import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inkway.com.ua"),
  title: {
    default: "INKWAY — Доставка по Ужгороду та околицях",
    template: "%s · INKWAY",
  },
  description:
    "INKWAY — швидка та надійна доставка по Ужгороду й околицях. Кур'єрська доставка, таксі та вивіз сміття. Працюємо щодня з 9:00 до 22:00.",
  keywords: [
    "доставка Ужгород",
    "кур'єр Ужгород",
    "таксі Ужгород",
    "вивіз сміття Ужгород",
    "INKWAY",
  ],
  openGraph: {
    title: "INKWAY — Доставка по Ужгороду та околицях",
    description:
      "Швидка та надійна доставка по Ужгороду й околицях. Працюємо щодня з 9:00 до 22:00.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
