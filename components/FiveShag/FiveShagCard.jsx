import React from "react";

export default function FiveShagCard({ num, title, info }) {
  return (
    <div className="flex items-center gap-[20px] justify-center">
      <span className="rounded-full w-[55px] h-[55px] md:w-[77px] md:h-[77px] bg-[#ff8a00] flex items-center justify-center font-bold text-2xl">
        {num}
      </span>
      <div className="flex flex-col  md:gap-[10px] text-[#593f0d]">
        <h2 className="text-[18px] md:text-[23px] font-bold">{title}</h2>
        <p className="w-[300px]  md:w-[400px] lg:w-[600px] text-[15px]  md:text-[19px]">
          {info}
        </p>
      </div>
    </div>
  );
}
