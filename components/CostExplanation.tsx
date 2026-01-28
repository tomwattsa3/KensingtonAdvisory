import React from 'react';
import { HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const CostExplanation: React.FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24 px-4 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-8 shadow-sm">
                    <HelpCircle size={28} />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 leading-[1.2]">
                    Wondering what it costs to set up your company in Dubai?
                </h2>
                
                <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed mx-auto lg:mx-0">
                    <p className="mb-4">
                        The honest answer? <strong>It depends.</strong>
                    </p>
                    <p className="mb-4">
                        With over <strong>40+ Free Zones</strong> across the UAE, costs vary significantly based on your specific business activity, how many visas you require, and which jurisdiction best fits your long-term goals.
                    </p>
                    <p>
                        Picking the wrong Free Zone based on a "cheap headline price" can cost you thousands in unnecessary fees or limit your business operations later.
                    </p>
                </div>

                <button 
                    onClick={scrollToBooking}
                    className="bg-navy-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-navy-800 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto lg:mx-0 group"
                >
                    Book a Free strategy call <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
            </div>

            {/* Right: Visual/List Box */}
            <div className="flex-1 w-full lg:w-auto">
                <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />

                    <h3 className="text-navy-900 font-bold text-xl mb-8 flex items-center gap-2">
                        <span className="w-2 h-8 bg-brand-purple rounded-full"></span>
                        What determines your price?
                    </h3>
                    
                    <ul className="space-y-5">
                        <ListItem text="Free Zone Jurisdiction (Dubai vs. Northern Emirates)" />
                        <ListItem text="Number of Residence Visas Required" />
                        <ListItem text="Business Activity Type (Commercial vs. Service)" />
                        <ListItem text="Office Space or Flexi-desk Requirements" />
                        <ListItem text="Medical Insurance & Emirates ID Fees" />
                    </ul>
                    
                    <div className="mt-10 pt-6 border-t border-slate-200">
                        <p className="text-slate-500 text-sm font-medium italic">
                            "We go over all these options on your call to find the most cost-effective setup for you."
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-4">
        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0 mt-0.5">
            <CheckCircle2 className="text-brand-purple" size={14} />
        </div>
        <span className="text-slate-700 font-semibold">{text}</span>
    </div>
);

export default CostExplanation;