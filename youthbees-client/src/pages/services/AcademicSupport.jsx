import { motion } from "framer-motion";
import { FaGraduationCap, FaFileSignature, FaUserEdit, FaSearchPlus, FaArrowRight, FaChartBar } from "react-icons/fa";

const scholarlyServices = [
  { id: 1, title: "Course Tuition", desc: "1-on-1 personalized academic coaching for school, college, and university subjects.", icon: FaGraduationCap, price: "Starts ৳500/hr" },
  { id: 2, title: "Assignment Support", desc: "Expert guidance to help you master and excel in institutional projects.", icon: FaFileSignature, price: "Custom Quote" },
  { id: 3, title: "SOP & Admission", desc: "Crafting compelling Statements of Purpose for global university admissions.", icon: FaUserEdit, price: "Starts ৳1,200" },
  { id: 4, title: "Research & Survey", desc: "Professional assistance with research papers, surveys, and data interpretation.", icon: FaSearchPlus, price: "Consultation" }
];

export default function ScholarlySuccess() {
  return (
    <div className="min-h-screen bg-[#FFF9F5] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-left">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Academic Excellence</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-6">Scholarly <br /> <span className="text-orange-500 italic uppercase">Success.</span></h1>
          <p className="text-slate-500 font-medium max-w-xl text-lg border-l-4 border-orange-500 pl-6 text-left italic">
            Elevating your academic journey through expert mentorship and professional documentation support.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {scholarlyServices.map((service) => (
            <motion.div whileHover={{ y: -10 }} key={service.id} className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl flex flex-col sm:flex-row items-start gap-8 group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                <service.icon size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-2">{service.title}</h3>
                <p className="text-slate-500 font-medium mb-6 text-sm">{service.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-orange-500 font-black uppercase tracking-widest text-[10px]">{service.price}</span>
                  <button className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-slate-900 hover:text-orange-500 transition-colors">Enquire <FaArrowRight /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}