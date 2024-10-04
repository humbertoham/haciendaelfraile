import React from "react";
import Image from "next/image";

const AccommodationDetails = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Detalles de Alojamiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Habitación Principal</h3>
            <p className="mt-2 text-gray-600">Cama King size, baño completo, sala-comedor y cocina equipada.</p>
            <Image
              src="/images/principal.jpg"
              alt="Habitación Principal"
              width={600}
              height={400}
              className="rounded-lg mt-4"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Habitaciones Sencillas</h3>
            <p className="mt-2 text-gray-600">4 habitaciones con cama matrimonial, baño completo y closet.</p>
            <Image
              src="/images/sencilla.jpg"
              alt="Habitaciones sencillas"
              width={600}
              height={400}
              className="rounded-lg mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationDetails;
