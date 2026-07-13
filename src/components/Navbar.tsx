import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/60 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)]" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Premium Design-Synced Studio Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center group-hover:bg-[#50DC7D] transition-colors duration-300">
              <Code className="w-4 h-4 text-white group-hover:text-neutral-950 transition-transform group-hover:scale-105 duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-950">
              #2<span className="text-neutral-900 group-hover:text-[#50DC7D] transition-colors duration-300">Code</span>
            </span>
          </Link>

          {/* Desktop Center Pill Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 bg-neutral-50 border border-neutral-200/60 rounded-full p-1 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-white text-neutral-950 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border border-neutral-200/40"
                    : "text-neutral-500 hover:text-neutral-950 border border-transparent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Button - Premium Charcoal Execution */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button size="sm" className="bg-neutral-950 hover:bg-neutral-800 text-white font-bold px-5 py-5 rounded-xl transition-all text-xs border-none tracking-wide">
                Schedule Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-neutral-200/80 text-neutral-800 hover:bg-neutral-50 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Premium Mobile Navigation Panel Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6 bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200 space-y-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    isActive(link.path)
                      ? "text-neutral-950 bg-[#50DC7D]/10 font-bold border-l-4 border-[#50DC7D]"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Panel Bottom Action Button */}
            <div className="pt-3 border-t border-neutral-100">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold py-5 rounded-xl text-xs border-none shadow-sm tracking-wide">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;