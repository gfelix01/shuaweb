"use client"

import { useState, useTransition } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface Service {
  title: string
  description: string
  icon: string
  image?: string
  items: string[]
}

interface ServicesCarouselProps {
  services: Service[]
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPending, startTransition] = useTransition()

  const nextService = () => {
    startTransition(() => {
      setActiveIndex((current) => (current + 1) % services.length)
    })
  }

  const prevService = () => {
    startTransition(() => {
      setActiveIndex((current) => (current - 1 + services.length) % services.length)
    })
  }

  const goToService = (index: number) => {
    startTransition(() => {
      setActiveIndex(index)
    })
  }

  return (
    <div className="relative">
      <div className="overflow-hidden py-8">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${isPending ? "opacity-80" : "opacity-100"}`}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white rounded-xl">
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6 text-center">
                      <Badge variant="outline" className="mb-3 px-3 py-1 border-primary text-primary font-medium">
                        {service.title}
                      </Badge>
                      <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary-dark to-primary mx-auto mb-4"></div>
                      <p className="text-neutral-600 mb-6">{service.description}</p>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-neutral-700">
                          <span className="mr-2 text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-neutral-100 rounded-full shadow-soft h-12 w-12 transition-all duration-300",
          activeIndex === 0 && "opacity-50 cursor-not-allowed",
          isPending && "opacity-70",
        )}
        onClick={prevService}
        disabled={activeIndex === 0 || isPending}
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-neutral-100 rounded-full shadow-soft h-12 w-12 transition-all duration-300",
          activeIndex === services.length - 1 && "opacity-50 cursor-not-allowed",
          isPending && "opacity-70",
        )}
        onClick={nextService}
        disabled={activeIndex === services.length - 1 || isPending}
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </Button>

      {/* Indicators */}
      <div className="mt-8 flex justify-center space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-10 bg-primary" : "w-2 bg-neutral-300 hover:bg-neutral-400"
              } ${isPending ? "opacity-70" : "opacity-100"}`}
            onClick={() => goToService(index)}
            disabled={isPending}
          />
        ))}
      </div>
    </div>
  )
}

