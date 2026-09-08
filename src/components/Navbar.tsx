import { Menu, X, MessageCircle } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Health', href: '/health' },
    { name: 'Wealth', href: '/wealth' },
    { name: 'Appointment', href: '/#appointment' },
    { name: 'Contact', href: '/#contact' },
  ];

  const whatsappMessage = encodeURIComponent("Hello Health And Wellness, I would like to know more about your services and book an appointment.");
  const whatsappUrl = `https://wa.me/916398331007?text=${whatsappMessage}`;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-white font-serif font-bold text-sm shadow-md group-hover:bg-emerald-800 transition-colors">
            HW
          </div>
          <span className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-emerald-950">
            HEALTH <span className="font-light italic text-emerald-800">AND</span> WELLNESS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-700 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-emerald-100 pl-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:scale-105 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <Link 
              to="/#appointment" 
              className="px-6 py-2.5 text-sm font-semibold bg-emerald-900 text-white rounded-full hover:bg-emerald-800 transition-all shadow-[0_4px_14px_0_rgba(4,120,87,0.39)] hover:shadow-[0_6px_20px_rgba(4,120,87,0.23)] transform hover:-translate-y-0.5"
            >
              BOOK NOW
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-emerald-950 hover:bg-emerald-50 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-emerald-100 shadow-2xl py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href} 
              className="text-lg font-medium text-emerald-950 py-3 border-b border-emerald-50/50 flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              <span className="text-emerald-300">→</span>
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 text-emerald-800 bg-emerald-50 rounded-xl font-medium"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link 
              to="/#appointment" 
              className="w-full px-6 py-4 text-center text-base font-semibold bg-emerald-900 text-white rounded-xl shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
