import Rules from "@/components/rules";
import Image from "next/image";

import Navbar from "@/components/navbar";
import ButtonR from "@/components/buttonr";
import Footer from "@/components/footer";
import Map from "@/components/map";

export default function Reglamento() {
  return (
  <>
  <Navbar/>
    <Rules/>
    <Map/>
    <Footer/>
    <ButtonR/>
  </>
  );
}
