import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Package,
  Truck,
  Users,
  BarChart3,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import coupleTravelers from "@/assets/Bulid.png";

const DiscoverSection = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                Operations Dashboard
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Command Your
                <br />
                <span className="text-primary">Operations Center</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Centralized platform for real-time management of all your
                project supplies, equipment, and workforce across construction
                and industrial sites.{" "}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">
                      Supply/Inventory Management
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Materials, pipes, tools & supplies
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">
                      Equipment Rental/Tracking
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Monitor rentals & maintenance schedules
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">
                      Manpower Deployment
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Workforce allocation & site management
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">
                      Safety Solutions
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Compliance, protocols & protective gear
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 font-semibold group"
              >
                Access Dashboard
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-border hover:border-primary/50 rounded-xl px-8 font-semibold hover:bg-primary/5 transition-all"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div className="pt-6 border-t border-border/50">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    150+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Active Projects
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    99.8%
                  </p>
                  <p className="text-xs text-muted-foreground">Uptime SLA</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    24/7
                  </p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            {/* Main Image Card */}
            <Card className="relative overflow-hidden rounded-3xl border-2 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={coupleTravelers}
                alt="Volt Axis Operations Dashboard"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Stats Card - Operations Metrics */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <Card className="bg-background/95 backdrop-blur-xl border border-border/50 p-5 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Live Operations
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-xs font-medium text-foreground">
                        All Systems Operational
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Inventory
                      </p>
                      <p className="text-lg font-bold text-foreground">2,847</p>
                      <p className="text-xs text-green-600 font-medium">+12%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Fleet
                      </p>
                      <p className="text-lg font-bold text-foreground">64</p>
                      <p className="text-xs text-primary font-medium">Active</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Workers
                      </p>
                      <p className="text-lg font-bold text-foreground">1,250</p>
                      <p className="text-xs text-blue-600 font-medium">
                        On-site
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Orders
                      </p>
                      <p className="text-lg font-bold text-foreground">89</p>
                      <p className="text-xs text-amber-600 font-medium">
                        Pending
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
