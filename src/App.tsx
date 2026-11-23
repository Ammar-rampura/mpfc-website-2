import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { PortalHero } from './components/PortalHero';
import { Statement } from './components/Statement';
import { CapabilitiesDeck } from './components/CapabilitiesDeck';
import { NetworkRoster } from './components/NetworkRoster';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ClosingSection } from './components/ClosingSection';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#0F141A] selection:bg-[#D97316] selection:text-white font-sans">
      
      {/* Light Theme Splash Screen: MPFC builds up & fades seamlessly into hero */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Experience */}
      <main className="relative">
        {/* Section One: The Portal Hero overlay and staged reveal */}
        <PortalHero />

        {/* Section Two: The Philosophy Statement */}
        <Statement />

        {/* Section Three: Stacked Physical Throwable Capabilities Deck */}
        <CapabilitiesDeck />

        {/* Section Four: Connected by Capability Network Roster */}
        <NetworkRoster />

        {/* Section Five: Minimalist MPFC Journey Timeline */}
        <JourneyTimeline />
      </main>

      {/* Section Six: The Closing with Architectural Oversized Wordmark */}
      <ClosingSection />
    </div>
  );
}

export default App;
