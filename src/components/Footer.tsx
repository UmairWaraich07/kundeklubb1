import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-10 w-full flex flex-col gap-4 items-center justify-center border-t border-[#4682f92c] ">
      <Logo />
      <p className="text-sm text-secondary-600">
        &copy; 2024 Kundeklubb1. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
