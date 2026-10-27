import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return
    }

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let animationFrameId

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animationFrameId = requestAnimationFrame(animateRing)
    }

    const handleMouseEnter = () => {
      dot.classList.add('hovering')
      ring.classList.add('hovering')
    }

    const handleMouseLeave = () => {
      dot.classList.remove('hovering')
      ring.classList.remove('hovering')
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(animateRing)

    // Interactive elements hover binding
    const updateInteractives = () => {
      const interactives = document.querySelectorAll(
        'a, button, .btn, .project-card, .project-featured, .skill-item, .cert-item, .contact-link-item, .cert-filter-btn'
      )
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
      return interactives
    }

    const interactives = updateInteractives()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
