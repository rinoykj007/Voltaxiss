import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// High-quality images for each service category
const safetyImage =
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"; // Industrial safety helmets and equipment
const furnitureImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80"; // Office furniture and workspace setup
const pipesImage =
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"; // Industrial pipes, valves, and plumbing
const weldingImage =
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"; // Industrial welding equipment, tools and materials
const toolsImage =
  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1920&q=80"; // Professional tools and equipment
const officeSuppliesImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"; // Office desk supplies and stationery
const equipmentRentalImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"; // Construction equipment and heavy machinery

const carouselSlides = [
  {
    id: 1,
    category: "SAFETY SOLUTIONS",
    title: "Comprehensive Safety Solutions for Your Workplace",
    buttonText: "Explore Solutions",
    buttonLink: "/services",
    image: safetyImage,
  },
  {
    id: 2,
    category: "FURNITURE SOLUTIONS",
    title: "Quality Furniture Solutions for Modern Workspaces",
    buttonText: "View Catalog",
    buttonLink: "/services",
    image: furnitureImage,
  },
  {
    id: 3,
    category: "PIPES & FITTINGS",
    title: "Reliable Pipes & Fittings for Every Industrial Need",
    buttonText: "Learn More",
    buttonLink: "/services",
    image: pipesImage,
  },
  {
    id: 4,
    category: "WELDING & FASTENING",
    title: "Professional Welding & Fastening Equipment and Supplies",
    buttonText: "Discover More",
    buttonLink: "/services",
    image: weldingImage,
  },
  {
    id: 5,
    category: "TOOLS & EQUIPMENT",
    title: "Premium Tools & Equipment for Professional Results",
    buttonText: "Shop Now",
    buttonLink: "/services",
    image: toolsImage,
  },
  {
    id: 6,
    category: "OFFICE & PANTRY SUPPLIES",
    title: "Complete Office & Pantry Supplies for Your Business",
    buttonText: "Browse Supplies",
    buttonLink: "/services",
    image: officeSuppliesImage,
  },
  {
    id: 7,
    category: "EQUIPMENT RENTALS",
    title: "Flexible Equipment Rental Solutions for Your Projects",
    buttonText: "View Rentals",
    buttonLink: "/services",
    image: equipmentRentalImage,
  },
];

const navigationTabs = [
  "OUR SERVICES & SUPPLIES",
  "SAFETY SOLUTIONS",
  "FURNITURE SOLUTIONS",
  "PIPES & FITTINGS",
  "WELDING & FASTENING",
  "TOOLS & EQUIPMENT",
  "OFFICE & PANTRY SUPPLIES",
  "EQUIPMENT RENTALS",
];

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20">
                  <div className="max-w-7xl w-full mx-auto">
                    <div
                      key={`content-${index}-${current}`}
                      className="max-w-3xl space-y-6"
                    >
                      <p className="text-sm md:text-base font-medium tracking-wider uppercase text-white/80 animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                        {slide.category}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-white animate-slide-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                        {slide.title}
                      </h1>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => navigate(slide.buttonLink)}
                        className="rounded-full border-2 border-white/30 bg-transparent hover:bg-white/10 text-white px-8 py-6 flex items-center gap-3 group mt-8 animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]"
                      >
                        <span className="text-base">{slide.buttonText}</span>
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10 overflow-hidden">
                  <div className="overflow-x-auto no-scrollbar">
                    <div className="flex min-w-max px-6 md:px-12 lg:px-20">
                      {navigationTabs.map((tab, index) => (
                        <button
                          key={tab}
                          className={`px-6 py-4 text-xs md:text-sm font-medium tracking-wide uppercase border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                            index === 2
                              ? "border-cyan-400 text-cyan-400"
                              : "border-transparent text-white/70 hover:text-white hover:border-white/50"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 right-6 md:right-12 lg:right-20 z-20 flex gap-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index ? "bg-cyan-400 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
