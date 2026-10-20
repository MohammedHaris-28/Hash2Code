
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Lightbulb,
  Rocket,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  Layers3,
  Workflow,
  Command,
  Cpu,
  Globe2,
  Zap,
  Menu,
} from "lucide-react";

const SITE_URL = "https://hash2codeteam.vercel.app/";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Website Development",
    description:
      "High-performance business websites, conversion-focused landing pages, and scalable web applications built around your goals.",
    tags: ["React", "TypeScript", "Web"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Intuitive Android, iOS, and cross-platform applications designed to deliver a consistent experience across devices.",
    tags: ["Flutter", "Mobile", "UX"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Custom Software & Automation",
    description:
      "Purpose-built business software, intelligent workflows, and connected systems that reduce repetitive manual work.",
    tags: ["APIs", "Automation", "Cloud"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Digital Product Engineering",
    description:
      "From an early product concept to a production-ready platform, we help turn ideas into useful digital experiences.",
    tags: ["MVP", "Architecture", "Launch"],
  },
];

const techStack = [
  "React",
  "TypeScript",
  "Flutter",
  "Supabase",
  "Python",
  "Django",
  "JavaScript",
  "n8n",
  "C#",
  "Sanity",
  "HTML",
  "CSS",
];

const principles = [
  {
    number: "01",
    icon: Layers3,
    title: "Architecture before complexity",
    desc: "We choose technologies and structures around the actual problem, keeping products maintainable as requirements evolve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design with a clear purpose",
    desc: "Every screen, interaction, and workflow should help people understand the product and accomplish something meaningful.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security in the foundation",
    desc: "We consider access control, data handling, validation, and deployment practices as part of building reliable software.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Performance that matters",
    desc: "We pay attention to responsive layouts, efficient implementation, accessibility, and the experience on real devices.",
  },
  {
    number: "05",
    icon: Workflow,
    title: "A process you can follow",
    desc: "Clear scope, visible milestones, and direct communication help keep decisions and delivery aligned throughout a project.",
  },
];

const Home = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description =
      "#2CODE Team builds custom websites, mobile applications, business software, and workflow automation solutions for growing businesses.";

    document.title =
      "#2CODE Team | Website, App & Custom Software Development";

    let metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const createdDescription = !metaDescription;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    const previousDescription = metaDescription.content;
    metaDescription.content = description;

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const createdCanonical = !canonical;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    const previousCanonical = canonical.href;
    canonical.href = SITE_URL;

    return () => {
      document.title = previousTitle;

      if (metaDescription) {
        if (createdDescription) {
          metaDescription.remove();
        } else {
          metaDescription.content = previousDescription;
        }
      }

      if (canonical) {
        if (createdCanonical) {
          canonical.remove();
        } else {
          canonical.href = previousCanonical;
        }
      }
    };
  }, []);

  return (
    <main className="w-full overflow-x-clip bg-[#F8F9FA] font-sans text-neutral-950 antialiased selection:bg-[#50DC7D]/30">
      <style>{`
        @keyframes h2c-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes h2c-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(420%); }
        }

        @keyframes h2c-blink {
          50% { opacity: .3; }
        }

        .h2c-marquee {
          animation: h2c-marquee 32s linear infinite;
        }

        .h2c-scan {
          animation: h2c-scan 7s linear infinite;
        }

        .h2c-cursor {
          animation: h2c-blink 1.1s steps(2, start) infinite;
        }

        .h2c-display {
          font-family: "Space Grotesk", "Arial", sans-serif;
          font-weight: 700;
          letter-spacing: -.075em;
        }

        .h2c-mono {
          font-family: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
        }

        @media (prefers-reduced-motion: reduce) {
          .h2c-marquee,
          .h2c-scan,
          .h2c-cursor {
            animation: none !important;
          }

          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO — WIDE DESKTOP / PURPOSE-BUILT MOBILE
      ====================================================== */}
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-white pt-28 sm:pt-32 lg:min-h-[760px] lg:pt-36">
        {/* Technical grid, not a gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e9ecef 1px, transparent 1px), linear-gradient(to bottom, #e9ecef 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid items-center gap-12 pb-14 sm:pb-16 lg:grid-cols-[minmax(0,1.04fr)_minmax(420px,0.96fr)] lg:gap-10 lg:pb-20 xl:gap-16">
            {/* LEFT — EDITORIAL HEADLINE */}
            <div className="relative z-10 min-w-0">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                
                <span className="h2c-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  #2CODE / 001
                </span>
              </div>

              <h1 className="h2c-display max-w-[850px] text-[clamp(3.45rem,7.2vw,7.35rem)] leading-[.91] text-neutral-950">
                Ideas into
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">digital</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[.03em] left-0 z-0 h-[.17em] w-full bg-[#50DC7D]"
                  />
                </span>
                <br />
                <span className="text-neutral-400">realities.</span>
              </h1>

              <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-neutral-600 sm:mt-8 sm:text-lg sm:leading-8">
                #2CODE Team builds{" "}
                <strong className="font-semibold text-neutral-900">
                  websites, mobile apps, custom software, and business
                  automation
                </strong>{" "}
                for ideas ready to move forward.
              </p>

              <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9">
                <Link to="/contact" className="w-full min-[420px]:w-auto">
                  <Button className="group h-12 w-full rounded-none bg-neutral-950 px-5 text-sm font-semibold text-white hover:bg-neutral-800 sm:h-14 sm:px-6">
                    Discuss your project
                    <ArrowRight className="ml-3 h-4 w-4 text-[#50DC7D] transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-400 sm:h-14"
                >
                  Explore our work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Compact proof-free value statements */}
              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-neutral-200 pt-5 sm:mt-10 sm:gap-x-7">
                {[
                  "Built around your goals",
                  "Responsive by design",
                  "From concept to launch",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-neutral-600"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#24a851]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — CUSTOM DIGITAL SYSTEMS INTERFACE */}
            <div className="relative mx-auto w-full max-w-[640px] min-w-0 lg:ml-auto lg:max-w-none">
              <div className="absolute -right-3 -top-6 hidden h-20 w-20 border-r border-t border-[#50DC7D] sm:block lg:-right-5" />

              <div className="relative overflow-hidden border border-neutral-300 bg-[#101211] text-white shadow-[12px_12px_0_#e8ece9] sm:shadow-[18px_18px_0_#e8ece9]">
                {/* Window header */}
                <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#50DC7D]" />
                    <span className="h2c-mono text-[10px] uppercase tracking-[.15em] text-white/70">
                      #2CODE / STUDIO
                    </span>
                  </div>
                  <span className="h2c-mono text-[9px] text-white/40">
                    INTERFACE_001
                  </span>
                </div>

                <div className="grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[48px_minmax(0,1fr)]">
                  {/* Vertical tool rail */}
                  <div className="flex flex-col items-center gap-6 border-r border-white/10 py-5">
                    <Command className="h-4 w-4 text-[#50DC7D]" />
                    <Code2 className="h-4 w-4 text-white/35" />
                    <Layers3 className="h-4 w-4 text-white/35" />
                    <Cpu className="h-4 w-4 text-white/35" />
                    <div className="mt-auto h-6 w-1 bg-[#50DC7D]" />
                  </div>

                  {/* Dashboard body */}
                  <div className="min-w-0 p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="h2c-mono text-[9px] uppercase tracking-[.2em] text-white/40 sm:text-[10px]">
                          Digital product / Overview
                        </p>
                        <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                          Built with intent.
                        </h2>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#50DC7D]/40 bg-[#50DC7D]/10">
                        <Zap className="h-4 w-4 text-[#50DC7D]" />
                      </div>
                    </div>

                    {/* Main visual — schematic, not generic gradients */}
                    <div className="relative mt-6 overflow-hidden border border-white/10 bg-[#171a18] p-4 sm:p-5">
                      <div className="absolute right-4 top-4 flex items-center gap-2">
                        <span className="h2c-mono text-[9px] text-white/35">
                          SCREEN. 01
                        </span>
                        <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                      </div>

                      <div className="relative z-10 flex min-h-[150px] flex-col justify-between sm:min-h-[175px]">
                        <div className="h2c-mono text-[10px] leading-5 text-white/45">
                          <p>01 / DEFINE</p>
                          <p>02 / ENGINEER</p>
                          <p>03 / DELIVER</p>
                        </div>

                        <div className="flex items-end justify-between gap-2">
                          <div>
                            <div className="h2c-display text-5xl leading-none tracking-[-.08em] text-white sm:text-7xl">
                              #<span className="text-[#50DC7D]">2</span>CODE
                            </div>
                            <p className="h2c-mono mt-2 text-[9px] uppercase tracking-[.16em] text-white/45">
                              Ideas / Systems / Impact
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-1.5 pb-1">
                            {Array.from({ length: 9 }).map((_, index) => (
                              <span
                                key={index}
                                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                  [0, 2, 4, 6, 7].includes(index)
                                    ? "bg-[#50DC7D]"
                                    : "border border-white/20"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)",
                          backgroundSize: "22px 22px",
                        }}
                      />
                    </div>

                    {/* Three functional-looking system cards */}
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        {
                          icon: Globe2,
                          label: "WEB",
                          title: "Experiences",
                        },
                        {
                          icon: Smartphone,
                          label: "APP",
                          title: "Applications",
                        },
                        {
                          icon: Workflow,
                          label: "FLOW",
                          title: "Automation",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="min-w-0 border border-white/10 bg-white/[0.035] p-2.5 sm:p-3"
                        >
                          <item.icon className="h-4 w-4 text-[#50DC7D]" />
                          <p className="h2c-mono mt-4 text-[8px] tracking-[.12em] text-white/40 sm:text-[9px]">
                            {item.label}
                          </p>
                          <p className="mt-1 break-words text-[10px] font-medium text-white/85 sm:text-xs">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Terminal footer */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 text-[#50DC7D]" />
                        <span className="h2c-mono text-[9px] text-white/55 sm:text-[10px]">
                          Turning concepts into systems
                        </span>
                        <span className="h2c-cursor h-3 w-1 bg-[#50DC7D]" />
                      </div>
                      <span className="h2c-mono text-[9px] text-white/30">
                        READY_
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom status strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#0c0e0d] px-4 py-3 sm:px-5">
                  <span className="h2c-mono text-[9px] uppercase tracking-wider text-white/35">
                    #2CODE Team
                  </span>
                  <span className="h2c-mono flex items-center gap-2 text-[9px] text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                    ENGINEERING THE NEXT STEP
                  </span>
                </div>
              </div>

              {/* Small external annotation */}
              <div className="mt-7 flex items-center justify-between gap-3 lg:mt-8">
                <span className="h2c-mono text-[9px] uppercase tracking-[.14em] text-neutral-400 sm:text-[10px]">
                  Concept → Code → Product
                </span>
                <span className="h2c-mono text-[9px] text-neutral-400 sm:text-[10px]">
                  13° / 77° / BUILD
                </span>
              </div>
            </div>
          </div>

          {/* Full-width technology strip */}
          <div className="relative border-t border-neutral-200 py-6 sm:py-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="shrink-0">
                <p className="h2c-mono text-[9px] font-semibold uppercase tracking-[.18em] text-neutral-500 sm:text-[10px]">
                  Our technology ecosystem
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Tools selected for the problem
                </p>
              </div>

              <div
                className="relative min-w-0 flex-1 overflow-hidden"
                aria-label={`Technologies: ${techStack.join(", ")}`}
              >
                <div className="h2c-marquee flex w-max items-center gap-3 hover:[animation-play-state:paused] sm:gap-4">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      aria-hidden={index >= techStack.length}
                      className="inline-flex h-9 shrink-0 items-center border border-neutral-200 bg-white px-3 h2c-mono text-[10px] text-neutral-600 sm:px-4 sm:text-xs"
                    >
                      <span className="mr-2 text-[#28ad55]">/</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="border-b border-neutral-200 bg-[#F8F9FA] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mb-10 grid gap-5 border-b border-neutral-200 pb-8 sm:mb-14 sm:pb-10 lg:grid-cols-[1fr_400px] lg:items-end lg:gap-10 xl:grid-cols-[1fr_460px]">
            <div>
              <p className="h2c-mono text-[10px] font-semibold uppercase tracking-[.2em] text-neutral-400">
                01 / What we engineer
              </p>
              <h2
                id="services-heading"
                className="h2c-display mt-4 text-4xl leading-[1.02] tracking-[-.06em] sm:text-5xl lg:text-6xl"
              >
                Technology with
                <br className="hidden sm:block" /> a{" "}
                <span className="text-neutral-400">job to do.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 lg:justify-self-end">
              We deliver website development, mobile app development, custom
              software, and workflow automation based on what your business
              actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-w-0 flex-col bg-white p-6 transition-colors duration-300 hover:bg-[#f4fff7] sm:p-7 lg:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-neutral-200 bg-[#F8F9FA] transition-colors group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D]/15">
                    <service.icon className="h-5 w-5 text-neutral-800" />
                  </div>
                  <span className="h2c-mono pt-1 text-[10px] text-neutral-400">
                    / {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-[22px]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-100 pt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-200 px-2 py-1 h2c-mono text-[9px] text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  aria-label={`Discuss ${service.title}`}
                  className="mt-5 inline-flex items-center justify-between border-t border-neutral-100 pt-4 text-xs font-semibold text-neutral-800"
                >
                  Discuss this service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH / WHY #2CODE
      ====================================================== */}
      <section
        aria-labelledby="approach-heading"
        className="border-b border-neutral-200 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:gap-20 lg:px-12 xl:gap-28 xl:px-16 2xl:px-20">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="h2c-mono text-[10px] font-semibold uppercase tracking-[.2em] text-neutral-400">
              02 / Our approach
            </p>

            <h2
              id="approach-heading"
              className="h2c-display mt-5 text-4xl leading-[1.03] tracking-[-.065em] sm:text-5xl lg:text-6xl"
            >
              Good ideas
              <br />
              deserve
              <br />
              <span className="text-neutral-400">good engineering.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              #2CODE Team brings product thinking, practical engineering,
              and thoughtful design together to create digital solutions
              that serve real people and real business needs.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-3 border-b border-neutral-300 pb-3 text-sm font-semibold hover:border-[#50DC7D]"
            >
              Get to know our team
              <ArrowRight className="h-4 w-4 text-[#24a851] transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Editorial metrics, without invented claims */}
            <div className="mt-10 grid grid-cols-2 border-y border-neutral-200">
              <div className="py-5 pr-4">
                <Code2 className="h-5 w-5 text-neutral-700" />
                <p className="mt-3 text-sm font-semibold">Thoughtful code</p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  Maintainable by design
                </p>
              </div>
              <div className="border-l border-neutral-200 py-5 pl-4">
                <Lightbulb className="h-5 w-5 text-neutral-700" />
                <p className="mt-3 text-sm font-semibold">Useful products</p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  Grounded in real needs
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 border-t border-neutral-200">
            {principles.map((item) => (
              <article
                key={item.number}
                className="group grid grid-cols-[36px_minmax(0,1fr)_24px] gap-3 border-b border-neutral-200 py-6 transition-colors hover:bg-neutral-50 sm:grid-cols-[48px_minmax(0,1fr)_28px] sm:gap-5 sm:py-8"
              >
                <span className="h2c-mono pt-1 text-[10px] text-neutral-400">
                  {item.number}
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-[#22a851]" />
                    <h3 className="text-base font-semibold leading-snug tracking-tight sm:text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">
                    {item.desc}
                  </p>
                </div>

                <CheckCircle2 className="mt-1 h-5 w-5 text-neutral-300 transition-colors group-hover:text-[#22a851]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT DISCOVERY BAND
      ====================================================== */}
      <section className="border-b border-neutral-200 bg-[#F8F9FA] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid items-center gap-8 border border-neutral-200 bg-white p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
            <div className="min-w-0">
              <p className="h2c-mono text-[10px] font-semibold uppercase tracking-[.18em] text-neutral-400">
                03 / See what is possible
              </p>
              <h2 className="h2c-display mt-4 max-w-3xl text-3xl leading-tight tracking-[-.06em] sm:text-4xl lg:text-5xl">
                From a blank page to a working product.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
                Explore our projects and discover how web technologies,
                application development, and practical software solutions can
                come together.
              </p>
            </div>

            <Link to="/projects" className="w-full lg:w-auto">
              <Button className="group h-12 w-full rounded-none bg-neutral-950 px-6 text-sm text-white hover:bg-neutral-800 lg:w-auto">
                Explore projects
                <ArrowRight className="ml-3 h-4 w-4 text-[#50DC7D] transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#F8F9FA] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="relative isolate overflow-hidden border border-neutral-800 bg-[#101211] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Technical corner marks */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[#50DC7D] sm:h-16 sm:w-16"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[#50DC7D] sm:h-16 sm:w-16"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 hidden h-full w-[36%] border-l border-white/[0.06] lg:block"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff0b 1px, transparent 1px), linear-gradient(to bottom, #ffffff0b 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 border border-white/15 px-3 py-2">
                  <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                  <span className="h2c-mono text-[9px] uppercase tracking-[.18em] text-white/60 sm:text-[10px]">
                    Have a project in mind?
                  </span>
                </div>

                <h2 className="h2c-display max-w-4xl text-4xl leading-[1.02] tracking-[-.065em] sm:text-5xl lg:text-7xl">
                  Let's build
                  <br />
                  something{" "}
                  <span className="text-[#50DC7D]">meaningful.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Tell us what you are working on. Let's explore the right
                  website, mobile application, custom software, or automation
                  solution for your next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[190px] lg:flex-col">
                <Link to="/contact" className="w-full">
                  <Button className="group h-12 w-full rounded-none bg-[#50DC7D] px-5 text-sm font-bold text-neutral-950 hover:bg-[#6be891] sm:h-14">
                    Start a conversation
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:border-white/50 sm:h-14"
                >
                  About #2CODE
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="h2c-mono text-[9px] uppercase tracking-[.16em] text-white/35">
                #2CODE TEAM / DIGITAL ENGINEERING
              </span>
              <span className="h2c-mono text-[9px] uppercase tracking-[.16em] text-white/35">
                IDEAS INTO REALITIES<span className="text-[#50DC7D]">_</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
