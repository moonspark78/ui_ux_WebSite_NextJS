import React from "react";
import Image from "next/image";
import arrow from "../../public/assets/arrow.png";

const Cta = () => {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-[32px] text-white font-medium leading-[40px] lg:text-[56px]">
        Monitor your website like a pro
      </h1>
      <p className="text-18px] leading-[24px] text-white pt-6 lg:pt-[48px] ">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex flex-col items-center w-full lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="bg-white text-[#EB2891] text-[18px] rounded-[4px] py-[16px] px-[32px] lg:w-[258px]">
          Try for free
        </button>
        <button className="flex w-full items-center justify-center gap-x-3 pt-[32px] text-white text-[18px] font-medium  lg:w-fit lg:mt-0">
          Contact Sales{" "}
          <span>
            <Image src={arrow} alt="arrow" className="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
