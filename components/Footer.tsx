import { CONTACT_EMAIL, DIVISIONS, LINKEDIN_URL, SOCIAL_URL } from "@/lib/content";
import ExtLink from "./ExtLink";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo />
            <p>Connecting Intelligence, Technology &amp; Opportunities.</p>
          </div>
          <div className="foot-cols">
            <div>
              <h4>YUGTI</h4>
              <a href="/#about">About YUGTI</a>
              <a href="/#vision">Our Vision</a>
              <a href="/#contact">Contact Us</a>
            </div>
            <div>
              <h4>Our Ecosystem</h4>
              {DIVISIONS.map((d) => <ExtLink key={d.id} href={d.url}>{d.name}</ExtLink>)}
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="/#about">About Us</a>
              <a href="/#divisions">Our Services</a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Careers%20at%20YUGTI`}>Careers</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              {LINKEDIN_URL ? <ExtLink href={LINKEDIN_URL}>LinkedIn</ExtLink> : <span className="muted">LinkedIn</span>}
              {SOCIAL_URL ? <ExtLink href={SOCIAL_URL}>Social media</ExtLink> : <span className="muted">Social media</span>}
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} YUGTI. All rights reserved.</span>
          <span className="legal"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></span>
        </div>
      </div>
    </footer>
  );
}
