import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { productAPI } from "@/services/api";
import {
  Shield,
  Wrench,
  HardHat,
  Package,
  Zap,
  Construction,
  Loader2,
  SlidersHorizontal,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  manufacturer: string;
  featured: boolean;
  inStock: boolean;
  tags: string[];
}

interface GroupedProducts {
  [category: string]: Product[];
}

const categoryIcons: { [key: string]: any } = {
  "Electrical Components": Zap,
  "Tools & Equipment": Wrench,
  "Industrial Supplies": Package,
  "Construction Materials": Construction,
  "Safety Equipment": Shield,
  PPE: HardHat,
  Other: Package,
};

const Services = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [groupedProducts, setGroupedProducts] = useState<GroupedProducts>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All Items");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  // Generate WhatsApp inquiry message with product details
  const generateProductInquiry = (product: Product): string => {
    const details = [
      `Hello Volt Axis,`,
      ``,
      `I'm interested in the following product:`,
      ``,
      `📦 *Product Details:*`,
      `━━━━━━━━━━━━━━━━━`,
      `Name: ${product.name}`,
      `Category: ${product.category}`,
      `Price: ${product.price} SAR / ${product.unit}`,
      `Manufacturer: ${product.manufacturer || "N/A"}`,
      `Stock Status: ${
        product.inStock
          ? `In Stock (${product.stock} available)`
          : "Out of Stock"
      }`,
      product.description ? `Description: ${product.description}` : "",
      product.tags && product.tags.length > 0
        ? `Tags: ${product.tags.join(", ")}`
        : "",
      ``,
      `Could you please provide more information about this product and availability?`,
      ``,
      `Thank you!`,
    ];

    return details.filter((line) => line !== "").join("\n");
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productAPI.getAll({ limit: 1000 });
      const fetchedProducts = response.data || [];
      setProducts(fetchedProducts);

      // Group products by category
      const grouped = fetchedProducts.reduce(
        (acc: GroupedProducts, product: Product) => {
          const category = product.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        },
        {}
      );

      setGroupedProducts(grouped);
    } catch (err: any) {
      setError("Failed to load products");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading products...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-destructive text-lg font-semibold mb-2">
              {error}
            </p>
            <Button onClick={fetchProducts} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Define category order with Electrical Components first
  const categoryOrder = [
    "Electrical Components",
    "Tools & Equipment",
    "Industrial Supplies",
    "Construction Materials",
    "Safety Equipment",
    "PPE",
    "Other",
  ];

  // Sort categories according to the defined order
  const categories = Object.keys(groupedProducts).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    // If category is not in the order list, put it at the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  // Filter products based on selected category
  const displayedCategories =
    selectedCategory === "All Items"
      ? categories
      : categories.filter((cat) => cat === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />

      {/* Spacer for header */}
      <div className="pt-28"></div>

      {/* Category Filter - Sticky */}
      <section className="sticky top-24 z-40 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
              <button
                onClick={() => setSelectedCategory("All Items")}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === "All Items"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                All Items
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {displayedCategories.map((category) => {
            const IconComponent = categoryIcons[category] || Package;
            const categoryProducts = groupedProducts[category];

            return (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-border/50">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-sm">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-foreground">
                      {category}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {categoryProducts.length} product
                      {categoryProducts.length !== 1 ? "s" : ""} available
                    </p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <Card
                      key={product._id}
                      className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-border/50 bg-card overflow-hidden flex flex-col"
                    >
                      <CardHeader className="space-y-3 pb-4 flex-shrink-0">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base font-bold line-clamp-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          {product.featured && (
                            <Badge
                              variant="default"
                              className="shrink-0 text-xs bg-accent text-accent-foreground"
                            >
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="line-clamp-2 text-sm">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-grow flex flex-col">
                        {/* Price & Unit
                        <div className="flex items-baseline gap-2 pb-3 border-b border-border/50 flex-shrink-0">
                          <span className="text-2xl font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            SAR / {product.unit}
                          </span>
                        </div>

                        {/* Stock Status */}
                        {/* <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              product.inStock ? "bg-green-500" : "bg-red-500"
                            } animate-pulse`}
                          />
                          <span className="text-sm text-muted-foreground font-medium">
                            {product.inStock ? (
                              <>In Stock ({product.stock})</>
                            ) : (
                              "Out of Stock"
                            )}
                          </span>
                        </div>  */}

                        {/* Manufacturer */}
                        {product.manufacturer && (
                          <p className="text-xs text-muted-foreground italic">
                            by {product.manufacturer}
                          </p>
                        )}

                        {/* Tags */}
                        {product.tags && product.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-2">
                            {product.tags.slice(0, 3).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs px-2 py-0.5"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* WhatsApp Inquiry Button */}
                        <div className="pt-4 border-t border-border/30 mt-auto">
                          <WhatsAppButton
                            phone="+966536438786"
                            message={generateProductInquiry(product)}
                            label="Inquire on WhatsApp"
                            className="w-full justify-center text-sm"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover
            how we can support your business with our comprehensive range of
            services and supplies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/#contact")}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all"
              onClick={() => (window.location.href = "tel:+966591351561")}
            >
              Call +966 59 135 1561
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
