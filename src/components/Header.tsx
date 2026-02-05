import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#005C56] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#005C56] font-bold text-lg">V</span>
            </div>
            <span className="font-heading text-xl font-bold">Neighborhood Valet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="text-sm hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/property-managers" className="text-sm hover:text-primary transition-colors">
              Property Managers
            </Link>
            <Link to="/residents" className="text-sm hover:text-primary transition-colors">
              Residents
            </Link>
            <Link to="/careers" className="text-sm hover:text-primary transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#005C56] transition-all"
              onClick={() => window.location.href = '/contact'}
            >
              Request A Quote
            </Button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white transition-all"
              onClick={() => window.location.href = '/residents'}
            >
              Resident Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/services" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/property-managers" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Property Managers
              </Link>
              <Link 
                to="/residents" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Residents
              </Link>
              <Link 
                to="/careers" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#005C56]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '/contact';
                  }}
                >
                  Request A Quote
                </Button>
                <Button 
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '/residents';
                  }}
                >
                  Resident Portal
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
