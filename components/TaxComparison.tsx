import React from 'react';
import { Check, X, Calculator, Info, ArrowDown, ArrowRight } from 'lucide-react';

const TaxComparison: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <Calculator className="text-brand-purple" size={16} />
                <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">The Math Doesn't Lie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">
                UK vs Dubai: <span className="text-brand-purple">The Breakdown</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                See exactly where your money goes. <br className="hidden md:block"/>
                The difference isn't just a saving; it's a life-changing amount of capital.
            </p>
        </div>

        {/* Scenario Banner */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 text-center mb-6">
            <p className="text-slate-600 text-sm font-medium">
                Scenario: Annual Revenue <span className="text-navy-900 font-bold">£550,000</span> • Net Profit <span className="text-navy-900 font-bold">£240,000</span>
            </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            {/* UK Side (The Pain) */}
            <div className="p-8 md:p-12 bg-white rounded-2xl shadow-lg border border-slate-200 relative">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">🇬🇧</div>
                    <h3 className="text-2xl font-bold text-navy-900">UK Ltd Company</h3>
                </div>

                <div className="space-y-6">
                    <Row label="Annual Company Profit" value="£240,000" isHeader />

                    <div className="p-4 bg-red-50 rounded-xl border border-red-100 space-y-3">
                         <Row label="Corp Tax Rate" value="~25%" subtext="(Marginal relief applies)" />
                         <Row label="Corp Tax Paid" value="-£59,850" isNegative />
                    </div>

                    <Row label="Profit After Corp Tax" value="£180,150" />

                    <div className="p-4 bg-red-50 rounded-xl border border-red-100 space-y-3">
                         <Row label="Dividend Tax Rate" value="33.75% - 39.35%" subtext="(Personal allowance tapered)" />
                         <Row label="Dividend Tax Paid" value="-£54,353" isNegative />
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                        <Row label="Total Tax Paid" value="-£114,203" isTotalNegative />
                        <Row label="Net To You" value="£125,797" isLarge />
                        <div className="mt-2 text-right">
                            <span className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded">Effective Tax Rate: ~48%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dubai Side (The Gain) - Glows forward */}
            <div className="p-8 md:p-12 bg-white rounded-2xl border-2 border-brand-green relative overflow-hidden shadow-[0_0_15px_rgba(132,204,22,0.2),0_0_30px_rgba(132,204,22,0.1)] md:-translate-y-2 hover:-translate-y-3 transition-transform duration-300">
                {/* Subtle gradient background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-lg">🇦🇪</div>
                    <h3 className="text-2xl font-bold text-navy-900">Dubai (UAE) Company</h3>
                    <span className="ml-auto bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Winner</span>
                </div>

                <div className="space-y-6 relative z-10">
                    <Row label="Annual Company Profit" value="£240,000" isHeader />

                    <div className="p-4 bg-green-50 rounded-xl border border-green-100 space-y-3">
                         <Row label="Corp Tax Rate" value="0%" subtext="(Small Business Relief: Rev < £600k)" />
                         <Row label="Corp Tax Paid" value="£0" highlight />
                    </div>

                    <Row label="Profit After Corp Tax" value="£240,000" />

                    <div className="p-4 bg-green-50 rounded-xl border border-green-100 space-y-3">
                         <Row label="Dividend Tax Rate" value="0%" />
                         <Row label="Dividend Tax Paid" value="£0" highlight />
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                        <Row label="Total Tax Paid" value="£0" isTotalPositive />
                        <Row label="Net To You" value="£240,000" isLargeGreen />
                        <div className="mt-2 text-right">
                            <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-bold px-2 py-1 rounded">Effective Tax Rate: 0%</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Rules Explanation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RuleCard 
                title="Revenue Under £600k?"
                subtitle="Small Business Relief"
                description="If your business revenue is below approx £600,000 (AED 3M) in a single tax year, you qualify for Small Business Relief."
                highlight="You'll pay 0% in corporation tax"
                icon={<Check className="text-white" size={20} />}
                color="bg-brand-purple"
            />
             <RuleCard 
                title="Revenue Over £600k?"
                subtitle="Tax-Free Allowance"
                description="Even if you earn millions, you still get a generous tax-free allowance. You do not pay tax on the first £75,000 (AED 375k) of profit."
                highlight="You only pay 9% on profits ABOVE £75,000."
                icon={<ArrowDown className="text-white" size={20} />}
                color="bg-brand-cyan"
            />
        </div>

      </div>
    </div>
  );
};

const Row: React.FC<{
    label: string; 
    value: string; 
    isHeader?: boolean; 
    isNegative?: boolean; 
    isNegativeGreen?: boolean;
    isLarge?: boolean;
    isLargeGreen?: boolean;
    isTotalNegative?: boolean;
    isTotalPositive?: boolean;
    subtext?: string;
    highlight?: boolean;
}> = ({ label, value, isHeader, isNegative, isNegativeGreen, isLarge, isLargeGreen, isTotalNegative, isTotalPositive, subtext, highlight }) => (
    <div className={`flex justify-between items-baseline ${isHeader ? 'font-bold text-navy-900 border-b border-dashed border-slate-300 pb-2' : ''}`}>
        <div className="flex flex-col">
            <span className={`text-sm ${isLarge || isLargeGreen ? 'text-lg font-bold text-navy-900' : 'text-slate-600'}`}>{label}</span>
            {subtext && <span className="text-[10px] text-slate-400 font-medium">{subtext}</span>}
        </div>
        <span className={`
            font-mono font-medium
            ${isNegative ? 'text-red-500' : ''}
            ${isNegativeGreen ? 'text-emerald-600' : ''}
            ${isLarge ? 'text-2xl text-slate-900 font-extrabold' : ''}
            ${isLargeGreen ? 'text-3xl text-emerald-500 font-extrabold' : ''}
            ${isTotalNegative ? 'text-red-600 font-bold' : ''}
            ${isTotalPositive ? 'text-emerald-600 font-bold' : ''}
            ${highlight ? 'text-emerald-500 font-bold' : ''}
            ${!isNegative && !isNegativeGreen && !isLarge && !isLargeGreen && !isTotalNegative && !isTotalPositive && !highlight ? 'text-navy-900' : ''}
        `}>
            {value}
        </span>
    </div>
);

const RuleCard: React.FC<{title: string, subtitle: string, description: string, highlight: string, icon: React.ReactNode, color: string}> = ({title, subtitle, description, highlight, icon, color}) => (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
            {icon}
        </div>
        <div>
            <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${color === 'bg-brand-purple' ? 'text-brand-purple' : 'text-brand-cyan'}`}>{subtitle}</span>
            <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
            <div className="bg-slate-50 border-l-4 border-slate-300 pl-4 py-2">
                <p className="text-navy-900 font-bold text-sm italic">"{highlight}"</p>
            </div>
        </div>
    </div>
);

export default TaxComparison;