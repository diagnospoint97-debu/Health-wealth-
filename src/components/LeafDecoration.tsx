import { motion } from 'motion/react';
import React from 'react';

interface LeafProps {
  className?: string;
  delay?: number;
  rotation?: number;
  scale?: number;
}

// A large, elegant monstera/tropical style leaf
export function PremiumLeaf1({ className = '', delay = 0, rotation = 0, scale = 1 }: LeafProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        y: [0, -20, 0],
        rotate: [rotation, rotation + 8, rotation],
        opacity: 1
      }}
      transition={{ 
        duration: 12, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay,
        opacity: { duration: 1.5, ease: "easeOut" }
      }}
      style={{ transform: `scale(${scale})`, filter: 'drop-shadow(0 20px 30px rgba(4,120,87,0.15))' }}
    >
      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="veinGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
        <path d="M50 95 C 20 95 5 65 5 40 C 5 15 30 5 50 5 C 70 5 95 15 95 40 C 95 65 80 95 50 95 Z" fill="url(#leafGrad1)" opacity="0.9"/>
        <path d="M50 95 Q 55 50 50 5" stroke="url(#veinGrad1)" strokeWidth="1.5" fill="none" />
        <path d="M50 70 Q 30 60 15 45" stroke="url(#veinGrad1)" strokeWidth="1" fill="none" />
        <path d="M50 50 Q 70 40 85 25" stroke="url(#veinGrad1)" strokeWidth="1" fill="none" />
        <path d="M50 30 Q 35 25 20 15" stroke="url(#veinGrad1)" strokeWidth="1" fill="none" />
      </svg>
    </motion.div>
  );
}

// A sleek, long willow-style leaf
export function PremiumLeaf2({ className = '', delay = 0, rotation = 0, scale = 1 }: LeafProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        y: [0, 15, 0],
        rotate: [rotation, rotation - 5, rotation],
        opacity: 1
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay,
        opacity: { duration: 1.5, ease: "easeOut" }
      }}
      style={{ transform: `scale(${scale})`, filter: 'drop-shadow(0 15px 25px rgba(4,120,87,0.1))' }}
    >
      <svg width="80" height="140" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leafGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
        </defs>
        <path d="M30 95 C 10 75 5 40 30 5 C 55 40 50 75 30 95 Z" fill="url(#leafGrad2)" opacity="0.85"/>
        <path d="M30 95 Q 35 50 30 5" stroke="#047857" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      </svg>
    </motion.div>
  );
}

// A soft, blurred background botanical element
export function BotanicalGlow({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`absolute pointer-events-none rounded-full blur-[100px] opacity-40 z-0 ${className}`} 
      style={{
        background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(4,120,87,0) 70%)'
      }}
    />
  );
}
