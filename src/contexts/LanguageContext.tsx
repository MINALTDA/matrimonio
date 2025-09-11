// 'use client'

// import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// interface LanguageContextType {
//   locale: string
//   changeLanguage: (newLocale: 'es' | 'pt-BR') => void
// }

// const LanguageContext = createContext<LanguageContextType>({
//   locale: 'es',
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

//   return (
//     <LanguageContext.Provider value={{ locale, changeLanguage }}>
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







'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextType {
  locale: string
  language: string // Agregamos esta propiedad para compatibilidad
  changeLanguage: (newLocale: 'es' | 'pt-BR') => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  language: 'es', // Valor por defecto
  changeLanguage: () => {}
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<string>('es')

  useEffect(() => {
    // Get locale from localStorage or browser language
    const savedLocale = localStorage.getItem('wedding-locale')
    const browserLocale = navigator.language.startsWith('pt') ? 'pt-BR' : 'es'
    const initialLocale = savedLocale || browserLocale
    setLocale(initialLocale)
  }, [])

  const changeLanguage = (newLocale: 'es' | 'pt-BR') => {
    setLocale(newLocale)
    localStorage.setItem('wedding-locale', newLocale)
    
    // Update document language
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale === 'pt-BR' ? 'pt-BR' : 'es'
    }
  }

  // Convertir locale a language para compatibilidad
  const language = locale === 'pt-BR' ? 'pt' : 'es'

  return (
    <LanguageContext.Provider value={{ locale, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}