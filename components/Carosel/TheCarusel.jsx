import { Carousel } from "flowbite-react";

export default function TheCarusel() {
  return (
    <div className="container p-[15px]">
      <h2 className="text-[25px] md:text-[40px] font-normal text-center mt-[50px] md:mt-[120px] mb-[20px]">
        Отзывы наших клиентов
      </h2>
      <div className="flex justify-center h-56 md:h-[520px]">
        <Carousel
          slideInterval={6000}
          indicators={false}
          className="md:w-[60%]"
        >
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
