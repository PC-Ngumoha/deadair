import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
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
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
