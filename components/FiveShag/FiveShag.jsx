import FiveShagCard from "./FiveShagCard";

export default function FiveShag() {
  return (
    <section>
      <div className="container px-[15px]  flex-col items-center justify-center">
        <div className="flex ">
          <h2 className="text-[#593f0d] font-normal text-center text-[30px] md:text-[40px] mt-[40px] md:mt-[80px] mb-[18px] w-[600px]">
            {" "}
            <span className="text-[#ffc858] font-bold">5 шагов</span> до ремонта
            вашей мечты
          </h2>
        </div>
        <div className="container px-[15px] flex justify-center">
          <div className="flex flex-col items-start gap-[25px] md:gap-[40px] ">
            <FiveShagCard
              num={"1"}
              title={"Заявка"}
              info={
                "Вы оставляете заявку на сайте или по телефону. Мы договариваемся о встрече для точного замера и расчета стоимости"
              }
            />
            <FiveShagCard
              num={"2"}
              title={"Замер"}
              info={"Мы выезжаем на объект, делаем все необходимые замеры"}
            />
            <FiveShagCard
              num={"3"}
              title={"Смета, договор"}
              info={"Состовляем точную смету, сроки, а также график платежей"}
            />
            <FiveShagCard
              num={"4"}
              title={"Передача ключей"}
              info={
                "После подписания договора вы передаете нам ключи, мы приступаем к работе"
              }
            />
            <FiveShagCard
              num={"5"}
              title={"Ремонт"}
              info={
                "Делаем качественный ремонт, утверждая с вами каждый этап работ"
              }
            />
            <FiveShagCard
              num={"6"}
              title={"Принимайте работу!"}
              info={
                "Принимайте работу! Получайте ваши ключи, а также уют в вашем доме"
              }
            />
          </div>
          <div className=" lg:w-[600px] object-cover hidden lg:block relative z-[-1]">
            {" "}
            <img
              className=" object-center scale-150"
              src={"instrment_jp.png"}
              alt=""
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
        <div className="flex justify-center my-[50px]">
          <buttton className="bg_color px-[20px] py-[15px] md:px-[30px] md:py-[20px] inline-block text-[13px] font-bold rounded-[15px] md:rounded-[20px] shadow-2xl cursor-pointer ">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </buttton>
        </div>
      </div>
    </section>
  );
}
