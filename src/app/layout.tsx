import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "./components/main.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currency Converter",
  description: "currency converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main></Main>
        {children}
      </body>
    </html>
  );
}
