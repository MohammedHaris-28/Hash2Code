import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  ChevronDown,
  MapPin,
  Plus,
  Sparkles,
  X,
} from "lucide-react";

const SITE_URL = "https://hash2codeteam.vercel.app/";

/**
 * Temporary visual assets.
 * Replace these URLs with imports from src/assets when your final images are ready.
 */
const image = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const PH = {
  web: image("photo-1498050108023-c5249f4df085"),
  social: image("photo-1611162617213-7d7a39e9b1d7"),
  video: image("photo-1574717024653-61fd2cf4d44d"),
  graphic: image("photo-1561070791-2526d30994b5"),
  app: image("photo-1512941937669-90a1b58e7e9c"),
  software: image("photo-1551288049-bebda4e38f71"),
  product: image("photo-1460925895917-afdab827c52f"),
  hero: image("photo-1558655146-d09347e92766", 1800),
};

const services = [
  {
    number: "01",
    title: "Website Development",
    desc: "Distinctive websites, landing pages and web applications designed to move businesses forward.",
    image: PH.web,
    tag: "Digital presence",
  },
  {
    number: "02",
    title: "Social Media Marketing & Management",
    desc: "A considered social presence, consistent content and campaigns that build real connection.",
    image: PH.social,
    tag: "Brand growth",
  },
  {
    number: "03",
    title: "Video Editing",
    desc: "Reels, campaign films and brand stories edited with rhythm, clarity and purpose.",
    image: PH.video,
    tag: "Visual storytelling",
  },
  {
    number: "04",
    title: "Graphic Designing",
    desc: "Visual identities and creative assets that make every brand touchpoint feel intentional.",
    image: PH.graphic,
    tag: "Visual identity",
  },
  {
    number: "05",
    title: "Mobile App Development",
    desc: "Useful, intuitive mobile experiences built around the people who use them.",
    image: PH.app,
    tag: "Mobile experiences",
  },
  {
    number: "06",
    title: "Custom Software & Automation",
    desc: "Purpose-built systems and smarter workflows that reduce friction and save time.",
    image: PH.software,
    tag: "Business systems",
  },
  {
    number: "07",
    title: "Digital Product Engineering",
    desc: "From an early idea to a reliable digital product, we bring the pieces together.",
    image: PH.product,
    tag: "Product development",
  },
];

const upcomingServices = [
  "Industrial Designing",
  "3D Design & Modelling",
  "Physical Product Design & Development",
];

const projects = [
  { title: "Digital experiences", category: "Website development", image: PH.web, index: "01" },
  { title: "Social-first stories", category: "Social media & content", image: PH.social, index: "02" },
  { title: "Ideas in motion", category: "Video & creative", image: PH.video, index: "03" },
  { title: "Products that work", category: "Apps & software", image: PH.app, index: "04" },
];

const process = [
  {
    no: "01",
    title: "Understand",
    description: "We start by listening. Your goals, your audience and the real challenge shape everything that follows.",
  },
  {
    no: "02",
    title: "Imagine",
    description: "We find the right direction, map the experience and agree on a clear plan before the build begins.",
  },
  {
    no: "03",
    title: "Create",
    description: "Design and development come together through focused collaboration, iteration and attention to detail.",
  },
  {
    no: "04",
    title: "Launch & grow",
    description: "We deliver, support the handover and help your digital presence keep moving forward.",
  },
];

const cities = ["Shivamogga", "Mangalore", "Mysore", "Kozhikode"];

const faqs = [
  {
    q: "What can #2Code Studio help with?",
    a: "We offer website development, social media marketing and management, video editing, graphic designing, mobile app development, custom software and automation, and digital product engineering. Industrial design, 3D design and physical product development are upcoming services.",
  },
  {
    q: "Where do you work?",
    a: "We work with businesses and teams in Shivamogga, Mangalore, Mysore and Kozhikode.",
  },
  {
    q: "Can you help if I only have an idea?",
    a: "Yes. We can help shape an early idea, identify the right first step and turn it into a practical plan.",
  },
  {
    q: "How do we get started?",
    a: "Tell us a little about your project through the contact page. We'll discuss your goals and follow up with a clear scope and next steps.",
  },
];

const PillImage = ({ src, alt }: { src: string; alt: string }) => (
  <span className="h2c-inline-image" aria-label={alt} role="img">
    <img src={src} alt="" aria-hidden="true" />
  </span>
);

