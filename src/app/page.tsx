import {
  ContactUs,
  Features,
  Hero,
  KnowYourCustomers,
  Partners,
  WhatIs,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen w-full ">
      <Hero />
      <div className="w-full px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 ">
        <WhatIs />
        <KnowYourCustomers />
        <Partners />
      </div>
      <Features />
      <ContactUs />
    </main>
  );
}
