import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold increased slightly to avoid jitter at very top
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
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        State 1: Top Navigation 
        Visible when at the top of the page.
        Contains: Links, Centered "Let's Talk" button, Mobile Menu.
      */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-40 pt-8 flex justify-center
          transition-all duration-500 ease-in-out
          ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
        `}
      >
        <div className="w-full max-w-7xl px-8 relative flex items-center justify-between">
          
          {/* Left: Navigation Links - Removed as requested */}
          <div className="hidden md:flex items-center gap-6">
             {/* Empty div to maintain spacing preference if needed, or just removed content */}
          </div>

          {/* Center: "Let's Talk" Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button 
              onClick={scrollToBooking}
              className="bg-white hover:bg-slate-100 text-navy-900 rounded-full px-6 py-2.5 font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Let's Talk
            </button>
          </div>

          {/* Right: Mobile Menu Toggle */}
          <div className="flex items-center gap-2 ml-auto">
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-1">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* 
        State 2: Bottom Floating Pill 
        Visible when scrolled down.
        Migrates to bottom, becomes small, contains only "Book a Call".
      */}
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

      {/* Mobile Menu Dropdown (Only visible when at top) */}
      {mobileMenuOpen && !isScrolled && (
        <div className="fixed inset-x-4 top-24 z-40 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
           {['Why Dubai?'].map((item) => (
            <a key={item} href="#" className="text-white font-medium text-lg py-2 border-b border-white/10">
              {item}
            </a>
          ))}
          <button 
            onClick={scrollToBooking}
            className="bg-brand-cyan text-white w-full py-3 rounded-xl font-bold mt-2 shadow-lg shadow-cyan-500/20"
          >
            Free Strategy Call
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;