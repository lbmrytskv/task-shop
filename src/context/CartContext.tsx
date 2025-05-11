
import React, { createContext, useReducer, useContext } from 'react';
import type { CartState, CartAction } from '../types/Cart';
import { cartReducer } from './cartReducer';

// Provides global cart state and dispatch function across the app using React Context and Reducer

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
