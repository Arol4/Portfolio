import { useState, useEffect } from 'react'

export function Hero({ personalInfo }) {
  const { statusBadge, headline, heroDescription, stats, avatarUrl, name, title } =
    personalInfo

  const [counts, setCounts] = useState(() =>
    stats.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {})
  )

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

    const duration = 1500
    const start = performance.now()
    let animationFrameId

    const timer = setTimeout(() => {
      function tick(now) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
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
    }, 800)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animationFrameId)
    }
  }, [stats])

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
                Me contacter
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
                Voir les projets
              </a>
            </div>

            <div className="hero-proof">
              {stats.map((item) => (
                <div key={item.id} className="hero-proof-item">
                  <span className="hero-proof-number">
                    {counts[item.id] !== undefined
                      ? counts[item.id] >= 900
                        ? counts[item.id].toLocaleString('fr-FR')
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
                  <span>{title || 'Ingénieur IA'}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
