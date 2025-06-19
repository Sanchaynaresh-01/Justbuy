import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Truck, Shield, Headphones, Award, CreditCard, RefreshCw } from 'lucide-react';

const ServiceCards: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50 worldwide",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment with SSL encryption",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Premium quality products guaranteed",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: RefreshCw,
    title: "Warranty",
    description: "Comprehensive warranty on all products",
    color: "from-teal-500 to-green-500"
  }];


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800" data-id="0lczirdv8" data-path="src/components/ServiceCards.tsx">
      <div className="container mx-auto px-4" data-id="e594fvvd5" data-path="src/components/ServiceCards.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="5lvj55vg0" data-path="src/components/ServiceCards.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="pj7mfibor" data-path="src/components/ServiceCards.tsx">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="k5dr4u5f2" data-path="src/components/ServiceCards.tsx">
            Experience exceptional service with our commitment to quality and customer satisfaction
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} data-id="k6ka6hd40" data-path="src/components/ServiceCards.tsx">

          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -10 }} data-id="h9pu2snpi" data-path="src/components/ServiceCards.tsx">

                {/* Background Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }} data-id="iowkoy0au" data-path="src/components/ServiceCards.tsx" />

                
                {/* Floating Animation Background */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }} data-id="r414caooe" data-path="src/components/ServiceCards.tsx" />


                <div className="relative z-10" data-id="2404r712x" data-path="src/components/ServiceCards.tsx">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }} data-id="zminbyyiy" data-path="src/components/ServiceCards.tsx">

                    <IconComponent className="w-8 h-8 text-white" data-id="kquayfbuv" data-path="src/components/ServiceCards.tsx" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" data-id="hne46osj1" data-path="src/components/ServiceCards.tsx">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed" data-id="akf7eijqd" data-path="src/components/ServiceCards.tsx">
                    {service.description}
                  </p>

                  {/* Checkmark Animation */}
                  <motion.div
                    className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }} data-id="q70ujyi7r" data-path="src/components/ServiceCards.tsx">

                    <motion.svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }} data-id="cjnbin6lr" data-path="src/components/ServiceCards.tsx">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7" data-id="pvbeljd5m" data-path="src/components/ServiceCards.tsx" />

                    </motion.svg>
                  </motion.div>
                </div>

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  whileHover={{
                    boxShadow: [
                    "0 0 0 0 rgba(168, 85, 247, 0.4)",
                    "0 0 0 20px rgba(168, 85, 247, 0)"]

                  }}
                  transition={{ duration: 0.6 }} data-id="mbhzsb5rc" data-path="src/components/ServiceCards.tsx" />

              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

};

export default ServiceCards;