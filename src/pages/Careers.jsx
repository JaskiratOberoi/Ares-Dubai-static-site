const opportunities = [
  {
    title: 'Clinical application specialists',
    detail:
      'Support our hospital and laboratory partners with instrument training, workflow optimisation and validation services.',
  },
  {
    title: 'Field service engineers',
    detail:
      'Deliver preventative maintenance and responsive on-site support across India.',
  },
  {
    title: 'Channel partners',
    detail:
      'Work with the ARES commercial team to extend our footprint across India.',
  },
]

const perks = [
  {
    title: 'Work on real problems',
    text: 'Your work ships into hospitals and labs and changes patient outcomes.',
  },
  {
    title: 'A growing market',
    text: 'India is among the fastest-growing diagnostics markets in the world.',
  },
  {
    title: 'Learn the whole stack',
    text: 'Optics, fluidics, assay chemistry and service strategy, in a small team.',
  },
]

const steps = [
  { title: 'Apply', text: 'Email your CV or proposal, subject “Join ARES”.' },
  { title: 'Intro call', text: 'A short conversation about your background.' },
  { title: 'Deep dive', text: 'Meet the team and work a scenario from the field.' },
  { title: 'Offer', text: 'Clear terms, a quick decision, structured onboarding.' },
]

const Careers = () => (
  <>
    <section className="hero hero--banner container" aria-labelledby="careers-title" data-intro>
      <div className="banner-head">
        <h1 id="careers-title" data-split>
          Dear engineer, scientist or partner,
        </h1>
        <p className="lead" data-intro-item>
          We are hiring people who care about the science behind diagnostics.
        </p>
      </div>
    </section>

    <section className="section letter container" aria-label="The letter">
      <div className="letter-body" data-reveal>
        <p>
          ARES Labs is growing, and we are assembling specialists across engineering, application
          science, commercial strategy and distribution. Three kinds of people are on our list this
          year.
        </p>
      </div>

      <dl className="rows rows--wide" data-stagger>
        {opportunities.map((role) => (
          <div className="rows-item" key={role.title}>
            <dt>{role.title}</dt>
            <dd>{role.detail}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="band band--dark" aria-labelledby="perks-title">
      <div className="container">
        <h2 id="perks-title" data-reveal>
          What you get from us
        </h2>
        <div className="trio" data-stagger>
          {perks.map((p) => (
            <div className="trio-item" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section container" aria-labelledby="process-title">
      <h2 id="process-title" data-reveal>
        Four steps, no surprises
      </h2>
      <ol className="steps" data-stagger>
        {steps.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>

    <section className="section section--s container letter-close" aria-labelledby="apply-title">
      <div className="letter-close-text" data-reveal>
        <h2 id="apply-title">Ready to join us?</h2>
        <p>
          Send your CV or partnership proposal to contact@ares-labs.com with the subject “Join
          ARES”. Include a short overview of your experience and the markets or technologies you
          specialise in.
        </p>
        <p className="signoff">
          With regards,
          <br />
          the ARES Labs team, New Delhi
        </p>
      </div>
      <a className="btn btn--primary" href="mailto:contact@ares-labs.com?subject=Join%20ARES" data-fill data-reveal>
        Email your application
      </a>
    </section>
  </>
)

export default Careers
