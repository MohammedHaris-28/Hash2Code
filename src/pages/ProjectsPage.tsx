
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  Coffee,
  Database,
  ExternalLink,
  Flame,
  Globe,
  Layers3,
  LoaderCircle,
  Search,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

import Architects from "@/assets/architecture.png";
import Bloodsync from "@/assets/bloodsync.png";
import pulspense from "@/assets/pulspense.png";
import malenadu from "@/assets/malenadu aroma.png";
import thunder from "@/assets/thunderfitness.png";
import sirmvgsc from "@/assets/sirmvgsc.png";
import restrosync from "@/assets/restrosync.png";

interface ProjectRow {
  title?: string;
  type?: string;
  description?: string;
  technologies?: string;
  features?: string;
  url?: string;
  imageUrl?: string;
  active?: string;
  order?: string | number;
}

interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  url: string;
  imageUrl: string;
  order: number;
}

const GOOGLE_SHEETS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4gtuOprrc8dj5VHIDPhKA6F9VZj-vNAtq0oWzmMJQvaAG0ht08MWw0x67wIGZhLedeeVemmuPEtxE/pub?output=csv";

const localImages: Record<string, string> = {
  pulspense,
  "thunderfitness gym": thunder,
  "malenadu aroma": malenadu,
  "smvgsc library": sirmvgsc,
  bloodsync: Bloodsync,
  "#2code-restrosync": restrosync,
  "architects portfolio website": Architects,
};

const fallbackProjects: Project[] = [
  {
    title: "PulsPense",
    type: "Expense Tracker App",
    description:
      "A practical personal finance application that makes everyday money management easier through expense tracking, useful insights, and reliable offline access.",
    technologies: ["Flutter", "SQLite", "Google Drive API"],
    features: [
      "PDF Reports",
      "Spending Analysis & Graphs",
      "EMI Reminders",
      "Offline Support",
    ],
    url: "https://pulspense.netlify.app/",
    imageUrl: pulspense,
    order: 0,
  },
  {
    title: "ThunderFitness Gym",
    type: "Website",
    description:
      "A bold digital presence for a fitness business, presenting its facilities, training options, memberships, and services in one responsive experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    features: [
      "Membership Information",
      "Trainer Showcase",
      "Class Schedules",
    ],
    url: "https://thunderfitnessbdvt.netlify.app/",
    imageUrl: thunder,
    order: 1,
  },
  {
    title: "Malenadu Aroma",
    type: "Website",
    description:
      "A digital storefront for regional coffee and spices, built to introduce products, communicate the brand, and make product discovery easier.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    features: [
      "Product Showcase",
      "Ordering Experience",
      "Brand Presentation",
    ],
    url: "https://malenaduaroma.netlify.app/",
    imageUrl: malenadu,
    order: 2,
  },
  {
    title: "SMVGSC Library",
    type: "Website",
    description:
      "An informative digital platform for Sir M. V. Government Science College Library, making institutional information and library resources easier to access.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    features: [
      "Responsive Design",
      "Digital Library Information",
      "Structured Content",
    ],
    url: "https://sirmvgsclibrary.netlify.app/",
    imageUrl: sirmvgsc,
    order: 3,
  },
  {
    title: "BloodSync",
    type: "Web Platform",
    description:
      "A blood donor discovery and request platform designed to make it easier to connect people who need blood with potential donors.",
    technologies: ["TypeScript", "React", "Supabase"],
    features: [
      "Blood Donor Directory",
      "Blood Request Portal",
      "Authentication",
    ],
    url: "https://bloodsyncproject.vercel.app/",
    imageUrl: Bloodsync,
    order: 5,
  },
  {
    title: "#2Code-RestroSync",
    type: "Web App",
    description:
      "A restaurant technology solution bringing QR-based menus, point-of-sale workflows, and order management into one connected system.",
    technologies: ["TypeScript", "React", "Supabase"],
    features: [
      "Dynamic QR Menu",
      "Restaurant POS",
      "Real-Time Orders",
    ],
    url: "https://hash2codetools.netlify.app/",
    imageUrl: restrosync,
    order: 6,
  },
  {
    title: "Architects Portfolio Website",
    type: "Website",
    description:
      "A professional online portfolio for an architecture and engineering practice, combining project presentation with practical construction calculators.",
    technologies: ["TypeScript", "React"],
    features: [
      "Material Calculators",
      "Brick & Tile Calculators",
      "Project Portfolio",
    ],
    url: "https://engineerswebsite.netlify.app/",
    imageUrl: Architects,
    order: 7,
  },
];

