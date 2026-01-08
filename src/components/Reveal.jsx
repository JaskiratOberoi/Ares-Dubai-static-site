import { useEffect, useMemo, useRef } from 'react'

const Reveal = ({ 
  as: Component = 'div', 
  className = '', 
  delay = 0, 
  children, 
  style,
  animation = 'slideUp', // 'fadeIn', 'slideUp', 'slideDown', 'scaleIn', 'rotateIn'
  ...rest 
}) => {
  const elementRef = useRef(null)
  const transitionDelay = useMemo(() => `${delay}ms`, [delay])

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const animationClass = `reveal-${animation}`

  return (
    <Component
      ref={elementRef}
      className={`reveal ${animationClass} ${className}`.trim()}
      style={{ '--reveal-delay': transitionDelay, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Reveal

