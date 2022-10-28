import React from "react";
import cardImage from "../../Images/Rectangle 1270 (5).svg";
import cardImage1 from "../../Images/woman2.png";
import cardImage2 from "../../Images/Rectangle 1270 (7).svg";
import thumbnail from "../../Images/Ellipse 10 (1).svg";
import thumbnail1 from "../../Images/Ellipse 10.svg";
import thumbnail2 from "../../Images/Ellipse 10 (3).svg";
import CustomButton from "../Atoms/CustomButton";

const Blog = () => {
  return (
    <div className="smallLaptop:mt-[156px] mt-20 p-3">
      <div className="  smallLaptop:px-[150px]  ">
        <div className="text-center">
          <p className="text-20 text-Gray-100 font-openSans">Our Blog</p>
          <h1 className="text-24 tablet:text-[36px] smallLaptop:text-[42px] mt-3 smallLaptop:w-[842px] m-auto font-manrope tablet:leading-[50px] smallLaptop:leading-[72px]">
            Value proposition accelerator product management venture
          </h1>
        </div>
        <div className="font-openSans tablet:grid tablet:grid-cols-2 smallLaptop:grid-cols-3 smallLaptop:gap-[100px] mt-10 smallLaptop:mt-[78px] ">
          {BlogData.map((data, index) => (
            <div key={index} className="smallLaptop:mt-5 h-[424px] flex flex-col smallLaptop:justify-between">
              <div>
                <div className="w-full smallLaptop:w-[300px]">
                  <img src={data.image} alt="" className="w-full  rounded-3xl mt-6 "/>
                </div>
                <h1 className="text-16 font-bold mt-4 ">category<span className="font-normal text-base pl-3 text-Gray-100"> November 22,2021</span></h1>
                <p className="font-normal smallLaptop:text-20 mt-3">{data.info}</p>
              </div>
              <div className="flex gap-3 mt-7">
                <img src={data.pic} alt="" />
                <p className="mt-1">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-[84px]">
        <CustomButton title="Load More" customClass="border-2 border-DarkBlue-300 rounded-[56px] w-[219px] h-[60px] text-DarkBlue-300 font-bold text-xl " />
      </div>
    </div>
  );
};

export default Blog;

const BlogData = [
  {
    image: cardImage,
    info: "Pitch termsheet backing validation focus release.",
    pic: thumbnail,
    name: "Chandler Bling"
  },
  {
    image: cardImage1,
    info: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    pic: thumbnail1,
    name: "Rachel Green"
  },
  {
    image: cardImage2,
    info: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    pic: thumbnail2,
    name: "Monica Geller"
  }
]
