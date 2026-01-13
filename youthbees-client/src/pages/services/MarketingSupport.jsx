import { motion } from "framer-motion";
import { FaBullhorn, FaEnvelopeOpenText, FaUsers, FaRocket, FaCheck } from "react-icons/fa";

const marketServices = [
  { title: "Social Media Growth", icon: FaRocket, desc: "End-to-end management and content strategy to scale your brand presence." },
  { title: "Lead Generation", icon: FaEnvelopeOpenText, desc: "B2B lead collection and email marketing for high conversion rates." },
  { title: "Macro Influencer", icon: FaUsers, desc: "Connecting brands with top-tier influencers for massive authority." },
  { title: "Paid Advertising", icon: FaBullhorn, desc: "ROI-driven campaigns across Meta, Google, and LinkedIn." }
];

export default function MarketingSupport() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">B2B Solutions</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4">Growth <span className="text-orange-500 italic">Marketing.</span></h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {marketServices.map((s, i) => (
            <motion.div whileHover={{ scale: 1.02 }} key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-orange-100 flex gap-6">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <s.icon size={28} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 font-medium mb-4">{s.desc}</p>
                <ul className="space-y-2">
                   <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><FaCheck className="text-orange-500"/> Verified Strategy</li>
                   <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><FaCheck className="text-orange-500"/> Dedicated Manager</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}