import React, { useState } from 'react';
import { motion } from 'motion/react';
import { indianStates } from '../data/states';
import { CheckCircle2, CalendarDays } from 'lucide-react';
import { BotanicalGlow } from './LeafDecoration';

export function Appointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="appointment" className="relative py-24 md:py-32 bg-[#fafdfb] overflow-hidden">
      <BotanicalGlow className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 mb-6 border border-emerald-100">
              <CalendarDays className="w-8 h-8" strokeWidth={1.5}/>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-emerald-950 mb-6">
              Request an Appointment
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              We are available to connect with individuals seamlessly across India. Fill out the form below to request a premium consultation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] premium-shadow border border-emerald-50 p-8 md:p-14 relative overflow-hidden"
        >
          {isSubmitted ? (
            <div className="text-center py-20">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-serif text-3xl font-semibold text-emerald-950 mb-4">Appointment Request Received</h3>
              <p className="text-slate-600 text-lg font-light mb-10 max-w-md mx-auto">
                Thank you for reaching out. Our team will carefully review your request and contact you shortly to confirm the optimal meeting arrangement.
              </p>
              <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-50 text-emerald-900 rounded-full font-medium border border-emerald-100 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                WhatsApp Support: 6398331007
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">Full Name *</label>
                  <input required type="text" id="name" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">Mobile Number *</label>
                  <input required type="tel" id="phone" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="state" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">State / UT *</label>
                  <div className="relative">
                    <select required id="state" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white appearance-none cursor-pointer">
                      <option value="">Select State</option>
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="city" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">City *</label>
                  <input required type="text" id="city" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white" placeholder="Enter any city" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="type" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">Appointment Type *</label>
                <div className="relative">
                  <select required id="type" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white appearance-none cursor-pointer">
                    <option value="">Select Category</option>
                    <option value="health">Health Consultation</option>
                    <option value="wealth">Wealth Advisory</option>
                    <option value="general">General Enquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="date" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">Preferred Date</label>
                  <input type="date" id="date" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="time" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">Preferred Time</label>
                  <input type="time" id="time" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">Message / Requirement</label>
                <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50/50 hover:bg-white resize-none" placeholder="Briefly describe what you would like to discuss..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-5 text-lg font-semibold bg-emerald-900 text-white rounded-2xl hover:bg-emerald-800 transition-all shadow-[0_10px_30px_-10px_rgba(4,120,87,0.5)] transform hover:-translate-y-1">
                  REQUEST APPOINTMENT
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
