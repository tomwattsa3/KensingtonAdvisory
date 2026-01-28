import React from 'react';
import { FileCheck, Shield, Ban, Search, MessageSquare } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <section className="bg-navy-900 py-24 px-4 border-t border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-relaxed">
                    100% Transparent. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green">No Hidden Fees.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    The corporate services industry is famous for bait-and-switch pricing. <br className="hidden md:block"/>
                    We do things differently. Our reputation depends on it.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <FeatureCard 
                    icon={<Ban className="text-rose-400" size={28} />}
                    title="No Surprise Extras"
                    description="The quote we give you is the final price. We never add 'file opening fees', 'processing charges', or miscellaneous disbursements after you sign."
                />
                <FeatureCard 
                    icon={<FileCheck className="text-brand-cyan" size={28} />}
                    title="Original Gov. Receipts"
                    description="We believe in total clarity. You receive the original official government receipts for every transaction, so you see exactly where your money goes."
                />
                <FeatureCard 
                    icon={<Shield className="text-brand-purple" size={28} />}
                    title="No Forced Retainers"
                    description="We don't lock you into expensive monthly accounting or maintenance contracts. You own your company 100%, with no strings attached."
                />
                <FeatureCard 
                    icon={<MessageSquare className="text-amber-400" size={28} />}
                    title="Direct Team Access"
                    description="No generic support tickets or chatbots. You get a direct WhatsApp group with your dedicated formation experts for instant answers."
                />
            </div>
        </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-navy-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-navy-800 transition-colors duration-300 group">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
            {description}
        </p>
    </div>
);

export default Transparency;