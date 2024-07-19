import Image from "next/image";
import React from "react";
import { GeistMono } from "geist/font/mono";

const KnowYourCustomers = () => {
  return (
    <section className="w-full py-16 max-sm:py-12 ">
      <h2 className="text-4xl max-sm:text-3xl font-extrabold text-center  ">
        <span className="text-gradient">Get to know your </span>
        <span className="text-primary-600">customers</span>
      </h2>
      <div className="w-full grid grid-cols-2 max-xl:grid-cols-1 gap-x-4 gap-y-6 mt-16 max-sm:mt-10 ">
        <div className="bg-[#84B1FF4D] max-xl:order-1 rounded-lg w-full p-8 max-sm:p-6 max-w-[900px] mx-auto ">
          <div className="flex max-md:flex-col-reverse items-center justify-between gap-8">
            <div className="w-[60%] max-md:w-full ">
              <h4 className="text-2xl max-sm:text-xl font-bold">
                Understand Their <br /> Preferences
              </h4>
              <p className="text-base max-sm:text-sm text-secondary-600 mt-3 ">
                Gain deep insights into your customers&apos; preferences and
                behaviors. Our platform analyzes purchase patterns, browsing
                history, and interactions to help you tailor personalized
                experiences.
              </p>
            </div>
            <div className="w-[40%] max-md:w-full ">
              <Image
                src="/Inderstand their preference.png"
                alt="Understand Their Preferences"
                width={300}
                height={300}
                className="object-contain w-full h-[170px] "
              />
            </div>
          </div>
        </div>
        <div className="relative bg-[#28C9404D] max-xl:order-3  rounded-lg w-full p-8 max-sm:p-6 max-w-[900px] mx-auto  row-span-2 ">
          <div className="mt-12 max-sm:mt-4 relative">
            <Image
              src="/window.png"
              alt="Foster Lasting Relationships"
              width={300}
              height={300}
              className="object-contain w-full h-[250px] "
            />

            <div className="absolute -top-12 max-sm:-top-4 left-12 md:left-40 xl:left-12 max-sm:left-0 -right-[86px] max-lg:-right-[64px] max-sm:-right-[36px] space-y-6 max-sm:space-y-3 ">
              <div className="bg-light px-5 max-sm:px-3 max-sm:py-2 py-4 rounded-2xl flex items-center justify-between shadow-md ">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/Ellipse 26 (1).png"
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-cover max-sm:w-[32px] max-sm:h-[32px] "
                  />
                  <div>
                    <h4
                      className={`${GeistMono.className} font-semibold text-xs max-sm:text-[10px] `}
                    >
                      James Alexander
                    </h4>
                    <p
                      className={`font-semibold text-xs  max-sm:text-[10px] text-secondary-600 ${GeistMono.className}`}
                    >
                      Age 26, Maine
                    </p>
                  </div>
                </div>

                <div
                  className={`${GeistMono.className} text-[#20CD96] text-xs max-sm:text-[10px] font-extrabold`}
                >
                  Purchased a pair of shoe
                </div>
              </div>
              <div className="bg-light px-5 max-sm:px-3 max-sm:py-2 py-4 rounded-2xl flex items-center justify-between shadow-md">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/Ellipse 26.png"
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-cover max-sm:w-[32px] max-sm:h-[32px] "
                  />
                  <div>
                    <h4
                      className={`${GeistMono.className} font-semibold text-xs max-sm:text-[10px]`}
                    >
                      Olivia Jane
                    </h4>
                    <p
                      className={`font-semibold text-xs max-sm:text-[10px] text-secondary-600 ${GeistMono.className}`}
                    >
                      Age 44, ND
                    </p>
                  </div>
                </div>

                <div
                  className={`${GeistMono.className} text-[#20CD96] text-xs max-sm:text-[10px] font-extrabold`}
                >
                  Earned 2900 points
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 max-sm:mt-0 ">
            <h4 className="text-2xl max-sm:text-xl font-bold">
              Measure Engagement and <br /> Loyalty
            </h4>
            <p className="text-base max-sm:text-sm text-secondary-600 mt-3 ">
              Track customer engagement and loyalty metrics effortlessly. Our
              analytics tools provide real-time feedback on program
              effectiveness, helping you optimize strategies and maximize
              customer retention.
            </p>
          </div>
        </div>
        <div className="bg-[#FFE5004D] max-xl:order-2  rounded-lg w-full p-8 max-sm:p-6 max-w-[900px] mx-auto  ">
          <div className="flex max-md:flex-col-reverse items-center justify-between gap-8">
            <div className="w-[60%] max-md:w-full ">
              <h4 className="text-2xl max-sm:text-xl font-bold">
                Foster Lasting <br /> Relationships
              </h4>
              <p className="text-base max-sm:text-sm text-secondary-600 mt-3 ">
                Build strong, lasting relationships by understanding what
                matters most to your customers. Engage with targeted rewards,
                exclusive offers, and personalized communications that resonate
                with their interests.
              </p>
            </div>
            <div className="w-[40%] max-md:w-full ">
              <Image
                src="/Relationship graphic.png"
                alt="Foster Lasting Relationships"
                width={300}
                height={300}
                className="object-contain w-full h-[170px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowYourCustomers;
