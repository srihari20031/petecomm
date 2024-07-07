import { petCategories } from "../../_constants/index"; // Adjust the import path as needed
import PetCard from "../../_components/PetCard";

const getAllPets = () => {
  return Object.values(petCategories).flat();
};

const PetDetailPage = ({ params }: { params: { slug: string } }) => {
  // Find the pet based on the ID
  const allPets = getAllPets();

  // Corrected comparison
  const pet = allPets.find((pet) => pet.id === params.slug);
  console.log(pet);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center my-40">
        <PetCard
          key={pet.id}
          name={pet.name}
          price={pet.price}
          image={pet.image}
          link={`/pet/${pet.id}`} // Pass the link to the PetCard component
        />
      </div>
    </div>
  );
};

export default PetDetailPage;
