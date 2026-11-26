
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  FileText,
  BriefcaseBusiness,
  CreditCard,
  Code2,
  Users,
  RefreshCw,
  LockKeyhole,
  AlertTriangle,
  Scale,
} from "lucide-react";

const TermsOfService: React.FC = () => {
  const lastUpdated = "October 20, 2026";

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F8F9FA] font-sans text-[#101211] antialiased selection:bg-[#50DC7D]/30">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Hero */}
      <header className="relative z-10 border-b border-[#101211]/10 bg-white">
        <div className="mx-auto w-full max-w-[1480px] px-5 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-12 lg:pb-16 2xl:px-16">
          <Link
            to="/"
            className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[#101211]/10 bg-[#F8F9FA] px-4 py-2.5 text-xs font-semibold text-neutral-600 transition-all hover:border-[#50DC7D] hover:bg-[#50DC7D]/10 hover:text-[#101211] sm:mb-16"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#101211]/10 bg-[#F8F9FA] px-3.5 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#50DC7D] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#50DC7D]" />
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#555B57]">
                  Legal / Service Terms
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3rem,7vw,6.8rem)] font-bold leading-[0.94] tracking-[-0.075em]">
                Terms of
                <br />
                <span className="text-[#A4AAA6]">Service.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#686E69] sm:text-base sm:leading-8">
                These terms explain the conditions that apply when you visit
                #2Code’s website, contact us, or engage us for digital technology
                services.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#858B86]">
                  Last updated: {lastUpdated}
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-[#50DC7D] sm:block" />
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#858B86]">
                  15 sections
                </span>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <div className="rounded-[26px] border border-[#101211]/10 bg-[#F8F9FA] p-7 xl:p-8">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#101211]/10 bg-white">
                  <ShieldCheck className="h-6 w-6 text-[#303A33]" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#858B86]">
                  Our commitment
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 tracking-[-0.035em] text-[#101211]">
                  Clear expectations.
                  <br />
                  Better partnerships.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#737A74]">
                  Transparent conditions for deliverables, milestones,
                  approvals, payments, and ongoing support.
                </p>
                <div className="mt-7 h-1 w-14 rounded-full bg-[#50DC7D]" />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#101211]/10 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#858B86]">
              Hash2Code Team
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#858B86]">
              Terms / Conditions / Services
            </span>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="relative z-10 border-b border-[#101211]/10 bg-white">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-2 sm:px-8 sm:py-7 lg:px-12 2xl:px-16">
          <OverviewItem
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            title="Project-specific scope"
            description="The approved quotation, proposal, statement of work, or written agreement defines the exact deliverables, fees, milestones, and timeline."
          />
          <OverviewItem
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Clear responsibilities"
            description="We set clear expectations for both parties, including client approvals, payments, supplied materials, and ongoing support."
          />
        </div>
      </section>

      {/* Terms body */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-[1480px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 2xl:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.6fr)] lg:gap-14 xl:gap-20">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-8">
              <div className="rounded-[26px] border border-[#101211]/10 bg-white p-6 sm:p-7">
                <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#858B86]">
                  Terms guide
                </p>

                <h2 className="max-w-lg text-3xl font-bold leading-[1.08] tracking-[-0.06em] sm:text-4xl">
                  Our agreement.
                  <span className="text-[#A4AAA6]">
                    {" "}Transparent & fair.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#737A74]">
                  This page outlines the standard legal and service conditions
                  governing professional engagements with #2Code.
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#101211]/10 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#858B86]">
                    Document
                  </span>
                  <span className="rounded-full bg-[#50DC7D]/15 px-3 py-1.5 font-mono text-[10px] font-semibold text-[#287B42]">
                    TERMS / 2026
                  </span>
                </div>

                <div className="mt-7 rounded-2xl border border-[#50DC7D]/30 bg-[#F6FBF7] p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#858B86]">
                    Need help?
                  </p>
                  <a
                    href="mailto:hash2codeteam@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 break-all text-sm font-semibold text-[#101211] transition-colors hover:text-[#26964B]"
                  >
                    hash2codeteam@gmail.com
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="min-w-0 overflow-hidden rounded-[26px] border border-[#101211]/10 bg-white px-5 sm:px-8 lg:px-10">
              <TermsSection
                number="01"
                icon={<FileText className="h-5 w-5" />}
                title="Acceptance and scope of these terms"
              >
                <p>
                  These Terms of Service (“Terms”) apply to the website, enquiries,
                  proposals, and digital services offered by <strong>#2Code</strong>
                  (“#2Code”, “we”, “us”, or “our”), a digital technology studio
                  providing website development, application development, software
                  solutions, product development, design, and related services.
                </p>
                <p>
                  By using our website, contacting us about a service, approving a
                  quotation, making a payment, or authorising work to begin, you
                  acknowledge these Terms to the extent applicable to that interaction.
                </p>
                <p>
                  A signed contract, approved quotation, proposal, invoice, or other
                  written project agreement may contain additional terms. If there is
                  a conflict, the specific written project agreement will take
                  precedence for that project.
                </p>
              </TermsSection>

              <TermsSection
                number="02"
                icon={<Code2 className="h-5 w-5" />}
                title="Services and project scope"
              >
                <p>
                  The services we provide depend on the project agreed with you and
                  may include website design and development, mobile or web
                  applications, software and product development, UI/UX design,
                  integrations, deployment, maintenance, and related technical work.
                </p>
                <p>
                  Deliverables, included features, supported platforms, integrations,
                  revisions, milestones, delivery dates, and exclusions should be
                  described in the applicable quotation or written agreement. Any
                  feature, service, integration, page, revision, or task not included
                  in the agreed scope may require a separate estimate and written
                  approval before work begins.
                </p>
              </TermsSection>

              <TermsSection
                number="03"
                icon={<CreditCard className="h-5 w-5" />}
                title="Quotes, pricing, and payments"
              >
                <p>
                  Prices, taxes, payment milestones, deposits, and due dates will be
                  stated in the relevant quotation, invoice, or written agreement.
                  Unless otherwise agreed in writing, a quotation is an estimate of
                  the described scope.
                </p>
                <BulletList
                  items={[
                    "Work may begin after the required advance payment and written approval have been received.",
                    "Invoices are payable using the payment details stated on the official invoice. If payment details appear inconsistent, contact us to verify them first.",
                    "The client is responsible for applicable taxes, bank charges, gateway fees, subscriptions, licences, hosting, domains, and other third-party costs unless expressly included.",
                    "Where a payment schedule is agreed, later milestones become payable accordingly. We may pause work or withhold delivery when an invoice is overdue.",
                    "Additional work, change requests, new features, or material revisions outside the agreed scope may be charged separately.",
                  ]}
                />
                <p>
                  Payments are not automatically refundable once work has been
                  performed or costs have been committed, subject to applicable law
                  and the specific project agreement.
                </p>
              </TermsSection>

              <TermsSection
                number="04"
                icon={<Users className="h-5 w-5" />}
                title="Client responsibilities and approvals"
              >
                <p>
                  You agree to provide accurate project information, timely feedback,
                  required approvals, and the content or access reasonably necessary
                  for the agreed work.
                </p>
                <BulletList
                  items={[
                    "You confirm that you own or have permission to use all materials, data, branding, images, fonts, and other assets you supply.",
                    "You are responsible for reviewing deliverables, checking factual content, and confirming that the final material meets your requirements.",
                    "Delays in providing content, approvals, access, or decisions may affect milestones and delivery dates.",
                    "You must not ask us to create, publish, or integrate material that is unlawful, fraudulent, infringing, or misleading.",
                  ]}
                />
              </TermsSection>

              <TermsSection
                number="05"
                title="Revisions, change requests, and delivery"
              >
                <p>
                  Any included revision rounds or review windows will be stated in
                  the project agreement. A revision generally means an adjustment to
                  an agreed deliverable; a new feature or substantial redesign after
                  approval is treated as additional scope.
                </p>
                <p>
                  Delivery dates are estimates unless explicitly guaranteed in
                  writing. We make reasonable efforts to meet agreed milestones,
                  subject to client delays or unforeseen technical factors.
                </p>
              </TermsSection>

              <TermsSection
                number="06"
                icon={<LockKeyhole className="h-5 w-5" />}
                title="Intellectual property and project handover"
              >
                <p>
                  Each party retains ownership of intellectual property it owned
                  before a project. #2Code retains rights in its pre-existing tools,
                  reusable components, and development methods, while the client
                  retains rights to client-supplied materials.
                </p>
                <p>
                  Ownership or licensing of project-specific deliverables and source
                  code will be governed by the quotation or written project agreement
                  upon full payment of agreed fees.
                </p>
              </TermsSection>

              <TermsSection
                number="07"
                icon={<RefreshCw className="h-5 w-5" />}
                title="Maintenance, support, and bug fixes"
              >
                <p>
                  Maintenance, hosting management, updates, backups, and ongoing support
                  are included only where specified in the project agreement or a
                  separate support plan.
                </p>
                <p>
                  A bug fix covers a reproducible defect causing the delivered work
                  to fail to operate according to specifications, excluding issues
                  caused by unauthorized modifications or third-party changes.
                </p>
              </TermsSection>

              <TermsSection
                number="08"
                title="Third-party services and external platforms"
              >
                <p>
                  Projects may depend on third-party services like hosting providers,
                  payment gateways, domain registrars, and APIs. These services
                  remain subject to their own terms and availability. We do not
                  control third-party outages, policy changes, or price adjustments.
                </p>
              </TermsSection>

              <TermsSection
                number="09"
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Privacy, security, and data"
              >
                <p>
                  Our handling of personal information is detailed in our Privacy
                  Policy. While we take reasonable technical precautions, no system
                  can be guaranteed completely secure, and clients remain responsible
                  for maintaining their own backups and data records.
                </p>
              </TermsSection>

              <TermsSection
                number="10"
                icon={<AlertTriangle className="h-5 w-5" />}
                title="Acceptable use and prohibited conduct"
              >
                <p>
                  You agree to use our website and services only for lawful purposes.
                  Attempts to disrupt infrastructure, bypass security controls,
                  distribute malware, or engage in fraudulent activities are strictly
                  prohibited and may result in immediate suspension.
                </p>
              </TermsSection>

              <TermsSection
                number="11"
                icon={<Scale className="h-5 w-5" />}
                title="Disclaimers and limitation of liability"
              >
                <p>
                  We perform services with reasonable care and skill but do not
                  guarantee specific business outcomes, sales, or search rankings
                  unless explicitly agreed in writing. Liability is limited to the
                  maximum extent permitted by applicable law.
                </p>
              </TermsSection>

              <TermsSection
                number="12"
                title="Suspension, cancellation, and termination"
              >
                <p>
                  Either party may request to pause or end a project in accordance
                  with the project agreement. On cancellation, the client remains
                  responsible for fees corresponding to completed work and
                  committed expenses.
                </p>
              </TermsSection>

              <TermsSection
                number="13"
                title="Changes to these Terms"
              >
                <p>
                  We may update these Terms from time to time. Revised versions will
                  be published on this page with a revised "Last updated" date.
                </p>
              </TermsSection>

              <TermsSection
                number="14"
                title="Governing law and dispute resolution"
              >
                <p>
                  These Terms are interpreted in accordance with the laws of India.
                  In case of disputes, both parties agree to first attempt resolution
                  through good-faith informal discussions.
                </p>
              </TermsSection>

              <TermsSection
                number="15"
                icon={<Mail className="h-5 w-5" />}
                title="Contact Us"
              >
                <p>
                  If you have any questions or concerns regarding these Terms of
                  Service, please contact us directly.
                </p>

                <div className="mt-5 flex items-start gap-4 rounded-2xl border border-[#101211]/10 bg-[#F8F9FA] p-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#101211]/10 bg-white">
                    <Mail className="h-5 w-5 text-[#303A33]" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#858B86]">
                      Email
                    </p>
                    <a
                      href="mailto:hash2codeteam@gmail.com"
                      className="break-all text-sm font-semibold text-[#101211] transition-colors hover:text-[#26964B] sm:text-base"
                    >
                      hash2codeteam@gmail.com
                    </a>
                    <p className="mt-2 text-xs text-[#858B86]">
                      #2Code — Digital Technology Studio
                    </p>
                  </div>
                </div>
              </TermsSection>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-[22px] border border-[#101211]/10 bg-white p-5 sm:mt-14 sm:p-7">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8F9FA]">
                <FileText className="h-4 w-4 text-[#747B75]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#101211]">
                  Important information
                </p>
                <p className="mt-2 max-w-4xl text-xs leading-6 text-[#858B86] sm:text-sm">
                  These Terms of Service are provided for general informational
                  purposes and should be reviewed and adapted to your specific
                  business operations and applicable legal requirements. For
                  information about data privacy, please review our{" "}
                  <Link
                    to="/privacy-policy"
                    className="font-semibold text-[#287B42] underline decoration-[#50DC7D] underline-offset-4 transition-colors hover:text-[#101211]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#101211]/10 bg-white">
        <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 2xl:px-16">
          <div>
            <p className="text-xs font-medium text-[#555B57]">
              © {new Date().getFullYear()} #2Code. All rights reserved.
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#A0A6A1]">
              Digital Technology Studio
            </p>
          </div>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[#101211]/10 px-4 py-2.5 text-xs font-semibold text-[#555B57] transition-all hover:border-[#50DC7D] hover:bg-[#50DC7D]/10 hover:text-[#101211] sm:self-auto"
          >
            Return to #2Code
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
}

const OverviewItem = ({
  icon,
  title,
  description,
}: OverviewItemProps) => (
  <div className="flex items-start gap-4 rounded-[22px] border border-[#101211]/10 bg-[#F8F9FA] p-5 sm:p-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#101211]/10 bg-white text-[#303A33]">
      {icon}
    </div>
    <div>
      <h2 className="mb-1.5 text-sm font-bold text-[#101211]">{title}</h2>
      <p className="max-w-md text-xs leading-6 text-[#737A74] sm:text-sm">
        {description}
      </p>
    </div>
  </div>
);

interface TermsSectionProps {
  number: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const TermsSection = ({
  number,
  title,
  icon,
  children,
}: TermsSectionProps) => (
  <section className="border-b border-[#101211]/10 py-8 last:border-b-0 sm:py-10">
    <div className="mb-5 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#101211]/10 bg-[#F8F9FA] text-[#303A33]">
        {icon ?? (
          <span className="font-mono text-xs font-semibold text-[#737A74]">
            {number}
          </span>
        )}
      </div>

      <div className="min-w-0 pt-0.5">
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-[#A0A6A1]">
          Section {number}
        </span>
        <h2 className="mt-1 text-xl font-bold leading-tight tracking-[-0.045em] text-[#101211] sm:text-2xl">
          {title}
        </h2>
      </div>
    </div>

    <div className="space-y-4 pl-0 text-sm leading-7 text-[#626963] sm:pl-14 sm:text-[15px]">
      {children}
    </div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="my-4 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#50DC7D]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default TermsOfService;
