import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <main className="auth-page login-page">
      <Link to="/" className="auth-back">
        <ArrowLeft size={15} />
        Back to UnPosted
      </Link>

      <div className="login-shell">
        <div className="login-card">
          <div className="login-heading">
            <span className="section-label">WELCOME BACK</span>

            <div className="login-mark">✦</div>
          </div>

          <h1>
            Good to
            <br />
            <em>see you.</em>
          </h1>

          <p>
            Your thoughts didn't go anywhere.
            <br />
            They're still here.
          </p>

          <form onSubmit={handleSubmit}>
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

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember Me!!!</span>
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-submit">
              Enter UnPosted
              <ArrowUpRight size={16} />
            </button>
          </form>

          <p className="auth-switch">
            New here?{" "}
            <Link to="/signup">Start Noticing →</Link>
          </p>
        </div>

        <div className="login-side-note">
          <span>01</span>
          <p>
            Some thoughts
            <br />
            are worth
            <br />
            coming back to.
          </p>
        </div>
      </div>

      <div className="auth-footer-note">
        <span>UnPosted / 2026</span>
        <span>see you on the other side.</span>
      </div>
    </main>
  );
}

export default Login;