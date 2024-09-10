import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Контур",
  description: "Выполним ремонт точно в срок с гарантией по договору",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
