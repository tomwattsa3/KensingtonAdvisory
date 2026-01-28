import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-brand-purple rounded-full flex items-center justify-center text-white shadow-md">
                 {/* Custom Crown Key Logo */}
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4.18378C13.8655 4.5857 14.5463 5.38555 14.8569 6.31713C15.9323 6.04603 17 6.87784 17 7.96913V10H7V7.96913C7 6.87784 8.06772 6.04603 9.14312 6.31713C9.45369 5.38555 10.1345 4.5857 11 4.18378V3C11 2.44772 11.4477 2 12 2ZM11 11H13V16H15V18H13V20H15V22H11V11ZM9 8H15V9H9V8Z" />
                  <path d="M10 3.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 1.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-navy-900 font-bold text-lg tracking-wide uppercase">Kensington Advisory</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Helping UK entrepreneurs reclaim their profits and lifestyle in Dubai.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Business Setup</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Residency Visas</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Corporate Banking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Kensington Advisory. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">
            Designed for high performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-purple hover:border-brand-purple transition-all">
    {icon}
  </a>
);

export default Footer;