import React from "react";
import "./DoveryaCard.css";

export default function DoveryaCard({ image, title, info }) {
  return (
    <div className="myCard flex rounded-[10px] px-[15px] md:px-[30px] py-[25px] gap-[15px] md:gap-[25px] md:h-[180px] items-start">
      <div className=" rounded-full bg-[#FFC771] overflow-hidden w-[120px]">
        {" "}
        <img src={image} alt="icon" className="w-full" />
      </div>
      <div className="text-[#593f0d] font-bold">
        <h2 className="text-[17px] md:text-[23px] ">{title}</h2>
        <p className="font-normal text-[15px] md:text-[16px] w-[200px] md:w-[250px] lg:max-w-[300px]">
          {info}
        </p>
      </div>
    </div>
  );
}
