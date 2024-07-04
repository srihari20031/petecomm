import GoldenRet from "../../public/GoldenRet.jpg"; // Example import, adjust as per your image paths
import PetCard from "../_components/PetCard";

const page = () => {
  const farmAnimals = [
    {
      id: 1,
      name: "Cow",
      price: "$500",
      image: CowImage,
    },
    {
      id: 2,
      name: "Pig",
      price: "$300",
      image: PigImage,
    },
    {
      id: 3,
      name: "Chicken",
      price: "$20",
      image: ChickenImage,
    },
    {
      id: 4,
      name: "Sheep",
      price: "$200",
      image: SheepImage,
    },
    {
      id: 5,
      name: "Goat",
      price: "$150",
      image: GoatImage,
    },
    {
      id: 6,
      name: "Horse",
      price: "$1000",
      image: HorseImage,
    },
    {
      id: 7,
      name: "Duck",
      price: "$25",
      image: DuckImage,
    },
    {
      id: 8,
      name: "Rabbit",
      price: "$50",
      image: RabbitImage,
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">
          Popular pets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {farmAnimals.map((pet) => (
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
