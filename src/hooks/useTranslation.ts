'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface TranslationData {
  [key: string]: string | TranslationData
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
        const data = await response.json() as TranslationData
        setTranslations(data)
      } catch (error) {
        console.error(`Error loading translations for ${namespace}:`, error)
        // Fallback to Spanish if translation fails
        if (locale !== 'es') {
          try {
            const fallbackResponse = await fetch(`/locales/es/${namespace}.json`)
            const fallbackData = await fallbackResponse.json() as TranslationData
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
    let value: string | TranslationData = translations
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    return typeof value === 'string' ? value : fallback || key
  }

  return { t, locale, changeLanguage, loading }
}