import React from "react";
import feature1 from "../../public/assets/feature-1.svg";
import feature2 from "../../public/assets/feature-2.svg";
import feature3 from "../../public/assets/feature-3.svg";
import check from "../../public/assets/check.svg";

import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px]">
      <div className="flex flex-col">
        <div>
          <h3 className="text-[#0085FF] font-medium">Sales Monitoring</h3>
          <h1 className="text-[#172026] font-medium pt-[12px] text-2xl leading-9">
            Simplify your sales monitoring
          </h1>
          <Image src={feature1} alt="feature1" className="pt-[24px]" />
          <p className="text-[#36485C] text-[16px] py-[24px] font-normal">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3">
            <li>
              <span>
                <Image src={check} alt="check"/>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
