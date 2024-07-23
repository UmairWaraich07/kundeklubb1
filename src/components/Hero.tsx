import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#F0F7FF] w-full px-16 max-lg:px-12 max-md:px-8 max-sm:px-4">
      <h1 className="text-dark max-lg:text-center max-lg:max-w-[600px] max-lg:mx-auto text-6xl max-lg:text-5xl  font-extrabold pt-[15vh] z-20">
        <span className="text-gradient">Gjør nye kunder til</span>{" "}
        <br className="max-lg:hidden" />
        <span className="text-primary-600">lojale kunder</span>
      </h1>
      <div className=" mt-10 w-full flex max-lg:flex-col items-start max-lg:items-center justify-between gap-10  ">
        <div className="max-w-[650px] lg:w-[55%] ">
          <p className="text-xl max-sm:text-lg text-secondary-600 max-lg:text-center ">
            Kundeklubb1 er en{" "}
            <span className="text-dark">lønnsom lojalitetsplattform</span> som
            hjelper deg med å identifisere, nå ut til, og beholde dine kunder.
            Med Kundeklubb1 kan du enkelt bruke data for å personliggjøre
            kommunikasjonen i dine egne markedsføringskanaler.
          </p>
          <div className=" mt-12 w-full flex items-center justify-start max-lg:justify-center gap-5">
            <button className="btn-secondary">Se video</button>
            <button className="btn-primary">Bestill Demo</button>
          </div>
        </div>

        <div className="w-full lg:w-[45%]  overflow-hidden flex items-start justify-center  max-lg:h-[400px] max-sm:h-[300px] max-lg:max-w-[500px] max-sm:max-w-[400px]  lg:-mt-40">
          <Image
            src="/hero-image.png"
            alt="hero-image"
            width={500}
            height={700}
            className="object-cover object-top w-full h-full  "
            priority
          />
        </div>
      </div>

      <div className="absolute max-lg:hidden bottom-0 left-0">
        <Image
          src="/hero-ellipse.png"
          alt="ellipse"
          width={250}
          height={250}
          className="object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
