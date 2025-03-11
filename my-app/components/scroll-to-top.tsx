"use client"

import { useEffect, useState, useTransition } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    startTransition(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-white/90 backdrop-blur-sm border-primary/30 shadow-soft transition-all duration-300 hover:bg-white hover:border-primary hover:shadow-hover ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        } ${isPending ? "opacity-70" : "opacity-100"}`}
      onClick={scrollToTop}
      disabled={isPending}
    >
      <ChevronUp className="h-5 w-5 text-primary" />
      <span className="sr-only">Volver arriba</span>
    </Button>
  )
}

