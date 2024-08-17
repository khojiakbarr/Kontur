import React from "react";

export default function FacilitiesCard({ setIsModalOpen, data, isModalOpen }) {
  // const { ruTitle, enTitle } = data;
  return (
    <div
      className="w-full md:w-[580px] h-[410px] flex items-center flex-col"
      style={{
        background: ` linear-gradient(-0.4deg, #1a1a1a 10.08%, rgba(26,26,26,0.4) 126.82%), url(${data?.bg})`,
        // backgroundImage: images,
      }}
    >
      <div className="w-full h-full flex items-center justify-center flex-col">
        <p className=" text-[25px] md:text-[33.75px] text-center text-white whitespace-nowrap">
          {data && data.ruTitle}
        </p>
        <p className=" h-[42.19px] text-[25px] md:text-[33.75px] font-bold text-center text-[#ffc771] whitespace-nowrap">
          {data && data.enTitle}
        </p>
      </div>

      <button
        onClick={() =>
          setIsModalOpen({
            ...isModalOpen,
            isModal: !isModalOpen.isModal,
            id: data.id,
          })
        }
        className=" w-[270px]  mb-[40px] text-xl text-center text-white underline"
      >
        Подробнее
      </button>
    </div>
  );
}
