import React from 'react';
import { CheckCircle } from 'lucide-react';

interface MilestoneItem {
  year: string;
  phase: string;
  milestone: string;
  description: string;
  metrics: string;
}

const JOURNEY_DATA: MilestoneItem[] = [
  {
    year: '1998',
    phase: 'FOUNDATION ERA',
    milestone: 'Inception of Regional Heavy Haulage',
    description: 'Establishment of baseline material logistics and industrial freight operations in Madhya Pradesh, specializing in raw paper substrates and industrial goods.',
    metrics: 'Initial Central Depot & Regional Permit',
  },
  {
    year: '2008',
    phase: 'EXPANSION PHASE',
    milestone: 'Multi-Axle Fleet & Direct Mill Pipeline',
    description: 'Scale integration of dedicated heavy carrier trailers designed for bulk paper reels, eliminating transit distortion and establishing direct converter delivery lines.',
    metrics: 'All-India National Permit Corridors',
  },
  {
    year: '2018',
    phase: 'SPECIALIZATION',
    milestone: 'Advanced Telematics & Converter Logistics',
    description: 'Fleet-wide integration of real-time GPS tracking, round-the-clock dispatch nodes, and formal SLA covenants with major industrial packaging manufacturers.',
    metrics: '99.4% On-Time Delivery Benchmark',
  },
  {
    year: 'PRESENT',
    phase: 'SCALE EXCELLENCE',
    milestone: 'Integrated Industrial Freight Backbone',
    description: 'Execution of long-term commercial supply security, seamless multi-state corridor transit, and institutional partnerships powering manufacturing.',
    metrics: 'Continuous Pan-India Freight Coverage',
  },
];

export const JourneyTimeline: React.FC = () => {
  return (
    <section 
      id="journey" 
      className="relative w-full bg-[#F8F9FA] py-28 sm:py-36 px-6 sm:px-12 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D97316] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97316] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold">
                04 / THE MPFC JOURNEY
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0F141A] tracking-tight">
              Progress is built over time.
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-xs">
            MADHYA PRADESH FREIGHT CARRIER • CHRONICLE
          </div>
        </div>

        {/* High-Tech Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNEY_DATA.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#D97316]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Year Header & Accent */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <span className="font-syne font-extrabold text-3xl text-[#0F141A] group-hover:text-[#D97316] transition-colors">
                    {item.year}
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#D97316] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.phase}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-syne font-bold text-lg text-[#0F141A] mb-3 leading-snug">
                  {item.milestone}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Verified Metric Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-[10px] font-mono text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate">{item.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center space-x-3 text-xs text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#D97316] animate-pulse" />
            <span>Over 25 years of uncompromised heavy transport reliability across industrial corridors.</span>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-[#D97316] uppercase font-semibold">
            CONTINUOUS OPERATIONAL SCALING
          </span>
        </div>

      </div>
    </section>
  );
};
