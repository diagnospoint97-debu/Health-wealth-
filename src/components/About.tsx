import React from 'react';
import { motion } from 'motion/react';
import { PremiumLeaf2 } from './LeafDecoration';
import { ImageWithFallback } from './ImageWithFallback';

export function About() {
  return (
    <section id="about" className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-white overflow-hidden">
      <PremiumLeaf2 className="top-20 left-5 md:left-20" scale={1.5} rotation={45} delay={0} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[40px] rounded-br-[120px] overflow-hidden aspect-[4/5] md:aspect-square w-full bg-emerald-50 premium-shadow border border-emerald-100/50 group"
            >
              {/* Premium Abstract Botanical Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-emerald-50/20 mix-blend-multiply z-10 pointer-events-none"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000" 
                alt="Wellness and Nature" 
                className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 glass-panel rounded-2xl p-5 md:p-6">
                <p className="font-serif text-xl md:text-2xl text-emerald-950 mb-2">Holistic Balance</p>
                <p className="text-emerald-900/80 text-xs md:text-sm">Harmonizing physical wellness and financial growth across India.</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-emerald-600"></div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-700 uppercase">About Us</h2>
              </div>
              
              <h3 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-8 leading-tight">
                Guiding Your Path to Wellbeing
              </h3>
              
              <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Health And Wellness is focused on providing individuals with professional, structured guidance and a convenient, premium platform to connect and schedule consultations.
                </p>
                <p>
                  Whether you are seeking dedicated support for personal health goals or looking for strategic pathways to build and secure wealth, our team is committed to helping you navigate your journey with absolute clarity and confidence. We believe in a holistic approach, where physical vitality and financial stability work in unison to create a truly fulfilling life.
                </p>
                <p className="font-medium text-emerald-900">
                  Headquartered in Panipat, Haryana, we extend our premier appointment services and expert guidance to individuals across India, ensuring that professional support is always within your reach.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
