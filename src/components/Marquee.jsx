export function Marquee({ keywords }) {
  // Dupliquer la liste pour un défilement infini sans coupure
  const trackItems = [...keywords, ...keywords]

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {trackItems.map((word, index) => (
          <span key={`${word}-${index}`}>
            {word}
            <span className="separator">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
