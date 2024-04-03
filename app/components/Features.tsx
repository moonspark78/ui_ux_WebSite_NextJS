import React from "react";
import feature1 from "../../public/assets/feature-1.svg";
import feature2 from "../../public/assets/feature-2.svg";
import feature3 from "../../public/assets/feature-3.svg";
import check from "../../public/assets/check.svg";
import blueArrow from "../../public/assets/blue-button.svg";
import greenButton from "../../public/assets/green-button.svg";
import pinkButton from "../../public/assets/pink-button.svg";

import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={feature1}
          alt="featuree"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pr-[56px]">
          <h3 className="text-[#0085FF] font-medium lg:text-[18px]">Sales Monitoring</h3>
          <h1 className="text-[#172026] font-medium pt-[12px] text-2xl leading-9 lg:leading-[58px] lg:text-[42px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={feature1}
            alt="feature1"
            className="pt-[24px] sm:hidden"
          />
          <p className="text-[#36485C] text-[16px] py-[24px] font-normal">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="text-[#0085FF] pt-[24px] flex items-center gap-x-4 font-medium lg:text-[18px]">
            Learn More
            <span>
              <Image src={blueArrow} alt="arrow" />
            </span>
          </p>
        </div>
      </div>




      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={feature2}
          alt="featuree"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pl-[56px]">
          <h3 className="text-[#00A424] font-medium lg:text-[18px]">Customer Support</h3>
          <h1 className="text-[#172026] font-medium pt-[12px] text-2xl leading-9 lg:leading-[58px] lg:text-[42px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={feature2}
            alt="feature2"
            className="pt-[24px] sm:hidden"
          />
          <p className="text-[#36485C] text-[16px] py-[24px] font-normal">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="text-[#00A424] pt-[24px] flex items-center gap-x-4 font-medium lg:text-[18px]">
            Learn More
            <span>
              <Image src={greenButton} alt="arrow" />
            </span>
          </p>
        </div>
      </div>




      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={feature1}
          alt="featuree"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pr-[56px]">
          <h3 className="text-[#EB2891] font-medium lg:text-[18px]">Growth Monitoring</h3>
          <h1 className="text-[#172026] font-medium pt-[12px] text-2xl leading-9 lg:leading-[58px] lg:text-[42px]">
          Monitor your site’s new subscribers 
          </h1>
          <Image
            src={feature1}
            alt="feature1"
            className="pt-[24px] sm:hidden"
          />
          <p className="text-[#36485C] text-[16px] py-[24px] font-normal">
          Stay on top of things and revamp your work process with our game-changing feature.
           Get a birds eye view with our customizable dashboard. 
          </p>

            <div className="flex w-full gap-x-[24px] pt-[24px]">
                <div className="flex flex-col w-1/2 gap-y-3">
                    <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
                    <p>Lorem ipsum dolor amet.</p>
                </div>
                <div className="flex flex-col w-1/2 gap-y-3">
                    <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
                    <p>Conse ipsum dolor amet.</p>
                </div>
            </div>

          <p className="text-[#EB2891] pt-[24px] flex items-center gap-x-4 font-medium lg:text-[18px]">
            Learn More
            <span>
              <Image src={pinkButton} alt="arrow" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
