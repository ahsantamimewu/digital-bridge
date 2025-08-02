import { NavLink } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DB</span>
              </div>
              <span className="text-xl font-bold text-white">
                Digital Bridge Limited
              </span>
            </div>
            <p className="mb-4 max-w-md text-white">
              Bridging ideas with technology through expert development,
              automation, and embedded talent.
            </p>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Toronto, Canada</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@digitalbridge.dev</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-white hover:text-white transition-smooth text-sm"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>UI/UX Design & Prototyping</li>
              <li>Full-Stack Development</li>
              <li>Embedded Engineering Talent</li>
              <li>Process Automation (n8n, Zapier, AI)</li>
              <li>Internal Tools & API Integrations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            © {currentYear} Digital Bridge Limited. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/company/digital-bridge-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-smooth"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
