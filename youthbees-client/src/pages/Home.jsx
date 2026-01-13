import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight, FaUsers, FaBriefcase, FaGraduationCap, FaCalendarAlt,
  FaFileAlt, FaLinkedin, FaGlobe, FaStar, FaFire, FaQuoteLeft, FaCheckCircle,
  FaAward, FaLaptopCode, FaBullhorn, FaPaintBrush, FaHandshake, FaBullseye,
  FaLightbulb, FaUserTie, FaUserGraduate, FaRocket, FaTerminal, FaExternalLinkAlt,
  FaMapMarkerAlt, FaCircle, FaUserCircle, FaWhatsapp, FaRobot, FaNewspaper,
  FaHeart, FaPlay, FaCalendarCheck
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ ASSET IMPORTS
import teamImg from "../assets/about/team.jpg";
import eventImg from "../assets/about/event.jpg";
import founderImg from "../assets/about/founder.jpg";
import workshopImg from "../assets/about/workshop.jpg";
import pythonImg from "../assets/programs/python-fundamentals.jpg"; 
import cvMasteryImg from "../assets/programs/cv-mastery.jpg";

// ✅ PARTNERS DATA
const partners = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "FiroTech", logo: "https://via.placeholder.com/150x50?text=FiroTech" },
  { name: "E-Paathshala", logo: "https://via.placeholder.com/150x50?text=E-Paathshala" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const textParallax = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const [courseType, setCourseType] = useState("training");

  return (
    <div className="bg-[#FFF9F5] text-slate-900 selection:bg-orange-300 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-screen flex items-center pt-28 pb-16 lg:pt-24 lg:pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-orange-100/50 rounded-full blur-[80px] lg:blur-[120px] -mr-20 -mt-10 lg:-mr-40 lg:-mt-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <motion.div className="lg:col-span-7 text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-6 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest">Innovation Hub Est. 2021</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black leading-[0.9] lg:leading-[0.8] tracking-tighter mb-8 text-slate-900 uppercase">
              EMPOWER <br />
              <span className="text-orange-500 font-outline-2 uppercase italic">Growth.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 max-w-xl border-l-4 border-orange-500 pl-6 lg:pl-8 mb-10 font-medium leading-relaxed italic text-left">
              Bangladesh's leading career ecosystem. Bridging the gap between academic theory and industry reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#video-intro" className="w-full sm:w-auto px-10 lg:px-12 py-5 lg:py-6 bg-slate-900 text-white font-black rounded-2xl shadow-2xl hover:bg-orange-500 transition-all flex items-center justify-center gap-3 uppercase text-xs lg:text-sm tracking-widest">
                Explore Hub <FaArrowRight />
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-5 relative h-[300px] lg:h-[500px] hidden md:block">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute top-0 right-0 w-4/5 h-full rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl z-20 border-4 lg:border-8 border-white">
              <img src={teamImg} alt="Team" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
        <motion.div style={{ y: textParallax }} className="absolute right-0 top-1/2 -translate-y-1/2 text-[15rem] lg:text-[25rem] font-black text-slate-100/50 -z-10 select-none hidden lg:block uppercase">YB</motion.div>
      </section>

      {/* 2. VIDEO & WHY CHOOSE SECTION */}
      <section id="video-intro" className="py-20 lg:py-32 px-6 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center text-left">
          <div className="relative group rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl aspect-video bg-slate-900 border-4 lg:border-8 border-orange-50">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/t1X65MNpD0U?rel=0"
              title="YouthBees Intro"
              loading="lazy"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <span className="text-orange-500 font-black uppercase tracking-widest text-[10px] lg:text-xs mb-4 block">Our DNA</span>
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-8 leading-none text-slate-900">Why <br /><span className="text-orange-500 italic">YouthBees?</span></h2>
            <div className="grid gap-6">
              <WhyFeature icon={<FaCheckCircle />} title="Elite Mentorship" desc="Learn directly from industry founders and CXOs." />
              <WhyFeature icon={<FaRocket />} title="Career Pathways" desc="Structured roadmaps from freshman year to first job." />
              <WhyFeature icon={<FaAward />} title="Global Certification" desc="Verified credentials recognized by top-tier partners." />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PATHWAY PROGRAMS SECTION */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-none">Pathway <span className="text-orange-500">Portals.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            <PathwayCard title="Internship Pathway" desc="Real-world industry exposure with FiroTech & Partners." icon={<FaBriefcase />} link="/internship" />
            <PathwayCard title="Uni Associates" desc="Become the face of innovation in your campus." icon={<FaUserGraduate />} link="/uni-associates" color="bg-orange-500 text-white" />
            <div className="sm:col-span-2 lg:col-span-1 text-left">
              <PathwayCard title="Volunteer Hub" desc="Shape the community while building soft skills." icon={<FaHeart />} link="/volunteer" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES BENTO */}
      <section className="py-20 lg:py-32 px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-8 text-left">
            <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-slate-900">Global <br /> <span className="text-orange-500">Services.</span></h2>
            <p className="text-slate-500 max-w-xs border-l-2 border-orange-100 pl-4 font-medium italic text-sm lg:text-base text-left">Tailored professional solutions designed for the next generation of leaders.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
             <BentoCard icon={FaFileAlt} title="CV Revamp" desc="ATS optimized resumes." color="bg-white text-slate-900" link="/services/cv-writing" />
             <BentoCard icon={FaLinkedin} title="LinkedIn Sync" desc="Building a strong professional presence." color="bg-white text-slate-900" link="/services/linkedin" />
             <BentoCard icon={FaUserGraduate} title="Academic Counselling" desc="1-on-1 mentor sessions." size="lg" color="bg-orange-500 text-white" link="/services/counselling" />
             <BentoCard icon={FaGlobe} title="Web Presence" desc="Modern responsive portfolio websites." size="wide" color="bg-slate-900 text-white" link="/services/portfolio" />
          </div>
        </div>
      </section>

      {/* 5. SWITCHABLE COURSE HUB */}
      <section className="py-24 lg:py-40 bg-slate-900 rounded-[3rem] lg:rounded-[5rem] mx-4 text-white shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-widest text-[10px] lg:text-xs mb-4 block">Educational Hub</span>
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-10 uppercase italic">Featured Training.</h2>
          <div className="bg-white/5 p-1.5 lg:p-2 rounded-2xl border border-white/10 flex flex-wrap justify-center gap-2 w-fit mx-auto mb-16 lg:mb-20">
            <button onClick={() => setCourseType("training")} className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl font-black text-[10px] lg:text-xs uppercase tracking-widest transition-all ${courseType === 'training' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}>Training</button>
            <button onClick={() => setCourseType("partner")} className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl font-black text-[10px] lg:text-xs uppercase tracking-widest transition-all ${courseType === 'partner' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}>Certifications</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              <HomeCourseCard title="Python Fundamentals" tutor="Ishtiaq Hossen" price="৳100" img={pythonImg} icon={FaTerminal} isHot />
              <HomeCourseCard title="CV Writing Mastery" tutor="Sakib & Mahib" price="Workshop" img={cvMasteryImg} icon={FaFileAlt} />
              <PartnerSnapshot title="Google Data Analytics" partner="Google" category="Data Science" img="https://images.unsplash.com/photo-1551288049-bbbda536ad31?auto=format&fit=crop&q=80&w=600" />
          </div>
        </div>
      </section>

      {/* 6. MENTOR VOICES SECTION */}
      <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-left mb-12 lg:mb-20">
          <span className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-2 block">Insight Hub</span>
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-slate-900 text-left">Mentor <br /> <span className="text-orange-500 italic">Visions.</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-left">
            <MentorQuote name="Mahib Sadman" role="Founder" text="Innovation is not a skill, it is a lifestyle. We nurture that mindset here." img={founderImg} />
            <MentorQuote name="Sakib Hasan" role="COO" text="Strategic efficiency is the key to corporate survival." img={teamImg} />
        </div>
      </section>

      {/* 7. AI TOOLS & BLOG SECTION */}
      <section className="py-20 lg:py-32 px-6 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 text-left">
          <div>
            <h3 className="text-3xl lg:text-4xl font-black uppercase mb-8 flex items-center gap-3 text-left"><FaRobot className="text-orange-500"/> AI Tool Box</h3>
            <div className="grid gap-4">
              <ToolCard name="ChatGPT" desc="Content & Strategy" link="https://chat.openai.com" />
              <ToolCard name="Claude AI" desc="Advanced Reasoning" link="https://claude.ai" />
              <ToolCard name="Gamma.app" desc="Presentation & Web" link="https://gamma.app" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-black uppercase mb-8 flex items-center gap-3 text-left"><FaNewspaper className="text-orange-500"/> Latest Articles</h3>
            <div className="space-y-4 lg:space-y-6">
              <BlogRow title="The Future of Remote Work in BD" date="Jan 12, 2026" />
              <BlogRow title="Top 10 Resume Mistakes to Avoid" date="Jan 08, 2026" />
              <BlogRow title="Why Every Student Needs LinkedIn" date="Jan 05, 2026" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHATSAPP COMMUNITY CTA */}
      <section className="py-16 lg:py-20 px-4 lg:px-6">
        <div className="max-w-5xl mx-auto bg-green-600 rounded-[2.5rem] lg:rounded-[3rem] p-10 lg:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl text-left">
          <div className="text-left">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.9] lg:leading-none mb-4 text-white text-left">The Hive <br /> Community.</h2>
            <p className="font-bold opacity-80 uppercase text-[10px] lg:text-xs tracking-widest text-white text-left">Join 1k+ students on WhatsApp for daily updates.</p>
          </div>
          <a href="https://chat.whatsapp.com/GucCTrjGlgkESb5UlpaKE9" className="w-full md:w-auto px-10 lg:px-12 py-5 lg:py-6 bg-white text-green-600 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-900 hover:text-white transition-all shadow-xl text-xs lg:text-sm tracking-widest uppercase">
            Join WhatsApp <FaWhatsapp size={24} />
          </a>
        </div>
      </section>

      {/* 9. REALISTIC ANIMATED STATS SECTION */}
      <section className="py-24 lg:py-40 bg-white border-y border-orange-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] lg:text-[15rem] font-black text-slate-50/50 -z-10 select-none hidden lg:block uppercase tracking-tighter">
          Metrics
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            <StatBox value={10} suffix="k+" label="Global Community" subLabel="Active Members" icon={<FaUsers />} />
            <StatBox value={40} suffix="+" label="Elite Events" subLabel="Completed Sessions" icon={<FaCalendarCheck />} />
            <StatBox value={15} suffix="+" label="Global Partners" subLabel="Industry Leaders" icon={<FaHandshake />} />
            <StatBox value={1000} suffix="+" label="Successful Talent" subLabel="Job-Ready Graduates" icon={<FaUserGraduate />} />
          </div>
        </div>
      </section>

      {/* 10. OUR PARTNERS SECTION (NEW) */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center lg:text-left">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Strategic Alliances</span>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase text-left">
            Our <span className="text-orange-500 italic">Partners.</span>
          </h2>
        </div>

        <div className="relative flex overflow-hidden py-12 bg-slate-50/50 border-y border-orange-100/50">
          <motion.div 
            className="flex gap-12 lg:gap-24 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex flex-col items-center group shrink-0">
                <div className="h-16 lg:h-24 w-32 lg:w-48 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-orange-100 group-hover:border-orange-500 transition-all duration-500 grayscale group-hover:grayscale-0">
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="mt-4 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-orange-500 transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}

/* ================= COMPONENT MODULES ================= */

function Counter({ value, suffix = "" }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref}>
      <h5 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-1 lg:mb-2 leading-none uppercase text-center">
        {displayValue}{suffix}
      </h5>
    </div>
  );
}

