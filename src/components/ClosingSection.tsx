import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Phone, MapPin } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setFormSubmitted(true);
    }
  };

  return (
    <footer 
      id="contact" 
      className="relative w-full bg-[#FFFFFF] pt-28 sm:pt-36 overflow-hidden border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Editorial Closing Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-slate-200">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D97316] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97316] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold">
                05 / INQUIRY &amp; ENGAGEMENT
              </span>
            </div>
            
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#0F141A] tracking-tight leading-[1.08] mb-6">
              Let's move industry <br />
              <span className="text-[#D97316]">
                forward.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-xl mb-8">
              Have a bulk freight requirement, a regular packaging paper supply loop, or a corporate carrier contract worth exploring? Connect directly with our dispatch operations.
            </p>

            {/* Quick Contact Points */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-[#D97316] flex-shrink-0" />
                <span>Madhya Pradesh Freight Carrier Central Hub • All-India Permitted Operations</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
                <Phone className="w-4 h-4 text-[#D97316] flex-shrink-0" />
                <span>Direct Freight Desk: 24/7 Logistics Dispatch Support</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="bg-[#F8F9FA] border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-syne font-extrabold text-lg text-[#0F141A]">
                  INITIATE FREIGHT DIALOGUE
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              
              <p className="text-xs text-slate-500 mb-6 font-light">
                Connect directly with our materials transit desk for high-tonnage contract rates and fleet allocation.
              </p>

              {formSubmitted ? (
                <div className="flex items-center space-x-3 text-sm text-[#0F141A] bg-amber-500/10 border border-amber-500/40 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#D97316] flex-shrink-0" />
                  <span>Thank you. Your dispatch inquiry has been routed to our operations lead.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Corporate email address"
                      required
                      className="w-full bg-white border border-slate-200 focus:border-[#D97316] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0F141A] placeholder-slate-400 outline-none transition-colors shadow-2xs"
                    />
                  </div>

                  <div>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Direct phone / WhatsApp number"
                      className="w-full bg-white border border-slate-200 focus:border-[#D97316] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0F141A] placeholder-slate-400 outline-none transition-colors shadow-2xs"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#D97316] hover:bg-[#c2620f] text-white font-syne font-extrabold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow"
                    >
                      <span>SUBMIT INQUIRY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>PRIORITY DISPATCH RESPONSE: 24 HRS</span>
                <span className="text-[#D97316] font-semibold">VERIFIED CARRIER</span>
              </div>
            </div>
          </div>

        </div>

        {/* Fine-print Footer */}
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">
              <img src="/mpfc-logo.png" alt="MPFC" className="h-5 w-auto" />
            </div>
            <span className="font-syne font-bold text-sm text-[#0F141A]">MPFC</span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-mono text-slate-600">MADHYA PRADESH FREIGHT CARRIER</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] font-mono uppercase tracking-wider text-slate-500">
            <a href="#about" className="hover:text-[#D97316] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#D97316] transition-colors">Transit Terms</a>
            <a href="#contact" className="hover:text-[#D97316] transition-colors">National Permits</a>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            © {new Date().getFullYear()} MPFC. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>

      {/* Oversized Architectural Closing Wordmark */}
      <div 
        aria-hidden="true"
        className="w-full overflow-hidden select-none pointer-events-none mt-8 flex justify-center items-end"
      >
        <div className="font-syne font-extrabold text-[24vw] leading-[0.7] tracking-tighter text-[#0F141A]/[0.04] translate-y-[15%] transition-all duration-700 hover:text-[#D97316]/[0.08]">
          MPFC
        </div>
      </div>
    </footer>
  );
};
