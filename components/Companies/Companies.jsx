import React from "react";

export default function Companies() {
  return (
    <>
      <div className="relative">
        <div className="container px-[15px]">
          <div className="flex justify-center text-center flex-col items-center">
            <h2 className="text-[20px] md:text-[36px] font-normal text-[#593f0d] md:w-[700px] mb-[10px] md:mb-[19px]">
              Используем только лучшие метериалы от{" "}
              <span className="font-bold text-[#ffc771]">80+</span> Мировых
              производителей
            </h2>
            <p className="font-normal text-[15px] md:text-[25px]">
              Некоторые из них:
            </p>
          </div>
          <div className=" w-full flex justify-center mt-[17px] flex-col items-center">
            {" "}
            <img
              src={"/companies_jp.jpg"}
              alt="componies"
              referrerpolicy="no-referrer"
            />
            <img
              className=" hidden md:block absolute bottom-[-150px] left-0"
              src={"/arava.png"}
              alt=""
              referrerpolicy="no-referrer"
            />{" "}
            <img
              className=" hidden md:block absolute bottom-[-50px] right-0"
              src={"/bonka_kraska.png"}
              alt=""
              referrerpolicy="no-referrer"
            />
            <div className="flex justify-center my-[50px] ">
              <button className="bg_color px-[20px] py-[15px] md:px-[30px] md:py-[20px] rounded-[15px] md:rounded-[20px] text-[12px] md:text-[15px] font-bold shadow-2xl">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-[15px]">
        <h2 className="text-center text-[20px] md:text-[40px] text-[#593f0d] mt-[40px] md:mt-[160px] ">
          Ремонт с нами - <span className="text-[#ffc771]">выгодно</span>
        </h2>
        <div className="flex justify-center mt-[30px] md:mt-[50px]">
          <div className="flex flex-col items-center">
            <h3 className="text-[20px] md:text-[25px] font-normal md:w-[500px] text-center mb-[30px] text-[#593f0d]">
              Предоставляем гибкую систему оплаты ремонта, а также беспроцентную
              рассрочку через банки партнеры
            </h3>
            <button className="bg_color px-[20px] py-[15px] md:px-[30px] md:py-[20px] rounded-[15px] md:rounded-[20px] text-[12px] md:text-[15px] font-bold shadow-2xl ">
              {" "}
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
          </div>
          <div className="hidden md:block">
            <img src={"/one_more.png"} alt="" referrerpolicy="no-referrer" />
          </div>
        </div>
      </div>
    </>
  );
}
