import { NavLink } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DB</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Digital Bridge
              </span>
            </div>
            <p className="mb-4 text-sm text-white/90">
              Bridging ideas with technology through expert development,
              automation, and embedded talent.
            </p>
            <div className="flex items-center space-x-2 mb-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Toronto, Canada</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@digitalbridge.dev</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="hover:underline text-white/80 hover:text-white"
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
            <ul className="space-y-2 text-sm text-white/80">
              <li>UI/UX Design & Prototyping</li>
              <li>Full-Stack Development</li>
              <li>Embedded Engineering Talent</li>
              <li>Automation (n8n, Zapier, AI)</li>
              <li>Internal Tools & APIs</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-white/80 mb-3">
              Subscribe to receive updates, job posts, and more.
            </p>
            <div className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="text-black bg-white placeholder:text-gray-500"
              />
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {currentYear} Digital Bridge Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/digital-bridge-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
