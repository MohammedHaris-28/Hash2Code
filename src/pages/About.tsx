
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  TrendingUp,
  ShieldCheck,
  Monitor,
  Cpu,
  Layers,
  Code2,
  Zap,
  Globe2,
  Users,
  MapPin,
  Sparkles,
  Palette,
  Video,
  Smartphone,
  Workflow,
  Box,
  DraftingCompass,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

import f14Logo from "../assets/f14.webp";
import hiddenAntsLogo from "../assets/hiddenants.png";

const services = [
  {
    number: "01",
    category: "Digital presence",
    title: "Website Development",
    description:
      "Distinctive websites, landing pages and web applications designed to move businesses forward.",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Website analytics and digital workspace",
    tags: ["Business websites", "Web applications"],
  },
  {
    number: "02",
    category: "Brand growth",
    title: "Social Media Marketing & Management",
    description:
      "A considered social presence, consistent content and campaigns that build real connection.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Social media content and creative production",
    tags: ["Social strategy", "Content management"],
  },
  {
    number: "03",
    category: "Visual storytelling",
    title: "Video Editing",
    description:
      "Reels, campaign films and brand stories edited with rhythm, clarity and purpose.",
    icon: Video,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Professional video editing workspace",
    tags: ["Reels", "Brand films"],
  },
  {
    number: "04",
    category: "Visual identity",
    title: "Graphic Designing",
    description:
      "Visual identities and creative assets that make every brand touchpoint feel intentional.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Graphic design and visual identity work",
    tags: ["Brand identity", "Creative assets"],
  },
  {
    number: "05",
    category: "Mobile experiences",
    title: "Mobile App Development",
    description:
      "Useful, intuitive mobile experiences built around the people who use them.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Mobile application interface design",
    tags: ["Mobile apps", "User experience"],
  },
  {
    number: "06",
    category: "Business systems",
    title: "Custom Software & Automation",
    description:
      "Purpose-built systems and smarter workflows that reduce friction and save time.",
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Technology infrastructure and software systems",
    tags: ["Custom software", "Automation"],
  },
  {
    number: "07",
    category: "Product development",
    title: "Digital Product Engineering",
    description:
      "From an early idea to a reliable digital product, we bring the pieces together.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Digital product engineering and electronics",
    tags: ["Product strategy", "Engineering"],
  },
];

const upcomingServices = [
  {
    number: "01",
    title: "Industrial Designing",
    description:
      "Thoughtful design that connects functionality, usability and manufacturing possibilities.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "3D Design & Modelling",
    description:
      "Turning concepts into detailed three-dimensional models and visual prototypes.",
    icon: Box,
  },
  {
    number: "03",
    title: "Product Design & Development",
    description:
      "Exploring, designing and developing physical products from concept to reality.",
    icon: Lightbulb,
  },
];

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
      "We create practical solutions that can evolve with your business instead of becoming another limitation.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality by design",
    description:
      "We prioritize thoughtful implementation, responsive experiences and dependable foundations.",
  },
  {
    number: "04",
    icon: Users,
    title: "Better together",
    description:
      "Different skills, shared goals and clear communication help us turn ideas into stronger outcomes.",
  },
];

const phases = [
  {
    step: "01",
    label: "Understand",
    title: "Discovery & direction",
    description:
      "We discuss your goals, audience, requirements and constraints to define a clear project direction.",
    icon: Target,
  },
  {
    step: "02",
    label: "Design",
    title: "Structure & experience",
    description:
      "We shape the concept, visual direction and experience around the needs of your audience.",
    icon: Layers,
  },
  {
    step: "03",
    label: "Create",
    title: "Development & execution",
    description:
      "Our creative and technical team brings the agreed direction to life through focused execution.",
    icon: Code2,
  },
  {
    step: "04",
    label: "Deliver",
    title: "Refinement & launch",
    description:
      "We review the result, refine the details and prepare the finished work for delivery.",
    icon: Zap,
  },
];

const teamCapabilities = [
  { name: "Graphic designers", icon: Palette },
  { name: "Video editors", icon: Video },
  { name: "Web developers", icon: Monitor },
  { name: "Software developers", icon: Code2 },
  { name: "App developers", icon: Smartphone },
  { name: "Social media managers", icon: TrendingUp },
];

