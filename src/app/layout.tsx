import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Carlos & Elizabeth - Nossa Boda | Nuestra Boda',
  description: 'Te invitamos a celebrar nuestro amor | Convidamos você para celebrar nosso amor',
  keywords: 'boda, matrimonio, invitación, Carlos, Elizabeth, casamento, convite',
  authors: [{ name: 'Carlos & Elizabeth' }],
  openGraph: {
    title: 'Carlos & Elizabeth - Nuestra Boda',
    description: 'Te invitamos a celebrar nuestro amor el 15 de junio de 2024',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}