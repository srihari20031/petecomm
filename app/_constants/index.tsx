import DogsandCats from "../../public/Catdog.jpg";
import Piegeon from "../../public/Birds.jpg";
import Sea from "../../public/Sea.jpg";
import Other from "../../public/Other.jpg";
import GoldenRet from "../../public/GoldenRet.jpg";
import Persian from "../../public/PersianCat.jpg";
import Parrot from "../../public/Parrot.jpg";
import Rabbit from "../../public/Rabbit.jpg";
import GoldfishImage from "../../public/Goldfish.jpg";
import BettaFishImage from "../../public/BettaFishImage.jpg";
import GuppyImage from "../../public/GuppyImage.jpg";
import MollyFishImage from "../../public/MollyFishImage.jpg";
import CichlidImage from "../../public/CichlidImage.jpg";
import DiscusFishImage from "../../public/DiscusFish.jpg";
import ParakeetImage from "../../public/Parkeet.jpg";
import CanaryImage from "../../public/Canary.jpg";
import CockatielImage from "../../public/Cocktiel.jpg";
import LovebirdImage from "../../public/Lovebirds.jpg";
import BudgerigarImage from "../../public/Budgerigar.jpg";
import FinchImage from "../../public/Finch.jpg";
import ParrotletImage from "../../public/Parrotlet.jpg";
import CockatooImage from "../../public/CockatooImage.jpg";
import BlackPersian from "../../public/BlackPersian.jpg";
import GermanShepherd from "../../public/GermanShepherd.webp";
import LabradorRet from "../../public/LabradorRet.jpg";
import Poodle from "../../public/Poodle.jpg";
import Siamese from "../../public/SiameseCat.jpg";
import ScottishFold from "../../public/ScottishFold.jpg";
import Cow from "../../public/Goat.jpg";
import Chicken from "../../public/Chicken.jpg";
import Sheep from "../../public/Chicken.jpg";
import Goat from "../../public/Goat.jpg";
import Horse from "../../public/Horse.jpg";

export const sections = [
  { id: 0, title: "Home", Link: "/" },
  { id: 1, title: "Pets", Link: "/pets" },
  { id: 2, title: "Contact", Link: "/contact" },
];

export const CategoriesData = [
  {
    id: 1,
    name: "Dog and Cats",
    image: DogsandCats,
    alt: "Dogandcats",
    link: "/dogsandcats",
  },
  { id: 2, name: "Birds", image: Piegeon, alt: "Birds", link: "/birds" },
  {
    id: 3,
    name: "Fishes",
    image: Sea,
    alt: "Fishes and Other Sea Animals",
    link: "/fishes",
  },
  { id: 4, name: "Other Animals", image: Other, alt: "Other", link: "/other" },
];

export const popularPets = [
  {
    id: "DogsAndCats-1",
    name: "Golden Retriever",
    price: "$800",
    image: GoldenRet,
  },
  { id: "DogsAndCats-2", name: "Persian Cat", price: "$500", image: Persian },
  { id: "Birds-1", name: "Parrot", price: "$150", image: Parrot },
  { id: "OtherAnimals-1", name: "Rabbit", price: "$50", image: Rabbit },
];

export const petCategories = {
  "Dogs and Cats": [
    {
      id: "DogsAndCats-1",
      name: "Golden Retriever",
      price: "$800",
      image: GoldenRet,
    },
    { id: "DogsAndCats-2", name: "Persian Cat", price: "$500", image: Persian },
    {
      id: "DogsAndCats-3",
      name: "Labrador Retriever",
      price: "$1000",
      image: LabradorRet,
    },
    {
      id: "DogsAndCats-4",
      name: "German Shepherd",
      price: "$900",
      image: GermanShepherd,
    },
    { id: "DogsAndCats-5", name: "Poodle", price: "$700", image: Poodle },
    { id: "DogsAndCats-6", name: "Siamese Cat", price: "$600", image: Siamese },
    {
      id: "DogsAndCats-7",
      name: "Scottish Fold",
      price: "$500",
      image: ScottishFold,
    },
    {
      id: "DogsAndCats-8",
      name: "Black Persian Cat",
      price: "$400",
      image: BlackPersian,
    },
  ],
  Birds: [
    { id: "Birds-1", name: "Parrot", price: "$150", image: Parrot },
    { id: "Birds-2", name: "Parakeet", price: "$50", image: ParakeetImage },
    { id: "Birds-3", name: "Canary", price: "$40", image: CanaryImage },
    { id: "Birds-4", name: "Cockatiel", price: "$60", image: CockatielImage },
    { id: "Birds-5", name: "Lovebird", price: "$45", image: LovebirdImage },
    { id: "Birds-6", name: "Budgerigar", price: "$35", image: BudgerigarImage },
    { id: "Birds-7", name: "Finch", price: "$30", image: FinchImage },
    { id: "Birds-8", name: "Parrotlet", price: "$55", image: ParrotletImage },
    { id: "Birds-9", name: "Cockatoo", price: "$100", image: CockatooImage },
  ],
  Fishes: [
    { id: "Fishes-1", name: "Goldfish", price: "$10", image: GoldfishImage },
    { id: "Fishes-2", name: "Betta Fish", price: "$15", image: BettaFishImage },
    { id: "Fishes-3", name: "Guppy", price: "$5", image: GuppyImage },
    { id: "Fishes-4", name: "Molly Fish", price: "$7", image: MollyFishImage },
    { id: "Fishes-5", name: "Cichlid", price: "$12", image: CichlidImage },
    {
      id: "Fishes-6",
      name: "Discus Fish",
      price: "$25",
      image: DiscusFishImage,
    },
  ],
  "Other Animals": [
    { id: "OtherAnimals-1", name: "Rabbit", price: "$50", image: Rabbit },
    { id: "OtherAnimals-2", name: "Cow", price: "$500", image: Cow },
    { id: "OtherAnimals-3", name: "Chicken", price: "$20", image: Chicken },
    { id: "OtherAnimals-4", name: "Sheep", price: "$200", image: Sheep },
    { id: "OtherAnimals-5", name: "Goat", price: "$150", image: Goat },
    { id: "OtherAnimals-6", name: "Horse", price: "$1000", image: Horse },
  ],
};
