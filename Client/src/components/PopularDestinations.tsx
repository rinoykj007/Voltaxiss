import { Card } from "@/components/ui/card";
import {
  MapPin,
  Package,
  Wrench,
  ShieldCheck,
  Building2,
  Factory,
  Zap,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import tropicalBliss from "@/assets/tropical-bliss.jpg";
import adventureParadise from "@/assets/adventure-paradise.jpg";
import luxuryOverwater from "@/assets/luxury-overwater.jpg";
import { useEffect, useRef, useState } from "react";

// Key Project Regions in Saudi Arabia
const projectRegions = [
  {
    city: "Riyadh",
    region: "Central Region",
    activeProjects: 45,
    growth: "+18%",
    image: tropicalBliss,
  },
  {
    city: "Jubail",
    region: "Eastern Province",
    activeProjects: 32,
    growth: "+24%",
    image: adventureParadise,
  },
  {
    city: "Dammam",
    region: "Eastern Province",
    activeProjects: 28,
    growth: "+12%",
    image: luxuryOverwater,
  },
];

// Popular Supply Categories
const supplyCategories = [
  {
    name: "Pipes & Fittings",
    icon: Package,
    orders: "1,240",
    trend: "+15%",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    name: "Safety Solutions",
    icon: ShieldCheck,
    orders: "890",
    trend: "+22%",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  {
    name: "Heavy Equipment",
    icon: Wrench,
    orders: "654",
    trend: "+8%",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
];

// Primary Industries Served
const industries = [
  {
    name: "Construction",
    icon: Building2,
    activeProjects: 156,
    percentage: "42%",
    color: "primary",
  },
  {
    name: "Petrochemical",
    icon: Factory,
    activeProjects: 89,
    percentage: "31%",
    color: "primary",
  },
  {
    name: "Utilities",
    icon: Zap,
    activeProjects: 67,
    percentage: "27%",
    color: "primary",
  },
];

const PopularDestinations = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const regionsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (
      ref: React.RefObject<HTMLDivElement>,
      sectionName: string
    ) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(sectionName));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    };

    createObserver(regionsRef, "regions");
    createObserver(categoriesRef, "categories");
    createObserver(industriesRef, "industries");

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="px-6 md:px-12 py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Key Project Regions */}
        <div
          ref={regionsRef}
          className={
            visibleSections.has("regions") ? "animate-fade-in-up" : "opacity-0"
          }
        >
          <div
            className={`flex items-end justify-between mb-8 ${
              visibleSections.has("regions")
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            <div
              className={
                visibleSections.has("regions")
                  ? "animate-fade-in-up animation-delay-100"
                  : "opacity-0"
              }
            >
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                Regional Operations
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Key Project
                <br />
                Regions
              </h2>
            </div>
            <button
              className={`text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-300 flex items-center gap-2 group hover:gap-3 ${
                visibleSections.has("regions")
                  ? "animate-fade-in-up animation-delay-200"
                  : "opacity-0"
              }`}
            >
              View All Locations
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectRegions.map((region, index) => (
              <Card
                key={index}
                className={`overflow-hidden rounded-2xl group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-border/50 hover:border-primary/30 ${
                  visibleSections.has("regions")
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={
                  visibleSections.has("regions")
                    ? { animationDelay: `${300 + index * 100}ms` }
                    : {}
                }
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/70 transition-colors duration-500" />
                  <img
                    src={region.image}
                    alt={region.city}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full z-20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <p className="text-xs font-bold text-white">
                      {region.growth}
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-1">{region.city}</h3>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <MapPin className="w-3 h-3 animate-pulse" />
                      {region.region}
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-card transform group-hover:bg-card/90 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Active Projects
                      </p>
                      <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {region.activeProjects}
                      </p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary/50 group-hover:text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Supply Categories */}
        <div
          ref={categoriesRef}
          className={
            visibleSections.has("categories")
              ? "animate-fade-in-up"
              : "opacity-0"
          }
        >
          <div
            className={`mb-8 ${
              visibleSections.has("categories")
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Top Demand
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Popular Supply
              <br />
              Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supplyCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 rounded-2xl border-2 border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group bg-card/50 backdrop-blur-sm ${
                    visibleSections.has("categories")
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={
                    visibleSections.has("categories")
                      ? { animationDelay: `${200 + index * 100}ms` }
                      : {}
                  }
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${category.color} border flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-right transform group-hover:translate-x-1 transition-transform duration-300">
                      <p className="text-xs text-muted-foreground mb-1">
                        Monthly Orders
                      </p>
                      <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.orders}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover:w-full"
                        style={{ width: "75%" }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-green-600 group-hover:scale-110 transition-transform duration-300">
                      {category.trend}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Primary Industries Served */}
        <div
          ref={industriesRef}
          className={
            visibleSections.has("industries")
              ? "animate-fade-in-up"
              : "opacity-0"
          }
        >
          <div
            className={`mb-8 ${
              visibleSections.has("industries")
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Market Focus
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Primary Industries
              <br />
              Served
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 rounded-2xl border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group bg-gradient-to-br from-card to-card/50 hover:from-card hover:to-primary/5 ${
                    visibleSections.has("industries")
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={
                    visibleSections.has("industries")
                      ? { animationDelay: `${200 + index * 100}ms` }
                      : {}
                  }
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Industry Sector
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between group/item hover:bg-secondary/30 p-2 rounded-lg transition-colors duration-300">
                      <p className="text-sm text-muted-foreground">
                        Active Projects
                      </p>
                      <p className="text-2xl font-bold text-foreground group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-300">
                        {industry.activeProjects}
                      </p>
                    </div>
                    <div className="flex items-center justify-between group/item hover:bg-secondary/30 p-2 rounded-lg transition-colors duration-300">
                      <p className="text-sm text-muted-foreground">
                        Portfolio Share
                      </p>
                      <p className="text-lg font-bold text-primary group-hover/item:scale-110 transition-transform duration-300">
                        {industry.percentage}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
