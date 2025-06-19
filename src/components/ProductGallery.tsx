import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    badge: "New"
  },
  {
    id: 3,
    name: "Premium Backpack",
    price: 89,
    originalPrice: 129,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
    badge: "Featured"
  },
  {
    id: 5,
    name: "Luxury Sunglasses",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    badge: "Trending"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 129,
    originalPrice: 179,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    badge: "Popular"
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
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900" data-id="rphz6nlb7" data-path="src/components/ProductGallery.tsx">
      <div className="container mx-auto px-4" data-id="bpfd2bveu" data-path="src/components/ProductGallery.tsx">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref} data-id="2sodv8b26" data-path="src/components/ProductGallery.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" data-id="sfga48mwp" data-path="src/components/ProductGallery.tsx">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-id="epjlzlwmf" data-path="src/components/ProductGallery.tsx">
            Discover our handpicked selection of premium products designed to enhance your lifestyle
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} data-id="b70uwa3me" data-path="src/components/ProductGallery.tsx">

          {products.map((product) =>
          <motion.div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            variants={itemVariants}
            whileHover={{ y: -10 }} data-id="6s1mjngkf" data-path="src/components/ProductGallery.tsx">

              <div className="relative overflow-hidden" data-id="pofyn4hlb" data-path="src/components/ProductGallery.tsx">
                <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }} data-id="xm3ibe0kg" data-path="src/components/ProductGallery.tsx" />

                
                {product.badge &&
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold" data-id="by8f3fuff" data-path="src/components/ProductGallery.tsx">
                    {product.badge}
                  </div>
              }
                
                <motion.div
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} data-id="9vsqh8777" data-path="src/components/ProductGallery.tsx">

                  <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" data-id="8c9pjmzie" data-path="src/components/ProductGallery.tsx" />
                </motion.div>
                
                <motion.div
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-id="fn68tjtco" data-path="src/components/ProductGallery.tsx">

                  <motion.button
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }} data-id="w028quq84" data-path="src/components/ProductGallery.tsx">

                    <ShoppingCart className="w-4 h-4" data-id="edkexbrs3" data-path="src/components/ProductGallery.tsx" />
                    <span data-id="mhm8279ah" data-path="src/components/ProductGallery.tsx">Quick Add</span>
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-6" data-id="lcahiovmr" data-path="src/components/ProductGallery.tsx">
                <div className="flex items-center justify-between mb-2" data-id="zyc4ynqj7" data-path="src/components/ProductGallery.tsx">
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium" data-id="0c7hxeorn" data-path="src/components/ProductGallery.tsx">
                    {product.category}
                  </span>
                  <div className="flex items-center" data-id="opdvpd34f" data-path="src/components/ProductGallery.tsx">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" data-id="dq3j73935" data-path="src/components/ProductGallery.tsx" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1" data-id="412z1aifu" data-path="src/components/ProductGallery.tsx">
                      {product.rating}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3" data-id="femgx86j4" data-path="src/components/ProductGallery.tsx">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between" data-id="2wb5yajvq" data-path="src/components/ProductGallery.tsx">
                  <div className="flex items-center space-x-2" data-id="o6b8iw4s6" data-path="src/components/ProductGallery.tsx">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400" data-id="rnjtbk2c7" data-path="src/components/ProductGallery.tsx">
                      ${product.price}
                    </span>
                    {product.originalPrice &&
                  <span className="text-lg text-gray-400 line-through" data-id="7z7p3i3h5" data-path="src/components/ProductGallery.tsx">
                        ${product.originalPrice}
                      </span>
                  }
                  </div>
                  
                  <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} data-id="7597llapf" data-path="src/components/ProductGallery.tsx">

                    <ShoppingCart className="w-4 h-4" data-id="jl1co9y5l" data-path="src/components/ProductGallery.tsx" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }} data-id="cj6agxl14" data-path="src/components/ProductGallery.tsx">

          <motion.button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} data-id="4rvbf134t" data-path="src/components/ProductGallery.tsx">

            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>);

};

export default ProductGallery;