"use client";

import axios from "axios";
import { toast } from "react-toastify";

const CHAT_ID = "-4543236365";
const TOKEN = "7492440970:AAGOvJNdQM6Ielm04x9t8v3IiCunYLO3B9E";
const API_KEY = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const SendMessage = async ({ newData, theForm }) => {
  if (theForm) {
    try {
      let message = `Cтоимость ремонта:\n`;
      message += `<b>Тип площад: </b>${newData.tip}\n`;
      message += `<b>Тарифы: </b>${newData.tarif}\n`;
      message += `<b>Предварителний расчет: </b>${newData.price} y.e \n`;
      message += `<b>имя: </b>${newData.name} \n`;
      message += `<b>телефон: </b>${newData.phone} \n`;

      const res = await axios.post(API_KEY, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });
      if (res.status == 200) {
        toast.success("Сообщение отправлено");
      } else {
        toast.error("Сообщение не отправлено");
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  } else {
    let message = `Kontur contact:\n`;
    message += `<b>имя: </b>${newData.name} \n`;
    message += `<b>телефон: </b>${newData.phone} \n`;

    const res = await axios.post(API_KEY, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    if (res.status == 200) {
      toast.success("Сообщение отправлено");
    } else {
      toast.error("Сообщение не отправлено");
    }
  }
};

export { SendMessage };
