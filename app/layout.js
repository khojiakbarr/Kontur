import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metaData = {
  title: "Kontur UZ",
  description: "РЕМОНТПОД КЛЮЧ ИНТЕРЬЕР ДИЗАЙН",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Kontur_logo.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
