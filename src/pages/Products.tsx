import { Check, Package, Ruler, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-bricks.jpg";

const Products = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Wire Cut Bricks</h1>
            <p className="text-xl text-primary-foreground/90">
              High-quality construction materials engineered for durability and precision
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={productsImage}
                alt="Wire Cut Bricks Product"
                className="rounded-lg shadow-large w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Wire Cut Bricks</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our wire-cut bricks are manufactured using advanced technology that ensures perfect dimensions, smooth finish, and superior strength. Ideal for all types of construction projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Uniform size and shape for easy construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">High compressive strength for durable structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Weather resistant and low water absorption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Smooth finish reducing plastering costs</span>
                </li>
              </ul>
              <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Product Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 shadow-medium text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Ruler className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Dimensions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">9-Inch</p>
                <p className="text-sm text-muted-foreground">Length</p>
                <p className="text-2xl font-bold text-primary mb-2 mt-3">4-Inch</p>
                <p className="text-sm text-muted-foreground">Width</p>
                <p className="text-2xl font-bold text-primary mb-2 mt-3">3-Inch</p>
                <p className="text-sm text-muted-foreground">Height</p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-medium text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Strength</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">3.5+ MPa</p>
                <p className="text-sm text-muted-foreground mb-6">Compressive Strength</p>
                <p className="text-muted-foreground text-sm">
                  High load-bearing capacity suitable for multi-story construction
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-medium text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Water Absorption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">&lt;15%</p>
                <p className="text-sm text-muted-foreground mb-6">By Weight</p>
                <p className="text-muted-foreground text-sm">
                  Low water absorption ensures better weather resistance
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-medium text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">2500-5000</p>
                <p className="text-sm text-muted-foreground mb-6">Bricks per Load</p>
                <p className="text-muted-foreground text-sm">
                  Secure packaging for safe transportation and delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Wire Cut Bricks vs Traditional Bricks
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary shadow-medium">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-primary">Wire Cut Bricks</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Precise dimensions (±2mm tolerance)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Smooth surface finish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Higher compressive strength (3.5+ MPa)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Lower water absorption (&lt;15%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Reduced mortar consumption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Better thermal insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Faster construction time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-medium">
                <CardHeader className="bg-muted">
                  <CardTitle className="text-2xl">Traditional Bricks</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Variable dimensions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Rough surface requiring more plaster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Lower compressive strength</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Higher water absorption (15-20%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Higher mortar consumption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Standard thermal properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                      <span>Standard construction time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for bulk pricing, delivery schedules, and custom requirements
          </p>
          <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold shadow-glow">
            <Link to="/contact">Get a Quote Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Products;
