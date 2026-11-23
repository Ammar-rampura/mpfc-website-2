import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Radio } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 h-[64px] z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F8F9FA]/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]' 
          : 'bg-[#F8F9FA]/50 backdrop-blur-md border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        
        {/* Left: Official MPFC Logo Badge */}
        <a 
          href="#" 
          className="group flex items-center space-x-3"
          aria-label="MPFC Home"
        >
          <div className="relative">
            <div className="bg-white px-2 py-1 rounded-md shadow-xs border border-slate-200/80 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/mpfc-logo.png" 
                alt="Madhya Pradesh Freight Carrier" 
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D97316]" />
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-syne font-extrabold text-sm tracking-wider text-[#0F141A]">MPFC</span>
              <span className="text-[10px] font-mono font-medium text-[#D97316] uppercase tracking-widest px-1.5 py-0.2 bg-amber-500/10 rounded border border-amber-500/20">FLEET</span>
            </div>
            <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase hidden sm:block">MADHYA PRADESH FREIGHT CARRIER</span>
          </div>
        </a>

        {/* Right Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-slate-600">
          <a 
            href="#about" 
            className="hover:text-[#D97316] transition-colors py-1 relative group flex items-center space-x-1"
          >
            <span>About</span>
            <span className="w-1 h-1 rounded-full bg-[#D97316] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="#capabilities" 
            className="hover:text-[#D97316] transition-colors py-1 relative group flex items-center space-x-1"
          >
            <span>Capabilities</span>
            <span className="w-1 h-1 rounded-full bg-[#D97316] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="#network" 
            className="hover:text-[#D97316] transition-colors py-1 relative group flex items-center space-x-1"
          >
            <span>Live Corridors</span>
            <span className="w-1 h-1 rounded-full bg-[#D97316] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="#journey" 
            className="hover:text-[#D97316] transition-colors py-1 relative group flex items-center space-x-1"
          >
            <span>History</span>
            <span className="w-1 h-1 rounded-full bg-[#D97316] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Luxury Pill CTA Button */}
          <a
            href="#contact"
            onClick={onContactClick}
            className="relative inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-[#0F141A] hover:border-[#D97316] hover:text-[#D97316] transition-all text-[11px] tracking-widest uppercase font-semibold shadow-xs group"
          >
            <Radio className="w-3 h-3 text-[#D97316] animate-pulse" />
            <span>DISPATCH DESK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D97316] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-black p-2 rounded-lg bg-white border border-slate-200"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 flex flex-col space-y-4 shadow-xl">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-700 hover:text-[#D97316]"
          >
            About Philosophy
          </a>
          <a 
            href="#capabilities" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-700 hover:text-[#D97316]"
          >
            Industrial Capabilities
          </a>
          <a 
            href="#network" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-700 hover:text-[#D97316]"
          >
            National Corridors
          </a>
          <a 
            href="#journey" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-widest text-slate-700 hover:text-[#D97316]"
          >
            The MPFC Journey
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97316] text-xs uppercase tracking-widest mt-2"
          >
            <span>CONNECT WITH DISPATCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D97316]" />
          </a>
        </div>
      )}
    </header>
  );
};
