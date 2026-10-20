import React, { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
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

const GOOGLE_SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4gtuOprrc8dj5VHIDPhKA6F9VZj-vNAtq0oWzmMJQvaAG0ht08MWw0x67wIGZhLedeeVemmuPEtxE/pub?output=csv";

const localImages: Record<string, string> = {
  pulspense: pulspense,
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
    description: "Feature-rich money tracking app with offline support and Google Drive backup support.",
    technologies: ["Flutter", "SQLite", "Google Drive API"],
    features: ["PDF Reports", "Spend Analysis & Graphs", "EMI Reminder", "Offline Support"],
    url: "https://pulspense.netlify.app/",
    imageUrl: pulspense,
    order: 0,
  },
  {
    title: "ThunderFitness Gym",
    type: "Website",
    description: "A premium fitness website presenting gym memberships, personalized training packages, trainers, and facilities.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    features: ["Membership Enrollment", "Trainer Showcase", "Class Schedules"],
    url: "https://thunderfitnessbdvt.netlify.app/",
    imageUrl: thunder,
    order: 1,
  },
  {
    title: "Malenadu Aroma",
    type: "Website",
    description: "A digital storefront for regional coffee and spices, designed to support product discovery and ordering.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    features: ["Product Showcase", "Order Management Interface", "Regional Sourcing"],
    url: "https://malenaduaroma.netlify.app/",
    imageUrl: malenadu,
    order: 2,
  },
  {
    title: "SMVGSC Library",
    type: "Website",
    description: "An informative website for Sir MV Government Science College Library with a responsive, modern layout.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    features: ["Responsive Design", "Modern UI", "Digital Catalog Information"],
    url: "https://sirmvgsclibrary.netlify.app/",
    imageUrl: sirmvgsc,
    order: 3,
  },
  {
    title: "BloodSync",
    type: "Web Platform",
    description: "An online blood donor directory and blood request management platform.",
    technologies: ["TypeScript", "React", "Supabase"],
    features: ["Blood Donor Directory", "Real-Time Request Portal", "Authentication"],
    url: "https://bloodsyncproject.vercel.app/",
    imageUrl: Bloodsync,
    order: 5,
  },
  {
    title: "#2Code-RestroSync",
    type: "Web App",
    description: "A QR menu, restaurant POS, and management system designed for modern restaurant workflows.",
    technologies: ["TypeScript", "React", "Supabase"],
    features: ["Dynamic QR Menu", "Restaurant POS", "Real-Time Orders"],
    url: "https://hash2codetools.netlify.app/",
    imageUrl: restrosync,
    order: 6,
  },
  {
    title: "Architects Portfolio Website",
    type: "Website",
    description: "A portfolio website for architects with construction calculators and service sections.",
    technologies: ["TypeScript", "React"],
    features: ["Material Calculators", "Brick & Tile Calculators", "Project Portfolio"],
    url: "https://engineerswebsite.netlify.app/",
    imageUrl: Architects,
    order: 7,
  },
];

const iconForProject = (project: Project) => {
  const text = `${project.title} ${project.type}`.toLowerCase();
  if (text.includes("expense") || text.includes("puls")) return BarChart3;
  if (text.includes("fitness") || text.includes("gym")) return Flame;
  if (text.includes("coffee") || text.includes("aroma")) return Coffee;
  if (text.includes("blood") || text.includes("database") || text.includes("restaurant")) return Database;
  if (text.includes("app") || text.includes("mobile")) return Smartphone;
  if (text.includes("website") || text.includes("library")) return Globe;
  return Layers3;
};

