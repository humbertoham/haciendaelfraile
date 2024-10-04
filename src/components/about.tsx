export default function About() {
    return (
      <>
        {/* Sección "Conócenos" */}
        <div className="max-w-6xl text-gray-600 mx-auto bg-zinc-100 rounded-3xl my-3 grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto md:px-0 md:py-0 px-10 flex flex-col">
            <h1 className="font-bold mb-2 text-4xl text-gray-900">Conoce Hacienda El Fraile</h1>
            <p>
              Hacienda El Fraile es una joya oculta en el corazón de la naturaleza, rodeada de paisajes
              impresionantes y la serenidad del Río Ramos. Con más de 50 años de historia, esta hacienda
              ha sido cuidadosamente restaurada para ofrecer una experiencia única de lujo y confort, sin
              perder su esencia tradicional.
            </p>
            <p>
              Contamos con instalaciones modernas en armonía con el entorno natural, ofreciendo el lugar
              perfecto para eventos sociales, reuniones familiares o una escapada relajante. Nuestra
              hacienda está equipada con una alberca amplia, áreas sociales, asadores y habitaciones
              diseñadas para el descanso total.
            </p>
            <p>
              En Hacienda El Fraile, cada detalle ha sido pensado para que vivas una experiencia inolvidable.
              Ya sea que busques un espacio para celebrar con tus seres queridos o disfrutar de un fin de semana
              en la naturaleza, te ofrecemos un ambiente acogedor y servicios de primer nivel.
            </p>
          </div>
          <div className="md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto md:px-5 md:py-0 pb-5 px-10 flex flex-col">
            <img
              src="./images/hacienda.jpg"
              className="rounded-3xl"
              alt="Hacienda El Fraile exterior"
            />
          </div>
        </div>
  
        {/* Sección "Nuestros Valores" */}
        <div className="max-w-6xl mx-auto rounded-3xl mb-5 grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto md:px-5 md:py-0 pb-5 px-10 flex flex-col">
            <img
              src="./images/rio.jpg"
              className="rounded-3xl"
              alt="Área Social Hacienda El Fraile"
            />
          </div>
          <div className="md:ml-16 max-w-70 md:mt-20 mb-0 mt-16 mx-auto md:px-0 md:py-0 text-gray-600 px-10 flex flex-col">
            <h1 className="font-bold text-4xl text-gray-900">Nuestros Valores</h1>
            
            <h2 className="font-bold text-2xl text-gray-900 mt-6">Tranquilidad</h2>
            <p className="my-4">
              Valoramos la paz y la tranquilidad que ofrece nuestra ubicación. Aquí, nuestros huéspedes
              encuentran un refugio lejos del bullicio de la ciudad, donde el sonido del río y la naturaleza
              crean el ambiente perfecto para relajarse.
            </p>
            
            <h2 className="font-bold text-2xl text-gray-900 mt-6">Conexión con la Naturaleza</h2>
            <p className="my-4">
              Creemos en la importancia de reconectar con la naturaleza. En Hacienda El Fraile, nuestros
              espacios están diseñados para que puedas disfrutar del aire libre, ya sea junto a la alberca,
              en nuestras áreas sociales o explorando los alrededores del Río Ramos.
            </p>
  
            <h2 className="font-bold text-2xl text-gray-900 mt-6">Hospitalidad</h2>
            <p className="my-4">
              La hospitalidad es el corazón de nuestra hacienda. Nos comprometemos a hacer sentir a cada
              huésped como en casa, con un servicio personalizado, atento y siempre dispuesto a atender
              cualquier necesidad.
            </p>
          </div>
        </div>
      </>
    );
  }
  