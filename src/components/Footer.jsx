export function Footer({ personalInfo, contact }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container footer-inner">
        <p className="footer-copy">
          © {currentYear} {personalInfo.name}
        </p>
        <div className="footer-links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
