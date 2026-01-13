import { motion } from "framer-motion";
import { FaBuilding, FaRocket, FaBullhorn, FaEnvelopeOpenText, FaArrowRight, FaBriefcase } from "react-icons/fa";

const corporateCards = [
  { title: "Corporate Training", icon: FaBuilding, desc: "Bespoke upskilling for modern corporate teams.", to: "/corporate" },
  { title: "Influencer Marketing", icon: FaBullhorn, desc: "Strategic macro-influencer brand authority.", to: "/marketing" },
  { title: "Lead Generation", icon: FaEnvelopeOpenText, desc: "High-conversion direct lead collection.", to: "/marketing" },
  { title: "Internship Pathway", icon: FaBriefcase, desc: "Specialized direct pipeline to industry roles.", to: "/internship" }
];

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] -mr-20 -mt-20" />
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">B2B Solutions</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-10">
            Scale Your <br /> <span className="text-orange-500 italic font-outline-2 uppercase">Company.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            "YouthBees Enterprise: Empowering organizations with specialized talent, training, and strategic marketing ecosystems."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateCards.map((card, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-black uppercase text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-500 text-sm font-medium mb-10">{card.desc}</p>
              <div className="mt-auto flex items-center gap-3 text-orange-500 font-black uppercase text-[10px] tracking-widest hover:text-slate-900 transition-colors">
                Enquire <FaArrowRight />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}