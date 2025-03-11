import { HairProductCard } from "./hair-product-card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const hairProducts = [
  {
    image: "/images/hair1.jpg",
    title: "Cabello Lacio Natural Premium",
    price: 2999,
    originalPrice: 3999,
    rating: 5,
    length: "18 pulgadas",
    type: "Lacio Natural",
    weight: "100g",
    inStock: true,
  },
  {
    image: "/images/hair2.jpg",
    title: "Ondas Brasileñas Luxury",
    price: 3499,
    rating: 4,
    length: "20 pulgadas",
    type: "Ondulado Brasileño",
    weight: "100g",
    inStock: true,
  },
  {
    image: "/images/hair3.jpg",
    title: "Rizado Natural Peruano",
    price: 2799,
    originalPrice: 3299,
    rating: 5,
    length: "16 pulgadas",
    type: "Rizado Natural",
    weight: "100g",
    inStock: false,
  },
  {
    image: "/images/hair4.jpg",
    title: "Lacio Sedoso Malayo",
    price: 3999,
    rating: 5,
    length: "22 pulgadas",
    type: "Lacio Sedoso",
    weight: "100g",
    inStock: true,
  },
]

export function HairSection() {
  return (
    <section id="extensiones" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary text-primary">
            100% CABELLO NATURAL
          </Badge>
          <h2 className="section-title">Extensiones de Cabello Premium</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Descubre nuestra exclusiva colección de cabello 100% natural. Ofrecemos la más alta calidad en extensiones
            de cabello, con diferentes texturas y longitudes para satisfacer tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {hairProducts.map((product, index) => (
            <HairProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-soft p-10 max-w-4xl mx-auto animate-on-scroll">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">¿Por qué elegir nuestro cabello?</h3>
          <Separator className="mb-8 bg-gradient-to-r from-primary-dark to-primary" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">100% Cabello humano natural</h4>
                  <p className="text-neutral-600">
                    Garantizamos que todas nuestras extensiones son de cabello humano de la más alta calidad.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Sin enredos</h4>
                  <p className="text-neutral-600">
                    Nuestras extensiones son fáciles de mantener y no se enredan con el uso diario.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Puede ser teñido y estilizado</h4>
                  <p className="text-neutral-600">
                    Personaliza tu look con tintes y diferentes estilos según tus preferencias.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Durabilidad garantizada</h4>
                  <p className="text-neutral-600">
                    Con el cuidado adecuado, nuestras extensiones duran más tiempo que las opciones convencionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

