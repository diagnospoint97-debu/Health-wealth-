import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PremiumLeaf1, PremiumLeaf2, BotanicalGlow } from './LeafDecoration';
import { ArrowRight, Leaf, TrendingUp } from 'lucide-react';

const MotionLink = motion(Link);

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#fafdfb] pt-28 pb-20">
      
      {/* Premium Background Effects */}
      <BotanicalGlow className="w-[800px] h-[800px] -top-96 -right-40" />
      <BotanicalGlow className="w-[600px] h-[600px] bottom-0 -left-64 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(4,120,87,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Realistic Leaf Decorations */}
      <PremiumLeaf1 className="top-32 -left-10 md:left-10" scale={1.2} rotation={25} delay={0} />
      <PremiumLeaf2 className="top-40 right-5 md:right-20" scale={1.4} rotation={-15} delay={1.5} />
      <PremiumLeaf1 className="bottom-20 right-[-20px] md:right-32" scale={0.9} rotation={-45} delay={2.5} />
      <PremiumLeaf2 className="bottom-32 left-10 md:left-40" scale={1} rotation={15} delay={0.5} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-800 text-sm font-semibold tracking-wider mb-6 border border-emerald-100/50 shadow-sm">
              PREMIUM GUIDANCE & SUPPORT
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-emerald-950 leading-[1.1] mb-8">
              Your Health. <br className="hidden md:block" />
              <span className="text-gradient">Your Growth.</span> <br className="hidden md:block" />
              Your Journey.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Health And Wellness provides dedicated, professional guidance to help you achieve profound physical vitality and strategic financial growth.
            </p>
            
            {/* Health & Wealth Compact Secondary Choices */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mb-12 w-full px-2">
              
              {/* Health Choice */}
              <MotionLink 
                to="/health"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center justify-center gap-1.5 md:gap-2 w-[46%] md:w-44 h-24 md:h-28 bg-emerald-900 text-white shadow-md hover:shadow-lg transition-all rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl border border-emerald-700/50"
              >
                <Leaf className="w-5 h-5 md:w-7 md:h-7 opacity-90" strokeWidth={1.5} />
                <span className="font-serif text-sm md:text-base tracking-wider">HEALTH</span>
              </MotionLink>

              {/* Wealth Choice */}
              <MotionLink 
                to="/wealth"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center justify-center gap-1.5 md:gap-2 w-[46%] md:w-44 h-24 md:h-28 bg-white text-emerald-950 shadow-[0_8px_24px_-6px_rgba(4,120,87,0.12)] hover:shadow-[0_12px_32px_-6px_rgba(4,120,87,0.2)] transition-all rounded-[32px] border border-emerald-100/80"
              >
                <span className="text-xl md:text-3xl font-light leading-none text-emerald-800">₹</span>
                <span className="font-serif text-sm md:text-base tracking-wider">WEALTH</span>
              </MotionLink>
              
            </div>

            <MotionLink 
              to="/#appointment"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base md:text-lg font-semibold bg-emerald-900 text-white rounded-full hover:bg-emerald-800 transition-all shadow-[0_10px_40px_-10px_rgba(4,120,87,0.5)] group"
            >
              BOOK AN APPOINTMENT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MotionLink>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
