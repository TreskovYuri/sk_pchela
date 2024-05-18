import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ремонт квартир в Москве и МО — от 2990 руб./м², строительная компания «Пчела»",
  description: "Ремонт квартир под ключ в Москве и Москвой области от «СК Пчела» — цена от 2990 рублей/м² ; +7 (999) 999-9999; замерщик в день обращения; официальный договор; начало ремонта через 1 день; без предоплаты; гарантия до 5 лет",
};

export default function RootLayout({ children }) {
  return (
    <html lang="кгn">
      <body className={montserrat.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
