import React from 'react'
import boldo from "../../Images/boldo.svg";
import boldo2 from "../../Images/boldo2.svg";
import presto from "../../Images/presto.svg";
import pres from "../../Images/pres.svg";


const Logos = () => {
  return (
    <>
        <div className="flex flex-wrap gap-[20px] smallLaptop:gap-[50px] mt-[50px] smallLaptop:mt-[95px] mb-[87px] justify-center">
          {Logo.map((data, index) => (
            <div className='mt-2' key={index}>
              <img className='w-[100px] smallLaptop:w-[145px]' src={data} alt="logo" />
            </div>
          ))}
      </div>
    </>
  )
}

export default Logos;

const Logo = [
    boldo,
    presto,
    boldo,
    presto,
    boldo2,
    pres

]