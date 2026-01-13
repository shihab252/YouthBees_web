import { motion } from "framer-motion";
import { FaGlobeAmericas, FaBookOpen, FaPlaneDeparture, FaPassport, FaArrowRight } from "react-icons/fa";

export default function StudyAbroad() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 text-left">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block text-left">Global Pathways</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 text-left">
              Go <br /> <span className="text-orange-500 italic uppercase">Global.</span>
            </h1>
            <p className="text-slate-500 font-medium mb-12 text-lg text-left">Your roadmap to the world's most prestigious universities and language mastery certifications.</p>
            <div className="grid grid-cols-2 gap-8">
              <AbroadStat value="95%" label="Visa Success Rate" />
              <AbroadStat value="15+" label="Target Countries" />
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AbroadCard icon={FaBookOpen} title="IELTS Intensive" desc="Score-guaranteed training modules." />
            <AbroadCard icon={FaPassport} title="Visa Guidance" desc="Expert handling of global visa docs." />
            <AbroadCard icon={FaPlaneDeparture} title="Pre-Departure" desc="Briefings for international life." />
            <div className="bg-slate-900 p-8 rounded-[3rem] flex flex-col justify-center items-center text-center text-white">
              <h4 className="text-xl font-black uppercase mb-4">Ready to <br /> Fly?</h4>
              <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"><FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AbroadCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-orange-50 p-8 rounded-[3rem] text-left group hover:bg-orange-500 transition-all duration-500">
      <Icon className="text-3xl text-orange-500 mb-6 group-hover:text-white transition-colors" />
      <h3 className="text-xl font-black text-slate-900 uppercase group-hover:text-white mb-2">{title}</h3>
      <p className="text-slate-500 text-sm font-medium group-hover:text-white/80">{desc}</p>
    </div>
  );
}

function AbroadStat({ value, label }) {
  return (
    <div className="text-left border-l-2 border-orange-100 pl-6">
      <p className="text-4xl font-black text-slate-900 mb-1">{value}</p>
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{label}</p>
    </div>
  );
}