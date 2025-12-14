import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Users,
  Award,
  Target,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import voltaxisLogo from "@/assets/voltaxis.png";
import buildingImage from "@/assets/Building.png";
import customerImage from "@/assets/customer.png";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "2,500+", label: "Happy Clients" },
  { value: "98%", label: "Success Rate" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "We ensure the highest standards in every product and service we deliver.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced professionals dedicated to your project's success.",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your satisfaction and project goals are our top priority.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient logistics to keep your projects on schedule.",
  },
  {
    icon: Building2,
    title: "Comprehensive Solutions",
    description: "Complete supply chain from materials to manpower.",
  },
  {
    icon: Award,
    title: "Certified Products",
    description:
      "International standards compliance and quality certifications.",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground h-screen flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                About Volt Axis Trading Est
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building Stronger
                <br />
                Foundations for
                <br />
                Saudi Arabia
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Since our establishment, Volt Axis Company. has been a trusted
                partner for industrial and construction projects across the
                Kingdom. We specialize in providing comprehensive supply
                solutions, safety equipment, and skilled manpower to support
                your vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => navigate("/services")}
                >
                  Our Services
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-primary-foreground/30 bg-transparent hover:bg-white/10 text-primary-foreground"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={buildingImage}
                  alt="Volt Axis Building"
                  className="w-full h-[400px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <img
                    src={voltaxisLogo}
                    alt="Volt Axis Logo"
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 md:px-12 py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={`p-8 text-center border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 rounded-2xl animate-fade-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="px-6 md:px-12 py-16 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-10 rounded-3xl bg-card shadow-lg">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading supplier of industrial and construction
                  materials in Saudi Arabia by delivering exceptional quality,
                  safety, and service. We aim to support the Kingdom's Vision
                  2030 by empowering projects with reliable solutions and
                  fostering long-term partnerships built on trust and
                  excellence.
                </p>
              </div>
            </Card>

            {/* Vision */}
            <Card className="p-10 rounded-3xl bg-card shadow-lg">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and innovative industrial supply
                  partner in the region, recognized for our commitment to
                  quality, safety, and customer satisfaction. We envision a
                  future where every project we support contributes to building
                  a stronger, more sustainable Saudi Arabia.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="px-6 md:px-12 py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make and every service we
              provide to ensure your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className={`p-8 rounded-3xl border-2 border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg group animate-fade-in-up animation-delay-${
                    (index + 1) * 100
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent group-hover:to-accent/80 transition-all duration-300">
                      <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-6 md:px-12 py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={customerImage}
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Dedicated Professionals
                  </h3>
                  <p className="text-white/90">
                    Working together to deliver excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Experienced Professionals
                <br />
                Committed to Your Success
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team comprises industry veterans with decades of combined
                experience in industrial supply, construction materials, and
                project management. We bring technical expertise, market
                knowledge, and a customer-first approach to every engagement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Technical Experts:
                    </span>{" "}
                    Engineers and specialists in industrial solutions
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Safety Professionals:
                    </span>{" "}
                    Certified safety officers and trainers
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Customer Support:
                    </span>{" "}
                    Dedicated account managers for personalized service
                  </p>
                </li>
              </ul>
              <Button
                variant="default"
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate("/contact")}
              >
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-12 py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Let's discuss how Volt Axis can support your industrial and
            construction needs with quality supplies and expert service.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => navigate("/contact")}
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-primary-foreground/30 bg-transparent hover:bg-white/10 text-primary-foreground"
              onClick={() => navigate("/services")}
            >
              View Our Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
