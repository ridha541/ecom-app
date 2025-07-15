'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store';
import { removeFromCart, increaseQty, decreaseQty, clearCart } from '@/lib/cartSlice';

export default function CartPage() {
  const items = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-[700px] overflow-x-hidden" style={{overflow:'hidden'}}>
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {items.length === 0 ? (
        <p className='text-center'>No items in cart.</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">
              <div className="flex items-center gap-4">
                <img src={item.image} className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(decreaseQty(item.id))}>➖</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-600">🗑️</button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <strong>Total:</strong>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button onClick={() => dispatch(clearCart())} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400 transition">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