function StatBox({ value, suffix, label, subLabel, icon }) {
  return (
    <div className="group p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] bg-orange-50/20 border border-transparent hover:border-orange-200 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500 mb-4 lg:mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div className="flex flex-col items-center">
        <Counter value={value} suffix={suffix} />
        <p className="text-slate-900 font-black uppercase text-[9px] lg:text-[11px] tracking-widest mb-1">{label}</p>
        <p className="text-slate-400 font-bold uppercase text-[7px] lg:text-[8px] tracking-[0.2em]">{subLabel}</p>
      </div>
    </div>
  );
}

function WhyFeature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 text-left group">
      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">{icon}</div>
      <div>
        <h4 className="font-black text-slate-900 uppercase tracking-tight leading-none mb-1 text-sm lg:text-base text-left">{title}</h4>
        <p className="text-xs lg:text-sm text-slate-500 font-medium leading-relaxed text-left">{desc}</p>
      </div>
    </div>
  );
}

function PathwayCard({ title, desc, icon, link, color = "bg-white text-slate-900" }) {
  return (
    <Link to={link} className={`${color} p-8 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-orange-50 group hover:-translate-y-2 transition-all flex flex-col min-h-[300px] lg:min-h-[350px] text-left`}>
       <div className="text-4xl lg:text-5xl mb-6 text-orange-500 group-hover:scale-110 transition-transform">{icon}</div>
       <div className="mt-auto">
          <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none mb-4 text-left">{title}</h4>
          <p className="text-xs lg:text-sm font-bold opacity-70 mb-8 text-left">{desc}</p>
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors"><FaArrowRight /></div>
       </div>
    </Link>
  );
}

