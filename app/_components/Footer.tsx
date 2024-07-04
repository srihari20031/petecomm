"use client"

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ currentYearProp }) => {
  const [currentYear, setCurrentYear] = useState(currentYearProp);

  useEffect(() => {
    // Update currentYear only on the client
    if (!currentYearProp) {
      setCurrentYear(new Date().getFullYear());
    }
  }, []);

  return (
    <footer className="bg-[#6b4f3f] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Pets Website</h2>
            <p className="text-sm">
              Your go-to destination for all pet-related needs.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebook className="text-2xl hover:text-[#d19c7b]" />
              <FaTwitter className="text-2xl hover:text-[#d19c7b]" />
              <FaInstagram className="text-2xl hover:text-[#d19c7b]" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#d19c7b]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#d19c7b]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#d19c7b]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#d19c7b]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@petswebsite.com" className="hover:text-[#d19c7b]">
                    info@petswebsite.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-[#d19c7b]">
                    +1 234 567 890
                  </a>
                </li>
                <li>
                  <address className="not-italic">
                    123 Pet Street, Pet City, PC 12345
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#d19c7b] pt-6 text-center text-sm">
          &copy; {currentYear} Pets Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
