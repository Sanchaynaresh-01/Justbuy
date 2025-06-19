import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderScreenProps {
  onLoadingComplete: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const text = "CREATING...";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 3;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-organic-cosmic flex items-center justify-center z-50 overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ backgroundSize: '400% 400%' }} data-id="lr9l7rgiz" data-path="src/components/LoaderScreen.tsx">

      {/* Organic background shapes */}
      <div className="absolute inset-0" data-id="dp78q6ukm" data-path="src/components/LoaderScreen.tsx">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-organic-coral/20 animate-morph"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }} data-id="fmwpc2wh1" data-path="src/components/LoaderScreen.tsx" />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-organic-teal/20 animate-wave"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
            x: [0, -80, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }} data-id="0odrg5aoy" data-path="src/components/LoaderScreen.tsx" />

        <motion.div
          className="absolute top-3/4 left-1/2 w-32 h-32 bg-organic-gold/30 rounded-full animate-breathe"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -120, 0],
            y: [0, -80, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="tndt63us7" data-path="src/components/LoaderScreen.tsx" />

      </div>

      <div className="text-center relative z-10" data-id="oavnf14iv" data-path="src/components/LoaderScreen.tsx">
        {/* Organic logo/icon */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10
          }} data-id="5nfdmn00m" data-path="src/components/LoaderScreen.tsx">
          <motion.div
            className="w-24 h-24 bg-gradient-organic-sunset rounded-organic-lg flex items-center justify-center shadow-organic-strong animate-morph"
            whileHover={{ rotate: 360 }}
            animate={{
              boxShadow: [
              "0 0 40px rgba(255, 107, 107, 0.3)",
              "0 0 60px rgba(78, 205, 196, 0.4)",
              "0 0 40px rgba(255, 217, 61, 0.3)"]

            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} data-id="lvhhij84i" data-path="src/components/LoaderScreen.tsx">
            <motion.svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }} data-id="y07o4a38q" data-path="src/components/LoaderScreen.tsx">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" data-id="yne32hrx1" data-path="src/components/LoaderScreen.tsx" />

            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Animated text */}
        <div className="mb-12" data-id="nu8dn0hp8" data-path="src/components/LoaderScreen.tsx">
          {text.split('').map((char, index) =>
          <motion.span
            key={index}
            className="text-6xl md:text-7xl font-bold text-white inline-block heading-organic text-shadow-lg-organic"
            initial={{ opacity: 0, y: 80, rotateX: -90 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              color: [
              "#FFFFFF",
              "#FF6B6B",
              "#4ECDC4",
              "#FFD93D",
              "#FFFFFF"]

            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              color: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} data-id="v439kjbnl" data-path="src/components/LoaderScreen.tsx">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          )}
        </div>
        
        {/* Organic progress bar */}
        <div className="w-80 h-3 bg-white/20 rounded-organic overflow-hidden backdrop-blur-sm border border-white/30 shadow-organic-soft" data-id="63ug89ni0" data-path="src/components/LoaderScreen.tsx">
          <motion.div
            className="h-full bg-gradient-organic-ocean relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{
              width: `${progress}%`,
              background: [
              "linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)",
              "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
              "linear-gradient(135deg, #A8E6CF 0%, #96CEB4 100%)"]

            }}
            transition={{
              width: { duration: 0.3 },
              background: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} data-id="66zc3x5jr" data-path="src/components/LoaderScreen.tsx">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }} data-id="qxnmio2qj" data-path="src/components/LoaderScreen.tsx" />

          </motion.div>
        </div>
        
        {/* Progress percentage */}
        <motion.div
          className="mt-8 text-center"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="qvu5cm4o4" data-path="src/components/LoaderScreen.tsx">
          <motion.p
            className="text-white text-2xl font-bold mono-organic text-shadow-organic"
            animate={{
              color: [
              "#FFFFFF",
              "#FF6B6B",
              "#4ECDC4",
              "#FFD93D",
              "#FFFFFF"]

            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="fwk07jwnw" data-path="src/components/LoaderScreen.tsx">
            {progress}%
          </motion.p>
          <motion.p
            className="text-white/80 text-lg body-organic mt-2"
            animate={{
              opacity: [0.8, 1, 0.8],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="vo7h3zelm" data-path="src/components/LoaderScreen.tsx">
            Crafting something beautiful...
          </motion.p>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) =>
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-white/40 rounded-full`}
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + i % 2 * 40}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }} data-id="rslyabdu6" data-path="src/components/LoaderScreen.tsx" />

        )}
      </div>
    </motion.div>);

};

export default LoaderScreen;