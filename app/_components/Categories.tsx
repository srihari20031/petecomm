import Image from "next/image";
import React from "react";
import { CategoriesData } from "../_constants";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="p-8 mb-20">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">
        Shop By Pet
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-32 mt-16">
        {CategoriesData.map((category) => (
          <Link href={category.link} key={category.id}>
            <div className="flex flex-col items-center w-60 h-60">
              <Image
                src={category.image}
                alt={category.alt}
                className="h-full w-full object-cover rounded-full"
              />
              <div className="mt-4 text-center text-[#5a4030] font-bold text-lg">
                {category.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
