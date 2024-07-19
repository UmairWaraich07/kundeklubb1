import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Kundeklubb1",
  description:
    "Kundeklubb1 er en inntektsøkende lojalitetsplattform som gjør det mulig for deg å identifisere, nå ut til, og beholde kundene dine. Kundeklubb1 gjør det enkelt å bruke data til personlig kommunikasjon innenfor din egen markedsføringskanal.",
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
