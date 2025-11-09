import { products } from '../data/products'

const Products = () => {
  return (
    <section className="section products">
      <div className="section-inner">
        <h1>Laboratory platforms built for outcomes</h1>
        <p className="lead">
          Each ARES solution couples proven hardware with responsive support so your laboratory can
          deliver consistent, evidence-backed care.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-detail">
              <img src={product.image} alt={product.title} loading="lazy" />
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

