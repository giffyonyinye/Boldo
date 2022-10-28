import React from "react";
import logo from "../../Images/Logo.svg";
import bgImage from "../../Images/Ellipse 9.svg";
import CustomButton from "../Atoms/CustomButton";
import MobileNavigation from "./MobileNav";

const NavBar = () => {
  return (
    <>
      <div className="absolute hidden smallLaptop:block right-0 font-openSans">
        <img src={bgImage} alt="bgImage" />
      </div>
      <div className="z-20  flex justify-between px-3 smallLaptop:px-[100px] pt-3 smallLaptop:pt-[56px]">
        <img src={logo} alt="" className="hidden smallLaptop:block w-[162.22px] h-[42px] " />
        <ul className="z-20 smallLaptop:flex hidden font-semibold text-16 text-DarkBlue-300 gap-10">
          <li className="mt-2">Product</li>
          <li className="mt-2">Services</li>
          <li className="mt-2">About</li>
          <CustomButton title="Login" customClass="border-2 border-DarkBlue-300 rounded- text-black rounded-3xl px-10 py-2"/>
        </ul>
      </div>
      <div className="smallLaptop:hidden">
        <MobileNavigation/>
      </div>
    </>
  );
};

export default NavBar;
