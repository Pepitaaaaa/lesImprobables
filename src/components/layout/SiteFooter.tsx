import { AnchorIcon, StarDivider } from '../ui/Decorations'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <svg className="footer-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path className="footer-wave-fill" d="M0 40c200-34 420-34 640-6s460 30 800-20v66H0Z" />
        <path className="footer-wave-line" d="M0 58c200-30 420-30 640-4s460 26 800-22" />
      </svg>
      <div className="footer-inner">
        <div className="footer-social">
          <p>Suivez-nous</p>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 2a10 10 0 0 0-1.6 19.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-brand">
          <AnchorIcon className="footer-anchor" />
          <p>Les Impro-Bables</p>
          <StarDivider className="footer-star" />
        </div>
        <div className="footer-legal">
          <p>Les Impro-Bables © 2024</p>
          <p>Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
