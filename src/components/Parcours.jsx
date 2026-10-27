import { useState } from 'react'

export function Parcours({ parcours }) {
  const { timeline, certifications } = parcours
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const categories = [
    'Tous',
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
            <div key={`${cert.name}-${idx}`} className="cert-item">
              <div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-name">{cert.name}</div>
              </div>
              <div className="cert-action">
                <span className="cert-date">{cert.date}</span>
                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                    title={`Voir le certificat : ${cert.name}`}
                  >
                    <span>Voir</span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
