import TheHeader from "@/components/TheHeader/TheHeader";
import HomePage from "@/components/Home/HomePage";
import "react-toastify/dist/inject-style";
import ToastWrapper from "@/components/TastWrapper/ToastWrapper";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <ToastWrapper>
      <TheHeader />
      <main className=" overflow-hidden ">
        <HomePage />
      </main>
      <Footer />
    </ToastWrapper>
  );
}
