import React from 'react'

const CustomButton = ({title, customClass}) => {
  return (
    <>
        <button className={` ${customClass}`}>{title}</button>
    </>
  )
}

export default CustomButton