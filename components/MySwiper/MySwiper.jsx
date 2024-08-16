import React from "react";
import FacilitiesCard from "../Cards/FacilitiesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Grid,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "./MySwiper.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { swiperdata } from "@/static/swiperData";

export default function MySwiper({ setIsModalOpen, isModalOpen }) {
  return (
    <section className="">
      <div className="flex flex-col items-center my-[30px] md:mt-[50px]">
        <h2 className="w-auto md:w-[660px] text-[23px] md:text-[40px] text-center px-[15px] font-[700]">
          С<span className="font-bold text-[#ff8a00]"> 2015 года </span>{" "}
          отремонтировали более
          <span className="font-bold text-[#ff8a00]">160 объектов</span>
        </h2>
        <h3 className="text-[15px] md:w-[750px] md:text-[25px] text-center text-[#593f0d]">
          От небольших студий до ресторанов на высоте 100 метров
        </h3>
      </div>
      <div className="container relative px-[15px] ">
        <Swiper
          keyboard={true}
          navigation={true}
          slidesPerView={2}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          // autoplay={{
          //   delay: 4500,
          // }}
          grid={{
            rows: 2,
          }}
          loop={true}
          spaceBetween={30}
          modules={[
            Grid,
            Pagination,
            Navigation,
            Mousewheel,
            Keyboard,
            Autoplay,
          ]}
          className="mySwiper "
        >
          {swiperdata.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="flex justify-center items-center w-full">
                <FacilitiesCard
                  data={data}
                  setIsModalOpen={setIsModalOpen}
                  isModalOpen={isModalOpen}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex  justify-center my-[70px]">
        <button className="bg_color  px-[30px] md:px-[50px] pt-[15px] pb-[15px] md:pt-[30px] md:pb-[20px] rounded-[20px] shadow-xl text-[15px] font-[700]">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>
    </section>
  );
}
