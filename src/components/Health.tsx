import React from 'react';
import { motion } from 'motion/react';
import { PremiumLeaf1, BotanicalGlow } from './LeafDecoration';
import { Heart, ShieldCheck, Activity, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const healthServices = [
  {
    icon: <Heart className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />,
    title: "Health Guidance",
    description: "Professional support to help you understand and gracefully manage your wellness journey."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />,
    title: "Personal Support",
    description: "One-on-one sessions meticulously focused on your individual lifestyle and health objectives."
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />,
    title: "Wellness Guidance",
    description: "Holistic, natural approaches designed to maintain balance, energy, and overall daily vitality."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />,
    title: "Appointment Support",
    description: "Dedicated, premium assistance to ensure your questions are answered promptly and clearly."
  }
];

export function Health() {
  return (
    <section id="health" className="relative py-24 md:py-32 bg-[#f4fbf8] overflow-hidden">
      <BotanicalGlow className="w-[600px] h-[600px] top-0 left-0" />
      <PremiumLeaf1 className="bottom-0 right-0 opacity-50" scale={1.8} rotation={-30} delay={1} />
      
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
              <div className="w-8 h-[1px] bg-emerald-600"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-700 uppercase">The Health Path</h2>
              <div className="w-8 h-[1px] bg-emerald-600"></div>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Nurturing Your Physical Wellbeing
            </h3>
            <p className="text-lg text-slate-600 font-light">
              We offer elegantly structured guidance and support systems designed to help you prioritize your health, fostering resilience and profound vitality for everyday life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {healthServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white p-10 rounded-[32px] premium-shadow border border-emerald-50 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-50/80 flex items-center justify-center mb-8 group-hover:bg-emerald-100 transition-colors duration-500 shadow-sm border border-emerald-100/50">
                {service.icon}
              </div>
              <h4 className="font-serif text-2xl text-emerald-950 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#appointment"
            className="inline-flex items-center justify-center px-10 py-5 text-base md:text-lg font-semibold bg-emerald-900 text-white rounded-full hover:bg-emerald-800 transition-all shadow-[0_10px_30px_-10px_rgba(4,120,87,0.4)] transform hover:-translate-y-1"
          >
            BOOK HEALTH APPOINTMENT
          </a>
        </motion.div>
      </div>
    </section>
  );
}
