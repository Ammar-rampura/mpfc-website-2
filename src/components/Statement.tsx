import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Gauge, Compass } from 'lucide-react';

export const Statement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotateVal = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const yVal = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative min-h-screen w-full bg-[#FFFFFF] py-24 sm:py-32 px-6 sm:px-12 flex items-center border-t border-slate-200/80 overflow-hidden"
    >
      {/* Background Index Watermark */}
      <div 
        aria-hidden="true"
        className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 font-syne font-extrabold text-[22vw] leading-none text-transparent select-none pointer-events-none opacity-[0.03]"
        style={{
          WebkitTextStroke: '2px #0F141A',
        }}
      >
        01
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Editorial Statement & Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D97316] w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97316] animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
              01 / OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="font-syne font-extrabold text-2xl sm:text-4xl md:text-5xl leading-[1.15] text-[#0F141A] tracking-tight mb-6">
            Industry moves forward when{' '}
            <span className="text-[#D97316] inline-block relative underline decoration-[#D97316]/30 underline-offset-6">
              precision meets purpose.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-10">
            At Madhya Pradesh Freight Carrier (MPFC), we believe that heavy industrial supply chains are won through uncompromising reliability, heavy-axle fleet capability, and continuous inter-state coordination.
          </p>

          {/* Feature Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#D97316]/50 transition-all shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#D97316] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-0.5">STANDARD</span>
              <span className="text-sm font-syne font-bold text-[#0F141A] block">Zero Defect Transit</span>
              <p className="text-[11px] text-slate-500 mt-1">Certified cargo securing for high-tonnage reels &amp; materials.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#D97316]/50 transition-all shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-[#0D9488] mb-3">
                <Gauge className="w-4 h-4" />
              </div>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-0.5">CAPACITY</span>
              <span className="text-sm font-syne font-bold text-[#0F141A] block">Heavy Haul Fleet</span>
              <p className="text-[11px] text-slate-500 mt-1">Multi-axle commercial carriers engineered for severe loads.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#D97316]/50 transition-all shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-200/60 flex items-center justify-center text-[#0F141A] mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-0.5">NETWORK</span>
              <span className="text-sm font-syne font-bold text-[#0F141A] block">National Corridors</span>
              <p className="text-[11px] text-slate-500 mt-1">Direct inter-state arterial routes with verified delivery.</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Circular Precision Visual */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
            style={{ y: yVal }}
          >
            <div className="absolute -inset-4 rounded-full border border-slate-300 border-dashed animate-[spin_50s_linear_infinite]" />
            <div className="absolute -inset-1.5 rounded-full border border-amber-500/20" />
            
            <motion.div 
              className="w-full h-full rounded-full overflow-hidden border-3 border-white shadow-xl relative group bg-slate-100"
              style={{ rotate: rotateVal }}
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
                alt="MPFC Heavy Freight Logistics Hub" 
                className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            <div className="absolute -bottom-2 -left-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#D97316] animate-pulse" />
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-slate-400 block leading-tight">STATUS</span>
                <span className="text-[11px] font-syne font-bold text-[#0F141A]">OPTIMAL DISPATCH</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
