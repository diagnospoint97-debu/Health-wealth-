import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Health } from './components/Health';
import { Wealth } from './components/Wealth';
import { LocationMeeting } from './components/LocationMeeting';
import { Appointment } from './components/Appointment';
import { Contact } from './components/Contact';
import { Footer, WhatsAppFAB } from './components/Footer';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, useLocation().pathname]);

  return null;
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LocationMeeting />
      <Appointment />
      <Contact />
    </main>
  );
}

function HealthPage() {
  return (
    <main className="pt-24">
      <Health />
      <Appointment />
    </main>
  );
}

function WealthPage() {
  return (
    <main className="pt-24">
      <Wealth />
      <Appointment />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="font-sans antialiased text-slate-900 bg-white selection:bg-emerald-200 selection:text-emerald-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/wealth" element={<WealthPage />} />
        </Routes>
        <Footer />
        <WhatsAppFAB />
      </div>
    </Router>
  );
}
