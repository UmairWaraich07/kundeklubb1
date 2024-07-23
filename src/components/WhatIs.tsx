import Image from "next/image";
import React from "react";

const WhatIs = () => {
  return (
    <section className="w-full pt-28 max-lg:pt-24 pb-16 max-sm:pb-12">
      <h2 className="text-center font-extrabold text-4xl max-sm:text-3xl">
        <span className="text-gradient">Hva kan man forvente i </span>{" "}
        <br className="max-sm:hidden" />
        <span className="text-primary-600">Kundeklubb1?</span>
      </h2>
      <div className="max-sm:hidden mt-16 max-sm:mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start ">
        <div className="p-4 space-y-4 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm ">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/Sale increase screen.png"
              alt="sale"
              width={400}
              height={400}
              className="object-contain h-[250px] w-[300px] "
            />
          </div>
          <h4 className="text-left font-bold max-xl:text-lg max-md:text-base text-xl text-dark ">
            Høyere inntjening
          </h4>
        </div>
        <div className=" space-y-4 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <div className=" bg-grid-pattern bg-cover h-[250px] bg-no-repeat bg-bottom w-full flex items-center justify-center">
            <Image
              src="/graphic-auto.png"
              alt="graphic"
              width={400}
              height={400}
              className="object-contain object-bottom h-[200px] w-[240px]  rounded-md "
            />
          </div>
          <h4 className=" p-4 text-left font-bold max-xl:text-lg max-md:text-base text-xl text-dark ">
            GDPR/TCPA-overholdelse
          </h4>
        </div>
        <div className="p-4 space-y-4 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/KNow customer.png"
              alt="customers"
              width={400}
              height={400}
              className="object-contain h-[250px] w-[300px] "
            />
          </div>
          <h4 className="text-left font-bold max-xl:text-lg max-md:text-base text-xl text-dark ">
            Få et større innblikk i kundene
          </h4>
        </div>

        {/* Show this only on tablets */}
        <div className="space-y-4 lg:hidden max-sm:hidden ">
          <div className=" max-sm:hidden px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
            <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
              Problemfri kundelojalitet
            </h4>
            <p className="text-base text-secondary-600 ">
              Et lojalitetsprogram gjør det mye enklere å få kundene tilbake til
              butikken din.
            </p>
          </div>
          <div className=" max-sm:hidden px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
            <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
              Samtykkedrevet kommunikasjon
            </h4>
            <p className="text-base text-secondary-600 ">
              En butikk KAN IKKE kommunisere med kundene sine uten deres
              samtykke.
            </p>
          </div>
        </div>

        <div className="  max-lg:hidden px-4 py-8 max-lg:py-6  space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Problemfri kundelojalitet
          </h4>
          <p className="text-base text-secondary-600 ">
            Et lojalitetsprogram gjør det mye enklere å få kundene tilbake til
            butikken din.
          </p>
        </div>
        <div className="  max-lg:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Samtykkedrevet kommunikasjon
          </h4>
          <p className="text-base text-secondary-600 ">
            En butikk KAN IKKE kommunisere med kundene sine uten deres samtykke.
          </p>
        </div>
        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Forenklede kundeinnsikter
          </h4>
          <p className="text-base text-secondary-600 ">
            Med Kundeklubb1 kan du enkelt analysere kundenes interesser og
            kjøpsmønstre.
          </p>
        </div>
        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Eie markedsføringen din
          </h4>
          <p className="text-base text-secondary-600 ">
             Med Kundeklubb1 EIER du en direkte markedsføringskanal og alle
            kundedata. Dette betyr at du kan bruke mindre på kostbar
            markedsføring og bli mer lønnsom.
          </p>
        </div>
        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Samtykkeoverholdelse
          </h4>
          <p className="text-base text-secondary-600 ">
            Kundeklubb1-medlemmer gir automatisk sitt TCPA- og GDPR-godkjente
            samtykke, noe som betyr at du kan kommunisere direkte med dem i din
            egen markedsføringskanal.
          </p>
        </div>

        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Personlige lojalitetskampanjer
          </h4>
          <p className="text-base text-secondary-600 ">
             Dette betyr at du kan kjøre målrettede og personlige kampanjer for
            å gjøre kundene dine mer lojale og engasjerte – også når de ikke er
            i butikken din.
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className=" sm:hidden mt-16 max-sm:mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-start ">
        {/* Part 1 */}
        <div className="p-4 space-y-4 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm ">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/Sale increase screen.png"
              alt="sale"
              width={400}
              height={400}
              className="object-contain h-[250px] w-[300px] "
            />
          </div>
          <h4 className="text-left font-bold max-xl:text-lg max-md:text-base text-xl text-dark ">
            Høyere inntjening
          </h4>
        </div>

        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Problemfri kundelojalitet
          </h4>
          <p className="text-base text-secondary-600 ">
            Et lojalitetsprogram gjør det mye enklere å få kundene tilbake til
            butikken din.
          </p>
        </div>
        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Samtykkedrevet kommunikasjon
          </h4>
          <p className="text-base text-secondary-600 ">
            En butikk KAN IKKE kommunisere med kundene sine uten deres samtykke.
          </p>
        </div>

        {/* Part 2 */}
        <div className=" space-y-4 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <div className=" bg-grid-pattern bg-cover h-[250px] bg-no-repeat bg-bottom w-full flex items-center justify-center">
            <Image
              src="/graphic-auto.png"
              alt="graphic"
              width={400}
              height={400}
              className="object-contain object-bottom h-[200px] w-[240px]  rounded-md "
            />
          </div>
          <h4 className=" p-4 text-left font-bold max-xl:text-lg max-md:text-base text-xl text-dark ">
            GDPR/TCPA-overholdelse
          </h4>
        </div>
        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Forenklede kundeinnsikter
          </h4>
          <p className="text-base text-secondary-600 ">
            Med Kundeklubb1 kan du enkelt analysere kundenes interesser og
            kjøpsmønstre.
          </p>
        </div>
        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Eie markedsføringen din
          </h4>
          <p className="text-base text-secondary-600 ">
             Med Kundeklubb1 EIER du en direkte markedsføringskanal og alle
            kundedata. Dette betyr at du kan bruke mindre på kostbar
            markedsføring og bli mer lønnsom.
          </p>
        </div>

        {/* Part 3 */}
        <div className="p-4 space-y-4 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/KNow customer.png"
              alt="customers"
              width={400}
              height={400}
              className="object-contain h-[250px] w-[300px] "
            />
          </div>
          <h4 className="text-left font-bold max-xl:text-lg max-md:text-base text-xl text-dark ">
            Få et større innblikk i kundene
          </h4>
        </div>

        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Samtykkeoverholdelse
          </h4>
          <p className="text-base text-secondary-600 ">
            Kundeklubb1-medlemmer gir automatisk sitt TCPA- og GDPR-godkjente
            samtykke, noe som betyr at du kan kommunisere direkte med dem i din
            egen markedsføringskanal.
          </p>
        </div>

        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Personlige lojalitetskampanjer
          </h4>
          <p className="text-base text-secondary-600 ">
             Dette betyr at du kan kjøre målrettede og personlige kampanjer for
            å gjøre kundene dine mer lojale og engasjerte – også når de ikke er
            i butikken din.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
