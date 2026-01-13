import { FaBuilding, FaHandshake, FaAward, FaArrowRight } from "react-icons/fa";

export default function CorporateTraining() {
  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6 text-white text-left">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-6xl font-black uppercase leading-none mb-8 tracking-tighter">
            Enterprise <br /> <span className="text-orange-500 italic">Solutions.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12">Empowering your workforce with the skills of tomorrow. From leadership to technical excellence.</p>
          
          <div className="space-y-6">
            <TrainingPoint icon={<FaHandshake />} text="Customized Curriculum for Teams" />
            <TrainingPoint icon={<FaAward />} text="Professional Certification Programs" />
            <TrainingPoint icon={<FaBuilding />} text="On-site & Virtual Workshops" />
          </div>
        </div>

        <div className="bg-white text-slate-900 p-12 rounded-[4rem] shadow-2xl">
          <h3 className="text-3xl font-black mb-6 uppercase italic">Partner with us</h3>
          <p className="text-slate-500 mb-8 font-medium">Request a specialized training proposal for your organization.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 transition-all" />
            <input type="email" placeholder="Work Email" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-orange-500 transition-all" />
            <button className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl uppercase tracking-widest hover:bg-orange-500 transition-all">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function TrainingPoint({ icon, text }) {
  return (
    <div className="flex items-center gap-4 text-xl font-bold">
      <div className="text-orange-500">{icon}</div>
      <span>{text}</span>
    </div>
  );
}