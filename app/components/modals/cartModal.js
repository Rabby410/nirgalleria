'use client';

import { useCart } from '@/app/context/cartContext';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const CartModal = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [autoCloseTimer, setAutoCloseTimer] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    if (isCartOpen && !isHovered) {
      const timer = setTimeout(() => {
        toggleCart();
      }, 5000);

      setAutoCloseTimer(timer);
    }

    return () => {
      clearTimeout(autoCloseTimer);
    };
  }, [isCartOpen, isHovered]);

  const handleCheckout = () => {
    if (isMounted) {
      toggleCart();
      router.push('/checkout');
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed top-0 right-0 w-96 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50 rounded-l-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
        <FaTimes
          className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors duration-300"
          onClick={toggleCart}
        />
      </div>
      <div className="p-5">
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">${Number(item.price).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition-all duration-300"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
