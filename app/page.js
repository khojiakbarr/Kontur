import TheHeader from "@/components/TheHeader/TheHeader";
import HomePage from "@/components/Home/HomePage";
import "react-toastify/dist/inject-style";
import ToastWrapper from "@/components/TastWrapper/ToastWrapper";

export const metadata = {
  title: "Контур",
  description: "Выполним ремонт точно в срок с гарантией по договору",
};

export default function Home() {
  return (
    <ToastWrapper>
      <TheHeader />
      <main className=" overflow-hidden ">
        <HomePage />
      </main>
    </ToastWrapper>
  );
}
