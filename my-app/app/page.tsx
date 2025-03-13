"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PromotionsSection } from "@/components/promotions-section"
import { HairSection } from "@/components/hair-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function ShuaMakeup() {
  const searchParams = useSearchParams()
  const section = searchParams.get("section")

  // Scroll to section on load if specified in URL
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [section])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src="/images/logo.png" alt="Shua Makeup Logo" width={180} height={180} className="h-16 w-auto" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <Link
                  href="/?section=servicios"
                  className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
                >
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/?section=extensiones"
                  className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
                >
                  Extensiones
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/?section=galeria"
                  className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
                >
                  Galería
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/?section=contacto"
                  className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
                >
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-[#ff1493] text-white hover:opacity-90 transition-opacity shadow-md"
                  onClick={() => window.open("https://wa.me/18296418720", "_blank")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Promotions Section */}
      <PromotionsSection />

      {/* Hair Section */}
      <HairSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}

