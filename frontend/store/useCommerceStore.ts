"use client";

import { create } from "zustand";
import type { CartLine, Product } from "@/types/commerce";

type CommerceState = {
  cart: CartLine[];
  wishlist: string[];
  recentlyViewed: Product[];
  addToCart: (product: Product, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  trackProduct: (product: Product) => void;
  subtotal: () => number;
};

export const useCommerceStore = create<CommerceState>((set, get) => ({
  cart: [],
  wishlist: [],
  recentlyViewed: [],
  addToCart: (product, size = product.sizes[0], color = product.color) =>
    set((state) => {
      const found = state.cart.find((line) => line.product.id === product.id && line.size === size && line.color === color);
      if (found) {
        return {
          cart: state.cart.map((line) =>
            line.product.id === product.id && line.size === size && line.color === color
              ? { ...line, quantity: line.quantity + 1 }
              : line
          )
        };
      }
      return { cart: [...state.cart, { product, size, color, quantity: 1 }] };
    }),
  removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((line) => line.product.id !== productId) })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart
        .map((line) => (line.product.id === productId ? { ...line, quantity: Math.max(1, quantity) } : line))
        .filter((line) => line.quantity > 0)
    })),
  toggleWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId]
    })),
  trackProduct: (product) =>
    set((state) => ({
      recentlyViewed: [product, ...state.recentlyViewed.filter((item) => item.id !== product.id)].slice(0, 8)
    })),
  subtotal: () => get().cart.reduce((total, line) => total + line.product.price * line.quantity, 0)
}));
