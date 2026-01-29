import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "James Thorne",
    role: "SaaS Founder",
    from: "London",
    text: "I was terrified of the paperwork. Kensington made the transition invisible. I didn't lose a single day of productivity, and the tax savings paid for the service in month one.",
    initials: "JT",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    name: "Sarah Jenkins",
    role: "E-commerce Director",
    from: "Manchester",
    text: "The 0% tax headline is real, but the lifestyle upgrade is what actually keeps me here. Kensington handled the visa, the bank, everything. I just had to show up.",
    initials: "SJ",
    gradient: "from-brand-pink to-rose-500"
  },
  {
    name: "David Ross",
    role: "Crypto Consultant",
    from: "Bristol",
    text: "Bureaucracy is my nightmare. They handled literally everything. I walked into the medical center like a VIP and picked up my Emirates ID 2 days later.",
    initials: "DR",
    gradient: "from-brand-cyan to-teal-400"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-navy-900 py-24 relative overflow-hidden">
        
        {/* Background blobs for depth */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                    <CheckCircle2 className="text-brand-green" size={14} />
                    <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider">Trusted by 500+ Founders</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Don't just take our <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Word for it.</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    We've helped hundreds of UK entrepreneurs escape the rain and the taxman. Here is what they have to say about the move.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="group bg-navy-800/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-navy-800/60 flex flex-col h-full">
                        
                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        
                        {/* Quote Content */}
                        <div className="relative mb-8 flex-grow">
                           <Quote className="absolute -top-3 -left-2 text-white/5 rotate-180 scale-150 transition-transform group-hover:scale-125" size={40} />
                           <p className="text-slate-300 leading-relaxed relative z-10 font-light text-lg">
                             "{t.text}"
                           </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                {t.initials}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-wide">{t.name}</h4>
                                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t.role} • <span className="text-slate-600">Ex-{t.from}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  );
};

export default Testimonials;