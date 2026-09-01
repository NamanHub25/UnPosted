import { Brain, Lightbulb, PenLine } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: Brain,
    title: "we get to know you",
    description:
      "UnPosted looks at what you've already written and quietly learns your themes, tone, and the things you naturally care about.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "we find the little things",
    description:
      "Every morning, you get a handful of thoughts worth exploring — based on your voice, your interests, and things you haven't said yet.",
  },
  {
    number: "03",
    icon: PenLine,
    title: "you decide what to say",
    description:
      "No auto-generated essays. No content factories. Just a small nudge. The story is still yours.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-intro">
        <span className="section-label">HOW IT WORKS</span>

        <h2>
          We bring the thought.
          <br />
          <em>You bring the story.</em>
        </h2>

        <p>
          UnPosted doesn't try to become your voice. It simply helps you notice
          the things you already have something to say about.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article className="step-card" key={step.number}>
              <div className="step-top">
                <span>{step.number}</span>
                <Icon size={20} strokeWidth={1.5} />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;