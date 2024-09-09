import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Контур",
  description: "Выполним ремонт точно в срок с гарантией по договору",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="google-site-verification"
          content="tAAmBHlEVjOFK6kjcOizJO_CrkGepXjtudO2_mI5Hs0"
        />
      </Head>
      <link rel="icon" href="/Kontur_logo.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
