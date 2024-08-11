import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className="bg-gradient-to-b from-gray-500 to-yellow-200">
          <div className="pt-2 container mx-auto">
            <div className="footer">
              <div className="grid-wrapper">
                <div className="single-grid">
                  <div className="image-block">
                  <Image src="/images/Logo-bg-yellow.png" alt="Logo" width={800} height={100} className="h-14 mb-3" />
                    <h4 className="tittle">Who we are</h4>
                  </div>
                  <div className="content-block">
                    <ul>
                      <li><a href="">About Us</a></li>
                      <li><a href="">News &amp; Offers</a></li>
                      <li><a href="">Our People</a></li>
                      <li><a href="">Stories</a></li>
                      <li><a href="">Photos &amp; Videos</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">Lookbook</a></li>
                    </ul>
                  </div>
                </div>
                <div className="single-grid">
                  <div className="image-block">
                    <Image
                      decoding="async"
                      src="/images/layouts/footer/f2.jpg"
                      alt="Categories"
                      width={600} // Adjust as needed
                      height={100} // Adjust as needed
                    />
                    <p></p>
                    <h4 className="tittle">Categories</h4>
                  </div>
                  <div className="content-block">
                    <ul>
                      <li><a href="">Curtains | Blinds</a></li>
                      <li><a href=""> Rugs | Carpet</a></li>
                      <li><a href=""> Cusion | Cover </a></li>
                      <li><a href=""> Clay Cookery </a></li>
                      <li><a href=""> Kitchen Attire </a></li>
                      <li><a href=""> Serving Platter </a></li>
                      <li><a href=""> Mixed Products </a></li>
                    </ul>
                  </div>
                </div>
                <div className="single-grid">
                  <div className="image-block">
                  <Image
                      decoding="async"
                      src="/images/layouts/footer/f3.jpg"
                      alt="Categories"
                      width={600} // Adjust as needed
                      height={100} // Adjust as needed
                    /><p></p>
                    <h4 className="tittle">Customer Service</h4>
                  </div>
                  <div className="content-block">
                    <ul>
                      <li><a href=""> How to order</a></li>
                      <li><a href=""> Fabric care</a></li>
                      <li><a href=""> Billing &amp; Payments</a></li>
                      <li><a href=""> Corporate sales</a></li>
                      <li><a href="/shipping-delivery"> Shipping &amp; Delivery</a></li>
                      <li><a href=""> My Rewards</a></li>
                      <li><a href=""> Track my order</a></li>
                      <li><a href="/exchange-refund-policy"> Return &amp; Exchanges</a></li>
                      <li><a href="/contact-us"> Contact Us</a></li>
                      <li><a href=""> FAQs</a></li>
                    </ul>
                  </div>
                </div>
                <div className="single-grid">
                  <div className="image-block">
                    <Image
                      decoding="async"
                      src="/images/layouts/footer/f4.jpg"
                      alt="Categories"
                      width={600} // Adjust as needed
                      height={100} // Adjust as needed
                    /><p></p>
                    <h4 className="tittle">More</h4>
                  </div>
                  <div className="content-block">
                    <ul>
                      <li><a href=""> Privacy Policy</a></li>
                      <li><a href=""> Find A Store</a></li>
                      <li><a href=""> Terms &amp; Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto flex px-5 justify-between items-center text-sm text-gray-500">
              <p>© {(new Date().getFullYear())} Powered by NirGalleria</p>
              <h5 className='flex items-center justify-center gap-2'>Deleveloped by <Link href="https://ideasui.com" className='flex items-center gap-2 hover:scale-110 duration-300'><img src="https://www.ideasui.com/logo-owl-removebg.png" alt="IdeasUi" className="h-8" /> IDEASUI</Link></h5>
              <div className='flex gap-3 items-center justify-center'>
                <h5 className="font-semibold">Follow Us :</h5>
                <ul className="flex justify-center space-x-4">
                  <li className='hover:scale-150 duration-300'><Link href="#"><FaFacebook /></Link></li>
                  <li className='hover:scale-150 duration-300'><Link href="#"><FaInstagram /></Link></li>
                  <li className='hover:scale-150 duration-300'><Link href="#"><FaTwitter /></Link></li>
                  <li className='hover:scale-150 duration-300'><Link href="#"><FaPinterest /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer className="bg-secendary text-black py-6 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="mb-3" />
            <h4 className="text-xl font-bold mb-2">Nir Galleria</h4>
            <p className="text-gray-500 text-center">Hand-crafted rope items, women&apos;s sarees, jewelry, and home decor items.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center mb-6">
            <div>
              <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
              <ul>
                <li className="mb-1"><Link href="#">About Us</Link></li>
                <li className="mb-1"><Link href="#">Categories</Link></li>
                <li className="mb-1"><Link href="#">Customer Service</Link></li>
                <li className="mb-1"><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
              <ul className="flex justify-center space-x-4">
                <li><Link href="#"><FaFacebook /></Link></li>
                <li><Link href="#"><FaInstagram /></Link></li>
                <li><Link href="#"><FaTwitter /></Link></li>
                <li><Link href="#"><FaPinterest /></Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm">
            <p>© {(new Date().getFullYear())} Nir Galleria</p>
            <p>Developed by <Link href="https://ideasui.com" className="text-gray-500 underline">IDEASUI</Link></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer