import { useId, useState } from 'react'

/**
 * An accessible disclosure whose panel opens on grid-template-rows, so the
 * height animates without touching layout properties. Open by default where
 * the page says so; the content is in the DOM either way.
 */
const Disclosure = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <h3 className="faq-q">
        <button
          type="button"
          className="faq-trigger"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((s) => !s)}
        >
          <span>{question}</span>
          <span className="faq-mark" aria-hidden="true" />
        </button>
      </h3>
      <div className="faq-panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-q`}>
        <div className="faq-panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Disclosure
