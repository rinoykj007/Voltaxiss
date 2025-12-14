import { Button } from "@/components/ui/button";
import { Zap, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/constants/contact";
import logoImage from "@/assets/voltaxis.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-[95%] mx-auto">
        <nav className="bg-background shadow-lg rounded-full px-6 md:px-8 py-4 flex items-center justify-between backdrop-blur-sm border border-border/50">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Volt Axis Company"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback to icon if logo image not found
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
          </Link>

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

            {/* Product Categories */}
            <li>
              <Link
                to="/categories"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Product Categories
              </Link>
            </li>

            {/* Contact Us */}
            <li>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <a
                href={`tel:${CONTACT_INFO.whatsapp.showroom.number}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-xl px-4 font-semibold bg-primary hover:bg-primary/90"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  Showroom
                </Button>
              </a>
              <a
                href={`tel:${CONTACT_INFO.whatsapp.trading.number}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl px-4 font-semibold"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  Trading
                </Button>
              </a>
            </div>

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
                <Link
                  to="/categories"
                  className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Product Categories
                </Link>
              </li>

              {/* Contact Us */}
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              {/* Mobile CTA */}
              <li className="pt-4 space-y-2">
                <a
                  href={`tel:${CONTACT_INFO.whatsapp.showroom.number}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Showroom: {CONTACT_INFO.whatsapp.showroom.number}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.whatsapp.trading.number}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Trading: {CONTACT_INFO.whatsapp.trading.number}
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
