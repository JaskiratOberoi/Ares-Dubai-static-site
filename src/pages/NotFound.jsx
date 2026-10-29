import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="hero hero--banner container" aria-labelledby="nf-title" data-intro>
    <div className="banner-head">
      <h1 id="nf-title" data-split>
        No reading at this address.
      </h1>
      <p className="lead" data-intro-item>
        The page you asked for is not on the bench. The platforms and the hotline are.
      </p>
    </div>
    <div className="actions" data-intro-item>
      <Link to="/" className="btn btn--primary" data-fill viewTransition>
        Back to the bench
      </Link>
      <Link to="/products" className="btn btn--quiet" data-fill viewTransition>
        See the platforms
      </Link>
    </div>
  </section>
)

export default NotFound
