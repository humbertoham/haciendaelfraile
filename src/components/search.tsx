import React from 'react';
import Image from 'next/image';

const SearchPropertiesSection = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Fondo de la sección */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rio.jpg" // Cambia la ruta de la imagen según corresponda
          alt="Fondo de Búsqueda de Propiedades"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        {/* Título y Descripción */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encuentra Tu Propiedad Ideal
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            ¿Estás listo para encontrar la casa de tus sueños? Nuestro amplio inventario de propiedades está diseñado para satisfacer tus necesidades y superar tus expectativas. Utiliza nuestro buscador para explorar una variedad de opciones y dar el primer paso hacia tu nuevo hogar.
          </p>
          <a href="/hacienda" className="inline-block button text-white font-semibold py-3 px-6 rounded-lg shadow-lg  transition duration-300 ease-in-out">
            Ver más información
          </a>
        </div>
      </div>
    </section>
  );
};

export default SearchPropertiesSection;
