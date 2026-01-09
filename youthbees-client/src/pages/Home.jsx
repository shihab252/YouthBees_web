import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight, FaUsers, FaBriefcase, FaGraduationCap, FaCalendarAlt,
  FaFileAlt, FaLinkedin, FaGlobe, FaStar, FaFire, FaQuoteLeft, FaCheckCircle,
  FaAward, FaLaptopCode, FaBullhorn, FaPaintBrush, FaHandshake, FaBullseye,
  FaLightbulb, FaUserTie, FaUserGraduate, FaRocket, FaTerminal, FaExternalLinkAlt,
  FaMapMarkerAlt, FaCircle, FaUserCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ ASSET IMPORTS
import teamImg from "../assets/about/team.jpg";
import eventImg from "../assets/about/event.jpg";
import founderImg from "../assets/about/founder.jpg";
import workshopImg from "../assets/about/workshop.jpg";
import epaathImg from "../assets/about/collaboration-epaathshala.jpg";
import firotechImg from "../assets/about/collaboration-firotech.jpg";
import pythonImg from "../assets/programs/python-fundamentals.jpg"; 
import cvMasteryImg from "../assets/programs/cv-mastery.jpg";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const textParallax = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const [courseType, setCourseType] = useState("training");

  // Highlighted Events Data
  const featuredEvents = [
    { title: "National Youth Summit 2026", status: "ongoing", location: "Dhaka", date: "Jan 07 - Jan 10" },
    { title: "Career Mentorship Bootcamp", status: "upcoming", location: "Virtual", date: "March 2026" }
  ];

  // Extended Feedback Data for Scrolling
  const feedbacks = [
    { name: "Rafid Ahmed", role: "Student, DU", text: "The CV Revamp service literally changed my career trajectory. Got 3 interview calls in a week!", rating: 5 },
    { name: "Taskin Nisha", role: "Software Intern", text: "YouthBees is more than just a platform; it's a community that genuinely cares about our growth.", rating: 5 },
    { name: "Arif Islam", role: "Job Seeker", text: "The Academic Counselling sessions gave me the roadmap I never knew I needed. Highly recommended!", rating: 4 },
    { name: "Sajid Hasan", role: "UI Designer", text: "Incredible attention to detail in their web portfolio services. My site looks professional and fast.", rating: 5 },
    { name: "Maliha Chowdhury", role: "Grad Student", text: "The Python fundamentals course was so easy to follow even for a non-tech background like mine.", rating: 5 }
  ];

  return (
    <div className="bg-[#FFF9F5] text-slate-900 selection:bg-orange-300 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-6 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest">Innovation Hub Est. 2021</span>
            </div>
            <h1 className="text-8xl md:text-[11rem] font-black leading-[0.8] tracking-tighter mb-8 text-slate-900 uppercase">
              EMPOWER <br />
              <span className="text-orange-500 font-outline-2 uppercase italic">Growth.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl border-l-4 border-orange-500 pl-8 mb-10 font-medium leading-relaxed italic">
              Bangladesh's leading career ecosystem. Bridging the gap between academic theory and industry reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="px-12 py-6 bg-slate-900 text-white font-black rounded-2xl shadow-2xl hover:bg-orange-500 transition-all flex items-center gap-3 uppercase text-sm tracking-widest">
                Get Started <FaArrowRight />
              </Link>
            </div>
          </motion.div>
          <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 2 }} className="absolute top-0 right-0 w-4/5 h-[380px] rounded-[4rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img src={teamImg} alt="Team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50, y: 50 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.3 }} className="absolute bottom-0 left-0 w-3/5 h-[240px] rounded-[3rem] overflow-hidden shadow-2xl z-30 border-8 border-white -rotate-6">
              <img src={workshopImg} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
        <motion.div style={{ y: textParallax }} className="absolute right-0 top-1/2 -translate-y-1/2 text-[25rem] font-black text-slate-100/50 -z-10 select-none hidden lg:block uppercase">YB</motion.div>
      </section>

      {/* 2. SERVICES BENTO */}
      <section className="py-32 px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-slate-900">Global <br /> <span className="text-orange-500">Services.</span></h2>
            <p className="text-slate-500 max-w-sm pb-2 italic border-l-2 border-orange-100 pl-6 font-medium">Tailored professional solutions designed for the next generation of leaders.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
             <BentoCard icon={FaFileAlt} title="CV Revamp" desc="ATS optimized resumes." color="bg-white text-slate-900" link="/services/cv-writing" />
             <BentoCard icon={FaLinkedin} title="LinkedIn Sync" desc="Building a strong professional presence." color="bg-white text-slate-900" link="/services/linkedin" />
             <BentoCard icon={FaUserGraduate} title="Academic Counselling" desc="1-on-1 mentor sessions." size="lg" color="bg-orange-500 text-white" link="/services/counselling" />
             <BentoCard icon={FaGlobe} title="Web Presence" desc="Modern responsive portfolio websites." size="wide" color="bg-slate-900 text-white" link="/services/portfolio" />
          </div>
        </div>
      </section>

      {/* 3. SWITCHABLE COURSE HUB */}
      <section className="py-40 bg-slate-900 rounded-[5rem] mx-4 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-black uppercase tracking-widest text-xs mb-4">Educational Hub</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase italic">Master Skills.</h2>
          <div className="bg-white/5 p-2 rounded-2xl border border-white/10 flex gap-2 w-fit mx-auto mb-20">
            <button onClick={() => setCourseType("training")} className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${courseType === 'training' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Training Programs</button>
            <button onClick={() => setCourseType("partner")} className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${courseType === 'partner' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>Partner Programs</button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={courseType} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-3 gap-10 text-left">
              {courseType === "training" ? (
                <>
                  <HomeCourseCard title="Python Fundamentals" tutor="Ishtiaq Hossen" price="৳100" img={pythonImg} icon={FaTerminal} isHot />
                  <HomeCourseCard title="CV Writing Mastery" tutor="Sakib & Mahib" price="Workshop" img={cvMasteryImg} icon={FaFileAlt} />
                  <div className="bg-orange-500 rounded-[3.5rem] p-12 flex flex-col justify-center items-center text-center group cursor-pointer shadow-2xl min-h-[450px]">
                      <FaGraduationCap className="text-6xl mb-6 text-white" />
                      <h4 className="text-3xl font-black mb-6 leading-tight uppercase tracking-tighter italic text-white text-center text-left">Explore All <br /> 25+ Programs</h4>
                      <Link to="/training-programs" className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform"><FaArrowRight size={24} /></Link>
                  </div>
                </>
              ) : (
                <>
                  <PartnerSnapshot title="Google Data Analytics" partner="Google" category="Data Science" img="https://images.unsplash.com/photo-1551288049-bbbda536ad31?auto=format&fit=crop&q=80&w=600" />
                  <PartnerSnapshot title="Meta Digital Marketing" partner="Meta" category="Marketing" img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" />
                  <div className="bg-white rounded-[3.5rem] p-12 flex flex-col justify-center items-center text-center group cursor-pointer shadow-2xl min-h-[450px] border-4 border-orange-500">
                      <FaHandshake className="text-6xl mb-6 text-orange-500" />
                      <h4 className="text-3xl font-black mb-6 leading-tight uppercase tracking-tighter italic text-slate-900 text-center">Explore All <br /> Global Partners</h4>
                      <Link to="/partner-programs" className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/40"><FaArrowRight size={24} /></Link>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. HIGHLIGHTED EVENTS SECTION */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-4 block text-left">Community & Events</span>
            <h2 className="text-7xl font-black tracking-tighter mb-10 text-slate-900 leading-[0.85] uppercase text-left">Live <br /><span className="text-orange-500 italic">Initiatives.</span></h2>
            <div className="space-y-6 mb-12">
              {featuredEvents.map((event, idx) => (
                <Link to="/events" key={idx} className="flex justify-between items-center p-8 bg-white border border-orange-50 rounded-[2.5rem] hover:border-orange-500 transition-all group shadow-sm">
                   <div className="text-left">
                      <div className="flex items-center gap-2 mb-2">
                        {event.status === "ongoing" && <span className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase animate-pulse"><FaCircle size={4}/> Live</span>}
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.date}</span>
                      </div>
                      <h5 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight leading-none text-left">{event.title}</h5>
                      <p className="flex items-center gap-2 text-[10px] text-slate-400 font-black uppercase mt-2 text-left"><FaMapMarkerAlt className="text-orange-500"/> {event.location}</p>
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all"><FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform"/></div>
                </Link>
              ))}
            </div>
            <Link to="/events" className="inline-flex items-center gap-4 px-12 py-5 border-2 border-slate-900 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs text-slate-900">View All Events</Link>
          </div>
          <div className="lg:col-span-5 relative group overflow-hidden rounded-[4rem] shadow-2xl h-[600px]">
             <img src={eventImg} alt="Events" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60" />
             <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-transparent text-left">
                <p className="text-white text-lg font-medium leading-relaxed italic opacity-80 mb-6 text-left">"Join our community of over 1000+ members."</p>
                <Link to="/events" className="w-fit px-8 py-4 bg-orange-500 text-white rounded-2xl font-black text-xs hover:bg-white transition-all uppercase tracking-widest shadow-xl">Join the Summit</Link>
             </div>
          </div>
        </div>
      </section>

      

      {/* 5. FOUNDER SPOTLIGHT */}
      <section className="py-32 px-6 bg-white border-y border-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
             <img src={founderImg} className="rounded-[4rem] h-[650px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Founder" />
             <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-[280px] hidden md:block border border-orange-100 text-slate-900 text-left">
              <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
              <p className="text-slate-700 italic font-bold leading-relaxed text-left">"We nurture the mindset of excellence."</p>
            </div>
          </div>
          <div className="lg:col-span-7 text-slate-900 text-left">
            <span className="text-orange-500 font-black uppercase text-xs tracking-widest">Our Legacy</span>
            <h2 className="text-6xl font-black mt-4 mb-8 tracking-tight leading-none uppercase">Mahib <span className="text-orange-500 italic text-slate-900">Sadman.</span></h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">YouthBees was founded on April 21, 2021.</p>
            <div className="grid grid-cols-2 gap-4 mb-10 text-slate-400 font-black uppercase text-[10px] text-left">
                <IconTag icon={FaBullseye} text="Innovation" />
                <IconTag icon={FaUsers} text="Mentorship" />
                <IconTag icon={FaAward} text="Leadership" />
                <IconTag icon={FaBriefcase} text="Career" />
            </div>
            <Link to="/about" className="px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-orange-500 transition-all flex items-center gap-3 w-fit uppercase text-xs tracking-widest shadow-xl">Read Our Story <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* 6. CAREER HUB */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-slate-900 text-left">Career <br /><span className="text-orange-500 italic">Board.</span></h2>
            <Link to="/career" className="inline-flex items-center gap-4 px-12 py-5 border-2 border-slate-900 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs text-slate-900 shadow-sm">Browse Jobs</Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
            <JobBar title="Senior Frontend Engineer" company="FiroTech" salary="৳60k+" />
            <JobBar title="UI/UX Visual Lead" company="Creative Pulse" salary="৳50k+" />
        </div>
      </section>

      {/* 7. USER FEEDBACK SECTION (WITH MOVING ANIMATION) */}
      <section className="py-32 bg-white border-y border-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center md:text-left">
            <span className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-4 block">Social Proof</span>
            <h2 className="text-6xl font-black tracking-tighter uppercase text-slate-900">Voices of <span className="text-orange-500 italic">Impact.</span></h2>
          </div>
        </div>
        
        {/* Infinite Horizontal Scroller */}
        <div className="relative flex overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Double the array for seamless loop */}
            {[...feedbacks, ...feedbacks].map((f, i) => (
              <div key={i} className="inline-block w-[350px] p-10 rounded-[3rem] bg-orange-50/30 border border-orange-100 relative group transition-all hover:bg-white hover:shadow-2xl whitespace-normal">
                 <FaQuoteLeft className="text-orange-500/20 text-5xl absolute top-8 left-8" />
                 <p className="text-slate-600 font-medium italic leading-relaxed mb-10 relative z-10 text-left">"{f.text}"</p>
                 <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl shadow-lg"><FaUserCircle /></div>
                    <div className="text-left">
                       <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1 text-left">{f.name}</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">{f.role}</p>
                    </div>
                 </div>
                 <div className="absolute bottom-10 right-10 flex gap-1">
                    {[...Array(f.rating)].map((_, i) => <FaStar key={i} className="text-orange-500 text-[10px]" />)}
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* 8. RESTORED AFFILIATE CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto bg-orange-500 rounded-[4rem] p-16 md:p-32 text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-8 leading-none italic uppercase">Share & <br /> <span className="text-slate-900">Earn.</span></h2>
          <p className="text-orange-100 text-xl max-w-xl mx-auto mb-12 font-medium italic">Join our affiliate network and earn up to 20% on every referral.</p>
          <Link to="/affiliate" className="inline-flex items-center gap-4 px-16 py-6 bg-slate-900 text-white font-black text-xl rounded-2xl hover:bg-white hover:text-orange-600 transition-all uppercase tracking-widest shadow-2xl">Become an Affiliate <FaArrowRight /></Link>
        </div>
      </section>

      {/* 9. STATS & FOOTER */}
      <section className="py-24 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-slate-900">
           <HomeStat value="1k+" label="Community" />
           <HomeStat value="09" label="Internal Depts" />
           <HomeStat value="10+" label="Global Partners" />
           <HomeStat value="100%" label="Job Ready" />
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">© 2021-2026 YouthBees Ltd. Bangladesh</p>
      </footer>
    </div>
  );
}

/* ================= COMPONENT MODULES ================= */

function BentoCard({ icon: Icon, title, desc, size, color, link }) {
  const span = size === 'lg' ? 'lg:col-span-2 lg:row-span-2' : size === 'wide' ? 'lg:col-span-2' : '';
  return (
    <Link to={link}>
      <motion.div whileHover={{ y: -5 }} className={`${span} ${color} p-10 rounded-[3rem] shadow-xl flex flex-col justify-between min-h-[300px] group transition-all border border-orange-50/50`}>
        <Icon className="text-5xl opacity-80 group-hover:scale-110 transition-transform" />
        <div className="text-left">
          <h4 className="text-2xl font-black mb-2 tracking-tight leading-none uppercase">{title}</h4>
          <p className="text-sm opacity-70 font-bold leading-relaxed text-left">{desc}</p>
        </div>
      </motion.div>
    </Link>
  );
}

function HomeCourseCard({ title, tutor, price, img, icon: Icon, isHot }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[3.5rem] group hover:bg-white/10 transition-all relative flex flex-col h-full min-h-[450px] overflow-hidden shadow-lg">
      <div className="h-52 overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
        {isHot && <div className="absolute top-6 right-6 text-orange-500 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10"><FaFire size={24} /></div>}
        <div className="absolute bottom-4 left-6 bg-orange-500 text-white p-3 rounded-xl shadow-lg border border-white/10"><Icon size={20}/></div>
      </div>
      <div className="p-10 flex flex-col flex-grow text-white">
        <h4 className="text-2xl font-black mb-1 leading-tight group-hover:text-orange-500 transition-colors uppercase tracking-tighter italic text-left">{title}</h4>
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-10 italic text-left">Mentor: {tutor}</p>
        <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-8">
          <span className="text-3xl font-black text-orange-500">{price}</span>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all shadow-lg"><FaArrowRight /></div>
        </div>
      </div>
    </div>
  );
}

function PartnerSnapshot({ title, partner, category, img }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-[3.5rem] overflow-hidden group hover:bg-white/10 transition-all flex flex-col h-full shadow-lg">
            <div className="h-52 overflow-hidden relative">
                <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white font-black text-[9px] uppercase tracking-widest rounded-xl border border-white/10">{category}</div>
                <div className="absolute bottom-4 left-6 bg-slate-900 text-orange-500 p-3 rounded-xl shadow-lg border border-white/10"><FaHandshake size={20}/></div>
            </div>
            <div className="p-10 flex flex-col flex-grow text-white">
                <h4 className="text-2xl font-black mb-1 leading-tight group-hover:text-orange-500 transition-colors uppercase tracking-tighter italic text-left">{title}</h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-10 italic text-left">Partner: {partner}</p>
                <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-8">
                    <span className="text-[10px] font-black uppercase text-orange-500 tracking-widest">Global Cert.</span>
                    <Link to="/partner-programs" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-all shadow-lg"><FaExternalLinkAlt size={16} /></Link>
                </div>
            </div>
        </div>
    );
}

function JobBar({ title, company, salary }) {
    return (
        <div className="flex justify-between items-center p-8 bg-white border border-orange-50 rounded-[2.5rem] hover:border-orange-500 transition-all group shadow-sm">
            <div className="text-left">
                <h5 className="text-xl font-black text-slate-900 leading-none mb-1 group-hover:text-orange-600 transition-colors uppercase tracking-tight text-left">{title}</h5>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest text-left">{company}</p>
            </div>
            <span className="text-orange-500 font-black text-xl italic">{salary}</span>
        </div>
    )
}

function HomeStat({ value, label }) {
    return (
        <div>
            <h5 className="text-6xl font-black text-slate-900 tracking-tighter mb-2 leading-none uppercase">{value}</h5>
            <p className="text-orange-500 font-black uppercase text-[10px] tracking-[0.2em]">{label}</p>
        </div>
    )
}

function IconTag({ icon: Icon, text }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="text-orange-500" /> {text}
        </div>
    )
}