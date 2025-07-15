'use client';

import { motion } from 'framer-motion';
import { useAppDispatch } from '@/lib/store';
import { addToCart } from '@/lib/cartSlice';

export default function ProductCard({ product }: { product: any }) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
  layout
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="rounded-2xl shadow-lg p-4 flex flex-col"
  style={{
    backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f0eae4)',
  }}
>
  <img src={product.image} alt={product.title} className="h-52 object-contain mb-4 mix-blend-multiply" />
  <h2 className="font-semibold text-center text-gray-900 line-clamp-2 min-h-[3rem]">
    {product.title}
  </h2>
  <p className="text-yellow-600 text-center font-bold text-lg mt-2">${product.price}</p>

  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
    className="mt-auto bg-[#c8bdb5] text-white py-2 px-4 rounded-lg hover:bg-[#b5a89e] transition"

  >
    Add to Cart
  </motion.button>
</motion.div>
  );
}
