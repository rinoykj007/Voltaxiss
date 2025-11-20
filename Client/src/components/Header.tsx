import { Button } from "@/components/ui/button";
import { Zap, ChevronDown, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-[95%] mx-auto">
        <nav className="bg-background shadow-lg rounded-full px-6 md:px-8 py-4 flex items-center justify-between backdrop-blur-sm border border-border/50">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Volt Axis</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                About Us
              </Link>
            </li>

            {/* Services & Supplies */}
            <li>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Services & Supplies
              </Link>
            </li>

            {/* Product Categories Dropdown */}
            <li className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1 py-2">
                Product Categories
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-xl border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Safety & Protection
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Electrical & Lighting
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Hardware & Tools
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Valves & Fittings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  HVAC & Plumbing
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Building Materials
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Industrial Controls & Automation
                </a>
              </div>
            </li>

            {/* Contact Us */}
            <li>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="hidden md:flex items-center gap-2 rounded-xl px-6 font-semibold bg-primary hover:bg-primary/90"
            >
              <Phone className="w-4 h-4" />
              +966 59 135 1561
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-background shadow-lg rounded-3xl px-6 py-4 backdrop-blur-sm border border-border/50">
            <ul className="space-y-2">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  About Us
                </Link>
              </li>

              {/* Services & Supplies */}
              <li>
                <Link
                  to="/services"
                  className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Services & Supplies
                </Link>
              </li>

              {/* Product Categories */}
              <li>
                <button
                  onClick={() => toggleDropdown("products")}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Product Categories
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "products" && (
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        Safety & Protection
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        Electrical & Lighting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        Hardware & Tools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        Valves & Fittings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        HVAC & Plumbing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        Building Materials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        Industrial Controls & Automation
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Contact Us */}
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </li>

              {/* Mobile CTA */}
              <li className="pt-4">
                <a
                  href="tel:+966591351561"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +966 59 135 1561
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
