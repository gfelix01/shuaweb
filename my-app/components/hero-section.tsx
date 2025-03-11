"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { OptimizedImage } from "./optimized-image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[500px] md:h-[600px] mt-20 overflow-hidden">
      {/* Contenedor de imagen con ancho fijo */}
      <div className="absolute inset-0 w-full max-w-[1920px] mx-auto">
        <OptimizedImage
          src="/images/trabajo2.jpg"
          alt="Shua Makeup & Beauty"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className={`text-center text-white px-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-tight">
            Belleza que Transforma
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Descubre servicios profesionales que realzan tu belleza natural
          </p>
          <Button className="btn-primary text-base px-8 py-3">
            Descubrir Servicios <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

