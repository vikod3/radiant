import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-hero">
      <div className="relative h-16 px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <HeroSection />
    </div>
  );
};

export default Index;
