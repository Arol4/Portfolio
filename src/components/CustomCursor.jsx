import { useEffect, useRef } from 'react'

// Éléments qui déclenchent l'état « survol » du curseur
const HOVER_SELECTOR =
  'a, button, .btn, .project-card, .project-featured, .skill-item, .cert-item, .contact-link-item, .cert-filter-btn'

// Le faux curseur n'existe que pour une vraie souris ou un trackpad (survol possible + pointeur précis).
// Un portable à écran tactile branché sur une souris est donc bien géré, contrairement à un test
// sur « ontouchstart » / maxTouchPoints, qui le prenait pour un téléphone.
const FINE_POINTER = '(hover: hover) and (pointer: fine)'

export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const root = document.documentElement
    const query = window.matchMedia(FINE_POINTER)
    let disable = null // fonction de nettoyage, tant que le faux curseur est actif

    const enable = () => {
      let mouseX = -100
      let mouseY = -100
      let ringX = -100
      let ringY = -100
      let hasMoved = false
      let animationFrameId = 0

      const place = (el, x, y) => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.15
        ringY += (mouseY - ringY) * 0.15
        place(ring, ringX, ringY)
        // La boucle s'arrête quand l'anneau a rattrapé le pointeur (pas de calcul inutile à l'arrêt)
        const settled = Math.abs(mouseX - ringX) + Math.abs(mouseY - ringY) < 0.1
        animationFrameId = settled ? 0 : requestAnimationFrame(animateRing)
      }

      const handleMouseMove = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        if (!hasMoved) {
          // Premier mouvement : l'anneau apparaît sous le pointeur au lieu d'arriver du coin de l'écran
          ringX = mouseX
          ringY = mouseY
          hasMoved = true
        }
        place(dot, mouseX, mouseY)
        if (!animationFrameId) animationFrameId = requestAnimationFrame(animateRing)
      }

      // Délégation d'événements : marche aussi pour les éléments ajoutés après le montage
      // (cartes de certifications filtrées, changement de langue…) et pour les éléments imbriqués.
      const setHovering = (hovering) => {
        dot.classList.toggle('hovering', hovering)
        ring.classList.toggle('hovering', hovering)
      }
      const handleMouseOver = (e) => setHovering(Boolean(e.target.closest?.(HOVER_SELECTOR)))
      const handleMouseOut = (e) => {
        if (!e.relatedTarget) setHovering(false) // le pointeur quitte la fenêtre
      }

      place(dot, mouseX, mouseY)
      place(ring, ringX, ringY)
      root.classList.add('has-custom-cursor')
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      document.addEventListener('mouseover', handleMouseOver)
      document.addEventListener('mouseout', handleMouseOut)

      return () => {
        root.classList.remove('has-custom-cursor')
        window.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseover', handleMouseOver)
        document.removeEventListener('mouseout', handleMouseOut)
        cancelAnimationFrame(animationFrameId)
        setHovering(false)
      }
    }

    const sync = () => {
      if (query.matches && !disable) {
        disable = enable()
      } else if (!query.matches && disable) {
        disable()
        disable = null
      }
    }

    sync()
    query.addEventListener('change', sync) // souris branchée / débranchée, mode tablette…

    return () => {
      query.removeEventListener('change', sync)
      if (disable) disable()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
