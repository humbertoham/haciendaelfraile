import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/navbar";
import ButtonR from "@/components/buttonr";
import Footer from "@/components/footer";
import Map from "@/components/map";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Hacienda El Fraile",
  description: "Hacienda El Fraile es el destino perfecto para quienes buscan combinar la elegancia y el confort con la serenidad de la naturaleza. Situada en un entorno natural impresionante junto al Río El Fraile, nuestra hacienda ofrece una experiencia única y memorable para cada visitante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>



    <meta property="og:title" content="Hacienda El Fraile"/>
    <meta property="og:description" content="Hacienda El Fraile es el destino perfecto para quienes buscan combinar la elegancia y el confort con la serenidad de la naturaleza. Situada en un entorno natural impresionante junto al Río El Fraile, nuestra hacienda ofrece una experiencia única y memorable para cada visitante."/>
    <meta property="og:image" content="../../public/images/portada.jpg"/>
    <meta property="og:url" content="https://haciendaelfraile.com"/>
    <meta property="og:type" content="website"/>



      </Head>
      <Navbar/>  

      <body className={inter.className}>
        
        {children}</body>
        <Map/>
        <Footer/>
        <ButtonR/>
    </html>
  );
}
