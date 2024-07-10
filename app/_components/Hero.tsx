"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import HeroImg from "../../public/cute-animals-group-white-background.png";
import { useRouter } from "next/navigation";

const Hero = () => {
  return (
    <div className="p-6 md:p-10 lg:p-20 bg-gradient-to-r from-[#d7b49e] to-[#f1e3d3] bg-cover bg-center">
      <div className="gap-10 md:gap-20 flex flex-col lg:flex-row items-center text-black justify-between px-4 md:px-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 md:pt-20 leading-8 md:leading-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 text-[#5a4030] tracking-widest">
            Find a New
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-widest mb-2 md:mb-4">
            Pet <span className="text-[#5a4030]">For You</span>
          </h1>
          <p className="mb-4 md:mb-6 text-[#4a382c]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <Image
            src={HeroImg}
            alt="Pet Hero"
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
