import Reveal from '../components/Reveal.jsx'

const paragraphs = [
  'Ares Labs is a leading provider of cutting-edge IVD technology for the Middle East, India, and neighbouring growth markets. Our team has a long-standing legacy in the medical industry, previously serving as a prominent distributor of high-calibre surgical instruments and consumables ranging from laser systems to radio frequency ablation fibres.',
  'We now channel that experience into a comprehensive product range for the in vitro diagnostics industry, covering instruments for laboratories of every size and throughput. From compact analysers to fully automated lines, our platforms are trusted by many of the region\'s most respected hospitals and diagnostic networks.',
  'Whether you specialise in haematology, clinical biochemistry, immunoassay, electrophoresis, or high-performance chromatography, we curate the instrumentation, assays, and support workflows that keep your teams focused on patient care.',
  'Our solutions are engineered to deliver accuracy, efficiency, and resilience so your laboratory operates with confidence—even in high-demand environments. With an expanding installation base, ARES Labs is on track to become one of the region\'s leading IVD partners in the coming years.',
  'We welcome collaboration with healthcare providers, innovators, and distributors who share our vision for data-led diagnostics. Reach out to explore how ARES can support your operational and clinical goals.',
]

const About = () => {
  return (
    <>
      <section className="hero hero--compact">
        <div className="hero-backdrop" aria-hidden="true" />
        <Reveal className="hero-content" delay={100} animation="slideUp">
          <p className="eyebrow">Our story</p>
          <h1 className="hero-title-gradient">About ARES Labs</h1>
          <p className="lead">
            Pioneering diagnostic solutions that empower healthcare professionals across the Middle East, India, and beyond.
          </p>
        </Reveal>
      </section>

      <section className="section prose">
        <div className="section-inner">
          {paragraphs.map((para, index) => (
            <Reveal as="p" key={para.substring(0, 24)} delay={index * 80} animation="fadeIn">
              {para}
            </Reveal>
          ))}
          <Reveal className="contact-cta" delay={400} animation="scaleIn">
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

