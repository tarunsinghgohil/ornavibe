
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="silver-gradient">LUMINA</span> <span className="font-light">Jewels</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Crafting exquisite jewelry pieces that celebrate life's most precious moments since 1995.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <p className="font-medium text-lg mb-4">Shop</p>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=rings" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bracelets" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="font-medium text-lg mb-4">Company</p>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="font-medium text-lg mb-4">Contact Us</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  123 Luxury Lane, Diamond District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  +1 (800) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  contact@luminajewels.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/20 pt-8 pb-4">
          <div className="max-w-md mx-auto text-center mb-8">
            <h3 className="text-lg font-medium mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Lumina Jewels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
