import React from 'react'

const EnterpriseCard = ({info, image, name, position, username, customClass}) => {
  return (
    <div>
      <div className={`bg-white text-black smallLaptop:w-[320px] bigLaptop:w-[350px] font-openSans p-4 smallLaptop:p-10 rounded-xl mt-4 ${customClass}`}>
        <div className=" smallLaptop:text-24 font-normal">{info}</div>
            <div className="flex pt-4 smallLaptop:pt-10 gap-4 ">
                <img src={image} alt="pic" />
                <div className='pt-1'>
                    <div className="font-bold">{name} </div>
                    <div className="text10 smallLaptop:text-14 pt-[6px] font-normal">{position} {username}</div>
                </div>
            </div>
      </div>
  </div>
  )
}

export default EnterpriseCard