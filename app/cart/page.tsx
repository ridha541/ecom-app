'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from '@/lib/cartSlice';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleIncrease = (id: number) => {
    dispatch(increaseQty(id));
    toast.success('Quantity increased', {
      position: 'top-center',
    });
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQty(id));
    toast.success('Quantity decreased', {
      position: 'top-center',
    });
  };

  return (
    <div
      className="max-w-3xl mx-auto p-6 min-h-[56.75vh] text-black overflow-x-hidden"
      style={{ overflow: 'hidden' }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-center">No items in cart.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-16 h-16 object-contain"
                  alt={item.title}
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleDecrease(item.id)}>➖</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>➕</button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <strong>Total:</strong>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => {
                dispatch(clearCart());
                toast('Cart cleared', { position: 'top-center' });
              }}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400 transition"
            >
              Clear Cart
            </button>

            <Link href="/checkout">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
