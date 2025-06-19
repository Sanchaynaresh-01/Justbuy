import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PartnerLogos: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Mock partner logos with company names
  const partners = [
  { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "InnovateLabs", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "FutureTech", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "GlobalSync", logo: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "NextGen", logo: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "DataFlow", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "CloudTech", logo: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { name: "SmartSys", logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }];


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
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800" data-id="4igrrv6pe" data-path="src/components/PartnerLogos.tsx">
      <div className="container mx-auto px-4" data-id="qvd8au3qo" data-path="src/components/PartnerLogos.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="a67qoayxa" data-path="src/components/PartnerLogos.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="gpm4p5cxf" data-path="src/components/PartnerLogos.tsx">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="e4ov8lilb" data-path="src/components/PartnerLogos.tsx">
            We collaborate with industry leaders to bring you the best products and services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} data-id="zhgia891o" data-path="src/components/PartnerLogos.tsx">

          {partners.map((partner, index) =>
          <motion.div
            key={index}
            className="group relative bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-500 shadow-lg hover:shadow-2xl"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }} data-id="dzit7jlfd" data-path="src/components/PartnerLogos.tsx">

              {/* Floating Animation */}
              <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }} data-id="s6ut40uod" data-path="src/components/PartnerLogos.tsx" />


              <div className="relative overflow-hidden rounded-xl" data-id="dewk9kz0i" data-path="src/components/PartnerLogos.tsx">
                <motion.img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-20 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }} data-id="ydpo2t02l" data-path="src/components/PartnerLogos.tsx" />

                
                {/* Overlay with company name */}
                <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }} data-id="8m1gifytd" data-path="src/components/PartnerLogos.tsx">

                  <span className="text-white font-semibold text-sm mb-2" data-id="qd8f7mlu2" data-path="src/components/PartnerLogos.tsx">
                    {partner.name}
                  </span>
                </motion.div>
              </div>

              {/* Slide Animation Effect */}
              <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -100 }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }} data-id="ke2jmp6jh" data-path="src/components/PartnerLogos.tsx" />


              {/* Partner Name Below */}
              <motion.h3
              className="text-center mt-4 font-semibold text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }} data-id="3gheeec8x" data-path="src/components/PartnerLogos.tsx">

                {partner.name}
              </motion.h3>
            </motion.div>
          )}
        </motion.div>

        {/* Animated Background Elements */}
        <div className="relative mt-16" data-id="dzu8251ew" data-path="src/components/PartnerLogos.tsx">
          <motion.div
            className="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="j69jdbfxy" data-path="src/components/PartnerLogos.tsx" />

          <motion.div
            className="absolute top-10 right-1/3 w-3 h-3 bg-pink-400 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="98qrpp7pn" data-path="src/components/PartnerLogos.tsx" />

          <motion.div
            className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="g40ck9r62" data-path="src/components/PartnerLogos.tsx" />

        </div>
      </div>
    </section>);

};

export default PartnerLogos;