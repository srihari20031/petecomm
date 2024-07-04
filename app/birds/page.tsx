// Example import, adjust as per your image paths
import PetCard from "../_components/PetCard";
import ParakeetImage from "../../public/Parkeet.jpg";
import CanaryImage from "../../public/Canary.jpg";
import CockatielImage from "../../public/Cocktiel.jpg";
import LovebirdImage from "../../public/Lovebirds.jpg";
import BudgerigarImage from "../../public/Budgerigar.jpg";
import FinchImage from "../../public/Finch.jpg";
import ParrotletImage from "../../public/Parrotlet.jpg";
import CockatooImage from "../../public/CockatooImage.jpg";

const page = () => {
  const birds = [
    {
      id: 1,
      name: "Parakeet",
      price: "$50",
      image: ParakeetImage,
    },
    {
      id: 2,
      name: "Canary",
      price: "$40",
      image: CanaryImage,
    },
    {
      id: 3,
      name: "Cockatiel",
      price: "$60",
      image: CockatielImage,
    },
    {
      id: 4,
      name: "Lovebird",
      price: "$45",
      image: LovebirdImage,
    },
    {
      id: 5,
      name: "Budgerigar",
      price: "$35",
      image: BudgerigarImage,
    },
    {
      id: 6,
      name: "Finch",
      price: "$30",
      image: FinchImage,
    },
    {
      id: 7,
      name: "Parrotlet",
      price: "$55",
      image: ParrotletImage,
    },
    {
      id: 8,
      name: "Cockatoo",
      price: "$100",
      image: CockatooImage,
    },
  ];

  console.log(birds);

  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">
          Popular pets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {birds.map((pet) => (
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
