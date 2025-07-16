'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { addToCart } from '@/lib/cartSlice';
import { fetchProducts } from '@/lib/productsSlice';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import toast from 'react-hot-toast';


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftFadeIn = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightFadeIn = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { items: products, loading, error } = useAppSelector((state) => state.products);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
    created: () => setLoaded(true),
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!instanceRef.current) return;
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  return (
    <main className="min-h-screen bg-[#f5f0eb] text-gray-900">
      {/* Hero Section */}
      <section className="md:h-[90vh] h-[90vh] flex flex-col justify-center items-center bg-[#e6ddd5] px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
        >
          Discover Your Style
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl text-center max-w-xl mb-6"
        >
          Browse premium products hand-picked for you. Quality guaranteed.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#c8bdb5] px-6 py-3 rounded-full shadow font-medium cursor-pointer"
        >
          <Link href="/catalogue">Explore Products</Link>
        </motion.div>
      </section>

      {/* Carousel / Banner Section */}
      <section className="w-full px-4 md:px-16 mt-12 relative">
        <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
          <div className="keen-slider__slide number-slide1 bg-[#d8cfc8] h-[300px] flex items-center justify-center md:text-3xl font-bold">
            🔥 Summer Sale - Up to 50% Off!
          </div>
          <div className="keen-slider__slide number-slide2 bg-[#c8bdb5] h-[300px] flex items-center justify-center md:text-3xl font-bold">
            🆕 New Arrivals Just Dropped
          </div>
          <div className="keen-slider__slide number-slide3 bg-[#e6ddd5] h-[300px] flex items-center justify-center md:text-3xl font-bold">
            🚚 Free Shipping on All Orders
          </div>
        </div>

        {/* Arrows */}
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-3xl text-[#7d5a50] hover:text-[#5c4033] transition"
            >
              ◀
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-3xl text-[#7d5a50] hover:text-[#5c4033] transition"
            >
              ▶
            </button>
          </>
        )}


        {/* Dots */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({
              length: instanceRef.current.track.details.slides.length,
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? 'bg-[#7d5a50]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 md:px-16" ref={ref}>
        <h2 className="text-3xl font-semibold mb-6 text-center"> Featured Products</h2>

        {loading && <p className="text-center text-lg">Loading products...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={index % 2 === 0 ? leftFadeIn : rightFadeIn}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-[#7d5a50] font-medium mb-2">${product.price}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  dispatch(addToCart({ ...product, quantity: 1 }));
                  toast.success(`${product.title} added to cart`);
                }}

                className="mt-auto bg-[#c8bdb5] text-gray-900 py-2 px-4 rounded-xl hover:bg-[#b3a49a] transition"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
          
        </motion.div>



{/* View All Button */}
<div className="mt-8 flex justify-center">
  <Link
    href="/catalogue"
    className="bg-[#c8bdb5] text-gray-900 px-6 py-3 rounded-full shadow hover:bg-[#b3a49a] transition text-lg font-medium"
  >
    View All Products
  </Link>
</div>

        
      </section>


      


      
    </main>
  );
}
