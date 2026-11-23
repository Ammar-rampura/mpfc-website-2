import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw, Layers, CheckCircle2 } from 'lucide-react';

interface CardItem {
  id: string;
  categoryNumber: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  specs: string[];
}

const CAPABILITIES_DATA: CardItem[] = [
  {
    id: '01',
    categoryNumber: '01',
    category: 'PAPER & REEL LOGISTICS',
    title: 'High-Density Kraft & Fluting Mediums',
    description: 'Precision transit for heavy industrial paper reels, corrugated medium substrates, and high-caliper virgin liners with zero roll distortion.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tag: 'PRODUCTION TRANSIT',
    specs: ['Custom Reel Cradles', 'Tarped Moisture Seal', 'Up to 35-Ton Payloads'],
  },
  {
    id: '02',
    categoryNumber: '02',
    category: 'HEAVY INDUSTRIAL FREIGHT',
    title: 'Multi-Axle Fleet & Long-Haul Haulage',
    description: 'Specialized prime mover fleet equipped with air suspension, high-torque tractor units, and reinforced trailers for industrial machinery and metals.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    tag: 'HEAVY FLEET',
    specs: ['Multi-Axle Configurations', 'GPS Telematics Monitored', 'Round-the-Clock Drivers'],
  },
  {
    id: '03',
    categoryNumber: '03',
    category: 'PACKAGING CONVERTER SUPPLY',
    title: 'Dedicated Mill-to-Plant Dispatch',
    description: 'Direct pipeline linking paper mills with high-throughput box converters, packaging plants, and industrial processing hubs across state borders.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tag: 'PLANT SUPPLY',
    specs: ['JIT Direct Feeding', 'Batch Verified Traceability', 'Emergency Line Replenishment'],
  },
  {
    id: '04',
    categoryNumber: '04',
    category: 'WAREHOUSING & STAGING',
    title: 'Strategic Buffer Staging Nodes',
    description: 'Secure regional holding facilities designed to insulate clients from volatility, protect critical continuous runs, and optimize demurrage.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    tag: 'STRATEGIC BUFFER',
    specs: ['Weatherproof Storage', 'High-Bay Stacking Capacity', 'Automated Inventory Logs'],
  },
  {
    id: '05',
    categoryNumber: '05',
    category: 'CORPORATE CONTRACTS',
    title: 'Institutional Annual Freight Frameworks',
    description: 'Long-term corporate agreements ensuring guaranteed carrier availability, fixed tariff structures, and accountable fleet priority year-round.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tag: 'B2B CONTRACTS',
    specs: ['Volume Price Indexing', 'Dedicated Account Managers', 'SLA Performance Guarantee'],
  },
];

