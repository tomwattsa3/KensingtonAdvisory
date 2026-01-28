import React from 'react';
import { FileText, Building, Plane, CreditCard, ChevronRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <div className="bg-slate-800 py-24 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Background decoration for depth */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Your 30-Day <span className="text-brand-purple">Escape Plan</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Bureaucracy is boring. We made it linear, predictable, and honestly, kind of fast.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm whitespace-nowrap hidden md:block">
            <span className="text-slate-300 font-medium mr-2">Avg. Completion:</span>
            <span className="text-white font-bold">28 Days</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Dotted Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full border-t-[3px] border-dotted border-white/10 -z-10" />

          {/* Card 1 */}
          <ProcessCard 
            icon={<FileText size={24} className="text-white" />}
            iconBg="bg-brand-purple"
            days="DAY 1-2"
            title="The Blueprint"
            description="We chat, we plan. We pick your Free Zone and handle the paperwork while you finish your tea in London."
            badgeColor="bg-brand-purple"
            glowColor="bg-brand-purple"
          />

          {/* Card 2 */}
          <ProcessCard 
            icon={<Building size={24} className="text-white" />}
            iconBg="bg-brand-cyan"
            days="DAY 5-10"
            title="It's Official"
            description="Application submitted. License issued. You legally own a Dubai company without even stepping on a plane."
            badgeColor="bg-brand-cyan"
            glowColor="bg-brand-cyan"
          />

          {/* Card 3 */}
          <ProcessCard 
            icon={<Plane size={24} className="text-white" />}
            iconBg="bg-brand-pink"
            days="DAY 12-15"
            title="Touchdown Dubai"
            description="You arrive. VIP chauffeur to medicals. Emirates ID biometrics done. It's fast, efficient, and air-conditioned."
            badgeColor="bg-brand-pink"
            glowColor="bg-brand-pink"
          />

           {/* Card 4 - Celebratory */}
           <ProcessCard 
            icon={<CreditCard size={24} className="text-white" />}
            iconBg="bg-brand-green"
            days="DAY 20-28"
            title="Open for Business"
            description="Emirates ID in hand, we unlock your bank accounts. You are now fully operational and officially tax-free."
            badgeColor="bg-brand-green"
            glowColor="bg-brand-green"
            isCelebratory={true}
          />
        </div>

        {/* Slider Navigation (Visual Only for this demo) */}
        <div className="flex justify-end gap-2 mt-8 md:hidden">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500">
                <ChevronRight className="rotate-180" size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center text-white shadow-lg">
                <ChevronRight size={20} />
            </div>
        </div>

      </div>
    </div>
  );
};

interface ProcessCardProps {
  icon: React.ReactNode;
  iconBg: string; // Tailwind color class
  days: string;
  title: string;
  description: string;
  badgeColor: string; // Tailwind color class for the pill
  isCelebratory?: boolean;
  glowColor: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, iconBg, days, title, description, badgeColor, isCelebratory, glowColor }) => {
  return (
    <div className="relative group h-full">
      {/* Glow Effect */}
      <div className={`absolute -inset-1 ${glowColor} rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500`}></div>
      
      <div className={`relative bg-white rounded-3xl p-8 shadow-xl border border-transparent hover:border-slate-200 flex flex-col h-full overflow-hidden ${isCelebratory ? 'ring-4 ring-brand-green/20' : ''}`}>
        
        {isCelebratory && <ConfettiOverlay />}

        <div className="relative z-10 flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg shadow-black/10`}>
            {icon}
          </div>
          <span className={`${badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
            {days}
          </span>
        </div>
        
        <h3 className="relative z-10 text-xl font-bold text-navy-900 mb-3">{title}</h3>
        <p className="relative z-10 text-slate-500 text-sm leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

const ConfettiOverlay: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Top Left Cluster */}
    <div className="absolute top-2 left-4 w-2 h-2 bg-brand-purple rounded-full opacity-60"></div>
    <div className="absolute top-8 left-2 w-3 h-1 bg-brand-cyan -rotate-45 opacity-60"></div>
    <div className="absolute top-4 left-10 w-1.5 h-1.5 bg-brand-pink rotate-12 opacity-60"></div>

    {/* Top Right Cluster */}
    <div className="absolute top-3 right-5 w-2 h-2 bg-brand-green rounded-full opacity-60"></div>
    <div className="absolute top-6 right-2 w-3 h-1 bg-brand-purple rotate-45 opacity-60"></div>
    
    {/* Floating Mid */}
    <div className="absolute top-1/3 right-8 w-1 h-1 bg-brand-cyan rounded-full opacity-40"></div>
    <div className="absolute top-1/4 left-1/2 w-2 h-2 border border-brand-pink rounded-full opacity-50"></div>

    {/* Bottom Gradient Fade for subtle joy */}
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent"></div>
  </div>
);

export default Process;