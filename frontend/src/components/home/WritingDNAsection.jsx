import { ArrowUpRight, Sparkles } from "lucide-react";
import "./WritingDNAsection.css";

const traits = [
  { label: "curious", className: "trait-purple" },
  { label: "reflective", className: "trait-blue" },
  { label: "builder", className: "trait-yellow" },
  { label: "observant", className: "trait-coral" },
  { label: "hopeful", className: "trait-sage" },
];

const topics = [
  "building things",
  "learning in public",
  "people",
  "small observations",
];

function WritingDNAsection() {
  return (
    <section className="writing-dna" id="about">
      <div className="dna-copy">
        <span className="section-label">YOUR WRITING DNA</span>

        <h2>
          Before giving you ideas,
          <br />
          <em>we get to know you.</em>
        </h2>

        <p>
          Connect your existing writing and UnPosted starts noticing the
          patterns — the topics you return to, the way you tell stories, and
          the things that sound unmistakably like you.
        </p>

        <a href="/signup" className="dna-link">
          discover yours
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="dna-card">
        <div className="dna-card-top">
          <div className="dna-avatar">N</div>

          <div>
            <span className="dna-small-label">WRITING FINGERPRINT</span>
            <p>someone who notices things</p>
          </div>

          <Sparkles className="dna-sparkle" size={20} />
        </div>

        <div className="dna-divider" />

        <div className="dna-section">
          <span className="dna-small-label">YOUR VOICE</span>

          <div className="traits">
            {traits.map((trait) => (
              <span
                key={trait.label}
                className={`trait ${trait.className}`}
              >
                {trait.label}
              </span>
            ))}
          </div>
        </div>

        <div className="dna-section">
          <span className="dna-small-label">YOU KEEP COMING BACK TO</span>

          <div className="dna-topics">
            {topics.map((topic, index) => (
              <div className="dna-topic" key={topic}>
                <span>0{index + 1}</span>
                <p>{topic}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dna-footer">
          <span>analysis / 001</span>
          <span>updated just now</span>
        </div>
      </div>
    </section>
  );
}

export default WritingDNAsection;