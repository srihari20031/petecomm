"use client";

import { useState, ChangeEvent } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { sections } from "../_constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { petCategories } from "../_constants";
import Image from "next/image";

interface Pet {
  id: string;
  name: string;
  image: StaticImageData;
  price: string;
}

type PetCategory = "Dogs and Cats" | "Birds" | "Fishes" | "Other Animals";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Pet[]>([]);
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePetClick = (petId: string) => {
    router.push(`/pet/${petId}`);
  };

  const searchPets = (term: string): Pet[] => {
    const results: Pet[] = [];
    const lowerCaseSearchTerm = term.toLowerCase();

    const categories = Object.keys(petCategories) as PetCategory[];

    for (const category of categories) {
      const pets = petCategories[category];

      for (const pet of pets) {
        if (pet.name.toLowerCase().includes(lowerCaseSearchTerm)) {
          results.push(pet);
        }
      }
    }

    return results;
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const results = searchPets(term);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 gap-4">
          <div className="flex items-center">
            <Link href="/" className="md:text-2xl lg:text-3xl text-sm font-bold text-gray-800">
              Pets Website
            </Link>
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
            <div className="relative">
              <input
                type="text"
                placeholder="Find Your Favourite Pet Here"
                className="bg-[#e4c8a2] px-4 md:px-6 py-2 md:py-3 rounded-full outline-none font-bold w-full md:w-[200px] lg:w-[300px] pr-10 placeholder:text-[#5a4030] max-sm:placeholder:text-[9px] md:placeholder:text-[14px] border border-black"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-6 md:w-6 text-[#5a4030]" />
              {searchResults.length > 0 && (
                <div className="absolute mt-2 bg-white p-4 rounded-lg shadow-lg w-full md:w-[200px] lg:w-[300px]">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                    Search Results:
                  </h2>
                  <ul>
                    {searchResults.map((pet) => (
                      <li key={pet.id} className="mb-2">
                        <div onClick={() => handlePetClick(pet.id)}>
                          <div className="flex items-center">
                            <Image
                              src={pet.image}
                              alt={pet.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div className="ml-4">
                              <h3 className="text-lg md:text-xl font-bold">
                                {pet.name}
                              </h3>
                              <p className="text-gray-600">{pet.price}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <FaShoppingCart className="text-gray-800 text-2xl ml-4" />
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
