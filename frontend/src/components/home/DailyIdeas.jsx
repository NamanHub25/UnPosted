import { ArrowUpRight, Heart, Bookmark, Sparkles } from "lucide-react";
import "./DailyIdeas.css";

const ideas = [
  {
    number: "01",
    category: "A LITTLE MOMENT",
    title: "Something you almost forgot",
    description:
      "A tiny moment from today that would disappear if you didn't write it down. Maybe it was a laugh, a smell, a sentence, or the way the evening felt.",
    color: "idea-blue",
  },
  {
    number: "02",
    category: "LOOK BACK",
    title: "A version of you from before",
    description:
      "Think about something you used to care about deeply. Do you still feel the same way? Maybe that older version of you deserves a few words.",
    color: "idea-violet",
  },
  {
    number: "03",
    category: "NOTICE THIS",
    title: "The ordinary thing you'll miss",
    description:
      "There is probably something completely ordinary in your life right now that you'll wish you could experience again someday.",
    color: "idea-butter",
  },
];

function DailyIdeas() {
  return (
    <section className="daily-ideas">
      <div className="daily-header">
        <div>
          <span className="section-label">A THOUGHT FOR TODAY</span>

          <h2>
            Something worth
            <br />
            <em>remembering.</em>
          </h2>
        </div>

        <p>
          You don't have to write about everything.
          <br />
          Just notice one thing before the day disappears.
        </p>
      </div>

      <div className="ideas-stack">
        {ideas.map((idea) => (
          <article className={`idea-card ${idea.color}`} key={idea.number}>
            <div className="idea-number">{idea.number}</div>

            <div className="idea-main">
              <span className="idea-category">{idea.category}</span>

              <h3>{idea.title}</h3>

              <p>{idea.description}</p>

              <button className="idea-explore">
                explore this thought
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="idea-actions">
              <button aria-label="Save idea">
                <Bookmark size={17} strokeWidth={1.7} />
              </button>

              <button aria-label="Like idea">
                <Heart size={17} strokeWidth={1.7} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="daily-footer">
        <div className="daily-spark">
          <Sparkles size={16} />
          <span>picked for your kind of memories</span>
        </div>

        <span className="daily-count">03 / 05 thoughts</span>
      </div>
    </section>
  );
}

export default DailyIdeas;