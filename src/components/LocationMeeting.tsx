import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Video } from 'lucide-react';

export function LocationMeeting() {
  return (
    <section className="relative py-24 bg-emerald-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-5/12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white leading-tight">
                Your Location. <br/>
                <span className="text-emerald-300 italic font-light">Your Convenience.</span>
              </h2>
              <p className="text-emerald-100/80 text-lg font-light leading-relaxed mb-8">
                We proudly serve individuals across India. Based on your exact location and specific appointment requirements, our team will confirm the most suitable and effective meeting option for you.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/10 hover:bg-white/5 transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/50 flex items-center justify-center mb-8 border border-emerald-500/30">
                <MapPin className="w-8 h-8 text-emerald-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-[0.15em] text-emerald-400 uppercase mb-3">Nearby Locations</h3>
              <p className="font-serif text-3xl text-white">Personal Visit</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/10 hover:bg-white/5 transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/50 flex items-center justify-center mb-8 border border-emerald-500/30">
                <Video className="w-8 h-8 text-emerald-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-[0.15em] text-emerald-400 uppercase mb-3">Distant Locations</h3>
              <p className="font-serif text-3xl text-white">Online Meeting</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
