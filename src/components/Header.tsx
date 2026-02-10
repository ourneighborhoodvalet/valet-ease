import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#005C56] text-white w-full">
      <div className="w-full px-4 py-3 bg-secondary-foreground">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Image
              src="https://static.wixstatic.com/media/e622ff_1c65c00cdf314db69393a7d8eba51d61~mv2.png"
              width={64}
              height={64}
              className="h-16 w-16"
              originWidth={1536}
              originHeight={1024} />
            <span className="font-bold hidden sm:inline text-2xl text-accent-foreground font-roboto">Neighborhood Valet Services</span>
          </Link>

          {/* Desktop Dropdown Menu */}
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  size="sm"
                  className="hover:bg-accent/90 text-white transition-all px-3 py-2 h-auto bg-color-15 flex items-center gap-2"
                >
                  <div className="flex flex-col gap-1">
                    <div className="w-5 h-0.5 bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer">
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/property-managers" className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer">
                    Property Managers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/residents" className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer">
                    Residents
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/careers" className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer">
                    Careers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer">
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Quote
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    className="w-full text-left px-2 py-2 hover:bg-secondary cursor-pointer"
                    onClick={() => window.location.href = '/residents'}
                  >
                    Portal
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <div className="lg:hidden py-3 border-t border-white/20">
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
