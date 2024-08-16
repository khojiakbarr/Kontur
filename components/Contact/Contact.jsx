"use client";

import React from "react";
import "./Contact.css";
import { FloatingLabel } from "flowbite-react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg_contact">
        <div className="flex container px-[15px] pt-[200px] md:pt-[160px] pb-[177px] flex-wrap lg:flex-row flex-col-reverse  ">
          <div className="w-auto flex flex-col items-end">
            <div className="flex flex-col">
              <h1 className="text-[#171b20] text-[25px] md:text-[30px] font-bold w-[400px]">
                Закажите замер, а также предварительную оценку объекта <br />
                <span className="text-[#ffc858]">БЕСПЛАТНО</span>
              </h1>
              <h2 className="text-xl font-normal text-[#593f0d] mt-[30px] md:mt-[49px] w-[312]">
                На бесплатном выезде инженер замерщик:
              </h2>
              <ul className="w-[300px] text-[#593f0d] text-xl mt-[13px] ">
                <li className="list-disc ml-[30px] mb-[6px]">
                  Сделает точный замер
                </li>
                <li className="list-disc ml-[30px] mb-[6px]">
                  Сориентирует по срокам
                </li>
                <li className="list-disc ml-[30px] mb-[6px]">
                  Поможет определиться с видом ремонта
                </li>
              </ul>
            </div>
          </div>
          {/* ///Right */}
          <div className="flex-1 flex flex-col items-center md:items-end mt-[400px] md:mt-[30px]">
            <form className="bg-[#FF8A00] w-[300px] md:w-[400px] rounded-[10px] mr-[30px] mb-[30px]">
              <div className="bg-white py-[28px] px-[30px] rounded-[10px] translate-x-[-10px] translate-y-[-15px]">
                <h2 className="font-bold text-[#593f0d] text-xl md:text-3xl ">
                  Укажите ваши контакты
                </h2>
                <p className="text-[13px] md:text-[15px] font-normal mt-[7px]">
                  и мы перезвоним вам, чтобы назначить удобное время для замера
                </p>
                <div className="mt-[15px] md:mt-[25px]">
                  <FloatingLabel
                    variant="standard"
                    label=" Ваше имя"
                    className="peer-focus:text-orange-300 focus:border-orange-300  "
                  />
                </div>
                <div className="mt-[20px]">
                  <FloatingLabel
                    variant="standard"
                    label="Телефон"
                    className="peer-focus:text-orange-300 focus:border-orange-300"
                    type="tel"
                  />
                </div>
                <div className="flex justify-center mt-[30px] mb-[15px] md:mb-[30px]">
                  <button className="bg_color px-[15px] md:px-[30px] py-[15px] md:py-[20px] rounded-[20px] shadow-2xl text-[13px] font-bold">
                    ЗАКАЗАТЬ БЕСПЛАТНЫЙ ЗАМЕР
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
