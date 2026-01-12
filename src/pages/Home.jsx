import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { products } from '../data/products'
import aresBanner from '../assets/Ares Banner.png'

const featureProductIds = ['magicl-6000i', 'chemistry', 'hematology']
const featureProducts = featureProductIds
  .map(id => products.find(product => product.id === id))
  .filter(Boolean)

const vision = {
  title: 'Vision',
  description: 'To be a global leader in the development and delivery of innovative IVD instruments and reagents, empowering healthcare professionals with reliable and precise diagnostic tools that enhance patient care and contribute to a healthier world.',
}

const mission = {
  title: 'Mission',
  description: 'Our mission at Ares Labs LLP is to design, manufacture, and supply cutting-edge IVD instruments and reagents that meet the highest standards of quality and accuracy. We are committed to advancing diagnostic technologies, fostering innovation, and building lasting partnerships with healthcare providers to improve diagnostic capabilities and patient outcomes nationwide.',
}

const coreValuesPreview = [
  {
    title: 'Innovation',
    description: 'We are committed to pushing the boundaries of diagnostic technology, continuously seeking new and better ways to improve patient care through advanced IVD solutions.',
  },
  {
    title: 'Quality',
    description: 'Quality is at the heart of everything we do. From research and development to manufacturing and customer support, we strive to meet and exceed the highest industry standards.',
  },
  {
    title: 'Excellence',
    description: 'We pursue excellence in every aspect of our work, from the precision of our diagnostic tools to the efficiency of our operations, ensuring the best outcomes for our clients and their patients.',
  },
  {
    title: 'Customer-Centricity',
    description: 'Our customers\' needs guide our actions. We prioritize understanding and addressing the unique challenges of healthcare professionals, providing tailored solutions and exceptional service.',
  },
]

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-banner-background">
          <img src={aresBanner} alt="ARES Labs" className="hero-banner" />
        </div>
      </section>

      <section className="section focus">
        <div className="section-inner">
          <h2>Solutions engineered for critical care</h2>
          <p>Comprehensive IVD products designed to meet the evolving needs of modern healthcare laboratories.</p>
          <div className="card-grid">
            {featureProducts.map((product, index) => (
              <Reveal as="article" className="product-card" key={product.id} delay={index * 120}>
                <div className="product-card-image-wrapper">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="product-card-content">
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

      <section className="section">
        <div className="section-inner">
          <div className="section-separator"></div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="vision-mission-grid">
            <Reveal className="vision-mission-card" delay={400} animation="scaleIn">
              <h2 className="vision-mission-title">{vision.title}</h2>
              <p className="vision-mission-text">{vision.description}</p>
            </Reveal>
            <Reveal className="vision-mission-card" delay={480} animation="scaleIn">
              <h2 className="vision-mission-title">{mission.title}</h2>
              <p className="vision-mission-text">{mission.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal className="section-heading" delay={560} animation="slideUp">
            <p className="eyebrow">What drives us</p>
            <h2 className="section-title">Core Values</h2>
          </Reveal>
          <div className="core-values-grid">
            {coreValuesPreview.map((value, index) => (
              <Reveal 
                key={value.title} 
                className="core-value-card" 
                delay={600 + (index * 60)} 
                animation="scaleIn"
              >
                <h3 className="core-value-title">{value.title}</h3>
                <p className="core-value-text">{value.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={840} animation="fadeIn">
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/about-us" className="inline-link">
                View all core values →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Home

