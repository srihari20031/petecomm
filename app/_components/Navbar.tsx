"use client";

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { sections } from "../_constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Pets Website
            </a>
          </div>
          <div className="hidden md:flex md:space-x-8 items-center">
            {sections.map((section) => (
              <Link
                href={section.Link}
                className={`text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathName === section.Link
                    ? "border-b-2 border-[#6b4f3f] scale-105"
                    : "border-transparent hover:text-gray-600"
                }`}
                key={section.id}
              >
                {section.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <FaShoppingCart className="text-gray-800 text-2xl" />
            <button className="md:hidden ml-4" onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-gray-800 text-2xl" />
              ) : (
                <FaBars className="text-gray-800 text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800">
          {sections.map((section) => (
            <Link
              href={section.Link}
              key={section.id}
              className="block px-4 py-2 text-gray-900 hover:bg-[#f3e5d0] hover:text-gray-600"
            >
              {section.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;