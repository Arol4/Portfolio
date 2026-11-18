import { useState } from 'react'

export function Parcours({ parcours }) {
  const { timeline, certifications } = parcours
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const categories = [
    'Tous',
    'Google',
    'freeCodeCamp',
    'Cisco',
    'Kaggle',
    'Cloud',
    'Mobile',
    'Outils'
  ]

  const filteredCerts =
    selectedCategory === 'Tous'
      ? certifications
      : certifications.filter((c) => c.category === selectedCategory)

  return (
    <section id="parcours">
      <div className="container">
        {/* Parcours / Timeline */}
        <div className="section-header reveal">
          <div className="section-label">Mon chemin</div>
          <h2 className="section-title">Parcours</h2>
        </div>

        <div className="timeline">
          {timeline.map((entry, idx) => (
            <div
              key={`${entry.title}-${idx}`}
              className={`timeline-entry ${entry.active ? 'active' : ''} reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <div className="timeline-date">{entry.date}</div>
              <div className="timeline-title">{entry.title}</div>
              <div className="timeline-place">{entry.place}</div>
              <div className="timeline-desc">{entry.desc}</div>
              {entry.badge && (
                <span className="timeline-badge">{entry.badge}</span>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certs-header-row reveal">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="section-label">Validation</div>
            <h2 className="section-title">Certifications</h2>
            <div className="certs-latest-callout">
              <span className="pulse" />
              <span>
                Dernière certification à ce jour :{' '}
                <strong>Google Analytics</strong> (Nov. 2026)
              </span>
            </div>
          </div>

          {/* Filtres interactifs */}
          <div className="certs-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cert-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="certs-scroll reveal">
          {filteredCerts.map((cert, idx) => (
            <div
              key={`${cert.name}-${idx}`}
              className={`cert-item ${cert.isLatest ? 'is-latest' : ''}`}
            >
              <div>
                {cert.isLatest && (
                  <div className="cert-latest-tag">
                    <span className="pulse" />
                    <span>Dernière certification</span>
                  </div>
                )}
                <div className="cert-header">
                  <div className="cert-header-content">
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-name">{cert.name}</div>
                  </div>
                  {cert.badgeUrl && (
                    <img
                      src={cert.badgeUrl}
                      alt={`Badge ${cert.name}`}
                      className="cert-badge-thumbnail"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              <div className="cert-action">
                <span className="cert-date">{cert.date}</span>
                <div className="cert-links-group">
                  {cert.fileUrl && (
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                      title={`Voir le certificat : ${cert.name}`}
                    >
                      <span>{cert.verifyUrl ? 'Certificat' : 'Voir'}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 9L9 3M9 3H4.5M9 3v4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link cert-link-verify"
                      title="Vérifier l'authenticité officielle sur Skillshop"
                    >
                      <span>Vérifier</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.5 7v2.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1H5M8 1.5h3.5m0 0V5m0-3.5L5 8"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
