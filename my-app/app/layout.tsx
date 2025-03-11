import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimationProvider } from "@/components/animation-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shua Makeup & Beauty",
  description:
    "Tu destino de belleza y cuidado personal. Ofrecemos servicios profesionales para realzar tu belleza natural.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <AnimationProvider>
          <main className="min-h-screen bg-white pt-16">{children}</main>
          <ScrollToTop />
        </AnimationProvider>
      </body>
    </html>
  )
}

