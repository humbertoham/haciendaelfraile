import Navbar from "@/components/navbar";
import Image from "next/image";
import ButtonR from "@/components/buttonr";
import Footer from "@/components/footer";
import Map from "@/components/map";
import HaciendaElFraile from "@/components/hacienda";
export default function Hacienda() {
  return (
  <>
 <Navbar/>
    <HaciendaElFraile/>
    <Map/>
    <Footer/>
    <ButtonR/>

  </>
  );
}
