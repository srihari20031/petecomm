// Example import, adjust as per your image paths
import PetCard from "../_components/PetCard";
import GoldfishImage from "../../public/Goldfish.jpg";
import BettaFishImage from "../../public/BettaFishImage.jpg";
import GuppyImage from "../../public/GuppyImage.jpg";
import MollyFishImage from "../../public/MollyFishImage.jpg";
import CichlidImage from "../../public/CichlidImage.jpg";
import DiscusFishImage from "../../public/DiscusFish.jpg";

const page = () => {
  const petFishes = [
    {
      id: 1,
      name: "Goldfish",
      price: "$10",
      image: GoldfishImage,
    },
    {
      id: 2,
      name: "Betta Fish",
      price: "$15",
      image: BettaFishImage,
    },
    {
      id: 3,
      name: "Guppy",
      price: "$5",
      image: GuppyImage,
    },

    {
      id: 6,
      name: "Molly Fish",
      price: "$7",
      image: MollyFishImage,
    },
    {
      id: 7,
      name: "Cichlid",
      price: "$12",
      image: CichlidImage,
    },
    {
      id: 8,
      name: "Discus Fish",
      price: "$25",
      image: DiscusFishImage,
    },
  ];

  console.log(petFishes);

  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">
          Popular pets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {petFishes.map((pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              price={pet.price}
              image={pet.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
