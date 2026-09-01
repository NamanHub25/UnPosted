import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-cta">
        <div className="footer-scribble footer-scribble-one">
          ✦
        </div>

        <div className="footer-scribble footer-scribble-two">
          you might want to remember this.
        </div>

        <span className="section-label">ONE LAST THOUGHT</span>

        <h2>
          Maybe you have
          <br />
          <em>something to say</em>
          <br />
          after all.
        </h2>

        <p>
          Your next post doesn't need to be about something important.
          Sometimes it's just about something that mattered to you.
        </p>

        <a href="/signup" className="footer-button">
          find my first thought
          <ArrowUpRight size={17} />
        </a>
      </section>

      <div className="footer-bottom">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            UnPosted<span>.</span>
          </a>

          <p>
            stories hiding
            <br />
            in ordinary days.
          </p>
        </div>

        <div className="footer-links">
          <a href="#how-it-works">how it works</a>
          <a href="#about">your writing DNA</a>
          <a href="/login">sign in</a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">
            in
          </a>

          <a href="#" aria-label="Instagram">
            ig
          </a>
        </div>

        <div className="footer-meta">
          <span>© 2026 UnPosted</span>
          <span>made for people who notice things.</span>
        </div>
      </div>

      <div className="footer-goodbye">
        <span>see you tomorrow.</span>
        <span>✦</span>
      </div>
    </footer>
  );
}

export default Footer;