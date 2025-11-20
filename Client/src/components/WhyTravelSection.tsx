import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Industrial and construction images from Unsplash
const industrialEquipment = "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"; // Industrial equipment
const constructionSite = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"; // Construction site
const electricalWork = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"; // Electrical work
const warehouseSupplies = "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"; // Warehouse supplies

const reasons = [
  {
    title: "Why Choose Volt Axis?",
    description:
      "At Volt Axis, we believe every project should be as unique as its vision. Whether you're seeking curated supplies for thriving industrial sites, or robust equipment for challenging construction projects, we make building your next success seamless. Let us craft your next solution.",
    images: [
      { src: industrialEquipment, alt: "Industrial Equipment", badge: "EQUIPMENT" },
      { src: constructionSite, alt: "Construction Excellence", badge: "QUALITY" }
    ]
  },
  {
    title: "Unmatched Quality & Reliability",
    description:
      "We source only the highest-grade materials and equipment from trusted global manufacturers. Our rigorous quality control ensures that every product meets international standards, giving you peace of mind and long-lasting performance on every project.",
    images: [
      { src: electricalWork, alt: "Professional Grade", badge: "CERTIFIED" },
      { src: warehouseSupplies, alt: "Quality Supplies", badge: "PREMIUM" }
    ]
  },
  {
    title: "Expert Support & Guidance",
    description:
      "Our team of experienced professionals is dedicated to your success. From project consultation to technical support, we provide comprehensive guidance to help you make informed decisions and achieve optimal results for your industrial and construction needs.",
    images: [
      { src: industrialEquipment, alt: "Expert Solutions", badge: "SUPPORT" },
      { src: constructionSite, alt: "Professional Service", badge: "24/7" }
    ]
  }
];

const WhySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reasons.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reasons.length - 1 ? 0 : prev + 1));
  };

  const currentReason = reasons[currentIndex];

  return (
    <section className="px-6 md:px-12 py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {currentReason.title.split(' ').slice(0, 2).join(' ')} <br />
              {currentReason.title.split(' ').slice(2).join(' ')}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {currentReason.description}
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 items-center">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                aria-label="Previous reason"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                aria-label="Next reason"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <span className="text-sm text-muted-foreground ml-2">
                {currentIndex + 1} / {reasons.length}
              </span>
            </div>
          </div>

          {/* Right - Images */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden rounded-3xl h-[400px]">
              <img
                src={currentReason.images[0].src}
                alt={currentReason.images[0].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </Card>
            <Card className="overflow-hidden rounded-3xl h-[400px] relative">
              <img
                src={currentReason.images[1].src}
                alt={currentReason.images[1].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                {currentReason.images[1].badge}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
