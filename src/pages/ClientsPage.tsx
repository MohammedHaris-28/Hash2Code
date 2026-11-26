
import React, { useCallback, useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe2,
  Layers3,
  RefreshCw,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Client {
  name: string;
  completedWork: string;
  type: string;
  description: string;
  url?: string;
  image?: string;
  active?: string;
  sortOrder?: string | number;
}

const CLIENTS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcqHmjsmmlPqBxGulxc2Gr8yUD3z4c9sfG-5vyVYiD2L0Z_VYPOE5PwiDeZZ3Y5loFpP0EUkvNTAku/pub?output=csv";

/**
 * Automatically discovers local PNG and WebP images.
 *
 * Supported folder:
 * src/assets/
 * src/assets/projects/
 * src/assets/clients/
 * and other nested folders.
 *
 * No need to maintain individual image imports.
 */
const localAssetFiles = import.meta.glob(
  "/src/assets/**/*.{png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

const LOCAL_IMAGE_RULES = [
  {
    name: "Dr Holla's",
    fileNames: ["drhollas", "drhollasdental", "hollas"],
    clientNames: ["drhollas", "drhollasdental", "hollas"],
  },
  {
    name: "Mayyaa's Cloud 9",
    fileNames: ["mayyaacloud9", "mayyascloud9", "mayyaa", "cloud9"],
    clientNames: ["mayyaacloud9", "mayyascloud9", "mayyaa", "cloud9"],
  },
  {
    name: "ThunderFitness",
    fileNames: ["thunderfitness"],
    clientNames: ["thunderfitness", "thunder fitness"],
  },
  {
    name: "SMVGSC",
    fileNames: ["sirmvgsc", "smvgsc"],
    clientNames: ["sirmvgsc", "smvgsc", "sirmv", "science college"],
  },
  {
    name: "Prosmile",
    fileNames: ["prosmile"],
    clientNames: ["prosmile"],
  },
  {
    name: "Vorkhubs",
    fileNames: ["vorkhubs", "vorkhub"],
    clientNames: ["vorkhubs", "vorkhub"],
  },
  {
    name: "Malenadu Aroma",
    fileNames: ["malenaduaroma"],
    clientNames: ["malenaduaroma", "malenadu"],
  },
  {
    name: "BloodSync",
    fileNames: ["bloodsync"],
    clientNames: ["bloodsync"],
  },
  {
    name: "PulsPense",
    fileNames: ["pulspense"],
    clientNames: ["pulspense"],
  },
  {
    name: "RestroSync",
    fileNames: ["restrosync"],
    clientNames: ["restrosync"],
  },
  {
    name: "Architecture",
    fileNames: ["architecture"],
    clientNames: ["architecture", "architect"],
  },
];

const findLocalAsset = (fileNames: string[]): string | undefined => {
  const entries = Object.entries(localAssetFiles);

  for (const fileName of fileNames) {
    const searchName = normalize(fileName);

    const match = entries.find(([path]) => {
      const actualFileName = normalize(
        path.split("/").pop()?.replace(/\.(png|webp)$/i, "") || ""
      );

      return actualFileName.includes(searchName);
    });

    if (match) return match[1];
  }

  return undefined;
};

const LOCAL_CLIENT_IMAGES = LOCAL_IMAGE_RULES.map((rule) => ({
  ...rule,
  image: findLocalAsset(rule.fileNames),
}));

/**
 * Local project images take priority.
 * Google Sheets image URLs are used only for unmatched clients.
 */
const getClientImage = (client: Client): string => {
  const searchableText = normalize(
    [
      client.name,
      client.completedWork,
      client.type,
      client.description,
    ]
      .filter(Boolean)
      .join(" ")
  );

  const matchingImage = LOCAL_CLIENT_IMAGES.find((rule) =>
    rule.clientNames.some((name) =>
      searchableText.includes(normalize(name))
    )
  );

  return matchingImage?.image || client.image?.trim() || "";
};

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by listening. Your goals, audience and the real challenge shape everything that follows.",
  },
  {
    number: "02",
    title: "Imagine",
    description:
      "We find the right direction, map the experience and agree on a clear plan before the work begins.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Design and development come together through focused collaboration, iteration and attention to detail.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We refine the details, deliver the finished work and help you move forward with confidence.",
  },
];

