import React from "react";
import card from "../Images/Rectangle 1270.svg";
import card1 from "../Images/Rectangle 1270 (1).svg";
import card2 from "../Images/Rectangle 1270 (2).svg";
import arrow from "../Images/arrow-right.svg";
import line from "../Images/Rectangle 1273.svg";

const SecondSection = () => {
  return (
    <div className="  px-[150px]  ">
      <div className="text-center mt-[82px]">
        <p className="text-[20px]">Our services</p>
        <h1 className="text-[42px]">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-[100px] mt-[78px] ">
        <div>
          <img
            src={card}
            alt=""
            className="w-[300px] h-[354px] rounded-[24px]  "
          />
          <h1 className="text-[24px] font-normal mt-[24px]">
            Cool feature title
          </h1>
          <p className="font-normal text-[20px] mt-[12px]">
            Learning curve network effects return on investment.
          </p>
          <div className="flex gap-[17px] mt-[28px]">
            <p className="font-bold text-[20px]">Explore page</p>
            <img src={arrow} alt="" />
          </div>
          <img src={line} alt="" className="pt-[8px]" />
        </div>
        <div>
          <img
            src={card1}
            alt=""
            className="w-[300px] h-[354px] rounded-[24px]  "
          />
          <h1 className="text-[24px] font-normal mt-[24px]">
            Even cooler feature
          </h1>
          <p className="font-normal text-[20px] mt-[12px]">
            Learning curve network effects return on investment.
          </p>
          <div className="flex gap-[17px] mt-[28px]">
            <p className="font-bold text-[20px]">Explore page</p>
            <img src={arrow} alt="" />
          </div>
          <img src={line} alt="" className="pt-[8px]" />
        </div>
        <div>
          <img
            src={card2}
            alt=""
            className="w-[300px] h-[354px] rounded-[24px]   "
          />
          <h1 className="text-[24px] font-normal  mt-[24px]">
            Cool feature title
          </h1>
          <p className="font-normal text-[20px] mt-[12px]">
            Learning curve network effects return on investment.
          </p>
          <div className="flex gap-[17px] mt-[28px]">
            <p className="font-bold text-[20px]">Explore page</p>
            <img src={arrow} alt="" />
          </div>
          <img src={line} alt="" className="pt-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
