import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import femaleTraveler from "@/assets/Building.png";
import coupleTravelers from "@/assets/Building-02.png";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Rating */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Trusted by Thousands
                <br />
                of Happy Clients
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 p-8 rounded-3xl w-full shadow-lg">
              <div className="space-y-6">
                {/* Rating Score */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-white">4.9</p>
                        <p className="text-xs text-white/90">out of 5</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-7 h-7 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Excellent Rating
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Based on 2,500+ reviews
                    </p>
                  </div>
                </div>

                {/* Customer Avatars */}
                <div className="pt-4 border-t border-accent/20">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <img
                        src={femaleTraveler}
                        alt="Customer"
                        className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <img
                        src={coupleTravelers}
                        alt="Customer"
                        className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <img
                        src={femaleTraveler}
                        alt="Customer"
                        className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center border-4 border-white shadow-md">
                        <span className="text-white font-bold text-sm">
                          +2K
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        2,500+ Happy Clients
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Join our satisfied customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Building on a<br />
              Foundation of Trust.
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={femaleTraveler}
                alt="Female traveler"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <img
                src={coupleTravelers}
                alt="Couple travelers"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Complete solutions tailored to your project's needs. We deliver
              high-quality materials, skilled manpower, and equipment — ensuring
              safety and efficiency every step of the way.
            </p>

            <Button variant="default" size="lg" className="rounded-full">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
