import { useLanguage } from '../context/LanguageContext'

export function LanguageToggle({ className = '', style = {} }) {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      className={`lang-toggle ${className}`}
      style={style}
      onClick={toggleLanguage}
      type="button"
      aria-label={t('lang.aria')}
      title={language === 'fr' ? t('lang.switchToEn') : t('lang.switchToFr')}
    >
      <span className="lang-icon" aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </span>
      <span className={`lang-text ${language === 'fr' ? 'active' : ''}`}>FR</span>
      <span className="lang-sep">/</span>
      <span className={`lang-text ${language === 'en' ? 'active' : ''}`}>EN</span>
    </button>
  )
}
