import React from "react";
import cardImage from "../Images/Rectangle 1270 (5).svg";
import cardImage1 from "../Images/Rectangle 1270 (6).svg";
import cardImage2 from "../Images/Rectangle 1270 (7).svg";
import thumbnail from "../Images/Ellipse 10 (1).svg";
import thumbnail1 from "../Images/Ellipse 10.svg";
import thumbnail2 from "../Images/Ellipse 10 (3).svg"

const SubForth = () => {
  return (
    <div>
      <div className="  px-[150px]  ">
        <div className="text-center mt-[82px]">
          <p className="text-[20px]">Our Blog</p>
          <h1 className="text-[42px]">
            Value proposition accelerator product <br /> management venture
          </h1>
        </div>
        <div className="lg:grid grid-cols-3 gap-[100px] mt-[78px] ">
          <div className="mt-5">
            <img
              src={cardImage}
              alt=""
              className="w-[300px] h-[209px] rounded-[24px]  "
            />
            <h1 className="text-[16px] font-bold ">
              category
              <span className="font-normal text-base"> November 22,2021</span>
            </h1>
            <p className="font-normal text-[20px] mt-[12px]">
              Pitch term sheet backing validation focus release.
            </p>
            <div className="flex gap-[17px] mt-[28px]">
              <img src={thumbnail} alt="" />
              <p>Chandler Bing</p>
            </div>
          </div>
          <div>
            <img
              src={cardImage1}
              alt=""
              className="w-[300px] h-[209px] rounded-[24px]  "
            />
            <h1 className="text-[16px] font-bold ">
              category
              <span className="font-normal text-base"> November 22,2021</span>
            </h1>
            <p className="font-normal text-[20px] mt-[12px]">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="flex gap-[17px] mt-[28px]">
              <img src={thumbnail1} alt="" />
              <p>Rachel Green</p>
            </div>
          </div>
          <div>
            <img
              src={cardImage2}
              alt=""
              className="w-[300px] h-[209px] rounded-[24px]   "
            />
            <h1 className="text-[16px] font-bold ">
              category
              <span className="font-normal text-base"> November 22,2021</span>
            </h1>
            <p className="font-normal text-[20px] mt-[12px]">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>
            <div className="flex gap-[17px] mt-[28px]">
              <img src={thumbnail2} alt="" />
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[84px]">
        <button className="border-2 rounded-[56px] w-[219px] h-[60px] text-[#0A2640] font-bold text-xl ">
          Load more
        </button>
      </div>
    </div>
  );
};

export default SubForth;
