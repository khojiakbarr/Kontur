import React from "react";

export default function PlanCard({ image }) {
  return (
    <div
      className="w-80 rounded-[10px] bg-[#f9f9f9] p-[23px_20px]"
      style={{ boxShadow: "0px 2px 24px 4px rgba(0,0,0,0.15)" }}
    >
      <img
        src={image}
        className="w-full h-48 rounded-[10px] object-cover"
        alt=""
        referrerpolicy="no-referrer"
      />

      <p className="w-[274px] text-[23px] text-left text-[#593f0d] mt-[19px] mb-[16px]">
        <span className="w-[274px] text-[23px] font-bold text-left text-[#593f0d]">
          Тариф «Эконом»{" "}
        </span>
        <br />
        <span className="w-[274px] text-[23px] text-left text-[#593f0d]">
          от 4000 ₽/м²
        </span>
      </p>

      <p className="w-full text-base font-light text-left text-[#593f0d] flex flex-col">
        <span className="text-base font-light text-left text-[#593f0d]">
          — Стены и обои
        </span>
        <span className="text-base font-light text-left text-[#593f0d]">
          — Пол: Ламинат или кварцвинил
        </span>
        <span className="text-base font-light text-left text-[#593f0d]">
          — Сан. узел - плитка
        </span>
      </p>
    </div>
  );
}
