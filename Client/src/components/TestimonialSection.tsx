import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import santorini from "@/assets/customer.png";
import femaleTraveler from "@/assets/female-traveler.jpg";
import coupleTravelers from "@/assets/couple-travelers.jpg";

const TestimonialSection = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Featured Destination */}
          <Card className="overflow-hidden rounded-3xl relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="relative h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={santorini}
                alt="Santorini, Greece"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white transition-all shadow-lg group-hover:shadow-xl z-20">
                <Heart className="w-5 h-5 text-destructive fill-destructive" />
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-20">
                <span className="text-xs font-bold text-primary">Featured</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-8 text-white">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold tracking-tight">
                    Santorini, Greece
                  </h3>
                  <p className="text-sm text-white/80 font-medium">
                    Discover the beauty of the Aegean Sea
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img
                      src={femaleTraveler}
                      alt="Customer 1"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10 object-cover"
                    />
                    <img
                      src={coupleTravelers}
                      alt="Customer 2"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10 object-cover"
                    />
                    <img
                      src={santorini}
                      alt="Customer 3"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10 object-cover"
                    />
                    <img
                      src={femaleTraveler}
                      alt="Customer 4"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10 object-cover"
                    />
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white shadow-md flex items-center justify-center hover:scale-110 transition-transform hover:z-10 cursor-pointer">
                      <span className="text-xs font-bold">+5</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Read More clicked - Santorini, Greece");
                      alert("Navigating to Santorini destination page...");
                      // You can add navigation logic here, for example:
                      // navigate('/destinations/santorini');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold text-white border border-white/30 hover:border-white/50 transition-all duration-300 hover:gap-3 hover:px-6 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    Read More
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Right - Testimonials */}
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                Our Best Services
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mt-0">
                Experience seamless operations, worry-free and efficient, at
                your project location.
              </p>
            </div>

            <div className="space-y-4" style={{ marginTop: 22 }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Why Choose Volt Axis
                <br />
                for Your Projects?
              </h2>

              <div className="space-y-6">
                <Card className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
                  <div className="flex gap-5">
                    <img
                      src={femaleTraveler}
                      alt="Happy customer"
                      className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-foreground leading-relaxed text-sm md:text-base">
                        Volt Axis made my construction project in Jubail
                        seamless and successful. Best supply partner ever!
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={coupleTravelers}
                    alt="Testimonial 1"
                    className="w-full h-36 object-cover rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  />
                  <img
                    src={femaleTraveler}
                    alt="Testimonial 2"
                    className="w-full h-36 object-cover rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  />
                </div>

                <p className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer">
                  Read More →
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
