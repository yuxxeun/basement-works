import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });
const geistSans = GeistSans;

export const metadata: Metadata = {
  title: "Basement Works®️",
  description: "The Homebase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        {children}
      </body>
    </html>
  );
}
