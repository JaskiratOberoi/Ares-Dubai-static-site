import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Complete instrumentation',
    text: 'Haematology, clinical biochemistry, immunoassay and HPLC, curated for laboratories of every size and throughput.',
  },
  {
    title: 'Regional depth',
    text: 'The Middle East, India and neighbouring growth markets, served by local engineers and application specialists.',
  },
  {
    title: 'Trusted partnerships',
    text: 'A partner to respected hospitals and diagnostic networks, keeping their teams focused on patient care.',
  },
]

const coreValues = [
  { title: 'Innovation', text: 'Pushing the boundaries of diagnostic technology, continuously seeking better ways to improve patient care.' },
  { title: 'Quality', text: 'From R&D to manufacturing and support, we strive to meet and exceed the highest industry standards.' },
  { title: 'Integrity', text: 'Honesty, transparency and ethical principles in every interaction, building trust with clients, partners and employees.' },
  { title: 'Customer-centricity', text: 'Understanding and addressing the unique challenges of healthcare professionals with tailored solutions.' },
  { title: 'Collaboration', text: 'Teamwork within our organisation and with external partners drives shared goals and mutual success.' },
  { title: 'Excellence', text: 'Precision in our diagnostic tools and efficiency in our operations, for the best outcomes for clients and patients.' },
  { title: 'Sustainability', text: 'Sustainable practices that reduce our environmental impact and support the communities we serve.' },
  { title: 'Continuous improvement', text: 'A culture of learning that grows, adapts and innovates with the evolving needs of healthcare.' },
]

const About = () => (
  <>
    <section className="hero hero--corridor container" aria-labelledby="about-title" data-intro>
      <h1 id="about-title" data-split>
        Instruments, assays and the people behind them.
      </h1>
      <p className="lead" data-intro-item>
        ARES Labs supplies IVD technology to the Middle East, India and nearby markets.
      </p>
    </section>

    <section className="section doc container" aria-labelledby="story-title">
      <div className="doc-row" data-reveal>
        <h2 id="story-title">A long legacy, three commitments</h2>
        <div className="doc-prose">
          <p>
            With a long legacy in the medical industry, we put that experience into
            instrumentation, assays and support workflows built for accuracy, efficiency and
            resilience.
          </p>
        </div>
      </div>
      <div className="trio" data-stagger>
        {pillars.map((p) => (
          <div className="trio-item" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="band band--dark" aria-label="Vision and mission">
      <div className="container vm">
        <p className="statement statement--vision" data-reveal>
          To be a global leader in the development and delivery of innovative IVD instruments and
          reagents, giving healthcare professionals reliable and precise diagnostic tools that
          enhance patient care and contribute to a healthier world.
        </p>
        <p className="vm-caption" data-reveal>
          The ARES Labs vision
        </p>
        <div className="vm-mission" data-reveal>
          <h2>Quality and accuracy, without compromise</h2>
          <p>
            Our mission: to design, manufacture and supply IVD instruments and reagents that meet
            the highest standards of quality and accuracy, advancing diagnostic technologies,
            fostering innovation and building lasting partnerships with healthcare providers.
          </p>
        </div>
      </div>
    </section>

    <section className="section container" aria-labelledby="values-title">
      <h2 id="values-title" className="values-title" data-reveal>
        Eight values, one standard
      </h2>
      <dl className="values" data-stagger>
        {coreValues.map((v) => (
          <div className="values-item" key={v.title}>
            <dt>{v.title}</dt>
            <dd>{v.text}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="band band--close" aria-labelledby="about-close-title">
      <div className="container close-band">
        <div className="close-band-text" data-reveal>
          <h2 id="about-close-title">Your menu and volumes, our proposal</h2>
          <p>Send us your test menu and daily volumes and we will propose the platform mix and the service programme.</p>
        </div>
        <Link to="/contact" className="btn btn--primary" data-fill data-reveal viewTransition>
          Request a demo
        </Link>
      </div>
    </section>
  </>
)

export default About