function BentoCard({ icon: Icon, title, desc, size, color, link }) {
  const span = size === 'lg' ? 'md:col-span-2 md:row-span-2' : size === 'wide' ? 'md:col-span-2' : '';
  return (
    <Link to={link} className={`${span}`}>
      <motion.div whileHover={{ y: -5 }} className={`${color} p-8 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-xl flex flex-col justify-between h-full min-h-[250px] group transition-all border border-orange-50/50 text-left`}>
        <Icon className="text-4xl lg:text-5xl opacity-80 group-hover:scale-110 transition-transform" />
        <div>
          <h4 className="text-xl lg:text-2xl font-black mb-2 tracking-tight leading-none uppercase text-left">{title}</h4>
          <p className="text-xs lg:text-sm opacity-70 font-bold leading-relaxed text-left">{desc}</p>
        </div>
      </motion.div>
    </Link>
  );
}

function HomeCourseCard({ title, tutor, price, img, icon: Icon, isHot }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] lg:rounded-[3.5rem] group hover:bg-white/10 transition-all relative flex flex-col h-full min-h-[400px] lg:min-h-[450px] overflow-hidden text-left">
      <div className="h-48 lg:h-52 overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
        {isHot && <div className="absolute top-4 lg:top-6 right-4 lg:right-6 text-orange-500 bg-white/10 p-2 lg:p-3 rounded-xl lg:rounded-2xl backdrop-blur-md border border-white/10"><FaFire size={24} /></div>}
        <div className="absolute bottom-4 left-6 bg-orange-500 text-white p-2 lg:p-3 rounded-lg lg:rounded-xl shadow-lg border border-white/10"><Icon size={20}/></div>
      </div>
      <div className="p-8 lg:p-10 flex flex-col flex-grow text-white">
        <h4 className="text-xl lg:text-2xl font-black mb-1 leading-tight group-hover:text-orange-500 transition-colors uppercase tracking-tighter italic text-left">{title}</h4>
        <p className="text-[9px] lg:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-8 lg:mb-10 text-left">Mentor: {tutor}</p>
        <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-6 lg:pt-8 text-left">
          <span className="text-2xl lg:text-3xl font-black text-orange-500">{price}</span>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all shadow-lg"><FaArrowRight /></div>
        </div>
      </div>
    </div>
  );
}

