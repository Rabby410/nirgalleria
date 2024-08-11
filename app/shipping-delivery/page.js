"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";

const ShippingInfo = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <>
            <div className="py-10 text-center bg-black text-white">
                <h1 className='text-6xl'>Shipping Delivery</h1>
                <p className='pt-3 text-gray-500'><Link href="/" className=' hover:text-white'>Home</Link> <span>/</span> <span>Shipping Delivery</span></p>
            </div>
            <div className="p-5 max-w-4xl mx-auto">
                <div className="flex justify-end items-center mb-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        <FaLanguage className="mr-2" />
                        {isEnglish ? "বাংলা" : "English"}
                    </button>
                </div>
                {isEnglish ? (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Shipping Information</h1>
                        <p className="mb-4">
                            We currently ship to all areas within Bangladesh, Australia,
                            Germany, Singapore, United Arab Emirates, United Kingdom and the
                            United States of America. Please note that we currently do not have
                            any outlets/stores outside of Bangladesh.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">Shipping methods</h2>
                        <p className="mb-4">
                            Once the item leaves our warehouse, the shipping method you choose
                            on the checkout page determines how quickly your shipped item(s) is
                            delivered to your doorstep. You will see the shipping options on our
                            Checkout Page after clicking on checkout from our website.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">Shipping categories</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                Standard Shipping (within Bangladesh): within 3-5 days inside
                                Dhaka, within 4-7 days outside Dhaka.
                            </li>
                            <li>
                                Express Shipping (only Dhaka city): within 24-48 hours (only Dhaka
                                city).
                            </li>
                            <li>
                                International Shipping (outside of Bangladesh): within 7-10
                                business days.
                            </li>
                        </ul>
                        <p className="mb-4">
                            The time schedule mentioned above will be started counting after
                            confirmation of the Order from our Support Team over the phone.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">Shipping cost</h2>
                        <table className="w-full border mb-4">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">Shipping Categories</th>
                                    <th className="border px-4 py-2">Shipping Time</th>
                                    <th className="border px-4 py-2">Shipping cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">
                                        Standard shipping (within Dhaka)
                                    </td>
                                    <td className="border px-4 py-2">
                                        Estimated 3-5 business days
                                    </td>
                                    <td className="border px-4 py-2">BDT 70*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">
                                        Pre-Order based Items Standard shipping (within Dhaka City
                                        only)
                                    </td>
                                    <td className="border px-4 py-2">
                                        Estimated 4-7 business days
                                    </td>
                                    <td className="border px-4 py-2">BDT 120*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">
                                        Express shipping (within Dhaka metropolitan area)
                                    </td>
                                    <td className="border px-4 py-2">24-48 hours</td>
                                    <td className="border px-4 py-2">BDT 150*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">
                                        Standard shipping (outside of Dhaka)
                                    </td>
                                    <td className="border px-4 py-2">
                                        Estimated 4-7 business days
                                    </td>
                                    <td className="border px-4 py-2">BDT 120*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">International shipping</td>
                                    <td className="border px-4 py-2">
                                        Estimated 7-10 business days
                                    </td>
                                    <td className="border px-4 py-2">
                                        Please see Shipping and Delivery for international locations
                                        for details
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-sm">
                            *Note: For standard shipping within Bangladesh the cost is for the
                            first 2 kg. Once the weight of the order crosses the limit, you will
                            be charged Tk. 40 for each additional kg.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">শিপিং তথ্য</h1>
                        <p className="mb-4">
                            আমরা বর্তমানে বাংলাদেশ, অস্ট্রেলিয়া, জার্মানি, সিঙ্গাপুর,
                            সংযুক্ত আরব আমিরাত, ইউনাইটেড কিংডম এবং মার্কিন যুক্তরাষ্ট্রের
                            সমস্ত অঞ্চলে শিপিং করি। অনুগ্রহ করে মনে রাখবেন যে বর্তমানে
                            বাংলাদেশের বাইরে আমাদের কোনো আউটলেট/স্টোর নেই।
                        </p>
                        <h2 className="text-xl font-semibold mb-2">পরিবহন পদ্ধতি</h2>
                        <p className="mb-4">
                            একবার আইটেমটি আমাদের গুদাম ছেড়ে চলে গেলে, চেকআউট পৃষ্ঠায় আপনি
                            যে শিপিং পদ্ধতিটি চয়ন করেন তা নির্ধারণ করে যে আপনার পাঠানো
                            আইটেম(গুলি) কত দ্রুত আপনার দোরগোড়ায় পৌঁছে দেওয়া হবে। আমাদের
                            ওয়েবসাইট থেকে চেকআউটে ক্লিক করার পরে আপনি আমাদের চেকআউট
                            পৃষ্ঠায় শিপিং বিকল্পগুলি দেখতে পাবেন।
                        </p>
                        <h2 className="text-xl font-semibold mb-2">শিপিং বিভাগ</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                স্ট্যান্ডার্ড শিপিং (বাংলাদেশের মধ্যে): ঢাকার ভিতরে 3-5 দিনের
                                মধ্যে, ঢাকার বাইরে 4-7 দিনের মধ্যে।
                            </li>
                            <li>
                                এক্সপ্রেস শিপিং (শুধু ঢাকা শহর): 24-48 ঘন্টার মধ্যে (শুধু ঢাকা
                                শহর)।
                            </li>
                            <li>
                                আন্তর্জাতিক শিপিং (বাংলাদেশের বাইরে): 7-10 ব্যবসায়িক দিনের
                                মধ্যে।
                            </li>
                        </ul>
                        <p className="mb-4">
                            ফোনে আমাদের সাপোর্ট টিম থেকে অর্ডার নিশ্চিত করার পর উপরে উল্লিখিত
                            সময়সূচী গণনা শুরু করা হবে।
                        </p>
                        <h2 className="text-xl font-semibold mb-2">শিপিং খরচ</h2>
                        <table className="w-full border mb-4">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">শিপিং বিভাগ</th>
                                    <th className="border px-4 py-2">গ্রেপ্তার সময়</th>
                                    <th className="border px-4 py-2">শিপিং খরচ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">স্ট্যান্ডার্ড শিপিং (ঢাকার মধ্যে)</td>
                                    <td className="border px-4 py-2">আনুমানিক 3-5 কার্যদিবস</td>
                                    <td className="border px-4 py-2">70 টাকা*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">
                                        প্রি-অর্ডার ভিত্তিক আইটেম স্ট্যান্ডার্ড শিপিং (শুধুমাত্র ঢাকা শহরের মধ্যে)
                                    </td>
                                    <td className="border px-4 py-2">আনুমানিক 4-7 কার্যদিবস</td>
                                    <td className="border px-4 py-2">120 টাকা*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">
                                        এক্সপ্রেস শিপিং (ঢাকা মেট্রোপলিটন এলাকার মধ্যে)
                                    </td>
                                    <td className="border px-4 py-2">24-48 ঘন্টা</td>
                                    <td className="border px-4 py-2">১৫০ টাকা*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">
                                        স্ট্যান্ডার্ড শিপিং (ঢাকার বাইরে)
                                    </td>
                                    <td className="border px-4 py-2">আনুমানিক 4-7 কার্যদিবস</td>
                                    <td className="border px-4 py-2">120 টাকা*</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">আন্তর্জাতিক শিপিং</td>
                                    <td className="border px-4 py-2">আনুমানিক 7-10 কার্যদিবস</td>
                                    <td className="border px-4 py-2">
                                        আন্তর্জাতিক অবস্থানের জন্য শিপিং এবং ডেলিভারি দেখুন।
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-sm">
                            *নোট: বাংলাদেশের মধ্যে স্ট্যান্ডার্ড শিপিংয়ের জন্য খরচ প্রথম 2
                            কেজির জন্য। একবার অর্ডারের ওজন সীমা অতিক্রম করলে, প্রতি অতিরিক্ত
                            কেজির জন্য আপনাকে ৪০ টাকা চার্জ করা হবে।
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default ShippingInfo;
