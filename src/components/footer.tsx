import Navbar from "@/components/navbar";
import Image from "next/image";


import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
  <>


<footer className="bg-white ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image  className="logo ml-5"
                      src="./images/logo.svg"
                      alt="Hacienda El Fraile"
                      width={100}
                      height={100} />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Centro de Información</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/sobrenosotros" className="hover:underline">Sobre Nosotros</a>
                      </li>
                     
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Información del Negocio</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/hacienda" className="hover:underline ">Hacienda</a>
                      </li>
                     
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Asuntos Legales</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/reglamento" className="hover:underline">Reglamento</a>
                      </li>
                    
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="/" className="hover:underline">Hacienda El Fraile</a>. Derechos Reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/haciendaelfraile/" className="text-gray-500 hover:text-gray-900 ">
                  <FaFacebookF/>
                  <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/haciendaelfraile/" className="text-gray-500 hover:text-gray-900  ms-5">
                  <FaInstagram/>
                  <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@HaciendaElFraile" className="text-gray-500 hover:text-gray-900  ms-5">
                 <FaYoutube/>
                  <span className="sr-only">Youtube</span>
              </a>
              
          </div>
      </div>
    </div>
</footer>


  </>
  );
}
