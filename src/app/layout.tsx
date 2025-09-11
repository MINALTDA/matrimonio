//src\app\layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})
const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing'
})

export const metadata: Metadata = {
  title: 'Carlos & Elizabeth - Nuestra Boda | Nossa Boda',
  description: 'Celebra con nosotros nuestro gran día | Celebre conosco nosso grande dia',
  keywords: 'boda, matrimonio, invitación, Carlos, Elizabeth, casamento, convite, wedding',
  authors: [{ name: 'Carlos & Elizabeth' }],
  openGraph: {
    title: 'Carlos & Elizabeth - Nuestra Boda',
    description: 'Te invitamos a celebrar nuestro amor',
    type: 'website',
    url: 'https://carlos-elizabeth-boda.com', // Ajustar a tu dominio
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dancing.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}