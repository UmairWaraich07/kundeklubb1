import Image from "next/image";
import React from "react";

const WhatIs = () => {
  return (
    <section className="w-full pt-32 max-lg:pt-24 pb-16 max-sm:pb-12">
      <h2 className="text-center font-extrabold text-4xl max-sm:text-3xl">
        <span className="text-gradient">What’s in</span>{" "}
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
            Sell MORE for less!
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
            Auto GDPR/TCPA compliance
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
            Know your customers!
          </h4>
        </div>

        {/* Show this only on tablets */}
        <div className="space-y-4 lg:hidden max-sm:hidden ">
          <div className=" max-sm:hidden px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
            <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
              Effortless Customer Retention
            </h4>
            <p className="text-base text-secondary-600 ">
              A loyalty program makes it so much easier to get customers back to
              your store.
            </p>
          </div>
          <div className=" max-sm:hidden px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
            <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
              Consent-Driven Communication
            </h4>
            <p className="text-base text-secondary-600 ">
              A store CANNOT communicate with its customers without their
              consent.
            </p>
          </div>
        </div>

        <div className="  max-lg:hidden px-4 py-8 max-lg:py-6  space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Effortless Customer Retention
          </h4>
          <p className="text-base text-secondary-600 ">
            A loyalty program makes it so much easier to get customers back to
            your store.
          </p>
        </div>
        <div className="  max-lg:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Consent-Driven Communication
          </h4>
          <p className="text-base text-secondary-600 ">
            A store CANNOT communicate with its customers without their consent.
          </p>
        </div>
        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Customer Insights Simplified
          </h4>
          <p className="text-base text-secondary-600 ">
            With Kundeklubb1 you can analyze your customers’ interests and
            purchase patterns.
          </p>
        </div>
        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Own Your Marketing
          </h4>
          <p className="text-base text-secondary-600 ">
             With Kudeklubb1, you OWN a direct marketing channel and all
            customer data. This means you can spend less on expensive marketing
            and be more profitable.
          </p>
        </div>
        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Automated Consent Compliance
          </h4>
          <p className="text-base text-secondary-600 ">
            Kundeklubb1 members automatically give their TCPA & GDPR approved
            consent, which means you can communicate directly with them in your
            own marketing channel.
          </p>
        </div>

        <div className=" max-sm:hidden px-4 py-8 max-lg:py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Personalized Loyalty Campaigns
          </h4>
          <p className="text-base text-secondary-600 ">
             This means that you can run targeted, personalized campaigns to
            make your customers more loyal - also when they&apos;re not in your
            store.
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
            Sell MORE for less!
          </h4>
        </div>

        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Effortless Customer Retention
          </h4>
          <p className="text-base text-secondary-600 ">
            A loyalty program makes it so much easier to get customers back to
            your store.
          </p>
        </div>
        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Consent-Driven Communication
          </h4>
          <p className="text-base text-secondary-600 ">
            A store CANNOT communicate with its customers without their consent.
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
            Auto GDPR/TCPA compliance
          </h4>
        </div>
        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Customer Insights Simplified
          </h4>
          <p className="text-base text-secondary-600 ">
            With Kundeklubb1 you can analyze your customers’ interests and
            purchase patterns.
          </p>
        </div>
        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Own Your Marketing
          </h4>
          <p className="text-base text-secondary-600 ">
             With Kudeklubb1, you OWN a direct marketing channel and all
            customer data. This means you can spend less on expensive marketing
            and be more profitable.
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
            Know your customers!
          </h4>
        </div>

        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Automated Consent Compliance
          </h4>
          <p className="text-base text-secondary-600 ">
            Kundeklubb1 members automatically give their TCPA & GDPR approved
            consent, which means you can communicate directly with them in your
            own marketing channel.
          </p>
        </div>

        <div className=" px-4 py-6 space-y-2 rounded-lg border border-primary-400/40 hover:border-primary-600 bg-[#F6FAFF4D] cursor-pointer shadow-sm">
          <h4 className="text-left font-bold max-md:text-base text-lg text-dark ">
            Personalized Loyalty Campaigns
          </h4>
          <p className="text-base text-secondary-600 ">
             This means that you can run targeted, personalized campaigns to
            make your customers more loyal - also when they&apos;re not in your
            store.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
