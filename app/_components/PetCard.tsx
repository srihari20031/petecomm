import Image, { StaticImageData } from "next/image";
import { FaMobile } from "react-icons/fa";

interface PetCardProps {
  name: string;
  price: string;
  image: StaticImageData;
}

const PetCard: React.FC<PetCardProps> = ({ name, price, image }) => {
  return (
    <div className="border rounded-2xl p-4 mb-4 text-[#5a4030] shadow-lg">
      <Image
        src={image}
        alt={name}
        className="rounded-lg mx-auto w-full md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-center"
      />
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-6">{name}</h3>
        <p className="text-md md:text-lg font-bold mt-2">{price}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="buy-button bg-gray-600 text-gray-200 px-3 py-2 md:px-4 md:py-2 mt-4 md:mt-6 rounded-lg transition duration-300 ease-in-out hover:bg-gray-400 hover:text-black">
          <FaMobile className="inline-block mr-2" />
          Call to buy
        </button>
      </div>
    </div>
  );
};

export default PetCard;
