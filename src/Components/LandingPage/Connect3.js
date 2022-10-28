import React from "react";
import image from "../../Images/people.png";
import chevronDown from "../../Images/chevron-down.svg";

const Connect3 = () => {
  return (
    <div className="smallLaptop:mt-[124px] mt-10 px-3 smallLaptop:px-[150px] ">
      <img src={image} alt="imag" />
      <div className="smallLaptop:flex justify-between gap-[50px] mt-8 smallLaptop:mt-14 ">
        <h1 className="font-normal text-24 tablet:text-[36px] smallLaptop:w-[500px] font-manrope tablet:leading-[50px] smallLaptop:leading-[56px]">
          We connect our customers with the best, and help them keep
          up-and stay open.
        </h1>
        <div className="font-openSans mt-8 smallLaptop:mt-0 smallLaptop:ml-[60px] bigLaptop:ml-[100px] ">
          <div className="border-b-2 pb-4  border-b-Gray-300">
            <div className="flex justify-between">
              <p className="smallLaptop:mr-8">We connect our customers with the best?</p>
              <img
                src={chevronDown}
                alt=""
                className="bg-black w-7 h-7 tablet:h-10 tablet:w-10 rounded-[50%] "
              />
            </div>
          </div>
          <div className="border-b-2 pb-4 border-b-Gray-300">
            <div className="flex mt-4 smallLaptop:mt-8 justify-between">
              <p className="smallLaptop:mr-8">Android research & development rockstar? </p>
              <img
                src={chevronDown}
                alt=""
                className="bg-black w-7 h-7  tablet:h-10 tablet:w-10 rounded-[50%] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect3;
