import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="w-full py-16 max-sm:py-10 px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 bg-[#F0F7FF] ">
      <h2 className="text-4xl max-sm:text-3xl font-extrabold text-center ">
        <span className="text-gradient">Enjoy Endless</span>{" "}
        <span className="text-primary-600">Features</span>{" "}
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
              Integrations with Leading <br /> Platforms
            </h4>
            <p className="text-base text-secondary-600">
              Kundeklubb1 is deeply integrated into world-leading eCommerce and
              POS ecosystems. It helps connect your customer data, whether they
              shop online or onsite. Seamless integration ensures a unified
              experience across all sales channels.
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
              GDPR and TCPA Compliance <br /> Ensured
            </h4>
            <p className="text-base text-secondary-600">
              All data gathered by Kundeklubb1 follows the guidelines set by the
              TCPA (US) and adheres to GDPR (EU) legislation. We ensure that the
              customer and personal data collected are compliant, providing
              peace of mind for your business and your customers.
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
              Advanced Analytics <br /> and Insights
            </h4>
            <p className="text-base text-secondary-600">
              Measure your impact with powerful analytic tools. Understand your
              customers&apos; buying habits and preferences. Kundeklubb1 CRM
              provides a comprehensive view of your customer base, measuring
              conversion rates and ROI for better decisions.
            </p>
          </div>
          <div className="w-[40%] max-md:w-full  flex items-center justify-center ">
            <Image
              src="/Dashboard frame (1).png"
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
