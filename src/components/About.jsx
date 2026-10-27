export function About({ about }) {
  const { paragraphs, details } = about

  return (
    <section id="apropos">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Qui suis-je</div>
          <h2 className="section-title">À propos</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          <div className="about-details reveal reveal-delay-1">
            {details.map((item) => (
              <div key={item.label} className="about-detail-item">
                <div className="about-detail-label">{item.label}</div>
                <div className="about-detail-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
