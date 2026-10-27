import { useEffect, useRef } from 'react'

export function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width, height
    let nodes = []
    let mouse = { x: -1000, y: -1000 }
    let animationId

    const NODE_COUNT_BASE = 80
    const CONNECTION_DIST = 150
    const MOUSE_DIST = 200

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function createNodes() {
      const count = Math.min(NODE_COUNT_BASE, Math.floor((width * height) / 15000))
      nodes = []
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.3 + 0.1
        })
      }
    }

    function getAccentColor() {
      return (
        getComputedStyle(document.documentElement)
          .getPropertyValue('--accent')
          .trim() || '#00e5ff'
      )
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const accent = getAccentColor()

      // Connexions entre nœuds
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)

            let strokeColor = accent.replace(')', `, ${alpha})`).replace('rgb', 'rgba')
            if (!strokeColor.includes('rgba')) {
              strokeColor = `rgba(0,229,255,${alpha})`
            }
            ctx.strokeStyle = strokeColor
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Connexions au curseur
      for (const node of nodes) {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST) {
          const alpha = (1 - dist / MOUSE_DIST) * 0.4
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(0,229,255,${alpha})`
          ctx.lineWidth = 1
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
        ctx.fillStyle = `rgba(0,229,255,${node.baseAlpha + boost})`
        ctx.fill()
      }
    }

    function update() {
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

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

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    resize()
    createNodes()

    if (!prefersReduced.matches) {
      loop()
    } else {
      draw()
    }

    const handleResize = () => {
      resize()
      createNodes()
      if (prefersReduced.matches) draw()
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} id="neural-canvas" aria-hidden="true" />
}
