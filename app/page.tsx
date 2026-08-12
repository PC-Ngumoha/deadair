import { Features } from "@/sections/Features";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { StatsBanner } from "@/sections/StatsBanner";
import { Testimonial } from "@/sections/Testimonial";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
      <StatsBanner />
      <Features />
      <Testimonial />
    </main>
  );
}
