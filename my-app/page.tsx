"use client"

import { Suspense, useTransition } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ServicesCarousel } from "@/components/services-carousel"
import { HairSection } from "@/components/hair-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Container } from "@/components/container"

// Datos de <servicios></servicios>
const services = [
  {
    title: "Pestañas 2D y 3D",
    description: "Extensiones de pestañas para una mirada más intensa",
    icon: "👁️",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg",
    items: ["Pestañas 2D", "Pestañas 3D", "Extensiones de volumen", "Remoción segura", "Mantenimiento"],
  },
  {
    title: "Diseño de Cejas",
    description: "Diseño profesional para realzar tu mirada",
    icon: "✨",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg",
    items: ["Diseño personalizado", "Depilación con hilo", "Microblading", "Laminado de cejas", "Tinte de cejas"],
  },
  {
    title: "Maquillaje",
    description: "Maquillaje profesional para toda ocasión",
    icon: "💄",
    items: [
      "Maquillaje social",
      "Maquillaje de novia",
      "Maquillaje para eventos",
      "Clases personalizadas",
      "Automaquillaje",
    ],
  },
]

export default function ShuaMakeup() {
  const [isPending, startTransition] = useTransition()

  const scrollToSection = (sectionId: string) => {
    startTransition(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 shadow-soft">
        <Container>
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2010.49.45_084bda5f.jpg-NC9x7MsOUHhh8ethUurUVzWdO9QEJY.jpeg"
                alt="Shua Makeup Logo"
                width={180}
                height={180}
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-neutral-800 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("galeria")}
                  className="text-neutral-800 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  Galería
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-neutral-800 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <Button className="btn-primary">Reservar Cita</Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <section id="servicios" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
          <Container>
            <div className="text-center animate-on-scroll">
              <h2 className="section-title">Nuestros Servicios</h2>
              <div className="divider"></div>
              <p className="section-subtitle">
                En Shua Makeup & Beauty ofrecemos servicios profesionales para realzar tu belleza natural. Nuestro
                equipo de expertos está listo para atenderte con los mejores productos y técnicas.
              </p>
            </div>

            <div className="animate-on-scroll">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg"
                alt="Servicios Disponibles"
                width={800}
                height={800}
                className="mx-auto mb-12 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
                quality={100}
              />
            </div>

            <div className="animate-on-scroll">
              <ServicesCarousel services={services} />
            </div>
          </Container>
        </section>
      </Suspense>

      {/* Hair Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <HairSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>

      {/* Gallery Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <GallerySection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  )
}

