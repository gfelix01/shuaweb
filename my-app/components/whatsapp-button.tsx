"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/18296418720", "_blank")
  }

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 z-50 rounded-full bg-green-500 hover:bg-green-600 shadow-lg p-3 animate-bounce"
    >
      <Phone className="h-6 w-6 text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  )
}

