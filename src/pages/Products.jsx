import { useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProductStage from '../components/ProductStage.jsx'
import { products, categories } from '../data/products'

const Products = () => {
  const location = useLocation()
  const [filter, setFilter] = useState(location.state?.category ?? 'all')
  const groupId = useId()

  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter)
  const initialId = location.hash ? location.hash.slice(1) : visible[0]?.id

  return (
    <>
      <section className="hero hero--banner container" aria-labelledby="products-title" data-intro>
        <div className="banner-head">
          <h1 id="products-title" data-split>
            Four platforms, one service network.
          </h1>
          <p className="lead" data-intro-item>
            Every ARES platform couples proven hardware with responsive support.
          </p>
        </div>

        <fieldset className="seg" aria-label="Show platforms by discipline" data-intro-item>
          <legend className="visually-hidden">Discipline</legend>
          <input
            type="radio"
            name="discipline"
            id={`${groupId}-all`}
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          <label htmlFor={`${groupId}-all`}>
            All <span className="measured seg-count">{products.length}</span>
          </label>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length
            return (
              <span key={cat.id} className="seg-option">
                <input
                  type="radio"
                  name="discipline"
                  id={`${groupId}-${cat.id}`}
                  value={cat.id}
                  checked={filter === cat.id}
                  onChange={() => setFilter(cat.id)}
                />
                <label htmlFor={`${groupId}-${cat.id}`}>
                  {cat.label} <span className="measured seg-count">{count}</span>
                </label>
              </span>
            )
          })}
        </fieldset>
      </section>

      <div className="section studio container" aria-live="polite">
        <ProductStage products={visible} initialId={initialId} key={filter} />
      </div>

      <section className="band band--close band--dark" aria-labelledby="fit-title">
        <div className="container close-band">
          <div className="close-band-text" data-reveal>
            <h2 id="fit-title">Not sure which platform fits your workload?</h2>
            <p>
              Tell us your daily test volumes and menu, and our application specialists will map
              the right configuration, no obligation.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary" data-fill data-reveal viewTransition>
            Talk to a specialist
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products
