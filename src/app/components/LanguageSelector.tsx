'use client'

import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { Globe } from 'lucide-react'

export default function LanguageSelector() {
  const { locale, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' }
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                changeLanguage(language.code as 'es' | 'pt-BR')
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                locale === language.code ? 'bg-rose-50 text-rose-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}