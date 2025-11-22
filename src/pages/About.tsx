import { Users, Target, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About R.V. Wire Cut Bricks</h1>
            <p className="text-xl text-primary-foreground/90">
              Building a legacy of quality, trust, and long-term customer relationships in the construction industry
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6 text-lg">
                R.V. Wire Cut Bricks has established itself as a leading manufacturer and supplier of premium quality wire-cut bricks in the region. With years of dedication to excellence, we have built a strong reputation for delivering construction materials that meet the highest standards of quality and durability.
              </p>
              <p className="mb-6 text-lg">
                Our state-of-the-art manufacturing facility uses modern wire-cutting technology to produce bricks with precise dimensions, uniform texture, and superior strength. Each brick undergoes rigorous quality checks to ensure it meets our exacting standards before reaching our customers.
              </p>
              <p className="text-lg">
                We serve a diverse clientele including individual home builders, contractors, real estate developers, and large-scale infrastructure projects. Our commitment to timely delivery and customer satisfaction has made us the preferred choice for construction professionals across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 shadow-medium">
              <CardHeader className="text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Mr. R. Veluchamy</CardTitle>
                <p className="text-muted-foreground">Co-Founder & Managing Partner</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  With extensive experience in brick manufacturing and business management, Mr. Veluchamy has been instrumental in establishing the company's reputation for quality and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-medium">
              <CardHeader className="text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Mr. V. Sanjeev B.E.</CardTitle>
                <p className="text-muted-foreground">Co-Founder & Technical Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Bringing technical expertise and engineering knowledge, Mr. Sanjeev ensures our manufacturing processes meet modern industry standards and deliver consistent quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-medium transition-smooth text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Uncompromising commitment to producing the highest quality wire-cut bricks for every project
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-smooth text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Customer Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building long-lasting relationships through reliability, transparency, and exceptional service
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-smooth text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensuring on-time supply to keep your construction projects running smoothly and on schedule
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To be the most trusted name in wire-cut brick manufacturing by consistently delivering superior quality products, maintaining competitive pricing, and providing exceptional customer service. We aim to contribute to the construction of durable, beautiful buildings that stand the test of time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
