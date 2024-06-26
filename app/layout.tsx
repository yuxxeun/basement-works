import { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import SmoothScrolling from "@/components/core/SmoothScroll";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Basement Works®️",
  description: "Basement Works Homebase",
};

const geistSans = GeistSans;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <Head>
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async defer src="https://umami.bsmnt.pro/script.js" data-website-id="e7618938-1309-4ff1-84c6-79758421ddef" />
      </Head>
     </Head>
      <body className={geistSans.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
