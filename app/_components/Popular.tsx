
import GoldenRet from "../../public/GoldenRet.jpg"; // Example import, adjust as per your image paths
import PetCard from "./PetCard";

const Popular = () => {
  const pets = [
    {
      id: 1,
      name: "Golden Retriever",
      price: "$800",
      description: "Friendly and tolerant dogs. They make great family pets.",
      image: GoldenRet,
    },
    {
      id: 2,
      name: "Persian Cat",
      price: "$500",
      description: "Known for their long, luxurious fur and calm demeanor.",
      image: GoldenRet,
    },
    {
      id: 3,
      name: "Parrot",
      price: "$150",
      description: "Colorful and intelligent birds that can mimic sounds.",
      image: GoldenRet,
    },
    {
      id: 4,
      name: "Rabbit",
      price: "$50",
      description: "Gentle and sociable, rabbits make wonderful pets.",
      image: GoldenRet,
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">Popular pets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {pets.map((pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              price={pet.price}
              description={pet.description}
              image={pet.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
