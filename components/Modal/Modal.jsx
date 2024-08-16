import React, { useEffect, useMemo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Carousel } from "flowbite-react";
import { Swiper_info_image } from "@/static/swiperData";

export default function Modal({ setIsModalOpen, isModalOpen }) {
  const photos = useMemo(() => {
    const datas = Swiper_info_image.filter(
      (data) => data.swiperId === isModalOpen.id
    );
    return datas;
  }, [isModalOpen]);
  return (
    <div
      className="w-full h-screen fixed top-0 left-0 bg-[#ff8a00] z-20 "
      style={{
        display: isModalOpen.isModal ? "block" : "none",
      }}
    >
      <div className="container">
        <div className="flex justify-between">
          <img
            src="/Kontur_logo.svg"
            alt="kontur"
            className="w-[70px] p-[15px]"
          />
          <div className="pt-[30px] flex justify-end">
            <IoCloseSharp
              onClick={() =>
                setIsModalOpen({
                  ...isModalOpen,
                  isModal: !isModalOpen.isModal,
                })
              }
              className=" scale-150 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex p-[15px] flex-col md:flex-row gap-[15px]">
          <div className="flex-1">
            <div className="flex h-[580px] ">
              <Carousel
                slideInterval={6000}
                indicators={false}
                className="md:w-full"
              >
                {photos.map((data) => (
                  <img
                    src={data.infoImage}
                    alt="..."
                    referrerPolicy="no-referrer"
                    className="w-full h-full"
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="flex-1 bg-[#180f0f84] p-[11px] rounded-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae ad fuga eaque molestiae fugiat. Ipsum dignissimos illo
            rerum et beatae maiores a possimus accusamus error porro quis, quas
            quisquam eveniet.
          </div>
        </div>
      </div>
    </div>
  );
}
