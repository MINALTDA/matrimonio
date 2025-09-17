// 'use client'

// import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// interface LanguageContextType {
//   locale: string
//   language: string // Agregamos esta propiedad para compatibilidad
//   changeLanguage: (newLocale: 'es' | 'pt-BR') => void
// }

// const LanguageContext = createContext<LanguageContextType>({
//   locale: 'es',
//   language: 'es', // Valor por defecto
//   changeLanguage: () => {}
// })

// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [locale, setLocale] = useState<string>('es')

//   useEffect(() => {
//     // Get locale from localStorage or browser language
//     const savedLocale = localStorage.getItem('wedding-locale')
//     const browserLocale = navigator.language.startsWith('pt') ? 'pt-BR' : 'es'
//     const initialLocale = savedLocale || browserLocale
//     setLocale(initialLocale)
//   }, [])

//   const changeLanguage = (newLocale: 'es' | 'pt-BR') => {
//     setLocale(newLocale)
//     localStorage.setItem('wedding-locale', newLocale)
    
//     // Update document language
//     if (typeof document !== 'undefined') {
//       document.documentElement.lang = newLocale === 'pt-BR' ? 'pt-BR' : 'es'
//     }
//   }

//   // Convertir locale a language para compatibilidad
//   const language = locale === 'pt-BR' ? 'pt' : 'es'

//   return (
//     <LanguageContext.Provider value={{ locale, language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// export const useLanguage = () => {
//   const context = useContext(LanguageContext)
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider')
//   }
//   return context
// }





"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "pt" | "pt-BR"

interface LanguageContextType {
  language: Language
  changeLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
