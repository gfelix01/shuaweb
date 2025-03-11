import Image from "next/image"
import Link from "next/link"
import { Instagram, MapPin, Phone, ChevronRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Shua Makeup Logo"
                width={200}
                height={200}
                className="h-24 w-auto mix-blend-screen"
              />
            </div>
            <p className="text-neutral-400 mb-6">
              Tu destino de belleza y cuidado personal. Ofrecemos servicios profesionales para realzar tu belleza
              natural.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/shuamakeupstudio"
                target="_blank"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#servicios"
                  className="text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#extensiones"
                  className="text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span>Extensiones de Cabello</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#galeria"
                  className="text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span>Galería</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Información de Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-neutral-400">Av. Santa Rosa esquina Altagracia, Plaza Maureen</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-neutral-400">829-641-8720</span>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-primary" />
                <span className="text-neutral-400">@shuamakeupstudio</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Shua Makeup & Beauty. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

