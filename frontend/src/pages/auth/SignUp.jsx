import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/onboarding");
  };

  return (
    <main className="auth-page signup-page">
      <Link to="/" className="auth-back">
        <ArrowLeft size={15} />
        Back to UnPosted
      </Link>

      <div className="auth-shell">
        <section className="auth-intro">
          <span className="section-label">A LITTLE BEGINNING</span>

          <h1>
            Let's find
            <br />
            <em>your thoughts.</em>
          </h1>

          <p>
            UnPosted gets to know the way you think, what you notice, and
            eventually, what you might want to write about.
          </p>

          <span className="auth-note">
            No content strategy required.
          </span>
        </section>

        <section className="auth-card">
          <div className="auth-card-heading">
            <span>01 / JOIN UNPOSTED</span>
            <span>✦</span>
          </div>

          <h2>Create your account.</h2>

          <p className="auth-subtitle">
            Your little corner for thoughts worth keeping.
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                type="text"
                placeholder="Naman"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="••••••••"
                required
              />
            </label>

            <button type="submit" className="auth-submit">
              Create my space
              <ArrowUpRight size={16} />
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Come back in →</Link>
          </p>
        </section>
      </div>

      <div className="auth-footer-note">
        <span>UnPosted / 2026</span>
        <span>something worth noticing.</span>
      </div>
    </main>
  );
}

export default Signup;