import DogsandCats from "../../public/Catdog.jpg";
import Birds from "../../public/Birds.jpg";
import Sea from "../../public/Sea.jpg";
import Other from "../../public/Other.jpg";


export const sections = [
  {
    id: 0,
    title: "Home",
    Link: "/",
  },
  {
    id: 1,
    title: "Pets",
    Link: "/pets",
  },
  {
    id: 2,
    title: "About",
    Link: "/about",
  },
  {
    id: 3,
    title: "Contact",
    Link: "/contact",
  },
];

export const CategoriesData = [
  {
    id: 1,
    name: 'Dog and Cats',
    image: DogsandCats,
    alt: 'Dogandcats',
    link: "/dogsandcats"
  },
  {
    id: 2,
    name: 'Birds',
    image: Birds,
    alt: 'Birds',
    link: "/birds"
  },
  {
    id: 3,
    name: 'Fishes',
    image: Sea,
    alt: 'Fishes and Other Sea Animals',
    link: "/fishes"
  },
  {
    id: 4,
    name: 'Other Animals',
    image: Other,
    alt: 'Other',
    link: "/other"
  }
];