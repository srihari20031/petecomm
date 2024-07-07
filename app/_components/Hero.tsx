"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImg from "../../public/cute-animals-group-white-background.png";
import { FaSearch } from "react-icons/fa";
import { petCategories } from "../_constants";
import { useRouter } from "next/navigation";

// Assuming the searchPets function is defined in another file

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handlePetClick = (petId: string) => {
    router.push(`/pet/${petId}`);
  };

  const searchPets = (term: String) => {
    const results = [];
    const lowerCaseSearchTerm = term.toLowerCase();

    for (const category in petCategories) {
      const pets = petCategories[category];

      for (const pet of pets) {
        if (pet.name.toLowerCase().includes(lowerCaseSearchTerm)) {
          results.push(pet);
        }
      }
    }

    return results;
  };

  const handleSearch = (event: any) => {
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
    <div className="p-20 bg-gradient-to-r from-[#d7b49e] to-[#f1e3d3] bg-cover bg-center">
      <div className="gap-20 flex flex-col md:flex-row lg:flex-row items-center text-black justify-between px-10">
        <div className="w-1/2 text-center md:text-left pt-20 leading-10">
          <h1 className="text-7xl font-bold mb-4 text-[#5a4030] tracking-widest">
            Find a New
          </h1>
          <h1 className="text-7xl font-bold tracking-widest mb-4">
            Pet <span className="text-[#5a4030]">For You</span>
          </h1>
          <p className="mb-6 text-[#4a382c]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <div className="relative mt-6">
            <input
              type="text"
              placeholder="Find Your Favourite Pet Here"
              className="bg-[#e4c8a2] px-6 py-3 rounded-full outline-none font-bold w-[600px] pr-10 placeholder:text-[#5a4030] border border-black"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute right-40 top-1/2 transform -translate-y-1/2 h-6 w-6 text-[#5a4030]" />
          </div>
          {searchResults.length > 0 && (
            <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Search Results:</h2>
              <ul>
                {searchResults.map((pet) => (
                  <li key={pet.id} className="mb-2">
                    <div onClick={() => handlePetClick(pet.id)}>
                      <div className="flex items-center">
                        <Image
                          src={pet.image}
                          alt={pet.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-bold">{pet.name}</h3>
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

        <div className="w-1/2 mt-10 md:mt-0">
          <Image
            src={HeroImg}
            alt="Pet Hero"
            width={1200}
            height={1200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
