import { useState } from 'react'
import Disclosure from '../components/Disclosure.jsx'

const offices = [
  {
    title: 'Registered office',
    lines: ['WZ-490C, Janak Park, Hari Nagar', 'New Delhi 110064'],
  },
  {
    title: 'Corporate office',
    lines: ['A-4, 1st Floor, Subash Nagar', 'beside Amit Nursing Home', 'New Delhi 110018'],
  },
]

const faqs = [
  {
    q: 'How quickly can you respond to an instrument breakdown?',
    a: 'Use the WhatsApp hotline for urgent support. It goes straight to our engineering dispatch so an engineer can be assigned immediately. The support window runs 08:00 to 22:00 GST, every day of the week.',
  },
  {
    q: 'Can we see an instrument before committing?',
    a: 'Yes. We arrange demonstrations and application discussions around your samples and workload. Request a demo through the form and we will coordinate a session with an application specialist.',
  },
  {
    q: 'Which regions do you cover?',
    a: 'We serve laboratories across the Middle East, India and neighbouring growth markets, with field engineers covering KSA, Qatar and India.',
  },
  {
    q: 'Do you support instruments after installation?',
    a: 'Every installation carries a lifecycle programme: verification at go-live, operator training, preventative maintenance and a responsive engineer network for corrective support.',
  },
]

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    const subject = encodeURIComponent(`New enquiry from ${data.name || 'ARES Labs site'}`)
    const lines = [
      `Name: ${data.name ?? 'N/A'}`,
      `Email: ${data.email ?? 'N/A'}`,
      `Phone: ${data.phone ?? 'N/A'}`,
      `Organisation: ${data.org ?? 'N/A'}`,
      '',
      'Message:',
      data.message ?? '',
    ]
    const body = encodeURIComponent(lines.join('\n'))

    window.location.href = `mailto:contact@ares-labs.com?subject=${subject}&body=${body}`
    setStatus('Your email app is opening with this message filled in. Nothing is sent from this page itself.')
  }

  return (
    <>
      <section className="hero hero--counter container" aria-labelledby="contact-title" data-intro>
        <div className="counter-text">
          <h1 id="contact-title" data-split>
            Tell us about your lab.
          </h1>
          <p className="lead" data-intro-item>
            Share your workload and we recommend the instruments, assays and service.
          </p>
          <p className="reading reading--inline" data-intro-item>
            <span className="measured">
              <span data-count="8" data-pad="2">08</span>:00
            </span>
            <span className="reading-unit">to</span>
            <span className="measured">
              <span data-count="22" data-pad="2">22</span>:00
            </span>
            <span className="reading-unit">GST</span>
          </p>
          <p className="counter-hotline" data-intro-item>
            Support hours, every day. Urgent instrument support:{' '}
            <a href="https://wa.me/919324634486" target="_blank" rel="noreferrer">
              <span className="measured">+91 93246 34486</span> on WhatsApp
            </a>
          </p>
        </div>

        <form className="form panel" onSubmit={handleSubmit} data-endpoint="mailto:contact@ares-labs.com" data-intro-figure>
          <h2 className="form-title">Send a message</h2>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input className="input" id="name" name="name" type="text" autoComplete="name" required aria-required="true" />
            </div>
            <div className="field">
              <label htmlFor="org">Organisation</label>
              <input className="input" id="org" name="org" type="text" autoComplete="organization" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input className="input" id="email" name="email" type="email" autoComplete="email" inputMode="email" required aria-required="true" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input className="input" id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">How can we help?</label>
            <textarea className="input" id="message" name="message" rows="5" required aria-required="true" />
          </div>
          <div className="form-foot">
            <button type="submit" className="btn btn--primary" data-fill>
              Send message
            </button>
            <p className="form-help" role="status" aria-live="polite">
              {status}
            </p>
          </div>
        </form>
      </section>

      <section className="section qa container" aria-labelledby="offices-title">
        <div className="qa-head" data-reveal>
          <h2 id="offices-title">Two offices, one hotline, every day</h2>
          <p>Both offices are in New Delhi. Field engineers cover KSA, Qatar and India from there.</p>
        </div>
        <dl className="qa-body rows" data-stagger>
          <div className="rows-item">
            <dt>Email</dt>
            <dd>
              <a href="mailto:contact@ares-labs.com">contact@ares-labs.com</a>
              <br />
              Quotes, demos and partnerships
            </dd>
          </div>
          <div className="rows-item">
            <dt>WhatsApp hotline</dt>
            <dd>
              <a href="https://wa.me/919324634486" target="_blank" rel="noreferrer">
                <span className="measured">+91 93246 34486</span>
              </a>
              <br />
              The fastest route for urgent instrument support
            </dd>
          </div>
          <div className="rows-item">
            <dt>Support hours</dt>
            <dd>
              <span className="measured">08:00</span> to <span className="measured">22:00</span> GST
              <br />
              Sunday through Saturday, every day
            </dd>
          </div>
          {offices.map((o) => (
            <div className="rows-item" key={o.title}>
              <dt>{o.title}</dt>
              <dd>
                {o.lines.map((l, i) => (
                  <span key={l}>
                    {i > 0 && <br />}
                    {l}
                  </span>
                ))}
              </dd>
            </div>
          ))}
          <div className="rows-item">
            <dt>Field engineers</dt>
            <dd>KSA, Qatar and India</dd>
          </div>
        </dl>
      </section>

      <section className="section qa container" aria-labelledby="faq-title">
        <div className="qa-head" data-reveal>
          <h2 id="faq-title">What labs ask before they write</h2>
        </div>
        <div className="qa-body faq" data-stagger>
          {faqs.map((item, i) => (
            <Disclosure key={item.q} question={item.q} answer={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <section className="band band--close band--dark" aria-labelledby="hotline-title">
        <div className="container close-band">
          <div className="close-band-text" data-reveal>
            <h2 id="hotline-title">An instrument down right now?</h2>
            <p>The hotline reaches engineering dispatch directly, so an engineer is assigned at once.</p>
          </div>
          <a href="https://wa.me/919324634486" target="_blank" rel="noreferrer" className="btn btn--quiet" data-fill data-reveal>
            Message the hotline
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
