import React from "react";
import DoveryaCard from "../DoveryaCard/DoveryaCard";

export default function Doverya() {
  return (
    <div className="container px-[15px]">
      <h1 className="text-[#593f0d] text-[25px] md:text-[40px] font-bold text-center">
        Почему нам <span className="text-[#ffc858]"> доверяют?</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px] lg:gap-[30px] mt-[30px] md:mt-[57px]">
        <DoveryaCard
          title={"Опыт"}
          info={"Опыт наших мастеров более 10 лет"}
          image={"/bolgarka.png"}
        />{" "}
        <DoveryaCard
          title={"Гарантии"}
          info={"Даем гарантию на свои работы 2 года"}
          image={"/kirpich.png"}
        />{" "}
        <DoveryaCard
          title={"Команда"}
          info={
            "Ежеквартально наши мастера проходят профессиональную аттестацию"
          }
          image={"/komanda.png"}
        />{" "}
        <DoveryaCard
          title={"Поставщики"}
          info={"Специальные условия от поставщиков мебели для наших  клиентов"}
          image={"/postavchik.png"}
        />{" "}
        <DoveryaCard
          title={"Видеонаблюдение"}
          info={
            "Установим камеру видеонаблюдения за ремонтом, в режиме реального времени с компьютера или телефона"
          }
          image={"/kamera_icon.png"}
        />{" "}
        <DoveryaCard
          title={"Договор"}
          info={"Все сроки и гарании прописываем в договоре"}
          image={"/dogovor.png"}
        />
      </div>
      <div className="flex justify-center mt-[60px] mb-[100px]">
        <button className="bg_color px-[30px] md:px-[50px] py-[15px] md:py-[30px] rounded-[15px] md:rounded-[30px] shadow-2xl text-[12px] font-bold">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>
    </div>
  );
}