const locations = ["Shivamogga", "Mangalore", "Mysore", "Kozhikode"];

const partners = [
  {
    name: "F_Block_14",
    role: "Creative & media partner",
    description:
      "Working together on social media, creative campaigns and video production.",
    logo: f14Logo,
    instagram:
      "https://www.instagram.com/f_block_14/",
  },
  {
    name: "Hidden Ants Media",
    role: "Media & production partner",
    description:
      "Collaborating on social media projects, video editing and visual storytelling.",
    logo: hiddenAntsLogo,
    instagram:
      "https://www.instagram.com/hidden_ants_media/",
  },
];

const About = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FA] font-sans text-[#101211] antialiased selection:bg-[#50DC7D]/30">

      {/* HERO */}
      <section className="relative bg-white pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">

          <div className="mb-7 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
            About #2CODE Studio
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
            <div>
              <h1 className="max-w-5xl text-[clamp(3rem,7.2vw,7rem)] font-bold leading-[0.96] tracking-[-0.075em]">
                We turn ideas
                <br />
                into{" "}
                <span className="text-neutral-400">creative</span>
                <br />
                outcomes<span className="text-[#50DC7D]">.</span>
              </h1>
            </div>

            <div className="max-w-lg pb-1 lg:pb-3">
              <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                We are #2CODE — a creative and technology studio bringing
                design, development and digital thinking together to help
                businesses move forward.
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                We don't just work on projects. We collaborate, experiment
                and turn possibilities into meaningful results.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex min-h-12 items-center gap-4 rounded-full bg-[#101211] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#50DC7D] hover:text-[#101211]"
              >
                Let's work together
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mt-12 overflow-hidden rounded-[28px] sm:mt-16 lg:rounded-[36px]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
              alt="Creative team collaborating on ideas and projects"
              className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[540px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-6 p-5 text-white sm:flex-row sm:items-end sm:p-8 lg:p-10">
              <div className="max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#50DC7D]">
                  Creative thinking. Technical execution.
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
                  Different skills.
                  <br />
                  One creative direction.
                </h2>
              </div>

              <div className="flex gap-8 sm:gap-10">
                <div>
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    50<span className="text-[#50DC7D]">+</span>
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/70">
                    Clients served
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    04
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/70">
                    Cities reached
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO VALUES */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
              What defines us
            </span>
            {["Clarity", "Creativity", "Craft", "Collaboration", "Progress"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-neutral-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 sm:px-7 md:grid-cols-12 lg:gap-16 lg:px-12 xl:px-16 2xl:px-20">

          <div className="md:col-span-5">
            <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
              01 / Our story
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
              More than
              <span className="block text-neutral-400">just a studio.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
              A space where creative minds and technical skills come
              together to solve problems and build things that matter.
            </p>

            <div className="mt-8 flex max-w-md items-center gap-4 rounded-[20px] border border-neutral-200 bg-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#50DC7D]/15 text-[#101211]">
                <Cpu size={22} strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                  Our philosophy
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Ideas deserve thoughtful execution.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:border-l md:border-neutral-200 md:pl-10 lg:pl-14">
            <p className="text-xl font-medium leading-9 tracking-[-0.025em] text-neutral-900 sm:text-2xl sm:leading-10">
              #2CODE brings together creativity, technology and people to
              transform business requirements and ambitious ideas into
              meaningful outcomes.
            </p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <p className="text-sm leading-7 text-neutral-600">
                Our work spans websites, applications, software, branding,
                social media and visual content. We approach every project
                with curiosity, understand its purpose and build a direction
                that makes sense.
              </p>

              <p className="text-sm leading-7 text-neutral-600">
                We believe great outcomes come from combining different
                perspectives. That's why our creative and technical
                capabilities work together instead of operating in separate
                silos.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Creative thinking",
                "Digital development",
                "Visual storytelling",
                "Business solutions",
                "Product engineering",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 font-mono text-[9px] uppercase tracking-wide text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] bg-[#F8F9FA] p-7 sm:p-8">
              <p className="text-4xl font-bold tracking-[-0.06em] sm:text-5xl">
                50<span className="text-[#50DC7D]">+</span>
              </p>
              <p className="mt-3 text-sm font-semibold">Clients served</p>
              <p className="mt-2 text-xs leading-6 text-neutral-500">
                Across web development, social media and graphic design.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#F8F9FA] p-7 sm:p-8">
              <p className="text-4xl font-bold tracking-[-0.06em] sm:text-5xl">
                04
              </p>
              <p className="mt-3 text-sm font-semibold">Cities reached</p>
              <p className="mt-2 text-xs leading-6 text-neutral-500">
                Working with businesses across Karnataka and Kerala.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#101211] p-7 text-white sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#50DC7D] text-[#101211]">
                <Sparkles size={19} />
              </div>
              <p className="mt-5 text-lg font-bold tracking-tight">
                Ideas into outcomes.
              </p>
              <p className="mt-2 text-xs leading-6 text-neutral-400">
                Creative thinking and practical execution, working together
                to make things happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">

          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                02 / Our capabilities
              </div>

              <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Different minds.
                <span className="block text-neutral-400">Shared ambition.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500 md:justify-self-end">
              Our work brings together creative and technical capabilities.
              From the first visual concept to the final product, we bring
              the right skills together to make the outcome stronger.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_.9fr]">
            <div className="overflow-hidden rounded-[28px] bg-white">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
                alt="Creative workspace for a collaborative team"
                className="h-[280px] w-full object-cover sm:h-[360px]"
              />

              <div className="p-6 sm:p-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400">
                  One collaborative team
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.045em] sm:text-3xl">
                  Creativity meets technology.
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-500">
                  We combine design, development, content and strategy to
                  deliver work that feels connected from beginning to end.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {teamCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.name}
                    className="group flex min-h-[125px] items-center gap-4 rounded-[20px] border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#50DC7D] hover:shadow-[0_12px_35px_rgba(16,18,17,0.05)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F3F2] transition-colors group-hover:bg-[#50DC7D]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {capability.name}
                      </p>
                      <p className="mt-1 text-[10px] text-neutral-400">
                        Creative expertise
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                03 / What we do
              </div>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Our services<span className="text-neutral-400">.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500">
              A connected range of creative and digital services to help
              your business build, communicate and grow.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.number}
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#50DC7D] hover:shadow-[0_18px_45px_rgba(16,18,17,0.07)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-[210px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045] sm:h-[230px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                      {service.number} / 07
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#101211] transition-colors group-hover:bg-[#50DC7D]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#209D48]">
                      {service.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.04em]">
                      {service.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-neutral-500">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F3F5F4] px-3 py-1.5 text-[9px] font-medium text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                      <span className="text-xs font-semibold">
                        Explore service
                      </span>
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPCOMING SERVICES */}
      <section className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">

          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                04 / What's next
              </div>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Expanding
                <span className="block text-neutral-400">the possibilities.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                Our curiosity goes beyond digital screens. We are expanding
                our creative capabilities into physical product design,
                modelling and development.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#50DC7D]/50 bg-[#50DC7D]/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-700">
                <Sparkles size={13} />
                New creative directions
              </div>
            </div>

            <div className="grid gap-3">
              {upcomingServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="group flex items-start gap-5 rounded-[22px] border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#50DC7D] sm:items-center sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1F3F2] transition-colors group-hover:bg-[#50DC7D]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[9px] text-neutral-400">
                          {service.number}
                        </span>
                        <span className="rounded-full bg-[#F3F5F4] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-neutral-500">
                          Upcoming
                        </span>
                      </div>

                      <h3 className="mt-2 text-lg font-bold tracking-[-0.035em]">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-500">
                        {service.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-neutral-300 transition-colors group-hover:text-[#209D48]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">

          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                05 / Our collaborations
              </div>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Better work,
                <span className="block text-neutral-400">together.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500 md:justify-self-end">
              Strong collaborations bring different perspectives and
              expertise to the table. We work alongside creative partners
              to deliver stronger media and content experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} on Instagram`}
                className="group flex flex-col gap-6 rounded-[26px] border border-neutral-200 bg-[#F8F9FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#50DC7D] hover:shadow-[0_15px_40px_rgba(16,18,17,0.06)] sm:flex-row sm:items-center sm:p-8"
              >
                <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-neutral-200 bg-white p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#209D48]">
                    {partner.role}
                  </span>

                  <h3 className="mt-2 text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                    {partner.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {partner.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold">
                    View Instagram
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-[22px] bg-[#101211] p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Creative collaboration makes a difference.
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                We are always open to working with people who bring great
                ideas and complementary skills.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#50DC7D] px-5 text-xs font-bold text-[#101211] transition-colors hover:bg-white sm:mt-0"
            >
              Collaborate with us
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#F8F9FA] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">

            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                06 / Where we've worked
              </div>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Local roots.
                <span className="block text-neutral-400">Wider reach.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                Our work has connected us with businesses and people across
                different cities, industries and creative communities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locations.map((location, index) => (
                <div
                  key={location}
                  className="group flex min-h-[105px] items-center justify-between rounded-[20px] border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#50DC7D] hover:shadow-[0_10px_30px_rgba(16,18,17,0.04)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F3F2] transition-colors group-hover:bg-[#50DC7D]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-base font-bold tracking-tight">
                        {location}
                      </p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                        Location 0{index + 1}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-neutral-300 transition-colors group-hover:text-[#209D48]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                07 / Our principles
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                What drives
                <span className="text-neutral-400"> our work.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-500">
              The principles behind how we think, create, communicate and
              deliver.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group flex min-h-[250px] flex-col rounded-[24px] border border-neutral-200 bg-[#F8F9FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#50DC7D] hover:bg-white hover:shadow-[0_15px_40px_rgba(16,18,17,0.05)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-400">
                      / {value.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-neutral-700 transition-colors group-hover:bg-[#50DC7D] group-hover:text-neutral-950">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="mt-9">
                    <h3 className="text-lg font-bold tracking-[-0.035em]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {value.description}
                    </p>
                  </div>

                  <div className="mt-auto flex justify-end pt-6">
                    <ArrowUpRight
                      size={17}
                      className="text-neutral-300 transition-colors group-hover:text-[#209D48]"
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
        className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">

            <div>
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                08 / How we work
              </div>

              <h2 className="text-4xl font-bold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                From first thought
                <span className="block text-neutral-400">to final result.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                A clear and collaborative process that keeps priorities
                focused and turns complex requirements into manageable
                stages.
              </p>

              <div className="mt-8 rounded-[22px] border border-neutral-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-neutral-400">
                    Our workflow
                  </span>
                  <Code2 size={18} className="text-neutral-500" />
                </div>

                <div className="mt-6 flex items-center gap-2">
                  {phases.map((phase, index) => (
                    <div key={phase.step} className="flex flex-1 items-center gap-2">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[10px] ${
                          index === 0
                            ? "bg-[#50DC7D] text-neutral-950"
                            : "bg-[#F1F3F2] text-neutral-500"
                        }`}
                      >
                        {phase.step}
                      </span>

                      {index < phases.length - 1 && (
                        <span className="h-px min-w-1 flex-1 bg-neutral-200" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
                  Understand / Design / Create / Deliver
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {phases.map((phase) => {
                const Icon = phase.icon;

                return (
                  <article
                    key={phase.step}
                    className="group flex gap-5 rounded-[22px] border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-[#50DC7D] sm:gap-6 sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F3F2] font-mono text-[10px] text-neutral-500 transition-colors group-hover:bg-[#50DC7D] group-hover:text-neutral-950">
                      {phase.step}
                    </div>

                    <div className="min-w-0 flex-1">
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

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-neutral-300 transition-colors group-hover:bg-[#F1F3F2] group-hover:text-neutral-900 sm:flex">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-4 py-16 sm:px-7 sm:py-20 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] bg-[#101211] px-6 py-12 text-white sm:rounded-[32px] sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-16 lg:py-16">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10"
          />

          <div className="relative max-w-3xl">
            <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#50DC7D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
              Have something in mind?
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Your next idea could
              <span className="text-neutral-400"> start here.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
              Tell us what you want to create. Let's explore the possibilities
              and turn your idea into something meaningful.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0 lg:shrink-0">
            <Link
              to="/contact"
              className="group inline-flex min-h-13 items-center gap-5 rounded-full bg-[#50DC7D] px-7 py-4 text-sm font-bold text-neutral-950 transition-all duration-300 hover:bg-white"
            >
              Start a conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
