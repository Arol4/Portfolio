export function Skills({ skills }) {
  const { featuredAi, categories } = skills

  return (
    <section id="competences">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Savoir-faire</div>
          <h2 className="section-title">Compétences</h2>
        </div>

        <div className="skills-layout">
          {/* Bloc principal IA/ML (pleine largeur) */}
          {featuredAi && (
            <div className="skill-block large reveal">
              <div className="skill-block-title">
                <span className="icon">{featuredAi.icon}</span>
                {featuredAi.title}
              </div>
              <div className="skill-list">
                {featuredAi.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Autres catégories */}
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`skill-block reveal reveal-delay-${(idx % 2) + 1}`}
            >
              <div className="skill-block-title">
                <span className="icon">{cat.icon}</span>
                {cat.title}
              </div>
              <div className="skill-list">
                {cat.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
