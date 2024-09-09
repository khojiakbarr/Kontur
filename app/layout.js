import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metaData = {
  title: "Kontur Uz",
  description: "Дизайн интерьера, ремонт жилой и коммерческой недвижимости",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="icon" href="/Kontur_logo.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
