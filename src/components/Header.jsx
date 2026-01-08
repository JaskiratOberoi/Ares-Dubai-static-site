import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
  { path: '/careers', label: 'Careers' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((state) => !state)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src="/assets/images/logo.png" alt="ARES Labs logo" />
          <span>ARES Labs</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="nav-desktop">
          <ul>
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className={`nav-mobile ${isOpen ? 'is-open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

