import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { PremiumLeaf1, PremiumLeaf2 } from './LeafDecoration';

export function Contact() {
  const whatsappUrl = `https://wa.me/916398331007?text=${encodeURIComponent("Hello Health And Wellness, I would like to know more about your services and book an appointment.")}`;

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <PremiumLeaf2 className="top-20 right-10 text-emerald-800 opacity-20" scale={1.2} rotation={15} delay={0} />
      <PremiumLeaf1 className="bottom-10 left-0 text-emerald-800 opacity-10" scale={1} rotation={-45} delay={2} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-emerald-600"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-700 uppercase">Contact Us</h2>
              <div className="w-8 h-[1px] bg-emerald-600"></div>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Ready to start your journey?
            </h3>
            <p className="text-slate-600 text-lg font-light">
              We are here to seamlessly answer your questions and securely guide you towards your goals. Appointments are proudly available across India.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.a
            href="tel:6398331007"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center p-10 rounded-[32px] bg-white border border-emerald-50 premium-shadow hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
              <Phone className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-serif text-emerald-950 mb-2">Call Us</h4>
            <p className="text-emerald-700 font-semibold text-lg tracking-wide">6398331007</p>
          </motion.a>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center p-10 rounded-[32px] bg-emerald-900 border border-emerald-800 shadow-[0_20px_40px_-10px_rgba(4,120,87,0.3)] hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-emerald-900 transition-colors duration-500">
              <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-serif text-white mb-2">WhatsApp</h4>
            <p className="text-emerald-100 font-semibold text-lg tracking-wide">6398331007</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center p-10 rounded-[32px] bg-white border border-emerald-50 premium-shadow hover:-translate-y-2 transition-all duration-500 group text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
              <MapPin className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-serif text-emerald-950 mb-2">Headquarters</h4>
            <p className="text-slate-600 font-light mb-4">Panipat, Haryana, India</p>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
              Available Across India
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
