import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import TheCarusel from "../Carosel/TheCarusel";
import { Carousel } from "flowbite-react";

export default function Modal({ setIsModalOpen, isModalOpen }) {
  return (
    <div
      className="w-full h-screen fixed top-0 left-0 bg-[#ff8a00] z-20"
      style={{
        display: isModalOpen ? "block" : "none",
      }}
    >
      <div className="flex justify-between">
        <img src="/Kontur_logo.svg" alt="" className="w-[70px] p-[15px]" />
        <div className="p-[30px] flex justify-end">
          <IoCloseSharp
            onClick={() => setIsModalOpen(false)}
            className=" scale-150"
          />
        </div>
      </div>
      <div className="flex p-[15px] flex-col md:flex-row gap-[15px]">
        <div className="flex-1">
          <div className="flex  h-[380px] ">
            <Carousel
              slideInterval={6000}
              indicators={false}
              className="md:w-full"
            >
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                referrerpolicy="no-referrer"
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                referrerpolicy="no-referrer"
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                referrerpolicy="no-referrer"
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                referrerpolicy="no-referrer"
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                referrerpolicy="no-referrer"
              />
            </Carousel>
          </div>
        </div>
        <div className="flex-1 bg-[#180f0f84] p-[11px] rounded-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          ad fuga eaque molestiae fugiat. Ipsum dignissimos illo rerum et beatae
          maiores a possimus accusamus error porro quis, quas quisquam eveniet.
        </div>
      </div>
    </div>
  );
}