const splitList = (value?: string) =>
  (value ?? "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

const isActive = (value?: string) =>
  !["false", "0", "no", "inactive", "hide"].includes((value ?? "").trim().toLowerCase());

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    if (
      !GOOGLE_SHEETS_CSV_URL ||
      GOOGLE_SHEETS_CSV_URL === "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4gtuOprrc8dj5VHIDPhKA6F9VZj-vNAtq0oWzmMJQvaAG0ht08MWw0x67wIGZhLedeeVemmuPEtxE/pub?output=csv"
    ) return;

    const controller = new AbortController();

    const loadProjects = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Unable to fetch the published CSV.");
        const csvText = await response.text();
        const parsed = Papa.parse<ProjectRow>(csvText, {
          header: true,
          skipEmptyLines: "greedy",
          transformHeader: (header) => header.trim(),
        });

        if (parsed.errors.length) throw new Error("The Google Sheets CSV could not be parsed.");

        const rows = parsed.data
          .filter((row) => row.title?.trim() && isActive(row.active))
          .map((row, index): Project => {
            const title = row.title!.trim();
            const localImage = localImages[title.toLowerCase()] ?? "";
            const rawOrder = Number(row.order);
            return {
              title,
              type: row.type?.trim() || "Project",
              description: row.description?.trim() || "",
              technologies: splitList(row.technologies),
              features: splitList(row.features),
              url: row.url?.trim() || "",
              imageUrl: row.imageUrl?.trim() || localImage,
              order: Number.isFinite(rawOrder) && row.order !== "" && row.order != null ? rawOrder : index,
            };
          })
          .sort((a, b) => a.order - b.order);

        setProjects(rows);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError("We couldn't load the live project list. Showing the locally saved projects instead.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadProjects();
    return () => controller.abort();
  }, []);

  const projectTypes = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.type).filter(Boolean)))],
    [projects],
  );

  const visibleProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesType = selectedType === "All" || project.type === selectedType;
      const searchable = [
        project.title,
        project.type,
        project.description,
        ...project.technologies,
        ...project.features,
      ].join(" ").toLowerCase();
      return matchesType && (!query || searchable.includes(query));
    });
  }, [projects, search, selectedType]);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-neutral-950 antialiased selection:bg-[#50DC7D]/30">
      {/* Hero */}
      <section className="relative border-b border-neutral-200 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="relative mx-auto max-w-[1600px] px-4 pb-16 pt-32 sm:px-7 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40 xl:px-16 2xl:px-20">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              
               
               
             
              <h1 className="max-w-5xl text-[clamp(2.8rem,6.5vw,6.6rem)] font-bold leading-[0.98] tracking-[-0.065em]">
                Digital work.
                <br />
                <span className="text-neutral-400">Built for</span>{" "}
                <span className="relative inline-block">
                  real use.
                  <span className="absolute bottom-[0.08em] left-0 -z-0 h-[0.12em] w-full bg-[#50DC7D]" />
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4 lg:pb-2"
            >
              <div className="mb-5 h-px w-12 bg-[#50DC7D]" />
              <p className="max-w-lg text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                A selection of websites, applications, and digital systems designed around practical business needs.
              </p>
              <a href="#selected-projects" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-neutral-500">
                Explore projects <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-4 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">#2Code Team</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">Websites / Applications / Digital systems</span>
          </div>
        </div>
      </section>

      {/* Portfolio overview */}
      <section className="border-b border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 px-4 sm:grid-cols-3 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center gap-4 border-b border-neutral-200 py-5 sm:border-b-0 sm:border-r sm:py-7 sm:pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white"><Layers3 className="h-5 w-5 text-neutral-700" /></div>
            <div><p className="text-2xl font-bold tracking-tight">{String(projects.length).padStart(2, "0")}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px]">Featured projects</p></div>
          </div>
          <div className="flex items-center gap-4 border-b border-neutral-200 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:py-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white"><Globe className="h-5 w-5 text-neutral-700" /></div>
            <div><p className="text-2xl font-bold tracking-tight">Digital</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px]">Websites & platforms</p></div>
          </div>
          <div className="flex items-center gap-4 py-5 sm:pl-6 sm:py-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white"><Sparkles className="h-5 w-5 text-neutral-700" /></div>
            <div><p className="text-2xl font-bold tracking-tight">Custom</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px]">Project-led solutions</p></div>
          </div>
        </div>
      </section>

      {/* Project list */}
      <section id="selected-projects" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
          <div className="mb-8 grid gap-5 md:mb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500"><span className="mr-2 text-[#26964B]">01 /</span>Project archive</p>
              <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">Selected work, in detail.</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-neutral-500 md:col-span-5 md:justify-self-end lg:text-right">
              Explore the purpose, features, and technologies behind each project.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-3 border-y border-neutral-200 py-4 md:flex-row md:items-center md:justify-between">
            <label className="relative block w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects, features, tech…" className="h-11 w-full border border-neutral-200 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-neutral-500" aria-label="Search projects" />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {projectTypes.map((type) => (
                <button key={type} type="button" onClick={() => setSelectedType(type)} className={`shrink-0 border px-3 py-2 text-xs font-medium transition-colors ${selectedType === type ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"}`}>
                  {type}
                </button>
              ))}
            </div>
          </div>

          {loading && <div className="flex items-center gap-3 border border-neutral-200 bg-[#F8F9FA] px-5 py-6 text-sm text-neutral-500" role="status"><LoaderCircle className="h-4 w-4 animate-spin" />Updating project list…</div>}
          {loadError && <p className="mb-5 border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">{loadError}</p>}

          {visibleProjects.length === 0 ? (
            <div className="border border-neutral-200 bg-[#F8F9FA] px-5 py-10 text-center text-sm text-neutral-500">No projects match your search. Try a different keyword or category.</div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project, index) => {
                const Icon = iconForProject(project);
                return (
                  <motion.article
                    key={`${project.title}-${project.order}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                    className="group flex min-w-0 flex-col border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-400"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-[#F4F5F5]">
                      <div className="absolute left-4 top-4 z-10 flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-neutral-300" /><span className="h-2 w-2 rounded-full bg-neutral-300" /><span className="h-2 w-2 rounded-full bg-neutral-300" />
                      </div>
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={`${project.title} project preview`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                          onError={(event) => { event.currentTarget.style.display = "none"; }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-neutral-300"><Icon className="h-14 w-14 stroke-[1]" /></div>
                      )}
                      <div className="absolute bottom-3 right-3 border border-white/70 bg-white/90 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-neutral-600">{project.type}</div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">Project {(project.order + 1).toString().padStart(2, "0")}</p>
                          <h3 className="break-words text-xl font-bold leading-snug tracking-tight text-neutral-950">{project.title}</h3>
                        </div>
                        {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-200 text-neutral-600 transition-colors hover:border-[#50DC7D] hover:bg-[#50DC7D] hover:text-neutral-950"><ArrowUpRight className="h-4 w-4" /></a> : <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-100 text-neutral-300" title="No public link available"><ArrowUpRight className="h-4 w-4" /></span>}
                      </div>

                      <p className="mt-4 text-sm leading-7 text-neutral-600">{project.description || "Project details will be added soon."}</p>

                      {project.features.length > 0 && <div className="mt-6 border-t border-neutral-100 pt-4">
                        <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">Highlights</p>
                        <ul className="space-y-2">
                          {project.features.slice(0, 4).map((feature) => <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-neutral-600"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#26964B]" /><span>{feature}</span></li>)}
                        </ul>
                      </div>}

                      <div className="mt-auto pt-6">
                        {project.technologies.length > 0 && <div className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
                          {project.technologies.map((tech) => <span key={tech} className="border border-neutral-200 bg-[#F8F9FA] px-2.5 py-1 font-mono text-[10px] text-neutral-600">{tech}</span>)}
                        </div>}
                        {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 transition-colors hover:text-[#26964B]">View live project <ExternalLink className="h-3.5 w-3.5" /></a>}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}

          <div className="mt-8 flex items-start gap-3 border-l-2 border-[#50DC7D] bg-[#F8F9FA] px-4 py-4 sm:px-5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-600" />
            <p className="text-xs leading-6 text-neutral-500 sm:text-sm">Project scope varies by engagement. Some projects link to live websites; projects without a public link are included for portfolio reference.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500"><span className="mr-2 text-[#26964B]">02 /</span>Our approach</p>
              <h2 className="max-w-md text-3xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">Clear thinking.<br /><span className="text-neutral-400">Useful outcomes.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">Good digital work starts with understanding what needs to happen. We focus on the requirement, the people using the product, and the intended outcome.</p>
            </div>
            <div className="lg:col-span-8">
              {[
                ["01", "Understand", "Clarify goals, requirements, users, and the problem to solve."],
                ["02", "Design", "Plan the structure, user journey, and visual direction around the project."],
                ["03", "Develop", "Build responsive, practical digital experiences around the agreed scope."],
                ["04", "Deliver", "Prepare the finished work for deployment and handover."],
              ].map(([number, title, description]) => <div key={number} className="grid grid-cols-[42px_1fr] gap-4 border-t border-neutral-300 py-5 last:border-b sm:grid-cols-[56px_0.7fr_1.3fr] sm:items-start sm:gap-6 sm:py-6">
                <span className="pt-1 font-mono text-xs text-neutral-400">{number}</span><h3 className="text-base font-bold tracking-tight sm:text-lg">{title}</h3><p className="col-start-2 text-xs leading-6 text-neutral-500 sm:col-start-auto sm:text-sm sm:leading-7">{description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
          <div className="relative overflow-hidden bg-neutral-950">
            <div className="absolute inset-y-0 left-0 w-1 bg-[#50DC7D]" />
            <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-12 md:items-end md:px-12 md:py-16 lg:px-16">
              <div className="md:col-span-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#50DC7D]">03 / Your next project</p>
                <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-4xl lg:text-6xl">Have a problem worth solving?</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">Tell us about your idea, business, or workflow. Let's explore a practical digital solution built around what you need.</p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <a href="mailto:hash2codeteam@gmail.com" className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#50DC7D] px-5 py-4 text-sm font-bold text-neutral-950 transition-colors hover:bg-white sm:w-auto sm:px-6"><ExternalLink className="h-4 w-4" />Let's work together <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">#2Code Team</span>
              <a href="/contact" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors hover:text-[#50DC7D]">Contact us <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
