import React from "react";
import bar from "../../Images/Group 256.svg";
import bar1 from "../../Images/Group 208.svg";
import bar2 from "../../Images/Group 264.svg";
import CustomButton from "../Atoms/CustomButton";
import Logos from './Logos'



const SaveTime = () => {
  return (
    <>
      <div>
        <div className="z-20 text-black px-3 smallLaptop:flex smallLaptop:px-[100px]">
          <div className="pt-12 smallLaptop:pt-[120px] smallLaptop:w-1/2">
            <h1 className="pb-4 text-center smallLaptop:text-left text-[28px] tablet:text-[40px] smallLaptop:text-[48px] tablet:leading-[72px] smallLaptop:w-[601px] font-manrope">
              Save time by building fast with Boldo Template
            </h1>
            <p className="pb-10 leading-7 text-16 text-Gray-100 font-openSans">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment non-disclosure.
            </p>
            <div className="flex gap-[24px] font-openSans">
              <CustomButton customClass="bg-DarkBlue-300 w-[140px] py-2 smallLaptop:py-0 rounded-[56px] text-white font-bold tablet:w-[247px] tablet:h-[60px] " title="Buy Template"/>
              <CustomButton customClass="w-[120px]  tablet:w-[187px] tablet:h-[60px] rounded-[56px] text-DarkBlue-300 border-2 border-DarkBlue-300 font-bold" title="Explore"/>
            </div>
          </div>
          <div className="z-20 grid grid-cols-1 pt-[71px] smallLaptop:pl-[90px] bigLaptop:pl-[134px] smallLaptop:w-1/2">
            <div className="pb-[25.77px] w-full h-full">
              <img src={bar} alt="" className="bg-[#364D62] !w-full h-full  smallLaptop:w-[493.86px] rounded-[15.0305px]" />
            </div>
            <div className="flex gap-[38.65px] mt-[25px]">
              <div className="w-1/2">
                <img
                  src={bar1}
                  alt="stats"
                  className="bg-[#364D62]  w-full smallLaptop:w-[192.18px]  h-full rounded-[15.0304px] "
                />
              </div>
              <div className="w-1/2">
                <img
                  src={bar2}
                  alt="stats"
                  className="bg-[#364D62] w-full smallLaptop:w-[261.96px]  h-full rounded-[14.1323px] "
                />
              </div>
            </div>
          </div>
        </div>

        <Logos/>
      
      </div>
    </>
  );
};

export default SaveTime;
