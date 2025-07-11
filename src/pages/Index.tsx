import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { LogoMarquee } from "@/components/LogoMarquee";
import FeatureSection from "@/components/FeatureSection";
import FeatureSection2 from "@/components/FeatureSection2";
import FeatureSection3 from "@/components/FeatureSection3";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <FeatureSection />
      <FeatureSection2 />
      <FeatureSection3 />
    </>
  );
};

export default Index;
