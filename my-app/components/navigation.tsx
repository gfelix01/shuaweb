"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b" : "bg-transparent",
      )}
    >
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
                href="/servicios"
                className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/extensiones"
                className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
              >
                Extensiones
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/galeria"
                className="text-gray-700 hover:text-[#ff1493] transition-colors font-medium relative group"
              >
                Galería
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1493] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contacto"
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
  )
}

