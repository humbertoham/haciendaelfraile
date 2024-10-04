import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Sobre Hacienda El Fraile</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600">
              Ubicada junto al Río Ramos, Hacienda El Fraile ofrece un entorno natural único y 
              una experiencia de lujo. Ideal para descansar, disfrutar de la naturaleza y celebrar 
              eventos especiales en sus áreas sociales exclusivas. 
            </p>
            <p className="mt-4 text-lg text-gray-600">
              La estancia incluye 5 habitaciones completamente equipadas, piscina, áreas sociales, 
              y más. Relájate en la tranquilidad del campo con todas las comodidades que necesitas.
            </p>
          </div>
          <div>
            <Image
              src="/images/hacienda2.jpg"
              alt="Vista de la hacienda"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
