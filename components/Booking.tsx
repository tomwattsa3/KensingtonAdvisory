import React from 'react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div id="booking" className="bg-slate-50 py-24 px-4 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Centered Above */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <Calendar className="text-brand-purple" size={16} />
                <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">Free Consultation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">
            Ready to <span className="text-brand-purple">Escape the UK?</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Book a free discovery call below. We'll analyze your business structure and show you exactly how much tax you can legally save.
            </p>
        </div>

        {/* Split Layout Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Left: Booking Calendar Widget */}
            <div className="lg:w-3/5 relative bg-white h-[600px] lg:h-auto">
                 {/* 
                    INSTRUCTIONS: 
                    Paste your booking widget HTML (iframe, script, etc) inside this div.
                    Ensure it takes up the full width/height or uses the container's styling.
                 */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center max-w-md mx-auto">
                        <p className="text-navy-900 font-bold text-xl mb-3">Booking Widget Placeholder</p>
                        <p className="text-slate-500 mb-6">
                            Paste your Calendly, HubSpot, or custom HTML booking code here.
                        </p>
                        <div className="bg-white p-3 rounded text-xs font-mono text-slate-500 break-all border border-slate-200">
                            &lt;!-- Your Calendar Iframe --&gt;
                        </div>
                    </div>
                 </div>
            </div>

            {/* Right: Contact Details (Darker) - Widened to 40% (2/5) */}
            <div className="lg:w-2/5 bg-navy-900 p-10 lg:p-16 xl:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Contact Details</h3>
                    <p className="text-slate-400 mb-10 text-sm">Prefer to email or visit us? Here is our direct info.</p>

                    <div className="space-y-8">
                        {/* Email */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple transition-colors duration-300">
                                <Mail size={18} className="text-white" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Email Us</p>
                                <a href="mailto:hello@kensingtonadvisory.com" className="text-base font-medium hover:text-brand-purple transition-colors whitespace-nowrap block">hello@kensingtonadvisory.com</a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan transition-colors duration-300">
                                <Phone size={18} className="text-white" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Call/WhatsApp</p>
                                <a href="tel:+971585925271" className="text-lg font-medium hover:text-brand-cyan transition-colors">+971 58 592 5271</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-pink transition-colors duration-300">
                                <MapPin size={18} className="text-white" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Visit HQ</p>
                                <p className="text-lg font-medium leading-snug">
                                    503 Mika Residence,<br />
                                    Production City, Dubai
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;