import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Client {
  name: string;
  completedWork: string;
  type: string;
  description: string;
  url?: string;
  active?: string;
  sortOrder?: string | number;
}



const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the business goals, requirements, users, and the problem to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the structure, user journey, and visual direction around the project.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build responsive, practical digital experiences around the agreed scope.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Prepare the finished work for deployment and handover.",
  },
];

const pageMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Clients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadClients = async () => {
      try {
        setLoading(true);
        setLoadError("");
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcqHmjsmmlPqBxGulxc2Gr8yUD3z4c9sfG-5vyVYiD2L0Z_VYPOE5PwiDeZZ3Y5loFpP0EUkvNTAku/pub?output=csv",
          { cache: "no-store", signal: controller.signal }
        );
        if (!response.ok) throw new Error("Could not load client portfolio.");
        const csvText = await response.text();
        const parsed = Papa.parse<Client>(csvText, {
          header: true,
          skipEmptyLines: "greedy",
          transformHeader: (header) => header.trim(),
        });
        if (parsed.errors.length > 0) {
          throw new Error("The published client CSV could not be parsed.");
        }
        const data = parsed.data
          .filter((client) =>
            Boolean(client.name?.trim()) &&
            client.active?.toString().trim().toLowerCase() !== "false" &&
            client.active?.toString().trim() !== "0"
          )
          .sort((a, b) =>
            (Number(a.sortOrder) || 9999) - (Number(b.sortOrder) || 9999)
          );
        setClients(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError("Client portfolio is temporarily unavailable. Please try again shortly.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadClients();
    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-neutral-950 antialiased selection:bg-[#50DC7D]/30">
      {/* HERO */}
      <section className="relative border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-32 sm:px-7 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40 xl:px-16 2xl:px-20">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
             

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={pageMotion}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="max-w-5xl text-[clamp(2.7rem,6.5vw,6.6rem)] font-bold leading-[0.98] tracking-[-0.065em] text-neutral-950"
              >
                Real businesses.
                <br />
                <span className="text-neutral-400">Practical</span>{" "}
                <span className="relative inline-block">
                  digital work
                  <span className="absolute bottom-[0.08em] left-0 -z-0 h-[0.12em] w-full bg-[#50DC7D]" />
                </span>
                <span className="text-[#50DC7D]">.</span>
              </motion.h1>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={pageMotion}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="lg:col-span-4 lg:pb-2"
            >
              <div className="mb-5 h-px w-12 bg-[#50DC7D]" />
              <p className="max-w-lg text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                A selection of client engagements spanning website
                development, progressive web applications, recovery, and
                ongoing maintenance.
              </p>

              <a
                href="#selected-work"
                className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-neutral-950 transition-colors hover:text-neutral-500"
              >
                Explore selected work
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Technical footer line */}
          <div className="mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-4 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
              #2CODE Team
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
              Websites / Applications / Digital systems
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 px-4 sm:grid-cols-3 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center gap-4 border-b border-neutral-200 py-5 sm:border-b-0 sm:border-r sm:py-7 sm:pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white">
              <Building2 className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight text-neutral-950">
                {String(clients.length).padStart(2, "0")}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px]">
                Featured engagements
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-neutral-200 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:py-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white">
              <Globe2 className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight text-neutral-950">
                Web
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px]">
                Websites & platforms
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5 sm:pl-6 sm:py-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white">
              <Layers3 className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight text-neutral-950">
                Custom
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px]">
                Project-led solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED CLIENTS */}
      <section id="selected-work" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
          <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                <span className="mr-2 text-[#26964B]">01 /</span>
                Selected clients
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.045em] text-neutral-950 sm:text-4xl lg:text-5xl">
                Work that serves a purpose.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-neutral-500 md:col-span-5 md:justify-self-end lg:text-right">
              Different businesses have different needs. Each engagement
              starts with the problem, then focuses on a useful digital
              solution.
            </p>
          </div>

          {loading && (
            <div className="border border-neutral-200 bg-[#F8F9FA] px-5 py-8 text-sm text-neutral-500" role="status">
              Loading client portfolio…
            </div>
          )}

          {!loading && loadError && (
            <div className="border border-red-200 bg-red-50 px-5 py-6 text-sm text-red-800" role="alert">
              <p>{loadError}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-3 font-semibold underline underline-offset-4"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !loadError && clients.length === 0 && (
            <div className="border border-neutral-200 bg-[#F8F9FA] px-5 py-8 text-sm text-neutral-500">
              No client engagements are currently published.
            </div>
          )}

          {!loading && !loadError && clients.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
            {clients.map((client, index) => {
              const hasUrl = Boolean(client.url);

              return (
                <motion.article
                  key={client.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 2) * 0.07,
                    ease: "easeOut",
                  }}
                  className="group flex min-w-0 flex-col border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-400"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-neutral-200 p-5 sm:p-7">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-[#F8F9FA] font-mono text-xs text-neutral-500 transition-colors group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D]/10 group-hover:text-neutral-950">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500 sm:text-[10px]">
                          {client.type}
                        </p>
                        <h3 className="break-words text-lg font-bold leading-snug tracking-tight text-neutral-950 sm:text-xl">
                          {client.name}
                        </h3>
                      </div>
                    </div>

                    {hasUrl ? (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${client.name} website`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-200 text-neutral-600 transition-colors hover:border-[#50DC7D] hover:bg-[#50DC7D] hover:text-neutral-950"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        aria-label="Project link not available"
                        title="Project link not available"
                        className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-100 text-neutral-300"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[10px]">
                      Scope of work
                    </p>

                    <h4 className="mt-3 text-sm font-semibold leading-6 text-neutral-900 sm:text-base">
                      {client.completedWork}
                    </h4>

                    <p className="mt-3 max-w-2xl text-xs leading-6 text-neutral-500 sm:text-sm sm:leading-7">
                      {client.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                      <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-400 sm:text-[10px]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#26964B]" />
                        Client engagement
                      </span>

                      {hasUrl && (
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 transition-colors hover:text-[#26964B]"
                        >
                          Visit website
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          )}

          <div className="mt-8 flex items-start gap-3 border-l-2 border-[#50DC7D] bg-[#F8F9FA] px-4 py-4 sm:px-5">
            <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-600" />
            <p className="text-xs leading-6 text-neutral-500 sm:text-sm">
              Project scope varies by engagement. Some links lead to live
              websites; projects without a public link are listed for reference.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-7 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                <span className="mr-2 text-[#26964B]">02 /</span>
                Our approach
              </p>

              <h2 className="max-w-md text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-neutral-950 sm:text-4xl lg:text-5xl">
                Clear thinking.
                <br />
                <span className="text-neutral-400">Useful outcomes.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                Good digital work starts with understanding what needs to
                happen. The process stays focused on the requirement, the
                people using the product, and the intended outcome.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-neutral-300">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-neutral-300 py-5 sm:grid-cols-[56px_0.7fr_1.3fr] sm:items-start sm:gap-6 sm:py-6"
                  >
                    <span className="pt-1 font-mono text-xs text-neutral-400">
                      {step.number}
                    </span>

                    <h3 className="text-base font-bold tracking-tight text-neutral-950 sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="col-start-2 text-xs leading-6 text-neutral-500 sm:col-start-auto sm:text-sm sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
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
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#50DC7D]">
                  03 / Your next project
                </p>

                <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-4xl lg:text-6xl">
                  Have a problem worth solving?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                  Tell us about your idea, business, or workflow. Let's explore
                  a practical digital solution built around what you need.
                </p>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <a
                  href="mailto:#2CODEteam@gmail.com"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#50DC7D] px-5 py-4 text-sm font-bold text-neutral-950 transition-colors hover:bg-white sm:w-auto sm:px-6"
                >
                  <Mail className="h-4 w-4" />
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">
                #2CODE Team
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors hover:text-[#50DC7D]"
              >
                Contact us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;