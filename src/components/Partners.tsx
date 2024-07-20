import Image from "next/image";
import React from "react";

const logos = [
  {
    name: "airbnb",
    path: "/airbnb.png",
  },
  {
    name: "fedex",
    path: "/fedex.png",
  },
  {
    name: "merck",
    path: "/merck.png",
  },
  {
    name: "zendesk",
    path: "/zendesk.png",
  },
  {
    name: "puma",
    path: "/puma.png",
  },
  {
    name: "airbnb",
    path: "/airbnb.png",
  },
  {
    name: "fedex",
    path: "/fedex.png",
  },
  {
    name: "merck",
    path: "/merck.png",
  },
  {
    name: "zendesk",
    path: "/zendesk.png",
  },
  {
    name: "puma",
    path: "/puma.png",
  },
];

const Partners = () => {
  return (
    <section className="w-full pt-16 pb-28 max-sm:pt-12 max-sm:pb-20 overflow-hidden">
      <h2 className="text-4xl max-sm:text-3xl font-extrabold text-center  ">
        <span className="text-gradient">Et utvalg av våre </span>{" "}
        <span className="text-gradient">kunder</span>
      </h2>

      <div className="mt-16 logos">
        <div className="logos-slide w-full flex items-center justify-between gap-[80px] max-sm:gap-[40px] ">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.path}
              alt={logo.name}
              width={120}
              height={120}
              className="object-cover w-full h-[35px] max-sm:h-[28px] "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
