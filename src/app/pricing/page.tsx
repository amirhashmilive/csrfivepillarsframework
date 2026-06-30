import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";
import { SectionHeading, CTASection } from "@/components/section-components";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For small organizations and pilots",
    href: "/demo/",
    cta: "Start Free",
    features: {
      users: "1 user",
      selfAssessment: true,
      ceiCalculator: true,
      basicDashboard: true,
      allModules: false,
      implementingAgencies: "—",
      quarterlyAssessments: false,
      reportGeneration: false,
      benchmarking: false,
      apiAccess: false,
      dedicatedSupport: false,
      certificationEligibility: false,
    },
  },
  {
    name: "Professional",
    price: "$499",
    period: "/mo",
    description: "For mid-size organizations",
    href: "/contact/",
    cta: "Start Trial",
    popular: true,
    features: {
      users: "5 users",
      selfAssessment: true,
      ceiCalculator: true,
      basicDashboard: true,
      allModules: true,
      implementingAgencies: "1 agency",
      quarterlyAssessments: true,
      reportGeneration: true,
      benchmarking: false,
      apiAccess: false,
      dedicatedSupport: false,
      certificationEligibility: true,
    },
  },
  {
    name: "Enterprise",
    price: "$2,499",
    period: "/mo",
    description: "For large organizations",
    href: "/contact/",
    cta: "Contact Sales",
    features: {
      users: "25 users",
      selfAssessment: true,
      ceiCalculator: true,
      basicDashboard: true,
      allModules: true,
      implementingAgencies: "10 agencies",
      quarterlyAssessments: true,
      reportGeneration: true,
      benchmarking: true,
      apiAccess: true,
      dedicatedSupport: true,
      certificationEligibility: true,
    },
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    description: "For governments & multinationals",
    href: "/contact/",
    cta: "Contact Sales",
    features: {
      users: "Unlimited",
      selfAssessment: true,
      ceiCalculator: true,
      basicDashboard: true,
      allModules: true,
      implementingAgencies: "Unlimited",
      quarterlyAssessments: true,
      reportGeneration: true,
      benchmarking: true,
      apiAccess: true,
      dedicatedSupport: true,
      certificationEligibility: true,
      whiteLabel: true,
      customIntegrations: true,
    },
  },
];

const featureRows = [
  { key: "users", label: "Users" },
  { key: "selfAssessment", label: "Self-assessment" },
  { key: "ceiCalculator", label: "CEI Calculator" },
  { key: "basicDashboard", label: "Basic Dashboard" },
  { key: "allModules", label: "All 5 Modules" },
  { key: "implementingAgencies", label: "Implementing Agencies" },
  { key: "quarterlyAssessments", label: "Quarterly Assessments" },
  { key: "reportGeneration", label: "Report Generation" },
  { key: "benchmarking", label: "Benchmarking" },
  { key: "apiAccess", label: "API Access" },
  { key: "dedicatedSupport", label: "Dedicated Support" },
  { key: "certificationEligibility", label: "Certification Eligibility" },
  { key: "whiteLabel", label: "White-Label" },
  { key: "customIntegrations", label: "Custom Integrations" },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Scales with your verification needs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From free self-assessment to enterprise-wide deployment. No hidden fees.
            Cancel anytime.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border bg-card p-6 ${
                  tier.popular ? "border-foreground shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{tier.description}</p>
                <div className="mt-4">
                  <span className="font-serif text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <Link
                  href={tier.href}
                  className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                    tier.popular
                      ? "bg-foreground text-background hover:opacity-90"
                      : "border hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Full feature comparison" />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-left text-sm font-semibold">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="py-4 px-4 text-center text-sm font-semibold">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="py-4 text-sm font-medium">{row.label}</td>
                    {tiers.map((tier) => {
                      const value = tier.features[row.key as keyof typeof tier.features];
                      return (
                        <td key={tier.name} className="py-4 px-4 text-center">
                          {value === true ? (
                            <CheckCircle2 className="mx-auto h-5 w-5 text-foreground" />
                          ) : value === false ? (
                            <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
                          ) : (
                            <span className="text-sm text-muted-foreground">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which tier is right for you?"
        description="Talk to our team. We'll help you choose the right plan for your institution's size and verification needs."
        primaryCTA={{ label: "Talk to Sales", href: "/contact/" }}
        secondaryCTA={{ label: "Try the Demo", href: "/demo/" }}
      />
    </>
  );
}
