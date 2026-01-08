import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { products } from '../data/products'
import ThreeBackground from '../components/ThreeBackground.jsx'

const featureProducts = products.slice(0, 3)

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.3
        heroRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-3d-background" ref={heroRef}>
          <ThreeBackground />
        </div>
        <Reveal className="hero-content" delay={100} animation="slideUp">
          <p className="eyebrow">End-to-end laboratory solutions</p>
          <h1 className="hero-title-gradient">Innovating diagnostics, empowering healthcare</h1>
          <p className="lead">
            From haematology to immunoassay, ARES Labs delivers high-tech instruments that keep
            laboratories agile, accurate, and ready for growth across the Middle East and beyond.
          </p>
            <div className="hero-actions">
              <Link to="/products" className="btn primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn ghost">
                Talk to our team
              </Link>
            </div>
        </Reveal>
      </section>

      <section className="section intro">
        <div className="section-inner">
          <Reveal as="h2" className="section-heading" animation="slideUp">Trusted experience, future-ready platforms</Reveal>
          <Reveal delay={100}>
            ARES Labs draws on decades of clinical engineering and distribution expertise to build a
            portfolio that serves every scale of laboratory. We partner with hospitals, diagnostics
            networks, and specialty centres to integrate instruments, assays, and service programmes
            that deliver confident results day after day.
          </Reveal>
          <div className="stats-grid">
            {[
              {
                value: 5,
                suffix: '+',
                label: 'speciality disciplines covered from chemistry to molecular diagnostics',
              },
              {
                value: '24/7',
                isText: true,
                label: 'technical assistance and remote monitoring across our instrument fleet',
              },
              {
                value: 50,
                suffix: '+',
                label: 'installations across the Middle East, India, and emerging markets',
              },
            ].map((item, index) => (
              <Reveal key={item.value} delay={150 + index * 80} animation="scaleIn">
                <div className="stat-item">
                  <span className="stat-value">
                    {item.isText ? item.value : <Counter end={item.value} suffix={item.suffix} />}
                  </span>
                  <p>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section focus">
        <div className="section-inner">
          <h2>Solutions engineered for critical care</h2>
          <div className="card-grid">
            {featureProducts.map((product, index) => (
              <Reveal as="article" className="product-card" key={product.id} delay={index * 120}>
                <img src={product.image} alt={product.title} loading="lazy" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                  <Link to="/products" className="inline-link">
                    View product line →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

