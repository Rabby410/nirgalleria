'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Load cart items from local storage on initial load
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Save cart items to local storage whenever cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add or update item in the cart
  const addToCart = (product) => {
    setCartItems(prevCartItems => {
      const existingProductIndex = prevCartItems.findIndex(item => item.id === product.id);

      if (existingProductIndex > -1) {
        // Increase the quantity if the product already exists
        const updatedCartItems = prevCartItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + (product.quantity || 1) } // Add the specified quantity or default to 1
            : item
        );
        // console.log('Updated Cart Items (Add):', updatedCartItems);
        return updatedCartItems;
      } else {
        // Add the new product to the cart with the specified quantity or default to 1
        const updatedCartItems = [...prevCartItems, { ...product, quantity: product.quantity || 1 }];
        // console.log('New Cart Items (Add):', updatedCartItems);
        return updatedCartItems;
      }
    });

    setCartOpen(true);
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  // Clear cart (but not local storage)
  const clearCart = () => {
    setCartItems([]);
  };

  // Clear local storage
  const clearLocalStorage = () => {
    localStorage.removeItem('cartItems');
  };

  // Update item quantity in the cart
  const updateQuantity = (productId, quantity) => {
    const newQuantity = Math.max(1, parseInt(quantity, 10)); // Ensure quantity is at least 1

    // console.log(`Updating product ${productId} to quantity ${newQuantity}`);

    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      // console.log('Updated Cart Items (Update):', updatedCartItems);
      return updatedCartItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isCartOpen, toggleCart, clearCart, clearLocalStorage, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
