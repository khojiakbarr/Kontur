import Link from "next/link";
import React from "react";

export default function FacilitiesCard({ images }) {
  return (
    <div
      className="w-full md:w-[580px] h-[410px] flex items-center flex-col"
      style={{
        background: ` linear-gradient(-0.4deg, #1a1a1a 10.08%, rgba(26,26,26,0.4) 126.82%), url(${images})`,
        // backgroundImage: images,
      }}
    >
      <div className="w-full h-full flex items-center justify-center flex-col">
        <p className="md:w-[270px] h-[40.5px] text-[33.75px] text-center text-white">
          Ресторан Ямал
        </p>
        <p className="w-[270px] h-[42.19px] text-[33.75px] font-bold text-center text-[#ffc771]">
          300 м2
        </p>
      </div>

      <Link
        href={"/"}
        className=" w-[270px] h-[40.5px] mb-[40px] text-xl text-center text-white underline"
      >
        Подробнее
      </Link>
    </div>
  );
}
