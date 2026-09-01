import { ArrowDown, Sparkles } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-glow hero-glow-violet" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <Sparkles size={14} />
          <span>a little something to write about</span>
        </div>

        <h1>
          You probably have
          <br />
          <em>more to say</em> than you think.
        </h1>

        <p>
          UnPosted notices the little things in your day, learns what you care
          about, and helps you find the stories hiding in between.
        </p>

        <div className="hero-actions">
          <a href="/signup" className="hero-primary">
            find my ideas
            <ArrowDown size={17} />
          </a>

          <a href="#how-it-works" className="hero-secondary">
            see how it works
          </a>
        </div>
      </div>

      <div className="hero-note hero-note-left">
        <span>currently thinking about...</span>
        <strong>why tiny wins feel so big</strong>
      </div>

      <div className="hero-note hero-note-right">
        <span>unposted / 001</span>
        <strong>something worth saying</strong>
      </div>

      <div className="hero-scroll">
        <span>scroll slowly</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}

export default Hero;