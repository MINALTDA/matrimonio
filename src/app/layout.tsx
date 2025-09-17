import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

// Fuentes elegantes para invitación de boda
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Convite de Casamento - Elizabeth & Carlos",
  description: "Celebre conosco o nosso grande dia!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}