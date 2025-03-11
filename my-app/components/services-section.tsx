import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServicesCarousel } from "@/components/services-carousel"

// Datos de servicios
const services = [
  {
    title: "Pestañas 2D y 3D",
    description: "Extensiones de pestañas para una mirada más intensa",
    icon: "👁️",
    image: "/images/servicios.jpg",
    items: ["Pestañas 2D", "Pestañas 3D", "Extensiones de volumen", "Remoción segura", "Mantenimiento"],
  },
  {
    title: "Diseño de Cejas",
    description: "Diseño profesional para realzar tu mirada",
    icon: "✨",
    image: "/images/servicios.jpg",
    items: ["Diseño personalizado", "Depilación con hilo", "Microblading", "Laminado de cejas", "Tinte de cejas"],
  },
  {
    title: "Maquillaje",
    description: "Maquillaje profesional para toda ocasión",
    icon: "💄",
    image: "/images/maquillaje.jpg", // Added image property
    items: [
      "Maquillaje social",
      "Maquillaje de novia",
      "Maquillaje para eventos",
      "Clases personalizadas",
      "Automaquillaje",
    ],
  },
]

interface ServicesSectionProps {
  showFullContent?: boolean
}

export function ServicesSection({ showFullContent = false }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!showFullContent && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-[#ff1493] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En Shua Makeup & Beauty ofrecemos servicios profesionales para realzar tu belleza natural. Nuestro equipo
              de expertos está listo para atenderte con los mejores productos y técnicas.
            </p>
          </div>
        )}

        <Image
          src="/images/servicios.jpg"
          alt="Servicios Disponibles"
          width={800}
          height={800}
          className="mx-auto mb-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        />

        <ServicesCarousel services={services} />

        {!showFullContent && (
          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button className="bg-gradient-to-r from-purple-600 to-[#ff1493] text-white hover:opacity-90 transition-opacity shadow-md">
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

