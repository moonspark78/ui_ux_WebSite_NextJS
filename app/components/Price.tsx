import React from "react";
import Check from "../../public/assets/check.svg";
import Image from "next/image";

const Price = () => {
  return (
    <div className="py-[48px] ">
      <h1 className="text-[#172026] text-[24px] leading-[36px] text-center font-medium">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-[#36485C] text-[16px] text-center">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px]">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C]">
              Perfect for testing the waters
            </p>
            <h2 className="pt-4 text-2xl font-medium">
              0$ <span className="text-[#5F7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
