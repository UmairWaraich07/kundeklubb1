import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 w-full flex flex-col gap-4 items-center justify-center border-t border-[#4682f92c] ">
      <Link href="/">
        <Image
          src="/Logo-e.png"
          alt="logo"
          width={200}
          height={60}
          className=" object-contain max-w-[150px] h-8 "
        />
      </Link>
      <p className="text-sm text-secondary-600">
        &copy; 2024 Kundeklubb1. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