export const CapabilitiesDeck: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>(CAPABILITIES_DATA);
  const activeCard = cards[0];

  const handleDismiss = (_direction: 'left' | 'right') => {
    if (cards.length === 0) return;
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handleReset = () => {
    setCards(CAPABILITIES_DATA);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleDismiss('right');
      if (e.key === 'ArrowLeft') handleDismiss('left');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cards]);

  return (
    <section 
      id="capabilities" 
      className="relative min-h-screen w-full bg-[#F8F9FA] py-28 sm:py-36 px-6 sm:px-12 border-t border-slate-200/80 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Header Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D97316] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97316] animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em]">
                02 / WHAT WE DO
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0F141A] tracking-tight">
              Industrial capability. <br />
              <span className="text-slate-400">One connected fleet.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-slate-600 font-normal leading-relaxed">
            Engineered specifically for heavy industrial shippers, paper mills, and packaging manufacturers across Madhya Pradesh and national corridors.
          </p>
        </div>

        {/* Stacked Throwable Card Deck Container */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[580px] md:min-h-[530px] flex items-center justify-center pt-4">
          <div className="relative w-full max-w-[540px] h-[520px] md:h-[490px]">
            {cards.slice(0, 3).map((item, index) => {
              const isTop = index === 0;
              const rotationDegree = index === 0 ? 0 : index === 1 ? -4 : 4;
              const scaleValue = 1 - index * 0.05;
              const translateY = index * 14;

              if (isTop) {
                return (
                  <DraggableCard 
                    key={item.id} 
                    item={item} 
                    onDismiss={handleDismiss} 
                  />
                );
              }

              return (
                <div 
                  key={item.id}
                  className="absolute inset-0 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 pointer-events-none"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scaleValue}) rotate(${rotationDegree}deg)`,
                    zIndex: 10 - index,
                    opacity: 0.85 - index * 0.25,
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono tracking-widest text-slate-400 font-semibold">
                      {item.categoryNumber} / 05
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#0D9488] bg-teal-50 border border-teal-200 px-3 py-1 rounded-full uppercase font-medium">
                      {item.tag}
                    </span>
                  </div>
                  
                  <div className="my-auto">
                    <h3 className="font-syne font-bold text-2xl text-[#0F141A] mb-2">{item.category}</h3>
                    <p className="text-xs text-slate-500">{item.title}</p>
                  </div>

                  <div className="w-full h-32 rounded-2xl overflow-hidden opacity-25 bg-slate-100">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Controls & Progress Indicators */}
        <div className="max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-8">
          <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97316] animate-ping" />
            <span>DRAG CARD HORIZONTALLY TO FLIP DECK</span>
          </div>

          <div className="flex items-center space-x-2">
            {CAPABILITIES_DATA.map((item) => {
              const isCurrent = activeCard && activeCard.id === item.id;
              return (
                <div 
                  key={item.id}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    isCurrent ? 'w-8 bg-[#D97316] shadow-xs' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Card ${item.categoryNumber}`}
                />
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleDismiss('left')}
              className="p-3.5 rounded-full border border-slate-300 bg-white hover:border-[#D97316] hover:text-[#D97316] text-[#0F141A] transition-all shadow-xs"
              aria-label="Previous capability card"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDismiss('right')}
              className="p-3.5 rounded-full border border-slate-300 bg-white hover:border-[#D97316] hover:text-[#D97316] text-[#0F141A] transition-all shadow-xs"
              aria-label="Next capability card"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-3.5 rounded-full border border-slate-200 bg-white hover:border-[#0D9488] hover:text-[#0D9488] text-slate-400 transition-all"
              title="Reset Deck"
              aria-label="Reset capability deck"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

interface DraggableCardProps {
  item: CardItem;
  onDismiss: (dir: 'left' | 'right') => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ item, onDismiss }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 0, 250], [-12, 0, 12]);
  const opacity = useTransform(x, [-220, -100, 0, 100, 220], [0.4, 0.95, 1, 0.95, 0.4]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 60) {
      onDismiss('right');
    } else if (info.offset.x < -60) {
      onDismiss('left');
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
      className="absolute inset-0 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-grab active:cursor-grabbing select-none z-20 touch-pan-y group"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-[#D97316]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F141A]">
            {item.categoryNumber} / 05 — {item.category}
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[#0D9488] bg-teal-50 border border-teal-200 px-3 py-1 rounded-full uppercase font-medium">
          {item.tag}
        </span>
      </div>

      <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden my-3 border border-slate-100 group bg-slate-100">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div>
        <h3 className="font-syne font-bold text-xl sm:text-2xl text-[#0F141A] tracking-tight mb-2 flex items-center justify-between">
          <span>{item.title}</span>
          <ArrowUpRight className="w-5 h-5 text-[#D97316] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>

        {/* Feature Specs Badges */}
        <div className="flex flex-wrap gap-1.5">
          {item.specs.map((spec, sIdx) => (
            <span key={sIdx} className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 rounded-md flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-[#D97316]" />
              <span>{spec}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-wider">
        <span className="flex items-center space-x-1.5 text-[#D97316] font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>SWIPE TO DISMISS</span>
        </span>
        <span className="text-[#0F141A] font-semibold">MADHYA PRADESH FREIGHT CARRIER</span>
      </div>
    </motion.div>
  );
};
