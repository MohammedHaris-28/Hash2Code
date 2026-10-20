
import { Link } from "react-router-dom";
import {
  Code2,
  Instagram,
  Mail,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    <path d="M16.2 9.3c-.5-2.1-2-3.2-4.3-3.2-2.8 0-4.5 2-4.5 5.5 0 3.7 1.7 5.9 4.7 5.9 2.7 0 4.4-1.7 4.4-4.3 0-2.1-1.2-3.5-3.1-3.5-1.6 0-2.7 1-2.7 2.5 0 1.2.7 2 1.8 2 1 0 1.8-.7 1.8-1.9V10" />
  </svg>
);

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Premium business websites",
  "High-converting landing pages",
  "QR review & feedback systems",
  "Custom web applications",
];

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hash2codeteam@gmail.com",
    external: false,
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/hash2codestudio/",
    external: true,
  },
  {
    name: "Threads",
    icon: ThreadsIcon,
    href: "https://www.threads.com/@hash2codestudio",
    external: true,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-neutral-200 bg-white text-neutral-950"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
        {/* Footer main grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-neutral-200 py-14 sm:py-16 md:grid-cols-12 md:gap-8 lg:gap-12 lg:py-20">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link
              to="/"
              aria-label="Hash2Code Team home"
              className="group inline-flex items-center gap-3"
            >
              <span className="relative flex h-11 w-11 items-center justify-center border border-neutral-900 bg-neutral-950 text-[#50DC7D] transition-colors duration-200 group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-neutral-950">
                <Code2 size={21} strokeWidth={2} aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px -right-px h-2 w-2 bg-[#50DC7D] transition-colors group-hover:bg-neutral-950"
                />
              </span>

              <span className="flex flex-col">
                <span className="whitespace-nowrap text-[23px] font-bold leading-none tracking-[-0.065em]">
                  #2Code
                </span>
                <span className="mt-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.19em] text-neutral-400">
                  Digital engineering studio
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600 sm:text-[15px]">
              We design and develop purposeful digital experiences, from
              high-performance business websites to custom applications
              built around real-world needs.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href, external }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-10 w-10 items-center justify-center border border-neutral-200 bg-white text-neutral-600 transition-colors duration-200 hover:border-[#50DC7D] hover:bg-[#50DC7D] hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2"
                >
                  <Icon
                    size={17}
                    className="transition-transform duration-200 group-hover:scale-105"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
              <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
              <span>Independent thinking</span>
              <span className="text-neutral-300">/</span>
              <span>Intentional engineering</span>
            </div>
          </div>

          {/* Navigation, services and CTA */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:col-span-7 md:grid-cols-3 lg:gap-x-10">
            {/* Navigation */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.19em] text-neutral-400">
                  Navigation
                </h2>
              </div>

              <ul className="space-y-3.5">
                {navigationLinks.map(({ name, path }, index) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="group flex w-fit items-center gap-2 text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-950 focus-visible:outline-none focus-visible:text-neutral-950"
                    >
                      <span className="font-mono text-[9px] text-neutral-300 transition-colors group-hover:text-[#209d48]">
                        0{index + 1}
                      </span>
                      <span>{name}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.19em] text-neutral-400">
                  Capabilities
                </h2>
              </div>

              <ul className="space-y-3.5">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="group flex items-start gap-2 text-sm leading-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-950">
                      <span className="mt-0.5 font-mono text-[9px] text-neutral-300">
                        0{index + 1}
                      </span>
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project CTA */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.19em] text-neutral-400">
                  Engagement
                </h2>
              </div>

              <div className="border border-neutral-200 p-4 sm:p-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                  Have an idea?
                </span>

                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.04em] text-neutral-950">
                  Let&apos;s build something meaningful.
                </h3>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Tell us what you have in mind. We&apos;ll take it from there.
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 flex min-h-11 items-center justify-between gap-3 bg-neutral-950 px-3.5 py-3 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#50DC7D] hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2"
                >
                  Start a project
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#50DC7D] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-neutral-950"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <a
                href="mailto:hash2codeteam@gmail.com"
                className="mt-4 inline-flex max-w-full items-start gap-2 break-all text-xs leading-5 text-neutral-500 transition-colors hover:text-neutral-950"
              >
                <Mail
                  size={13}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                hash2codeteam@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-xs leading-5 text-neutral-500">
            © {currentYear}{" "}
            <span className="font-semibold text-neutral-900">#2Code.</span>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/privacy"
              className="text-xs text-neutral-500 transition-colors hover:text-neutral-950 focus-visible:outline-none focus-visible:text-neutral-950"
            >
              Privacy policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-neutral-500 transition-colors hover:text-neutral-950 focus-visible:outline-none focus-visible:text-neutral-950"
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
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2"
            >
              Back to top
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
