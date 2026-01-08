import HeroCarousel from "@/components/homepage/HeroCarousel";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import ProductsSection from "@/components/homepage/ProductsSection";

export default function Home() {
  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Products Section */}
      <ProductsSection />

      {/* Features Section */}
      <FeaturesSection />
    </>
  );
}
