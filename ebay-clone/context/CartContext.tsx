'use client';
import { createContext, useContext, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (item: CartItem) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        toast({
          title: "Added to cart",
          description: `Added another ${item.title} to cart`,
        });
        return currentCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${item.title} added to cart`,
        });
        return [...currentCart, item];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(currentCart => {
      const itemToRemove = currentCart.find(item => item.id === itemId);
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.title} removed from cart`,
        });
      }
      return currentCart.filter(item => item.id !== itemId);
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Quantity cannot be less than 1",
      });
      return;
    }

    try {
      setCart(currentCart =>
        currentCart.map(item =>
          item.id === itemId
            ? { ...item, quantity }
            : item
        )
      );
      toast({
        title: "Cart updated",
        description: "Successfully updated cart quantity",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update cart",
      });
    }
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
