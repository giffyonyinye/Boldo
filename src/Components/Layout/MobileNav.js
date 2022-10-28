import React, { useState } from "react";
import hamburger from "../../Images/Hamburger_icon.svg-removebg-preview.png";
import logo from "../../Images/Logo.svg";
import useClickOutside from "../hooks";


const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);


  const node = useClickOutside(() => {
    setIsOpen(false);
  });


  return (
    <>
    <div className="bg-DarkBlue-300">
      <div className="flex justify-between py-3 px-4 items-center bg-white">
       <img src={logo} className="w-[100px] tablet:w-[162.22px]" alt="logo" />
        {isOpen ? (
            <p
            className="w-10 font-manrope text-3xl font-bold smallLaptop:hidden text-black bg-white"
            onClick={() => setIsOpen(false)}>X</p>
        ) : (
            <img
            src={hamburger}
            className="w-8 tablet:w-10 smallLaptop:hidden text-white bg-white"
            alt="logo"
            onClick={() => setIsOpen(true)}
          />

        )}
      </div>
       {
        isOpen && (
            <ul className={`z-20 px-3 py-4  font-semibold text-16 text-white gap-10 `} ref={node}>
                <li className="mt-2">Product</li>
                <li className="mt-2">Services</li>
                <li className="mt-2">About</li>
                <li className="mt-2">Login</li>
                {/* <CustomButton title="Login" customClass="border-2 border-DarkBlue-300 rounded- text-black rounded-3xl px-10 py-2"/> */}
            </ul>
        )
       }
      </div>
    </>
  );
};

export default MobileNavigation;
