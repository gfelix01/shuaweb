"use client"

import Image from "next/image"
import { useState, useTransition } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"

interface HairProductProps {
  image: string
  title: string
  price: number
  originalPrice?: number
  rating: number
  length: string
  type: string
  weight: string
  inStock: boolean
}

export function HairProductCard({
  image,
  title,
  price,
  originalPrice,
  rating,
  length,
  type,
  weight,
  inStock,
}: HairProductProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPending, startTransition] = useTransition()

  const toggleLike = () => {
    startTransition(() => {
      setIsLiked(!isLiked)
    })
  }

  return (
    <Card
      className="overflow-hidden border-none shadow-product hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? "scale(1.08)" : "scale(1)",
              }}
            />
          </div>
          <button
            onClick={toggleLike}
            className={`absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm transition-colors hover:bg-white shadow-sm z-10 ${isPending ? "opacity-70" : "opacity-100"
              }`}
            aria-label={isLiked ? "Quitar de favoritos" : "Añadir a favoritos"}
            disabled={isPending}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-neutral-600"}`} />
          </button>
          {!inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-10">
              <Badge variant="destructive" className="text-lg px-4 py-1.5 font-medium">
                Agotado
              </Badge>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/2"></div>
          <div className="absolute bottom-3 left-3">
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 bg-white/80 backdrop-blur-sm border-primary text-primary"
            >
              {length}
            </Badge>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <h3 className="font-bold text-lg font-serif">{title}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-600">({rating}.0)</span>
          </div>
          <div className="space-y-2 bg-neutral-50 p-4 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Tipo:</span>
              <span className="font-medium">{type}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Peso:</span>
              <span className="font-medium">{weight}</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="w-full">
              <span className="text-2xl font-bold text-primary">RD${price}</span>
              {originalPrice && <span className="ml-2 text-sm text-neutral-500 line-through">RD${originalPrice}</span>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

