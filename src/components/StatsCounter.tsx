import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, ShoppingBag, Award, Globe } from 'lucide-react';

const StatsCounter: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    awards: 0,
    countries: 0
  });

  const finalValues = {
    customers: 50000,
    products: 1500,
    awards: 25,
    countries: 120
  };

  const stats = [
  {
    key: 'customers',
    icon: Users,
    label: 'Happy Customers',
    value: counters.customers,
    suffix: '+',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    key: 'products',
    icon: ShoppingBag,
    label: 'Products Available',
    value: counters.products,
    suffix: '+',
    color: 'from-green-500 to-emerald-500'
  },
  {
    key: 'awards',
    icon: Award,
    label: 'Awards Won',
    value: counters.awards,
    suffix: '',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    key: 'countries',
    icon: Globe,
    label: 'Countries Served',
    value: counters.countries,
    suffix: '+',
    color: 'from-purple-500 to-pink-500'
  }];


  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const intervals = Object.keys(finalValues).map((key) => {
        const finalValue = finalValues[key as keyof typeof finalValues];
        const increment = finalValue / steps;
        let currentValue = 0;

        return setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(intervals.find((interval) => interval === this));
          }

          setCounters((prev) => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, stepDuration);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);

  return (
    <section className="py-20 bg-white dark:bg-gray-800" data-id="uuklg080q" data-path="src/components/StatsCounter.tsx">
      <div className="container mx-auto px-4" data-id="o38th0llx" data-path="src/components/StatsCounter.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="95yfy1ikc" data-path="src/components/StatsCounter.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="u2d5z2wiw" data-path="src/components/StatsCounter.tsx">
            Our Numbers Speak
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="05fxvfgvz" data-path="src/components/StatsCounter.tsx">
            Join millions of satisfied customers worldwide who trust us for their shopping needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="9co6u96n7" data-path="src/components/StatsCounter.tsx">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.key}
                className="text-center group"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }} data-id="fif5hu7g0" data-path="src/components/StatsCounter.tsx">

                {/* Icon Container */}
                <motion.div
                  className="relative mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }} data-id="ufajetflo" data-path="src/components/StatsCounter.tsx">

                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }} data-id="vrti0sktp" data-path="src/components/StatsCounter.tsx">

                    <IconComponent className="w-10 h-10 text-white" data-id="7tgifdo18" data-path="src/components/StatsCounter.tsx" />
                  </motion.div>
                  
                  {/* Floating Ring */}
                  <motion.div
                    className={`absolute inset-0 w-20 h-20 border-4 border-gradient-to-r ${stat.color} rounded-2xl opacity-30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} data-id="y439d3eom" data-path="src/components/StatsCounter.tsx" />

                </motion.div>

                {/* Counter */}
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }} data-id="48v8f76rr" data-path="src/components/StatsCounter.tsx">

                  <motion.span
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                    animate={inView ? {
                      textShadow: [
                      "0 0 0px rgba(168, 85, 247, 0)",
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 0px rgba(168, 85, 247, 0)"]

                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1 + 0.2 * index
                    }} data-id="2z4764ujp" data-path="src/components/StatsCounter.tsx">

                    {stat.value.toLocaleString()}{stat.suffix}
                  </motion.span>
                </motion.div>

                {/* Label */}
                <motion.h3
                  className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }} data-id="dapu7zzh6" data-path="src/components/StatsCounter.tsx">

                  {stat.label}
                </motion.h3>

                {/* Animated Progress Bar */}
                <motion.div
                  className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + 0.1 * index }} data-id="35hqkh6nm" data-path="src/components/StatsCounter.tsx">

                  <motion.div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + 0.1 * index }} data-id="cor49i4vy" data-path="src/components/StatsCounter.tsx" />

                </motion.div>

                {/* Sparkle Effect */}
                <motion.div
                  className="relative mt-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + 0.1 * index }} data-id="z6s719ztu" data-path="src/components/StatsCounter.tsx">

                  {[...Array(3)].map((_, sparkleIndex) =>
                  <motion.div
                    key={sparkleIndex}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                    style={{
                      left: `${20 + sparkleIndex * 30}%`,
                      top: `${Math.random() * 20}px`
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 2 + sparkleIndex * 0.3 + index * 0.1,
                      ease: "easeInOut"
                    }} data-id="1h36qfjei" data-path="src/components/StatsCounter.tsx" />

                  )}
                </motion.div>
              </motion.div>);

          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }} data-id="27lw5yhem" data-path="src/components/StatsCounter.tsx">

          <motion.button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} data-id="bb79hgyfy" data-path="src/components/StatsCounter.tsx">

            <span className="relative z-10" data-id="lv3uounsd" data-path="src/components/StatsCounter.tsx">Join Our Community</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }} data-id="83seb02un" data-path="src/components/StatsCounter.tsx" />

          </motion.button>
        </motion.div>
      </div>
    </section>);

};

export default StatsCounter;