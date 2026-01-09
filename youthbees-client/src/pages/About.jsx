import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import {
  FaUsers,
  FaHandshake,
  FaAward,
  FaBullseye,
  FaEye,
  FaQuoteLeft,
  FaArrowRight,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

/* ===== IMAGE IMPORTS (KEPT SAME) ===== */
import teamImg from "../assets/about/team.jpg";
import eventImg from "../assets/about/event.jpg";
import eventStallImg from "../assets/about/event-stall-1.jpg";
import awardImg from "../assets/about/award-ceremony-1.jpg";
import founderImg from "../assets/about/founder.jpg";
import firotechImg from "../assets/about/collaboration-firotech.jpg";
import epaathImg from "../assets/about/collaboration-epaathshala.jpg";
import mouImg from "../assets/about/mou-signing.jpg";
import workshopImg from "../assets/about/workshop.jpg";

export default function About() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Executive Team Data (Limit to 4 for the preview)
  const team = [
    {
      name: "Sakib Hasan",
      role: "Chief Operating Officer",
      specialty: "Strategic Operations",
      img: teamImg,
      linkedin: "https://linkedin.com/in/sakibhasan"
    },
    {
      name: "Ishtiaq Hossen",
      role: "Lead Tech Mentor",
      specialty: "Full-Stack Engineering",
      img: workshopImg,
      linkedin: "https://linkedin.com/in/ishtiaqhossen"
    },
    {
      name: "Nabila Islam",
      role: "Head of Marketing",
      specialty: "Brand Communication",
      img: eventImg,
      linkedin: "https://linkedin.com/in/nabilaislam"
    },
    {
      name: "Tanvir Ahmed",
      role: "Partnership Manager",
      specialty: "Corporate Relations",
      img: eventStallImg,
      linkedin: "https://linkedin.com/in/tanvirahmed"
    }
  ];

  return (
    <div className="bg-[#FFF9F5] overflow-hidden selection:bg-orange-300 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase mb-8">Empowering the Future</span>
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-8 uppercase">Next Gen <br /><span className="text-orange-500 italic">Leaders.</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl border-l-4 border-orange-500 pl-8 ml-2 italic font-medium">YouthBees is more than a platform—it is a movement designed to transition Bangladeshi students from classroom theory to industry mastery.</p>
          </motion.div>
          <motion.div className="lg:col-span-5 relative" style={{ scale }}>
            <div className="relative z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl rotate-3">
              <img src={teamImg} alt="Team" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute inset-0 bg-orange-500 rounded-[3rem] md:rounded-[5rem] -rotate-3 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION/VISION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-12 text-white flex flex-col justify-between min-h-[400px]">
            <FaBullseye className="text-6xl text-orange-500 mb-12" />
            <div>
              <h3 className="text-4xl font-black mb-4 tracking-tight uppercase">Our Mission</h3>
              <p className="text-slate-400 text-lg max-w-lg leading-relaxed font-medium">To bridge the gap between education and industry by equipping youth with relevant skills, mentoring, and exposure.</p>
            </div>
          </div>
          <div className="bg-orange-500 rounded-[4rem] p-12 text-white flex flex-col justify-between min-h-[400px] shadow-2xl shadow-orange-500/20">
            <FaEye className="text-6xl text-white mb-12" />
            <div>
              <h3 className="text-4xl font-black mb-4 tracking-tight uppercase">Our Vision</h3>
              <p className="text-orange-100 text-lg leading-relaxed font-medium">To create a future where youth grow with confidence, innovation, and professional readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center text-left">
          <div className="lg:col-span-5 relative group">
            <div className="rounded-[4rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 relative">
                <img src={founderImg} alt="Founder" className="w-full h-[650px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="https://linkedin.com/in/mahibsadman" target="_blank" rel="noreferrer" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white transition-all shadow-2xl transform scale-90 group-hover:scale-100">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-3xl shadow-xl max-w-[280px] hidden md:block border border-orange-100">
              <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
              <p className="text-slate-700 italic font-bold leading-relaxed">"We nurture the mindset of excellence."</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
               <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight uppercase leading-none">Mahib <br /> <span className="text-orange-500 italic text-slate-900">Sadman.</span></h2>
            </div>
            <h3 className="text-xl font-black text-slate-400 mb-8 uppercase tracking-[0.3em]">Founder & Visionary</h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium italic">YouthBees was founded on April 21, 2021. Mahib is a youth leader who transformed the frustration of "skills gap" into a national mission.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Leadership Mentorship", "Industry Collaborations", "Career Strategy", "Event Architecture"].map((text, i) => (
                <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 shadow-sm"><div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center"><FaAward className="text-orange-500 text-sm" /></div><span className="font-black text-slate-800 text-[10px] uppercase tracking-widest">{text}</span></motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TEAM SECTION */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <div>
              <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Core Architects</span>
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">Meet the <br /><span className="text-orange-500 italic uppercase text-left">Drivers.</span></h2>
            </div>
            <p className="text-slate-500 max-w-sm pb-2 italic border-l-2 border-orange-500 pl-6 font-medium">The dedicated team working behind the scenes to scale impact across Bangladesh.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative">
                <div className="relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-orange-50">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end text-left">
                    <p className="text-orange-500 font-black uppercase text-[8px] tracking-[0.3em] mb-2">{member.specialty}</p>
                    <div className="flex gap-3 mt-4">
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 transition-colors"><FaLinkedin /></a>
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 transition-colors cursor-pointer"><FaGlobe /></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-left px-4">
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{member.name}</h4>
                  <p className="text-orange-500 font-black uppercase text-[10px] tracking-widest mt-1 italic">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🟢 SEE MORE TEAM BUTTON */}
          <div className="flex justify-center md:justify-start">
             <Link to="/team" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-2xl hover:bg-orange-500 transition-all uppercase tracking-widest text-xs shadow-2xl group">
               Meet the Full Squad <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* 5. AWARDS & PARTNERS */}
      <section className="py-32 px-6 bg-slate-900 rounded-[5rem] mx-4 overflow-hidden relative shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">Strategic <br /><span className="text-orange-500 italic text-left">Ecosystem.</span></h2>
            <p className="text-slate-400 max-w-sm pb-2 font-medium">Collaborating with the best to deliver the highest quality career resources.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PartnerCard img={firotechImg} title="FiroTech" tag="Tech Partner" />
            <PartnerCard img={epaathImg} title="ePaathshalaBD" tag="Learning Partner" />
            <PartnerCard img={mouImg} title="Strategic MOUs" tag="Global Reach" />
          </div>
          <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <AwardTile img={awardImg} title="Leadership Recognition" />
            <AwardTile img={eventStallImg} title="National Presence" />
            <div className="lg:col-span-2 bg-orange-500 rounded-[3rem] p-12 flex items-center justify-between group cursor-pointer shadow-xl shadow-orange-500/20">
              <h4 className="text-4xl font-black text-white uppercase text-left leading-none tracking-tighter italic">Join our <br />Network</h4>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform"><FaArrowRight size={30} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATS */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16 text-left">
          <StatBox value="1k+" label="Active Members" />
          <StatBox value="10+" label="Global Partners" />
          <StatBox value="25+" label="Flagship Events" />
          <StatBox value="01" label="Unified Mission" />
        </div>
      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function PartnerCard({ img, title, tag }) {
  return (
    <motion.div whileHover={{ y: -15 }} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-[3.5rem] transition-all">
      <div className="overflow-hidden rounded-[2.8rem] h-64 mb-6"><img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700" /></div>
      <div className="px-6 pb-6 text-left">
        <span className="text-orange-500 text-[8px] font-black uppercase tracking-widest">{tag}</span>
        <h4 className="text-2xl font-black text-white uppercase tracking-tight mt-1">{title}</h4>
      </div>
    </motion.div>
  );
}

function AwardTile({ img, title }) {
  return (
    <div className="relative h-64 rounded-[3rem] overflow-hidden group border border-white/10 shadow-xl">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
      <div className="absolute bottom-8 left-8 text-left"><h5 className="text-white font-black text-sm uppercase tracking-widest">{title}</h5></div>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-left">
      <h3 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter mb-2 leading-none uppercase">{value}</h3>
      <div className="w-12 h-1.5 bg-orange-500 mb-6 rounded-full mx-auto md:mx-0" />
      <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">{label}</p>
    </motion.div>
  );
}