export function Contact({ contact }) {
  const { cta, subtitle, email, linkedin, linkedinUser, github, githubUser, phone } =
    contact

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-header reveal">
              <div className="section-label">Parlons-en</div>
              <h2 className="contact-cta">
                Un projet, un stage, une idée ?
                <br />
                Écrivez-moi.
              </h2>
              <p className="contact-subtitle">{subtitle}</p>
            </div>
            <a
              href={`mailto:${email}`}
              className="btn btn-primary reveal reveal-delay-1"
            >
              Envoyer un email
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
          </div>

          <div className="contact-links-list reveal reveal-delay-1">
            <a href={`mailto:${email}`} className="contact-link-item">
              <span className="contact-link-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 5l8 5 8-5M2 5v10h16V5H2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-link-text">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">{email}</span>
              </span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <span className="contact-link-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4.5 8v8M4.5 4v.01M8 16v-5.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V16M8 8v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-link-text">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">{linkedinUser}</span>
              </span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <span className="contact-link-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 16.5c-3 1-3-1.5-4-2m8 4v-2.8c.1-.7-.1-1.4-.5-2 2.4-.3 5-1.2 5-5.3 0-1.1-.4-2.2-1.2-3 .4-1 .3-2.1-.1-3 0 0-1-.3-3.1 1.2a10.5 10.5 0 00-5.6 0C4 2.4 3 2.7 3 2.7c-.4.9-.5 2-.1 3C2.1 6.5 1.7 7.6 1.8 8.7c0 4.1 2.6 5 5 5.3-.3.4-.5 1-.5 1.6v2.8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-link-text">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">{githubUser}</span>
              </span>
            </a>

            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-link-item">
              <span className="contact-link-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 4.5C3 12.5 7.5 17 15.5 17l1-3-3.5-1.5-1.5 2c-2.5-1-5-3.5-6-6l2-1.5L6 3.5 3 4.5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-link-text">
                <span className="contact-link-label">Téléphone</span>
                <span className="contact-link-value">{phone}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
