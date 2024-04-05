import Image from "next/image";
import React from "react";
import logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Feed from "../../public/assets/Feed.svg";
import Twitter from "../../public/assets/X.svg";

const Footer = () => {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={logo} alt="logo" />
        <p className="font-bold text-[17px] text-[#36485C]">Souli.</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] text-[16px]">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className="pt-[56px] text-center font-medium text-[#5F7896]">
        © Copyright 2024. Souli. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={Facebook} alt="facebook" />
        <Image src={Feed} alt="Feed" />
        <Image src={Twitter} alt="Twitter" />
      </div>
    </div>
  );
};

export default Footer;
