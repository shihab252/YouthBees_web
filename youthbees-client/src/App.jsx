import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* --- Core Pages --- */
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Career from "./pages/Career";
import Affiliate from "./pages/Affiliate";
import PartnerPrograms from "./pages/PartnerPrograms";
import TrainingPrograms from "./pages/TrainingPrograms";
import Team from "./pages/Team";

/* --- Auth --- */
import Login from "./pages/Login";
import Register from "./pages/Register";

/* --- Services (Inside pages/services/) --- */
import CVWriting from "./pages/services/CVWriting";
import LinkedIn from "./pages/services/LinkedIn";
import Portfolio from "./pages/services/Portfolio";
import Counselling from "./pages/services/Counselling";
import ScholarlySuccess from "./pages/services/AcademicSupport"; // Tuition, Assignments, Research
import InterviewMastery from "./pages/services/InterviewMastery"; // Mock Interview
import StudyAbroad from "./pages/services/StudyAbroad"; // IELTS & Study Abroad
import CorporateTraining from "./pages/services/CorporateTraining"; // Enterprise
import MarketingSupport from "./pages/services/MarketingSupport"; // Growth Marketing
import InternshipPathway from "./pages/services/InternshipPathway"; // Launchpad Program

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FFF9F5]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/career" element={<Career />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/partner-programs" element={<PartnerPrograms />} />
          <Route path="/team" element={<Team />} />

          {/* Service Routes mapped to your Navbar */}
          <Route path="/services/cv-writing" element={<CVWriting />} />
          <Route path="/services/linkedin" element={<LinkedIn />} />
          <Route path="/services/portfolio" element={<Portfolio />} />
          <Route path="/services/counselling" element={<Counselling />} />
          
          <Route path="/services/academic-support" element={<ScholarlySuccess />} />
          <Route path="/services/interview-mastery" element={<InterviewMastery />} />
          <Route path="/services/study-abroad" element={<StudyAbroad />} />
          <Route path="/services/corporate-training" element={<CorporateTraining />} />
          <Route path="/services/marketing" element={<MarketingSupport />} />
          <Route path="/services/career-launchpad" element={<InternshipPathway />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}