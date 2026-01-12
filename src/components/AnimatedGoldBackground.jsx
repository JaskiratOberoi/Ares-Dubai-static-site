import { useEffect, useRef } from 'react'

const AnimatedGoldBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles = []
    const particleCount = 150

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
        this.glowSize = this.size * 3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.glowSize
        )
        gradient.addColorStop(0, `rgba(252, 231, 76, ${this.opacity})`)
        gradient.addColorStop(0.5, `rgba(252, 231, 76, ${this.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(252, 231, 76, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.fillStyle = `rgba(252, 231, 76, ${this.opacity + 0.3})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animated overlay (no background, just particles and effects)
    const animate = () => {
      // Clear with transparency to show banner behind
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gold radial gradients for depth and atmosphere
      const goldGradient1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        canvas.width * 0.8
      )
      goldGradient1.addColorStop(0, 'rgba(252, 231, 76, 0.08)')
      goldGradient1.addColorStop(0.5, 'rgba(252, 231, 76, 0.03)')
      goldGradient1.addColorStop(1, 'rgba(252, 231, 76, 0)')

      const goldGradient2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        canvas.width * 0.6
      )
      goldGradient2.addColorStop(0, 'rgba(252, 231, 76, 0.06)')
      goldGradient2.addColorStop(0.5, 'rgba(252, 231, 76, 0.02)')
      goldGradient2.addColorStop(1, 'rgba(252, 231, 76, 0)')

      ctx.fillStyle = goldGradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = goldGradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}

export default AnimatedGoldBackground
