import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f172a] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      
      {/* Background Gradients - Midnight Blue Theme */}
      {/* A deep radial gradient that keeps the center slightly illuminated */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#020617] pointer-events-none" />
      
      {/* Organic Glow Blobs - Subtle and Deep */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />


      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Heading - Adjusted margin top since pill is gone */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-[1.65] drop-shadow-xl mt-8 px-2">
          Helping UK Founders Set Up <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 animate-gradient-x">
             Their Business & Relocate To Dubai
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-400 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light px-2">
          Stop paying 50% tax. Relocate your operations to a Dubai Free Zone, keep your profits, and enjoy the sun.
        </p>

        {/* Main Call To Action (Below Video) */}
        <button 
          onClick={scrollToBooking}
          className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:bg-slate-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse-slow"
        >
          Book a Free Strategy Call <ArrowRight size={20} />
        </button>

      </div>

       {/* Features Grid */}
       <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4 mt-24">
        <FeaturePill 
          icon={<Zap className="text-amber-300" size={20} />} 
          text="0% Tax on Dividends" 
        />
        <FeaturePill 
          icon={<ShieldCheck className="text-emerald-300" size={20} />} 
          text="100% Ownership" 
        />
        <FeaturePill 
          icon={<Star className="text-purple-300" size={20} />} 
          text="Full Residency" 
        />
      </div>

    </div>
  );
};

interface FeaturePillProps {
  icon: React.ReactNode;
  text: string;
}

const FeaturePill: React.FC<FeaturePillProps> = ({ icon, text }) => (
  <div className="bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg hover:bg-slate-800/60 transition-all cursor-default group">
    <div className="group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      {icon}
    </div>
    <span className="text-slate-300 font-semibold tracking-wide">{text}</span>
  </div>
);

export default Hero;