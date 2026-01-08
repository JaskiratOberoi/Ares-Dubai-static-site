import Reveal from '../components/Reveal.jsx'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    const subject = encodeURIComponent(`New enquiry from ${data.name || 'ARES Labs site'}`)
    const lines = [
      `Name: ${data.name ?? 'N/A'}`,
      `Email: ${data.email ?? 'N/A'}`,
      `Phone: ${data.phone ?? 'N/A'}`,
      '',
      'Message:',
      data.message ?? '',
    ]
    const body = encodeURIComponent(lines.join('\n'))

    window.location.href = `mailto:contact@ares-labs.com?subject=${subject}&body=${body}`

    form.reset()
  }

  return (
    <>
      <section className="hero hero--compact contact-hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <Reveal className="hero-content" delay={80}>
          <h1>Let’s build the future of diagnostics together</h1>
          <p className="lead">
            Share your requirements and we’ll recommend the right instrumentation, assays, and service programme for your
            laboratory.
          </p>
        </Reveal>
      </section>

      <section className="section contact">
        <div className="section-inner contact-grid">
          <Reveal className="contact-info" delay={120}>
            <h2>Direct contact</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@ares-labs.com">contact@ares-labs.com</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/919324634486" target="_blank" rel="noreferrer">
                +91-9324634486
              </a>
            </p>
            <p>
              <strong>Registered Office:</strong> WZ-490C, Janak Park, Hari Nagar, New Delhi - 110064
            </p>
            <p>
              <strong>Corporate Office:</strong> A-4, 1st Floor, Subash Nagar, beside Amit Nursing Home, New Delhi - 110018
            </p>
            <p>
              <strong>Support hours:</strong> Sunday – Saturday, 08:00 – 22:00 GST
            </p>
            <div className="contact-note">
              <p>
                For urgent instrument support please use the WhatsApp hotline so we can assign an
                engineer immediately.
              </p>
            </div>
          </Reveal>
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit} delay={200}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows="5" required />
            </div>
            <button type="submit" className="btn primary">
              Send message
            </button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact

