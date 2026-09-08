import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFAB() {
  const message = encodeURIComponent("Hello Health And Wellness, I would like to know more about your services and book an appointment.");
  const whatsappUrl = `https://wa.me/916398331007?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 focus:outline-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={1.5} />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-20 pb-10 border-t-8 border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-xs">
          <a href="#home" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-950 font-serif font-bold text-lg shadow-md">
              HW
            </div>
            <span className="text-2xl font-serif font-semibold tracking-tight text-white">
              HEALTH <span className="font-light italic text-emerald-300">AND</span> WELLNESS
            </span>
          </a>
          <p className="text-emerald-200/60 text-sm font-light leading-relaxed mb-6">
            Professional guidance and dedicated support to help you achieve balance and prosperity in life.
          </p>
          <div className="space-y-2 font-light">
            <p className="text-emerald-100 text-sm">Panipat, Haryana, India</p>
            <p className="text-emerald-300 font-semibold tracking-wide">6398331007</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-6">Quick Links</h4>
          <nav className="flex flex-col gap-4 text-emerald-100/80 font-light">
            <a href="#home" className="hover:text-white hover:translate-x-1 transition-all">Home</a>
            <a href="#about" className="hover:text-white hover:translate-x-1 transition-all">About</a>
            <a href="#health" className="hover:text-white hover:translate-x-1 transition-all">Health</a>
            <a href="#wealth" className="hover:text-white hover:translate-x-1 transition-all">Wealth</a>
            <a href="#appointment" className="hover:text-white hover:translate-x-1 transition-all">Appointment</a>
            <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all">Contact</a>
          </nav>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-emerald-200/50">
        <p>© 2026 Health And Wellness. All rights reserved.</p>
        <p>Appointments Available Across India</p>
      </div>
    </footer>
  );
}
