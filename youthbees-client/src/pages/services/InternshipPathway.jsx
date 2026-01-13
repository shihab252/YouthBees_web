import { FaBriefcase, FaUserCheck, FaLaptopCode, FaArrowRight } from "react-icons/fa";

export default function InternshipPathway() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-orange-100">
        <div className="bg-orange-500 p-12 text-white text-left">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-80 block mb-2">Bridge Program</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">Internship <br /> Pathway.</h1>
        </div>
        <div className="p-12 text-left">
          <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
            A premium direct-entry program connecting elite student talent with our partner network for high-impact internships and job placements.
          </p>
          <div className="space-y-6 mb-12">
            <Step icon={<FaLaptopCode />} text="Skill Assessment & Refinement" />
            <Step icon={<FaUserCheck />} text="Direct Referral to Partner Industry" />
            <Step icon={<FaBriefcase />} text="Pre-Placement Corporate Training" />
          </div>
          <button className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-widest rounded-[2rem] hover:bg-orange-600 transition-all shadow-xl">Apply for the Next Intake</button>
        </div>
      </div>
    </div>
  );
}

function Step({ icon, text }) {
  return (
    <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
      <div className="text-orange-500 text-xl">{icon}</div>
      <span className="font-black text-slate-800 uppercase text-xs tracking-wider">{text}</span>
    </div>
  );
}