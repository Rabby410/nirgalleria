"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";

const TermsAndConditions = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <>
            <div className="py-10 text-center bg-black text-white">
                <h1 className='text-6xl'>Terms and Conditions</h1>
                <p className='pt-3 text-gray-500'><Link href="/" className=' hover:text-white'>Home</Link> <span>/</span> <span>Terms and Conditions</span></p>
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
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
                        <p className="mb-4">
                            Nir Gelleria - with the visionary tagline &quot;Your Eco Life Style Partner&quot; is one of the most up growing consumer-friendly brand in Bangladeshi home-essentials industry. The logo represents the official identity of the brand &quot;Nir Galleria&quot; appropriately registered abiding by the rules & regulations of the governmental authority of the people&apos;s republic of Bangladesh. The purposes of this website are to provide online delivery services to its customers and general information about the brand.
                        </p>
                        <p className="mb-4">
                            This &quot;Terms & Conditions&quot; page outlines the basic rules that govern the use of our website. Your use of www.nirgalleria.app/ constitutes your agreement to follow and be bound by the terms listed below. If you do not agree to these terms, please do not use this website. Your use of this website binds you to the following terms:
                        </p>
                        <p className="mb-4">
                            Nir Gelleria may revise this agreement at any time; therefore you should visit this page periodically to review the terms of your use. Having any questions concerning any of our policies, please feel free to contact with us through this link: Contact Us.
                        </p>

                        <div >
                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-2">I. Product Information</h2>
                                <p className="mb-4">
                                    Keep in mind, in consideration to laws of Bangladesh on shippable items, fragility and other constraints
                                    nirgalleria.com/ does not carry every item that you would find at our shops. The prices displayed on the
                                    website are quoted in Bangladeshi Taka (Tk.) at our local web store and converted into other currencies
                                    for each respective country web store where we offer delivery. Products by Nir Galleria displayed on the
                                    website may also be available in selected Nir Galleria stores in Bangladesh while supplies last. In some
                                    cases, merchandise shown online may not be available in stores. Stores may also have different prices or
                                    promotional events at different times. Sale prices on the website are Internet-only specials, and do not
                                    reflect the pricing of Bangladesh stores. The pricing in international shops differ from our local pricing
                                    to reflect the costs of doing business in those respective regions.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">i. Handcrafted</h3>
                                <p className="mb-4">
                                    Products developed by Nir Galleria are handcrafted therefore we cannot guarantee that the product you see
                                    online and the purchased product will be exactly the same though every effort is made for it to be a very
                                    close match.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">ii. Product Availability</h3>
                                <p className="mb-4">
                                    Please understand that items featured on this website are handcrafted and therefore in limited quantities
                                    and, because of their limited availability and nature of production, stock may not be replenished. That
                                    means once an item is sold out, it may not be available in the future and therefore may not appear on the
                                    website again. When an item featured on nirgalleria.com/ is no longer in stock, we make every attempt to
                                    remove that item from the website in a timely manner. However, there are instances due to product handling
                                    that a product will not meet our quality standards for shipment and therefore may ultimately be unavailable
                                    for delivery. Should you have any questions concerning the availability of a particular item, please contact
                                    us at 9am - 5pm Bangladesh standard time.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">iii. Colours</h3>
                                <p className="mb-4">
                                    We have made every effort to represent each product colour as accurately as possible on the website. However,
                                    due to monitor discrepancies of personal computer/laptop/tablet/hand-held devices, we cannot guarantee that
                                    your display of colour will be accurate.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">iv. Pricing</h3>
                                <p className="mb-4">
                                    In the event a Nir Galleria product is listed at an incorrect price due to a system error, typographical error
                                    or error in pricing information, Nir Galleria shall have the right to refuse or cancel any orders placed for
                                    product listed at the incorrect price.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">v. Payment and Credit Note</h3>
                                <p className="mb-4">
                                    Nir Galleria shall have the right to refuse or cancel any orders whether or not the order has been confirmed
                                    within 14 working days from the date of your order placement. If your credit/debit card or mobile banking
                                    wallet has already been charged for the purchase and your order is canceled, Nir Galleria shall issue a credit
                                    note or refund the charged amount.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">vi. Shipping and Processing Fees</h3>
                                <p className="mb-4">
                                    Our shipping and processing charges are intended to compensate designated shipping companies in addition to
                                    covering the cost of processing your order, handling and packaging the purchased products and delivering them
                                    to you. The risk of loss or damage of packaged items are passed onto our shipping partners, and you will be
                                    compensated for the full value of the items should they not reach you at all or in its original state.
                                    As part of Nir Galleria&apos;s terms and conditions, please read our shipping policy and return policy for your convenience.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-2">II. Inaccuracy Disclaimer</h2>
                                <p className="mb-4">
                                    From time to time there may be information on our website or in our newsletter that contains typographical
                                    errors, inaccuracies, or omissions that may relate to product descriptions, pricing, and availability. Nir
                                    Galleria reserves the right to correct any errors, inaccuracies or omissions and to change or update information
                                    at any time without prior notice (including after you have submitted your order).
                                </p>
                                <p className="mb-4">
                                    We make every effort to present the most recent, most accurate, and most reliable information on our website
                                    at all times. However, there may be occasions when some of the information featured on Nir Galleria may
                                    contain incomplete data, typographical errors, or inaccuracies. Any errors are wholly unintentional and we
                                    apologize if erroneous information is reflected in the merchandise price, item availability, or in any other
                                    way that affects your individual order. Be aware that we present our content ‘as is’ and make no claims to
                                    its accuracy, either expressed or implied. We reserve the right to amend errors or to update product information
                                    at any time without prior notice.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-2">III. Legal Information</h2>
                                <p className="mb-4">
                                    This website is expressly owned and operated by a bunch of eco lovers on behalf of Nir Galleria. Unless
                                    otherwise noted, all design and content featured on Nir Galleria – including navigational buttons and images,
                                    logos, artwork, icons, graphics, photography, text, and the like are copyrights, trademarks, trade dress,
                                    and/or intellectual property that are owned, controlled, or licensed by Nir Galleria. This website in its
                                    entirety is protected by copyright and applicable trade dress and is protected under Bangladesh and international
                                    copyright laws. All worldwide rights, titles, and interests are reserved.
                                </p>
                                <p className="mb-4">
                                    The contents of our website and the website as a whole are intended solely for your personal, non-commercial use.
                                    Any use of our website and its content for purposes other than personal is prohibited without the prior written
                                    permission of Nir Galleria. Do not reproduce, publish, display, modify, sell, or distribute any of the materials
                                    from Nir Galleria. You may, however, download or electronically copy and print any of the page contents displayed
                                    on the site, but please remember that these are available for your personal, non-commercial use only. Should you
                                    choose to download, copy, or forward any site materials via email, no right, title, or interest in those materials
                                    will be transferred to you.
                                </p>
                                <p className="mb-4">
                                    Any dispute or claim relating in any way to your use of nirgalleria.com/, or to any product or service distributed
                                    by Nir Galleria will be subject to the laws of Bangladesh and will be resolved by binding arbitration under the
                                    Arbitration Act of 2001 of Bangladesh. If necessary, the dispute may be submitted to a court of law under the
                                    jurisdiction of Bangladesh.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">i. Limitation of Liability</h3>
                                <p className="mb-4">
                                    Given the unpredictability of technology, internet connectivity and the online environment, Nir Galleria does
                                    not warrant that the function or operation of this website will be uninterrupted or error-free, that defects will
                                    be corrected, or that this site or the server that makes it available will be free of viruses or other harmful
                                    elements. As a visitor to and user of this website, you must assume full responsibility for any costs associated
                                    with the servicing of equipment used in connection with the use of our website. As a visitor to and a user of this
                                    website, you, in effect, agree that your access will be subject to the terms and conditions set forth in this legal
                                    notice and that access is undertaken at your own risk. Nir Galleria shall not be liable for damages of any kind
                                    related to your use of or inability to access this website. Nir Galleria will not be responsible for any fraud, theft
                                    or mistake in the usage of your credit card in the online purchase of any Nir Galleria’s item.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">ii. Indemnification</h3>
                                <p>
                                    You agree to indemnify, defend, and hold harmless Nir Galleria, its officers, directors, employees, agents,
                                    licensors and suppliers (collectively the “Service Providers”) from and against all losses, expenses, damages
                                    and costs, including reasonable attorneys’ fees, resulting from any violation of these terms and conditions or
                                    any activity related to your account (including negligent or wrongful conduct) by you or any other person
                                    accessing the site using your Internet account.
                                </p>
                            </section>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-4">শর্তাবলী</h1>
                        <p className="mb-4">
                            দেশি পোশাক – “ইওর ইকো লাইফ স্টাইল পার্টনার” এই স্বপ্নদর্শী ট্যাগলাইন সহ বাংলাদেশী গৃহ-প্রয়োজনীয় শিল্পের সবচেয়ে ক্রমবর্ধমান ভোক্তা-বান্ধব ব্র্যান্ডগুলির মধ্যে একটি। লোগোটি গণপ্রজাতন্ত্রী বাংলাদেশের সরকারি কর্তৃপক্ষের নিয়ম ও প্রবিধান মেনে যথাযথভাবে নিবন্ধিত “দেশী পোশাক” ব্র্যান্ডের অফিসিয়াল পরিচয় উপস্থাপন করে। এই ওয়েবসাইটের উদ্দেশ্য হল এর গ্রাহকদের অনলাইন ডেলিভারি পরিষেবা এবং ব্র্যান্ড সম্পর্কে সাধারণ তথ্য প্রদান করা।
                        </p>
                        <p className="mb-4">
                            এই “নিয়ম ও শর্তাবলী” পৃষ্ঠাটি আমাদের ওয়েবসাইটের ব্যবহার পরিচালনাকারী মৌলিক নিয়মগুলির রূপরেখা দেয়৷ আপনার www.nirgalleria.com/- এর ব্যবহার নীচে তালিকাভুক্ত শর্তাবলী অনুসরণ এবং আবদ্ধ হওয়ার জন্য আপনার চুক্তি গঠন করে। আপনি এই শর্তাবলী সম্মত না হলে, এই ওয়েবসাইট ব্যবহার করবেন না. আপনার এই ওয়েবসাইটের ব্যবহার আপনাকে নিম্নলিখিত শর্তগুলির সাথে আবদ্ধ করে:
                        </p>
                        <p className="mb-4">
                            Nir Galleria যেকোনো সময় এই চুক্তি সংশোধন করতে পারে; তাই আপনার ব্যবহারের শর্তাবলী পর্যালোচনা করতে আপনাকে পর্যায়ক্রমে এই পৃষ্ঠাটি দেখতে হবে। আমাদের যে কোনো নীতির বিষয়ে কোনো প্রশ্ন থাকলে, অনুগ্রহ করে নির্দ্বিধায় এই লিঙ্কের মাধ্যমে আমাদের সাথে যোগাযোগ করুন: <a href="/contact" className="text-blue-500 hover:underline">আমাদের সাথে যোগাযোগ করুন</a>.
                        </p>
                        <h2 className="text-xl font-semibold mt-6 mb-4">১. পণ্যের তথ্য</h2>
                        <p className="mb-4">
                            মনে রাখবেন, জাহাজীকরণযোগ্য আইটেম, ভঙ্গুরতা এবং অন্যান্য সীমাবদ্ধতার বিষয়ে বাংলাদেশের আইন বিবেচনায় nirgalleria.com/ প্রতিটি আইটেম বহন করে না যা আপনি আমাদের দোকানে পাবেন। ওয়েবসাইটে প্রদর্শিত মূল্যগুলি আমাদের স্থানীয় ওয়েব স্টোরে বাংলাদেশী টাকায় (টাকা) উদ্ধৃত করা হয়েছে এবং প্রতিটি দেশের ওয়েব স্টোরের জন্য অন্যান্য মুদ্রায় রূপান্তরিত করা হয়েছে যেখানে আমরা ডেলিভারি অফার করি। ওয়েবসাইটে প্রদর্শিত Nir Galleria এর পণ্যগুলি সরবরাহ শেষ পর্যন্ত বাংলাদেশের নির্বাচিত Nir Galleria এর দোকানগুলিতেও পাওয়া যেতে পারে। কিছু ক্ষেত্রে, অনলাইনে দেখানো পণ্যদ্রব্য দোকানে উপলব্ধ নাও হতে পারে। দোকানে বিভিন্ন সময়ে বিভিন্ন মূল্য বা প্রচারমূলক ইভেন্টও থাকতে পারে। ওয়েবসাইটে বিক্রয় মূল্য শুধুমাত্র ইন্টারনেটের জন্য বিশেষ, এবং বাংলাদেশের দোকানের মূল্য প্রতিফলিত করে না।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">i. হস্তশিল্প</h3>
                        <p className="mb-4">
                            Nir Galleria দ্বারা তৈরি পণ্যগুলি হস্তশিল্পে তৈরি তাই আমরা গ্যারান্টি দিতে পারি না যে আপনি অনলাইনে যে পণ্যটি দেখছেন এবং কেনা পণ্যটি হুবহু একই হবে যদিও এটি একটি খুব কাছাকাছি মিল হওয়ার জন্য সমস্ত প্রচেষ্টা করা হয়।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">ii. পণ্যের সহজলভ্যতা</h3>
                        <p className="mb-4">
                            অনুগ্রহ করে বুঝুন যে এই ওয়েবসাইটে বৈশিষ্ট্যযুক্ত আইটেমগুলি হস্তশিল্পের এবং তাই সীমিত পরিমাণে এবং তাদের সীমিত প্রাপ্যতা এবং উত্পাদনের প্রকৃতির কারণে, স্টক পুনরায় পূরণ করা যাবে না। এর মানে একবার একটি আইটেম বিক্রি হয়ে গেলে, এটি ভবিষ্যতে উপলব্ধ নাও হতে পারে এবং তাই আবার ওয়েবসাইটে প্রদর্শিত নাও হতে পারে। যখন nirgalleria.com/-এ বৈশিষ্ট্যযুক্ত একটি আইটেম আর স্টকে থাকে না, আমরা যথাসময়ে ওয়েবসাইট থেকে সেই আইটেমটি সরানোর জন্য সর্বাত্মক চেষ্টা করি। যাইহোক, পণ্য পরিচালনার কারণে এমন দৃষ্টান্ত রয়েছে যে একটি পণ্য চালানের জন্য আমাদের মানের মান পূরণ করবে না এবং তাই শেষ পর্যন্ত ডেলিভারির জন্য অনুপলব্ধ হতে পারে। কোন নির্দিষ্ট আইটেমের প্রাপ্যতা সম্পর্কে আপনার কোন প্রশ্ন থাকলে, অনুগ্রহ করে বাংলাদেশ সময় সকাল 9 টা থেকে বিকাল 5 টায় আমাদের সাথে যোগাযোগ করুন।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">iii. রং</h3>
                        <p className="mb-4">
                            আমরা ওয়েবসাইটে প্রতিটি পণ্যের রঙ যথাসম্ভব নির্ভুলভাবে উপস্থাপন করার জন্য যথাসাধ্য চেষ্টা করেছি। যাইহোক, ব্যক্তিগত কম্পিউটার/ল্যাপটপ/ট্যাবলেট/হ্যান্ড-হোল্ড ডিভাইসের নিরীক্ষণের অসঙ্গতির কারণে, আমরা গ্যারান্টি দিতে পারি না যে আপনার রঙের প্রদর্শন সঠিক হবে।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">iv. মূল্য নির্ধারণ</h3>
                        <p className="mb-4">
                            সিস্টেমের ত্রুটি, টাইপোগ্রাফিক ত্রুটি বা মূল্যের তথ্যে ত্রুটির কারণে Nir Galleria এর পণ্যটি ভুল মূল্যে তালিকাভুক্ত হলে, Nir Galleria এর ভুল মূল্যে তালিকাভুক্ত পণ্যের জন্য দেওয়া যেকোনো অর্ডার প্রত্যাখ্যান বা বাতিল করার অধিকার থাকবে।
                        </p>
                        <p className="mb-4">
                            আমাদের সমস্ত পণ্যের মূল্য এবং পরিষেবাগুলি বাংলাদেশের আইন অনুসারে প্রযোজ্য কর সাপেক্ষে।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">v. পেমেন্ট এবং ক্রেডিট নোট</h3>
                        <p className="mb-4">
                            আপনার অর্ডার প্লেসমেন্টের তারিখ থেকে 14 কার্যদিবসের মধ্যে অর্ডার কনফার্ম করা হয়েছে বা না করা হয়েছে তা প্রত্যাখ্যান বা বাতিল করার অধিকার Nir Galleria এর থাকবে। যদি আপনার ক্রেডিট/ডেবিট কার্ড বা মোবাইল ব্যাঙ্কিং ওয়ালেট ইতিমধ্যেই ক্রয়ের জন্য চার্জ করা হয়ে থাকে এবং আপনার অর্ডার বাতিল করা হয়, তাহলে Nir Galleria একটি ক্রেডিট নোট ইস্যু করবে বা চার্জ করা অর্থ ফেরত দেবে।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">vi. শিপিং এবং প্রসেসিং ফি</h3>
                        <p className="mb-4">
                            আমাদের শিপিং এবং প্রসেসিং চার্জগুলি আপনার অর্ডার প্রক্রিয়াকরণ, কেনা পণ্যগুলি পরিচালনা এবং প্যাকেজিং এবং আপনার কাছে সেগুলি সরবরাহ করার খরচ কভার করার পাশাপাশি মনোনীত শিপিং সংস্থাগুলিকে ক্ষতিপূরণ দেওয়ার উদ্দেশ্যে। প্যাকেজ করা আইটেমগুলির ক্ষতি বা ক্ষতির ঝুঁকি আমাদের শিপিং অংশীদারদের কাছে প্রেরণ করা হয় এবং আইটেমগুলির সম্পূর্ণ মূল্যের জন্য আপনাকে ক্ষতিপূরণ দেওয়া হবে যদি সেগুলি আপনার কাছে না পৌঁছায় বা তার আসল অবস্থায় না আসে। <br />দেশি পোশাকের শর্তাবলীর অংশ হিসাবে, <br /> আপনার সুবিধার জন্য অনুগ্রহ করে আমাদের শিপিং নীতি এবং রিটার্ন নীতি পড়ুন।
                        </p>
                        <h2 className="text-xl font-semibold mt-6 mb-4">২. ভুলতা দাবিত্যাগ</h2>
                        <p className="mb-4">
                            সময়ে সময়ে আমাদের ওয়েবসাইটে বা আমাদের নিউজলেটারে এমন তথ্য থাকতে পারে যাতে টাইপোগ্রাফিক ত্রুটি, ভুল, বা বাদ দেওয়া হয় যা পণ্যের বিবরণ, মূল্য এবং প্রাপ্যতার সাথে সম্পর্কিত হতে পারে। Nir Galleria কোনো ত্রুটি, ভুল বা ভুল সংশোধন করার অধিকার সংরক্ষণ করে এবং যে কোনো সময় পূর্ব বিজ্ঞপ্তি ছাড়াই তথ্য পরিবর্তন বা আপডেট করার অধিকার রাখে (আপনার অর্ডার জমা দেওয়ার পরেও)।
                            <br />
                            আমরা সর্বদা আমাদের ওয়েবসাইটে সবচেয়ে সাম্প্রতিক, সবচেয়ে সঠিক, এবং সবচেয়ে নির্ভরযোগ্য তথ্য উপস্থাপন করার জন্য সর্বাত্মক প্রচেষ্টা করি। যাইহোক, এমন কিছু ঘটনা ঘটতে পারে যখন দেশি পোশাকে বৈশিষ্ট্যযুক্ত কিছু তথ্যে অসম্পূর্ণ ডেটা, টাইপোগ্রাফিক ত্রুটি বা ভুলতা থাকতে পারে। কোনো ত্রুটি সম্পূর্ণ অনিচ্ছাকৃত এবং আমরা ক্ষমাপ্রার্থী যদি ভুল তথ্য পণ্যদ্রব্যের মূল্য, আইটেমের প্রাপ্যতা বা অন্য কোনো উপায়ে প্রতিফলিত হয় যা আপনার ব্যক্তিগত অর্ডারকে প্রভাবিত করে। সচেতন থাকুন যে আমরা আমাদের বিষয়বস্তু &apos;যেমন আছে&apos; উপস্থাপন করি এবং এর নির্ভুলতার জন্য কোনো দাবি করি না, প্রকাশ বা নিহিত। আমরা ত্রুটি সংশোধন করার বা পূর্ব ঘোষণা ছাড়াই যেকোনো সময় পণ্যের তথ্য আপডেট করার অধিকার সংরক্ষণ করি।</p>
                        <h3 className="text-xl font-semibold mt-4 mb-4">৩. আইনি তথ্য</h3>
                        <p className="mb-4">
                            এই ওয়েবসাইটটি স্পষ্টভাবে দেশি পোশাকের পক্ষ থেকে একগুচ্ছ পরিবেশ প্রেমীদের মালিকানাধীন এবং পরিচালিত। অন্যথায় উল্লেখ করা না থাকলে, দেশি পোশাকে বৈশিষ্ট্যযুক্ত সমস্ত ডিজাইন এবং বিষয়বস্তু – নেভিগেশনাল বোতাম এবং ছবি, লোগো, আর্টওয়ার্ক, আইকন, গ্রাফিক্স, ফটোগ্রাফি, টেক্সট এবং এর মতোই কপিরাইট, ট্রেডমার্ক, ট্রেড ড্রেস এবং/অথবা বৌদ্ধিক সম্পত্তি যা মালিকানাধীন। , নিয়ন্ত্রিত, বা দেশী পোশাক দ্বারা লাইসেন্সপ্রাপ্ত। এই ওয়েবসাইটটি সম্পূর্ণরূপে কপিরাইট এবং প্রযোজ্য ট্রেড ড্রেস দ্বারা সুরক্ষিত এবং বাংলাদেশ এবং আন্তর্জাতিক কপিরাইট আইনের অধীনে সুরক্ষিত। সমস্ত বিশ্বব্যাপী অধিকার, শিরোনাম এবং স্বার্থ সংরক্ষিত।
                            <br />
                            আমাদের ওয়েবসাইট এবং সামগ্রিকভাবে ওয়েবসাইটের বিষয়বস্তু শুধুমাত্র আপনার ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারের উদ্দেশ্যে। ব্যক্তিগত ব্যতীত অন্য উদ্দেশ্যে আমাদের ওয়েবসাইট এবং এর সামগ্রীর যেকোনো ব্যবহার দেশি পোশাকের পূর্ব লিখিত অনুমতি ছাড়া নিষিদ্ধ। দেশি পোষাক থেকে কোনো সামগ্রী পুনরুত্পাদন, প্রকাশ, প্রদর্শন, পরিবর্তন, বিক্রয় বা বিতরণ করবেন না। আপনি, যাইহোক, সাইটে প্রদর্শিত যেকোন পৃষ্ঠার বিষয়বস্তু ডাউনলোড বা বৈদ্যুতিনভাবে কপি এবং মুদ্রণ করতে পারেন, তবে দয়া করে মনে রাখবেন যে এগুলি শুধুমাত্র আপনার ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারের জন্য উপলব্ধ। আপনি যদি ইমেলের মাধ্যমে কোনও সাইট সামগ্রী ডাউনলোড, অনুলিপি বা ফরোয়ার্ড করতে চান তবে সেই উপকরণগুলিতে কোনও অধিকার, শিরোনাম বা আগ্রহ আপনার কাছে হস্তান্তর করা হবে না।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">nirgalleria.com/-এর আপনার ব্যবহার, বা দেশি পোশাক দ্বারা বিতরণ করা কোনও পণ্য বা পরিষেবার সাথে সম্পর্কিত যে কোনও বিরোধ বা দাবি বাংলাদেশের আইনের অধীন হবে এবং বাংলাদেশের সালিসি আইন 2001 এর অধীনে বাধ্যতামূলক সালিসি দ্বারা সমাধান করা হবে। প্রয়োজনে, বিরোধটি বাংলাদেশের এখতিয়ারের অধীনে আইনের আদালতে জমা দেওয়া যেতে পারে।</h3>
                        <h3 className="text-lg font-semibold mt-4 mb-2">i. দায়বদ্ধতা সীমাবদ্ধতা</h3>
                        <p className="mb-4">
                            প্রযুক্তি, ইন্টারনেট সংযোগ এবং অনলাইন পরিবেশের অপ্রত্যাশিততার পরিপ্রেক্ষিতে, দেশি পোশাক এই ওয়েবসাইটের কার্যকারিতা বা অপারেশন নিরবচ্ছিন্ন বা ত্রুটিমুক্ত হবে, ত্রুটিগুলি সংশোধন করা হবে, বা এই সাইট বা সার্ভার যে এটি তৈরি করে তা নিশ্চিত করে না। উপলব্ধ ভাইরাস বা অন্যান্য ক্ষতিকারক উপাদান মুক্ত হবে. এই ওয়েবসাইটের একজন ভিজিটর এবং ব্যবহারকারী হিসাবে, আপনাকে অবশ্যই আমাদের ওয়েবসাইট ব্যবহারের সাথে ব্যবহৃত সরঞ্জামগুলির পরিষেবার সাথে সম্পর্কিত যে কোনও খরচের জন্য সম্পূর্ণ দায়বদ্ধতা গ্রহণ করতে হবে। এই ওয়েবসাইটের একজন পরিদর্শক এবং একজন ব্যবহারকারী হিসাবে, আপনি, কার্যত, সম্মত হন যে আপনার অ্যাক্সেস এই আইনি বিজ্ঞপ্তিতে বর্ণিত শর্তাবলীর সাপেক্ষে হবে এবং সেই অ্যাক্সেস আপনার নিজের ঝুঁকিতে নেওয়া হয়। আপনার ব্যবহার বা এই ওয়েবসাইট অ্যাক্সেস করতে অক্ষমতা সম্পর্কিত কোনো ধরনের ক্ষতির জন্য দেশি পোশাক দায়ী থাকবে না।
                        </p>
                        <h3 className="text-lg font-semibold mt-4 mb-2">ii. ক্ষতিপূরণ</h3>
                        <p className="mb-4">
                            আপনি ক্ষতিপূরণ দিতে, রক্ষা করতে এবং ধারণ করতে সম্মত হন ক্ষতিকারক দেশি পোশাক, এর কর্মকর্তা, পরিচালক, কর্মচারী, এজেন্ট, লাইসেন্সদাতা এবং সরবরাহকারী (সম্মিলিতভাবে “পরিষেবা প্রদানকারী”) থেকে এবং যুক্তিসঙ্গত অ্যাটর্নি সহ সমস্ত ক্ষতি, খরচ, ক্ষতি এবং খরচের বিরুদ্ধে। ফি, এই নিয়ম ও শর্তাবলীর লঙ্ঘন বা আপনার অ্যাকাউন্টের সাথে সম্পর্কিত যেকোন কার্যকলাপের ফলে (অবহেলা বা অন্যায় আচরণ সহ) আপনি বা আপনার ইন্টারনেট অ্যাকাউন্ট ব্যবহার করে সাইটটিতে প্রবেশকারী অন্য কোনো ব্যক্তি।
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TermsAndConditions;
