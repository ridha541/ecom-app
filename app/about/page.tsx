'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f0eb] text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8"
        >
          About Us
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg leading-8 text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Welcome to <strong>MyShop</strong> — your trusted destination for curated, affordable, and premium quality products. Since day one, our goal has been simple: to make online shopping delightful, effortless, and inspiring.
        </motion.p>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
            <p className="text-gray-700 leading-7">
              To bring together thoughtfully chosen products and exceptional service that cater to your everyday needs. We’re driven by innovation, sustainability, and most importantly — customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-3">🌟 Our Vision</h2>
            <p className="text-gray-700 leading-7">
              To become a global e-commerce brand known for transparency, quality, and creating meaningful connections with customers worldwide — one product at a time.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6">💡 Why Choose MyShop?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-md leading-7 text-center">
            <li>✔️ Curated & premium products</li>
            <li>✔️ Fast & secure delivery</li>
            <li>✔️ Easy returns & reliable support</li>
            <li>✔️ Secure checkout options</li>
            <li>✔️ Responsive mobile experience</li>
            <li>✔️ We value every customer, always</li>
          </ul>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold mb-3">📖 Our Story</h2>
          <p className="text-gray-700 leading-8">
            MyShop began as a passion project among three friends who believed that shopping should be more than just a transaction — it should be an experience. Fueled by late-night brainstorming, countless coffee-fueled days, and customer feedback, we built something that reflects our values of authenticity, style, and accessibility.
          </p>
        </motion.div>

        {/* Meet the Team */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-8">👩‍💻 Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Ridha Maryyum', role: 'CEO & Founder' },
              { name: 'Ayaan Khalid', role: 'Lead Designer' },
              { name: 'Zoya Ahmed', role: 'Head of Marketing' },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-[#d8cfc8] mx-auto rounded-full mb-4"></div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 bg-[#c8bdb5] py-8 px-6 rounded-xl shadow"
        >
          <h3 className="text-2xl font-semibold mb-3">Join the MyShop Family</h3>
          <p className="text-gray-800 mb-4">
            Be the first to hear about new arrivals, exclusive offers, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-[#7d5a50] text-white px-6 py-2 rounded-md hover:bg-[#5c4033] transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
