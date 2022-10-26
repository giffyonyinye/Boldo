import { data } from "autoprefixer";
import React from "react";
import { FooterData } from "./FooterData";

const Footer = () => {
  return (
    <div className="mt-[124px] pl-[100px] pr-[179px] flex justify-between gap-[179px]  ">
      {FooterData.map((footer, index) => (
        <div key={index} className="">
          <div className="font-bold text-xl "> {footer.title}</div>
          <div>
            {footer.subTitle.map((sub, index) => (
              <div key={index} >
                <div className="w-[]  h-[] mt-8  ">{sub.article}</div>
                <div className="font-normal mt-8 text-xl ">{sub.rights}</div>
                <div className="font-normal mt-8 text-xl ">{sub.services} </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
