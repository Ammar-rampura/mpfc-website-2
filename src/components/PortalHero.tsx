import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const PortalHero: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }

    const handleWheel = (e: WheelEvent) => {
      if (!isUnlocked) {
        e.preventDefault();
        const step = e.deltaY > 0 ? 0.045 : -0.045;
        setProgress((prev) => {
          const next = Math.max(0, Math.min(1, prev + step));
          if (next >= 0.99) {
            setIsUnlocked(true);
            return 1;
          }
          return next;
        });
      } else {
        if (window.scrollY <= 5 && e.deltaY < -15) {
          setIsUnlocked(false);
          setProgress(0.95);
        }
      }
    };

    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isUnlocked) {
        e.preventDefault();
        const currentY = e.touches[0].clientY;
        const diff = (startY - currentY) * 0.0035;
        startY = currentY;

        setProgress((prev) => {
          const next = Math.max(0, Math.min(1, prev + diff));
          if (next >= 0.99) {
            setIsUnlocked(true);
            return 1;
          }
          return next;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isUnlocked]);

  // Interpolations based strictly on progress (0 to 1):
  const splitFactor = Math.min(progress / 0.65, 1);
  const leftX = -splitFactor * 101;
  const rightX = splitFactor * 101;

  // Zoom into the real sunset truck photograph
  const zoomScale = 1.0 + progress * 0.22;
  const textOpacity = progress > 0.6 ? Math.max(0, 1 - (progress - 0.6) / 0.25) : 1;

  return (
    <section 
      id="portal-hero"
      className="relative w-full h-screen overflow-hidden bg-[#F8F9FA] select-none"
    >
      {/* 
        REAL CINEMATIC SUNSET TRUCK PHOTOGRAPHY (Light theme grade)
      */}
      <div 
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        style={{ 
          transform: `scale(${zoomScale})`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2600&q=85" 
          alt="Real MPFC Heavy Freight Transportation Truck at Sunset"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
          loading="eager"
        />
        {/* Subtle sunset gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* 
          OFFICIAL MPFC BADGE MOUNTED ON THE TRUCK SCENE
        */}
        <div 
          className="absolute bottom-14 left-6 sm:left-12 z-10 pointer-events-auto"
          style={{
            opacity: progress > 0.3 ? Math.min(1, (progress - 0.3) / 0.25) : 0,
            transform: `translateY(${progress > 0.3 ? 0 : 15}px)`,
            transition: 'opacity 0.25s, transform 0.25s'
          }}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-white/60 px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3.5 max-w-sm">
            <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-xs flex-shrink-0">
              <img 
                src="/mpfc-logo.png" 
                alt="MPFC" 
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-syne font-bold text-[#0F141A] tracking-wide">
                MADHYA PRADESH FREIGHT CARRIER
              </div>
              <div className="text-[10px] font-mono text-[#D97316] tracking-wider uppercase font-semibold">
                Heavy Industrial Fleet • Since 1998
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        CLEAN CORNER METADATA (High contrast pills)
      */}
      <div className="absolute inset-0 pointer-events-none z-30 p-6 sm:p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start pt-16">
          <div className="inline-flex items-center space-x-2 bg-[#0F141A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#EDE7DC] shadow-md">
            <span className="w-1.5 h-1.5 bg-[#D97316] rounded-full inline-block animate-pulse" />
            <span>INDUSTRIAL FLEET LOGISTICS</span>
          </div>
          
          <div className="bg-[#0F141A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#EDE7DC] shadow-md">
            EST. 1998
          </div>
        </div>

        <div className="flex justify-between items-end pb-3">
          <div className="hidden sm:inline-flex items-center space-x-2 bg-[#0F141A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#EDE7DC] shadow-md">
            <span>MADHYA PRADESH FREIGHT CARRIER</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-[#0F141A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#EDE7DC] shadow-md ml-auto">
            <span className="w-1.5 h-1.5 bg-[#0D9488] rounded-full inline-block" />
            <span>ALL INDIA PERMIT</span>
          </div>
        </div>
      </div>

      {/* 
        THE SPLIT PANELS & WORDMARK:
        Clean porcelain light panels touching with ZERO gap!
      */}
      <div className="absolute inset-0 z-20 pointer-events-none flex overflow-hidden">
        
        {/* LEFT PANEL */}
        <div 
          className="w-1/2 h-full bg-[#F8F9FA] relative flex items-center justify-end pr-0 shadow-[10px_0_25px_rgba(0,0,0,0.05)] border-r border-slate-200/40"
          style={{ 
            transform: `translateX(${leftX}%)`,
            transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* WORDMARK: MP */}
          <div 
            className="relative font-syne font-extrabold text-[13vw] leading-none text-[#0F141A] tracking-tight"
            style={{ 
              opacity: textOpacity,
              marginRight: '-0.015em',
              transition: 'opacity 0.2s'
            }}
          >
            MP
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div 
          className="w-1/2 h-full bg-[#F8F9FA] relative flex items-center justify-start pl-0 shadow-[-10px_0_25px_rgba(0,0,0,0.05)] border-l border-slate-200/40"
          style={{ 
            transform: `translateX(${rightX}%)`,
            transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* WORDMARK: FC */}
          <div 
            className="relative font-syne font-extrabold text-[13vw] leading-none text-[#0F141A] tracking-tight"
            style={{ 
              opacity: textOpacity,
              marginLeft: '-0.015em',
              transition: 'opacity 0.2s'
            }}
          >
            FC
          </div>
        </div>

      </div>

      {/* Scroll Instruction prompt */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center space-y-1.5"
        style={{ 
          opacity: progress > 0.1 ? 0 : 1,
          transition: 'opacity 0.3s'
        }}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-[#0F141A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white border border-white/15 shadow-md">
          SCROLL TO OPEN PORTAL
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[#D97316] animate-bounce" />
      </div>

      {/* Scroll unlock indicator */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 right-6 sm:right-10 z-30 pointer-events-none flex items-center space-x-2 bg-[#0F141A]/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 shadow-lg text-[11px] font-mono uppercase tracking-wider text-white"
          >
            <span>SCROLL DOWN TO EXPLORE</span>
            <ArrowDown className="w-3 h-3 text-[#D97316] animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
