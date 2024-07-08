import { petCategories } from "../../_constants/index"; // Adjust the import path as needed
import PetCard from "../../_components/PetCard";
import Link from "next/link";

const getAllPets = () => {
  return Object.values(petCategories).flat();
};

const PetDetailPage = ({ params }: { params: { slug: string } }) => {
  // Find the pet based on the ID
  const allPets = getAllPets();

  // Corrected comparison
  const pet = allPets.find((pet) => pet.id === params.slug);
  

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center my-40">
        <Link href={`/pet/${pet.id}`}>
        <PetCard
          key={pet.id}
          name={pet.name}
          price={pet.price}
          image={pet.image}
          // Pass the link to the PetCard component
        />
        </Link>
      </div>
    </div>
  );
};

export default PetDetailPage;
