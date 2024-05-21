
'use client'
import Contacts from "@/components/Contacts/Contacts";
import Controlls from "@/components/Controlls/Controlls";
import Disign from "@/components/Disign/Disign";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MiOtcritiDlyaVas from "@/components/MiOtcritiDlyaVas/MiOtcritiDlyaVas";
import Modal from "@/components/Modal/Modal";
import Otlichia from "@/components/Otlichia/Otlichia";
import Otzivi from "@/components/Otzivi/Otzivi";
import Partners from "@/components/Partners/Partners";
import Poleznoe from "@/components/Poleznoe/Poleznoe";
import Poligon from "@/components/Poligon/Poligon";
import Price from "@/components/Price/Price";
import PrimeriRabot from "@/components/PrimeriRabot/PrimeriRabot";
import Rassrochka from "@/components/Rassrochka/Rassrochka";
import Sale from "@/components/Sale/Sale";
import Sclad from "@/components/Sclad/Sclad";
import SeasonSale from "@/components/SeasonSale/SeasonSale";
import Sertificats from "@/components/Sertificats/Sertificats";
import Smeta from "@/components/Smeta/Smeta";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <>
    {modal && <Modal setModal={setModal}/>}
    <Header setModalForm={setModal}/>
    <Hero setModal={setModal}/>
    <Sale setModal={setModal}/>
    <Price setModal={setModal}/>
    <Rassrochka setModal={setModal}/>
    <SeasonSale/>
    <PrimeriRabot/>
    <Disign/>
    <Controlls/>
    <Otlichia/>
    <MiOtcritiDlyaVas/>
    <Poligon/>
    <Smeta/>
    <Sclad/>
    <Sertificats/>
    <Partners/>
    <Otzivi/>
    <Poleznoe setModal={setModal}/>
    <Contacts setModal={setModal}/>
    <Footer setModal={setModal}/>
    </>
  );
}
