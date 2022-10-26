import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#0A2640] mt-[124px] px-[107px] text-white">
      <h1 className="text-5xl  font-normal text-center pt-[72px]">
        An enterprise template to ramp up your company website
      </h1>
      <div className='flex justify-center gap-6 mt-[50px] pb-[74px] text-center m-auto'>
        <button className="border-2 bg-white rounded-[240px] h-[56px] w-[370px] text-black font-normal text-[20px]  ">
          Your email address
        </button>
        <button className="bg-[#65E4A3] text-black text-[20px] font-bold w-[210px] h-[60px] rounded-[56px]  ">
          Start now
        </button>
      </div>
    </div>
  );
}

export default Contact