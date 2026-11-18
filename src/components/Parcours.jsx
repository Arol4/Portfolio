import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Parcours({ parcours }) {
  const { timeline, certifications } = parcours
  const [selectedCategoryKey, setSelectedCategoryKey] = useState('all')
  const { language, t } = useLanguage()

  const categoryOptions = [
    { key: 'all', label: t('parcours.categoryAll') },
    { key: 'Google', label: 'Google' },
    { key: 'freeCodeCamp', label: 'freeCodeCamp' },
    { key: 'Cisco', label: 'Cisco' },
    { key: 'Kaggle', label: 'Kaggle' },
    { key: 'Cloud', label: 'Cloud' },
    { key: 'Mobile', label: 'Mobile' },
    { key: 'tools', label: t('parcours.categoryTools') }
  ]

  const filteredCerts =
    selectedCategoryKey === 'all'
      ? certifications
      : certifications.filter((c) => {
          if (selectedCategoryKey === 'tools') {
            return c.category === 'Outils' || c.category === 'Tools'
          }
          return c.category === selectedCategoryKey
        })

  return (
    <section id="parcours">
      <div className="container">
        {/* Parcours / Timeline */}
        <div className="section-header reveal">
          <div className="section-label">{t('parcours.timelineLabel')}</div>
          <h2 className="section-title">{t('parcours.timelineTitle')}</h2>
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
            <div className="section-label">{t('parcours.certsLabel')}</div>
            <h2 className="section-title">{t('parcours.certsTitle')}</h2>
            <div className="certs-latest-callout">
              <span className="pulse" />
              <span>
                {t('parcours.latestCalloutPrefix')}{' '}
                <strong>Google Analytics</strong> ({language === 'en' ? 'Nov. 2026' : 'Nov. 2026'})
              </span>
            </div>
          </div>

          {/* Filtres interactifs */}
          <div className="certs-filter-tabs">
            {categoryOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                className={`cert-filter-btn ${selectedCategoryKey === opt.key ? 'active' : ''}`}
                onClick={() => setSelectedCategoryKey(opt.key)}
              >
                {opt.label}
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
                    <span>{t('parcours.latestTag')}</span>
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
                      title={`${t('parcours.viewCertTitle')} ${cert.name}`}
                    >
                      <span>{cert.verifyUrl ? t('parcours.certBtn') : t('parcours.viewBtn')}</span>
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
                      title={t('parcours.verifyCertTitle')}
                    >
                      <span>{t('parcours.verifyBtn')}</span>
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
