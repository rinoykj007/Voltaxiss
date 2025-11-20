import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhyTravelSection";
import DiscoverSection from "@/components/DiscoverSection";
import TestimonialSection from "@/components/TestimonialSection";
import PopularDestinations from "@/components/PopularDestinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <DiscoverSection />
      <TestimonialSection />
      <PopularDestinations />
      <Footer />
    </div>
  );
};

export default Index;
