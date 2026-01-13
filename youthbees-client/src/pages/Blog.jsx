import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaUserCircle, FaArrowRight, FaSearch, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Dummy Data for Articles
const categories = ["All", "Career Strategy", "Academic Tips", "Industry News", "Student Life"];

const articles = [
  {
    id: 1,
    title: "The Future of Remote Work in Bangladesh: 2026 Trends",
    excerpt: "As global markets shift, how can Bangladeshi students prepare for high-paying remote roles in the tech and marketing spheres?",
    category: "Industry News",
    author: "Mahib Sadman",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Mastering the STAR Method for Mock Interviews",
    excerpt: "Learn how to structure your interview answers to impress recruiters at top-tier corporate firms.",
    category: "Career Strategy",
    author: "Sakib Hasan",
    date: "Jan 08, 2026",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    featured: false
  },
  {
    id: 3,
    title: "Why Your SOP Needs a Professional Audit",
    excerpt: "A Statement of Purpose is more than just a bio; it's your ticket to international education. Avoid these 5 common mistakes.",
    category: "Academic Tips",
    author: "Research Team",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    featured: false
  },
  {
    id: 4,
    title: "Balancing Freelancing with University Life",
    excerpt: "How to earn while you learn without compromising your CGPA. Insights from our top Uni Associates.",
    category: "Student Life",
    author: "Intern Hub",
    date: "Jan 02, 2026",
    image: "https://images.unsplash.com/photo-1523240715639-997813d1994b?auto=format&fit=crop&q=80&w=600",
    featured: false
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = articles.filter(a => 
    activeCategory === "All" || a.category === activeCategory
  );

  const featuredPost = articles.find(a => a.featured);

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-20 selection:bg-orange-300 overflow-x-hidden">
      
      {/* 1. BLOG HERO SECTION */}
      <section className="pt-20 lg:pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-left mb-16">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Ecosystem Insights</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none uppercase tracking-tighter">
              Inside <br /> <span className="text-orange-500 italic uppercase">YouthBees.</span>
            </h1>
          </header>

          {/* 2. FEATURED ARTICLE */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.id}`}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-orange-100 flex flex-col lg:flex-row group mb-20"
              >
                <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center text-left">
                  <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest w-fit mb-6">Featured Story</span>
                  <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight uppercase mb-6 group-hover:text-orange-500 transition-colors tracking-tighter">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <FaUserCircle className="text-orange-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-slate-300" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          )}

          {/* 3. SEARCH & CATEGORY FILTERS */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-slate-400 border border-orange-50 hover:border-orange-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80 group">
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-14 pr-6 py-4 bg-white border border-orange-50 rounded-2xl outline-none focus:border-orange-500 shadow-sm font-bold text-sm" 
              />
            </div>
          </div>

          {/* 4. ARTICLES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.filter(a => !a.featured).map((article) => (
              <motion.article 
                layout
                key={article.id}
                className="bg-white rounded-[3rem] border border-orange-50 overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col text-left"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                    alt={article.title} 
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-orange-500 font-black text-[8px] uppercase tracking-widest border border-orange-100">
                    {article.category}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase mb-4 group-hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase text-slate-900 italic">By {article.author}</span>
                    <Link to={`/blog/${article.id}`} className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <FaArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* 5. NEWSLETTER BANNER */}
          <div className="mt-32 bg-slate-900 rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
             </div>
             <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 relative z-10 leading-none">
                Get the <span className="text-orange-500 italic">Buzz.</span>
             </h2>
             <p className="text-slate-400 font-bold mb-10 tracking-widest uppercase text-xs relative z-10">Subscribe for weekly career blueprints and industry secrets.</p>
             <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-8 py-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-orange-500 transition-all font-bold text-sm" 
                />
                <button className="px-10 py-5 bg-orange-500 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-slate-900 transition-all text-xs">
                  Subscribe
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}