import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Create WhatsApp message with validated data
      const phoneNumber = "916383420651"; // Replace with actual number
      const message = encodeURIComponent(
        `New Contact Form Submission:\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nMessage: ${validatedData.message}`
      );
      
      // Open WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      
      toast.success("Redirecting to WhatsApp...");
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show first validation error
        toast.error(error.errors[0].message);
      } else {
        toast.error("Please check your information and try again");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-primary-foreground/90">
              We're here to answer your questions and discuss your requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    maxLength={255}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                    maxLength={15}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    maxLength={1000}
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels
                </p>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Text us for immediate assistance</p>
                  <p className="font-semibold">+91 6383420651</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                  <p className="font-semibold">sanjurv335@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Visit us at our location</p>
                  <p className="font-semibold">
                    [12/182 kumaravadi,elamanan]<br />
                    [Sadayampatti]<br />
                    [Tiruchirappalli-TamilNadu -621315]
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">We're available</p>
                  <p className="font-semibold">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  <p className="font-semibold">All Day Open</p>
                  <p className="text-sm text-muted-foreground mt-2">
                   
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2">
              <div className="text-center">
                
                <p className="text-muted-foreground">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1567.7989239828175!2d78.27807784785843!3d10.502154001764076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1760549550684!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    className="contact-map-iframe"
                    allowFullScreen
                    title="RV Bricks Location Map"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
