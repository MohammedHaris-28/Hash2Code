import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Asterisk,
} from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu whenever the user navigates to another route.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock background scrolling and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
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
      <style>{`
        .h2c-nav {
          --nav-bg: #F8F9FA;
          --nav-ink: #101211;
          --nav-accent: #50DC7D;
          --nav-line: rgba(16,18,17,.12);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .h2c-nav-display {
          font-family: "Sora", sans-serif;, Inter, ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -.065em;
        }
        .h2c-nav-link {
          position: relative;
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          gap: 8px;
          padding: 0 13px;
          color: rgba(16,18,17,.58);
          font-size: 12px;
          font-weight: 650;
          transition: color .2s ease;
        }
        .h2c-nav-link::after {
          position: absolute;
          right: 13px;
          bottom: 3px;
          left: 13px;
          height: 2px;
          background: var(--nav-accent);
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }
        .h2c-nav-link:hover,
        .h2c-nav-link[aria-current="page"] {
          color: var(--nav-ink);
        }
        .h2c-nav-link:hover::after,
        .h2c-nav-link[aria-current="page"]::after {
          transform: scaleX(1);
        }
        .h2c-nav-cta {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          gap: 18px;
          border-radius: 999px;
          background: var(--nav-ink);
          padding: 5px 6px 5px 19px;
          color: white;
          font-size: 12px;
          font-weight: 650;
          transition: transform .25s ease, background .25s ease;
        }
        .h2c-nav-cta:hover {
          transform: translateY(-2px);
          background: #252a27;
        }
        .h2c-nav-cta-icon {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 50%;
          background: var(--nav-accent);
          color: var(--nav-ink);
          transition: transform .25s ease;
        }
        .h2c-nav-cta:hover .h2c-nav-cta-icon {
          transform: rotate(45deg);
        }
        .h2c-nav-mobile-link {
          display: flex;
          min-height: 70px;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid var(--nav-line);
          padding: 8px 2px;
          color: var(--nav-ink);
          text-decoration: none;
        }
        .h2c-nav-mobile-link .h2c-nav-mobile-arrow {
          transition: transform .2s ease, background .2s ease;
        }
        .h2c-nav-mobile-link:hover .h2c-nav-mobile-arrow {
          transform: rotate(45deg);
          background: var(--nav-accent);
        }
        @media (prefers-reduced-motion: reduce) {
          .h2c-nav *,
          .h2c-nav *::before,
          .h2c-nav *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }
      `}</style>

      <header
        className={`h2c-nav fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-neutral-200/80 bg-[#F8F9FA]/95 shadow-[0_8px_30px_rgba(16,18,17,0.045)] backdrop-blur-2xl"
            : "border-neutral-200/60 bg-[#F8F9FA]/90 backdrop-blur-xl"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto w-full max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16"
        >
          <div
            className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
              scrolled ? "h-[68px]" : "h-[78px] sm:h-[86px]"
            }`}
          >
            {/* Brand */}
            <Link
              to="/"
              aria-label="#2Code Studio home"
              className="group flex shrink-0 items-center gap-3"
            >
              

              <span className="flex min-w-0 flex-col">
                <span className="h2c-nav-display whitespace-nowrap text-[21px] font-bold leading-[.9] text-[#101211] sm:text-[24px]">
                  #2Code<span className="text-[#50DC7D]"></span>
                </span>
                <span className="mt-[6px] font-mono text-[8px] font-medium uppercase tracking-[.24em] text-neutral-500 sm:text-[9px]">
                  Studio
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className="h2c-nav-link"
                  >
                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]"
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="/contact" className="h2c-nav-cta">
                <span>Start a project</span>
                <span className="h2c-nav-cta-icon">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="hidden rounded-full bg-[#101211] px-4 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-neutral-800 sm:inline-flex"
              >
                Let’s talk
                <ArrowUpRight className="ml-2 h-3.5 w-3.5 text-[#50DC7D]" />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="h2c-mobile-navigation"
                className={`grid h-11 w-11 place-items-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2 ${
                  isOpen
                    ? "border-[#101211] bg-[#101211] text-white"
                    : "border-neutral-300 bg-white/70 text-[#101211] hover:border-neutral-500"
                }`}
              >
                {isOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile navigation panel */}
        <div
          id="h2c-mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          className={`absolute inset-x-0 top-full overflow-hidden border-b border-neutral-200 bg-[#F8F9FA] shadow-[0_24px_45px_rgba(16,18,17,.10)] transition-[opacity,transform,visibility] duration-300 lg:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-h-[calc(100dvh-70px)] w-full max-w-[1600px] overflow-y-auto px-5 pb-7 pt-6 sm:px-8">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[.2em] text-neutral-400">
                  #2Code Studio / Navigation
                </p>
                <p className="h2c-nav-display mt-2 text-2xl font-bold tracking-tight text-[#101211]">
                  Where to next?
                </p>
              </div>
              <Asterisk className="h-8 w-8 text-[#50DC7D]" />
            </div>

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
                    className={`h2c-nav-mobile-link group ${
                      active ? "text-[#101211]" : "text-neutral-600"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`font-mono text-[10px] ${
                          active ? "text-[#209d48]" : "text-neutral-400"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className="h2c-nav-display text-[clamp(1.8rem,6vw,2.5rem)] font-bold leading-none tracking-tight">
                        {link.name}
                      </span>
                    </span>

                    <span className="flex items-center gap-3">
                      {active && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#209d48]">
                          Current
                        </span>
                      )}
                      <span className="h2c-nav-mobile-arrow grid h-10 w-10 place-items-center rounded-full border border-neutral-300">
                        <ArrowUpRight size={17} />
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-7 rounded-[20px] bg-[#50DC7D] p-5 text-[#101211] sm:p-6">
              <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#101211]/60">
                Have an idea?
              </p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <p className="h2c-nav-display max-w-[260px] text-2xl font-bold leading-[1.05] sm:text-3xl">
                  Let’s make something Creative.
                </p>
                <Link
                  to="/contact"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                  aria-label="Start a project"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#101211] text-white transition-transform hover:rotate-45"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[.13em] text-neutral-400">
              <span>Digital · Creative · Technology</span>
              <span>Shivamogga / India</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-[#101211]/20 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
