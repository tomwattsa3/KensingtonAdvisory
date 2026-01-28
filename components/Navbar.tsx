import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Bottom Floating "Book a Call" Button - Appears when scrolled */}
      <div
        className={`
          fixed left-1/2 -translate-x-1/2 z-50
          transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1)
          ${isScrolled
            ? 'bottom-8 opacity-100 translate-y-0 scale-100'
            : 'bottom-0 opacity-0 translate-y-12 scale-90 pointer-events-none'}
        `}
      >
        <button
          onClick={scrollToBooking}
          className="bg-slate-900/80 backdrop-blur-xl border border-white/10 text-white pr-6 pl-5 py-3 rounded-full font-bold shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-slate-900 hover:scale-105 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-colors">
             <Calendar size={14} />
          </div>
          <span className="tracking-wide text-sm">Book a Call</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;