const capabilities = [
  {
    title: "Web development",
    description: "Websites, applications and digital platforms.",
    icon: Globe2,
  },
  {
    title: "Social media",
    description: "Creative campaigns, content and management.",
    icon: Sparkles,
  },
  {
    title: "Graphic design",
    description: "Visual identities and brand communication.",
    icon: Layers3,
  },
];

const Clients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const loadClients = useCallback(async (signal?: AbortSignal) => {
    try {
      setLoading(true);
      setLoadError("");

      const response = await fetch(CLIENTS_CSV_URL, {
        cache: "no-store",
        signal,
      });

      if (!response.ok) {
        throw new Error("Could not load the client portfolio.");
      }

      const csvText = await response.text();

      const parsed = Papa.parse<Client>(csvText, {
        header: true,
        skipEmptyLines: "greedy",
        transformHeader: (header) => header.trim(),
        transform: (value) => value.trim(),
      });

      if (parsed.errors.length > 0) {
        throw new Error("The published client CSV could not be parsed.");
      }

      const data = parsed.data
        .filter((client) => {
          const active = client.active?.toString().trim().toLowerCase();

          return (
            Boolean(client.name?.trim()) &&
            active !== "false" &&
            active !== "0" &&
            active !== "no"
          );
        })
        .sort((a, b) => {
          const orderA = Number(a.sortOrder);
          const orderB = Number(b.sortOrder);

          const aValue =
            Number.isFinite(orderA) && orderA > 0 ? orderA : 9999;
          const bValue =
            Number.isFinite(orderB) && orderB > 0 ? orderB : 9999;

          return aValue - bValue;
        });

      if (signal?.aborted) return;

      setClients(data);
      setActiveIndex(0);
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      setLoadError(
        "We couldn't load the client portfolio right now. Please try again."
      );
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    loadClients(controller.signal);

    return () => controller.abort();
  }, [loadClients]);

  const handleCarouselScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-client-card]")
    );

    if (!cards.length) return;

    const containerLeft = container.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - containerLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const moveCarousel = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-client-card]")
    );

    if (!cards.length) return;

    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, cards.length - 1)
        : Math.max(activeIndex - 1, 0);

    cards[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveIndex(nextIndex);
  };

  const goToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-client-card]"
    );

    cards[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveIndex(index);
  };

  return (
    <main className="h2c-clients">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Open+Sans:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');

        .h2c-clients {
          --bg: #F8F9FA;
          --ink: #101211;
          --accent: #50DC7D;
          --muted: #777D79;
          --line: rgba(16,18,17,.14);
          width: 100%;
          overflow: clip;
          background: var(--bg);
          color: var(--ink);
          font-family: "Open Sans", Inter, ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .h2c-clients * {
          box-sizing: border-box;
        }

        .h2c-clients .display {
          font-family: "Sora", sans-serif;
          font-weight: 700;
          letter-spacing: -.075em;
        }

        .h2c-clients .mono {
          font-family: "DM Mono", monospace;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .h2c-clients .wrap {
          width: min(100% - 48px, 1480px);
          margin-inline: auto;
        }

        .h2c-clients .kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #626964;
          font: 11px "DM Mono", monospace;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .h2c-clients .kicker:before {
          content: "";
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(80,220,125,.14);
        }

        .h2c-clients .action {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 7px 8px 7px 23px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          transition: transform .25s ease, background .25s ease, color .25s ease;
        }

        .h2c-clients .action:hover {
          transform: translateY(-3px);
        }

        .h2c-clients .action-dark {
          color: white;
          background: var(--ink);
        }

        .h2c-clients .action-dark:hover {
          color: var(--ink);
          background: var(--accent);
        }

        .h2c-clients .action-light {
          color: var(--ink);
          border: 1px solid var(--line);
          background: transparent;
        }

        .h2c-clients .action-light:hover {
          border-color: var(--accent);
          background: var(--accent);
        }

        .h2c-clients .action-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--ink);
          background: var(--accent);
        }

        .h2c-clients .client-carousel {
          display: flex;
          align-items: stretch;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 4px 2px 18px;
          overscroll-behavior-x: contain;
        }

        .h2c-clients .client-carousel::-webkit-scrollbar {
          display: none;
        }

        .h2c-clients .client-card {
          position: relative;
          display: flex;
          flex: 0 0 calc((100% - 20px) / 2);
          min-width: 0;
          min-height: 560px;
          overflow: hidden;
          scroll-snap-align: start;
          isolation: isolate;
          border-radius: 27px;
          background: #DDE2DE;
          color: white;
          text-decoration: none;
        }

        .h2c-clients .client-card-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .85s cubic-bezier(.2,.7,.2,1);
        }

        .h2c-clients .client-card-image-placeholder {
          background:
            radial-gradient(circle at 75% 20%, rgba(80,220,125,.24), transparent 35%),
            linear-gradient(135deg, #26342C, #101211);
        }

        .h2c-clients .client-card:hover .client-card-image {
          transform: scale(1.055);
        }

        .h2c-clients .client-card-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(180deg, rgba(16,18,17,.12) 0%, transparent 30%, rgba(16,18,17,.25) 48%, rgba(16,18,17,.88) 100%);
        }

        .h2c-clients .client-card-content {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
        }

        .h2c-clients .client-card-top {
          position: absolute;
          top: 22px;
          left: 22px;
          right: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .h2c-clients .client-tag {
          max-width: 75%;
          overflow: hidden;
          padding: 9px 13px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 999px;
          background: rgba(16,18,17,.25);
          color: white;
          font: 9px "DM Mono", monospace;
          letter-spacing: .1em;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
          backdrop-filter: blur(12px);
        }

        .h2c-clients .client-card-open {
          display: grid;
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 50%;
          background: var(--accent);
          color: var(--ink);
          transition: transform .25s ease, background .25s ease;
        }

        .h2c-clients .client-card:hover .client-card-open {
          transform: rotate(45deg);
          background: white;
        }

        .h2c-clients .client-work-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.72);
          font: 10px "DM Mono", monospace;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .h2c-clients .client-work-label:before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
        }

        .h2c-clients .client-card h3 {
          margin-top: 14px;
          font-family: "Sora", sans-serif;
          font-size: clamp(28px, 3.2vw, 43px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -.06em;
          overflow-wrap: anywhere;
        }

        .h2c-clients .client-card-description {
          max-width: 510px;
          margin-top: 13px;
          color: rgba(255,255,255,.78);
          font-size: 13px;
          line-height: 1.8;
        }

        .h2c-clients .client-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 23px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.2);
        }

        .h2c-clients .carousel-control {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border: 1px solid var(--line);
          border-radius: 50%;
          background: white;
          color: var(--ink);
          transition: background .25s ease, border-color .25s ease, transform .25s ease;
        }

        .h2c-clients .carousel-control:hover:not(:disabled) {
          transform: translateY(-2px);
          border-color: var(--accent);
          background: var(--accent);
        }

        .h2c-clients .carousel-control:disabled {
          cursor: not-allowed;
          opacity: .35;
        }

        .h2c-clients .carousel-dot {
          height: 7px;
          width: 7px;
          border-radius: 999px;
          background: #C8CDCA;
          transition: width .3s ease, background .3s ease;
        }

        .h2c-clients .carousel-dot.active {
          width: 26px;
          background: var(--accent);
        }

        .h2c-clients .skeleton {
          min-height: 560px;
          flex: 0 0 calc((100% - 20px) / 2);
          border-radius: 27px;
          background: linear-gradient(110deg, #E9ECEA 8%, #F4F5F4 18%, #E9ECEA 33%);
          background-size: 200% 100%;
          animation: h2c-skeleton 1.4s linear infinite;
        }

        @keyframes h2c-skeleton {
          to { background-position-x: -200%; }
        }

        .h2c-clients .faq-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .3s ease;
        }

        .h2c-clients .faq-content > div {
          overflow: hidden;
        }

        .h2c-clients .faq-open .faq-content {
          grid-template-rows: 1fr;
        }

        @media (max-width: 767px) {
          .h2c-clients .wrap {
            width: min(100% - 36px, 1480px);
          }

          .h2c-clients .client-carousel {
            gap: 13px;
            margin-right: -18px;
            padding-right: 18px;
          }

          .h2c-clients .client-card {
            flex-basis: 88%;
            min-height: 510px;
            border-radius: 23px;
          }

          .h2c-clients .client-card-content {
            padding: 22px;
          }

          .h2c-clients .client-card-top {
            top: 17px;
            left: 17px;
            right: 17px;
          }

          .h2c-clients .client-card h3 {
            font-size: clamp(30px, 8vw, 39px);
          }

          .h2c-clients .skeleton {
            flex-basis: 88%;
            min-height: 510px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .h2c-clients *,
          .h2c-clients *:before,
          .h2c-clients *:after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pt-44">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="kicker">People behind the projects</p>
            <p className="mono text-[10px] text-neutral-500">
              #2Code Studio / Client portfolio
            </p>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="display max-w-[1000px] text-[clamp(3.7rem,9.5vw,9rem)] leading-[.87]">
                Good people.
                <br />
                <span className="text-neutral-400">Great</span> work.
                <br />
                Real <span className="text-[#50DC7D]">impact.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="pb-2 lg:pb-4"
            >
              <p className="max-w-[440px] text-base leading-8 text-neutral-600 sm:text-lg">
                Behind every project is a business, a person and an idea worth
                bringing to life. We're proud of the relationships we've built
                and the work we've created together.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#clients-showcase" className="action action-dark">
                  <span>Explore our clients</span>
                  <span className="action-icon">
                    <ArrowUpRight size={17} />
                  </span>
                </a>

                <Link to="/contact" className="action action-light">
                  <span>Work with us</span>
                  <span className="action-icon">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* HERO STATS */}
          <div className="mt-16 grid gap-5 border-t border-neutral-300 pt-7 sm:mt-20 sm:grid-cols-3 sm:gap-8">
            <div className="flex items-center gap-4">
              <span className="display text-6xl leading-none">
                50+
              </span>
              <span className="text-sm leading-5 text-neutral-500">
                Happy
                <br />
                Clients
              </span>
            </div>

            <div className="flex items-center gap-4 border-t border-neutral-200 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <Globe2 className="h-7 w-7 text-neutral-500" />
              <span className="text-sm leading-6 text-neutral-600">
                Web development
                <br />
                & digital experiences
              </span>
            </div>

            <div className="flex items-center gap-4 border-t border-neutral-200 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <Sparkles className="h-7 w-7 text-neutral-500" />
              <span className="text-sm leading-6 text-neutral-600">
                Social media
                <br />
                & creative design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
            <p className="kicker">Built on collaboration</p>

            <div>
              <h2 className="display max-w-5xl text-4xl leading-[1.02] sm:text-6xl lg:text-[5.1rem]">
                We don't just complete projects.
                <span className="text-neutral-400">
                  {" "}
                  We build relationships and turn ideas into outcomes.
                </span>
              </h2>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
                  From websites and digital platforms to social media,
                  graphic design and creative work, we help businesses
                  communicate better, build their presence and move forward.
                </p>

                <Link
                  to="/about"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-all hover:gap-4"
                >
                  Discover our studio
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-[23px] border border-neutral-200 bg-[#F8F9FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#50DC7D]/60 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,.05)]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition-colors group-hover:bg-[#50DC7D]/20 group-hover:ring-[#50DC7D]/30">
                    <Icon size={21} />
                  </div>

                  <h3 className="display mt-6 text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT CAROUSEL */}
      <section
        id="clients-showcase"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <div className="wrap">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="kicker">A few of our favourites</p>

              <h2 className="display mt-6 max-w-3xl text-5xl leading-[.94] sm:text-7xl">
                Our happy
                <br />
                <span className="text-neutral-400">clients.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
                A selection of previous clients and collaborations. Different
                businesses, different challenges, and work we're happy to have
                been part of.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="mr-2 hidden font-mono text-[10px] uppercase tracking-widest text-neutral-400 sm:block">
                Explore portfolio
              </span>

              <button
                type="button"
                onClick={() => moveCarousel("prev")}
                disabled={activeIndex === 0 || loading || clients.length === 0}
                aria-label="Previous client"
                className="carousel-control"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={() => moveCarousel("next")}
                disabled={
                  activeIndex >= clients.length - 1 ||
                  loading ||
                  clients.length === 0
                }
                aria-label="Next client"
                className="carousel-control"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          {/* LOADING */}
          {loading && (
            <div
              className="client-carousel mt-12"
              role="status"
              aria-label="Loading clients"
            >
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="skeleton" key={index} />
              ))}
            </div>
          )}

          {/* ERROR */}
          {!loading && loadError && (
            <div
              className="mt-12 rounded-[26px] border border-red-200 bg-white p-7 sm:p-10"
              role="alert"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-red-600">
                  <RefreshCw size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-950">
                    Portfolio temporarily unavailable
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-500">
                    {loadError}
                  </p>

                  <button
                    type="button"
                    onClick={() => loadClients()}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#50DC7D] hover:text-neutral-950"
                  >
                    <RefreshCw size={14} />
                    Try again
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* EMPTY */}
          {!loading && !loadError && clients.length === 0 && (
            <div className="mt-12 rounded-[26px] border border-neutral-200 bg-white px-6 py-16 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#F8F9FA]">
                <Users size={24} className="text-neutral-500" />
              </div>

              <h3 className="display mt-5 text-2xl">
                Good things are being prepared.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-neutral-500">
                Our featured client engagements will appear here once
                published.
              </p>
            </div>
          )}

          {/* CARDS */}
          {!loading && !loadError && clients.length > 0 && (
            <>
              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="client-carousel mt-12"
                aria-label="Previous client projects"
              >
                {clients.map((client, index) => {
                  const clientImage = getClientImage(client);
                  const hasUrl = Boolean(client.url?.trim());

                  return (
                    <motion.article
                      key={`${client.name}-${index}`}
                      data-client-card
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5 }}
                      className="client-card group"
                    >
                      {clientImage ? (
                        <img
                          src={clientImage}
                          alt={`${client.name} project`}
                          className="client-card-image"
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div
                          className="client-card-image client-card-image-placeholder"
                          aria-hidden="true"
                        />
                      )}

                      <div className="client-card-overlay" />

                      <div className="client-card-top">
                        <span className="client-tag">
                          {client.type || "Client engagement"}
                        </span>

                        {hasUrl ? (
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${client.name} website`}
                            title="Visit website"
                            className="client-card-open"
                          >
                            <ArrowUpRight size={20} />
                          </a>
                        ) : (
                          <span
                            className="client-card-open"
                            aria-hidden="true"
                          >
                            <Sparkles size={18} />
                          </span>
                        )}
                      </div>

                      <div className="client-card-content">
                        <p className="client-work-label">
                          Previous client
                        </p>

                        <h3>{client.name}</h3>

                        <p className="mt-3 text-sm font-semibold leading-6 text-white">
                          {client.completedWork || "Digital & creative work"}
                        </p>

                        <p className="client-card-description">
                          {client.description ||
                            "A collaboration focused on meaningful creative work and practical business outcomes."}
                        </p>

                        <div className="client-card-footer">
                          <span className="inline-flex items-center gap-2 text-[10px] text-white/70">
                            <Check size={14} className="text-[#50DC7D]" />
                            Proud to have worked together
                          </span>

                          {hasUrl ? (
                            <a
                              href={client.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[#50DC7D]"
                            >
                              Visit website
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            <Link
                              to={`/contact?client=${encodeURIComponent(client.name)}`}
                              className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-[#50DC7D]"
                            >
                              Similar project
                              <ArrowUpRight size={15} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* CAROUSEL PAGINATION */}
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  {clients.map((client, index) => (
                    <button
                      key={`${client.name}-dot-${index}`}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to client ${index + 1}`}
                      aria-current={activeIndex === index ? "true" : undefined}
                      className={`carousel-dot ${
                        activeIndex === index ? "active" : ""
                      }`}
                    />
                  ))}
                </div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                 
                </p>
              </div>

              {/* MORE CLIENTS */}
              <div className="mt-12 flex flex-col gap-6 rounded-[26px] bg-[#101211] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#50DC7D] text-[#101211]">
                    <Sparkles size={21} />
                  </div>

                  <div>
                    <p className="display text-2xl sm:text-3xl">
                      More stories to come.
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
                      Our work extends beyond this featured collection,
                      across website development, social media, graphic
                      design and other creative engagements.
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#50DC7D] px-6 py-4 text-xs font-bold text-[#101211] transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Become a client
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="kicker">How we work together</p>

              <h2 className="display mt-6 text-5xl leading-[.95] sm:text-7xl">
                From first thought
                <br />
                to final <span className="text-neutral-400">result.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-500">
                A clear, collaborative process keeps good ideas moving and
                makes every decision count.
              </p>
            </div>

            <div className="border-t border-neutral-200">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-3 border-b border-neutral-200 py-7 sm:grid-cols-[65px_1fr_1.2fr] sm:items-start sm:gap-6 sm:py-9"
                >
                  <span className="mono pt-1 text-[10px] text-neutral-400">
                    {step.number}
                  </span>

                  <h3 className="display text-3xl sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-neutral-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO APPROACH */}
      <section className="py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
            <div className="rounded-[27px] bg-[#50DC7D] p-7 text-[#101211] sm:p-10 lg:p-12">
              <p className="mono text-[10px]">A growing network</p>

              <h2 className="display mt-7 text-5xl leading-[.94] sm:text-7xl">
                Different ideas.
                <br />
                Shared ambition.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#101211]/70">
                We collaborate with businesses and creative teams across
                different locations, industries and stages of growth.
              </p>

              <div className="mt-10 flex items-center gap-3 border-t border-[#101211]/20 pt-6">
                <span className="display text-5xl">
                  50+
                </span>
                <span className="text-sm leading-5 text-[#101211]/70">
                  Happy
                  <br />
                  Clients
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[27px] bg-white p-7 ring-1 ring-neutral-200 sm:p-10 lg:p-12">
              <div>
                <p className="mono text-[10px] text-neutral-500">
                  What matters to us
                </p>

                <h3 className="display mt-6 text-4xl leading-[1] sm:text-5xl">
                  Good work is built on good collaboration.
                </h3>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Understanding before execution",
                  "Design with a clear purpose",
                  "Technology that solves real needs",
                  "Relationships beyond delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-neutral-200 pb-4 text-sm text-neutral-600"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#50DC7D]/25">
                      <Check size={13} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="relative mx-auto max-w-[1700px] overflow-hidden rounded-[27px] bg-[#50DC7D] px-6 py-20 text-[#101211] sm:rounded-[34px] sm:px-12 sm:py-28 lg:px-16 lg:py-36">
          <div className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-[#101211]/10 sm:h-[600px] sm:w-[600px]" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-[310px] w-[310px] rounded-full border border-[#101211]/10 sm:h-[450px] sm:w-[450px]" />

          <div className="relative z-[1]">
            <p className="mono text-[10px]">
              Your story could be next
            </p>

            <h2 className="display mt-7 max-w-5xl text-[clamp(3.2rem,8.5vw,8.5rem)] leading-[.88]">
              Let's make
              <br />
              something matter<span className="text-white">.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#101211]/70 sm:text-base">
              Have a business to grow, an idea to explore, or a challenge
              that needs a creative solution? Let's talk.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="action action-dark">
                <span>Start a conversation</span>
                <span className="action-icon">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <Link to="/about" className="action action-light">
                <span>Discover #2Code</span>
                <span className="action-icon">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
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

export default Clients;
