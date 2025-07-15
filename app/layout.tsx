'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import Link from 'next/link';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} 
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #f8f4f0, #ddd0c8, #b0a89f)',
      }}>
        <Provider store={store}>
          <nav className="bg-[#c8bdb5] shadow-md text-gray-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Title */}
        <div className="text-xl font-semibold">MyShop</div>

        {/* Center: Animated Nav Buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="hover:underline transition font-medium">
              Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/cart" className="hover:underline transition font-medium">
              Cart
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
          <div className="md:pl-30 md:pr-30 bg-transparent">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
