import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, ShoppingBag, Star } from 'lucide-react';

const StatsVisualization: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [chartProgress, setChartProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setChartProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView]);

  const stats = [
  {
    icon: Users,
    label: "Happy Customers",
    value: 50000,
    growth: "+23%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingBag,
    label: "Products Sold",
    value: 125000,
    growth: "+45%",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Star,
    label: "5-Star Reviews",
    value: 15000,
    growth: "+67%",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: 89,
    suffix: "%",
    growth: "+12%",
    color: "from-purple-500 to-pink-500"
  }];


  // Sample data for the animated chart
  const chartData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 45 },
  { month: 'Mar', value: 60 },
  { month: 'Apr', value: 40 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 90 },
  { month: 'Jul', value: 85 },
  { month: 'Aug', value: 95 }];


  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800" data-id="q58jqpjrt" data-path="src/components/StatsVisualization.tsx">
      <div className="container mx-auto px-4" data-id="y0ketvvej" data-path="src/components/StatsVisualization.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="md8xme7ni" data-path="src/components/StatsVisualization.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="ksgo8wyw2" data-path="src/components/StatsVisualization.tsx">
            Our Success Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="yty4xewek" data-path="src/components/StatsVisualization.tsx">
            Watch our growth metrics and see how we're making a difference in the e-commerce space
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" data-id="wdp8n1ktk" data-path="src/components/StatsVisualization.tsx">
          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} data-id="s28rgvwpy" data-path="src/components/StatsVisualization.tsx">

            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }} data-id="oea7bkz8l" data-path="src/components/StatsVisualization.tsx">

                  <div className="flex items-center justify-between mb-4" data-id="49pnrzndc" data-path="src/components/StatsVisualization.tsx">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }} data-id="o1zso0yxw" data-path="src/components/StatsVisualization.tsx">

                      <IconComponent className="w-6 h-6 text-white" data-id="8kgvekx9c" data-path="src/components/StatsVisualization.tsx" />
                    </motion.div>
                    <span className="text-green-500 font-semibold text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full" data-id="6x5nqapxc" data-path="src/components/StatsVisualization.tsx">
                      {stat.growth}
                    </span>
                  </div>
                  
                  <motion.h3
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }} data-id="9rphcw2bq" data-path="src/components/StatsVisualization.tsx">

                    {stat.value.toLocaleString()}{stat.suffix || ''}
                  </motion.h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 font-medium" data-id="0ri2hldpe" data-path="src/components/StatsVisualization.tsx">
                    {stat.label}
                  </p>
                </motion.div>);

            })}
          </motion.div>

          {/* Animated Chart */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }} data-id="oweah6gu0" data-path="src/components/StatsVisualization.tsx">

            <div className="mb-6" data-id="jl45jbdt8" data-path="src/components/StatsVisualization.tsx">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" data-id="31sxqo1qn" data-path="src/components/StatsVisualization.tsx">
                Revenue Growth Trend
              </h3>
              <p className="text-gray-600 dark:text-gray-400" data-id="71d2vt0te" data-path="src/components/StatsVisualization.tsx">
                Monthly performance overview
              </p>
            </div>

            <div className="relative h-64" data-id="diiqezylg" data-path="src/components/StatsVisualization.tsx">
              {/* Chart Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between" data-id="ndn7uhz0p" data-path="src/components/StatsVisualization.tsx">
                {[...Array(5)].map((_, i) =>
                <div key={i} className="border-t border-gray-200 dark:border-gray-600 opacity-30" data-id="b5rcetla4" data-path="src/components/StatsVisualization.tsx" />
                )}
              </div>

              {/* Chart Bars */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2" data-id="rp900oykj" data-path="src/components/StatsVisualization.tsx">
                {chartData.map((data, index) =>
                <div key={index} className="flex flex-col items-center flex-1 mx-1" data-id="c1y9ajm14" data-path="src/components/StatsVisualization.tsx">
                    <motion.div
                    className="bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg w-full max-w-8 relative overflow-hidden"
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${data.value / 100 * 200}px` } : {}}
                    transition={{ duration: 1, delay: 0.1 * index }} data-id="3giox5m03" data-path="src/components/StatsVisualization.tsx">

                      {/* Animated glow effect */}
                      <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        y: ['-100%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1 + 0.1 * index
                      }} data-id="4x0l1bzp4" data-path="src/components/StatsVisualization.tsx" />

                    </motion.div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium" data-id="pv7eoi07j" data-path="src/components/StatsVisualization.tsx">
                      {data.month}
                    </span>
                  </div>
                )}
              </div>

              {/* Chart Progress Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }} data-id="3up31qkvz" data-path="src/components/StatsVisualization.tsx">

                <svg className="w-full h-full" data-id="mbwlqbh5w" data-path="src/components/StatsVisualization.tsx">
                  <motion.path
                    d={`M ${chartData.map((data, index) =>
                    `${index / (chartData.length - 1) * 100}% ${100 - data.value}%`
                    ).join(' L ')}`}
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 1.5 }} data-id="bnt2t9phd" data-path="src/components/StatsVisualization.tsx" />

                  <defs data-id="7872jaiis" data-path="src/components/StatsVisualization.tsx">
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" data-id="gi8cme73r" data-path="src/components/StatsVisualization.tsx">
                      <stop offset="0%" stopColor="#8B5CF6" data-id="eyy8u29m3" data-path="src/components/StatsVisualization.tsx" />
                      <stop offset="100%" stopColor="#EC4899" data-id="w6c7z2xaf" data-path="src/components/StatsVisualization.tsx" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden" data-id="ern2p1o4h" data-path="src/components/StatsVisualization.tsx">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ width: 0 }}
                animate={inView ? { width: `${chartProgress}%` } : {}}
                transition={{ duration: 2, delay: 0.5 }} data-id="m4nj3r09e" data-path="src/components/StatsVisualization.tsx" />

            </div>
            <div className="flex justify-between items-center mt-2" data-id="lyde6v6xg" data-path="src/components/StatsVisualization.tsx">
              <span className="text-sm text-gray-600 dark:text-gray-400" data-id="f75ohc03k" data-path="src/components/StatsVisualization.tsx">
                Progress: {chartProgress.toFixed(0)}%
              </span>
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400" data-id="9wgbdous7" data-path="src/components/StatsVisualization.tsx">
                Target Achieved
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default StatsVisualization;