'use client';

import { useCart } from '@/app/context/cartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Checkout = () => {
  const { cartItems, clearCart, clearLocalStorage, updateQuantity } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const router = useRouter();

  const totalAmount = cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    clearCart();
    clearLocalStorage(); 
    setTimeout(() => {
      router.push('/'); 
    }, 2000); 
  };

  if (orderSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-green-800">
        <IoMdCheckmarkCircleOutline className="text-6xl mb-4" />
        <h2 className="text-2xl font-semibold">Order Successful!</h2>
        <p className="text-lg mt-2">Thank you for your purchase.</p>
      </div>
    );
  }

  const handleQuantityChange = (itemId, delta) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">Order Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-md border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-center">Quantity</th>
                  <th className="p-4 text-right">Unit Price</th>
                  <th className="p-4 text-right">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border border-gray-300"
                      />
                      <span className="text-gray-800 font-semibold truncate">{item.name}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition duration-200"
                          disabled={item.quantity <= 1}
                        >
                          <span className="text-lg">−</span>
                        </button>
                        <span className="text-lg font-semibold text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition duration-200"
                        >
                          <span className="text-lg">+</span>
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-right text-gray-800 font-semibold">
                      ${Number(item.price).toFixed(2)}
                    </td>
                    <td className="p-4 text-right text-gray-800 font-semibold">
                      ${Number(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 text-gray-700 border-t border-gray-200">
                  <td colSpan="3" className="p-4 text-right font-bold">Total Amount:</td>
                  <td className="p-4 text-right font-bold text-gray-800">
                    ${totalAmount.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Payment & Billing Information */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Number</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1234 5678 9012 3456"
                />
                <AiOutlineCreditCard className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">CVC</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="123"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Billing Address</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Street Address"
              />
            </div>

            <button
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition duration-300"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
