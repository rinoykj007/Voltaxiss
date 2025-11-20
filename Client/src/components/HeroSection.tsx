import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// Replace these placeholder URLs with your downloaded HD images
// Recommended sources: Unsplash, Pexels, Pixabay (all free & HD)
const businessTeam =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"; // Team collaboration
const techServices =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"; // Technology/Analytics
const consulting =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80"; // Business meeting
const corporateOffice =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"; // Modern office

const carouselSlides = [
  {
    id: 1,
    category: "OUR SERVICES",
    title: "Building Stronger Foundations for the Kingdom's Growth",
    buttonText: "Explore Services",
    image: techServices,
  },
  {
    id: 2,
    category: "IT CONSULTING",
    title: "Strategic IT Consulting to Drive Your Business Forward",
    buttonText: "Get Started",
    image: consulting,
  },
  {
    id: 3,
    category: "COMPLETE PROJECT SOLUTIONS",
    title: "Reliable Support and Supplies to Ensure Project Success",
    buttonText: "Learn More",
    image: businessTeam,
  },
  {
    id: 4,
    category: "INDUSTRIAL CONTROL & AUTOMATION",
    title: "Advanced Control Solutions to Optimize Your Operations",
    buttonText: "Our Story",
    image: corporateOffice,
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

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden ">
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
              <div className="relative w-full h-[600px] md:h-[700px]">
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
