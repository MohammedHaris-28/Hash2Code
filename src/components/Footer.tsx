import { Link } from "react-router-dom";
import { Code2, Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Code2 className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
              <span className="text-xl font-display font-bold text-gradient">
                #2Code
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building exceptional digital experiences through innovative code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Website Development</li>
              <li>App Development</li>
              <li>Software Solutions</li>
              <li>Product Development</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <Link
              to="/contact"
              className="text-sm text-accent hover:underline"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} #2Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;