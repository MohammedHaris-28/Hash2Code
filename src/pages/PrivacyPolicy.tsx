import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Database,
  Lock,
  UserCheck,
  FileText,
} from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "October 1, 2026";

  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-neutral-950 antialiased selection:bg-[#50DC7D]/30">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Hero */}
      <header className="relative border-b border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-16">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="mb-6 inline-flex items-center gap-2 border border-neutral-200 bg-neutral-50 px-3 py-2">
                <span className="h-2 w-2 bg-[#50DC7D]" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600">
                  Legal / Privacy
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(2.8rem,6.4vw,6rem)] font-bold leading-[0.98] tracking-[-0.065em]">
                Privacy <span className="text-neutral-400">Policy.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                We respect your privacy and aim to be transparent about how
                information is handled when you interact with #2Code.
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 sm:text-xs">
                Last updated: {lastUpdated}
              </p>
            </div>

            <div className="hidden border-l border-neutral-200 pl-6 lg:col-span-4 lg:block lg:pb-1">
              <ShieldCheck className="mb-4 h-7 w-7 text-neutral-700" />
              <p className="max-w-xs text-sm leading-7 text-neutral-500">
                Clear information about the data you share, how it may be used,
                and how to contact us with privacy questions.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
              Hash2Code Team
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
              Privacy / Data / Transparency
            </span>
          </div>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12 2xl:px-16">
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

      {/* Policy body: wider desktop layout reduces excessive side whitespace */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 2xl:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.6fr)] lg:gap-14 xl:gap-20">
            <aside className="lg:sticky lg:top-8">
              <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Policy guide
              </p>
              <h2 className="max-w-lg text-3xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-4xl">
                Your information.{" "}
                <span className="text-neutral-400">Handled responsibly.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                This page describes how #2Code handles information shared
                through its website and related digital services.
              </p>
              <div className="mt-7 border-l-2 border-[#50DC7D] bg-[#F8F9FA] px-4 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
                  Need help?
                </p>
                <a
                  href="mailto:hash2codeteam@gmail.com"
                  className="mt-2 inline-flex items-center gap-2 break-all text-sm font-semibold text-neutral-900 transition-colors hover:text-[#26964B]"
                >
                  hash2codeteam@gmail.com
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </aside>

            <div className="min-w-0 border-t border-neutral-200">
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
                <p>Information provided to us may be used for legitimate business purposes, including:</p>
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
                <p>We do not sell, rent, or trade your personal information to third parties.</p>
                <p>Information may be disclosed where reasonably necessary to:</p>
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

              <PolicySection number="12" title="Contact Us">
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or the handling of your information, please
                  contact #2Code.
                </p>
                <div className="mt-5 flex items-start gap-4 border border-neutral-200 bg-[#F8F9FA] p-4 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-white">
                    <Mail className="h-5 w-5 text-neutral-700" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-neutral-400">Email</p>
                    <a href="mailto:hash2codeteam@gmail.com" className="break-all text-sm font-semibold text-neutral-900 transition-colors hover:text-[#26964B] sm:text-base">
                      hash2codeteam@gmail.com
                    </a>
                    <p className="mt-2 text-xs text-neutral-500">#2Code — Digital Technology Studio</p>
                  </div>
                </div>
              </PolicySection>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-6">
            <p className="max-w-4xl text-xs leading-6 text-neutral-400 sm:text-sm">
              This Privacy Policy is provided for general informational
              purposes and should be reviewed and adapted to your specific
              business operations and applicable legal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 2xl:px-16">
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} #2Code. All rights reserved.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-950">
            Return to #2Code <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </main>
  );
};

interface OverviewItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  last?: boolean;
}

const OverviewItem = ({ icon, title, description, last = false }: OverviewItemProps) => (
  <div className={`flex items-start gap-4 border-b border-neutral-200 py-5 sm:py-6 lg:border-b-0 ${last ? "" : "lg:border-r lg:pr-6"} sm:pr-5 lg:my-5 lg:py-2 ${last ? "lg:pl-6" : "lg:pl-0"}`}>
    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white text-neutral-700">{icon}</div>
    <div>
      <h2 className="mb-1.5 text-sm font-bold text-neutral-900">{title}</h2>
      <p className="max-w-md text-xs leading-6 text-neutral-500 sm:text-sm">{description}</p>
    </div>
  </div>
);

interface PolicySectionProps {
  number: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const PolicySection = ({ number, title, icon, children }: PolicySectionProps) => (
  <section className="border-b border-neutral-200 py-8 last:border-b-0 sm:py-9">
    <div className="mb-4 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-[#F8F9FA] text-neutral-700">
        {icon ?? <span className="font-mono text-xs font-semibold text-neutral-500">{number}</span>}
      </div>
      <div className="min-w-0 pt-0.5">
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400">Section {number}</span>
        <h2 className="mt-1 text-xl font-bold leading-tight tracking-[-0.035em] text-neutral-950 sm:text-2xl">{title}</h2>
      </div>
    </div>
    <div className="space-y-4 text-sm leading-7 text-neutral-600 sm:text-[15px]">
      {children}
    </div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="my-4 space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-[#50DC7D]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default PrivacyPolicy;
