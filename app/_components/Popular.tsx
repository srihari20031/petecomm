
import { popularPets } from "../_constants";
import PetCard from "./PetCard";

const Popular = () => {
  
  return (
    <div className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#7a5c43]">Popular pets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {popularPets.map((pet) => (
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

export default Popular;
