import { motion } from "framer-motion";
import { FaUserTie, FaCheckCircle, FaVideo, FaLightbulb, FaArrowRight } from "react-icons/fa";

export default function InterviewMastery() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20 px-6 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Recruiter Ready</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] uppercase tracking-tighter mb-10">
              Interview <br /> <span className="text-orange-500 italic uppercase font-outline-2">Mastery.</span>
            </h1>
            <div className="space-y-8">
              <InterviewFeature icon={<FaVideo />} title="Simulated Mockups" desc="Industry-specific interviews with real-time corrective feedback." />
              <InterviewFeature icon={<FaLightbulb />} title="Body Language" desc="Mastering non-verbal cues and psychological confidence." />
              <InterviewFeature icon={<FaCheckCircle />} title="The STAR Method" desc="Structure your answers to maximize impact and recall." />
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 backdrop-blur-xl">
             <div className="mb-10">
                <h3 className="text-3xl font-black uppercase mb-2">Book a Lab Session</h3>
                <p className="text-slate-400 text-sm">Our mentors are founders and leads at top firms.</p>
             </div>
             <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-all text-sm" />
                  <input type="text" placeholder="Desired Role" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-all text-sm" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-all text-sm" />
                <button className="w-full py-5 bg-orange-500 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3">
                  Check Availability <FaArrowRight />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterviewFeature({ icon, title, desc }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 text-xl border border-white/10 shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <h4 className="text-xl font-black uppercase mb-1 tracking-tight">{title}</h4>
        <p className="text-slate-400 text-sm font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}