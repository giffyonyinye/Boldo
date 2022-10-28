import React from "react";
import { FooterData } from "../ComponentData/FooterData";
import logo from "../../Images/Logo (1).svg"

const Footer = () => {

  return (
    <>
    <div className="smallLaptop:flex smallLaptop:pl-[100px] p-3 mt-10 smallLaptop:mt-[184px] smallLaptop:pb-[100px]">
      <div className="smallLaptop:w-[300px]">
        <img src={logo} className="w-[100px] smallLaptop:w-[162.22px]" alt="logo" />
        <div className="font-openSans text-Gray-100">
          <p className="leading-7  mt-10">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
        </div>
      </div>
      <div className="z-20 font-openSans mt-6 smallLaptop:mt-0 tablet:flex justify-between tablet:w-[150px] smallLaptop:ml-[179px] tablet:gap-[96px]">
        {FooterData.map((footer, index) => (
          <div key={index} >
            <p className="font-bold smallLaptop:text-20 text-DarkBlue-300 my-4 smallLaptop:my-0">{footer.title}</p>
            <div>
              {footer.subTitle.map((sub, index) => (
                <div className=" smallLaptop:text-20 text-Gray-100" key={index} >
                  <div className="mt-3 smallLaptop:mt-8">{sub.article}</div>
                  <div className="mt-3 smallLaptop:mt-6">{sub.rights}</div>
                  <div className="mt-3 smallLaptop:mt-6 ">{sub.services} </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <p className="mt-4 smallLaptop:mt-16  p-3 font-openSans text-Gray-100 ">All rights reserved.</p>
    </>
  );
};

export default Footer;
