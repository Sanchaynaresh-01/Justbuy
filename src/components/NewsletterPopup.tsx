import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Sparkles } from 'lucide-react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000); // Show after 8 seconds

      const scrollHandler = () => {
        if (window.scrollY > window.innerHeight * 1.5) {
          setIsVisible(true);
          window.removeEventListener('scroll', scrollHandler);
        }
      };

      window.addEventListener('scroll', scrollHandler);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);

  const handleClose = () => {
    console.log('Closing popup...');
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Backdrop clicked, closing popup...');
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence data-id="e1vxgirza" data-path="src/components/NewsletterPopup.tsx">
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick} data-id="cx5guq6t4" data-path="src/components/NewsletterPopup.tsx">

        <motion.div
          className="relative overflow-hidden max-w-lg w-full"
          initial={{ scale: 0.7, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.7, opacity: 0, rotateY: 90 }}
          transition={{
            duration: 0.7,
            type: "spring",
            damping: 15,
            stiffness: 100
          }}
          onClick={(e) => e.stopPropagation()} data-id="pn3e0varz" data-path="src/components/NewsletterPopup.tsx">

          {/* Organic morphing background */}
          <div className="absolute inset-0 bg-gradient-organic-cosmic animate-liquid opacity-90"
          style={{ backgroundSize: '400% 400%' }} data-id="8zrz1dpk7" data-path="src/components/NewsletterPopup.tsx" />
          
          {/* Glass overlay */}
          <div className="absolute inset-0 glass-organic" data-id="o5wie0359" data-path="src/components/NewsletterPopup.tsx" />
          
          {/* Floating organic shapes */}
          <motion.div
            className="absolute -top-8 -right-8 w-24 h-24 bg-organic-coral/20 animate-morph opacity-60"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }} data-id="eg4a9fxm4" data-path="src/components/NewsletterPopup.tsx" />

          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-organic-teal/30 animate-wave opacity-70"
            animate={{
              y: [0, -20, 10, 0],
              rotate: [0, 10, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="yh2hjsph0" data-path="src/components/NewsletterPopup.tsx" />

          <motion.div
            className="absolute top-1/2 right-8 w-8 h-8 bg-organic-gold/40 rounded-full animate-breathe opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="k8eq5pdl1" data-path="src/components/NewsletterPopup.tsx" />

          {/* Enhanced close button */}
          <motion.button
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 text-white hover:text-organic-coral transition-all duration-300 z-20 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30"
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 107, 107, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.3 }} data-id="q5cpcrs44" data-path="src/components/NewsletterPopup.tsx">
            <X className="w-6 h-6" data-id="txwhkt0wb" data-path="src/components/NewsletterPopup.tsx" />
          </motion.button>

          <div className="relative z-10 p-10" data-id="iszajjx7n" data-path="src/components/NewsletterPopup.tsx">
            <AnimatePresence mode="wait" data-id="4yanwrezr" data-path="src/components/NewsletterPopup.tsx">
              {!isSubmitted ?
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }} data-id="j1fj52u18" data-path="src/components/NewsletterPopup.tsx">

                  {/* Organic icon container */}
                  <motion.div
                  className="w-20 h-20 bg-gradient-organic-sunset rounded-organic-lg flex items-center justify-center mx-auto mb-8 animate-morph shadow-organic-medium"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    type: "spring",
                    damping: 12
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1
                  }} data-id="ixbs54syu" data-path="src/components/NewsletterPopup.tsx">
                    <Mail className="w-10 h-10 text-white animate-wave" data-id="9u4x3rql8" data-path="src/components/NewsletterPopup.tsx" />
                  </motion.div>

                  {/* Dynamic title */}
                  <motion.h3
                  className="text-3xl font-bold text-white text-center mb-3 heading-organic text-shadow-organic"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }} data-id="y097khlgt" data-path="src/components/NewsletterPopup.tsx">
                    Join Our Creative Journey! ✨
                  </motion.h3>

                  {/* Subtitle with organic styling */}
                  <motion.p
                  className="text-white/90 text-center mb-8 body-organic text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }} data-id="w8h75zzce" data-path="src/components/NewsletterPopup.tsx">
                    Get exclusive access to design inspiration, creative tips, and early access to our premium content.
                  </motion.p>

                  {/* Organic offer badge */}
                  <motion.div
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-organic px-6 py-3 mb-8 border border-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }} data-id="0jsajfc9z" data-path="src/components/NewsletterPopup.tsx">
                    <Sparkles className="w-5 h-5 text-organic-gold animate-breathe" data-id="ayh55fh0s" data-path="src/components/NewsletterPopup.tsx" />
                    <span className="text-white font-semibold mono-organic" data-id="g7kqvlroo" data-path="src/components/NewsletterPopup.tsx">
                      Premium Access Included
                    </span>
                  </motion.div>

                  {/* Organic form */}
                  <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }} data-id="4qq2rywnc" data-path="src/components/NewsletterPopup.tsx">

                    <div className="relative" data-id="9x572axxd" data-path="src/components/NewsletterPopup.tsx">
                      <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your creative email address"
                      className="w-full px-6 py-4 pr-14 bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-organic-lg focus:border-organic-coral focus:bg-white transition-all duration-500 text-organic-charcoal placeholder-organic-charcoal/60 text-lg shadow-organic-soft focus:shadow-organic-medium focus:scale-105"
                      required data-id="349sedmcm" data-path="src/components/NewsletterPopup.tsx" />
                      <Mail className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-organic-charcoal/50" data-id="hxfhoiulb" data-path="src/components/NewsletterPopup.tsx" />
                    </div>

                    <motion.button
                    type="submit"
                    className="w-full bg-gradient-organic-ocean text-white py-4 rounded-organic-lg font-bold text-lg relative overflow-hidden group shadow-organic-medium hover:shadow-organic-strong transition-all duration-500 hover:scale-105 ripple-organic"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 80px rgba(78, 205, 196, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }} data-id="5ztwjeeef" data-path="src/components/NewsletterPopup.tsx">
                      <span className="relative z-10 mono-organic" data-id="cg88lkndd" data-path="src/components/NewsletterPopup.tsx">Start Creating Together 🚀</span>
                      <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, borderRadius: "50%" }}
                      whileHover={{
                        scale: 1,
                        borderRadius: "24px",
                        opacity: 1
                      }}
                      transition={{ duration: 0.4 }} data-id="ukcur97ln" data-path="src/components/NewsletterPopup.tsx" />
                    </motion.button>
                  </motion.form>

                  {/* Privacy notice */}
                  <motion.p
                  className="text-sm text-white/70 text-center mt-6 body-organic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }} data-id="q375p44if" data-path="src/components/NewsletterPopup.tsx">
                    🔒 We respect your creativity and privacy. Unsubscribe anytime.
                  </motion.p>
                </motion.div> :

              <motion.div
                key="success"
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} data-id="q3e53ulvx" data-path="src/components/NewsletterPopup.tsx">

                  {/* Success icon with organic animation */}
                  <motion.div
                  className="w-20 h-20 bg-gradient-organic-forest rounded-organic-lg flex items-center justify-center mx-auto mb-8 shadow-organic-strong animate-breathe"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    damping: 10
                  }} data-id="qnnfhw1zd" data-path="src/components/NewsletterPopup.tsx">
                    <motion.svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }} data-id="yb0cuc7zz" data-path="src/components/NewsletterPopup.tsx">
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7" data-id="78r2g355h" data-path="src/components/NewsletterPopup.tsx" />
                    </motion.svg>
                  </motion.div>

                  <motion.h3
                  className="text-3xl font-bold text-white mb-4 heading-organic text-shadow-organic"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }} data-id="krt0r6d42" data-path="src/components/NewsletterPopup.tsx">
                    Welcome to the Creative Family! 🎨
                  </motion.h3>

                  <motion.p
                  className="text-white/90 mb-6 body-organic text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }} data-id="aygjdmbl5" data-path="src/components/NewsletterPopup.tsx">
                    Your creative journey begins now! Check your inbox for exclusive content.
                  </motion.p>

                  <motion.div
                  className="bg-white/20 backdrop-blur-sm rounded-organic-lg p-6 border border-white/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }} data-id="g9fh9x5q4" data-path="src/components/NewsletterPopup.tsx">
                    <p className="text-organic-gold font-bold mono-organic text-lg" data-id="rbltrfqig" data-path="src/components/NewsletterPopup.tsx">
                      🎁 Premium Access: ACTIVATED
                    </p>
                  </motion.div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* Organic animated border */}
          <motion.div
            className="absolute inset-0 rounded-organic-lg border-2 border-transparent"
            animate={{
              background: [
              "linear-gradient(45deg, transparent, rgba(255, 107, 107, 0.4), transparent)",
              "linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.4), transparent)",
              "linear-gradient(135deg, transparent, rgba(255, 217, 61, 0.4), transparent)",
              "linear-gradient(180deg, transparent, rgba(168, 230, 207, 0.4), transparent)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              backgroundSize: '400% 400%',
              animation: 'liquid 6s ease infinite'
            }} data-id="nrzhfrrjc" data-path="src/components/NewsletterPopup.tsx" />

        </motion.div>
      </motion.div>
    </AnimatePresence>);

};

export default NewsletterPopup;