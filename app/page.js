import Footer from "@/components/Footer/Footer";
import TheHeader from "@/components/TheHeader/TheHeader";
import HomePage from "@/components/Home/HomePage";

export const metadata = {
  title: "Kontur",
  description: "Дизайн интерьера, ремонт жилой и коммерческой недвижимости",
};

export default function Home() {
  return (
    <>
      <TheHeader />
      <main className=" overflow-hidden ">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
