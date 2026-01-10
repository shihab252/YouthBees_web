import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt // Added for the location link
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Logo
import logoImg from "../assets/logo/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-5">

        {/* 1. BRAND COLUMN */}
        <div>
          <div className="mb-6">
            <Link to="/">
              <img
                src={logoImg}
                alt="YouthBees Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          <p className="text-xs leading-relaxed text-slate-400">
            YouthBees is a career-focused learning ecosystem connecting students
            to real-world skills and opportunities.
          </p>

          {/* SOCIALS - UPDATED WITH VERIFIED LINKS */}
          <div className="flex gap-3 mt-6">
            <SocialIcon href="https://www.facebook.com/YouthBees" icon={<FaFacebookF />} />
            <SocialIcon href="https://www.linkedin.com/company/youthbees/" icon={<FaLinkedinIn />} />
            <SocialIcon href="https://www.instagram.com/youthbeesofficial?igsh=bWd3c3g3bjRmcjA4" icon={<FaInstagram />} />
            <SocialIcon href="https://youtube.com" icon={<FaYoutube />} />
          </div>
        </div>

        {/* 2. COURSES */}
        <FooterColumn title="Courses">
          <FooterLink label="Training Programs" to="/training-programs" />
          <FooterLink label="Partner Programs" to="/partner-programs" />
        </FooterColumn>

        {/* 3. SERVICES */}
        <FooterColumn title="Services">
          <FooterLink label="CV Writing" to="/services/cv-writing" />
          <FooterLink label="LinkedIn Master" to="/services/linkedin" />
          <FooterLink label="Portfolio Hub" to="/services/portfolio" />
          <FooterLink label="Counselling" to="/services/counselling" />
        </FooterColumn>

        {/* 4. COMMUNITY */}
        <FooterColumn title="Community">
          <FooterLink label="Events" to="/events" />
          <FooterLink label="Career" to="/career" />
          <FooterLink label="Affiliate" to="/affiliate" />
          <FooterLink label="Become a Mentor" to="/mentor/apply" />
        </FooterColumn>

        {/* 5. SUPPORT HUB - UPDATED WITH VERIFIED CONTACTS */}
        <div>
          <h4 className="text-sm font-bold tracking-wider text-white mb-5 uppercase">
            Support Hub
          </h4>

          <div className="space-y-4">

            {/* PHONE - UPDATED */}
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#FF8C1A] transition-colors">
                <FaPhoneAlt className="text-[#FF8C1A] group-hover:text-white text-[10px]" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">
                  Hotline
                </span>
                <a
                  href="tel:+8801797765669"
                  className="block text-[11px] font-bold hover:text-[#FF8C1A] transition-colors"
                >
                  +880 1797-765669
                </a>
                <a
                  href="tel:+8801614821598"
                  className="block text-[11px] font-bold hover:text-[#FF8C1A] transition-colors"
                >
                  +880 1614-821598
                </a>
              </div>
            </div>

            {/* EMAIL - UPDATED */}
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#FF8C1A] transition-colors">
                <FaEnvelope className="text-[#FF8C1A] group-hover:text-white text-[10px]" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">
                  Email
                </span>
                <a
                  href="mailto:youthbees.bd@gmail.com"
                  className="block text-[11px] font-bold break-all hover:text-[#FF8C1A] transition-colors"
                >
                  youthbees.bd@gmail.com
                </a>
              </div>
            </div>

            {/* LOCATION - NEW */}
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#FF8C1A] transition-colors">
                <FaMapMarkerAlt className="text-[#FF8C1A] group-hover:text-white text-[10px]" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">
                  Location
                </span>
                <a
                  href="https://share.google/9UkVJkKSrXOct2P9B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[11px] font-bold hover:text-[#FF8C1A] transition-colors"
                >
                  Find us on Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} YouthBees. All rights reserved.</p>
          <div className="flex gap-6 font-bold uppercase tracking-widest text-[9px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HELPERS ---------- */

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-sm font-bold tracking-wider text-white mb-5 uppercase">
        {title}
      </h4>
      <ul className="space-y-3 text-xs">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-[#FF8C1A] transition-colors font-medium"
      >
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-slate-800 text-slate-300 hover:bg-[#FF8C1A]
                 hover:text-white transition shadow-lg"
    >
      {icon}
    </a>
  );
}