import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const promotions = [
  {
    title: "Combo Belleza Completa",
    description: "Manicure + Pedicure + Diseño de cejas",
    price: 1500,
    originalPrice: 1800,
    image: "/images/promo1.jpg",
    badge: "Más Popular",
  },
  {
    title: "Pestañas de Ensueño",
    description: "Extensiones de pestañas 3D + Diseño de cejas",
    price: 1200,
    originalPrice: 1500,
    image: "/images/promo2.jpg",
    badge: "Oferta",
  },
  {
    title: "Paquete Novia",
    description: "Maquillaje + Peinado + Manicure + Pedicure",
    price: 2500,
    originalPrice: 3000,
    image: "/images/promo3.jpg",
    badge: "Especial",
  },
]

export function Promotions() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Promociones Especiales</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-[#ff1493] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras promociones especiales y disfruta de los mejores servicios de belleza a precios
            increíbles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                {promo.badge && (
                  <Badge
                    variant={index === 0 ? "gold" : index === 1 ? "pink" : "purple"}
                    className="absolute top-4 right-4 px-3 py-1"
                  >
                    {promo.badge}
                  </Badge>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="mb-3">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">RD${promo.price}</span>
                    {promo.originalPrice && (
                      <span className="ml-2 text-sm line-through opacity-70">RD${promo.originalPrice}</span>
                    )}
                  </div>
                  <Button className="bg-white text-[#ff1493] hover:bg-white/90">Reservar</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

