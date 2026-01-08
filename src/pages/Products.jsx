import Reveal from '../components/Reveal.jsx'
import { products } from '../data/products'

const Products = () => {
  return (
    <>
      <section className="hero hero--compact">
        <div className="hero-backdrop" aria-hidden="true" />
        <Reveal className="hero-content" delay={100} animation="slideUp">
          <p className="eyebrow">Our solutions</p>
          <h1 className="hero-title-gradient">Laboratory platforms built for outcomes</h1>
          <p className="lead">
            Each ARES solution couples proven hardware with responsive support so your laboratory can deliver consistent,
            evidence-backed care.
          </p>
        </Reveal>
      </section>

      <section className="section products">
        <div className="section-inner">
          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal 
                as="article" 
                key={product.id} 
                className="product-detail" 
                delay={index * 120}
                animation="scaleIn"
              >
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products

