import Link from "next/link";
import { SectionHeading, CTASection } from "@/components/section-components";

const userTypes = [
  {
    icon: "🏢",
    name: "Corporate CSR Teams",
    href: "/users/corporate/",
    painPoints: ["Board pressure for evidence", "ESG rating anxiety", "Regulatory reporting burden"],
    description: "Track outcomes, not activities. Generate board-ready evidence reports.",
  },
  {
    icon: "⚙️",
    name: "Implementing Agencies",
    href: "/users/implementing-agency/",
    painPoints: ["Funders demand proof", "Execution data scattered", "Outcome attribution unclear"],
    description: "Log execution data, report verified outcomes, demonstrate your capability.",
  },
  {
    icon: "🤝",
    name: "Foundations",
    href: "/users/foundation/",
    painPoints: ["Grant portfolio impact unclear", "Grantee reporting inconsistent", "Betterment verification impossible"],
    description: "Assess grantees on the Five Pillars. Track portfolio-level betterment.",
  },
  {
    icon: "🏛️",
    name: "Government Departments",
    href: "/users/government/",
    painPoints: ["Public spending accountability", "Parliamentary scrutiny", "Program evaluation"],
    description: "Verify that public programs produce betterment. Report to parliament with evidence.",
  },
  {
    icon: "🌍",
    name: "NGOs",
    href: "/users/ngo/",
    painPoints: ["Funder reporting burden", "Community accountability", "Impact demonstration"],
    description: "Demonstrate betterment to funders. Account to communities. Reduce reporting burden.",
  },
  {
    icon: "✓",
    name: "Auditors & Verifiers",
    href: "/users/auditor/",
    painPoints: ["No standard for betterment verification", "Client reporting inconsistency"],
    description: "Use the Five Pillars standard. Conduct third-party verification. Issue certifications.",
  },
];

export default function UsersPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Built For You
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            The platform adapts to your role
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you're a corporate CSR team, an implementing agency, a foundation, or a
            regulator — the Five Pillars Framework meets you where you are.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userTypes.map((user) => (
              <Link
                key={user.href}
                href={user.href}
                className="group rounded-2xl border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{user.icon}</div>
                <h3 className="mb-3 font-serif text-xl font-semibold">{user.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{user.description}</p>
                <div className="space-y-1">
                  {user.painPoints.map((point) => (
                    <p key={point} className="text-xs text-muted-foreground">
                      • {point}
                    </p>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find out how the platform works for you"
        primaryCTA={{ label: "Try the Demo", href: "/demo/" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact/" }}
      />
    </>
  );
}
