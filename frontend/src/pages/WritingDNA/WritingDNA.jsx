import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./WritingDNA.css";

const traits = [
  {
    word: "curious",
    description: "You like asking why.",
  },
  {
    word: "reflective",
    description: "You look back before moving on.",
  },
  {
    word: "observational",
    description: "Small details don't escape you.",
  },
  {
    word: "honest",
    description: "You'd rather be real than polished.",
  },
];

function WritingDNA() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/import-posts");
  };

  return (
    <main className="dna-page">
      <header className="dna-header">
        <div className="dna-logo">
          UnPosted<span>.</span>
        </div>

        <span className="dna-step">02 / 03</span>
      </header>

      <section className="dna-content">
        <div className="dna-intro">
          <div className="dna-spark">
            <Sparkles size={17} />
          </div>

          <span className="section-label">A FIRST IMPRESSION</span>

          <h1>
            We're starting
            <br />
            to <em>get you.</em>
          </h1>

          <p>
            Based on what you just told us, here's a tiny first sketch of
            your writing personality.
          </p>
        </div>

        <div className="dna-card">
          <div className="dna-card-top">
            <span>YOUR WRITING DNA</span>

            <span>UNPOSTED / 001</span>
          </div>

          <div className="dna-main-trait">
            <span>you might be</span>

            <h2>
              quietly
              <br />
              <em>curious.</em>
            </h2>
          </div>

          <div className="dna-traits">
            {traits.map((trait, index) => (
              <div className="dna-trait" key={trait.word}>
                <span className="dna-number">
                  0{index + 1}
                </span>

                <div>
                  <strong>{trait.word}</strong>

                  <p>{trait.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dna-card-bottom">
            <span>
              This is only the beginning.
            </span>

            <span>✦</span>
          </div>
        </div>

        <button
          className="dna-continue"
          onClick={handleContinue}
        >
          Make it more me!
          <ArrowRight size={16} />
        </button>
      </section>

      <div className="dna-footer">
        <span>Your DNA gets smarter as you use UnPosted.</span>

        <span>02</span>
      </div>
    </main>
  );
}

export default WritingDNA;