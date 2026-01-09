import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// ✅ Import the logo image from your folder structure
import logoImg from "../assets/logo/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-5">

        {/* 1. BRAND COLUMN */}
        <div>
          {/* ✅ LOGO IMAGE (Replacing text-based header) */}
          <div className="mb-6">
            <img 
              src={logoImg} 
              alt="YouthBees Logo" 
              className="h-14 w-auto object-contain" 
            />
          </div>
          
          <p className="text-xs leading-relaxed text-slate-400">
            YouthBees is a career-focused learning ecosystem connecting students 
            to real-world skills and opportunities.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3 mt-6">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaYoutube />} />
          </div>
        </div>

        {/* 2. COURSES COLUMN */}
        <FooterColumn title="Courses">
          <FooterLink label="Training Programs" link="/training-programs" />
          <FooterLink label="Partner Programs" link="/partner-programs" />
        </FooterColumn>

        {/* 3. SERVICES COLUMN */}
        <FooterColumn title="Services">
          <FooterLink label="CV Writing" link="/services/cv-writing" />
          <FooterLink label="LinkedIn Master" link="/services/linkedin" />
          <FooterLink label="Portfolio Hub" link="/services/portfolio" />
          <FooterLink label="Counselling" link="/services/counselling" />
        </FooterColumn>

        {/* 4. COMMUNITY COLUMN */}
        <FooterColumn title="Community">
          <FooterLink label="Events" link="/events" />
          <FooterLink label="Career" link="/career" />
          <FooterLink label="Affiliate" link="/affiliate" />
          <FooterLink label="Become a Mentor" link="/mentor/apply" />
        </FooterColumn>

        {/* 5. SUPPORT HUB COLUMN */}
        <div>
          <h4 className="text-sm font-bold tracking-wider text-white mb-5 uppercase">
            Support Hub
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#FF8C1A] transition-colors shrink-0">
                <FaPhoneAlt className="text-[#FF8C1A] group-hover:text-white text-[10px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Hotline</span>
                <a href="tel:+8801XXXXXXXXX" className="text-xs font-bold text-slate-300 hover:text-[#FF8C1A] transition-colors">
                  +880 1XXX-XXXXXX
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#FF8C1A] transition-colors shrink-0">
                <FaEnvelope className="text-[#FF8C1A] group-hover:text-white text-[10px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Email</span>
                <a href="mailto:support@youthbees.com" className="text-xs font-bold text-slate-300 hover:text-[#FF8C1A] transition-colors break-all">
                  support@youthbees.com
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

/* ---------- Helpers ---------- */

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

function FooterLink({ label, link }) {
  return (
    <li>
      <a href={link} className="hover:text-[#FF8C1A] transition-colors font-medium">
        {label}
      </a>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-slate-800 text-slate-300 hover:bg-[#FF8C1A]
                 hover:text-white transition shadow-lg"
    >
      {icon}
    </a>
  );
}