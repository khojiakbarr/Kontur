import React, { useMemo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Carousel } from "flowbite-react";
import { Swiper_info_image, swiperdata } from "@/static/swiperData";

export default function Modal({ setIsModalOpen, isModalOpen }) {
  function controlIfreme(vidFunc) {
    var synthesis = window.speechSynthesis;
    synthesis.cancel();
    const iframe = window.document.querySelector("#video");
  }
  let photos = useMemo(() => {
    const datas = Swiper_info_image.filter(
      (data) => data.swiperId === isModalOpen.id
    );
    return datas;
  }, [isModalOpen]);

  let item = useMemo(() => {
    const data = swiperdata.find((items) => items.id === isModalOpen.id);
    return data;
  }, [isModalOpen]);
  return (
    <div
      className="w-full  absolute top-[60px] left-0 bg-[#ff9c2b] z-20 rounded-md "
      style={{
        display: isModalOpen.isModal ? "block" : "none",
      }}
    >
      <div className="container ">
        <div className="flex justify-between">
          <img
            src="/Kontur_logo.svg"
            alt="kontur"
            className="w-[70px] p-[15px]"
          />
          <div className="pt-[30px] pr-[15px] flex justify-end">
            <IoCloseSharp
              onClick={() => {
                setIsModalOpen({
                  ...isModalOpen,
                  isModal: !isModalOpen.isModal,
                });
                controlIfreme("stopVideo");
              }}
              className=" scale-150 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex p-[15px] flex-col md:flex-row gap-[15px]">
          <div className="flex-1">
            <div className="flex h-[300px] md:h-[580px] lg:h-[600px] ">
              <Carousel indicators={false} slide={false} className="md:w-full">
                {photos.map((data) => {
                  if (!data.infoImage) {
                    return data.infoVideo;
                  } else {
                    return (
                      <img
                        key={data.id}
                        src={data.infoImage}
                        alt="..."
                        referrerPolicy="no-referrer"
                        className="w-full h-full "
                      />
                    );
                  }
                })}
              </Carousel>
            </div>
          </div>
          <div className="flex-1 bg-[#180f0f84] p-[14px] rounded-md">
            <h2 className="text-white font-semibold md:text-[20px] mb-[12px]">
              {item?.span}
            </h2>
            <p className="text-[#ffffffa4] text-[15px]">{item?.info}</p>
            <p className="text-[#ffffff]  mt-[14px] font-bold text-[13px] md:text-[15px]">
              {item?.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
