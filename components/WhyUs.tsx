import React from 'react';
import { Shield, Zap, Globe, TrendingUp, Check } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Sales Copy */}
            <div>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-brand-purple font-bold text-xs uppercase tracking-wider mb-8">
                  The Kensington Standard
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-brand-purple rounded-full flex items-center justify-center text-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4.18378C13.8655 4.5857 14.5463 5.38555 14.8569 6.31713C15.9323 6.04603 17 6.87784 17 7.96913V10H7V7.96913C7 6.87784 8.06772 6.04603 9.14312 6.31713C9.45369 5.38555 10.1345 4.5857 11 4.18378V3C11 2.44772 11.4477 2 12 2ZM11 11H13V16H15V18H13V20H15V22H11V11ZM9 8H15V9H9V8Z" />
                      <path d="M10 3.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 1.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
               </div>
               
               <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
                  You didn't build your business to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">pay 45% tax.</span>
               </h2>
               
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  The UK landscape has changed. Frozen thresholds, rising corporation tax, and aggressive compliance are punishing success. 
               </p>
               
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  At Kensington, we don't just file paperwork. We engineer your <strong>complete exit strategy</strong>. We bridge the gap between complex UK tax laws (SRT) and Dubai's streamlined efficiency, ensuring your move is 100% legal, compliant, and permanent.
               </p>

               <div className="flex flex-col gap-4 mb-8">
                  <BenefitRow text="UK Statutory Residence Test Guidance" />
                  <BenefitRow text="Corporate Banking Pre-Approval (Guaranteed)" />
                  <BenefitRow text="VIP Medical & Emirates ID Fast-Track" />
               </div>

               <p className="text-sm text-slate-400 italic">
                  *Join 500+ UK founders saving an average of £140k/year.
               </p>
            </div>
            
            {/* Right: Why Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               <Card 
                 icon={<Shield className="text-white" size={20} />}
                 color="bg-brand-purple"
                 title="Audit-Proof Exit"
                 desc="Leaving the UK tax net is harder than entering Dubai. We ensure your ties are cut correctly so HMRC can't touch you."
               />
               <Card 
                 icon={<Zap className="text-white" size={20} />}
                 color="bg-brand-cyan"
                 title="Rapid Execution"
                 desc="We operate at Dubai speed. Licenses in 48 hours. Residencies in < 15 days. We don't do 'waiting lists'."
               />
               <Card 
                 icon={<Globe className="text-white" size={20} />}
                 color="bg-brand-pink"
                 title="Hands-Off Setup"
                 desc="Don't fly until you have to. We handle the bureaucracy remotely while you wrap up your life in the UK."
               />
               <Card 
                 icon={<TrendingUp className="text-white" size={20} />}
                 color="bg-brand-green"
                 title="Founder Network"
                 desc="Instant access to our private community of UK expats in Dubai. Networking, golf days, and business support."
               />
            </div>
         </div>
      </div>
    </div>
  );
};

const BenefitRow = ({text}: {text: string}) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <Check size={14} className="text-green-600" />
    </div>
    <span className="text-navy-900 font-medium tracking-tight">{text}</span>
  </div>
)

interface CardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({icon, color, title, desc}) => (
  <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
     <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
        {icon}
     </div>
     <h3 className="font-bold text-navy-900 text-lg mb-2">{title}</h3>
     <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
)

export default WhyUs;