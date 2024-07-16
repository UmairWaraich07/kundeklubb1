import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Kundeklubb1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-light max-w-[1440px] m-auto `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
