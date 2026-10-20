
import {
  Target,
  Award,
  Monitor,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  ArrowRight,
  Code2,
} from "lucide-react";
import React from "react";

const values = [
  {
    number: "01",
    icon: Target,
    title: "Purpose before code",
    description:
      "We start by understanding the problem, the people using the product, and the business outcome that matters.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Built for growth",
    description:
      "We create practical digital solutions that can evolve with your business instead of becoming another limitation.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality by design",
    description:
      "We prioritize maintainable code, thoughtful implementation, responsive interfaces, and dependable foundations.",
  },
  {
    number: "04",
    icon: Monitor,
    title: "A collaborative process",
    description:
      "Clear communication and shared decisions keep the project aligned with your goals from planning to launch.",
  },
];

const phases = [
  {
    step: "01",
    label: "Understand",
    title: "Discovery & direction",
    description:
      "We discuss your goals, audience, requirements, and constraints to define a clear project scope before development begins.",
    icon: Target,
  },
  {
    step: "02",
    label: "Design",
    title: "Structure & experience",
    description:
      "We plan the information architecture, visual system, and responsive user experience around the needs of your audience.",
    icon: Layers,
  },
  {
    step: "03",
    label: "Develop",
    title: "Engineering & iteration",
    description:
      "We turn the agreed direction into a working product, refining its functionality, usability, and performance as we build.",
    icon: Code2,
  },
  {
    step: "04",
    label: "Deliver",
    title: "Testing & launch",
    description:
      "We check the finished experience, address issues, and prepare the project for deployment with a clear handover.",
    icon: Zap,
  },
];

