import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">R.V. Wire Cut Bricks</h3>
            <p className="text-sm text-background/80 mb-4">
              Leading manufacturer of premium quality wire-cut bricks for all construction needs.
            </p>
            <p className="text-xs text-background/70">
              Owned by Mr. R. Veluchamy & Mr. V. Sanjeev B.E.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-background/80 hover:text-secondary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-background/80 hover:text-secondary transition-smooth">
                  Products
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="text-sm text-background/80 hover:text-secondary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Wire Cut Brick Manufacturing</li>
              <li>Bulk Supply & Distribution</li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <div className="text-sm text-background/80">
                  <p>+91 9087973961</p>
                  <p>+91 6383420651</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-sm text-background/80">info@rvbricks.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-sm text-background/80">
                  [12/182 kumaravadi,elamanan]<br />
                  [Vaiyampatti,Tiruchirappalli-TamilNadu -621315]
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} R.V. Wire Cut Bricks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
