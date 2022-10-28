import React from 'react';
import CustomButton from '../Atoms/CustomButton';

const StartNow = () => {
  return (
    <div className='relative mt-10 smallLaptop:mt-[124px]'>
      
      <div className="z-20 bg-DarkBlue-300  smallLaptop:mx-[107px] smallLaptop:rounded-xl text-white">
        <h1 className="z-20 tablet:text-[36px] text-24 smallLaptop:text-5xl smallLaptop:leading-[72px] smallLaptop:w-[716px] m-auto font-manrope text-center pt-10 smallLaptop:pt-[72px]">
          An enterprise template to ramp up your company website
        </h1>
        <div className='z-20 tablet:flex px-3 justify-center gap-2 tablet:gap-6 mt-[50px] pb-[74px] text-center m-auto'>
          <input placeholder='Your email address' className="border-2 pl-3 outline-none bg-white rounded-[240px] w-full h-[56px] smallLaptop:w-[370px] text-black text-20  "/>
            
          <CustomButton title="Start now" customClass="bg-[#65E4A3] text-black text-20 mt-4 tablet:mt-0 font-bold w-[210px] h-[60px] rounded-[56px]  "/>
         
        </div>
      </div>
    </div>
  );
}

export default StartNow;