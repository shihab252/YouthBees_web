import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// ✅ Import the logo image from your folder structure
import logoImg from "../assets/logo/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ✅ LOGO IMAGE (Increased size) */}
        <a href="/" className="flex items-center">
          <img 
            src={logoImg} 
            alt="YouthBees Logo" 
            className="h-16 w-auto object-contain" // Changed from h-12 to h-16
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700">

          <a href="/" className="hover:text-[#FF8C1A] transition">Home</a>

          {/* ABOUT */}
          <a href="/about" className="hover:text-[#FF8C1A] transition">
            About
          </a>

          {/* SERVICES */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#FF8C1A] transition">
              Services <FaChevronDown className="text-xs" />
            </button>

            <div className="absolute top-10 left-0 w-72 bg-white rounded-2xl shadow-xl border border-orange-100
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <DropdownLink label="CV Writing Services" link="/services/cv-writing" />
              <DropdownLink label="LinkedIn Services" link="/services/linkedin" />
              <DropdownLink label="Website & Portfolio Services" link="/services/portfolio" />
              <DropdownLink label="Counselling" link="/services/counselling" />
            </div>
          </div>

          {/* COURSES */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#FF8C1A] transition">
              Courses <FaChevronDown className="text-xs" />
            </button>

            <div className="absolute top-10 left-0 w-60 bg-white rounded-2xl shadow-xl border border-orange-100
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <DropdownLink label="Training Programs" link="/training-programs" />
              <DropdownLink label="Partner Programs" link="/partner-programs" />
            </div>
          </div>

          {/* EVENTS */}
          <a href="/events" className="hover:text-[#FF8C1A] transition">Events</a>

          {/* CAREER */}
          <a href="/career" className="hover:text-[#FF8C1A] transition">Career</a>

          {/* AFFILIATE */}
          <a href="/affiliate" className="hover:text-[#FF8C1A] transition">Affiliate</a>
        </nav>

        {/* AUTH BUTTON */}
        <button className="hidden md:block px-6 py-3 rounded-2xl bg-[#FF8C1A] text-white font-black hover:bg-[#FF5F1F] transition shadow-lg">
          Login / Register
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-slate-700"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-100 px-6 py-6 space-y-4 font-semibold text-slate-700">
          <a href="/" className="block">Home</a>
          <a href="/about" className="block">About</a>
          <a href="/services" className="block">Services</a>
          <a href="/training-programs" className="block">Training Programs</a>
          <a href="/partner-programs" className="block">Partner Programs</a>
          <a href="/events" className="block">Events</a>
          <a href="/career" className="block">Career</a>

          <button className="w-full py-3 bg-[#FF8C1A] text-white rounded-xl font-black">
            Login / Register
          </button>
        </div>
      )}
    </header>
  );
}

function DropdownLink({ label, link }) {
  return (
    <a
      href={link}
      className="block px-6 py-3 text-sm hover:bg-[#FFF3E6] hover:text-[#FF8C1A] transition"
    >
      {label}
    </a>
  );
}