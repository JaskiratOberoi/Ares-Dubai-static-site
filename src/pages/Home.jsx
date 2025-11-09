import { Link } from 'react-router-dom'
import { products } from '../data/products'

const featureProducts = products.slice(0, 3)

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">End-to-end laboratory solutions</p>
          <h1>Innovating diagnostics, empowering healthcare</h1>
          <p className="lead">
            From haematology to immunoassay, ARES Dubai delivers high-tech instruments that keep
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
        </div>
      </section>

      <section className="section intro">
        <div className="section-inner">
          <h2>Trusted experience, future-ready platforms</h2>
          <p>
            ARES Dubai draws on decades of clinical engineering and distribution expertise to build
            a portfolio that serves every scale of laboratory. We partner with hospitals,
            diagnostics networks, and specialty centres to integrate instruments, assays, and
            service programmes that deliver confident results day after day.
          </p>
          <div className="stats-grid">
            <div>
              <span>5+</span>
              <p>speciality disciplines covered from chemistry to molecular diagnostics</p>
            </div>
            <div>
              <span>24/7</span>
              <p>technical assistance and remote monitoring across our instrument fleet</p>
            </div>
            <div>
              <span>50+</span>
              <p>installations across the Middle East, India, and emerging markets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section focus">
        <div className="section-inner">
          <h2>Solutions engineered for critical care</h2>
          <div className="card-grid">
            {featureProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} loading="lazy" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                  <Link to="/products" className="inline-link">
                    View product line →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

