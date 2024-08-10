"use client";

import Link from "next/link";
import { useState } from "react";

export default function Main_btn() {
  const [state, setState] = useState(false);
  return (
    <div className="fixed bottom-[40px] left-auto right-[20px] z-10 flex flex-col gap-[10px]">
      <div className=" relative">
        <div
          className="absolute right-[10px] bottom-0 w-auto flex flex-col gap-[20px] transition-all duration-200"
          style={{
            transform: state ? "translateX(0)" : "translateX(120%)",
          }}
        >
          {" "}
          <Link href={"/"}>
            <button className="flex items-center justify-between gap-[7px] border-2 shadow-[9px_7px_16px_0_#000] bg-white rounded-[61px] px-[15px] md:px-[22px]">
              <span className="text-[20px] w-[200px] text-center md:text-[30px] text-[#4caf50]">
                TELEPHONE
              </span>
              <div className="w-[35px]">
                {" "}
                <img className="w-full" src="/icon_tel.png" alt="" />
              </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className="flex items-center justify-between gap-[7px] border-2 shadow-[9px_7px_16px_0_#000] bg-white rounded-[61px] px-[15px] md:px-[22px]">
              <span className="text-[20px] w-[200px] text-center md:text-[30px] text-[#c0009f]">
                INSTAGRAM
              </span>
              <div className="w-[35px]">
                {" "}
                <img className="w-full" src="/icon_insta.png" alt="" />
              </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className="flex items-center justify-between gap-[7px] border-2 shadow-[9px_7px_16px_0_#000] bg-white rounded-[61px] px-[15px] md:px-[22px]">
              <span className="text-[20px] w-[200px] text-center md:text-[30px] text-[#039be5]">
                TELEGRAM
              </span>
              <div className="w-[35px]">
                {" "}
                <img className="w-full" src="/icon_telegram.png" alt="" />
              </div>
            </button>
          </Link>
          <Link href={"/"}>
            <button className="flex items-center justify-between gap-[7px] border-2 shadow-[9px_7px_16px_0_#000] bg-white rounded-[61px] px-[15px] md:px-[22px]">
              <span className="text-[20px] w-[200px] text-center md:text-[30px] text-[#f00]">
                YOUTUBE
              </span>
              <div className="w-[35px]">
                {" "}
                <img className="w-full" src="/icon_youTube.png " alt="" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={() => setState(!state)}>
          <img className="w-[60px]" src="/main_icon.png" alt="" />
        </button>
      </div>
    </div>
  );
}
