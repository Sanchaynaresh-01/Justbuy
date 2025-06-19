import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
  {
    title: "Company",
    links: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" }]

  },
  {
    title: "Shop",
    links: [
    { label: "All Products", href: "#products" },
    { label: "Electronics", href: "#electronics" },
    { label: "Fashion", href: "#fashion" },
    { label: "Home & Garden", href: "#home" }]

  },
  {
    title: "Support",
    links: [
    { label: "Help Center", href: "#help" },
    { label: "Shipping Info", href: "#shipping" },
    { label: "Returns", href: "#returns" },
    { label: "Size Guide", href: "#size-guide" }]

  },
  {
    title: "Legal",
    links: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" }]

  }];


  const socialLinks = [
  { icon: Facebook, href: "#facebook", color: "hover:text-blue-500" },
  { icon: Twitter, href: "#twitter", color: "hover:text-sky-400" },
  { icon: Instagram, href: "#instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "#youtube", color: "hover:text-red-500" }];


  const contactInfo = [
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: Mail, text: "hello@justbuy.com" },
  { icon: MapPin, text: "123 Commerce St, Shopping City, SC 12345" }];


  return (
    <footer id="contact" className="bg-gray-900 text-white" data-id="ntis0k0ki" data-path="src/components/Footer.tsx">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16" data-id="lj0rzo7n2" data-path="src/components/Footer.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12" data-id="w7wun6dy2" data-path="src/components/Footer.tsx">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} data-id="4klhv9oje" data-path="src/components/Footer.tsx">

            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }} data-id="947jggjtw" data-path="src/components/Footer.tsx">

              <ShoppingBag className="w-8 h-8 text-purple-400" data-id="3gblmb7dv" data-path="src/components/Footer.tsx" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" data-id="16wwzp9hy" data-path="src/components/Footer.tsx">
                Just Buy
              </span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 leading-relaxed" data-id="d7pmf6ayk" data-path="src/components/Footer.tsx">
              Your trusted destination for premium products, exceptional service, and unbeatable shopping experiences. Discover quality that exceeds expectations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3" data-id="cax48baio" data-path="src/components/Footer.tsx">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }} data-id="nk08w2lsr" data-path="src/components/Footer.tsx">

                    <IconComponent className="w-4 h-4 text-purple-400" data-id="mhmzcw8ak" data-path="src/components/Footer.tsx" />
                    <span className="text-sm" data-id="ihjqlhqt6" data-path="src/components/Footer.tsx">{item.text}</span>
                  </motion.div>);

              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) =>
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
            viewport={{ once: true }} data-id="s1brj77ic" data-path="src/components/Footer.tsx">

              <h3 className="text-lg font-semibold mb-6 text-white" data-id="e479of73s" data-path="src/components/Footer.tsx">
                {section.title}
              </h3>
              <ul className="space-y-3" data-id="mt25rmrc2" data-path="src/components/Footer.tsx">
                {section.links.map((link, linkIndex) =>
              <motion.li key={link.label} data-id="3120z53gx" data-path="src/components/Footer.tsx">
                    <motion.a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                  whileHover={{ x: 5, color: "#a855f7" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * linkIndex }}
                  viewport={{ once: true }} data-id="hfkihv5ry" data-path="src/components/Footer.tsx">

                      {link.label}
                    </motion.a>
                  </motion.li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 mb-12 border border-purple-800/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} data-id="n772dzaxa" data-path="src/components/Footer.tsx">

          <div className="grid md:grid-cols-2 gap-6 items-center" data-id="41hdt4wby" data-path="src/components/Footer.tsx">
            <div data-id="1tlwuctzx" data-path="src/components/Footer.tsx">
              <h3 className="text-2xl font-bold mb-2" data-id="xpabw931w" data-path="src/components/Footer.tsx">Stay in the Loop</h3>
              <p className="text-gray-400" data-id="sdnvtsqtg" data-path="src/components/Footer.tsx">
                Get the latest updates on new products, exclusive deals, and special offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3" data-id="7nyw7e4xs" data-path="src/components/Footer.tsx">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" data-id="3bficv4ul" data-path="src/components/Footer.tsx" />

              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} data-id="yioyugy35" data-path="src/components/Footer.tsx">

                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800" data-id="4gyq316wz" data-path="src/components/Footer.tsx">
          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-6 mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} data-id="slscw9qux" data-path="src/components/Footer.tsx">

            <span className="text-gray-400 text-sm" data-id="wulftlklq" data-path="src/components/Footer.tsx">Follow us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors p-2 hover:bg-gray-800 rounded-lg`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }} data-id="p407sf269" data-path="src/components/Footer.tsx">

                  <IconComponent className="w-5 h-5" data-id="lssqb7xo5" data-path="src/components/Footer.tsx" />
                </motion.a>);

            })}
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} data-id="g6e3ywnyf" data-path="src/components/Footer.tsx">

            <span className="text-gray-400 text-sm" data-id="uqhx1e4hz" data-path="src/components/Footer.tsx">We accept:</span>
            <div className="flex space-x-2" data-id="7vh2aaaou" data-path="src/components/Footer.tsx">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method, index) =>
              <motion.div
                key={method}
                className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300 border border-gray-700"
                whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }} data-id="q4kpbxkr8" data-path="src/components/Footer.tsx">

                  {method}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800 py-6 bg-gray-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} data-id="9mudjsisr" data-path="src/components/Footer.tsx">

        <div className="container mx-auto px-4" data-id="n50y4mdqd" data-path="src/components/Footer.tsx">
          <div className="flex flex-col md:flex-row justify-between items-center" data-id="4zg3971q4" data-path="src/components/Footer.tsx">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }} data-id="gsnn8cmse" data-path="src/components/Footer.tsx">

              &copy; 2024 Just Buy. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1" data-id="9h6l4v4cq" data-path="src/components/Footer.tsx">

                <Heart className="w-4 h-4 text-red-500 fill-current" data-id="aihvk3j6p" data-path="src/components/Footer.tsx" />
              </motion.span>
              for amazing shopping experiences.
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-6 text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }} data-id="limasnxbt" data-path="src/components/Footer.tsx">

              <motion.a
                href="#privacy"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }} data-id="i7df1hth6" data-path="src/components/Footer.tsx">

                Privacy
              </motion.a>
              <motion.a
                href="#terms"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }} data-id="ud1op6xyy" data-path="src/components/Footer.tsx">

                Terms
              </motion.a>
              <motion.a
                href="#cookies"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }} data-id="cv3042hyy" data-path="src/components/Footer.tsx">

                Cookies
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }} data-id="k81o0b4rm" data-path="src/components/Footer.tsx">

        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }} data-id="zopkqa868" data-path="src/components/Footer.tsx">

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18" data-id="8u6vd9rfd" data-path="src/components/Footer.tsx" />

        </motion.svg>
      </motion.button>
    </footer>);

};

export default Footer;