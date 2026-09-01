import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import WritingDNAsection from "./components/home/WritingDNAsection";
import DailyIdeas from "./components/home/DailyIdeas";
import DayReflection from "./components/home/DayReflection";
import HiddenThoughts from "./components/home/HiddenThoughts";

import Footer from "./components/layout/Footer";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Onboarding from "./pages/onboarding/OnBoarding";
import WritingDNA from "./pages/WritingDNA/WritingDNA";

function LandingPage() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <WritingDNAsection />
        <DailyIdeas />
        <DayReflection />
        <HiddenThoughts />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/writing-dna" element={<WritingDNA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
