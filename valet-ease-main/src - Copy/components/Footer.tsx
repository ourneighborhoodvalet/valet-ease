import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-heading text-xl font-bold">{SITE.brandName}</span>
            </div>
            <p className="text-sm mb-4 text-white/85">
              Reliable doorstep trash pickup and community-ready common area care for multifamily properties.
            </p>
            <p className="text-sm text-white/70">
              Serving {SITE.serviceArea}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors text-white/85">
                  Doorstep Trash Collection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors text-white/85">
                  Common-Area Cleanups
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors text-white/85">
                  Overflow & Box Breakdown Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/property-managers" className="text-sm hover:text-white transition-colors text-white/85">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/residents" className="text-sm hover:text-white transition-colors text-white/85">
                  Residents
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-white transition-colors text-white/85">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors text-white/85">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>Serving {SITE.serviceArea}</li>
              <li className="pt-2">
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-white transition-colors">
                  Call/Text: {SITE.phoneDisplay}
                </a>
              </li>
              {SITE.email ? (
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                    {SITE.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/80">© {year} {SITE.domain}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/terms" className="hover:text-white transition-colors text-white/80">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors text-white/80">
                Privacy
              </Link>
              <Link to="/do-not-sell" className="hover:text-white transition-colors text-white/80">
                Do Not Sell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
