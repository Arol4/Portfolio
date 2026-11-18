import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function ThemeToggle({ className = '', style = {} }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'dark' // default to dark
  })

  const { t } = useLanguage()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      className={`theme-toggle ${className}`}
      style={style}
      onClick={toggleTheme}
      aria-label={t('theme.aria')}
      type="button"
      title={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
    >
      <span className="theme-icon">{theme === 'dark' ? '☽' : '☀'}</span>
    </button>
  )
}
