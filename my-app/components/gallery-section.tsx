import Image from "next/image"
import type { GallerySectionProps } from "@/types"

export function GallerySection({ showFullContent = false }: GallerySectionProps) {
  // Número de imágenes a mostrar
  const previewCount = showFullContent ? 12 : 8

  return (
    <section id="galeria" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Galería de Trabajos</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Explora algunos de nuestros mejores trabajos y descubre por qué somos el destino preferido para servicios de
            belleza.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 animate-on-scroll">
          {Array.from({ length: previewCount }).map((_, item) => (
            <div
              key={item}
              className="relative aspect-square group overflow-hidden rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={`/images/gallery${(item % 8) + 1}.jpg`}
                alt={`Trabajo ${item + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-5 text-white w-full">
                  <h3 className="font-medium text-base md:text-lg font-serif">Servicio Profesional</h3>
                  <p className="text-sm md:text-base opacity-90">Shua Makeup & Beauty</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

