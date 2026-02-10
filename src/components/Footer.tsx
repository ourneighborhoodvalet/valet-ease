import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-dark-green">
                  <span className="text-[#005C56] font-bold text-lg">V</span>
                </div>
                <span className="font-heading text-xl font-bold text-dark-green">Neighborhood Valet Services</span>
              </div>
            <p className="text-sm mb-4 text-dark-green">
                The premier provider of the most used amenity services in the multifamily industry.
              </p>
            <div className="flex space-x-3">
          <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook size={20} className="fill-dark-green" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter size={20} className="fill-dark-green" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} className="fill-dark-green" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={20} className="fill-dark-green" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
            <Youtube size={20} className="fill-dark-green" />
          </a>
        </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-dark-green">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors text-dark-green">
                  All Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors text-dark-green">
                  Doorstep Trash Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors text-dark-green">
                  Apartment Valet Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors text-dark-green">
                  Property Management Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/property-managers" className="text-sm text-white/80 hover:text-primary transition-colors">
                  Property Managers
                </Link>
              </li>
              <li>
                <Link to="/residents" className="text-sm text-white/80 hover:text-primary transition-colors">
                  Residents
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-white/80 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>10150 Highland Manor Drive</li>
              <li>Suite 120</li>
              <li>Tampa, FL 33610</li>
              <li className="pt-2">
                <a href="tel:8132481327" className="hover:text-primary transition-colors">Main: (843)-251-8798</a>
              </li>
              <li>

              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/80">
              © 2026 neighborhoodvalet.com. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <a href="#" className="hover:text-primary transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Notice
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Do Not Sell My Personal Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
