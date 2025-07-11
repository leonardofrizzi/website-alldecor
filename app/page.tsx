import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <ContactSection />
    </main>
  );
}