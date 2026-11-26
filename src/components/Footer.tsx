import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const capabilities = [
  "Website development",
  "Social media & management",
  "Video editing",
  "Graphic design",
  "Mobile app development",
  "Custom software & automation",
  "Digital product engineering",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hash2codestudio/",
    external: true,
    icon: Instagram,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@hash2codestudio",
    external: true,
    icon: null,
  },
  {
    name: "Email",
    href: "mailto:hash2codeteam@gmail.com",
    external: false,
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="h2c-footer relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .h2c-footer {
          --footer-bg: #101211;
          --footer-ink: #f8f9fa;
          --footer-accent: #50dc7d;
          --footer-muted: rgba(248,249,250,.52);
          --footer-line: rgba(248,249,250,.14);
          background: var(--footer-bg);
          color: var(--footer-ink);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .h2c-footer * { box-sizing: border-box; }
        .h2c-footer-display {
          font-family: "Sora", sans-serif;, Inter, ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -.075em;
        }
        .h2c-footer-mono {
          font-family: "DM Mono", ui-monospace, monospace;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .h2c-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(248,249,250,.62);
          text-decoration: none;
          transition: color .2s ease, transform .2s ease;
        }
        .h2c-footer-link:hover {
          color: var(--footer-accent);
          transform: translateX(3px);
        }
        .h2c-footer-social {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid var(--footer-line);
          border-radius: 50%;
          color: rgba(248,249,250,.72);
          transition: color .2s ease, background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .h2c-footer-social:hover {
          color: var(--footer-bg);
          background: var(--footer-accent);
          border-color: var(--footer-accent);
          transform: translateY(-3px);
        }
        .h2c-footer-cta {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 6px 7px 6px 21px;
          border-radius: 999px;
          background: var(--footer-accent);
          color: var(--footer-bg);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: transform .25s ease, background .25s ease;
        }
        .h2c-footer-cta:hover { transform: translateY(-3px); background: #70e994; }
        .h2c-footer-cta-icon {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 50%;
          background: var(--footer-bg);
          color: white;
          transition: transform .25s ease;
        }
        .h2c-footer-cta:hover .h2c-footer-cta-icon { transform: rotate(45deg); }
        .h2c-footer-top {
          position: absolute;
          top: 0;
          right: 0;
          width: min(56vw, 760px);
          aspect-ratio: 1;
          border: 1px solid rgba(248,249,250,.055);
          border-radius: 50%;
          transform: translate(34%, -58%);
          pointer-events: none;
        }
        .h2c-footer-top::after {
          content: "";
          position: absolute;
          inset: 12%;
          border: 1px solid rgba(248,249,250,.055);
          border-radius: 50%;
        }
        @media (prefers-reduced-motion: reduce) {
          .h2c-footer *, .h2c-footer *::before, .h2c-footer *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="h2c-footer-top" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Contact invitation */}
        <div className="grid gap-8 border-b border-white/15 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:py-24">
          <div>
            <p className="h2c-footer-mono flex items-center gap-3 text-[10px] text-white/50">
              <span className="h-2 w-2 rounded-full bg-[#50DC7D]" />
              Have something in mind?
            </p>
            <h2 className="h2c-footer-display mt-6 max-w-4xl text-[clamp(3rem,7.5vw,7.2rem)] font-bold leading-[.88]">
              Let&apos;s make
              <br />
              something matter<span className="text-[#50DC7D]">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
              Tell us what you&apos;re building, improving or imagining. We&apos;ll
              help you find a thoughtful way forward.
            </p>
          </div>

          <div className="lg:pb-1">
            <Link to="/contact" className="h2c-footer-cta">
              <span>Start a conversation</span>
              <span className="h2c-footer-cta-icon">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/15 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-5">
            <Link
              to="/"
              aria-label="#2Code Studio home"
              className="group inline-flex items-center gap-3 text-white no-underline"
            >
            
              <span className="flex flex-col">
                <span className="h2c-footer-display text-[27px] font-bold leading-[.9] tracking-[-.07em]">
                  #2Code<span className="text-[#50DC7D]">Studio</span>
                </span>
                <span className="h2c-footer-mono mt-2 text-[8px] text-white/45">
                  Digital · Creative · Technology
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55 sm:text-[15px]">
              An independent digital and creative studio bringing design,
              technology and ideas together to build meaningful experiences
              for businesses.
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ name, href, external, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="h2c-footer-social"
                >
                  {Icon ? (
                    <Icon size={17} aria-hidden="true" />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
                      <path d="M16.2 9.3c-.5-2.1-2-3.2-4.3-3.2-2.8 0-4.5 2-4.5 5.5 0 3.7 1.7 5.9 4.7 5.9 2.7 0 4.4-1.7 4.4-4.3 0-2.1-1.2-3.5-3.1-3.5-1.6 0-2.7 1-2.7 2.5 0 1.2.7 2 1.8 2 1 0 1.8-.7 1.8-1.9V10" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <a
              href="mailto:hash2codeteam@gmail.com"
              className="mt-6 inline-flex max-w-full items-center gap-2 break-all text-xs text-white/55 transition-colors hover:text-[#50DC7D]"
            >
              <Mail size={14} className="shrink-0" />
              hash2codeteam@gmail.com
              <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:gap-x-8">
            <div>
              <p className="h2c-footer-mono mb-6 flex items-center gap-2 text-[10px] text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                Explore
              </p>
              <ul className="space-y-4">
                {navigationLinks.map(({ name, path }, index) => (
                  <li key={path}>
                    <Link to={path} className="h2c-footer-link text-sm">
                      <span className="font-mono text-[9px] text-white/25">
                        0{index + 1}
                      </span>
                      {name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="h2c-footer-mono mb-6 flex items-center gap-2 text-[10px] text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                Capabilities
              </p>
              <ul className="space-y-4">
                {capabilities.map((service, index) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 text-sm leading-5 text-white/55"
                  >
                    <span className="mt-0.5 font-mono text-[9px] text-white/25">
                      0{index + 1}
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="h2c-footer-mono mb-6 flex items-center gap-2 text-[10px] text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                Find us
              </p>
              <div className="flex items-start gap-2 text-sm leading-6 text-white/55">
                <MapPin size={15} className="mt-1 shrink-0 text-[#50DC7D]" />
                <span>
                  Shivamogga,
                  <br />
                  Karnataka, India
                </span>
              </div>
              <p className="h2c-footer-mono mt-7 text-[9px] leading-5 text-white/35">
                Working across
                <br />
                India & beyond
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/40">
            © {currentYear}{" "}
            <span className="font-semibold text-white/75">#2Code Studio.</span>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/privacy"
              className="text-xs text-white/45 transition-colors hover:text-[#50DC7D]"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-white/45 transition-colors hover:text-[#50DC7D]"
            >
              Terms of service
            </Link>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group inline-flex items-center gap-2 text-xs font-medium text-white/65 transition-colors hover:text-[#50DC7D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101211]"
            >
              Back to top
              <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 transition-all group-hover:-translate-y-1 group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-[#101211]">
                <ArrowUpRight size={13} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
