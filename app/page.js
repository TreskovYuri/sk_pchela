
import Contacts from "@/components/Contacts/Contacts";
import Controlls from "@/components/Controlls/Controlls";
import Disign from "@/components/Disign/Disign";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MiOtcritiDlyaVas from "@/components/MiOtcritiDlyaVas/MiOtcritiDlyaVas";
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

export default function Home() {
  return (
    <>
    <Hero/>
    <Sale/>
    <Price/>
    <Rassrochka/>
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
    <Poleznoe/>
    <Contacts/>
    <Footer/>
    </>
  );
}
