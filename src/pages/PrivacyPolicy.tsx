
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Database,
  Lock,
  UserCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "October 1, 2026";

  return (
    <main className="h2c-privacy min-h-screen overflow-hidden bg-[#F8F9FA] text-[#101211] antialiased selection:bg-[#50DC7D]/30">

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-black/[0.08] bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1480px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-14 lg:pb-24 lg:pt-36 xl:px-20">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 transition-colors hover:text-[#26964B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#50DC7D]" />
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.17em] text-neutral-600">
                  Legal / Privacy
                </span>
              </div>

              <h1 className="max-w-5xl font-display text-[clamp(3.2rem,7.5vw,7rem)] font-bold leading-[0.94] tracking-[-0.075em]">
                Privacy
                <br />
                <span className="text-neutral-400">matters.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                We respect your privacy. Here's how information is handled
                when you interact with #2Code, contact our team, or use
                our digital services.
              </p>

              <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[10px]">
                Last updated: {lastUpdated}
              </p>
            </div>

            <div className="hidden border-l border-black/[0.09] pl-7 lg:col-span-4 lg:block lg:pb-2">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.08] bg-[#F8F9FA]">
                <ShieldCheck className="h-5 w-5 text-neutral-700" />
              </div>

              <p className="max-w-xs text-sm leading-7 text-neutral-500">
                Clear information about the data you share, how it may
                be used, and the choices available to you.
              </p>

              <a
                href="mailto:hash2codeteam@gmail.com"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 transition-colors hover:text-[#26964B]"
              >
                Contact about privacy
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-black/[0.08] pt-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
              #2Code Digital Studio
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
              Privacy / Data / Transparency
            </span>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="border-b border-black/[0.08] bg-[#F8F9FA]">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-14 xl:px-20">
          <OverviewItem
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Privacy focused"
            description="We aim to collect only information reasonably needed to respond to enquiries and provide requested services."
          />

          <OverviewItem
            icon={<Lock className="h-5 w-5" />}
            title="No sale of personal data"
            description="We do not sell, rent, or trade personal information to third parties."
          />

          <OverviewItem
            icon={<UserCheck className="h-5 w-5" />}
            title="Your choices"
            description="You can contact us with questions or requests about information you have shared."
            last
          />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden bg-[#101211] py-4">
        <div className="flex w-max animate-privacy-marquee items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <React.Fragment key={index}>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
                Responsible data handling
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
                Transparency
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
                Your privacy matters
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto w-full max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28 xl:px-20">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.6fr)] lg:gap-16 xl:gap-24">

            {/* LEFT INFORMATION PANEL */}
            <aside className="lg:sticky lg:top-28">
              <p className="mb-4 flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                Privacy information
              </p>

              <h2 className="max-w-lg font-display text-4xl font-bold leading-[1.04] tracking-[-0.065em] sm:text-5xl">
                Your information.
                <span className="text-neutral-400">
                  {" "}Handled responsibly.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                This page describes how #2Code handles information
                shared through its website and related digital services.
              </p>

              <div className="mt-8 rounded-[22px] border border-black/[0.08] bg-white p-5 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8F9FA]">
                  <Mail className="h-5 w-5 text-neutral-700" />
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                  Need help?
                </p>

                <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.04em]">
                  We're here to help.
                </h3>

                <p className="mt-2 text-xs leading-6 text-neutral-500">
                  Contact our team for privacy-related questions
                  or requests.
                </p>

                <a
                  href="mailto:hash2codeteam@gmail.com"
                  className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-xs font-semibold text-neutral-900 transition-colors hover:text-[#26964B]"
                >
                  hash2codeteam@gmail.com
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-[18px] border border-black/[0.08] bg-white px-4 py-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#26964B]" />
                <p className="text-xs leading-6 text-neutral-500">
                  We aim to handle information responsibly and
                  transparently.
                </p>
              </div>
            </aside>

            {/* POLICY SECTIONS */}
            <div className="min-w-0 rounded-[26px] border border-black/[0.08] bg-white px-5 sm:px-8 lg:px-10">
              <PolicySection
                number="01"
                icon={<FileText className="h-5 w-5" />}
                title="About this Privacy Policy"
              >
                <p>
                  This Privacy Policy explains how <strong>#2Code</strong>{" "}
                  ("#2Code", "we", "us", or "our") handles information
                  submitted through our website and related digital services.
                </p>
                <p>
                  #2Code provides website development, application development,
                  software solutions, product development, design, and related
                  digital technology services.
                </p>
              </PolicySection>

              <PolicySection
                number="02"
                icon={<Database className="h-5 w-5" />}
                title="Information We Collect"
              >
                <p>
                  Our website is primarily intended to provide information
                  about our business, services, projects, and contact options.
                  When you voluntarily contact us or submit an enquiry, we may
                  receive information such as:
                </p>

                <BulletList
                  items={[
                    "Name",
                    "Email address",
                    "Phone number or WhatsApp number",
                    "Business or organization name",
                    "Project or service requirements",
                    "Other information that you voluntarily provide in your message",
                  ]}
                />

                <p>
                  We do not intentionally collect sensitive personal
                  information through this website unless it is voluntarily
                  provided by you and reasonably necessary for the service
                  requested.
                </p>
              </PolicySection>

              <PolicySection
                number="03"
                icon={<UserCheck className="h-5 w-5" />}
                title="How We Use Your Information"
              >
                <p>
                  Information provided to us may be used for legitimate
                  business purposes, including:
                </p>

                <BulletList
                  items={[
                    "Responding to enquiries and consultation requests",
                    "Understanding your project requirements",
                    "Providing quotations and service information",
                    "Communicating about ongoing or requested services",
                    "Providing customer support",
                    "Managing business and client communications",
                    "Improving our website and services",
                  ]}
                />

                <p>
                  We do not use submitted contact information to send unrelated
                  promotional communications without an appropriate basis or
                  permission where required by applicable law.
                </p>
              </PolicySection>

              <PolicySection
                number="04"
                icon={<Lock className="h-5 w-5" />}
                title="Data Protection & Security"
              >
                <p>
                  We take reasonable technical and organizational measures to
                  protect information submitted through our website from
                  unauthorized access, misuse, alteration, or disclosure.
                </p>

                <p>
                  However, no internet transmission or electronic storage
                  system can be guaranteed to be completely secure. We therefore
                  cannot guarantee absolute security of information transmitted
                  over the internet.
                </p>
              </PolicySection>

              <PolicySection number="05" title="Sharing of Information">
                <p>
                  We do not sell, rent, or trade your personal information
                  to third parties.
                </p>

                <p>
                  Information may be disclosed where reasonably necessary to:
                </p>

                <BulletList
                  items={[
                    "Provide a service you have requested",
                    "Operate required technical infrastructure",
                    "Comply with applicable laws or legal obligations",
                    "Protect our rights, property, or security",
                    "Prevent fraud, abuse, or unauthorized activity",
                  ]}
                />

                <p>
                  Where third-party technology or infrastructure is required to
                  operate a particular service, information handling may also be
                  subject to that provider's privacy policy and terms.
                </p>
              </PolicySection>

              <PolicySection number="06" title="Cookies & Website Technologies">
                <p>
                  Our website may use basic technical technologies such as
                  cookies, local storage, analytics tools, or similar
                  technologies where required for functionality, security,
                  performance measurement, or improving the website experience.
                </p>

                <p>
                  These technologies may collect technical information such as
                  browser type, device type, approximate location, referring
                  pages, and website usage information.
                </p>
              </PolicySection>

              <PolicySection number="07" title="Third-Party Links">
                <p>
                  Our website may contain links to third-party websites,
                  platforms, social media profiles, or external services.
                </p>

                <p>
                  #2Code is not responsible for the privacy practices, content,
                  security, or policies of external websites. We recommend
                  reviewing the privacy policy of any third-party service you
                  choose to visit.
                </p>
              </PolicySection>

              <PolicySection number="08" title="Data Retention">
                <p>
                  We retain information only for as long as reasonably
                  necessary for the purpose for which it was collected,
                  including business communication, service delivery,
                  contractual requirements, legal obligations, and dispute
                  resolution.
                </p>

                <p>
                  When information is no longer reasonably required, we may
                  delete or securely dispose of it, subject to applicable legal
                  or business record requirements.
                </p>
              </PolicySection>

              <PolicySection number="09" title="Your Privacy Rights">
                <p>
                  Depending on applicable law, you may have rights relating to
                  your personal information, including the ability to:
                </p>

                <BulletList
                  items={[
                    "Request information about personal data we hold about you",
                    "Request correction of inaccurate information",
                    "Request deletion of information where legally applicable",
                    "Withdraw consent where processing is based on consent",
                    "Ask questions about how your information is handled",
                  ]}
                />

                <p>
                  To make a privacy-related request, please contact us using
                  the details provided below.
                </p>
              </PolicySection>

              <PolicySection number="10" title="Children's Privacy">
                <p>
                  Our website and services are intended for general business
                  and professional use. We do not knowingly request or
                  intentionally collect personal information from children for
                  purposes unrelated to our services.
                </p>
              </PolicySection>

              <PolicySection number="11" title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our services, technology, legal
                  requirements, or business practices.
                </p>

                <p>
                  Any updated version will be published on this page with a
                  revised "Last updated" date.
                </p>
              </PolicySection>

              <PolicySection
                number="12"
                icon={<Mail className="h-5 w-5" />}
                title="Contact Us"
              >
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or the handling of your information, please
                  contact #2Code.
                </p>

                <div className="mt-5 flex items-start gap-4 rounded-[18px] border border-black/[0.08] bg-[#F8F9FA] p-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-white">
                    <Mail className="h-5 w-5 text-neutral-700" />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-neutral-400">
                      Email
                    </p>

                    <a
                      href="mailto:hash2codeteam@gmail.com"
                      className="break-all text-sm font-semibold text-neutral-900 transition-colors hover:text-[#26964B] sm:text-base"
                    >
                      hash2codeteam@gmail.com
                    </a>

                    <p className="mt-2 text-xs text-neutral-500">
                      #2Code — Digital Technology Studio
                    </p>
                  </div>
                </div>
              </PolicySection>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-10 border-t border-black/[0.08] pt-6">
            <p className="max-w-4xl text-xs leading-6 text-neutral-400 sm:text-sm">
              This Privacy Policy is provided for general informational
              purposes and should be reviewed and adapted to your specific
              business operations and applicable legal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="relative overflow-hidden rounded-[28px] bg-[#101211]">
            <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-8 -top-20 h-[300px] w-[300px] rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-20 -top-10 h-[180px] w-[180px] rounded-full bg-[#50DC7D]/10 blur-[70px]" />

            <div className="absolute inset-y-0 left-0 w-1 bg-[#50DC7D]" />

            <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-12 md:items-end md:px-12 md:py-16 lg:px-16">
              <div className="md:col-span-8">
                <p className="mb-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#50DC7D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#50DC7D]" />
                  Questions about privacy?
                </p>

                <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl">
                  We're happy to
                  <span className="text-neutral-500"> hear from you.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                  If you have a question about how your information is
                  handled, reach out to our team.
                </p>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <a
                  href="mailto:hash2codeteam@gmail.com"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#50DC7D] px-6 py-4 text-sm font-bold text-[#101211] transition-all duration-300 hover:bg-white sm:w-auto"
                >
                  Contact our team
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

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors hover:text-[#50DC7D]"
              >
                Return to home
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.08] bg-[#F8F9FA]">
        <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14 xl:px-20">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} #2Code. All rights reserved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-950"
          >
            Return to #2Code
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>

      {/* PAGE-SCOPED STYLES */}
      <style>{`
        .h2c-privacy {
          --privacy-green: #50DC7D;
        }

        .h2c-privacy .font-display {
          font-family: "Sora", sans-serif;, "Inter", sans-serif;
        }

        .h2c-privacy .font-mono {
          font-family: "DM Mono", monospace;
        }

        @keyframes privacy-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .h2c-privacy .animate-privacy-marquee {
          animation: privacy-marquee 32s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .h2c-privacy .animate-privacy-marquee {
            animation: none;
          }

          .h2c-privacy *,
          .h2c-privacy *::before,
          .h2c-privacy *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

/* OVERVIEW ITEM */

interface OverviewItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  last?: boolean;
}

const OverviewItem = ({
  icon,
  title,
  description,
  last = false,
}: OverviewItemProps) => (
  <div
    className={`flex items-start gap-4 border-b border-black/[0.08] py-6 sm:pr-5 lg:my-5 lg:border-b-0 lg:py-2 ${
      last
        ? "lg:pl-6"
        : "lg:border-r lg:pr-6"
    }`}
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-white text-neutral-700">
      {icon}
    </div>

    <div>
      <h2 className="mb-1.5 text-sm font-bold text-neutral-900">
        {title}
      </h2>

      <p className="max-w-md text-xs leading-6 text-neutral-500 sm:text-sm">
        {description}
      </p>
    </div>
  </div>
);

/* POLICY SECTION */

interface PolicySectionProps {
  number: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const PolicySection = ({
  number,
  title,
  icon,
  children,
}: PolicySectionProps) => (
  <section className="border-b border-black/[0.08] py-8 last:border-b-0 sm:py-9">
    <div className="mb-5 flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-[#F8F9FA] text-neutral-700">
        {icon ?? (
          <span className="font-mono text-xs font-semibold text-neutral-500">
            {number}
          </span>
        )}
      </div>

      <div className="min-w-0 pt-0.5">
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400">
          Section {number}
        </span>

        <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-2xl">
          {title}
        </h2>
      </div>
    </div>

    <div className="space-y-4 text-sm leading-7 text-neutral-600 sm:text-[15px]">
      {children}
    </div>
  </section>
);

/* BULLET LIST */

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="my-4 space-y-3">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3"
      >
        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#50DC7D]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default PrivacyPolicy;
