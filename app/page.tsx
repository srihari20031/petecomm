import Image from "next/image";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Popular from "./_components/Popular";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Popular />
    </main>
  );
}
