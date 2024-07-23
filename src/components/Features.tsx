import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="w-full py-16 px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 bg-[#F0F7FF] ">
      <h2 className="text-4xl max-sm:text-3xl font-extrabold text-center ">
        <span className="text-gradient">Nyt uendelige</span>{" "}
        <span className="text-primary-600">funksjoner</span>{" "}
      </h2>

      <div className="mt-16 max-sm:mt-10 space-y-6">
        <div className=" p-8 max-lg:p-6 w-full flex max-md:flex-col items-center justify-center gap-6 max-w-[1200px] mx-auto bg-white rounded-lg shadow-sm ">
          <div className="space-y-4 max-sm:space-y-3 w-[60%] max-md:w-full  ">
            <Image
              src="/integrated-circuit-chip.svg"
              alt="verified"
              width={40}
              height={40}
              className="h-10 w-10 max-md:h-8 max-md:w-8 object-cover"
            />

            <h4 className="text-2xl max-sm:text-xl font-bold">
              (Snart) Integrasjoner med ledende <br /> plattformer
            </h4>
            <p className="text-base text-secondary-600">
              Kundeklubb1 blir dypt integrert i verdensledende eCommerce- og
              POS-økosystemer. Det hjelper med å koble sammen kundedata, enten
              de handler på nett eller i butikk. Sømløs integrasjon sikrer en
              enhetlig opplevelse på tvers av alle salgskanaler.
            </p>
          </div>
          <div className="w-[40%] max-md:w-full flex items-center justify-center ">
            <Image
              src="/Logos.png"
              alt="platform-logos"
              width={400}
              height={300}
              className="object-contain w-[300px] h-[200px] "
            />
          </div>
        </div>
        <div className=" p-8 max-lg:p-6 max-sm:p-4 w-full flex max-md:flex-col items-center justify-center gap-6 max-w-[1200px] mx-auto bg-white rounded-lg shadow-sm ">
          <div className="space-y-4 max-sm:space-y-3 w-[60%] max-md:w-full ">
            <Image
              src="/material-symbols_verified-user.svg"
              alt="verified"
              width={40}
              height={40}
              className="h-10 w-10 max-sm:h-8 max-sm:w-8 object-cover"
            />

            <h4 className="text-2xl max-sm:text-xl font-bold">
              GDPR- og TCPA-overholdelse <br /> sikret
            </h4>
            <p className="text-base text-secondary-600">
              All data samlet inn av Kundeklubb1 følger retningslinjene satt av
              TCPA (USA) og overholder GDPR (EU) lovgivning. Vi sørger for at
              kundens og personlige data er i samsvar med regelverket, og gir
              trygghet for både din virksomhet og dine kunder.
            </p>
          </div>
          <div className="w-[40%] max-md:w-full  flex items-center justify-center ">
            <Image
              src="/Ensured image.png"
              alt="ensured-image"
              width={400}
              height={300}
              className="object-contain w-[300px] h-[200px] "
            />
          </div>
        </div>
        <div className=" p-8 max-lg:p-6 max-sm:p-4 w-full flex max-md:flex-col items-center justify-center gap-6 max-w-[1200px] mx-auto bg-white rounded-lg shadow-sm ">
          <div className="space-y-4 max-sm:space-y-3 w-[60%] max-md:w-full  ">
            <Image
              src="/analytics.svg"
              alt="analytics"
              width={40}
              height={40}
              className="h-10 w-10 max-sm:h-8 max-sm:w-8 object-cover"
            />

            <h4 className="text-2xl max-sm:text-xl font-bold">
              Avanserte analyser og <br /> innsikter
            </h4>
            <p className="text-base text-secondary-600">
              Mål din påvirkning med kraftige analyseverktøy. Forstå kundenes
              kjøpsvaner og preferanser. Kundeklubb1 CRM gir en omfattende
              oversikt over kundebasen din, og måler konverteringsrater og ROI
              for bedre beslutninger.
            </p>
          </div>
          <div className="w-[40%] max-md:w-full  flex items-center justify-center ">
            <Image
              src="/dashboard.png"
              alt="dashboard-image"
              width={400}
              height={400}
              className="object-contain w-[300px] h-[250px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
