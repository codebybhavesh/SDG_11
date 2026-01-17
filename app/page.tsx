import HeroSection from "@/components/sections/hero";
import CategoriesSection from "@/components/sections/categories";
import WhyChooseSection from "@/components/sections/why-choose";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <WhyChooseSection />
      <ContactSection />
    </main>
  );
}
