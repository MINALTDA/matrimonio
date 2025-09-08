'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface TranslationData {
  [key: string]: any
}

export const useTranslation = (namespace: string = 'common') => {
  const { locale, changeLanguage } = useLanguage()
  const [translations, setTranslations] = useState<TranslationData>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/locales/${locale}/${namespace}.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error(`Error loading translations for ${namespace}:`, error)
        // Fallback to Spanish if translation fails
        if (locale !== 'es') {
          try {
            const fallbackResponse = await fetch(`/locales/es/${namespace}.json`)
            const fallbackData = await fallbackResponse.json()
            setTranslations(fallbackData)
          } catch (fallbackError) {
            console.error('Fallback translation failed:', fallbackError)
          }
        }
      } finally {
        setLoading(false)
      }
    }

    loadTranslations()
  }, [locale, namespace])

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return typeof value === 'string' ? value : fallback || key
  }

  return { t, locale, changeLanguage, loading }
}