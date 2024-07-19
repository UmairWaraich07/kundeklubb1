import Image from "next/image";
import React from "react";

const SMSEmail = () => {
  return (
    <section className=" py-16 max-sm:py-12 w-full flex max-lg:flex-col items-start justify-between gap-10 max-lg:gap-14 ">
      <div className="w-[50%] max-lg:w-full flex-1">
        <h2 className="text-4xl max-sm:text-3xl font-extrabold max-lg:text-center ">
          <span className="text-gradient">A frictionless</span>{" "}
          <span className="text-primary-600">SMS and Email</span>{" "}
          <br className="max-sm:hidden" />{" "}
          <span className="text-gradient">marketing experience</span>
        </h2>

        <p className=" mt-5 max-lg:text-center text-lg max-sm:text-base max-w-2xl max-lg:mx-auto text-secondary-600">
          Start building meaningful relationships with your customers from the
          moment they join your list. Our SMS and Email autopilot ensures
          seamless engagement from their first interaction, through their
          initial purchase, and beyond. Enhance customer loyalty and drive
          repeat business effortlessly with our automated marketing solutions.
        </p>

        <div className="flex max-lg:items-center max-lg:justify-center">
          <button className="mt-8 btn-primary ">Book Demo</button>
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