const ActionLink = ({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) => (
  <Link
    to={to}
    className={`h2c-action ${light ? "h2c-action-light" : "h2c-action-dark"}`}
  >
    <span>{children}</span>
    <span className="h2c-action-icon"><ArrowUpRight size={17} /></span>
  </Link>
);

const Home = () => {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "#2Code Studio | Digital, Creative & Technology";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const previousDescription = meta.content;
    meta.content =
      "#2Code Studio is a digital and creative studio for website development, social media, video, design, apps and custom software.";

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
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
      if (createdMeta) meta?.remove();
      else if (meta) meta.content = previousDescription;
      if (createdCanonical) canonical?.remove();
      else if (canonical) canonical.href = previousCanonical;
    };
  }, []);

  return (
    <main className="h2c-home">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .h2c-home {
          --h2c-bg: #F8F9FA;
          --h2c-ink: #101211;
          --h2c-accent: #50DC7D;
          --h2c-muted: #777D79;
          --h2c-line: rgba(16,18,17,.14);
          width: 100%;
          overflow: clip;
          background: var(--h2c-bg);
          color: var(--h2c-ink);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .h2c-home * { box-sizing: border-box; }
        .h2c-display { font-family: "Sora", sans-serif;, Inter, sans-serif; font-weight: 700; letter-spacing: -.075em; }
        .h2c-mono { font-family: "DM Mono", monospace; letter-spacing: .04em; text-transform: uppercase; }
        .h2c-wrap { width: min(100% - 48px, 1480px); margin-inline: auto; }
        .h2c-kicker { display:flex; align-items:center; gap:10px; color:#626964; font: 11px "DM Mono",monospace; letter-spacing:.1em; text-transform:uppercase; }
        .h2c-kicker:before { content:""; width:8px; height:8px; border-radius:50%; background:var(--h2c-accent); box-shadow:0 0 0 4px rgba(80,220,125,.14); }
        .h2c-inline-image { display:inline-flex; width:.92em; height:.55em; margin:0 .08em; border-radius:999px; overflow:hidden; vertical-align:middle; transform:translateY(-.07em); }
        .h2c-inline-image img { width:100%; height:100%; object-fit:cover; }
        .h2c-action { min-height:54px; display:inline-flex; align-items:center; justify-content:space-between; gap:24px; padding:7px 8px 7px 23px; border-radius:999px; font-size:13px; font-weight:650; text-decoration:none; transition:transform .25s ease,background .25s ease; }
        .h2c-action:hover { transform:translateY(-3px); }
        .h2c-action-dark { background:var(--h2c-ink); color:white; }
        .h2c-action-light { border:1px solid var(--h2c-line); color:var(--h2c-ink); background:transparent; }
        .h2c-action-icon { width:38px; height:38px; display:grid; place-items:center; border-radius:50%; background:var(--h2c-accent); color:var(--h2c-ink); }
        .h2c-marquee-track { display:flex; width:max-content; animation:h2c-marquee 34s linear infinite; }
        @keyframes h2c-marquee { to { transform:translateX(-50%); } }
        .h2c-reveal { animation:h2c-rise .8s cubic-bezier(.2,.7,.2,1) both; }
        @keyframes h2c-rise { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .h2c-service-row { display:grid; grid-template-columns:54px minmax(0,1fr) 48px; gap:18px; align-items:center; padding:25px 0; border-top:1px solid var(--h2c-line); text-decoration:none; color:inherit; }
        .h2c-service-row:last-child { border-bottom:1px solid var(--h2c-line); }
        .h2c-service-row .h2c-service-title { transition:transform .3s ease,color .3s ease; }
        .h2c-service-row:hover .h2c-service-title, .h2c-service-row.is-active .h2c-service-title { transform:translateX(7px); color:var(--h2c-ink); }
        .h2c-service-row .h2c-service-arrow { transition:background .25s ease,transform .25s ease; }
        .h2c-service-row:hover .h2c-service-arrow, .h2c-service-row.is-active .h2c-service-arrow { background:var(--h2c-accent); transform:rotate(45deg); border-color:var(--h2c-accent); }
        .h2c-work-card img { transition:transform .8s cubic-bezier(.2,.7,.2,1); }
        .h2c-work-card:hover img { transform:scale(1.055); }
        .h2c-work-card:after { content:""; position:absolute; inset:35% 0 0; background:linear-gradient(transparent,rgba(16,18,17,.72)); pointer-events:none; }
        .h2c-faq-content { display:grid; grid-template-rows:0fr; transition:grid-template-rows .3s ease; }
        .h2c-faq-content > div { overflow:hidden; }
        .h2c-faq-open .h2c-faq-content { grid-template-rows:1fr; }
        .h2c-snap { scrollbar-width:none; }
        .h2c-snap::-webkit-scrollbar { display:none; }
        @media (max-width: 767px) {
          .h2c-wrap { width:min(100% - 36px,1480px); }
          .h2c-service-row { grid-template-columns:34px minmax(0,1fr) 40px; gap:10px; padding:21px 0; }
          .h2c-service-row h3 { font-size:23px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .h2c-marquee-track,.h2c-reveal { animation:none !important; }
          .h2c-home * { scroll-behavior:auto !important; transition-duration:.01ms !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative pb-0 pt-28 sm:pt-36 lg:pt-40">
        <div className="h2c-wrap">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="h2c-kicker">Independent digital & creative studio</p>
            <p className="h2c-mono text-[10px] text-neutral-500">Based in India · Working everywhere</p>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
            <div className="h2c-reveal">
              <h1 className="h2c-display max-w-[1050px] text-[clamp(3.6rem,9.5vw,9.4rem)] leading-[.87]">
                We make
                <br />
                ideas <PillImage src={PH.hero} alt="Creative visual" />
                <br />
                <span className="text-neutral-400">work in the</span>
                <br />
                real world<span className="text-[#50DC7D]">.</span>
              </h1>
            </div>
            <div className="h2c-reveal pb-2 lg:pb-4" style={{ animationDelay: "140ms" }}>
              <p className="max-w-[430px] text-base leading-8 text-neutral-600 sm:text-lg">
                #2Code Studio is where thoughtful design, technology and creative
                thinking come together to build brands and digital experiences
                that move businesses forward.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionLink to="/contact">Start a project</ActionLink>
                <ActionLink to="/projects" light>Explore our work</ActionLink>
              </div>
              <div className="mt-12 flex items-end gap-4 border-t border-neutral-300 pt-5">
                <span className="h2c-display text-6xl leading-none sm:text-7xl">50<span className="text-[#50DC7D]">+</span></span>
                <span className="pb-1 text-sm leading-5 text-neutral-500">clients served<br />and counting</span>
                <span className="ml-auto hidden pb-1 text-right text-xs leading-5 text-neutral-500 sm:block">Digital craft.<br />Real-world impact.</span>
              </div>
            </div>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[26px] bg-[#DDE2DE] sm:mt-20 sm:rounded-[34px]">
            <img src={PH.hero} alt="Creative studio visual placeholder" className="h-[290px] w-full object-cover sm:h-[430px] lg:h-[560px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101211]/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-5 text-white sm:bottom-10 sm:left-10 sm:right-10">
              <div>
                <p className="h2c-mono text-[10px] text-white/70">Strategy / Design / Technology</p>
                <p className="h2c-display mt-2 max-w-xl text-3xl leading-[.98] sm:text-5xl">Good work starts with a better question.</p>
              </div>
              <a href="#services" className="grid h-12 w-12 place-items-center rounded-full bg-[#50DC7D] text-[#101211] transition-transform hover:translate-y-1" aria-label="Scroll to services">
                <ArrowDown size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-y border-neutral-200 bg-[#101211] py-5 text-white sm:mt-20">
          <div className="h2c-marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-8 pr-8">
                {["Design with intent", "Build with purpose", "Create what matters", "Grow with clarity", "Digital experiences"].map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-8 whitespace-nowrap">
                    <span className="h2c-display text-2xl sm:text-4xl">{item}</span>
                    <Asterisk className="h-6 w-6 text-[#50DC7D] sm:h-8 sm:w-8" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / STUDIO POSITIONING */}
      <section className="h2c-wrap py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
          <p className="h2c-kicker">A studio built around ideas</p>
          <div>
            <h2 className="h2c-display max-w-5xl text-4xl leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
              We bring digital, creative and technology together
              <span className="text-neutral-400"> to help ambitious ideas find their place.</span>
            </h2>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
                From the first sketch to the final launch, we connect the details
                that make a business memorable, useful and ready for what comes next.
              </p>
              <Link to="/about" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:gap-4 transition-all">
                More about #2Code <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-24 sm:py-32">
        <div className="h2c-wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="h2c-kicker">What we do</p>
              <h2 className="h2c-display mt-6 max-w-3xl text-5xl leading-[.95] sm:text-7xl">One studio.<br />Many ways forward<span className="text-[#50DC7D]">.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-neutral-500">A connected set of services for building, presenting and growing your business.</p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div className="hidden lg:block">
              <div className="sticky top-28 overflow-hidden rounded-[26px] bg-neutral-100">
                <div className="relative aspect-[4/5]">
                  {services.map((service, index) => (
                    <img
                      key={service.number}
                      src={service.image}
                      alt={service.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${activeService === index ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                    />
                  ))}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101211]/75 to-transparent p-7 pt-28 text-white">
                    <p className="h2c-mono text-[10px] text-white/70">Featured capability</p>
                    <p className="h2c-display mt-2 text-3xl">{services[activeService].title}</p>
                  </div>
                  <span className="absolute right-5 top-5 rounded-full bg-[#50DC7D] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#101211]">#2Code Studio</span>
                </div>
              </div>
            </div>

            <div>
              {services.map((service, index) => (
                <Link
                  to="/contact"
                  key={service.number}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  className={`h2c-service-row ${activeService === index ? "is-active" : ""}`}
                >
                  <span className="h2c-mono pt-1 text-[10px] text-neutral-400">{service.number}</span>
                  <span>
                    <span className="h2c-mono text-[9px] text-neutral-400">{service.tag}</span>
                    <h3 className="h2c-display mt-2 text-[clamp(1.65rem,3vw,2.65rem)] leading-[1.05]">{service.title}</h3>
                    <span className="mt-2 block max-w-lg text-sm leading-6 text-neutral-500">{service.desc}</span>
                  </span>
                  <span className="h2c-service-arrow grid h-11 w-11 place-items-center rounded-full border border-neutral-300">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              ))}

              <div className="mt-10 rounded-[22px] border border-dashed border-neutral-300 bg-[#F8F9FA] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="h2c-mono text-[10px] text-neutral-500">On the horizon</p>
                  <span className="rounded-full bg-[#50DC7D]/25 px-3 py-1 text-[10px] font-semibold text-[#245C37]">Upcoming services</span>
                </div>
                <h3 className="h2c-display mt-3 text-2xl sm:text-3xl">Taking ideas beyond the screen.</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {upcomingServices.map((service) => (
                    <span key={service} className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs text-neutral-600">{service}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-24 sm:py-32">
        <div className="h2c-wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="h2c-kicker">A glimpse of what’s possible</p>
              <h2 className="h2c-display mt-6 text-5xl leading-[.95] sm:text-7xl">Made to make<br />an impression<span className="text-[#50DC7D]">.</span></h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold">View all projects <ArrowUpRight size={17} /></Link>
          </div>

          <div className="h2c-snap mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {projects.map((project) => (
              <Link to="/projects" key={project.index} className="h2c-work-card group relative aspect-[.86] w-[82vw] max-w-[490px] shrink-0 snap-start overflow-hidden rounded-[24px] bg-neutral-200 sm:w-[52vw] lg:w-[31vw]">
                <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between gap-4 p-6 text-white sm:p-8">
                  <div>
                    <p className="h2c-mono text-[9px] text-white/70">{project.category}</p>
                    <h3 className="h2c-display mt-2 text-3xl sm:text-4xl">{project.title}</h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#50DC7D] text-[#101211]"><ArrowUpRight size={19} /></span>
                </div>
                <span className="h2c-mono absolute left-6 top-6 z-[1] text-[10px] text-white/80">{project.index} / 04</span>
              </Link>
            ))}
          </div>
          <p className="mt-3 text-xs text-neutral-400">Temporary showcase imagery — final project visuals will be added from your assets.</p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[#101211] py-20 text-white sm:py-28">
        <div className="h2c-wrap">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="h2c-kicker !text-white/55">Creative collaboration</p>
              <h2 className="h2c-display mt-6 text-5xl leading-[.95] sm:text-7xl">Better together<span className="text-[#50DC7D]">.</span></h2>
            </div>
            <div>
              <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                For social media and marketing, we collaborate with creative partners
                to bring strategy, content and execution together.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Hidden Ants Media", "F_Block_14"].map((partner, index) => (
                  <div key={partner} className="flex min-h-[112px] items-center justify-between rounded-[18px] border border-white/15 bg-white/[.045] px-6 py-5 transition-colors hover:border-[#50DC7D]/60">
                    <div>
                      <p className="h2c-mono text-[9px] text-white/40">Creative partner 0{index + 1}</p>
                      <p className="h2c-display mt-2 text-2xl sm:text-3xl">{partner}</p>
                    </div>
                    <ArrowUpRight className="text-[#50DC7D]" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="h2c-wrap">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="h2c-kicker">How we work</p>
              <h2 className="h2c-display mt-6 text-5xl leading-[.95] sm:text-7xl">From first thought to final launch<span className="text-[#50DC7D]">.</span></h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-500">A clear, collaborative process keeps good ideas moving and makes every decision count.</p>
            </div>
            <div className="border-t border-neutral-200">
              {process.map((step) => (
                <div key={step.no} className="grid gap-4 border-b border-neutral-200 py-7 sm:grid-cols-[70px_1fr_1.2fr] sm:items-start sm:gap-6 sm:py-9">
                  <span className="h2c-mono text-xs text-neutral-400">{step.no}</span>
                  <h3 className="h2c-display text-3xl sm:text-4xl">{step.title}</h3>
                  <p className="max-w-md text-sm leading-7 text-neutral-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REACH + STUDIO FACTS */}
      <section className="py-24 sm:py-32">
        <div className="h2c-wrap">
          <div className="grid gap-5 lg:grid-cols-[1fr_.8fr]">
            <div className="rounded-[26px] bg-[#50DC7D] p-7 text-[#101211] sm:p-10 lg:p-12">
              <p className="h2c-mono text-[10px]">Our reach</p>
              <h2 className="h2c-display mt-6 max-w-2xl text-5xl leading-[.94] sm:text-7xl">Rooted here.<br />Ready to work anywhere.</h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#101211]/70">Working with businesses across Karnataka and Kerala, with a focus on thoughtful collaboration and meaningful outcomes.</p>
              <div className="mt-10 grid grid-cols-2 gap-x-5">
                {cities.map((city, index) => (
                  <div key={city} className="flex items-center gap-2 border-t border-[#101211]/20 py-4">
                    <MapPin size={15} />
                    <span className="text-sm font-semibold">{city}</span>
                    <span className="ml-auto text-[10px] opacity-50">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[26px] bg-white p-7 ring-1 ring-neutral-200 sm:p-10 lg:p-12">
              <div>
                <p className="h2c-mono text-[10px] text-neutral-500">The #2Code approach</p>
                <h3 className="h2c-display mt-6 text-4xl leading-[1] sm:text-5xl">Thoughtful by design. Practical by nature.</h3>
              </div>
              <div className="mt-12 space-y-4">
                {["Design that has a reason", "Technology that solves real needs", "Creative work with consistency", "Partnership beyond the launch"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-neutral-200 pb-4 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#50DC7D]/25"><Check size={13} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="h2c-wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="h2c-kicker">A few useful details</p>
            <h2 className="h2c-display mt-6 text-5xl leading-[.95] sm:text-7xl">Good to know<span className="text-[#50DC7D]">.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-500">Have another question? Tell us what you’re planning and we’ll take it from there.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Talk to our team <ArrowUpRight size={17} /></Link>
          </div>
          <div className="border-t border-neutral-300">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`border-b border-neutral-300 ${isOpen ? "h2c-faq-open" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="h2c-display text-xl sm:text-2xl">{faq.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-neutral-300 transition-all ${isOpen ? "rotate-45 border-[#50DC7D] bg-[#50DC7D]" : ""}`}>
                      <Plus size={17} />
                    </span>
                  </button>
                  <div className="h2c-faq-content">
                    <div>
                      <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-neutral-500">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="relative mx-auto max-w-[1700px] overflow-hidden rounded-[26px] bg-[#50DC7D] px-6 py-20 text-[#101211] sm:rounded-[34px] sm:px-12 sm:py-28 lg:px-16 lg:py-36">
          <div className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-[#101211]/10 sm:h-[600px] sm:w-[600px]" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-[310px] w-[310px] rounded-full border border-[#101211]/10 sm:h-[450px] sm:w-[450px]" />
          <div className="relative z-[1]">
            <p className="h2c-mono text-[10px]">Have something in mind?</p>
            <h2 className="h2c-display mt-7 max-w-5xl text-[clamp(3.1rem,8.5vw,8.5rem)] leading-[.88]">Let’s make<br />something matter<span className="text-white">.</span></h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/contact">Start a conversation</ActionLink>
              <ActionLink to="/about" light>Discover #2Code</ActionLink>
            </div>
          </div>
          <div className="relative z-[1] mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[#101211]/20 pt-5 text-xs text-[#101211]/65">
            <span>#2Code Studio · Digital, creative & technology</span>
            <span>Shivamogga · Mangalore · Mysore · Kozhikode</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
