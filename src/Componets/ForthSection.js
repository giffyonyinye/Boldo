import React from "react";
import image from "../Images/Image.svg";
import chevronDown from "../Images/chevron-down.svg";
import line from "../Images/Rectangle 1283.svg";

const ForthSection = () => {
  return (
    <div className="mt-[124px] px-7 lg:px-[150px] ">
      <img src={image} alt="" />
      <div className="lg:flex justify-between gap-[50px] mt-14 ">
        <h1 className="font-normal text-4xl  ">
          We connect our customers<br />with the best, and help them keep
          up-and stay open.
        </h1>
        <div>
          <div>
            <div className="flex gap-[20px]">
              <p>We connect our customers with the best?</p>
              <img
                src={chevronDown}
                alt=""
                className="bg-black rounded-[50%] "
              />
            </div>
            <img src={line} alt="" className="mt-4" />
          </div>
          <div>
            <div className="flex mt-8 gap-[10px]">
              <p>Android research & development rockstar? </p>
              <img
                src={chevronDown}
                alt=""
                className="bg-black rounded-[50%] "
              />
            </div>
            <img src={line} alt="" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;
