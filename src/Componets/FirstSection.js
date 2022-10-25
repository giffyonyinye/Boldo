import React from "react";
import bar from "../Images/Group 256.svg";
import bar1 from "../Images/Group 208.svg";
import bar2 from "../Images/Group 264.svg";
import logoBar from "../Images/Logos.svg";

const FirstSection = () => {
  return (
    <div className=" bg-[#0A2640]">
      <div className="lg:flex justify-between bg-[#0A2640] px-[100px] ">
        <div className="text-white pt-[120px] ">
          <h1 className="pb-[15px] text-[48px] font-normal ">
            Save time by building <br /> fast with Boldo Template
          </h1>
          <p className="pb-[40px] text-[16px] font-normal">
            Funding handshake buyer business-to-business metrics iPad
            partnership.
            <br />
            First mover advantage innovator success deployment non-disclosure.
          </p>
          <div className="lg:flex gap-[24px]">
            <button className="bg-[#65E4A3] text-black rounded-[56px] w-[247px] h-[60px] ">
              Buy Template
            </button>
            <button className="w-[187px] h-[60px] rounded-[56px] border-[2px]">
              Explore
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-[71px]">
          <div className="pb-[25.77px] w-[493.86px] h-[231.9px] rounded-[15.0305px]">
            <img src={bar} alt="" className="bg-[#364D62]  " />
          </div>
          <div className="flex gap-[38.65px] mt-[25px]">
            <img
              src={bar1}
              alt=""
              className="bg-[#364D62] w-[192.18px] h-[165.34px] rounded-[15.0304px] "
            />
            <img
              src={bar2}
              alt=""
              className="bg-[#364D62] w-[261.96px] h-[165.34px] rounded-[14.1323px] "
            />
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={logoBar}
          alt=""
          className="mt-[56px] m-auto flex justify-center pb-[64px]  "
        />
      </div>
    </div>
  );
};

export default FirstSection;
