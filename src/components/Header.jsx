import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/products', label: 'Platforms' },
  { path: '/about-us', label: 'About' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()

  // the menu closes on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="nav-wrap">
      <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
        <div className="nav-bar">
          <Link to="/" className="brand" aria-label="ARES Labs, home" viewTransition>
            <img
              src="/assets/images/ares-glyph.png"
              alt=""
              className="brand-glyph"
              width="121"
              height="128"
            />
            <span className="brand-word">ARES Labs</span>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => `draw ${isActive ? 'is-active' : ''}`}
                  viewTransition
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn--quiet nav-cta" data-fill viewTransition>
              Request a demo
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((s) => !s)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        <div className="nav-menu" id={menuId}>
          <ul className="nav-menu-inner">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} className={({ isActive }) => (isActive ? 'is-active' : undefined)} viewTransition>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" viewTransition>
                Request a demo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
