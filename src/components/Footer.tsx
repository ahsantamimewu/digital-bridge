import { NavLink } from "react-router-dom";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-primary/80 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">DB</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Digital Bridge
              </span>
            </div>
            <p className="mb-6 text-lg text-white/90 leading-relaxed max-w-md">
              Bridging ideas with technology through expert development,
              automation, and embedded talent. Your trusted offshore development
              partner.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@digitalbridge.dev</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Industries", path: "/industries" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">
              Our Services
            </h3>
            <ul className="space-y-3 text-white/80">
              {[
                "UI/UX Design & Prototyping",
                "Full-Stack Development",
                "Mobile App Development",
                "Quality Assurance & Testing",
                "Staff Augmentation",
                "DevOps & Cloud Solutions",
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} Digital Bridge Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">Follow us:</span>
            <a
              href="https://linkedin.com/company/digital-bridge-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/30 hover:text-white transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
