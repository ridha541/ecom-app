'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f0eb] text-gray-900 px-6 py-12 pb-0 mb-0">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8"
        >
          Contact Us
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 mb-10 leading-7"
        >
          We’d love to hear from you! Whether you have a question about our products,
          feedback, or just want to say hello — drop us a message and we’ll get back to you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-md text-left"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c8bdb5]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c8bdb5]"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-semibold mb-1">Your Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#c8bdb5]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7d5a50] text-white font-medium py-3 rounded-md hover:bg-[#5c4033] transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 text-sm text-gray-600"
        >
          <p>Email: support@myshop.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Hours: Mon–Fri, 9:00 AM – 6:00 PM</p>
        </motion.div>
      </div>
    </main>
  );
}
