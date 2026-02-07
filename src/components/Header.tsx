import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#005C56] text-white shadow-md w-full">
      <div className="w-full px-3 bg-color-15">
        <div className="flex items-center justify-between h-12 w-full bg-color-15">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Image
              src="https://static.wixstatic.com/media/e622ff_5a3efa5e04b048d6a88f82fb7525957b~mv2.png"
              width={32}
              height={32}
              className="h-8 w-8"
              originWidth={1024}
              originHeight={1536} />
            <span className="font-heading font-bold hidden sm:inline text-lg">Neighborhood Valet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">

            <Link to="/services" className="hover:text-primary transition-colors text-xl">
              Services
            </Link>
            <Link to="/property-managers" className="hover:text-primary transition-colors text-lg">
              Property Managers
            </Link>
            <Link to="/residents" className="hover:text-primary transition-colors text-xl">
              Residents
            </Link>
            <Link to="/careers" className="hover:text-primary transition-colors text-xl">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors text-xl">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#005C56] transition-all px-2 py-1 h-auto text-xl"
              onClick={() => window.location.href = '/contact'}
            >
              Quote
            </Button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white transition-all px-2 py-1 h-auto text-xl"
              onClick={() => window.location.href = '/residents'}
            >
              Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-2 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/services" 
                className="text-xs hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/property-managers" 
                className="text-xs hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Property Managers
              </Link>
              <Link 
                to="/residents" 
                className="text-xs hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Residents
              </Link>
              <Link 
                to="/careers" 
                className="text-xs hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="text-xs hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-1 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#005C56] text-xs px-2 py-1 h-auto"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '/contact';
                  }}
                >
                  Quote
                </Button>
                <Button 
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white text-xs px-2 py-1 h-auto"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '/residents';
                  }}
                >
                  Portal
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
