import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';

const ParallaxSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" data-id="v42emk6db" data-path="src/components/ParallaxSection.tsx">
      {/* Background Layers with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          y: scrollY * 0.5
        }} data-id="28m8cuw56" data-path="src/components/ParallaxSection.tsx" />

      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-indigo-900/80" data-id="jvrd4do5p" data-path="src/components/ParallaxSection.tsx" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-60"
        style={{ y: scrollY * -0.3 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="vsn4fjdku" data-path="src/components/ParallaxSection.tsx" />

      
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-pink-400 rounded-full opacity-50"
        style={{ y: scrollY * -0.4 }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }} data-id="tg4m61qbi" data-path="src/components/ParallaxSection.tsx" />


      <motion.div
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-cyan-400 rounded-full opacity-40"
        style={{ y: scrollY * -0.2 }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="5oajubiwz" data-path="src/components/ParallaxSection.tsx" />


      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center" data-id="or3czrsb6" data-path="src/components/ParallaxSection.tsx">
        <div className="container mx-auto px-4 text-center" data-id="0w8tuuzyu" data-path="src/components/ParallaxSection.tsx">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }} data-id="ye7ue20ew" data-path="src/components/ParallaxSection.tsx">

            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} data-id="40x10l0au" data-path="src/components/ParallaxSection.tsx">

              <Sparkles className="w-5 h-5 text-yellow-400" data-id="rc3tj1hb4" data-path="src/components/ParallaxSection.tsx" />
              <span className="text-white font-medium" data-id="3tv1o705b" data-path="src/components/ParallaxSection.tsx">Limited Time Offer</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }} data-id="3r88mcql9" data-path="src/components/ParallaxSection.tsx">

              Summer Sale
            </motion.h2>

            <motion.p
              className="text-2xl md:text-3xl text-purple-200 mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }} data-id="x17ghceoc" data-path="src/components/ParallaxSection.tsx">

              Up to 70% Off
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }} data-id="2i4ab0dw8" data-path="src/components/ParallaxSection.tsx">

              Don't miss out on our biggest sale of the year. Premium products at unbeatable prices.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }} data-id="yhwzr7n3r" data-path="src/components/ParallaxSection.tsx">

              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} data-id="ep67eytxs" data-path="src/components/ParallaxSection.tsx">

                <span className="relative z-10" data-id="hfhiztri2" data-path="src/components/ParallaxSection.tsx">Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" data-id="yzo7he2k7" data-path="src/components/ParallaxSection.tsx" />
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0"
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }} data-id="fcirtlnpq" data-path="src/components/ParallaxSection.tsx" />

              </motion.button>

              <motion.div
                className="text-white text-center"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} data-id="1xa9smtdh" data-path="src/components/ParallaxSection.tsx">

                <div className="text-3xl font-bold" data-id="0czr9oz9o" data-path="src/components/ParallaxSection.tsx">23:59:45</div>
                <div className="text-sm opacity-80" data-id="4ohm4dyi6" data-path="src/components/ParallaxSection.tsx">Time Remaining</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Particles */}
      {[...Array(8)].map((_, i) =>
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, -100, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }} data-id="c5255jsm8" data-path="src/components/ParallaxSection.tsx" />

      )}
    </section>);

};

export default ParallaxSection;