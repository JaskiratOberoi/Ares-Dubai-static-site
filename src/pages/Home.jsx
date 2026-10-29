import { Link } from 'react-router-dom'
import ProductFigure from '../components/ProductFigure.jsx'
import KineticTrace from '../components/KineticTrace.jsx'
import { products } from '../data/products'

const flagship = products.find((p) => p.id === 'magicl-6000i')
const others = products.filter((p) => p.id !== 'magicl-6000i')

const service = [
  {
    title: 'Hotline',
    line: (
      <>
        Message{' '}
        <a href="https://wa.me/919324634486" target="_blank" rel="noreferrer">
          <span className="measured">+91 93246 34486</span> on WhatsApp
        </a>{' '}
        and it goes straight to engineering dispatch.
      </>
    ),
  },
  {
    title: 'Installation',
    line: 'Factory-trained engineers install, verify and see the instrument to go-live.',
  },
  {
    title: 'Training',
    line: 'Application specialists train your team on operation, QC and troubleshooting.',
  },
  {
    title: 'Maintenance',
    line: 'Preventative visits, and an engineer network for corrective support.',
  },
]

const Home = () => (
  <>
    <section className="hero hero--index container" aria-labelledby="home-title" data-intro>
      <div className="index-head">
        <h1 id="home-title" data-split>
          What does ARES put on the bench?
        </h1>
        <div className="index-aside">
          <p className="lead" data-intro-item>
            Four IVD platforms for Indian labs, serviced daily.
          </p>
          <div className="actions" data-intro-item>
            <Link to="/contact" className="btn btn--primary" data-fill viewTransition>
              Request a demo
            </Link>
            <Link to="/products" className="btn btn--quiet" data-fill viewTransition>
              Compare the platforms
            </Link>
          </div>
        </div>
      </div>

      <nav className="panels bento" aria-label="The four platforms">
        <Link to={`/products#${flagship.id}`} className="panel bento-lead" data-intro-tile viewTransition>
          <ProductFigure product={flagship} priority className="bento-lead-figure" scale={1.45} transition />
          <span className="bento-lead-text">
            <span className="index-name">{flagship.title}</span>
            <span className="index-sub">{flagship.subtitle}</span>
            <span className="reading reading--tile">
              <span data-count="200">200</span>
              <span className="reading-unit">tests/h</span>
            </span>
            <span className="measured index-measure">10 min to the first result</span>
            <span className="index-cta">Platform details</span>
          </span>
        </Link>
        {others.map((p) => (
          <Link key={p.id} to={`/products#${p.id}`} className="panel bento-tile" data-intro-tile viewTransition>
            <ProductFigure product={p} className="bento-tile-figure" scale={p.id === 'hematology' ? 1.35 : 1} transition />
            <span className="bento-tile-text">
              <span className="index-name">{p.title}</span>
              <span className="index-sub">{p.subtitle}</span>
              <span className="index-cta">Platform details</span>
            </span>
          </Link>
        ))}
      </nav>
    </section>

    <section className="section qa container" aria-labelledby="q-result">
      <div className="qa-head" data-reveal>
        <h2 id="q-result">How fast is the first result?</h2>
        <p>
          Ten minutes on the MAGICL 6000i, then up to 200 tests an hour from a benchtop analyzer
          that loads consumables without stopping.
        </p>
        <p>
          <Link to="/products#magicl-6000i" className="text-link" viewTransition>
            Read the MAGICL 6000i sheet
          </Link>
        </p>
      </div>
      <div className="qa-body">
        <div className="panels reading-set" data-reveal>
          <div className="panel panel--trace">
            <KineticTrace />
          </div>
          <div className="panel reading-panel">
            <span className="reading">
              <span data-count="10">10</span>
              <span className="reading-unit">min</span>
            </span>
            <span className="reading-label">First result</span>
          </div>
          <div className="panel reading-panel">
            <span className="reading">
              <span data-count="200">200</span>
              <span className="reading-unit">/h</span>
            </span>
            <span className="reading-label">Tests at peak throughput</span>
          </div>
          <dl className="panel specs">
            {flagship.specs.map((s) => (
              <div className="specs-row" key={s.label}>
                <dt>{s.label}</dt>
                <dd className="measured">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <section className="band" aria-labelledby="q-regions">
      <div className="container statement-block">
        <h2 id="q-regions" data-reveal>
          Where are your engineers?
        </h2>
        <p className="statement statement--wipe">
          Laboratories across India, served by field engineers and application
          specialists.
        </p>
        <p className="statement-note" data-reveal>
          Registered and corporate offices in New Delhi.
        </p>
      </div>
    </section>

    <section className="section showcase container" aria-label="On the bench">
      <figure
        className="photo photo--wide"
        data-slot="bench-wide"
        data-alt="A wide shot of a customer laboratory with ARES instruments on the bench"
        data-reveal
      >
        <img
          src="/assets/images/lab-tubes.jpg"
          alt="A row of glass test tubes standing in a steel rack"
          width="1920"
          height="1280"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <p className="caption" data-reveal>
        Haematology, chemistry, immunoassay and HPLC on one bench, kept running by one engineer
        network.
      </p>
    </section>

    <section className="band band--dark" aria-labelledby="q-stops">
      <div className="container qa">
        <div className="qa-head" data-reveal>
          <h2 id="q-stops">What happens when an instrument stops?</h2>
          <p>
            You message the hotline and an engineer is assigned at once. The line is open every day
            of the week.
          </p>
          <p className="reading reading--inline reading--cool">
            <span className="measured">
              <span data-count="8" data-pad="2">08</span>:00
            </span>
            <span className="reading-unit">to</span>
            <span className="measured">
              <span data-count="22" data-pad="2">22</span>:00
            </span>
            <span className="reading-unit">IST</span>
          </p>
        </div>
        <dl className="qa-body rows" data-stagger>
          {service.map((row) => (
            <div className="rows-item" key={row.title}>
              <dt>{row.title}</dt>
              <dd>{row.line}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="section section--l split split--close container" aria-labelledby="q-demo">
      <figure
        className="photo photo--portrait"
        data-slot="bench"
        data-alt="Your own bench: an ARES instrument installed in a customer laboratory"
        data-reveal
      >
        <img
          src="/assets/images/lab-pipette.jpg"
          alt="A gloved hand holding a pipette over a laboratory bench"
          width="1280"
          height="1920"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="split-text" data-reveal>
        <h2 id="q-demo">Will you bring one to our bench?</h2>
        <p>
          Yes. We bring the instrument to your samples and your workload, with an application
          specialist, and there is no obligation.
        </p>
        <div className="actions">
          <Link to="/contact" className="btn btn--quiet" data-fill viewTransition>
            Request a demo
          </Link>
          <a href="mailto:contact@ares-labs.com" className="text-link">
            contact@ares-labs.com
          </a>
        </div>
      </div>
    </section>
  </>
)

export default Home
