import Navbar from "@/components/navbar";
import Image from "next/image";
import ButtonR from "@/components/buttonr";
import Footer from "@/components/footer";
import Map from "@/components/map";
import HeroSection from "@/components/banner";
import AboutSection from "@/components/aboutsection";
import AccommodationDetails from "@/components/acom";
import SearchPropertiesSection from "@/components/search";
export default function Home() {
  return (
  <>
 <Navbar/>
  <HeroSection/>
    <AboutSection/>
    <AccommodationDetails/>
    <SearchPropertiesSection/>
<Map/>
<Footer/>
<ButtonR/>


  </>
  );
}
