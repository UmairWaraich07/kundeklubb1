import Image from "next/image";
import React from "react";

const SMSEmail = () => {
  return (
    <section className=" py-16 max-sm:py-12 w-full flex max-lg:flex-col items-start justify-between gap-10 max-lg:gap-14 ">
      <div className="w-[50%] max-lg:w-full flex-1">
        <h2 className="text-4xl max-sm:text-3xl font-extrabold max-lg:text-center ">
          <span className="text-gradient">En sømløs</span>{" "}
          <span className="text-primary-600">SMS- og e-post</span>{" "}
          <br className="max-sm:hidden" />{" "}
          <span className="text-gradient">markedsføringsopplevelse</span>
        </h2>

        <p className=" mt-5 max-lg:text-center text-lg max-sm:text-base max-w-2xl max-lg:mx-auto text-secondary-600">
          Begynn å bygge meningsfulle relasjoner med kundene dine fra det
          øyeblikket de blir med på listen din. Vår SMS- og e-post-autopilot
          sikrer sømløst engasjement fra deres første interaksjon, gjennom deres
          første kjøp, og videre. Styrk kundelojalitet og driv gjentakende
          virksomhet uten anstrengelse med våre automatiserte
          markedsføringsløsninger.
        </p>

        <div className="flex max-lg:items-center max-lg:justify-center">
          <button className="mt-8 btn-primary ">Bestill Demo</button>
        </div>
      </div>
      <div className="w-[40%] lg:h-[400px] max-lg:w-full relative">
        <Image
          src="/Graphic-Email and sms.png"
          alt="Email & SMS"
          width={600}
          height={600}
          className="object-contain w-full h-full max-lg:max-h-[350px] "
        />
      </div>
    </section>
  );
};

export default SMSEmail;
