const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    const subject = encodeURIComponent(`New enquiry from ${data.name || 'ARES Dubai site'}`)
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
        <div className="hero-content">
          <h1>Let’s build the future of diagnostics together</h1>
          <p className="lead">
            Share your requirements and we’ll recommend the right instrumentation, assays, and
            service programme for your laboratory.
          </p>
        </div>
      </section>

      <section className="section contact">
        <div className="section-inner contact-grid">
          <div className="contact-info">
            <h2>Direct contact</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@ares-labs.com">contact@ares-labs.com</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/918595710338" target="_blank" rel="noreferrer">
                +91&nbsp;85957&nbsp;10338
              </a>
            </p>
            <p>
              <strong>Head office:</strong> Dubai, United Arab Emirates — servicing the Middle East,
              India, and neighbouring regions.
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
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
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
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

