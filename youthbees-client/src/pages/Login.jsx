import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock, FaArrowRight, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

// Logo
import logoImg from "../assets/logo/logo.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex flex-col lg:flex-row overflow-x-hidden selection:bg-orange-300">
      
      {/* ================= LEFT SIDE: VISUAL IDENTITY ================= */}
      <div className="w-full lg:w-1/3 bg-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden shrink-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Link to="/" className="relative z-10 flex items-center gap-3 mb-10 lg:mb-0">
          <img src={logoImg} alt="Logo" className="h-10 md:h-12 w-auto object-contain rounded-xl" />
          <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase italic">YouthBees</span>
        </Link>

        <div className="relative z-10 mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6 lg:mb-8">
            Welcome <br /> <span className="text-orange-500 italic uppercase">Back.</span>
          </h2>
          <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-xs border-l-2 border-orange-500 pl-6">
            Continue your journey toward bridging the gap between classroom and career.
          </p>
        </div>

        <div className="relative z-10 hidden md:block">
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => <FaCheckCircle key={i} className="text-orange-500 text-xs" />)}
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Innovation Hub Est. 2021</p>
        </div>
      </div>

      {/* ================= RIGHT SIDE: LOGIN FORM ================= */}
      <div className="w-full lg:w-2/3 flex items-start justify-center p-6 md:p-12 lg:p-16 overflow-y-auto bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md pt-8 lg:pt-20"
        >
          <div className="text-left mb-10">
             <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Login</h1>
             <p className="text-slate-500 font-medium text-sm md:text-base">Access your personalized learning ecosystem.</p>
          </div>

          <form className="space-y-6">
            {/* EMAIL OR USERNAME */}
            <div className="text-left">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Email or Username</label>
              <div className="relative group">
                {/* Replaced FaEnvelope with FaUserAlt for general identity */}
                <FaUserAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors text-sm" />
                <input
                  type="text"
                  placeholder="Enter email or username"
                  className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-slate-300 bg-white outline-none focus:border-orange-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 shadow-sm"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="text-left pt-2">
              <div className="flex justify-between items-end mb-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Password</label>
                <Link to="/forgot-password" size="sm" className="text-[10px] font-black text-orange-500 uppercase tracking-widest hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-slate-300 bg-white outline-none focus:border-orange-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 shadow-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98] mt-4 flex items-center justify-center gap-3"
            >
              Secure Login <FaArrowRight />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8 border-t border-slate-100">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New to the hive?</span>
               <Link to="/register" className="w-full sm:w-auto text-center px-8 py-2.5 bg-orange-50 text-orange-600 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-orange-100 transition-colors border border-orange-100">
                  Register Now
               </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}