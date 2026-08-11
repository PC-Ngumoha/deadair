import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
    </main>
  );
}
