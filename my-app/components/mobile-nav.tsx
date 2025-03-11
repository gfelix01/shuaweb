"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white/95 backdrop-blur-md">
        <div className="flex flex-col space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/images/logo.png" alt="Shua Makeup Logo" width={120} height={120} className="h-12 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/?section=servicios"
              className="text-lg font-medium hover:text-[#ff1493] transition-colors"
              onClick={() => setOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/?section=extensiones"
              className="text-lg font-medium hover:text-[#ff1493] transition-colors"
              onClick={() => setOpen(false)}
            >
              Extensiones
            </Link>
            <Link
              href="/?section=galeria"
              className="text-lg font-medium hover:text-[#ff1493] transition-colors"
              onClick={() => setOpen(false)}
            >
              Galería
            </Link>
            <Link
              href="/?section=contacto"
              className="text-lg font-medium hover:text-[#ff1493] transition-colors"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
            <Button
              className="mt-4 bg-gradient-to-r from-purple-600 to-[#ff1493] text-white hover:opacity-90"
              onClick={() => {
                window.open("https://wa.me/18296418720", "_blank")
                setOpen(false)
              }}
            >
              WhatsApp
            </Button>
          </nav>
          <div className="mt-auto pt-6">
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>Av. Santa Rosa esquina Altagracia, Plaza Maureen</p>
              <p>829-641-8720</p>
              <p>@shuamakeupstudio</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

