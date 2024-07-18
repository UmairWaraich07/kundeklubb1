import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#F0F7FF] w-full px-16 max-lg:px-12 max-md:px-8 max-sm:px-4">
      <h1 className="text-dark max-lg:text-center max-lg:max-w-[600px] max-lg:mx-auto text-6xl max-lg:text-5xl max-sm:text-4xl font-extrabold pt-[15vh] z-20">
        <span className="text-gradient">
          Turn one-time shoppers <br className="max-lg:hidden" /> into
        </span>{" "}
        <span className="text-primary-600">loyal customers</span>
      </h1>
      <div className=" mt-10 w-full flex max-lg:flex-col items-start max-lg:items-center justify-between gap-10  ">
        <div className="max-w-[650px] lg:w-[55%] ">
          <p className="text-xl max-sm:text-lg text-secondary-600 max-lg:text-center ">
            Kundeklubb1 is a{" "}
            <span className="text-dark">revenue-boosting loyalty platform</span>{" "}
            that enables you to identify, reach, and keep your customers.
            Kundeklubb1 makes it easy to use data for personalized communication
            within your very own marketing channel.
          </p>
          <div className=" mt-12 w-full flex items-center justify-start max-lg:justify-center gap-5">
            <button className="btn-secondary">Watch Video</button>
            <button className="btn-primary">Book Demo</button>
          </div>
        </div>

        <div className="w-full lg:w-[45%]  overflow-hidden flex items-start justify-center  max-lg:h-[400px] max-sm:h-[300px] max-lg:max-w-[500px] max-sm:max-w-[400px]  lg:-mt-24">
          <Image
            src="/hero-image.png"
            alt="hero-image"
            width={500}
            height={700}
            className="object-cover object-top w-full h-full  "
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
