import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav
      className=" sticky top-0 z-50 bg-[#F0F7FF] w-full flex items-center justify-between gap-10
     py-4 max-sm:py-3 px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 border-b border-[#4682f92c]  "
    >
      <Logo />
      <div className="w-full flex items-center justify-end gap-4 max-sm:gap-2 ">
        <button className="btn-secondary ">Sign in</button>
        <button className="btn-primary max-sm:hidden">Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
