import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-200">
      {/* Fondo de Imagen con Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/exterior.jpg" // Cambia la ruta de la imagen según corresponda
          alt="Fondo de hero"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Vive la Experiencia Única de Hacienda El Fraile
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Disfruta de un entorno natural, instalaciones de lujo y servicios personalizados para una estancia inolvidable en el corazón de la naturaleza.
          </p>
          <a href="/hacienda" className="inline-block button text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Conoce la Hacienda
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
