import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FeatureSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeatureSection />
      <HowItWorksSection />
      <ContactSection />
    </main>
  );
}