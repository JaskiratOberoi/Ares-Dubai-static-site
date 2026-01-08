import { useEffect, useRef, useState } from 'react'

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const startTime = Date.now()
            const startValue = 0
            const endValue = parseInt(end) || 0

            const animate = () => {
              const now = Date.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
              
              setCount(current)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(endValue)
              }
            }

            animate()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [end, duration])

  return (
    <span ref={countRef} className="counter-value">
      {count}{suffix}
    </span>
  )
}

export default Counter

