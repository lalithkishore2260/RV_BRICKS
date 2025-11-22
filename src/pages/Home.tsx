import { Link } from "react-router-dom";
import { ArrowRight, Building2, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-bricks.jpg";
import productsImage from "@/assets/products-bricks.jpg";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] hero-section flex items-center">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Strength That Builds Generations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Premium Quality Wire Cut Bricks for All Your Construction Needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold shadow-glow">
                <Link to="/products">
                  View Our Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 backdrop-blur">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose R.V. Wire Cut Bricks?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by builders and contractors for quality, reliability, and timely delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-strength wire-cut bricks with accurate dimensions and superior finish
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Weather Resistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Durable construction materials that withstand harsh weather conditions
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reliable supply chain ensuring your projects stay on schedule
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Bulk Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Large-scale manufacturing capacity for commercial and industrial projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={productsImage}
                alt="Quality Wire Cut Bricks"
                className="rounded-lg shadow-large w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Trust Since Years
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                R.V. Wire Cut Bricks is owned and operated by Mr. R. Veluchamy and Mr. V. Sanjeev B.E., bringing decades of experience in brick manufacturing and construction materials supply.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in producing high-quality wire-cut bricks used in residential, commercial, industrial, and infrastructure projects. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
              </p>
              <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for bulk orders, quotes, or any inquiries about our products and services
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold shadow-glow">
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
