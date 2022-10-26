import React from "react";
import arrowRight from "../Images/arrow-right (1).svg";
import arrowLeft from "../Images/arrow-right (2).svg";
import { Set } from "./Set";

const ThirdSection = () => {
  return (
    <div className="bg-[#0A2640] py-[96px]  ">
      <div className="lg:flex  justify-between">
        <h1 className="text-white ml-[150px] text-[48px] font-normal  ">
          An enterprise template to ramp <br /> up your company website
        </h1>
        <div className="lg:flex hidden gap-[28px] mt-[83px] mr-[100px] ">
          <img
            src={arrowRight}
            alt=""
            className="bg-white text-black w-[72px] h-[72px] rounded-[50%] "
          />
          <img
            src={arrowLeft}
            alt=""
            className="bg-white text-black w-[72px] h-[72px] rounded-[50%] "
          />
        </div>
      </div>
      <div className="lg:flex gap-[22px] px-[150px]  pt-[72px] mb-[96px]  ">
        {Set.map((card, index) => (
          <div
            key={index}
            className="bg-white text-black w-[350px] rounded-xl mt-4   "
          >
            <div className="px-[40px] text-[24px] font-normal pt-[40px]">
              {card.comment}
            </div>
            <div className="flex px-[40px] pt-[43px] gap-4 ">
              <div> {card.image}</div>
              <div className="mb-[43px]">
                <div className="font-bold text-base">{card.name} </div>
                <div className="text-[14px] font-normal">{card.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
