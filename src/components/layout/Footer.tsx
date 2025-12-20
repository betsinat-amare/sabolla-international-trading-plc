// src/components/layout/Footer.tsx
import { CONTACT_INFO } from '../../data/mockData';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-sabolla-black text-sabolla-white overflow-hidden">
      {/* Decorative top border/gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sabolla-dark-green via-sabolla-light-green to-sabolla-dark-green" />

      <div className="container mx-auto px-6 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="transform origin-left scale-90">
              <Logo />
            </div>
            <p className="text-sabolla-white/70 leading-relaxed text-sm max-w-xs">
              SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s growing market through expert trade representation and logistics.
            </p>
            <div className="flex space-x-4">
              {[FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-sabolla-white/10 flex items-center justify-center hover:bg-sabolla-light-green hover:text-white transition-all duration-300"
                  aria-label="Social Link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-6 text-sabolla-light-green">Quick Links</h5>
            <ul className="space-y-3 text-sabolla-white/80">
              <li><Link to="/" className="hover:text-sabolla-light-green transition-colors flex items-center gap-2">Home</Link></li>
              <li><Link to="/about" className="hover:text-sabolla-light-green transition-colors flex items-center gap-2">About Us</Link></li>
              <li><Link to="/products" className="hover:text-sabolla-light-green transition-colors flex items-center gap-2">Our Products</Link></li>
              <li><Link to="/services" className="hover:text-sabolla-light-green transition-colors flex items-center gap-2">Services</Link></li>
              <li><Link to="/partners" className="hover:text-sabolla-light-green transition-colors flex items-center gap-2">Partners</Link></li>
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h5 className="text-lg font-bold mb-6 text-sabolla-light-green">Support</h5>
            <ul className="space-y-3 text-sabolla-white/80">
              <li><Link to="/contact" className="hover:text-sabolla-light-green transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-terms/privacy" className="hover:text-sabolla-light-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy-terms/terms" className="hover:text-sabolla-light-green transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-sabolla-light-green transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold mb-6 text-sabolla-light-green">Get in Touch</h5>
            <div className="space-y-4 text-sabolla-white/80">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="w-6 h-6 text-sabolla-light-green shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="w-5 h-5 text-sabolla-light-green shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-sabolla-light-green shrink-0" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-sabolla-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sabolla-white/50">
          <p>&copy; {new Date().getFullYear()} Sabolla International Trading PLC. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-sabolla-white transition-colors">Sitemap</Link>
            <Link to="#" className="hover:text-sabolla-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
