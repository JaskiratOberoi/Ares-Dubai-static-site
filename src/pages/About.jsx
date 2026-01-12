import Reveal from '../components/Reveal.jsx'
import AboutAnimatedBackground from '../components/AboutAnimatedBackground.jsx'

const coreValues = [
  {
    title: 'Innovation',
    description: 'We are committed to pushing the boundaries of diagnostic technology, continuously seeking new and better ways to improve patient care through advanced IVD solutions.',
  },
  {
    title: 'Quality',
    description: 'Quality is at the heart of everything we do. From research and development to manufacturing and customer support, we strive to meet and exceed the highest industry standards.',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical principles in all our interactions, building trust with our clients, partners, and employees.',
  },
  {
    title: 'Customer-Centricity',
    description: 'Our customers\' needs guide our actions. We prioritize understanding and addressing the unique challenges of healthcare professionals, providing tailored solutions and exceptional service.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnerships. By fostering collaboration within our organization and with external partners, we achieve shared goals and drive mutual success.',
  },
  {
    title: 'Excellence',
    description: 'We pursue excellence in every aspect of our work, from the precision of our diagnostic tools to the efficiency of our operations, ensuring the best outcomes for our clients and their patients.',
  },
  {
    title: 'Sustainability',
    description: 'We are dedicated to sustainable practices that reduce our environmental impact and contribute to the long-term well-being of the communities we serve.',
  },
  {
    title: 'Continuous Improvement',
    description: 'We embrace a culture of continuous learning and improvement, encouraging our team to grow, adapt, and innovate to meet the evolving needs of the healthcare industry.',
  },
]

const About = () => {
  return (
    <>
      <AboutAnimatedBackground />
      <section className="hero hero--compact">
        <div className="hero-backdrop" aria-hidden="true" />
        <Reveal className="hero-content" delay={100} animation="slideUp">
          <p className="eyebrow">Our story</p>
          <h1 className="hero-title-gradient">About ARES Labs</h1>
          <p className="lead">
            ARES Labs is a leading provider of cutting-edge IVD technology for the Middle East, India, and neighboring growth markets. With a long-standing legacy in the medical industry, we now channel our experience into a comprehensive product range covering instruments for laboratories of every size and throughput. Our solutions are engineered to deliver accuracy, efficiency, and resilience, making us a trusted partner for the region's most respected hospitals and diagnostic networks. Whether you specialize in haematology, clinical biochemistry, immunoassay, electrophoresis, or high-performance chromatography, we curate the instrumentation, assays, and support workflows that keep your teams focused on patient care.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="vision-mission-grid">
            <Reveal className="vision-mission-card" delay={200} animation="scaleIn">
              <h2 className="vision-mission-title">Vision</h2>
              <p className="vision-mission-text">
                To be a global leader in the development and delivery of innovative IVD instruments and reagents, empowering healthcare professionals with reliable and precise diagnostic tools that enhance patient care and contribute to a healthier world.
              </p>
            </Reveal>
            <Reveal className="vision-mission-card" delay={280} animation="scaleIn">
              <h2 className="vision-mission-title">Mission</h2>
              <p className="vision-mission-text">
                Our mission at Ares Labs LLP is to design, manufacture, and supply cutting-edge IVD instruments and reagents that meet the highest standards of quality and accuracy. We are committed to advancing diagnostic technologies, fostering innovation, and building lasting partnerships with healthcare providers to improve diagnostic capabilities and patient outcomes nationwide.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal className="partner-card" delay={360} animation="scaleIn">
            <div className="partner-image-wrapper">
              <img src="/assets/images/nadeem-siddiqui.jpg" alt="Nadeem Siddiqui" />
            </div>
            <div className="partner-content">
              <h2 className="partner-name">Nadeem Siddiqui</h2>
              <p className="partner-role">Partner</p>
              <p className="partner-description">
                Nadeem Siddiqui is an instrumentation engineer with strong expertise in sales and services, making him a valuable asset in both technical and customer-facing aspects of the business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal className="section-heading" delay={440} animation="slideUp">
            <p className="eyebrow">What drives us</p>
            <h2 className="section-title">Core Values</h2>
          </Reveal>
          <div className="core-values-grid">
            {coreValues.map((value, index) => (
              <Reveal 
                key={value.title} 
                className="core-value-card" 
                delay={480 + (index * 60)} 
                animation="scaleIn"
              >
                <h3 className="core-value-title">{value.title}</h3>
                <p className="core-value-text">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section prose">
        <div className="section-inner">
          <Reveal className="contact-cta" delay={960} animation="scaleIn">
            <h2>Ready to modernise your diagnostics workflow?</h2>
            <p>
              Our consultants are available to audit your current setup and propose a roadmap that balances throughput,
              quality, and cost control.
            </p>
            <a className="btn primary" href="mailto:contact@ares-labs.com">
              Schedule a consultation
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default About

