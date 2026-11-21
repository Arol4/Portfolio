import { createContext, useContext, useState, useEffect } from 'react'
import { portfolioDataFR, portfolioDataEN } from '../data/portfolioData'
import { translations } from '../data/translations'
import { safeGetItem, safeSetItem } from '../utils/storage'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = safeGetItem('portfolio_lang')
    if (saved === 'en' || saved === 'fr') return saved
    return 'fr'
  })

  useEffect(() => {
    safeSetItem('portfolio_lang', language)
    document.documentElement.setAttribute('lang', language)

    const meta = translations[language]?.meta
    if (meta) {
      document.title = meta.title

      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.description)
      }

      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', meta.title)
      }

      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) {
        ogDesc.setAttribute('content', meta.description)
      }

      const ogLocale = document.querySelector('meta[property="og:locale"]')
      if (ogLocale) {
        ogLocale.setAttribute('content', language === 'en' ? 'en_US' : 'fr_FR')
      }
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'))
  }

  const t = (path) => {
    const keys = path.split('.')
    let current = translations[language]
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key]
      } else {
        // Fallback to french if key is missing in active language
        let fallback = translations.fr
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey]
          } else {
            return path
          }
        }
        return fallback
      }
    }
    return current
  }

  const data = language === 'en' ? portfolioDataEN : portfolioDataFR

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    data,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
