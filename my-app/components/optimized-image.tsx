"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
    className?: string
    containerClassName?: string
}

export function OptimizedImage({ src, alt, className, containerClassName, ...props }: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
                onLoad={() => setIsLoaded(true)}
                quality={100}
                {...props}
            />
        </div>
    )
}

