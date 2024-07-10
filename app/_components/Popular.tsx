
import { popularPets } from "../_constants";
import PetCard from "./PetCard";

const Popular = () => {
  
  return (
    <div className="lg:py-20 md:py-10 py-6 px-4">
      <div className="max-w-[1600px] mx-auto px-4 mb-20 sm:px-6 lg:px-8">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-12 text-center text-[#7a5c43]">Popular pets</h1>
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
