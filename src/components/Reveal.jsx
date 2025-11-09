import { useEffect, useMemo, useRef } from 'react'

const Reveal = ({ as: Component = 'div', className = '', delay = 0, children, style, ...rest }) => {
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
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={elementRef}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': transitionDelay, ...style }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Reveal

