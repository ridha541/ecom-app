'use client';

import './globals.css';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage:
            'linear-gradient(to bottom right, #f8f4f0, #ddd0c8, #b0a89f)',
        }}
      >
        <Provider store={store}>
          <nav className="bg-[#c8bdb5] shadow-md text-gray-900 px-4 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between relative">
    {/* Mobile: Hamburger */}
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>

    {/* Title: Left on large screens, center on small */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-xl font-semibold sm:static absolute left-1/2 sm:left-0 transform sm:transform-none -translate-x-1/2 sm:translate-x-0"
    >
      MyShop
    </motion.div>

    {/* Centered Navigation Links */}
    <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex gap-10">
      <motion.div whileHover={{ scale: 1.1, rotate: -1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" className="hover:underline transition font-medium">
          Home
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, rotate: 1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/about" className="hover:underline transition font-medium">
          About Us
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, rotate: 1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/contact" className="hover:underline transition font-medium">
          Contact Us
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, rotate: 1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/catalogue" className="hover:underline transition font-medium">
          Products
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, rotate: 1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/cart" className="hover:underline transition font-medium">
          Cart
        </Link>
      </motion.div>
    </div>
  </div>

  {/* Mobile Nav Dropdown */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="sm:hidden flex flex-col gap-4 mt-4 px-2"
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="font-medium">
          Home
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="font-medium">
          About Us
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="font-medium">
          Contact Us
        </Link>
        <Link href="/catalogue" onClick={() => setIsOpen(false)} className="font-medium">
          Products
        </Link>
        <Link href="/cart" onClick={() => setIsOpen(false)} className="font-medium">
          Cart
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

          {/* MAIN CONTENT */}
          <div className="md:pl-30 md:pr-30 bg-transparent">
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#fff',
                  color: '#333',
                  fontSize: '14px',
                },
              }}
            />
          </div>

          <footer className="bg-[#c8bdb5] text-gray-900 px-6 py-10 mt-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
    {/* Brand */}
    <div>
      <h3 className="text-2xl font-bold mb-2">ShopNow</h3>
      <p>
        Premium quality, thoughtful design. Elevate your everyday shopping experience with us.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-1">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/catalogue">Shop</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Support</h4>
      <ul className="space-y-1">
        <li><Link href="/faq">FAQs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/returns">Returns</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
      </ul>
    </div>

    {/* Newsletter + Socials */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
      <form className="flex flex-col sm:flex-row items-center gap-2 mb-4">
        <input
          type="email"
          placeholder="Email address"
          className="px-3 py-2 rounded-md w-full sm:w-auto flex-1"
        />
        <button
          type="submit"
          className="bg-[#7d5a50] text-white px-4 py-2 rounded-md hover:bg-[#5c4033] transition"
        >
          Subscribe
        </button>
      </form>
      <div className="flex gap-4">
        <a href="#" aria-label="Facebook">
          <Facebook className="w-5 h-5 hover:text-[#5c4033]" />
        </a>
        <a href="#" aria-label="Instagram">
          <Instagram className="w-5 h-5 hover:text-[#5c4033]" />
        </a>
        <a href="#" aria-label="Twitter">
          <Twitter className="w-5 h-5 hover:text-[#5c4033]" />
        </a>
        <a href="#" aria-label="YouTube">
          <Youtube className="w-5 h-5 hover:text-[#5c4033]" />
        </a>
      </div>
    </div>
  </div>

  <div className="text-center text-xs text-gray-700 mt-10 border-t pt-4">
    &copy; {new Date().getFullYear()} ShopNow. All rights reserved.
  </div>
</footer>
        </Provider>
      </body>
    </html>
  );
}
