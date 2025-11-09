const opportunities = [
  {
    title: 'Clinical application specialists',
    detail:
      'Support our hospital and laboratory partners with instrument training, workflow optimisation, and validation services.',
  },
  {
    title: 'Field service engineers',
    detail:
      'Deliver preventative maintenance and responsive on-site support across the UAE, KSA, Qatar, and India.',
  },
  {
    title: 'Channel partners',
    detail:
      'Collaborate with the ARES commercial team to extend our footprint in emerging markets throughout the region.',
  },
]

const Careers = () => {
  return (
    <section className="section careers">
      <div className="section-inner">
        <h1>Careers & collaborations</h1>
        <p className="lead">
          ARES Dubai is growing fast, and we’re assembling a team of specialists who are passionate
          about the science behind diagnostics. Whether you are an engineer, application scientist,
          commercial strategist, or distribution partner, we would love to hear from you.
        </p>
        <div className="opportunity-grid">
          {opportunities.map((role) => (
            <article key={role.title}>
              <h2>{role.title}</h2>
              <p>{role.detail}</p>
            </article>
          ))}
        </div>
        <div className="careers-cta">
          <p>
            Send your CV or partnership proposal to{' '}
            <a href="mailto:operations@ares-labs.com">operations@ares-labs.com</a> with the subject
            “Join ARES”. Please include a short overview of your experience and the markets or
            technologies you specialise in.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Careers