const splitList = (value?: string) =>
  (value ?? "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

const isActive = (value?: string) =>
  !["false", "0", "no", "inactive", "hide"].includes(
    (value ?? "").trim().toLowerCase(),
  );

const getLocalImage = (title: string) =>
  localImages[title.trim().toLowerCase()] ?? "";

const iconForProject = (project: Project) => {
  const text = `${project.title} ${project.type}`.toLowerCase();

  if (text.includes("expense") || text.includes("puls")) return BarChart3;
  if (text.includes("fitness") || text.includes("gym")) return Flame;
  if (text.includes("coffee") || text.includes("aroma")) return Coffee;
  if (
    text.includes("blood") ||
    text.includes("database") ||
    text.includes("restaurant")
  ) {
    return Database;
  }
  if (text.includes("app") || text.includes("mobile")) return Smartphone;
  if (text.includes("website") || text.includes("library")) return Globe;

  return Layers3;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [retryKey, setRetryKey] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      setLoading(true);
      setLoadError("");

      try {
        if (!GOOGLE_SHEETS_CSV_URL) {
          throw new Error("Google Sheets CSV URL is missing.");
        }

        const response = await fetch(GOOGLE_SHEETS_CSV_URL, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to fetch the published CSV.");
        }

        const csvText = await response.text();

        const parsed = Papa.parse<ProjectRow>(csvText, {
          header: true,
          skipEmptyLines: "greedy",
          transformHeader: (header) => header.trim(),
        });

        if (parsed.errors.length) {
          throw new Error("The Google Sheets CSV could not be parsed.");
        }

        const rows = parsed.data
          .filter((row) => row.title?.trim() && isActive(row.active))
          .map((row, index): Project => {
            const title = row.title!.trim();
            const localImage = getLocalImage(title);
            const rawOrder = Number(row.order);

            return {
              title,
              type: row.type?.trim() || "Project",
              description: row.description?.trim() || "",
              technologies: splitList(row.technologies),
              features: splitList(row.features),
              url: row.url?.trim() || "",
              imageUrl: row.imageUrl?.trim() || localImage,
              order:
                Number.isFinite(rawOrder) &&
                row.order !== "" &&
                row.order != null
                  ? rawOrder
                  : index,
            };
          })
          .sort((a, b) => a.order - b.order);

        setProjects(rows.length > 0 ? rows : fallbackProjects);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setProjects(fallbackProjects);
        setLoadError(
          "The live project list is temporarily unavailable. Showing our saved portfolio instead.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => controller.abort();
  }, [retryKey]);

  const projectTypes = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(projects.map((project) => project.type).filter(Boolean)),
      ),
    ],
    [projects],
  );

  const visibleProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesType =
        selectedType === "All" || project.type === selectedType;

      const searchable = [
        project.title,
        project.type,
        project.description,
        ...project.technologies,
        ...project.features,
      ]
        .join(" ")
        .toLowerCase();

      return matchesType && (!query || searchable.includes(query));
    });
  }, [projects, search, selectedType]);

  useEffect(() => {
    setActiveSlide(0);

    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [search, selectedType]);

  const scrollCarousel = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      "[data-project-card]",
    );

    const cardWidth = card?.offsetWidth ?? 380;
    const gap = 20;

    container.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  const handleCarouselScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      "[data-project-card]",
    );

    if (!card) return;

    const gap = 20;
    const cardWidth = card.offsetWidth + gap;

    setActiveSlide(Math.round(container.scrollLeft / cardWidth));
  };

  const scrollToSlide = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-project-card]",
    );

    const target = cards[index];
    if (!target) return;

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <main className="h2c-projects min-h-screen overflow-hidden bg-[#F8F9FA] text-[#101211] antialiased selection:bg-[#50DC7D]/30">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/[0.08] bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative mx-auto max-w-[1480px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-14 lg:pb-28 lg:pt-40 xl:px-20">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8"
            >
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#50DC7D]" />
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.17em] text-neutral-600">
                  A collection of things we've built
                </span>
              </div>

              <h1 className="max-w-5xl font-display text-[clamp(3.3rem,8vw,7.6rem)] font-bold leading-[0.91] tracking-[-0.075em]">
                Ideas into
                <br />
                <span className="text-neutral-400">digital</span>{" "}
                <span className="relative inline-block">
                  reality.
                  
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12 }}
              className="lg:col-span-4 lg:pb-2"
            >
              <div className="mb-6 h-[2px] w-12 bg-[#50DC7D]" />

              <p className="max-w-md text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                From business websites to custom applications and digital
                platforms, explore a selection of work built around real
                requirements and practical outcomes.
              </p>

              <a
                href="#selected-projects"
                className="mt-7 inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-[#26964B]"
              >
                Explore selected work
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
              #2Code Digital Studio
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
              Websites / Applications / Digital products
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-black/[0.08] bg-[#F8F9FA]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 px-5 sm:grid-cols-3 sm:px-8 lg:px-14 xl:px-20">
          <div className="flex items-center gap-4 border-b border-black/[0.08] py-6 sm:border-b-0 sm:border-r sm:py-8 sm:pr-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-white">
              <Layers3 className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-[-0.05em]">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-neutral-500">
                Featured projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-black/[0.08] py-6 sm:border-b-0 sm:border-r sm:px-6 sm:py-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-white">
              <Globe className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-[-0.05em]">
                Digital
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-neutral-500">
                Websites & platforms
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 sm:py-8 sm:pl-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-white">
              <Sparkles className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-[-0.05em]">
                Custom
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-neutral-500">
                Project-led solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden bg-[#101211] py-4">
        <div className="flex w-max animate-project-marquee items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <React.Fragment key={index}>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
                Thoughtful design
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
                Practical development
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
                Useful technology
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section
        id="selected-projects"
        className="scroll-mt-24 bg-[#F8F9FA]"
      >
        <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28 xl:px-20">
          <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-4 flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                Selected work
              </p>

              <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Built with purpose.
                <br />
                <span className="text-neutral-400">Made to be useful.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-neutral-500 md:col-span-5 md:justify-self-end lg:text-right">
              Every project starts with a different challenge. Take a closer
              look at the products, platforms, and experiences we've
              developed.
            </p>
          </div>

          {/* SEARCH AND FILTERS */}
          <div className="mb-8 rounded-[22px] border border-black/[0.08] bg-white p-3 sm:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <label className="relative block w-full lg:max-w-[390px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search projects, features or technology..."
                  className="h-12 w-full rounded-full border border-black/[0.08] bg-[#F8F9FA] pl-11 pr-11 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-[#50DC7D] focus:bg-white"
                  aria-label="Search projects"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </label>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-[65%] lg:justify-end">
                {projectTypes.map((type) => {
                  const active = selectedType === type;

                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-semibold transition-all duration-200 ${
                        active
                          ? "border-[#101211] bg-[#101211] text-white"
                          : "border-black/[0.09] bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-950"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STATUS */}
          {loading && (
            <div
              className="mb-6 flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white px-5 py-5 text-sm text-neutral-500"
              role="status"
            >
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Updating the project collection...
            </div>
          )}

          {loadError && (
            <div
              className="mb-6 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              role="status"
            >
              <p className="text-sm leading-6 text-amber-900">
                {loadError}
              </p>

              <button
                type="button"
                onClick={() => setRetryKey((value) => value + 1)}
                className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-amber-950 hover:underline"
              >
                Try again <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* PROJECT CAROUSEL */}
          {visibleProjects.length === 0 ? (
            <div className="rounded-[26px] border border-black/[0.08] bg-white px-5 py-16 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F9FA]">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>

              <h3 className="font-display text-xl font-bold tracking-tight">
                No matching projects
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedType("All");
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#101211] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#26964B]"
              >
                Clear filters <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs text-neutral-500">
                  Showing{" "}
                  <span className="font-semibold text-neutral-900">
                    {visibleProjects.length}
                  </span>{" "}
                  {visibleProjects.length === 1 ? "project" : "projects"}
                </p>

                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
                  Portfolio collection
                </span>
              </div>

              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="project-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
              >
                {visibleProjects.map((project, index) => {
                  const Icon = iconForProject(project);
                  const fallbackImage = getLocalImage(project.title);

                  return (
                    <motion.article
                      key={`${project.title}-${project.order}`}
                      data-project-card
                      variants={sectionReveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{
                        duration: 0.5,
                        delay: (index % 3) * 0.06,
                      }}
                      className="group flex min-w-0 w-[88%] max-w-[430px] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-black/[0.08] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_20px_55px_rgba(16,18,17,0.07)] sm:w-[65%] lg:w-[calc(50%-10px)] xl:w-[calc(33.333%-14px)]"
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEFEC]">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={`${project.title} project preview`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                            onError={(event) => {
                              const image = event.currentTarget;

                              if (
                                fallbackImage &&
                                !image.dataset.fallback
                              ) {
                                image.dataset.fallback = "true";
                                image.src = fallbackImage;
                              } else {
                                image.style.opacity = "0";
                              }
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <Icon className="h-16 w-16 stroke-[1] text-neutral-300" />
                          </div>
                        )}

                        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3.5 py-2.5 backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-700">
                            {project.type}
                          </span>
                        </div>

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent" />
                      </div>

                      {/* CARD CONTENT */}
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                              {project.type}
                            </p>

                            <h3 className="break-words font-display text-[22px] font-bold leading-tight tracking-[-0.045em] text-[#101211] sm:text-2xl">
                              {project.title}
                            </h3>
                          </div>

                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${project.title}`}
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-neutral-600 transition-all duration-200 hover:border-[#50DC7D] hover:bg-[#50DC7D] hover:text-neutral-950"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          ) : (
                            <span
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.06] text-neutral-300"
                              title="No public link available"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          )}
                        </div>

                        <p className="mt-4 text-sm leading-7 text-neutral-600">
                          {project.description ||
                            "More details about this project will be available soon."}
                        </p>

                        {/* FEATURES */}
                        {project.features.length > 0 && (
                          <div className="mt-6 border-t border-black/[0.07] pt-5">
                            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                              Project highlights
                            </p>

                            <ul className="space-y-2.5">
                              {project.features.slice(0, 4).map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-2.5 text-xs leading-5 text-neutral-600"
                                >
                                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#50DC7D]/15">
                                    <Check className="h-2.5 w-2.5 text-[#26964B]" />
                                  </span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* TECHNOLOGIES AND LINK */}
                        <div className="mt-auto pt-6">
                          {project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 border-t border-black/[0.07] pt-4">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-black/[0.08] bg-[#F8F9FA] px-3 py-1.5 font-mono text-[9px] text-neutral-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 transition-colors hover:text-[#26964B]"
                            >
                              Explore live project
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* CAROUSEL CONTROLS */}
              <div className="mt-5 flex items-center justify-between border-t border-black/[0.08] pt-5">
                <div className="flex items-center gap-2">
                  {visibleProjects.map((project, index) => (
                    <button
                      key={`${project.title}-dot`}
                      type="button"
                      onClick={() => scrollToSlide(index)}
                      aria-label={`Go to project ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "w-8 bg-[#50DC7D]"
                          : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollCarousel("prev")}
                    aria-label="Previous projects"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-700 transition hover:border-[#50DC7D] hover:bg-[#50DC7D]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollCarousel("next")}
                    aria-label="Next projects"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-700 transition hover:border-[#50DC7D] hover:bg-[#50DC7D]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}

          {/* NOTE */}
          <div className="mt-9 flex items-start gap-3 rounded-2xl border border-black/[0.08] bg-white px-5 py-4">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#26964B]" />
            <p className="text-xs leading-6 text-neutral-500 sm:text-sm">
              Every project has its own scope and requirements. This
              collection highlights selected work; some projects are
              available to explore publicly, while others are presented
              for portfolio reference.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-black/[0.08] bg-white">
        <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28 xl:px-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="mb-4 flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                How we work
              </p>

              <h2 className="max-w-md font-display text-4xl font-bold leading-[1.04] tracking-[-0.065em] sm:text-5xl">
                Clear thinking.
                <br />
                <span className="text-neutral-400">
                  Useful outcomes.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                Good digital work starts with understanding the actual
                problem. We focus on the people using the product, the
                business requirement, and what the finished solution needs
                to achieve.
              </p>
            </motion.div>

            <div className="lg:col-span-8">
              {[
                [
                  "Understand",
                  "We clarify the goals, requirements, audience, and problem before deciding what to build.",
                ],
                [
                  "Design",
                  "We plan the structure, user journey, and visual direction around the intended experience.",
                ],
                [
                  "Develop",
                  "We turn the agreed direction into responsive, practical, and reliable digital solutions.",
                ],
                [
                  "Deliver",
                  "We test, refine, deploy, and prepare the finished work for a clear handover.",
                ],
              ].map(([title, description], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group grid grid-cols-[1fr_auto] gap-4 border-t border-black/[0.08] py-6 last:border-b sm:grid-cols-[0.8fr_1.5fr_auto] sm:items-center sm:gap-8"
                >
                  <h3 className="font-display text-lg font-bold tracking-[-0.035em] sm:text-xl">
                    {title}
                  </h3>

                  <p className="col-span-2 text-sm leading-7 text-neutral-500 sm:col-span-1">
                    {description}
                  </p>

                  <span className="row-start-1 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-400 transition-all duration-200 group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-neutral-950 sm:row-auto">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28 xl:px-20">
          <div className="relative overflow-hidden rounded-[28px] bg-[#101211]">
            <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-8 -top-20 h-[300px] w-[300px] rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-20 -top-10 h-[180px] w-[180px] rounded-full bg-[#50DC7D]/10 blur-[70px]" />

            <div className="absolute inset-y-0 left-0 w-1 bg-[#50DC7D]" />

            <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-12 md:items-end md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="md:col-span-8">
                <p className="mb-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#50DC7D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                  Have something in mind?
                </p>

                <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl">
                  Let's build something
                  <span className="text-neutral-500"> that matters.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                  Have a business idea, a product to develop, or a process
                  that needs a better digital solution? Tell us what you're
                  working on. We'll help you figure out the next step.
                </p>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <a
                  href="/contact"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#50DC7D] px-6 py-4 text-sm font-bold text-[#101211] transition-all duration-300 hover:bg-white sm:w-auto"
                >
                  Start a conversation
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#101211] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-500">
                #2Code Digital Studio
              </span>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors hover:text-[#50DC7D]"
              >
                Talk to our team
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE-SCOPED STYLES */}
      <style>{`
        .h2c-projects {
          --project-green: #50DC7D;
        }

        .h2c-projects .font-display {
          font-family: "Sora", sans-serif;, "Inter", sans-serif;
        }

        .h2c-projects .font-mono {
          font-family: "DM Mono", monospace;
        }

        .h2c-projects .project-carousel {
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
        }

        .h2c-projects .project-carousel::-webkit-scrollbar {
          display: none;
        }

        @keyframes project-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .h2c-projects .animate-project-marquee {
          animation: project-marquee 32s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .h2c-projects .animate-project-marquee {
            animation: none;
          }

          .h2c-projects *,
          .h2c-projects *::before,
          .h2c-projects *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Projects;
