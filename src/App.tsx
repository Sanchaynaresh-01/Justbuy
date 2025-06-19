import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import LoaderScreen from '@/components/LoaderScreen';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ProductGallery from '@/components/ProductGallery';
import ServiceCards from '@/components/ServiceCards';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import PartnerLogos from '@/components/PartnerLogos';
import StatsVisualization from '@/components/StatsVisualization';
import ParallaxSection from '@/components/ParallaxSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import StatsCounter from '@/components/StatsCounter';
import ShowcasePortfolio from '@/components/ShowcasePortfolio';
import NewsletterPopup from '@/components/NewsletterPopup';
import Footer from '@/components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider data-id="8sl8w0kx4" data-path="src/App.tsx">
      <div className="min-h-screen gradient-bg-organic transition-all duration-700" data-id="7y5e1npwr" data-path="src/App.tsx">
        <AnimatePresence mode="wait" data-id="k1m03toeh" data-path="src/App.tsx">
          {isLoading ?
          <LoaderScreen key="loader" onLoadingComplete={handleLoadingComplete} data-id="z1v1k89on" data-path="src/App.tsx" /> :

          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative" data-id="p4syqdpdc" data-path="src/App.tsx">

              {/* Organic background elements */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" data-id="yfd1cyvej" data-path="src/App.tsx">
                <motion.div
                className="absolute -top-1/2 -right-1/2 w-full h-full bg-organic-coral/5 animate-morph"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} data-id="y02k03q7b" data-path="src/App.tsx" />

                <motion.div
                className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-organic-teal/5 animate-wave"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }} data-id="24l0yb4uq" data-path="src/App.tsx" />

              </div>

              <div className="relative z-10" data-id="g5iu4zlz5" data-path="src/App.tsx">
                <Navbar data-id="6sj5asn3y" data-path="src/App.tsx" />
                <main className="relative" data-id="npi4z1tbb" data-path="src/App.tsx">
                  <HeroCarousel data-id="glp094wjx" data-path="src/App.tsx" />
                  <ProductGallery data-id="y1m0y2nh9" data-path="src/App.tsx" />
                  <ServiceCards data-id="uiiu0jlmj" data-path="src/App.tsx" />
                  <InteractiveFeatures data-id="dxjuzn7ab" data-path="src/App.tsx" />
                  <PartnerLogos data-id="g1agedt5g" data-path="src/App.tsx" />
                  <StatsVisualization data-id="j3e7i2s77" data-path="src/App.tsx" />
                  <ParallaxSection data-id="zmarkv6p8" data-path="src/App.tsx" />
                  <TestimonialsSlider data-id="qwo93bq7c" data-path="src/App.tsx" />
                  <StatsCounter data-id="31r4hxrpp" data-path="src/App.tsx" />
                  <ShowcasePortfolio data-id="swc8kpmbr" data-path="src/App.tsx" />
                </main>
                <Footer data-id="34am3tpwn" data-path="src/App.tsx" />
                <NewsletterPopup data-id="z7l5ht3xf" data-path="src/App.tsx" />
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </ThemeProvider>);

}

export default App;