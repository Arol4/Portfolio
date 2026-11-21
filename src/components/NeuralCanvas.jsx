import { useEffect, useRef } from 'react'
import { parseColor } from '../utils/color'

const NODE_COUNT_MAX = 80
const CONNECTION_DIST = 150
const MOUSE_DIST = 200
const MAX_DPR = 2 // au-delà, le gain de netteté ne vaut pas le coût de calcul
const FALLBACK_ACCENT = [0, 229, 255]
// En thème clair, un trait teal à faible opacité sur fond blanc devient presque invisible : on le renforce.
const LIGHT_ALPHA_BOOST = 2

export function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const root = document.documentElement
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    let width = 0
    let height = 0
    let nodes = []
    const mouse = { x: -1000, y: -1000 }
    let animationId = 0
    let resizeFrame = 0
    let accent = FALLBACK_ACCENT
    let alphaBoost = 1

    // Couleur d'accent et intensité selon le thème : lues une fois, puis à chaque changement de
    // thème (et non plus à chaque image, ce qui forçait un recalcul de style 60 fois par seconde).
    function readTheme() {
      accent = parseColor(getComputedStyle(root).getPropertyValue('--accent'), FALLBACK_ACCENT)
      alphaBoost = root.getAttribute('data-theme') === 'light' ? LIGHT_ALPHA_BOOST : 1
    }

    const rgba = (alpha) =>
      `rgba(${accent[0]},${accent[1]},${accent[2]},${Math.min(alpha * alphaBoost, 1)})`

    function randomNode() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.3 + 0.1
      }
    }

    const targetCount = () => Math.min(NODE_COUNT_MAX, Math.floor((width * height) / 15000))

    // Aligne la résolution du dessin sur celle de l'écran : net aussi sur les écrans haute densité.
    function setSize() {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      width = canvas.clientWidth || window.innerWidth
      height = canvas.clientHeight || window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      setSize()
      nodes = Array.from({ length: targetCount() }, randomNode)
    }

    function applySize() {
      const prevWidth = width
      const prevHeight = height
      setSize()

      if (width !== prevWidth) {
        // Largeur modifiée (fenêtre redimensionnée, rotation) : on adapte le réseau existant
        // au lieu de le régénérer entièrement.
        const sx = prevWidth ? width / prevWidth : 1
        const sy = prevHeight ? height / prevHeight : 1
        for (const node of nodes) {
          node.x *= sx
          node.y *= sy
        }
        const target = targetCount()
        while (nodes.length < target) nodes.push(randomNode())
        nodes.length = Math.min(nodes.length, target)
      } else {
        // Seule la hauteur change (barre d'adresse d'un navigateur mobile qui se rétracte
        // pendant le scroll) : les nœuds ne bougent pas, on évite l'effet « le réseau saute ».
        for (const node of nodes) node.y = Math.min(node.y, height)
      }

      if (prefersReduced.matches) draw()
    }

    function handleResize() {
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(applySize)
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Connexions entre nœuds
      ctx.lineWidth = 0.5
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = rgba((1 - dist / CONNECTION_DIST) * 0.15)
            ctx.stroke()
          }
        }
      }

      // Connexions au curseur
      ctx.lineWidth = 1
      for (const node of nodes) {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = rgba((1 - dist / MOUSE_DIST) * 0.4)
          ctx.stroke()
        }
      }

      // Nœuds
      for (const node of nodes) {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const boost = dist < MOUSE_DIST ? (1 - dist / MOUSE_DIST) * 0.6 : 0

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r + boost * 2, 0, Math.PI * 2)
        ctx.fillStyle = rgba(node.baseAlpha + boost)
        ctx.fill()
      }
    }

    function update() {
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        // Rebond sur les bords (la position est recadrée : un nœud ne reste plus coincé hors écran)
        if (node.x < 0) {
          node.x = 0
          node.vx = Math.abs(node.vx)
        } else if (node.x > width) {
          node.x = width
          node.vx = -Math.abs(node.vx)
        }
        if (node.y < 0) {
          node.y = 0
          node.vy = Math.abs(node.vy)
        } else if (node.y > height) {
          node.y = height
          node.vy = -Math.abs(node.vy)
        }

        // Attraction vers le curseur
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST && dist > 0) {
          node.vx += (dx / dist) * 0.01
          node.vy += (dy / dist) * 0.01
        }

        // Limiter la vitesse
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        if (speed > 1) {
          node.vx = (node.vx / speed) * 1
          node.vy = (node.vy / speed) * 1
        }
      }
    }

    function loop() {
      update()
      draw()
      animationId = requestAnimationFrame(loop)
    }

    function start() {
      if (!animationId) animationId = requestAnimationFrame(loop)
    }

    function stop() {
      cancelAnimationFrame(animationId)
      animationId = 0
    }

    // Animation continue, ou image fixe si la personne a demandé de réduire les animations
    // (et la préférence est réévaluée si elle change pendant la visite).
    function syncMotion() {
      if (prefersReduced.matches) {
        stop()
        draw()
      } else {
        start()
      }
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    // « mouseout » sans élément d'arrivée = le pointeur quitte la fenêtre
    // (« mouseleave » n'est pas déclenché sur window, l'ancien écouteur ne servait à rien).
    const handleMouseOut = (e) => {
      if (!e.relatedTarget) {
        mouse.x = -1000
        mouse.y = -1000
      }
    }

    // Le thème change (bouton clair/sombre) : on relit la couleur d'accent.
    const themeObserver = new MutationObserver(() => {
      readTheme()
      if (prefersReduced.matches) draw()
    })

    readTheme()
    init()
    syncMotion()

    themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    prefersReduced.addEventListener('change', syncMotion)
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      stop()
      cancelAnimationFrame(resizeFrame)
      themeObserver.disconnect()
      prefersReduced.removeEventListener('change', syncMotion)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return <canvas ref={canvasRef} id="neural-canvas" aria-hidden="true" />
}
