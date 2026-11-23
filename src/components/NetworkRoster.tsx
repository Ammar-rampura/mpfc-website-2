import React from 'react';
import { ArrowUpRight, Truck, Navigation, ShieldCheck } from 'lucide-react';

interface NetworkItem {
  id: string;
  code: string;
  category: string;
  name: string;
  description: string;
  status: string;
  transitTime: string;
}

const NETWORK_DATA: NetworkItem[] = [
  {
    id: '01',
    code: 'CORR-01',
    category: 'CENTRAL & WESTERN CORRIDOR',
    name: 'Madhya Pradesh ⇄ Maharashtra & Gujarat',
    description: 'High-frequency bulk transport connecting industrial papermaking zones, raw kraft mills, and western port container freight terminals.',
    status: 'ACTIVE HIGH-THROUGHPUT',
    transitTime: '24-36 HRS',
  },
  {
    id: '02',
    code: 'CORR-02',
    category: 'NORTHERN INDUSTRIAL BELT',
    name: 'Madhya Pradesh ⇄ NCR & Haryana',
    description: 'Dedicated multi-axle carrier lanes feeding continuous box-making plants, corrugated packaging converters, and heavy consumer goods clusters.',
    status: 'ACTIVE DEDICATED',
    transitTime: '30-42 HRS',
  },
  {
    id: '03',
    code: 'CORR-03',
    category: 'SOUTHERN LOGISTICS ARTERY',
    name: 'Madhya Pradesh ⇄ Andhra Pradesh & Karnataka',
    description: 'Scheduled transit connecting pulp mills with southern manufacturing hubs, ensuring unbroken moisture protection for raw paper substrate rolls.',
    status: 'SCHEDULED REGULAR',
    transitTime: '36-48 HRS',
  },
  {
    id: '04',
    code: 'CORR-04',
    category: 'EASTERN HEAVY CORRIDOR',
    name: 'Madhya Pradesh ⇄ Chhattisgarh & Odisha',
    description: 'Heavy industrial machinery haulage, paper reel staging, and strategic buffer yard distribution connecting primary industrial producers.',
    status: 'CONTINUOUS FEED',
    transitTime: '24-36 HRS',
  },
];

export const NetworkRoster: React.FC = () => {
  return (
    <section 
      id="network" 
      className="relative w-full bg-[#FFFFFF] py-28 sm:py-36 px-6 sm:px-12 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D97316] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97316] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold">
                03 / LIVE CORRIDORS
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0F141A] tracking-tight">
              Connected by capability.
            </h2>
          </div>

          <div className="flex items-center space-x-4 bg-slate-50 border border-slate-200 px-4 py-3 rounded-2xl shadow-xs">
            <Navigation className="w-4 h-4 text-[#D97316] animate-pulse" />
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600">
              ALL INDIA NATIONAL PERMIT • <span className="text-emerald-600 font-semibold">GPS TRACKED</span>
            </div>
          </div>
        </div>

        {/* High-Tech Telematics Corridor Roster */}
        <div className="grid grid-cols-1 gap-4">
          {NETWORK_DATA.map((item) => (
            <div 
              key={item.id}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#D97316]/50 hover:shadow-md transition-all duration-300 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Column: Corridor Code & Category */}
              <div className="lg:w-1/4">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#D97316] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{item.status}</span>
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  {item.category}
                </span>
              </div>

              {/* Center Column: Route Name & Description */}
              <div className="lg:w-1/2">
                <h3 className="font-syne font-bold text-xl sm:text-2xl text-[#0F141A] group-hover:text-[#D97316] transition-colors tracking-tight flex items-center space-x-2 mb-2">
                  <span>{item.name}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Transit SLA & Arrow Button */}
              <div className="lg:w-1/4 flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t border-slate-100 lg:border-t-0">
                <div className="text-left lg:text-right">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block">ESTIMATED TRANSIT</span>
                  <span className="text-sm font-mono font-bold text-[#0F141A]">{item.transitTime}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-[#D97316] group-hover:border-[#D97316]/40 group-hover:bg-amber-500/10 transition-all flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Network Fleet Metrics Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-xs text-slate-700">
            <Truck className="w-5 h-5 text-[#D97316] flex-shrink-0" />
            <span>Dedicated carrier allocations available for high-tonnage monthly volume contracts.</span>
          </div>
          <div className="flex items-center space-x-6 text-xs font-mono uppercase tracking-wider text-[#D97316]">
            <span className="flex items-center space-x-1.5 text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Cargo In-Transit Cover</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">24/7 Driver Crew Control</span>
          </div>
        </div>

      </div>
    </section>
  );
};
