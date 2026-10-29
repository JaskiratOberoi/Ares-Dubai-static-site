import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import Careers from './pages/Careers.jsx'
import NotFound from './pages/NotFound.jsx'
import { boot, scrollToTop, scrollToElement, usePage } from './motion/engine.js'
import { runPageMotion } from './motion/reveals.js'

boot()

const ROUTES = [
  { path: '/', Page: Home },
  { path: '/about-us', Page: About },
  { path: '/products', Page: Products },
  { path: '/contact', Page: Contact },
  { path: '/careers', Page: Careers },
  { path: '*', Page: NotFound },
]

function AppRoutes() {
  const location = useLocation()

  // A new route starts at the top; a hash goes to its target.
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        scrollToElement(target)
        return
      }
    }
    scrollToTop()
  }, [location.pathname, location.hash])

  // The page's motion, reverted on every route change.
  usePage(() => runPageMotion(document.getElementById('main') || document))

  return (
    <Routes>
      {ROUTES.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="page">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
