"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "@/types/product";

interface ICartItem extends IProduct {
  quantity: number;
}

interface ICartContext {
  items: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: IProduct) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
