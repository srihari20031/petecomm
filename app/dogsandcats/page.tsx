import GoldenRet from "../../public/GoldenRet.jpg"; // Example import, adjust as per your image paths
import PetCard from "../_components/PetCard";

const page = () => {
  const dogsCats = [
    {
      id: 1,
      name: "Labrador Retriever",
      price: "$1000",
      image: LabradorRet,
    },
    {
      id: 2,
      name: "German Shepherd",
      price: "$900",
      image: GermanShepherd,
    },
    {
      id: 3,
      name: "Poodle",
      price: "$700",
      image: Poodle,
    },
    {
      id: 4,
      name: "Bulldog",
      price: "$1200",
      image: Bulldog,
    },
    {
      id: 5,
      name: "Siamese Cat",
      price: "$600",
      image: SiameseCat,
    },
    {
      id: 6,
      name: "Maine Coon",
      price: "$800",
      image: MaineCoon,
    },
    {
      id: 7,
      name: "Scottish Fold",
      price: "$500",
      image: ScottishFold,
    },
    {
      id: 8,
      name: "Sphynx Cat",
      price: "$1000",
      image: SphynxCat,
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">
          Popular pets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {dogsCats.map((pet) => (
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
