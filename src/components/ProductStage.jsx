import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductFigure from './ProductFigure.jsx'
import { gsap, ScrollTrigger, ease, isNarrow, prefersReducedMotion } from '../motion/engine.js'

/*
 * The platforms as pinned chapters: the text for each platform scrolls past a
 * sticky stage on which the matching instrument comes forward. Under 60rem
 * and under reduced motion the stage is static and each chapter carries its
 * own figure.
 */
const ProductStage = ({ products, initialId }) => {
  const initialIndex = Math.max(0, products.findIndex((p) => p.id === initialId))
  const [active, setActive] = useState(initialIndex)
  const chapters = useRef([])

  useEffect(() => {
    setActive(Math.max(0, products.findIndex((p) => p.id === initialId)))
  }, [products, initialId])

  useEffect(() => {
    if (prefersReducedMotion() || isNarrow()) return undefined
    const triggers = chapters.current.filter(Boolean).map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top 55%',
        end: 'bottom 45%',
        onToggle: (self) => self.isActive && setActive(i),
      }),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [products])

  useEffect(() => {
    if (prefersReducedMotion()) return
    const stage = document.querySelector('[data-stage]')
    if (!stage) return
    const figures = stage.querySelectorAll('[data-stage-figure]')
    figures.forEach((f, i) => {
      gsap.to(f, {
        autoAlpha: i === active ? 1 : 0,
        scale: i === active ? 1 : 0.94,
        y: i === active ? 0 : 16,
        duration: 0.9,
        ease: ease.out,
        overwrite: true,
      })
    })
  }, [active, products])

  return (
    <div className="stage-stack">
      <div className="stage-chapters">
        {products.map((product, i) => (
          <article
            key={product.id}
            id={product.id}
            ref={(el) => (chapters.current[i] = el)}
            className={`chapter ${i === active ? 'is-active' : ''}`}
            aria-labelledby={`${product.id}-title`}
          >
            <div className="chapter-text" data-reveal>
              <h2 id={`${product.id}-title`}>{product.title}</h2>
              <p className="lead">{product.subtitle}</p>
              <p>{product.description}</p>
              {product.specs.length > 0 ? (
                <dl className="specs specs--plain">
                  {product.specs.map((s) => (
                    <div className="specs-row" key={s.label}>
                      <dt>{s.label}</dt>
                      <dd className="measured">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <ul className="facts">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <p>
                <Link to="/contact" className="text-link" viewTransition>
                  Discuss this platform
                </Link>
              </p>
            </div>
            <ProductFigure
              product={product}
              className="product-figure--large chapter-figure"
              scale={product.id === 'magicl-6000i' ? 1.3 : 1}
              priority={i === 0}
            />
          </article>
        ))}
      </div>
      <div className="stage" data-stage aria-hidden="true">
        <div className="stage-well">
          {products.map((product, i) => (
            <div key={product.id} className={`stage-figure ${i === active ? 'is-active' : ''}`} data-stage-figure>
              <ProductFigure product={product} className="stage-product" scale={product.id === 'magicl-6000i' ? 1.3 : 1} transition />
            </div>
          ))}
        </div>
        <ol className="stage-index" aria-hidden="true">
          {products.map((product, i) => (
            <li key={product.id} className={i === active ? 'is-active' : ''}>
              {product.title}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ProductStage
