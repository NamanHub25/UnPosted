import { ArrowUpRight, Moon, Sparkles } from "lucide-react";
import "./DayReflection.css";

function DayReflection() {
  return (
    <section className="day-reflection">
      <div className="day-reflection-glow" />

      <div className="reflection-header">
        <div className="reflection-moon">
          <Moon size={17} strokeWidth={1.5} />
        </div>

        <span className="section-label">BEFORE YOU GO</span>
      </div>

      <div className="reflection-content">
        <div className="reflection-copy">
          <h2>
            How was
            <br />
            <em>your day?</em>
          </h2>

          <p>
            You don't need a profound answer. Tell us about the frustrating
            thing, the tiny win, the strange conversation, or absolutely
            nothing.
          </p>

          <span className="reflection-note">
            sometimes the ordinary things are the interesting ones.
          </span>
        </div>

        <div className="reflection-journal">
          <div className="journal-top">
            <span>MONDAY / AUG 31</span>
            <Sparkles size={16} />
          </div>

          <div className="journal-paper">
            <span className="journal-prompt">
              honestly, today was...
            </span>

            <p>
              I spent most of the afternoon debugging something that
              eventually turned out to be a tiny mistake. It was frustrating,
              but weirdly satisfying once I finally found it.
            </p>

            <button className="journal-button">
              find something here
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="journal-result">
            <span className="result-label">
              <Sparkles size={13} />
              WE FOUND SOMETHING
            </span>

            <h3>
              Maybe there's a post hiding in that.
            </h3>

            <p>
              Three hours fixing something that turned out to be one tiny
              mistake. There's probably a story in there about persistence,
              frustration, or simply learning to look closer.
            </p>

            <span className="result-footer">
              hidden thought / 001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DayReflection;