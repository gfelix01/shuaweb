"use client"

import { useEffect, type ReactNode, useTransition } from "react"

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      startTransition(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    })

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return <>{children}</>
}

