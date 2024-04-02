import React from "react";
import Image from "next/image";
import blueArrow from "../../public/assets/blue-button.svg";
import gradient from "../../public/assets/Gradient.svg";
import hero from "../../public/assets/Image.svg";

const Hero = () => {
  return (
    <div className="pt-[16px]">
      <div className="px-[20px]">
        <h1 className="text-[#172026] font-medium text-center leading-[40px] text-[32px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-[#36485C] text-center pt-[24px] font-medium">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full pt-[32px]">
          <button className="bg-[#4328EB] px-[32px] py-[16px] rounded-[4px] text-white font-medium w-1/2">
            Try for free
          </button>
          <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 font-medium">
            View Pricing
            <span>
              <Image src={blueArrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={gradient}
          alt="gardient"
          className="min-h-[500px] w-full object-cover"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image src={hero} alt="image-hero" className="-ml-10 h-[310px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
