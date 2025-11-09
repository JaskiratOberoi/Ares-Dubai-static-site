import Reveal from '../components/Reveal.jsx'
import { products } from '../data/products'

const Products = () => {
  return (
    <section className="section products">
      <div className="section-inner">
        <Reveal as="h1">Laboratory platforms built for outcomes</Reveal>
        <Reveal className="lead" delay={120}>
          Each ARES solution couples proven hardware with responsive support so your laboratory can deliver consistent,
          evidence-backed care.
        </Reveal>
        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal as="article" key={product.id} className="product-detail" delay={index * 120}>
              <img src={product.image} alt={product.title} loading="lazy" />
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

