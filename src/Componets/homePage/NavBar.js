import React from "react";
import logo from "../../Images/Logo.svg";
import hamburger from "../../Images/Hamburger_icon.svg-removebg-preview.png";

const navBar = () => {
  return (
    <div className=" flex justify-between px-[100px] pt-[56px] bg-[#0A2640]">
      <img src={logo} alt="" className="w-[162.22px] h-[42px] " />
      <img
        src={hamburger}
        className="w-10 lg:hidden text-white bg-white"
        alt=""
      />

      <ul className="lg:flex hidden text-white gap-[40px]">
        <li>Product</li>
        <li>Services</li>
        <li>About</li>
        <li className="bg-white rounded- text-black rounded-[24px] w-[128px] h-[40px] flex justify-center ">
          <button>Login</button>
        </li>
      </ul>
    </div>
  );
};

export default navBar;
