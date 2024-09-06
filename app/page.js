import TheHeader from "@/components/TheHeader/TheHeader";
import HomePage from "@/components/Home/HomePage";
import "react-toastify/dist/inject-style";
import ToastWrapper from "@/components/TastWrapper/ToastWrapper";

// export const metadata = {
//   title: "Kontur",
//   description: "Дизайн интерьера, ремонт жилой и коммерческой недвижимости",
// };

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
