import React from "react";
import woman from "../../Images/woman.svg";
import piechart from "../../Images/piechart.svg";
import sun from "../../Images/sun.svg";
import eye from "../../Images/eye.svg";
import feather from "../../Images/feather.svg";

const Connect2 = () => {
  return (
    <div className=" smallLaptop:pl-[156px] pt-20 px-3 smallLaptop:pt-[120px] smallLaptop:flex justify-between smallLaptop:gap-[100px] bigLaptop:gap-[150px]">
      
      <div className="smallLaptop:pr-[107px]">
        <h1 className="text-24 tablet:text-[36px] smallLaptop:mt-[60px] tablet:leading-[50px] font-manrope">We connect our customers with the best, and help them keep up-and stay open.</h1>
        <div className="mt-10 font-openSans">
          {Data.map((data, index) => (
            <div className={`hover:bg-DarkBlue-300 rounded hover:text-white p-4  shadow-md mt-6 ${data.active === true ? "bg-DarkBlue-300 text-white" : ""}`} key={index}>
              <div className="flex gap-4">
                <img src={data.image} alt="check" />
                <p className="pt-1">{data.info}</p>
              </div>  
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 smallLaptop:mt-0">
        <img className=" w-[394px] flex justify-center items-center" src={woman} alt="woman" />
        <div className="   h-[523px] w-[444px]"></div>
        <img className="mt-[-760px] ml-[10px] h-[388px] w-[291px] " src={piechart} alt="barchart" />
      </div>
    </div>
  );
};

export default Connect2;


const Data = [
  {
    image: feather,
    info: "We connect our customers with the best.",
    active: true
  },
  {
    image: eye,
    info: "Advisor success customer launch party.",
  },{
    image: sun,
    info: "Business-to-consumer long tail.",
  },
];
