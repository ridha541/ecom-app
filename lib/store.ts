import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Load from localStorage
const loadState = () => {
  try {
    const serialized = localStorage.getItem('cart');
    return serialized ? { cart: JSON.parse(serialized) } : undefined;
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: typeof window !== 'undefined' ? loadState() : undefined,
});

// Save to localStorage
store.subscribe(() => {
  if (typeof window === 'undefined') return;
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
