import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="w-full py-20 max-sm:py-16 px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 ">
      <div className="w-full flex items-center justify-center gap-10">
        <div className="w-full">
          <h2 className="text-4xl max-sm:text-3xl font-extrabold max-lg:text-center  ">
            <span className="text-gradient">Kom i</span>{" "}
            <span className="text-primary-600">kontakt</span>{" "}
          </h2>
          <p className=" mt-6 text-lg max-sm:text-base text-secondary-600 max-lg:text-center max-w-xl max-lg:mx-auto ">
            Hvis du har spørsmål, kan du gjerne kontakte oss ved å fylle ut
            skjemaet nedenfor. Vi vil gjøre vårt beste for å hjelpe deg så raskt
            som mulig.
          </p>

          <ContactForm />
        </div>
        <div className="w-full max-lg:hidden ">
          <Image
            src="/contact-us.png"
            alt="contact-us"
            width={700}
            height={700}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
