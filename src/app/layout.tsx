import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Kundeklubb1",
  description:
    "Kundeklubb1 is a revenue-boosting loyalty platform that enables you to identify, reach, and keep your customers. Kundeklubb1 makes it easy to use data for personalized communication within your very own marketing channel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-light max-w-[1440px] m-auto relative `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
