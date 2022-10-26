import React from "react";
import { Data } from "./Data";

const MiddleSection = () => {
  return (
    <div className=" pl-[156px]">
      {Data.map((datum, index) => (
        <div key={index} className="lg:flex justify-between gap-[100px] ">
          <div>
            <div className=" mt-[197px]   h-[px] w-[394px]">
              
              {datum.image}
            </div>
            <div className="   h-[523px] w-[444px]"> {datum.imager}</div>
            <div className="mt-[-760px] ml-[110px] h-[388px] w-[251px] ">
              {datum.image1}
            </div>
            <div className=" ml-[70px] mt-[130px] h-[388px] w-[291px] ">
              {datum.imager1}
            </div>
          </div>
          <div className="   lg:mt-[263px]  ">
            <div className="pr-[107px] font-normal text-[36px]">
              {datum.header}
            </div>
            <button>
              <div className="flex gap-[27px] text-[20px] font-normal mt-[40px] ">
                {datum.check1}
                {datum.paragraph}
              </div>
            </button>

            <button>
              <div className="flex  gap-[27px] text-[20px] font-normal mt-[24px] ">
                {datum.check}
                {datum.paragraph1}
              </div>
            </button>

            <button>
              <div className="flex gap-[27px] text-[20px] font-normal mt-[24px] ">
                {datum.check2}
                {datum.paragraph2}
              </div>
            </button>
            <div className="mt-[56px]">
              <button className="bg-[#0A2640] w-[210px] h-[60px] rounded-[56px] text-white">
                {datum.But}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiddleSection;
