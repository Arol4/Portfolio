export function Projects({ projects }) {
  const { featured, secondary } = projects

  return (
    <section id="projets">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Projets sélectionnés</h2>
        </div>

        <div className="projects-grid">
          {/* Projet principal (featured) */}
          {featured && (
            <div className="project-featured reveal">
              <div className="project-visual">
                <div className="project-visual-ascii">{featured.asciiVisual}</div>
              </div>
              <div className="project-info">
                <span className="project-number">{featured.number}</span>
                <h3 className="project-title">{featured.title}</h3>
                <span className="project-role">{featured.role}</span>
                <p className="project-desc">
                  <strong>Problème : </strong>
                  {featured.problem}
                </p>
                <p className="project-desc">
                  <strong>Solution : </strong>
                  {featured.solution}
                </p>
                <div className="project-tech">
                  {featured.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {featured.result && (
                  <p className="project-result">{featured.result}</p>
                )}
              </div>
            </div>
          )}

          {/* Projets secondaires */}
          <div className="projects-secondary">
            {secondary.map((proj, idx) => (
              <div
                key={proj.id}
                className={`project-card reveal reveal-delay-${idx + 1}`}
              >
                <span className="project-number">{proj.number}</span>
                <h3 className="project-title">{proj.title}</h3>
                <span className="project-role">{proj.role}</span>

                {proj.problem && proj.solution ? (
                  <>
                    <p className="project-desc">
                      <strong>Problème : </strong>
                      {proj.problem}
                    </p>
                    <p className="project-desc">
                      <strong>Solution : </strong>
                      {proj.solution}
                    </p>
                  </>
                ) : (
                  proj.desc && <p className="project-desc">{proj.desc}</p>
                )}

                <div className="project-tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {proj.result && <p className="project-result">{proj.result}</p>}

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {proj.linkText || 'Consulter'}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10L10 4M10 4H5M10 4v5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
