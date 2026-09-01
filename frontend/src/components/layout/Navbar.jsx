import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        UnPosted<span>.</span>
      </a>

      <div className="navbar-links">
        <a href="#how-it-works">How it works</a>
        <a href="#about">Why UnPosted</a>
        <a href="/login">Sign in</a>

        <a href="/signup" className="navbar-cta">
          Start Writing
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;