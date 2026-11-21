import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Hero({ personalInfo }) {
  const { statusBadge, headline, heroDescription, stats, avatarUrl, name, title } =
    personalInfo

  const { language, t } = useLanguage()

  const [counts, setCounts] = useState(() =>
    stats.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {})
  )

  // Les compteurs ne repartent que si les chiffres eux-mêmes changent : un simple changement
  // de langue (qui remplace seulement les libellés) ne les relance plus.
  const numbersKey = stats.map((s) => `${s.id}:${s.number}`).join('|')

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      const immediate = stats.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: curr.number }),
        {}
      )
      setCounts(immediate)
      return
    }

    const START_DELAY = 1000 // = délai CSS d'apparition du bloc .hero-proof
    const DURATION = 1500
    let animationFrameId

    const timer = setTimeout(() => {
      // Le chrono démarre ICI, une fois le délai écoulé. Pris avant le setTimeout, il comptait
      // déjà 800 ms au premier affichage : les chiffres sautaient d'un coup à ~90 %.
      const start = performance.now()

      function tick(now) {
        // Le timestamp de requestAnimationFrame peut précéder légèrement `start` : on borne à 0.
        const progress = Math.min(Math.max((now - start) / DURATION, 0), 1)
        const ease = 1 - Math.pow(1 - progress, 3)

        const updated = {}
        stats.forEach((s) => {
          updated[s.id] = Math.round(ease * s.number)
        })
        setCounts(updated)

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(tick)
        }
      }

      animationFrameId = requestAnimationFrame(tick)
    }, START_DELAY)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animationFrameId)
    }
    // La clé `numbersKey` remplace volontairement `stats` (voir plus haut).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numbersKey])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text-col">
            <div className="hero-label">
              <span className="pulse" />
              {statusBadge}
            </div>

            <h1>
              {headline.part1}
              <br />
              <span className="accent">{headline.accent}</span>
              <br />
              {headline.part2}
              <br />
              {headline.part3}
            </h1>

            <p className="hero-description">{heroDescription}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                {t('hero.contactBtn')}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#projets" className="btn btn-ghost">
                {t('hero.projectsBtn')}
              </a>
            </div>

            <div className="hero-proof">
              {stats.map((item) => (
                <div key={item.id} className="hero-proof-item">
                  <span className="hero-proof-number">
                    {counts[item.id] !== undefined
                      ? counts[item.id] >= 900
                        ? counts[item.id].toLocaleString(language === 'en' ? 'en-US' : 'fr-FR')
                        : counts[item.id]
                      : item.number}
                  </span>
                  <span className="hero-proof-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {avatarUrl && (
            <div className="hero-image-col">
              <div className="hero-image-frame">
                <div className="hero-image-glow" aria-hidden="true" />
                <img
                  src={avatarUrl}
                  alt={name || 'Berios Arol Djeufack Kafack'}
                  className="hero-profile-img"
                  loading="eager"
                />
                <div className="hero-image-badge">
                  <span className="pulse" />
                  <span>{title || (language === 'en' ? 'AI Engineer' : 'Ingénieur IA')}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
