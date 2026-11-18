import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

export function Navbar({ shortName = 'B.A' }) {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: '#projets', label: t('nav.projets') },
    { href: '#apropos', label: t('nav.apropos') },
    { href: '#competences', label: t('nav.competences') },
    { href: '#parcours', label: t('nav.parcours') },
    { href: '#contact', label: t('nav.contact') }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projets', 'apropos', 'competences', 'parcours', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="nav-wrapper">
        <nav className="container">
          <a href="#" className="nav-logo" aria-label={t('nav.homeAria')} onClick={closeMenu}>
            {shortName.split('.')[0]}
            <span>.</span>
            {shortName.split('.')[1] || 'A'}
          </a>

          <div className="nav-links">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </a>
              )
            })}
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="nav-mobile-actions">
            <LanguageToggle />
            <button
              className="nav-toggle"
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileMenuOpen}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span>{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        id="mobileMenu"
        role="dialog"
        aria-label={t('nav.mobileNav')}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <div className="mobile-menu-controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
