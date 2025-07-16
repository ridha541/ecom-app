'use client';

import { useAppSelector, useAppDispatch } from '@/lib/store';
import { clearCart } from '@/lib/cartSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const items = useAppSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [form, setForm] = useState({ name: '', address: '', card: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.address || !form.card) {
      alert('Please fill out all fields.');
      return;
    }

    // In real app: Send order to backend
    setSuccess(true);
    dispatch(clearCart());
    setTimeout(() => router.push('/'), 3000); // Redirect to home
  };

  if (items.length === 0 && !success) {
    return <p className="p-6 text-center text-gray-500">Your cart is empty. Add items before checkout.</p>;
  }

  return (
    <div className="min-h-[54vh] overflow-hidden p-6 max-w-3xl text-black mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>

      {success ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center shadow">
          ✅ Order placed successfully! Redirecting to homepage...
        </div>
      ) : (
        <>
          <div className="bg-white p-6 rounded-xl shadow space-y-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {items.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg pt-4 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold mb-2">Shipping & Payment</h2>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full border rounded px-4 py-2"
            />
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              className="w-full border rounded px-4 py-2"
            />
            <input
              name="card"
              value={form.card}
              onChange={handleChange}
              placeholder="Card Number"
              className="w-full border rounded px-4 py-2"
            />
            <button
              onClick={placeOrder}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
