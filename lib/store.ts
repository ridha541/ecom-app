import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice'; // ✅ Make sure the name matches your actual file

import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

// ✅ Load cart state from localStorage
const loadState = () => {
  try {
    const serialized = localStorage.getItem('cart');
    return serialized ? { cart: JSON.parse(serialized) } : undefined;
  } catch {
    return undefined;
  }
};

// ✅ Configure Redux store with both cart and products
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer, // ✅ Add the products slice here
  },
  preloadedState: typeof window !== 'undefined' ? loadState() : undefined,
});

// ✅ Persist cart state to localStorage
store.subscribe(() => {
  if (typeof window === 'undefined') return;
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch {
    // Ignore write errors
  }
});

// ✅ Typed Redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
