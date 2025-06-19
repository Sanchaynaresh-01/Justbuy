import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Zap, Heart } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    id: 1,
    title: "Creative Design Studio",
    subtitle: "Where imagination meets innovation in digital artistry",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Start Creating",
    icon: Sparkles,
    gradient: "from-organic-coral to-organic-gold"
  },
  {
    id: 2,
    title: "Fluid Experiences",
    subtitle: "Crafting seamless user journeys with organic design principles",
    image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Explore Flow",
    icon: Zap,
    gradient: "from-organic-teal to-organic-blue"
  },
  {
    id: 3,
    title: "Passionate Craft",
    subtitle: "Every pixel placed with purpose, every interaction designed with love",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cta: "Feel the Magic",
    icon: Heart,
    gradient: "from-organic-lavender to-organic-purple"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section id="home" className="relative h-screen overflow-hidden" data-id="2vr3fb5ps" data-path="src/components/HeroCarousel.tsx">
      {/* Background with organic movement */}
      <AnimatePresence mode="wait" data-id="ujqzsqai5" data-path="src/components/HeroCarousel.tsx">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.2, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: -2 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} data-id="njq8151cp" data-path="src/components/HeroCarousel.tsx">

          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlideData.image})` }}
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="326a4nfli" data-path="src/components/HeroCarousel.tsx" />


          {/* Organic overlay with flowing gradients */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-organic-charcoal/60 via-organic-charcoal/40 to-transparent"
            animate={{
              background: [
              "linear-gradient(135deg, rgba(44, 62, 80, 0.6) 0%, rgba(44, 62, 80, 0.4) 50%, transparent 100%)",
              "linear-gradient(135deg, rgba(255, 107, 107, 0.3) 0%, rgba(78, 205, 196, 0.2) 50%, transparent 100%)",
              "linear-gradient(135deg, rgba(44, 62, 80, 0.6) 0%, rgba(44, 62, 80, 0.4) 50%, transparent 100%)"]

            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="2886f24tk" data-path="src/components/HeroCarousel.tsx" />

        </motion.div>
      </AnimatePresence>

      {/* Floating organic elements */}
      <div className="absolute inset-0 pointer-events-none" data-id="cpmudylub" data-path="src/components/HeroCarousel.tsx">
        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className={`absolute w-4 h-4 bg-white/10 animate-morph`}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i % 3 * 30}%`
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }} data-id="e380uzlqp" data-path="src/components/HeroCarousel.tsx" />

        )}
      </div>

      <div className="relative z-10 h-full flex items-center" data-id="ddd1waxnr" data-path="src/components/HeroCarousel.tsx">
        <div className="container-organic" data-id="wz4stvsuc" data-path="src/components/HeroCarousel.tsx">
          <div className="max-w-4xl" data-id="3g8ujs338" data-path="src/components/HeroCarousel.tsx">
            {/* Organic icon */}
            <motion.div
              key={`icon-${currentSlide}`}
              className={`w-20 h-20 bg-gradient-to-r ${currentSlideData.gradient} rounded-organic-lg flex items-center justify-center mb-8 shadow-organic-strong animate-morph`}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                damping: 12
              }}
              whileHover={{
                rotate: 360,
                scale: 1.1
              }} data-id="2efc3xs4t" data-path="src/components/HeroCarousel.tsx">
              <IconComponent className="w-10 h-10 text-white animate-breathe" data-id="rwkldgnk0" data-path="src/components/HeroCarousel.tsx" />
            </motion.div>

            <motion.h1
              key={`title-${currentSlide}`}
              className="text-6xl md:text-8xl font-bold text-white mb-6 heading-organic text-shadow-lg-organic"
              initial={{ y: 80, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }} data-id="j2kx23gug" data-path="src/components/HeroCarousel.tsx">
              {currentSlideData.title.split(' ').map((word, i) =>
              <motion.span
                key={i}
                className="inline-block mr-4"
                animate={{
                  color: [
                  "#FFFFFF",
                  "#FF6B6B",
                  "#4ECDC4",
                  "#FFD93D",
                  "#FFFFFF"]

                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }} data-id="e1qyhsbdx" data-path="src/components/HeroCarousel.tsx">
                  {word}
                </motion.span>
              )}
            </motion.h1>
            
            <motion.p
              key={`subtitle-${currentSlide}`}
              className="text-2xl md:text-3xl text-white/90 mb-12 body-organic leading-relaxed"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }} data-id="ahmqqc83e" data-path="src/components/HeroCarousel.tsx">
              {currentSlideData.subtitle}
            </motion.p>
            
            <motion.div
              key={`cta-${currentSlide}`}
              className="flex flex-col sm:flex-row gap-6"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }} data-id="utbsbouix" data-path="src/components/HeroCarousel.tsx">

              <motion.button
                className={`btn-primary-organic text-xl px-12 py-5 text-white relative overflow-hidden group`}
                style={{
                  background: `linear-gradient(135deg, var(--primary-coral), var(--primary-gold))`
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 100px rgba(255, 107, 107, 0.4)"
                }}
                whileTap={{ scale: 0.95 }} data-id="l9cj4wi9a" data-path="src/components/HeroCarousel.tsx">

                <span className="relative z-10 flex items-center mono-organic font-bold" data-id="cz9042k71" data-path="src/components/HeroCarousel.tsx">
                  {currentSlideData.cta}
                  <IconComponent className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" data-id="cne5e08k6" data-path="src/components/HeroCarousel.tsx" />
                </span>
                
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, borderRadius: "50%" }}
                  whileHover={{
                    scale: 1,
                    borderRadius: "24px",
                    opacity: 1
                  }}
                  transition={{ duration: 0.4 }} data-id="oit1rampd" data-path="src/components/HeroCarousel.tsx" />
              </motion.button>
              
              <motion.button
                className="glass-organic text-white px-12 py-5 text-xl font-semibold hover:bg-white/20 transition-all duration-500 rounded-organic-lg shadow-organic-soft border-2 border-white/30 hover:border-white/50"
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }} data-id="jnt6bniiy" data-path="src/components/HeroCarousel.tsx">
                Discover More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Organic navigation buttons */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 glass-organic hover:bg-white/20 text-white p-4 rounded-organic-lg backdrop-blur-organic z-20 shadow-organic-soft border border-white/20"
        whileHover={{
          scale: 1.1,
          x: -5
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }} data-id="l8odafc1q" data-path="src/components/HeroCarousel.tsx">
        <ChevronLeft className="w-8 h-8 animate-wave" data-id="45tr08eh2" data-path="src/components/HeroCarousel.tsx" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 glass-organic hover:bg-white/20 text-white p-4 rounded-organic-lg backdrop-blur-organic z-20 shadow-organic-soft border border-white/20"
        whileHover={{
          scale: 1.1,
          x: 5
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }} data-id="qh5vb3l3c" data-path="src/components/HeroCarousel.tsx">
        <ChevronRight className="w-8 h-8 animate-wave" data-id="jft2d1xta" data-path="src/components/HeroCarousel.tsx" />
      </motion.button>

      {/* Organic slide indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20" data-id="jcl1kf8yc" data-path="src/components/HeroCarousel.tsx">
        {slides.map((slide, index) =>
        <motion.button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`relative overflow-hidden transition-all duration-500 ${
          currentSlide === index ?
          'w-12 h-4 bg-gradient-organic-sunset rounded-organic' :
          'w-4 h-4 bg-white/40 rounded-full hover:bg-white/60'}`
          }
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 + index * 0.1 }} data-id="bvbl3hry8" data-path="src/components/HeroCarousel.tsx">
            
            {currentSlide === index &&
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-organic"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }} data-id="ort7gzdzw" data-path="src/components/HeroCarousel.tsx" />

          }
          </motion.button>
        )}
      </div>

      {/* Organic scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 text-white/60 text-center"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="dtcl3f9og" data-path="src/components/HeroCarousel.tsx">
        <div className="w-1 h-16 bg-gradient-organic-sunset rounded-full mx-auto mb-2 opacity-60" data-id="lnbrtnk0q" data-path="src/components/HeroCarousel.tsx" />
        <p className="text-sm mono-organic" data-id="tj9o8qjqy" data-path="src/components/HeroCarousel.tsx">Scroll</p>
      </motion.div>
    </section>);

};

export default HeroCarousel;