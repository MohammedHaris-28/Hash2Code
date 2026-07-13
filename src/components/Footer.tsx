import { Link } from "react-router-dom";
import { Code, Instagram, Mail, ArrowUpRight } from "lucide-react";

// Inline custom SVG rendering helper for the Threads platform icon
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
    <path d="M12 8a4 4 0 1 0 4 4v-1.5a1.5 1.5 0 0 0-3 0V12a1 1 0 1 1-2-1" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200/60 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-neutral-200/60">
          
          {/* Column 1: Brand Identifier & Socials Array */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center group-hover:bg-[#50DC7D] transition-colors duration-300">
                <Code className="w-4 h-4 text-white group-hover:text-neutral-950 transition-transform group-hover:scale-105 duration-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-950">
                #2<span className="text-neutral-900 group-hover:text-[#50DC7D] transition-colors duration-300">Code</span>
              </span>
            </Link>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
              We design and develop fast, modern digital architectures that build trust, optimize user retention, and maximize customer conversion parameters.
            </p>
            
            {/* Social Icons Stack - Formatted for Instagram, Threads, and Contact Mail */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Mail, href: "mailto:hash2codeteam@gmail.com" },
                { icon: Instagram, href: "https://www.instagram.com/hash2codestudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { icon: ThreadsIcon, href: "https://www.threads.com/@hash2codestudio" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-100 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigational Matrix */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-600 hover:text-neutral-950 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Solutions Link List */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-600">
              <li>
                <span className="hover:text-neutral-950 transition-colors cursor-default">Premium Business Websites</span>
              </li>
              <li>
                <span className="hover:text-neutral-950 transition-colors cursor-default">High-Converting Landing Pages</span>
              </li>
              <li>
                <span className="hover:text-neutral-950 transition-colors cursor-default">QR Review & Feedback Systems</span>
              </li>
              <li>
                <span className="hover:text-neutral-950 transition-colors cursor-default">Custom Web Applications</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Urgent Action Direct Link */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Engagement
            </h4>
            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm font-bold text-neutral-950 hover:text-neutral-800 transition-colors group"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Disclaimer Block */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-400">
          <p>&copy; {currentYear} #2Code. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-neutral-600 transition-colors">Privacy Framework</Link>
            <Link to="/terms" className="hover:text-neutral-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;