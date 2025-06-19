import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Just Buy has completely transformed my shopping experience. The quality of products is exceptional, and the customer service is outstanding. I've never been happier with an online store!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The tech products on Just Buy are cutting-edge and reasonably priced. Fast delivery and excellent packaging make this my go-to platform for all my gadget needs."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I love how curated the product selection is. Every item I've purchased has exceeded my expectations. The website is beautiful and so easy to navigate!"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Outstanding service and quality! The seamless shopping experience and quick delivery make Just Buy my preferred choice for online shopping. Highly recommended!"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" data-id="93629waks" data-path="src/components/TestimonialsSlider.tsx">
      <div className="container mx-auto px-4" data-id="u1zgx5uox" data-path="src/components/TestimonialsSlider.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="8og9g8wsb" data-path="src/components/TestimonialsSlider.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="t7gckkik6" data-path="src/components/TestimonialsSlider.tsx">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="sfeadecui" data-path="src/components/TestimonialsSlider.tsx">
            Real feedback from our amazing customers who love shopping with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" data-id="d6l6sdujl" data-path="src/components/TestimonialsSlider.tsx">
          {/* Main Testimonial Card */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} data-id="bij93boct" data-path="src/components/TestimonialsSlider.tsx">

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600" data-id="bikova38w" data-path="src/components/TestimonialsSlider.tsx" />
            
            <AnimatePresence mode="wait" data-id="thv8xcqfg" data-path="src/components/TestimonialsSlider.tsx">
              <motion.div
                key={currentIndex}
                className="p-8 md:p-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }} data-id="o4md4epe4" data-path="src/components/TestimonialsSlider.tsx">

                {/* Quote Icon */}
                <motion.div
                  className="absolute top-8 right-8 text-purple-200 dark:text-purple-800"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }} data-id="ti2s03558" data-path="src/components/TestimonialsSlider.tsx">

                  <Quote className="w-12 h-12" data-id="bujbilr2p" data-path="src/components/TestimonialsSlider.tsx" />
                </motion.div>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8" data-id="yzqvaz9m9" data-path="src/components/TestimonialsSlider.tsx">
                  {/* Avatar */}
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }} data-id="oso5nxxqq" data-path="src/components/TestimonialsSlider.tsx">

                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-600 to-pink-600 p-1" data-id="8kxnvct7p" data-path="src/components/TestimonialsSlider.tsx">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover" data-id="ci3p3ey4f" data-path="src/components/TestimonialsSlider.tsx" />

                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }} data-id="mpp1lorud" data-path="src/components/TestimonialsSlider.tsx">

                      <Star className="w-4 h-4 text-white fill-current" data-id="ic7f4z1fx" data-path="src/components/TestimonialsSlider.tsx" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left" data-id="i9kxxki4c" data-path="src/components/TestimonialsSlider.tsx">
                    {/* Rating */}
                    <motion.div
                      className="flex justify-center md:justify-start space-x-1 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }} data-id="3m33652sk" data-path="src/components/TestimonialsSlider.tsx">

                      {[...Array(testimonials[currentIndex].rating)].map((_, i) =>
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }} data-id="zo0vz3kgr" data-path="src/components/TestimonialsSlider.tsx">

                          <Star className="w-5 h-5 text-yellow-400 fill-current" data-id="jl42kjs6h" data-path="src/components/TestimonialsSlider.tsx" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote
                      className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }} data-id="rta97xbsv" data-path="src/components/TestimonialsSlider.tsx">

                      "{testimonials[currentIndex].text}"
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }} data-id="yxfh7p54t" data-path="src/components/TestimonialsSlider.tsx">

                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1" data-id="w4qk08did" data-path="src/components/TestimonialsSlider.tsx">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium" data-id="jxvsgpc4c" data-path="src/components/TestimonialsSlider.tsx">
                        {testimonials[currentIndex].role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }} data-id="ogewh9dy3" data-path="src/components/TestimonialsSlider.tsx">

            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" data-id="mcxncf3i5" data-path="src/components/TestimonialsSlider.tsx" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }} data-id="27jn4den1" data-path="src/components/TestimonialsSlider.tsx">

            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" data-id="45ugy0erj" data-path="src/components/TestimonialsSlider.tsx" />
          </motion.button>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }} data-id="catoccmwz" data-path="src/components/TestimonialsSlider.tsx">

            {testimonials.map((_, index) =>
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ?
              'bg-gradient-to-r from-purple-600 to-pink-600 w-8' :
              'bg-gray-300 dark:bg-gray-600'}`
              }
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }} data-id="zkcinv24v" data-path="src/components/TestimonialsSlider.tsx" />

            )}
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" data-id="v19ifh5p2" data-path="src/components/TestimonialsSlider.tsx">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }} data-id="4vmfik466" data-path="src/components/TestimonialsSlider.tsx" />

          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="jk13lcegl" data-path="src/components/TestimonialsSlider.tsx" />

        </div>
      </div>
    </section>);

};

export default TestimonialsSlider;