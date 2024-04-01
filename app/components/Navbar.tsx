import Image from "next/image";
import React from "react";
import logo from "../../public/assets/Logo.svg";
import menu from "../../public/assets/Menu.svg";
import user from "../../public/assets/User.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-[30px] lg:py-[24px]">
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, idx) => (
            <p key={idx} className="text-[#36485C] font-medium">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <div className="flex items-center gap-x-2">
          <Image src={user} alt="user" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign In
          </span>
        </div>
        <Image src={menu} alt="menu" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
