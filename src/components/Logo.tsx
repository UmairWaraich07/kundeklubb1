import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/Logo-e.png"
        alt="logo"
        width={200}
        height={60}
        className=" object-contain w-full h-8 max-sm:h-10 "
      />
    </Link>
  );
};

export default Logo;
