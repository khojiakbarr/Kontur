import { Montserrat } from "next/font/google";
import "./globals.css";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kontur",
  description: "Дизайн интерьера, ремонт жилой и коммерческой недвижимости",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Kontur_logo.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
