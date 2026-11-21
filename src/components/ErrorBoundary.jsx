import { Component } from 'react'

// Filet de sécurité : si un composant plante, on affiche un message plutôt qu'une page blanche.
// Volontairement indépendant du contexte de langue (il pourrait être lui-même la cause du plantage).
export class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[Portfolio] Erreur de rendu :', error, info?.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div
        role="alert"
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeContent: 'center',
          gap: '1rem',
          padding: '2rem',
          textAlign: 'center',
          background: 'var(--bg-primary, #0a0a0f)',
          color: 'var(--text-primary, #e8eaed)',
          fontFamily: 'var(--font-body, system-ui, sans-serif)'
        }}
      >
        <h1 style={{ fontSize: '1.5rem' }}>Une erreur est survenue.</h1>
        <p>Rechargez la page pour réessayer. / Something went wrong, please reload the page.</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{
            justifySelf: 'center',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            background: 'var(--accent, #00e5ff)',
            color: 'var(--bg-primary, #0a0a0f)',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Recharger / Reload
        </button>
      </div>
    )
  }
}
