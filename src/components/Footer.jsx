import { Link } from 'react-router-dom'
import { products } from '../data/products'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-mast" aria-label="ARES Labs, home">
          <img
            src="/assets/images/ares-glyph.png"
            alt=""
            className="brand-glyph"
            width="121"
            height="128"
          />
          <span className="brand-word">ARES Labs</span>
        </Link>

        <p className="footer-colophon">
          ARES Labs LLP supplies and services in-vitro diagnostic instruments for laboratories
          across India. Registered office: WZ-490C, Janak Park,
          Hari Nagar, New Delhi 110064. Corporate office: A-4, 1st Floor, Subash Nagar, beside Amit
          Nursing Home, New Delhi 110018. Write to{' '}
          <a href="mailto:contact@ares-labs.com">contact@ares-labs.com</a> or message{' '}
          <a href="https://wa.me/919324634486" target="_blank" rel="noreferrer">
            <span className="measured">+91 93246 34486</span> on WhatsApp
          </a>
          , <span className="measured">08:00</span> to <span className="measured">22:00</span> IST,
          every day.
        </p>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/" viewTransition>Home</Link>
          <Link to="/products" viewTransition>Platforms</Link>
          <Link to="/about-us" viewTransition>About us</Link>
          <Link to="/careers" viewTransition>Careers</Link>
          <Link to="/contact" viewTransition>Contact</Link>
        </nav>
        <nav className="footer-links" aria-label="Platforms">
          {products.map((p) => (
            <Link to={`/products#${p.id}`} key={p.id} viewTransition>
              {p.title}
            </Link>
          ))}
        </nav>

        <p className="footer-meta">
          <span>© {year} ARES Labs LLP</span>
          <span data-credits>
            Photographs:{' '}
            <a href="https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_11401_CSIRO_researcher_with_pipette.jpg">
              Morgan Brown, CSIRO
            </a>{' '}
            (CC BY 3.0),{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Test_tubes_in_rack.jpg">J.N. Eskra</a>{' '}
            (CC BY-SA 4.0), both Wikimedia Commons
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
