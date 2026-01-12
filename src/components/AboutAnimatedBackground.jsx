import { useEffect, useRef } from 'react'

const AboutAnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight || document.body.scrollHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animated gradient orbs
    const orbs = [
      {
        x: canvas.width * 0.15,
        y: canvas.height * 0.2,
        radius: canvas.width * 0.4,
        speedX: 0.2,
        speedY: 0.15,
        color: 'rgba(252, 231, 76, 0.08)',
      },
      {
        x: canvas.width * 0.85,
        y: canvas.height * 0.6,
        radius: canvas.width * 0.35,
        speedX: -0.15,
        speedY: 0.2,
        color: 'rgba(98, 143, 252, 0.06)',
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        radius: canvas.width * 0.3,
        speedX: 0.1,
        speedY: -0.1,
        color: 'rgba(252, 231, 76, 0.05)',
      },
    ]

    // Floating particles
    const particles = []
    const particleCount = 80

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulsePhase += this.pulseSpeed

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7
        const currentOpacity = this.opacity * pulse

        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 4
        )
        gradient.addColorStop(0, `rgba(252, 231, 76, ${currentOpacity})`)
        gradient.addColorStop(0.5, `rgba(252, 231, 76, ${currentOpacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(252, 231, 76, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.fillStyle = `rgba(252, 231, 76, ${currentOpacity + 0.2})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animated mesh gradient lines
    const meshLines = []
    const lineCount = 12

    for (let i = 0; i < lineCount; i++) {
      meshLines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        speed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.1 + 0.05,
      })
    }

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Update and draw gradient orbs
      orbs.forEach((orb) => {
        orb.x += orb.speedX
        orb.y += orb.speedY

        // Bounce off edges
        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) {
          orb.speedX *= -1
        }
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) {
          orb.speedY *= -1
        }

        // Draw orb with animated gradient
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        )
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(0.5, orb.color.replace('0.08', '0.04').replace('0.06', '0.03').replace('0.05', '0.02'))
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw animated mesh lines
      meshLines.forEach((line, index) => {
        const offset = Math.sin(time + index) * 20
        ctx.strokeStyle = `rgba(252, 231, 76, ${line.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(line.x1 + offset, line.y1)
        ctx.lineTo(line.x2 + offset, line.y2)
        ctx.stroke()
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#000000',
      }}
    />
  )
}

export default AboutAnimatedBackground
