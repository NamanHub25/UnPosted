import { ArrowUpRight, Sparkles } from "lucide-react";
import "./HiddenThoughts.css";

const thoughts = [
  {
    text: "you were frustrated because something mattered to you.",
    tag: "a little realization",
    className: "thought-one",
  },
  {
    text: "you helped someone without thinking twice.",
    tag: "something worth remembering",
    className: "thought-two",
  },
  {
    text: "you changed your mind about something.",
    tag: "a thought in progress",
    className: "thought-three",
  },
  {
    text: "you noticed something everyone else walked past.",
    tag: "an observation",
    className: "thought-four",
  },
];

function HiddenThoughts() {
  return (
    <section className="hidden-thoughts">
      <div className="hidden-heading">
        <span className="section-label">THE LITTLE THINGS</span>

        <h2>
          Your day leaves
          <br />
          <em>things behind.</em>
        </h2>

        <p>
          Most of them disappear by tomorrow. Some of them might be worth
          keeping.
        </p>
      </div>

      <div className="thoughts-canvas">
        <div className="canvas-center">
          <Sparkles size={20} />

          <span>UNPOSTED</span>

          <strong>
            hidden
            <br />
            thought.
          </strong>
        </div>

        {thoughts.map((thought) => (
          <article
            className={`thought-card ${thought.className}`}
            key={thought.text}
          >
            <span>{thought.tag}</span>

            <p>{thought.text}</p>

            <button aria-label="Explore thought">
              <ArrowUpRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HiddenThoughts;