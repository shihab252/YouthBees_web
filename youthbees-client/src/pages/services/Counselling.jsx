import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaStar, FaRegClock, FaCalendarCheck, FaHistory, FaAward,
  FaArrowRight, FaSearch, FaTimes, FaUserCheck, FaThList, FaThLarge
} from "react-icons/fa";

// ✅ IMAGE IMPORTS
import founderImg from "../../assets/about/founder.jpg"; 
import teamImg from "../../assets/about/team.jpg";   
import eventImg from "../../assets/about/event.jpg"; 

const allMentors = [
  {
    id: 1,
    name: "Mahib Sadman",
    role: "Founder & Career Strategist",
    quote: "Building the bridge between academic certificates and industry excellence through elite mentorship.",
    price: "1200",
    rating: "5.0",
    reviews: "150",
    tags: ["Career Coaching", "Leadership", "Resume Mastery", "HR Strategy"],
    experience: "5+",
    sessions: "600+",
    level: "Platinum Tier",
    availability: "Available Today",
    img: founderImg,
    category: "Career"
  },
  {
    id: 2,
    name: "Sakib Hasan",
    role: "Chief Operating Officer",
    quote: "Expert in operational efficiency and helping students navigate high-pressure corporate landscapes.",
    price: "900",
    rating: "4.9",
    reviews: "125",
    tags: ["Operations", "Strategic Planning", "Efficiency", "FinTech"],
    experience: "4+",
    sessions: "450+",
    level: "Gold Tier",
    availability: "Available Tomorrow",
    img: teamImg,
    category: "Technology"
  }
];

export default function MentorDirectory() {
  const [viewMode, setViewMode] = useState("premium"); // Toggle: 'classic' or 'premium'
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Marketing", "Design", "Career"];

  const filteredMentors = allMentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mentor.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "All" || mentor.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFF9F5] pt-32 selection:bg-orange-300 overflow-x-hidden">
      
      {/* ================= HEADER & VIEW TOGGLE ================= */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-left">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Mentorship Hub</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              Expert <br /> <span className="text-orange-500 italic">Guidance.</span>
            </h1>
          </div>

          {/* VIEW TOGGLE SWITCH */}
          <div className="bg-white p-2 rounded-2xl border border-orange-100 shadow-xl flex gap-2 relative z-20">
             <button 
                onClick={() => setViewMode("premium")}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${viewMode === 'premium' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
             >
                <FaThLarge /> Premium
             </button>
             <button 
                onClick={() => setViewMode("classic")}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${viewMode === 'classic' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
             >
                <FaThList /> Classic
             </button>
          </div>
        </div>
      </section>

      {/* ================= SEARCH & FILTERS ================= */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl bg-white border border-orange-100 p-2 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-2">
                <div className="flex items-center gap-4 px-6 flex-grow w-full">
                <FaSearch className="text-orange-500" />
                <input 
                    type="text" 
                    placeholder="Search by skill or mentor name..." 
                    className="w-full py-5 bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-300" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                <select 
                    className="px-6 py-5 bg-slate-50 text-slate-500 font-black uppercase text-[10px] tracking-widest outline-none rounded-2xl w-full md:w-auto cursor-pointer"
                    onChange={(e) => setActiveCategory(e.target.value)}
                >
                    {categories.map(cat => <option key={cat}>{cat}</option>)}
                </select>
            </div>
        </div>
      </section>

      {/* ================= MENTOR LISTING ================= */}
      <section className="py-10 px-6 max-w-7xl mx-auto pb-40">
        <motion.div layout className={`grid grid-cols-1 ${viewMode === 'classic' ? 'gap-6' : 'gap-16'}`}>
          <AnimatePresence mode="popLayout">
            {filteredMentors.length > 0 ? (
                filteredMentors.map((mentor) => (
                    viewMode === "premium" 
                    ? <PremiumCard key={mentor.id} {...mentor} /> 
                    : <ClassicCard key={mentor.id} {...mentor} />
                ))
            ) : (
                <div className="text-center py-40">
                    <p className="text-slate-300 font-black text-2xl uppercase tracking-widest">No mentors found</p>
                </div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= VIEW 1: PREMIUM CARD (High Impact) ================= */

function PremiumCard({ name, role, quote, price, rating, reviews, tags, experience, sessions, level, availability, img }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-[3.5rem] border border-orange-50 shadow-2xl shadow-orange-900/5 flex flex-col lg:flex-row overflow-hidden transition-all duration-500"
    >
      <div className="relative lg:w-96 h-96 lg:h-auto overflow-hidden">
        <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={name} />
        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-3xl flex justify-between items-center shadow-xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Hourly Rate</span>
            <span className="text-2xl font-black text-slate-900">৳{price}</span>
        </div>
      </div>
      <div className="flex-grow p-12 text-left">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">{name}</h3>
            <p className="text-xs font-black text-orange-500 uppercase tracking-[0.2em]">{role}</p>
          </div>
          <div className="bg-orange-50 px-4 py-2 rounded-2xl flex items-center gap-2">
            <FaStar className="text-orange-500" />
            <span className="font-black text-slate-900">{rating}</span>
          </div>
        </div>
        <p className="text-slate-500 italic font-medium leading-relaxed mb-8 border-l-4 border-orange-100 pl-6">"{quote}"</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-black uppercase px-4 py-2 bg-slate-50 text-slate-500 rounded-xl border border-slate-100 group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors">{tag}</span>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-3 gap-6 pt-8 border-t border-slate-50">
           <MentorStat icon={FaHistory} value={experience} label="Experience" />
           <MentorStat icon={FaCalendarCheck} value={sessions} label="Mentored" />
           <MentorStat icon={FaAward} value={level.split(' ')[0]} label="Tier" />
        </div>
      </div>
      <div className="lg:w-24 bg-slate-900 flex lg:flex-col items-center justify-center p-6 lg:p-0">
         <button className="flex-grow w-full flex flex-col items-center justify-center text-white hover:bg-orange-500 transition-all py-6">
            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform text-2xl" />
            <span className="text-[8px] font-black uppercase tracking-widest opacity-40 mt-2">Book</span>
         </button>
      </div>
    </motion.div>
  );
}

/* ================= VIEW 2: CLASSIC CARD (Search Focused) ================= */

function ClassicCard({ name, role, price, rating, reviews, tags, availability, img }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white rounded-[2rem] p-6 border border-orange-100 shadow-lg flex items-center gap-8 group hover:border-orange-500 transition-all"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-50 shrink-0">
        <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={name} />
      </div>
      <div className="flex-grow text-left">
        <h3 className="text-xl font-black text-slate-900">{name}</h3>
        <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">{role}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[9px] font-bold bg-slate-50 px-2 py-1 rounded-md text-slate-400">{tag}</span>
          ))}
        </div>
      </div>
      <div className="text-right shrink-0">
         <p className="text-2xl font-black text-slate-900 mb-1">৳{price}</p>
         <div className="flex items-center justify-end gap-1 text-orange-500 text-xs mb-4">
            <FaStar /> <span className="font-black text-slate-900">{rating}</span>
         </div>
         <button className="px-6 py-2 bg-slate-900 text-white font-black text-[10px] uppercase rounded-lg hover:bg-orange-500 transition-colors">Book Now</button>
      </div>
    </motion.div>
  );
}

function MentorStat({ icon: Icon, value, label }) {
    return (
        <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
                <Icon className="text-orange-500 text-xs" />
                <span className="text-xs font-black text-slate-900 uppercase">{value}</span>
            </div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        </div>
    );
}