'use client';

import Link from 'next/link';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '@/app/context/cartContext';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <AiOutlineShoppingCart className="text-3xl text-gray-500" />
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center p-6">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-center">Quantity</th>
                    <th className="p-4 text-right">Unit Price</th>
                    <th className="p-4 text-right">Total Price</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="p-4 flex items-center space-x-4 truncate max-w-xs">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <span className="font-semibold text-gray-700 truncate">{item.name}</span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-800">
                        ${Number(item.price).toFixed(2)}
                      </td>
                      <td className="p-4 text-right text-gray-800">
                        ${Number(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTimes className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100 text-gray-700">
                    <td colSpan="3" className="p-4 text-right font-bold">Total Amount:</td>
                    <td className="p-4 text-right font-bold text-gray-800">
                      ${calculateTotal()}
                    </td>
                    <td className="p-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="border-t p-4 flex flex-col md:flex-row justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mb-4 md:mb-0"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
