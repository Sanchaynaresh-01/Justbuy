import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#products' },
  { label: 'Services', href: '#features' },
  { label: 'Portfolio', href: '#about' },
  { label: 'Connect', href: '#contact' }];


  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled ?
      'glass-organic backdrop-blur-organic shadow-organic-medium' :
      'bg-transparent'}`
      }
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }} data-id="8rvocnsr8" data-path="src/components/Navbar.tsx">

      <div className="container-organic" data-id="7qc9ma43f" data-path="src/components/Navbar.tsx">
        <div className="text-3xl font-bold heading-organic text-gradient-organic" data-id="sw0sdtwpn" data-path="src/components/Navbar.tsx">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }} data-id="rsy0k3abb" data-path="src/components/Navbar.tsx">

            {/* Organic logo with morphing animation */}
            <motion.div
              className="w-12 h-12 bg-gradient-organic-sunset rounded-organic flex items-center justify-center shadow-organic-soft animate-morph"
              whileHover={{
                rotate: 360,
                scale: 1.1
              }}
              transition={{ duration: 0.6 }} data-id="ludf6fo6t" data-path="src/components/Navbar.tsx">
              <Sparkles className="w-6 h-6 text-white animate-breathe" data-id="v23a8wp3e" data-path="src/components/Navbar.tsx" />
            </motion.div>
            
            <motion.span
              className="text-3xl font-bold heading-organic text-gradient-organic"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }} data-id="huukwzez5" data-path="src/components/Navbar.tsx">
              Just Buy
            </motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8" data-id="68fxzhnh6" data-path="src/components/Navbar.tsx">
            {menuItems.map((item, index) =>
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-lg font-medium text-organic-charcoal dark:text-organic-cream hover:text-organic-coral dark:hover:text-organic-teal transition-all duration-300 body-organic"
              whileHover={{
                scale: 1.1,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }} data-id="uiy6h3b2o" data-path="src/components/Navbar.tsx">

                {item.label}
                
                {/* Organic underline effect */}
                <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-organic-sunset rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }} data-id="c5xjnyaya" data-path="src/components/Navbar.tsx" />

              </motion.a>
            )}
          </div>

          <div className="flex items-center space-x-4" data-id="0313xwth5" data-path="src/components/Navbar.tsx">
            {/* Theme toggle with organic styling */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-organic glass-organic hover:bg-organic-coral/20 dark:hover:bg-organic-teal/20 text-organic-charcoal dark:text-organic-cream transition-all duration-300 shadow-organic-soft"
              whileHover={{
                scale: 1.1,
                rotate: 180
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3 }} data-id="v4p82h63u" data-path="src/components/Navbar.tsx">

              {isDark ?
              <Sun className="w-5 h-5 animate-breathe" data-id="yqdzrg4z2" data-path="src/components/Navbar.tsx" /> :
              <Moon className="w-5 h-5 animate-wave" data-id="3qtgi7sqw" data-path="src/components/Navbar.tsx" />
              }
            </motion.button>

            {/* CTA Button */}
            <motion.button
              className="hidden lg:block btn-primary-organic text-lg px-8 py-3"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 80px rgba(255, 107, 107, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }} data-id="yhhdqarqo" data-path="src/components/Navbar.tsx">

              <span className="flex items-center space-x-2" data-id="qqiizyirh" data-path="src/components/Navbar.tsx">
                <Palette className="w-5 h-5 animate-wave" data-id="qnc1a17jo" data-path="src/components/Navbar.tsx" />
                <span data-id="7kk3g5i58" data-path="src/components/Navbar.tsx">Start Creating</span>
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-organic glass-organic text-organic-charcoal dark:text-organic-cream shadow-organic-soft"
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 107, 107, 0.1)"
              }} data-id="hqvxgzi1d" data-path="src/components/Navbar.tsx">

              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }} data-id="5ewy75gr2" data-path="src/components/Navbar.tsx">
                {isMobileMenuOpen ?
                <X className="w-6 h-6" data-id="3uyrkzo7k" data-path="src/components/Navbar.tsx" /> :
                <Menu className="w-6 h-6" data-id="s6mspkbjy" data-path="src/components/Navbar.tsx" />
                }
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with organic styling */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} data-id="aunw61idp" data-path="src/components/Navbar.tsx">

          <motion.div
            className="py-6 space-y-6 glass-organic rounded-organic-lg mt-4 border border-white/20"
            initial={{ y: -20 }}
            animate={{ y: isMobileMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }} data-id="v5q6qacqh" data-path="src/components/Navbar.tsx">
            
            {menuItems.map((item, index) =>
            <motion.a
              key={item.label}
              href={item.href}
              className="block text-lg font-medium text-organic-charcoal dark:text-organic-cream hover:text-organic-coral dark:hover:text-organic-teal transition-all duration-300 px-6 py-2 body-organic"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{
                x: 10,
                scale: 1.02
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -30
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.3
              }} data-id="9ia6w19xj" data-path="src/components/Navbar.tsx">

              <span className="flex items-center space-x-3" data-id="c1uzjnb4n" data-path="src/components/Navbar.tsx">
                <motion.div
                  className="w-2 h-2 bg-gradient-organic-sunset rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }} data-id="s64or8qxa" data-path="src/components/Navbar.tsx" />

                <span data-id="pzau6nxtq" data-path="src/components/Navbar.tsx">{item.label}</span>
              </span>
            </motion.a>
            )}
            
            <motion.div
              className="px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ delay: 0.3 }} data-id="zp79xd55j" data-path="src/components/Navbar.tsx">
              <button
                className="w-full btn-primary-organic text-lg py-3"
                onClick={() => setIsMobileMenuOpen(false)} data-id="3wch80gva" data-path="src/components/Navbar.tsx">
                <span className="flex items-center justify-center space-x-2" data-id="mldwekr3d" data-path="src/components/Navbar.tsx">
                  <Palette className="w-5 h-5" data-id="9ftuj566o" data-path="src/components/Navbar.tsx" />
                  <span data-id="idw3kxyww" data-path="src/components/Navbar.tsx">Start Creating</span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>);

};

export default Navbar;