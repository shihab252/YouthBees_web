import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// Logo
import logoImg from "../assets/logo/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "hover:text-[#FF8C1A] transition font-semibold text-slate-700";

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="YouthBees Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={baseLink}>Home</NavLink>
          <NavLink to="/about" className={baseLink}>About</NavLink>

          {/* SERVICES */}
          <div className="relative group">
            <button className={`${baseLink} flex items-center gap-1`}>
              Services <FaChevronDown className="text-xs" />
            </button>
            <div className="absolute top-10 left-0 w-72 bg-white rounded-2xl shadow-xl border border-orange-100
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <DropdownLink label="CV Writing Services" to="/services/cv-writing" />
              <DropdownLink label="LinkedIn Services" to="/services/linkedin" />
              <DropdownLink label="Website & Portfolio Services" to="/services/portfolio" />
              <DropdownLink label="Counselling" to="/services/counselling" />
            </div>
          </div>

          {/* COURSES */}
          <div className="relative group">
            <button className={`${baseLink} flex items-center gap-1`}>
              Courses <FaChevronDown className="text-xs" />
            </button>
            <div className="absolute top-10 left-0 w-60 bg-white rounded-2xl shadow-xl border border-orange-100
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <DropdownLink label="Training Programs" to="/training-programs" />
              <DropdownLink label="Partner Programs" to="/partner-programs" />
            </div>
          </div>

          <NavLink to="/events" className={baseLink}>Events</NavLink>
          <NavLink to="/career" className={baseLink}>Career</NavLink>
          <NavLink to="/affiliate" className={baseLink}>Affiliate</NavLink>
        </nav>

        {/* AUTH BUTTONS (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="font-bold text-slate-700 hover:text-[#FF8C1A] transition">
            Login
          </Link>
          <Link to="/register" className="px-6 py-3 rounded-2xl bg-[#FF8C1A] text-white font-black hover:bg-[#FF5F1F] transition shadow-lg">
            Register
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
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
          <MobileLink to="/" setOpen={setOpen}>Home</MobileLink>
          <MobileLink to="/about" setOpen={setOpen}>About</MobileLink>
          <MobileLink to="/services" setOpen={setOpen}>Services</MobileLink>
          <MobileLink to="/training-programs" setOpen={setOpen}>Training Programs</MobileLink>
          <MobileLink to="/partner-programs" setOpen={setOpen}>Partner Programs</MobileLink>
          <MobileLink to="/events" setOpen={setOpen}>Events</MobileLink>
          <MobileLink to="/career" setOpen={setOpen}>Career</MobileLink>
          <MobileLink to="/affiliate" setOpen={setOpen}>Affiliate</MobileLink>

          <div className="pt-4 space-y-3">
            <Link 
              to="/login" 
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center border-2 border-[#FF8C1A] text-[#FF8C1A] rounded-xl font-black"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center bg-[#FF8C1A] text-white rounded-xl font-black"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ===== SUB COMPONENTS ===== */

function DropdownLink({ label, to }) {
  return (
    <Link
      to={to}
      className="block px-6 py-3 text-sm hover:bg-[#FFF3E6] hover:text-[#FF8C1A] transition"
    >
      {label}
    </Link>
  );
}

function MobileLink({ to, children, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="block"
    >
      {children}
    </Link>
  );
}