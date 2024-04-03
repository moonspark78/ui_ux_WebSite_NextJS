import React from "react";
import Image from "next/image";
import blueArrow from "../../public/assets/blue-button.svg";
import gradient from "../../public/assets/Gradient.svg";
import hero from "../../public/assets/Image.svg";
import google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Cnn from "../../public/assets/CNN.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cluth from "../../public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div className="pt-[16px] lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-[#172026] font-medium text-center leading-[40px] text-[32px] lg:text-6xl lg:font-semibold lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-[#36485C] text-center pt-[24px] font-medium lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full pt-[32px] justify-center gap-x-6">
          <button className="bg-[#4328EB] px-[32px] py-[16px] rounded-[4px] text-white font-medium w-1/2 lg:w-fit">
            Try for free
          </button>
          <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 font-medium lg:w-fit">
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
          className="min-h-[500px] w-full object-cover lg:h-auto "
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image 
            src={hero} 
            alt="image-hero" 
            className="-ml-10 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-[630px] xl:h-auto xl:w-[70%]" 
          />

          <div className="flex w-full flex-col items-center sm:mt-3 lg:container lg:flex-row lg:justify-between lg:px-20 lg:mt-4">
            <p className="text-white font-normal leading-6 text-center ">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <Image src={google} alt="google" />
              <Image src={Slack} alt="Slack" />
              <Image src={Cnn} alt="Cnn" />
              <Image src={Cluth} alt="Cluth" />
              <Image src={Truspilot} alt="Truspilot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
