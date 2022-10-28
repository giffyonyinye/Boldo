import React from "react";
import card from "../../Images/Rectangle 1270.svg";
import card1 from "../../Images/Rectangle 1270 (1).svg";
import card2 from "../../Images/Rectangle 1270 (2).svg";
import arrow from "../../Images/arrow-right2.svg";

const OurServices
 = () => {
  return (
    <div className=" bg-DarkBlue-300 pt-10 px-3 smallLaptop:pt-[84px] pb-[100px]">
      <div className="text-center smallLaptop:mt-[82px] smallLaptop:w-[70%] m-auto">
        <p className="smallLaptop:text-20 text-Gray-50 font-openSans">Our services</p>
        <h1 className="text-24 smallLaptop:text-[48px] text-white mt-3 smallLaptop:leading-[72px] font-manrope">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
      </div>
      <div >
        <div className="tablet:grid smallLaptop:grid-cols-3 tablet:grid-cols-2 font-openSans text-white tablet:gap-[50px] smallLaptop:gap-[100px] mt-[50px] smallLaptop:mt-[78px] smallLaptop:px-[150px] ">
          {services.map((data, index) => (
            <div className="mt-8 smallLaptop:mt-0 " key={index}>
              <div className="w-full smallLaptop:w-[300px] smallLaptop:h-[354px]">
                <img src={data.img} alt="img" className="w-full  rounded-3xl  "/>
              </div>
              <h1 className="text-24 font-normal mt-6">{data.title}</h1>
              <div className="flex gap-4 mt-2 smallLaptop:mt-7 w-fit smallLaptop:w-[164px]  border-b-2 pb-2">
                <p className="font-bold text-20">Explore page</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const services = [
  {
    img: card,
    title: "Cool feature title",
  }, {
    img: card1,
    title: "Even cooler feature",
  }, {
    img: card2,
    title: "Cool feature title",
  },
]
