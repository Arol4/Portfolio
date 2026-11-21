import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

// L'état du thème vit dans ThemeProvider : toutes les instances du bouton restent synchronisées.
export function ThemeToggle({ className = '', style = {} }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

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
