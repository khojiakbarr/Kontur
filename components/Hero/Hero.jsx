import React from "react";
import "./Hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg_hero overflow-hidden">
      <div className="pt-[40px] md:pt-[80px] container mx-auto px-[15px]">
        <div className="wrapper  relative z-[0]  flex justify-between">
          <div className="hero_title">
            <h6 className="md:text-[24px] font-[400] text-black flex items-center gap-1 mb-[5px]">
              <span className=" relative z-[10] w-[22px] h-[22px] bg-green-400 rounded-[30px]"></span>
              Ежедневно с 9:00 до 18:00
            </h6>
            <h1 className="md:text-[40px] w-[375px] md:w-[700px] text-[#593f0d]">
              Дизайн интерьера, ремонт жилой и коммерческой недвижимости <br />
              <span className="text-[#ff8a00] font-bold md:font-[400]">
                под ключ в Ташкенте
              </span>
            </h1>
            <span className="block h-[3px] w-[40px] md:w-[100px] bg-[#ff8a00] my-[7px] md:my-[10px]"></span>
            <h2 className=" md:text-[24px] font-[400] w-[250px] md:w-[400px]">
              Выполним ремонт точно в срок с гарантией по договору
            </h2>

            <Link href={"#form_info"}>
              <button className="bg_color px-[10px] relative button md:px-[24px] py-[10px] md:py-[24px] shadow-xl mt-[30px] mb-[30px] md:my-[40px] rounded-[10px] text-[10px] md:text-[14px] font-[700] cursor-pointer">
                Рассчитать стоимость ремонта
                <img
                  className=" absolute w-[50px] md:w-[100px] right-[-30px] md:right-[-52px] top-[-10px]"
                  src={"/docs.png"}
                  alt="doc"
                  referrerPolicy="no-referrer"
                />
              </button>
            </Link>
          </div>
          <div className="wrapper_scroll hidden  absolute right-0 top-0 w-[50%] lg:flex justify-center ">
            <div className="scroller_content flex flex-col gap-[20px] mr-[40px]">
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img
                    src={"/kamera.png"}
                    alt="kamera"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="rounded-[20px] h-[306px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <h2 className="font-[400] text-[18px] text-center text-white ">
                    Специальные условия от поставщиков мебели для наших клиентов
                  </h2>
                  <img
                    src={"/qalam_ruchka_icon.png"}
                    alt="qalam"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="rounded-[20px] ">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <h2 className="font-[400] text-[18px] text-center text-white ">
                    Даем гарантию на свои работы 2 года
                  </h2>
                  <img
                    className="py-[40px]"
                    src={"/insturment_icon.png"}
                    alt="insturment"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* ///poftor */}
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img
                    src={"/kamera.png"}
                    alt="kamera"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="rounded-[20px] h-[306px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Специальные условия от поставщиков мебели для наших клиентов
                  </p>
                  <img
                    src={"/qalam_ruchka_icon.png"}
                    alt="qalam"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="rounded-[20px] ">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Даем гарантию на свои работы 2 года
                  </p>
                  <img
                    className="py-[40px]"
                    src={"/insturment_icon.png"}
                    alt="insturment"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
