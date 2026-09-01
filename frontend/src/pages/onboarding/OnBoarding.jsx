import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const questions = [
  {
    id: "notice",
    label: "01 / THE WAY YOU NOTICE",
    question: "What do you usually find yourself noticing?",
    subtitle: "There isn't a right answer. We're just curious.",
    options: [
      "small details",
      "people & conversations",
      "ideas & patterns",
      "things that don't make sense",
      "my own thoughts",
      "a little bit of everything",
    ],
  },
  {
    id: "write",
    label: "02 / THE THINGS YOU WRITE",
    question: "What do you naturally enjoy talking about?",
    subtitle: "Think about the things you could talk about for hours.",
    options: [
      "building things",
      "lessons I've learned",
      "people & experiences",
      "technology",
      "random observations",
      "things I'm figuring out",
    ],
  },
  {
    id: "feel",
    label: "03 / THE FEELING",
    question: "How should your posts feel?",
    subtitle: "Pick the ones that sound most like you.",
    options: [
      "thoughtful",
      "curious",
      "honest",
      "playful",
      "inspiring",
      "unfiltered",
    ],
  },
];

function Onboarding() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[step];

  const selectAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });
  };

  const nextStep = () => {
    if (!answers[currentQuestion.id]) return;

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    navigate("/writing-dna");
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigate("/signup");
    }
  };

  return (
    <main className="onboarding-page">
      <header className="onboarding-header">
        <button onClick={previousStep} className="onboarding-back">
          <ArrowLeft size={15} />
          back
        </button>

        <div className="onboarding-logo">
          UnPosted<span>.</span>
        </div>

        <span className="onboarding-progress">
          {String(step + 1).padStart(2, "0")} /{" "}
          {String(questions.length).padStart(2, "0")}
        </span>
      </header>

      <div className="onboarding-progress-bar">
        <div
          style={{
            width: `${((step + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <section className="onboarding-content">
        <div className="onboarding-question">
          <span className="section-label">
            {currentQuestion.label}
          </span>

          <h1>{currentQuestion.question}</h1>

          <p>{currentQuestion.subtitle}</p>
        </div>

        <div className="onboarding-options">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={
                answers[currentQuestion.id] === option
                  ? "option selected"
                  : "option"
              }
              onClick={() => selectAnswer(option)}
            >
              <span>{option}</span>

              <span className="option-arrow">↗</span>
            </button>
          ))}
        </div>

        <button
          className="onboarding-next"
          onClick={nextStep}
          disabled={!answers[currentQuestion.id]}
        >
          {step === questions.length - 1
            ? "build my writing DNA"
            : "that's me →"}

          {step === questions.length - 1 ? (
            <Sparkles size={16} />
          ) : (
            <ArrowRight size={16} />
          )}
        </button>
      </section>

      <div className="onboarding-note">
        <span>no wrong answers.</span>
        <span>✦</span>
        <span>just your version.</span>
      </div>
    </main>
  );
}

export default Onboarding;