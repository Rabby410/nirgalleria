import Link from 'next/link';
import React from 'react';
import { FaExchangeAlt, FaRegSadCry } from 'react-icons/fa';
import { RiRefund2Fill } from "react-icons/ri";

const RefundAndExchangePolicy = () => {
    return (
        <>
            <div className="py-10 text-center bg-black text-white">
                <h1 className='text-6xl'>Refund & Exchange Policy</h1>
                <p className='pt-3 text-gray-500'><Link href="/" className=' hover:text-white'>Home</Link> <span>/</span> <span>Refund & Exchange Policy</span></p>
            </div>
            <div className="max-w-5xl mx-auto p-6">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <FaExchangeAlt className="mr-2 text-green-500" />
                        Exchange Policy
                    </h2>
                    <p className="mb-4">
                        All products purchased from <a href="https://nirgalleria.vercel.app/" className="text-blue-600 hover:underline">www.nirgalleria.vercel.app</a> can be exchanged within 15 days only if:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>The item(s) is defective or has missing accessories, wrong size/order/article issue at the time of delivery.</li>
                        <li>Customer must notify us within 3 days of delivery of the order. Customer will be required to fill the form <a href="http://localhost/Rk/return_and_exchange_form/" className="text-blue-600 hover:underline">Return and Exchange Form</a>.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Additional Exchange Information</h2>
                    <p className="mb-4">
                        Products ordered online can be exchanged at the “Nir Galleria” retail store. The tag/label must be intact at the time of exchange either from the store or online.
                    </p>
                    <p className="mb-4">
                        There are certain scenarios where it is difficult for us to consider exchanges. Such scenarios include, but are not limited to the following:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Exchange request is made outside the specified time frame.</li>
                        <li>Product colors may vary slightly due to the photographic lighting source or the screen, thus the product is not eligible for exchange for this particular reason.</li>
                        <li>Product is damaged because of use.</li>
                        <li>Product has been tampered with.</li>
                        <li>Anything is missing from the package, including price tags, labels, original packing, and order invoice.</li>
                        <li>Do not accept the parcel if it’s damaged or the seal is opened. Nir Galleria will not be responsible for such exchanges.</li>
                        <li>Any excess fabric or embellishment utilized during shoots will not be provided with the product unless mentioned on the website.</li>
                        <li>Nir Galleria doesn’t take responsibility for items purchased from any unauthorized sellers and individuals.</li>
                        <li>Any order placed at <a href="https://nirgalleria.vercel.app/" className="text-blue-600 hover:underline">nirgalleria.vercel.app</a>, will be delivered along with Nir Galleria’s own packaging materials. We will not entertain any complaint where the customer hasn’t received the order in the original flyer/tape.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <RiRefund2Fill className="mr-2 text-red-500" />
                        Refund Policy
                    </h2>
                    <p className="mb-4">Nir Galleria does not offer a “cash refund”.</p>
                    <p className="mb-4">
                        Refunds may only be issued on:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Credit/debit card order(s) when the customer cancels the order before Nir Galleria starts processing the shipment.</li>
                        <li>If an article is found to be defective during Quality Control and being the only piece available, gets removed from the order.</li>
                    </ul>
                    <p className="mb-4">
                        It is mentioned here that in such cases, Nir Galleria will approach for a refund; start, authorize & approve the refund procedure in favor of the customers within the next 10 days [maximum] from the date of notification received from the customers requesting Order Cancellation. The customers will get their refund according to their financial institution’s policy through which they’ve made the transactions. The time duration for getting the refund may vary from local & international transactions as well as due to the payment methods they’ve adopted. Nir Galleria can’t be found liable in case of any such delay by the financial service providers through whom the payments were conducted.
                    </p>
                    <p className="text-sm text-gray-600">
                        ** Items that are developed & sold through “Pre-Booking” will be excluded from this.
                    </p>
                </section>

                <section className="text-center">
                    <FaRegSadCry className="text-6xl text-red-500 mb-4" />
                    <p className="text-lg text-gray-700">
                        We apologize for any inconvenience and appreciate your understanding.
                    </p>
                </section>
            </div>
        </>
    );
}

export default RefundAndExchangePolicy;
