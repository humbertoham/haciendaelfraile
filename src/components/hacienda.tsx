import React from 'react';

const HaciendaElFraile = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      {/* Ajusta el espaciado según el navbar */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-6xl font-bold text-gray-800">Hacienda El Fraile</h1>
      </div>

      {/* Contenedor principal para la sección de contenido */}
      <div className="container mx-auto px-6 lg:px-16 py-10">
        {/* Sección con imágenes e información */}
        <div className="space-y-20 text-lg leading-relaxed text-gray-700">
          {/* Imagen de la Hacienda */}
          <div className="flex justify-center">
            <img
              src="./images/exterior.jpg"
              alt="Hacienda exterior"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>

          {/* Características generales */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Características Generales</h2>
            <ul className="list-disc pl-8">
              <li>5 Habitaciones</li>
              <li>Alberca 15 mts x 5 mts</li>
              <li>2 Áreas sociales</li>
              <li>Área social junto al Río Ramos</li>
              <li>Estacionamiento privado y cochera con portón eléctrico</li>
              <li>Wifi</li>
            </ul>
          </section>

          {/* Habitación principal */}
          <section className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Habitación Principal</h2>
              <ul className="list-disc pl-8">
                <li>Cama King size</li>
                <li>Baño completo</li>
                <li>Closet</li>
                <li>Sala/Comedor</li>
                <li>Cocina equipada con refrigerador, microondas, estufa, licuadora, utensilios</li>
                <li>De cortesía: Todo lo necesario para preparar café</li>
              </ul>
            </div>
            <img
              src="./images/principal.jpg"
              alt="Habitación principal"
              className="w-full rounded-lg shadow-lg"
            />
          </section>

          {/* Habitaciones sencillas */}
          <section className="grid lg:grid-cols-2 gap-8">
            <img
              src="./images/sencilla.jpg"
              alt="Habitaciones sencillas"
              className="w-full rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Habitaciones Sencillas</h2>
              <ul className="list-disc pl-8">
                <li>Cada una con cama matrimonial, baño completo y closet</li>
                <li>Minisplit, agua fría/caliente, shampoo, body wash</li>
                <li>Papel higiénico, 2 toallas grandes, 2 toallas chicas</li>
              </ul>
            </div>
          </section>

          {/* Alberca */}
          <section className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Alberca</h2>
              <ul className="list-disc pl-8">
                <li>Medidas: 15 x 5 mts</li>
                <li>Chapoteadero, 4 camastros, 2 sombrillas</li>
                <li>Baños y regaderas para hombres y mujeres</li>
              </ul>
            </div>
            <img
              src="./images/alberca.jpg"
              alt="Alberca"
              className="w-full rounded-lg shadow-lg"
            />
          </section>

          {/* Áreas sociales */}
          <section className="grid lg:grid-cols-2 gap-8">
            <img
              src="./images/area.jpg"
              alt="Áreas sociales"
              className="w-full rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Áreas Sociales</h2>
              <ul className="list-disc pl-8">
                <li>Asador de acero inoxidable, chimenea, estufa y tarja</li>
                <li>Barra y bancos</li>
                <li>Medios baños en ambas áreas sociales</li>
              </ul>
            </div>
          </section>

          {/* Área Social Aldeña al Río Ramos */}
          <section className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Área Social Aldeña al Río Ramos</h2>
              <ul className="list-disc pl-8">
                <li>Chimenea, asador, tarja</li>
                <li>2 mesas con bancas de concreto</li>
                <li>Fogatero, área techada</li>
              </ul>
            </div>
            <img
              src="./images/rio.jpg"
              alt="Área social Río Ramos"
              className="w-full rounded-lg shadow-lg"
            />
          </section>

          {/* Cocina al exterior & Bar */}
          <section className="grid lg:grid-cols-2 gap-8">
            <img
              src="./images/cocina.jpg"
              alt="Cocina al exterior"
              className="w-full rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cocina al Exterior & Bar</h2>
              <ul className="list-disc pl-8">
                <li>Asador, chimenea, estufa y tarja</li>
                <li>Barra con 5 bancos, refrigerador</li>
                <li>2 comedores con 4 sillas cada uno, minisplit</li>
              </ul>
            </div>
          </section>

          {/* Precios y Reservaciones */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Precios y Reservaciones</h2>
            <p className="mb-2">
              <strong>Estancia por Noche:</strong> $7,000 MXN (5 habitaciones, 21 horas)
            </p>
            <p className="mb-2">Capacidad para 12 personas (máximo 30 personas)</p>
            <ul className="list-disc pl-8">
              <li>Persona extra: $300 MXN</li>
              <li>Hora extra: $600 MXN</li>
            </ul>
            <p className="mt-4">Hora de entrada: 1:00 P.M. | Hora de salida: 11:00 A.M.</p>
            <p className="mt-4">No se aceptan mascotas.</p>
          </section>

          {/* Forma de Pago */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Forma de Pago</h2>
            <p className="mb-2">
              Para reservar, se solicita un anticipo de $3,000 MXN por depósito o transferencia bancaria. El
              resto se paga en efectivo al llegar a la propiedad. En caso de cancelación, no hay reembolso.
            </p>
            <p>Contrato, inventario y reglamento deben firmarse antes de ingresar a la propiedad.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HaciendaElFraile;
