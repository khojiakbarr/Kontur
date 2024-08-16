import React from "react";

export default function Footer() {
  return (
    <footer className="mt-[40px]">
      <div className="container my-[100px] px-[15px]">
        <div className="flex shadow-[1px_1px_18px_-8px_#000] p-[10px] md:p-[25px] lg:p-[55px] rounded-[5px] flex-col sm:flex-row">
          <div className=" lg:min-w-[375px] w-full md:w-1/3">
            <h2 className="w-[150px] lg:w-[325px] text-[2xl] md:text-3xl lg:text-4xl font-bold text-left text-[#593f0d] mb-[25px] lg:mb-[53px]">
              Контактная информация
            </h2>

            <div className="flex md:flex-col gap-[23px] w-full flex-wrap-reverse mb-[30px]">
              <div className="w-auto md:w-full">
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] font-bold text-left text-[#ffc858]">
                  E-mail
                </h3>
                <a
                  className="text-[16px] lg:text-[22px] font-bold text-left text-[#5a5859] underline"
                  href="mailto:info@remont.ru"
                >
                  info@remont.ru
                </a>
              </div>

              <div className="w-auto md:w-full">
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] font-bold text-left text-[#ffc858]">
                  Телефон
                </h3>
                <a
                  className="text-[16px] lg:text-[22px] font-bold text-left text-[#5a5859] underline"
                  href="tel:+998997224753"
                >
                  +998 99 722 47 53
                </a>
              </div>

              <div className="w-auto md:w-full">
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] font-bold text-left text-[#ffc858]">
                  График работы
                </h3>
                <span className="text-[16px] lg:text-[22px] font-bold text-left text-[#5a5859] underline">
                  с 9:00 до 18:00
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] sm:h-auto sm:w-2/3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.83248494579!2d69.2281415!3d41.32608755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1722079107110!5m2!1sru!2s"
              width="100%"
              height="100%"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
