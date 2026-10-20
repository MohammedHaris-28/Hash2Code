
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Menu,
  X,
  Command,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile navigation when the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Support Escape and prevent background scrolling while open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-neutral-200 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.035)] backdrop-blur-xl"
            : "border-neutral-200/70 bg-white/90 backdrop-blur-md"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto w-full max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20"
        >
          <div
            className={`flex items-center justify-between gap-3 transition-all duration-300 ${
              scrolled ? "h-[68px]" : "h-[76px] sm:h-[84px]"
            }`}
          >
            {/* BRAND */}
            <Link
              to="/"
              aria-label="Hash2Code Team home"
              className="group flex min-w-0 shrink-0 items-center gap-3"
            >
              
              

                <span
                  aria-hidden="true"
                  className="absolute -bottom-px -right-px h-2 w-2 bg-[#50DC7D]"
                />
             

              <span className="flex min-w-0 flex-col">
                <span className="flex items-baseline whitespace-nowrap text-[21px] font-bold leading-none tracking-[-0.065em] text-neutral-950 sm:text-[23px]">
                  
                  <span>#2Code</span>
                  
                </span>

                <span className="mt-1.5 hidden font-mono text-[8px] font-medium uppercase tracking-[.19em] text-neutral-400 min-[380px]:block sm:text-[9px]">
                   Studio
                </span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link, index) => {
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex h-10 items-center gap-2 px-3.5 text-[12px] font-semibold transition-colors xl:px-4 ${
                      active
                        ? "text-neutral-950"
                        : "text-neutral-500 hover:text-neutral-950"
                    }`}
                  >
                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 bg-[#50DC7D]"
                      />
                    )}

                    <span>{link.name}</span>

                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-0 h-[2px] origin-left bg-[#50DC7D] transition-transform duration-200 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />

                    <span className="sr-only">
                      {index === 0 ? "Homepage" : ""}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden shrink-0 items-center lg:flex">
              <Link to="/contact">
                <Button className="group h-11 rounded-none bg-neutral-950 px-4 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-neutral-800 xl:px-5">
                  <span>Start a project</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 text-[#50DC7D] transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* TABLET / MOBILE CTA + MENU */}
            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <Link to="/contact" className="hidden sm:block">
                <Button
                  size="sm"
                  className="h-10 rounded-none bg-neutral-950 px-3 text-[11px] font-semibold text-white hover:bg-neutral-800"
                >
                  Let's talk
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-[#50DC7D]" />
                </Button>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className={`flex h-10 w-10 items-center justify-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2 ${
                  isOpen
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400"
                }`}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          className={`absolute inset-x-0 top-full overflow-hidden border-b border-neutral-200 bg-white shadow-[0_16px_30px_rgba(0,0,0,0.06)] transition-[opacity,visibility,transform] duration-200 lg:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-h-[calc(100dvh-76px)] w-full max-w-[1600px] overflow-y-auto px-4 pb-5 pt-4 sm:px-7">
            {/* Menu heading */}
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-4">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-neutral-400">
                  Navigation / H2C
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Find your next step.
                </p>
              </div>

              <Command className="h-5 w-5 text-neutral-300" />
            </div>

            {/* Route links */}
            <div className="flex flex-col">
              {navLinks.map((link, index) => {
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`group flex min-h-[58px] items-center justify-between border-b border-neutral-100 px-3 transition-colors ${
                      active
                        ? "bg-[#50DC7D]/10 text-neutral-950"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[10px] ${
                          active ? "text-[#209d48]" : "text-neutral-300"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-[15px] ${
                          active ? "font-bold" : "font-medium"
                        }`}
                      >
                        {link.name}
                      </span>
                    </span>

                    <span className="flex items-center gap-3">
                      {active && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#209d48]">
                          Current
                        </span>
                      )}
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          active ? "text-[#209d48]" : "text-neutral-300"
                        }`}
                      />
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-5 border border-neutral-200 bg-[#F8F9FA] p-4">
              <div className="mb-4">
                <p className="font-mono text-[9px] uppercase tracking-[.17em] text-neutral-400">
                  Have an idea?
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Let's turn it into something real.
                </p>
              </div>

              <Link
                to="/contact"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className="group flex h-12 items-center justify-between bg-neutral-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Start a project
                <ArrowRight className="h-4 w-4 text-[#50DC7D] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Menu footer */}
            <div className="mt-5 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[.15em] text-neutral-400">
                Hash2Code Team
              </span>
              <span className="flex items-center gap-2 font-mono text-[9px] text-neutral-400">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                DIGITAL ENGINEERING
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-neutral-950/20 lg:hidden"
          style={{ top: "76px" }}
        />
      )}
    </>
  );
};

export default Navbar;
