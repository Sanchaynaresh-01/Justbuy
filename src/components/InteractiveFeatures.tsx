import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Truck, Gift, Zap, Shield, Star } from 'lucide-react';

const InteractiveFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
  {
    id: 0,
    title: "Tech Specs",
    icon: Cpu,
    content: {
      title: "Cutting-Edge Technology",
      description: "Experience the latest in technological innovation with our premium product lineup featuring advanced processors, superior materials, and future-ready designs.",
      specs: [
      "Latest ARM Processors",
      "Premium Build Quality",
      "Advanced AI Integration",
      "5G Connectivity Ready"],

      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  },
  {
    id: 1,
    title: "Delivery Info",
    icon: Truck,
    content: {
      title: "Lightning Fast Delivery",
      description: "Get your products delivered at lightning speed with our advanced logistics network and real-time tracking system.",
      specs: [
      "Same Day Delivery Available",
      "Real-time GPS Tracking",
      "Secure Packaging",
      "Contactless Delivery"],

      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  },
  {
    id: 2,
    title: "Special Offers",
    icon: Gift,
    content: {
      title: "Exclusive Deals & Offers",
      description: "Unlock amazing savings with our exclusive deals, seasonal offers, and loyalty rewards program designed just for you.",
      specs: [
      "Up to 50% Off Select Items",
      "Loyalty Points Program",
      "Seasonal Sale Events",
      "Member-Only Discounts"],

      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  },
  {
    id: 3,
    title: "Performance",
    icon: Zap,
    content: {
      title: "Unmatched Performance",
      description: "Experience superior performance with optimized hardware and software integration that delivers exceptional results every time.",
      specs: [
      "99.9% Uptime Guarantee",
      "Lightning Fast Response",
      "Optimized Battery Life",
      "Seamless User Experience"],

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  }];


  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900" data-id="uru6ck68u" data-path="src/components/InteractiveFeatures.tsx">
      <div className="container mx-auto px-4" data-id="6o2t75rpk" data-path="src/components/InteractiveFeatures.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="1wp6jw5wp" data-path="src/components/InteractiveFeatures.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="fmu3koa1j" data-path="src/components/InteractiveFeatures.tsx">
            Interactive Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="38edu2nc7" data-path="src/components/InteractiveFeatures.tsx">
            Explore our comprehensive features designed to enhance your shopping experience
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto" data-id="oqrfmau32" data-path="src/components/InteractiveFeatures.tsx">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} data-id="mks6vywvt" data-path="src/components/InteractiveFeatures.tsx">

            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === index ?
                  'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' :
                  'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} data-id="n34alrgna" data-path="src/components/InteractiveFeatures.tsx">

                  <IconComponent className="w-5 h-5" data-id="hih9omeu4" data-path="src/components/InteractiveFeatures.tsx" />
                  <span data-id="ug1cibu9j" data-path="src/components/InteractiveFeatures.tsx">{feature.title}</span>
                </motion.button>);

            })}
          </motion.div>

          {/* Content Panel */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }} data-id="mnmi0xzmo" data-path="src/components/InteractiveFeatures.tsx">

            <AnimatePresence mode="wait" data-id="8fc3nahrg" data-path="src/components/InteractiveFeatures.tsx">
              <motion.div
                key={activeTab}
                className="grid md:grid-cols-2 gap-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }} data-id="eydcc87wz" data-path="src/components/InteractiveFeatures.tsx">

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center" data-id="7pn9bntpi" data-path="src/components/InteractiveFeatures.tsx">
                  <motion.h3
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }} data-id="9xbaiknbl" data-path="src/components/InteractiveFeatures.tsx">

                    {features[activeTab].content.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }} data-id="ydlij980y" data-path="src/components/InteractiveFeatures.tsx">

                    {features[activeTab].content.description}
                  </motion.p>

                  <motion.div
                    className="space-y-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }} data-id="qjabs4c4w" data-path="src/components/InteractiveFeatures.tsx">

                    {features[activeTab].content.specs.map((spec, index) =>
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }} data-id="nzrvzb4rj" data-path="src/components/InteractiveFeatures.tsx">

                        <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center" data-id="t82alnusd" data-path="src/components/InteractiveFeatures.tsx">
                          <Star className="w-3 h-3 text-white fill-current" data-id="vlajin4y0" data-path="src/components/InteractiveFeatures.tsx" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium" data-id="qu6k0chnr" data-path="src/components/InteractiveFeatures.tsx">
                          {spec}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.button
                    className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }} data-id="z13mx1nfj" data-path="src/components/InteractiveFeatures.tsx">

                    Learn More
                  </motion.button>
                </div>

                {/* Image */}
                <motion.div
                  className="relative overflow-hidden"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }} data-id="af5662y5t" data-path="src/components/InteractiveFeatures.tsx">

                  <img
                    src={features[activeTab].content.image}
                    alt={features[activeTab].content.title}
                    className="w-full h-64 md:h-full object-cover" data-id="gf73q4vip" data-path="src/components/InteractiveFeatures.tsx" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" data-id="hxgrjooci" data-path="src/components/InteractiveFeatures.tsx" />
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }} data-id="kvz0axt1r" data-path="src/components/InteractiveFeatures.tsx" />

                  <motion.div
                    className="absolute bottom-8 left-8 w-8 h-8 bg-purple-500/30 backdrop-blur-sm rounded-full"
                    animate={{
                      y: [0, 15, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} data-id="rivm0xvz8" data-path="src/components/InteractiveFeatures.tsx" />

                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default InteractiveFeatures;