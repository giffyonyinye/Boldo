import React from "react";
import rec from "../../Images/man.svg";
import check from "../../Images/check.svg";
import barChart from "../../Images/barchart.svg";
import CustomButton from "../Atoms/CustomButton";

const Connect1 = () => {
  return (
    <div className=" smallLaptop:pl-[156px] pt-20 px-3 smallLaptop:pt-[120px] smallLaptop:flex justify-between smallLaptop:gap-[100px] bigLaptop:gap-[150px]">
      <div className="">
        <img className=" smallLaptop:w-[394px]" src={rec} alt="man" />
        <div className="   h-[523px] w-[444px]"></div>
        <img className="mt-[-760px] smallLaptop:ml-[110px] h-[388px] smallLaptop:w-[251px] " src={barChart} alt="barchart" />
      </div>
      <div className="smallLaptop:pr-[107px]">
        <h1 className="text-24 text-center smallLaptop:text-left tablet:text-[36px] tablet:leading-[50px] smallLaptop:mt-[60px] font-manrope">We connect our customers with the best, and help them keep up-and stay open.</h1>
        <div className="mt-10">
          {Data.map((data, index) => (
            <div className="" key={index}>
              <div className="flex gap-2 smallLaptop:gap-7 mt-6">
                <img src={check} alt="check" />
                <p>{data}</p>
              </div>  
            </div>
          ))}
        </div>
        <CustomButton customClass="w-[210px] h-[60px] text-white font-bold bg-DarkBlue-300 rounded-[56px] mt-[56px]" title="Start Now"/>
      </div>
    </div>
  );
};

export default Connect1;

 const Data = [
  "We connect our customers with the best.",
   "Advisor success customer launch party.",
    "Business-to-consumer long tail.",
];

