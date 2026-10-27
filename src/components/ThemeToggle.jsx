import { useEffect, useState } from 'react'

export function ThemeToggle({ className = '', style = {} }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'dark' // default to dark
  })

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
      aria-label="Changer de thème"
      type="button"
      title={`Passer au thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      <span className="theme-icon">{theme === 'dark' ? '☽' : '☀'}</span>
    </button>
  )
}
