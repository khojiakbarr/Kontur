import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="bg_hero overflow-hidden">
      <div className="pt-[40px] md:pt-[80px] container mx-auto px-[15px]">
        <div className="wrapper  relative z-[0]  flex justify-between">
          <div className="hero_title">
            <h6 className="md:text-[24px] font-[400] text-black flex items-center gap-1 mb-[5px]">
              <p className=" relative z-[10] w-[22px] h-[22px] bg-green-400 rounded-[30px]"></p>
              Ежедневно с 9:00 до 18:00
            </h6>
            <h2 className="md:text-[40px] w-[375px] md:w-[700px] text-[#593f0d]">
              Дизайн интерьера, ремонт жилой и коммерческой недвижимости <br />
              <span className="text-[#ffcf6e] font-bold md:font-[400]">
                под ключ в Тюмени
              </span>
            </h2>
            <p className=" h-[3px] w-[40px] md:w-[100px] bg-[#ffcf6e] my-[7px] md:my-[10px]"></p>
            <h3 className=" md:text-[24px] font-[400] w-[250px] md:w-[400px]">
              Выполним ремонт точно в срок с гарантией по договору
            </h3>

            <button className="bg_color px-[10px] relative button md:px-[24px] py-[10px] md:py-[24px] shadow-xl mt-[30px] mb-[30px] md:my-[40px] rounded-[10px] text-[10px] md:text-[14px] font-[700] cursor-pointer">
              Рассчитать стоимость ремонта
              <img
                className=" absolute w-[50px] md:w-[100px] right-[-30px] md:right-[-52px] top-[-10px]"
                src={"/docs.png"}
                alt="doc"
              />
            </button>
          </div>
          <div className="wrapper_scroll hidden  absolute right-0 top-0 w-[50%] lg:flex justify-center ">
            <div className="scroller_content flex flex-col gap-[20px] mr-[40px]">
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img src={"/kamera.png"} alt="kamera" />
                </div>
              </div>
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img src={"/kamera.png"} alt="kamera" />
                </div>
              </div>
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img src={"/kamera.png"} alt="kamera" />
                </div>
              </div>
              {/* ///poftor */}
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img src={"/kamera.png"} alt="kamera" />
                </div>
              </div>{" "}
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img src={"/kamera.png"} alt="kamera" />
                </div>
              </div>{" "}
              <div className="rounded-[20px]">
                <div className=" w-[320px] backdrop-blur-[13px] flex flex-col items-center justify-center p-[20px] rounded-[20px]  ">
                  <p className="font-[400] text-[18px] text-center text-white ">
                    Установим камеру, для наблюдения за ремонтом в режиме
                    реального времени с компьютера или мобильного телефона
                  </p>
                  <img src={"/kamera.png"} alt="kamera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
