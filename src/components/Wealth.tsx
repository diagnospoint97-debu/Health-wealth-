import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Target, Briefcase, Compass, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const wealthServices = [
  {
    icon: <Briefcase className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2} />,
    title: "Business Guidance",
    description: "Strategic, high-level discussions to help you navigate complex professional challenges and opportunities."
  },
  {
    icon: <TrendingUp className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2} />,
    title: "Growth Guidance",
    description: "Proven insights and sophisticated frameworks to support long-term personal and professional development."
  },
  {
    icon: <Target className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2} />,
    title: "Personal Guidance",
    description: "Tailored advisory sessions focusing entirely on your unique goals, aspirations, and vision."
  },
  {
    icon: <Compass className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2} />,
    title: "One-to-One Discussion",
    description: "Dedicated, private time with our experts to address specific queries and professional scenarios."
  }
];

export function Wealth() {
  return (
    <section id="wealth" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50"></div>
      
      {/* Subtle abstract geometric background for wealth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[100px] border-emerald-50/50 rounded-full opacity-50 -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-600 font-medium transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-slate-400"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">The Wealth Path</h2>
              <div className="w-8 h-[1px] bg-slate-400"></div>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Building Your Future
            </h3>
            <p className="text-lg text-slate-600 font-light">
              Professional advisory and strategic discussions meticulously aimed at fostering growth, stability, and highly informed decision-making in your professional life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
          {wealthServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-gradient-to-br from-white to-emerald-50/30 p-8 md:p-12 rounded-[32px] shadow-[0_12px_40px_-16px_rgba(4,120,87,0.1)] border border-emerald-900/5 hover:border-emerald-900/15 hover:shadow-[0_24px_50px_-20px_rgba(4,120,87,0.2)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-start"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-emerald-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] bg-emerald-50 flex items-center justify-center mb-8 border border-emerald-100/60 shadow-[0_4px_20px_-8px_rgba(4,120,87,0.2)] group-hover:bg-emerald-100/50 group-hover:shadow-[0_8px_24px_-8px_rgba(4,120,87,0.3)] group-hover:border-emerald-200/60 transition-all duration-500">
                <div className="text-emerald-800 group-hover:scale-110 group-hover:text-emerald-950 transition-all duration-500 drop-shadow-sm">
                  {service.icon}
                </div>
              </div>
              
              <h4 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-950 mb-4 group-hover:text-emerald-900 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#wealth"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-semibold bg-white text-emerald-950 border border-emerald-900/20 rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
          >
            EXPLORE WEALTH
          </a>
          <a 
            href="#appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-semibold bg-emerald-950 text-white rounded-full hover:bg-emerald-800 transition-all shadow-[0_10px_30px_-10px_rgba(2,44,34,0.4)] transform hover:-translate-y-1"
          >
            BOOK A DISCUSSION
          </a>
        </motion.div>
      </div>
    </section>
  );
}
