import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { safeGetItem, safeSetItem } from '../utils/storage'

const ThemeContext = createContext(null)

const THEME_KEY = 'theme'
// Couleur de la barre d'adresse des navigateurs mobiles = --bg-primary de chaque thème
const THEME_COLORS = { dark: '#0a0a0f', light: '#f5f5f8' }

const isTheme = (value) => value === 'dark' || value === 'light'

// Le script inline de index.html pose data-theme AVANT le premier affichage (pas de flash) :
// ici on relit simplement ce qui a été décidé. Le thème par défaut se règle donc dans ce script.
function getInitialTheme() {
  const saved = safeGetItem(THEME_KEY)
  if (isTheme(saved)) return saved
  const fromDom = document.documentElement.getAttribute('data-theme')
  return isTheme(fromDom) ? fromDom : 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    safeSetItem(THEME_KEY, next) // on ne mémorise que le choix explicite du visiteur
  }, [theme])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