function PartnerSnapshot({ title, partner, category, img }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden group hover:bg-white/10 transition-all flex flex-col h-full min-h-[400px] lg:min-h-[450px] text-left">
            <div className="h-48 lg:h-52 overflow-hidden relative">
                <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-4 lg:top-6 left-4 lg:left-6 px-3 lg:px-4 py-1 lg:py-1.5 bg-white/10 backdrop-blur-md text-white font-black text-[8px] lg:text-[9px] uppercase tracking-widest rounded-lg lg:rounded-xl border border-white/10">{category}</div>
                <div className="absolute bottom-4 left-6 bg-slate-900 text-orange-500 p-2 lg:p-3 rounded-lg lg:rounded-xl shadow-lg border border-white/10"><FaHandshake size={20}/></div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col flex-grow text-white">
                <h4 className="text-xl lg:text-2xl font-black mb-1 leading-tight group-hover:text-orange-500 transition-colors uppercase tracking-tighter italic text-left">{title}</h4>
                <p className="text-[9px] lg:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-8 lg:mb-10 text-left">Partner: {partner}</p>
                <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-6 lg:pt-8">
                    <span className="text-[9px] lg:text-[10px] font-black uppercase text-orange-500 tracking-widest">Global Cert.</span>
                    <Link to="/partner-programs" className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-all shadow-lg"><FaExternalLinkAlt size={16} /></Link>
                </div>
            </div>
        </div>
    );
}

function MentorQuote({ name, role, text, img }) {
  return (
    <div className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[3.5rem] shadow-2xl border border-orange-50 flex flex-col md:flex-row gap-6 lg:gap-8 items-center text-left">
      <img src={img} className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl lg:rounded-3xl object-cover grayscale" />
      <div className="text-left">
        <FaQuoteLeft className="text-orange-500 text-xl lg:text-2xl mb-4" />
        <p className="text-base lg:text-lg font-bold italic text-slate-700 leading-relaxed mb-4 lg:mb-6 text-left">"{text}"</p>
        <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-900 text-left">{name} — <span className="text-orange-50">{role}</span></p>
      </div>
    </div>
  );
}

function ToolCard({ name, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center p-5 lg:p-6 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl hover:border-orange-500 transition-all group text-left">
      <div className="text-left">
        <h5 className="font-black text-slate-900 uppercase leading-none mb-1 group-hover:text-orange-600 transition-colors text-sm lg:text-base text-left">{name}</h5>
        <p className="text-[9px] lg:text-[10px] text-slate-400 font-black uppercase tracking-widest text-left">{desc}</p>
      </div>
      <FaExternalLinkAlt className="text-slate-300 group-hover:text-orange-500 transition-colors text-sm lg:text-base" />
    </a>
  );
}

function BlogRow({ title, date }) {
  return (
    <div className="flex justify-between items-center border-b border-orange-50 py-3 lg:py-4 group cursor-pointer hover:border-orange-500 transition-colors text-left">
      <div className="text-left">
        <h5 className="font-bold text-slate-800 group-hover:text-orange-500 transition-colors text-sm lg:text-base text-left">{title}</h5>
        <span className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">{date}</span>
      </div>
      <FaArrowRight className="text-slate-200 group-hover:text-orange-500 transition-colors text-sm lg:text-base" />
    </div>
  );
}