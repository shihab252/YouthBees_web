import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Events from "./pages/Events";
import Career from "./pages/Career";
import Affiliate from "./pages/Affiliate";

/* Pages */
import Home from "./pages/Home";
import TrainingPrograms from "./pages/TrainingPrograms";
import PartnerPrograms from "./pages/PartnerPrograms";
import ProgramDetails from "./pages/ProgramDetails";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Register from "./pages/Register";


/* Services Pages */
import Services from "./pages/services/Services";
import CVWriting from "./pages/services/CVWriting";
import LinkedInServices from "./pages/services/LinkedIn";
import PortfolioServices from "./pages/services/Portfolio";
import Counselling from "./pages/services/Counselling";

/* Optional Future Pages (safe to add later) */
// import Events from "./pages/Events";
// import Career from "./pages/Career";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";

export default function App() {
  return (
    <>
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 min-h-screen bg-[#FFF9F5]">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/career" element={<Career />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Courses & Training */}
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/partner-programs" element={<PartnerPrograms />} />
          <Route path="/program/:id" element={<ProgramDetails />} />


          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/cv-writing" element={<CVWriting />} />
          <Route path="/services/linkedin" element={<LinkedInServices />} />
          <Route path="/services/portfolio" element={<PortfolioServices />} />
          <Route path="/services/counselling" element={<Counselling />} />

          {/* Future (keep commented until ready) */}
          {/*
          <Route path="/events" element={<Events />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          */}
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