const About = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-neutral-950 antialiased selection:bg-[#50DC7D]/30">
      {/* HERO */}
      <section className="relative border-b border-neutral-200 bg-white pt-32 sm:pt-36 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[32%] border-l border-neutral-100 lg:block"
        >
          <div className="absolute inset-0 grid grid-cols-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="border-r border-neutral-100"
              />
            ))}
          </div>
          <div className="absolute right-[15%] top-[25%] h-3 w-3 bg-[#50DC7D]" />
          <div className="absolute bottom-[23%] right-[28%] h-20 w-px bg-neutral-200" />
        </div>

        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-14 sm:px-7 sm:pb-16 lg:px-12 lg:pb-20 xl:px-16 2xl:px-20">
          <div className="max-w-5xl">
            

            <h1 className="max-w-5xl text-[clamp(2.8rem,6.5vw,6.6rem)] font-bold leading-[0.99] tracking-[-0.075em]">
              Good ideas deserve
              <br />
              <span className="text-neutral-400">better engineering.</span>
              <span className="text-[#50DC7D]">_</span>
            </h1>

            <div className="mt-8 grid gap-7 border-t border-neutral-200 pt-6 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-end lg:max-w-6xl">
              <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                We are #2CODE Team, a digital engineering studio focused on
                building useful websites, web applications, and digital
                experiences that help businesses move forward.
              </p>

              <a
                href="#our-approach"
                className="group inline-flex min-h-11 w-fit items-center gap-3 border border-neutral-200 px-4 text-xs font-semibold transition-colors hover:border-[#50DC7D] hover:bg-[#50DC7D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2"
              >
                How we work
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-5 sm:mt-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
              What we value
            </span>
            {["Clarity", "Craft", "Collaboration", "Progress"].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs font-medium text-neutral-700"
              >
                <span className="h-1 w-1 bg-[#50DC7D]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-4 sm:px-7 md:grid-cols-12 md:gap-8 lg:gap-12 lg:px-12 xl:px-16 2xl:px-20">
          {/* Section heading */}
          <div className="md:col-span-4">
            <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
              01 / Our story
            </div>

            <h2 className="max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Technology with
              <span className="block text-neutral-400">a purpose.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
              The best digital products do more than look good. They make
              something easier, clearer, faster, or more useful.
            </p>

            <div className="mt-8 flex max-w-sm items-center gap-4 border border-neutral-200 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#50DC7D]/50 bg-[#50DC7D]/10">
                <Cpu size={21} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                  Our focus
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Useful, reliable digital products
                </p>
              </div>
            </div>
          </div>

          {/* Story copy */}
          <div className="md:col-span-8 md:border-l md:border-neutral-200 md:pl-8 lg:pl-12">
            <p className="max-w-4xl text-xl font-medium leading-8 tracking-[-0.025em] text-neutral-900 sm:text-2xl sm:leading-9">
              #2CODE brings design thinking and software development
              together to turn business requirements into thoughtful digital
              experiences.
            </p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-8">
              <p className="text-sm leading-7 text-neutral-600">
                Every project begins with understanding what needs to be
                solved. We work through the requirements, shape a clear
                direction, and choose an approach that fits the product rather
                than forcing every idea into the same template.
              </p>

              <p className="text-sm leading-7 text-neutral-600">
                From the first interface to the underlying functionality, we
                aim for a balance of usability, maintainability, and
                performance. The result should not only work today but provide
                a solid foundation for what comes next.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Web development",
                "Product thinking",
                "Responsive design",
                "Custom solutions",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-neutral-200 px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="border-b border-neutral-200 bg-[#F8F9FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mb-10 flex flex-col gap-5 border-b border-neutral-200 pb-7 sm:mb-12 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
            <div>
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                02 / Our principles
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                What drives
                <span className="text-neutral-400"> our work.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-500">
              A practical set of principles that guides how we plan, build,
              communicate, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group flex min-h-[235px] flex-col border-b border-r border-neutral-200 bg-white p-5 transition-colors duration-200 hover:bg-[#FCFDFC] sm:p-6 lg:min-h-[260px] lg:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-400">
                      / {value.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-700 transition-colors duration-200 group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-neutral-950">
                      <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold tracking-[-0.035em]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {value.description}
                    </p>
                  </div>

                  <div className="mt-auto flex justify-end pt-5">
                    <ArrowUpRight
                      size={16}
                      className="text-neutral-300 transition-colors group-hover:text-[#209d48]"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="our-approach"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Approach intro */}
            <div className="lg:col-span-4">
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                03 / Our approach
              </div>

              <h2 className="max-w-lg text-4xl font-bold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                From first
                <span className="block text-neutral-400">thought to launch.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                A straightforward process that keeps priorities clear and
                turns complex requirements into manageable stages.
              </p>

              <div className="mt-8 hidden border border-neutral-200 bg-[#F8F9FA] p-5 lg:block">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-neutral-400">
                    Workflow
                  </span>
                  <Code2 size={17} className="text-neutral-500" />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  {phases.map((phase, index) => (
                    <React.Fragment key={phase.step}>
                      <span
                        className={`flex h-8 w-8 items-center justify-center border font-mono text-[10px] ${
                          index === 0
                            ? "border-[#50DC7D] bg-[#50DC7D] text-neutral-950"
                            : "border-neutral-200 bg-white text-neutral-500"
                        }`}
                      >
                        {phase.step}
                      </span>

                      {index < phases.length - 1 && (
                        <span className="h-px flex-1 bg-neutral-200" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
                  Discover / Design / Develop / Deliver
                </p>
              </div>
            </div>

            {/* Process steps */}
            <div className="lg:col-span-8">
              <div className="border-t border-neutral-200">
                {phases.map((phase) => {
                  const Icon = phase.icon;

                  return (
                    <article
                      key={phase.step}
                      className="group grid grid-cols-[42px_minmax(0,1fr)] gap-4 border-b border-neutral-200 py-6 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:gap-5 sm:py-7 lg:gap-7"
                    >
                      <div className="flex h-10 w-10 items-center justify-center border border-neutral-200 font-mono text-[10px] text-neutral-500 transition-colors group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-neutral-950">
                        {phase.step}
                      </div>

                      <div>
                        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.17em] text-neutral-400">
                          {phase.label}
                        </span>

                        <h3 className="mt-1.5 text-lg font-bold tracking-[-0.035em] sm:text-xl">
                          {phase.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
                          {phase.description}
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 items-center justify-center text-neutral-300 transition-colors group-hover:text-neutral-950 sm:flex">
                        <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-7 sm:py-16 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
          <div className="relative overflow-hidden border border-neutral-800 bg-neutral-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-1.5 bg-[#50DC7D]"
            />

            <div className="relative max-w-3xl">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#50DC7D]">
                <span className="h-1.5 w-1.5 bg-[#50DC7D]" />
                Have something in mind?
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                Let&apos;s make your next idea work.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                Tell us what you want to build. We&apos;ll start with the
                problem, define the direction, and explore the right solution.
              </p>
            </div>

            <div className="relative mt-7 lg:mt-0 lg:shrink-0">
              <a
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-5 bg-[#50DC7D] px-5 text-sm font-bold text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Start a conversation
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
