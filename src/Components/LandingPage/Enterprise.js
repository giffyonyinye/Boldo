import React from "react";
import EnterpriseCard from "../Atoms/EnterpriseCard";
import arrowRight from "../../Images/arrow-right.svg";
import arrowLeft from "../../Images/arrow-left.svg";
import thumbNail from "../../Images/Ellipse 4 (2).svg"
import thumbNail1 from "../../Images/Ellipse 4 (1).svg"
import thumbNail2 from "../../Images/Ellipse 4.svg"

const Enterprise = () => {
  return (
    <div className="bg-DarkBlue-300 px-3 py-10 smallLaptop:py-[96px] smallLaptop:pl-[150px] smallLaptop:pr-[80px] bigLaptop:pr-[100px] ">
      <div className="smallLaptop:flex  justify-between">
        <h1 className="text-white font-manrope smallLaptop:w-[716px] text-24 text-center smallLaptop:leading-[72px] smallLaptop:text-left  tablet:text-[36px] smallLaptop:text-[48px] ">
          An enterprise template to ramp up your company website
        </h1>
        <div className="flex justify-end smallLaptop:justify-start gap-[28px] mt-6 smallLaptop:mt-[83px]">
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
      
      <div className="tablet:flex gap-[40px] mt-10 smallLaptop:mt-[73px]">
        <EnterpriseCard info="“Buyer buzz partner network disruptive non-disclosure agreement business”" customClass="smallLaptop:h-[322px]" image={thumbNail} name="Albus Dumbledore" position="Manager" username="@ Howarts"/>
        <EnterpriseCard info="“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”" customClass="smallLaptop:h-[394px]" image={thumbNail1} name="Severus Snape" position="Manager" username="@ Slytherin"/>
        <EnterpriseCard info="“Release facebook responsive web design business model canvas seed money monetization.”" customClass="smallLaptop:!h-[358px]" image={thumbNail2} name="Harry Potter" position="Team Leader" username="@ Gryffindor"/>
      </div>
      
    </div>
  );
};

export default Enterprise;
