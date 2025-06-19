import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, TrendingUp, Heart, Zap, Star, Gift } from 'lucide-react';

const ShowcasePortfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const showcaseItems = [
  {
    id: 1,
    title: "Featured This Month",
    description: "Handpicked premium products",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-yellow-400 to-orange-500",
    badge: "Premium"
  },
  {
    id: 2,
    title: "Trending Now",
    description: "Most popular items this week",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-green-400 to-blue-500",
    badge: "Hot"
  },
  {
    id: 3,
    title: "Customer Favorites",
    description: "Highest rated by our community",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-pink-400 to-red-500",
    badge: "Loved"
  },
  {
    id: 4,
    title: "Flash Deals",
    description: "Limited time offers",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-purple-400 to-pink-500",
    badge: "Sale"
  },
  {
    id: 5,
    title: "Top Rated",
    description: "5-star customer reviews",
    icon: Star,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-indigo-400 to-purple-500",
    badge: "5★"
  },
  {
    id: 6,
    title: "New Arrivals",
    description: "Fresh products just added",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-cyan-400 to-teal-500",
    badge: "New"
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" data-id="iw44kkl3g" data-path="src/components/ShowcasePortfolio.tsx">
      <div className="container mx-auto px-4" data-id="vu6ivmvhm" data-path="src/components/ShowcasePortfolio.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="7c4dxqdek" data-path="src/components/ShowcasePortfolio.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="021xda8ym" data-path="src/components/ShowcasePortfolio.tsx">
            Showcase Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="m9j0y7152" data-path="src/components/ShowcasePortfolio.tsx">
            Explore our carefully curated categories and discover what makes each collection special
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} data-id="ej6mjq16y" data-path="src/components/ShowcasePortfolio.tsx">

          {showcaseItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -15, rotateY: 5 }}
                style={{ perspective: "1000px" }} data-id="ie9xkb9gn" data-path="src/components/ShowcasePortfolio.tsx">

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden" data-id="4i319zr8a" data-path="src/components/ShowcasePortfolio.tsx">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }} data-id="1qnn4g7dj" data-path="src/components/ShowcasePortfolio.tsx" />

                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} data-id="kb5twnm4c" data-path="src/components/ShowcasePortfolio.tsx" />
                  
                  {/* Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 bg-gradient-to-r ${item.gradient} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }} data-id="8n9hb3zcr" data-path="src/components/ShowcasePortfolio.tsx">

                    {item.badge}
                  </motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }} data-id="p0va1qfov" data-path="src/components/ShowcasePortfolio.tsx">

                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center" data-id="9xai7z3bm" data-path="src/components/ShowcasePortfolio.tsx">
                      <IconComponent className="w-8 h-8 text-white" data-id="ihwj27qvp" data-path="src/components/ShowcasePortfolio.tsx" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative" data-id="l5r5jjq77" data-path="src/components/ShowcasePortfolio.tsx">
                  {/* Background Pattern */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }} data-id="v8a7k1bal" data-path="src/components/ShowcasePortfolio.tsx">

                    <IconComponent className="w-full h-full text-gray-400" data-id="f8uswm71n" data-path="src/components/ShowcasePortfolio.tsx" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }} data-id="5fe1iui27" data-path="src/components/ShowcasePortfolio.tsx">

                    <IconComponent className="w-6 h-6 text-white" data-id="ao2f03knx" data-path="src/components/ShowcasePortfolio.tsx" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" data-id="qw2rmocld" data-path="src/components/ShowcasePortfolio.tsx">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed" data-id="mri6k62gr" data-path="src/components/ShowcasePortfolio.tsx">
                    {item.description}
                  </p>

                  {/* Action Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }} data-id="n29udoscf" data-path="src/components/ShowcasePortfolio.tsx">

                    Explore Collection
                  </motion.button>

                  {/* Hover Line Effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }} data-id="jbuc1jeew" data-path="src/components/ShowcasePortfolio.tsx" />

                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl"
                  whileHover={{
                    borderImage: `linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.5), transparent) 1`
                  }}
                  transition={{ duration: 0.5 }} data-id="wrovca1yj" data-path="src/components/ShowcasePortfolio.tsx" />


                {/* Particle Effects */}
                {[...Array(3)].map((_, particleIndex) =>
                <motion.div
                  key={particleIndex}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-60`}
                  style={{
                    left: `${20 + particleIndex * 30}%`,
                    top: `${20 + particleIndex * 20}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: particleIndex * 0.2,
                    ease: "easeInOut"
                  }} data-id="dr9zk8ttl" data-path="src/components/ShowcasePortfolio.tsx" />

                )}
              </motion.div>);

          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }} data-id="ja1t44748" data-path="src/components/ShowcasePortfolio.tsx">

          {[
          { label: "Categories", value: "50+" },
          { label: "Brands", value: "200+" },
          { label: "Weekly Updates", value: "100+" },
          { label: "Satisfaction", value: "99%" }].
          map((stat, index) =>
          <motion.div
            key={index}
            className="text-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 + 0.1 * index }} data-id="blpvxqvjj" data-path="src/components/ShowcasePortfolio.tsx">

              <motion.div
              className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2 + index * 0.2
              }} data-id="ye11ar00s" data-path="src/components/ShowcasePortfolio.tsx">

                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium" data-id="0vc9qj5dl" data-path="src/components/ShowcasePortfolio.tsx">
                {stat.label}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default ShowcasePortfolio;