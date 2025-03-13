import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María Rodríguez",
    image: "/images/testimonial1.jpg",
    text: "¡Increíble servicio! Me encantó cómo quedaron mis uñas y el maquillaje para mi evento especial. El personal es muy profesional y amable.",
    rating: 5,
  },
  {
    name: "Carolina Méndez",
    image: "/images/testimonial2.jpg",
    text: "Las extensiones de pestañas quedaron perfectas y muy naturales. Definitivamente volveré para mi próximo evento.",
    rating: 5,
  },
  {
    name: "Luisa Fernández",
    image: "/images/testimonial3.jpg",
    text: "Compré extensiones de cabello y la calidad es excelente. Además, el servicio de asesoría fue muy útil para elegir el tipo adecuado.",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestras clientas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-[#ff1493] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#ff1493]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

