const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/images/logo.png" alt="ARES Dubai" />
          <div>
            <p className="footer-title">ARES Dubai</p>
            <p>Innovating diagnostic, empowering healthcare.</p>
          </div>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">Contact</p>
          <p>
            <a href="mailto:operations@ares-labs.com">operations@ares-labs.com</a>
          </p>
          <p>
            <a href="https://wa.me/918595710338" target="_blank" rel="noreferrer">
              WhatsApp: +91 85957 10338
            </a>
          </p>
        </div>
      </div>
      <div className="footer-meta">
        <p>© {year} ARES Dubai. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

