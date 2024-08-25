"use client";

import TheCarusel from "@/components/Carosel/TheCarusel";
import Companies from "@/components/Companies/Companies";
import Contact from "@/components/Contact/Contact";
import Doverya from "@/components/Doverya/Doverya";
import FiveShag from "@/components/FiveShag/FiveShag";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Main_btn from "@/components/Main_btn/Main_btn";
import Modal from "@/components/Modal/Modal";
import MySwiper from "@/components/MySwiper/MySwiper";
import TheForm from "@/components/TheForm/TheForm";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState({
    isModal: false,
    id: null,
    isPause: false,
  });

  return (
    <>
      <Hero />
      <section className=" relative">
        <Main_btn />
        <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      </section>
      <MySwiper setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <TheForm />
      <Doverya />
      <Contact />
      <FiveShag />
      <Companies />
      <TheCarusel />
      <Footer />
    </>
  );
}
