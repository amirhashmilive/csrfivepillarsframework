import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading, CTASection } from "@/components/section-components";

const modules = [
  {
    letter: "A",
    name: "Accountability",
    tagline: "Answerable for outcomes — not activities.",
    description:
      "Define outcome commitments. Assign accountability owners. Track reviews. Generate audit trails. Flag accountability gaps where no one is answerable.",
    failure: "The Compliance Theater",
    verification: "Can the institution specify what outcomes it is answerable for, and produce evidence on demand?",
    features: [
      "Outcome commitment tracker",
      "Accountability owner assignment",
      "Board review scheduler",
      "Accountability gap analysis",
      "Audit trail generation",
    ],
    href: "/modules/accountability/",
  },
  {
    letter: "E",
    name: "Execution",
    tagline: "The architecture that converts intent to reality.",
    description:
      "Register implementing agencies. Track execution status. Monitor the Implementing Agency Variable — which agencies produce outcomes, which don't.",
    failure: "The Policy-Practice Chasm",
    verification: "Can the institution demonstrate the operational architecture by which intent becomes reality?",
    features: [
      "Implementing agency registry",
      "Agency capability assessment",
      "Execution status tracker",
      "Implementing Agency Variable analytics",
      "Policy-Practice Chasm alerts",
    ],
    href: "/modules/execution/",
  },
  {
    letter: "I",
    name: "Initiative",
    tagline: "Participatory origin — not imposed intent.",
    description:
      "Log stakeholder identification of need. Track initiative origin. Record community endorsement. Flag Imposed Imperative risks.",
    failure: "The Imposed Imperative",
    verification: "Can the institution demonstrate that the initiative originated from participatory identification of need?",
    features: [
      "Participatory engagement tracker",
      "Initiative origin logger",
      "Community endorsement recording",
      "Imposed Imperative risk flags",
      "Stakeholder identification workflow",
    ],
    href: "/modules/initiative/",
  },
  {
    letter: "O",
    name: "Outcome",
    tagline: "Demonstrable, attributable change. The core module.",
    description:
      "Build activity→output→outcome→betterment chains. Upload Betterment Evidence. Track Outcome Verifiability. Calculate the Betterment Index.",
    failure: "The Output Illusion",
    verification: "Can the institution demonstrate measurable change attributable to its action?",
    features: [
      "Activity-Output-Outcome-Betterment chain builder",
      "Betterment Evidence upload & verification",
      "Outcome Verifiability scoring",
      "Output Illusion detection",
      "Betterment Index calculation",
    ],
    href: "/modules/outcome/",
  },
  {
    letter: "M",
    name: "Meaning",
    tagline: "Communication that is legible, verifiable, actionable.",
    description:
      "Generate stakeholder-specific reports. Test Communication Usability. Track Meaning Correspondence. Flag Transparency Trap risks.",
    failure: "The Transparency Trap",
    verification: "Can the institution demonstrate that its communication is legible, verifiable, and actionable?",
    features: [
      "Stakeholder-specific report generator",
      "Communication Usability testing",
      "Meaning Correspondence tracker",
      "Transparency Trap detection",
      "Plain-language community summaries",
    ],
    href: "/modules/meaning/",
  },
];

export default function ModulesPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The Modules
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Five modules. One CEI score.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Each pillar of the framework gets its own dedicated module. Together, they feed
            into your Composite Effectiveness Index — the single score that tells you whether
            your institution produces verified betterment.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {modules.map((module, i) => (
              <div
                key={module.letter}
                className="grid gap-8 rounded-2xl border bg-card p-8 lg:grid-cols-3"
              >
                {/* Left: Letter + name */}
                <div className="lg:border-r lg:pr-8">
                  <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl font-serif text-3xl font-bold text-white"
                    style={{ backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)` }}
                  >
                    {module.letter}
                  </div>
                  <h2 className="font-serif text-2xl font-bold">{module.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{module.tagline}</p>
                  <div className="mt-4 rounded-lg bg-muted/50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Fails as
                    </p>
                    <p className="mt-1 text-sm font-medium">{module.failure}</p>
                  </div>
                </div>

                {/* Middle: Description + features */}
                <div>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                  <div className="mt-4 rounded-lg border-l-2 border-foreground/20 bg-muted/30 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Verification Demand
                    </p>
                    <p className="mt-1 text-sm italic">{module.verification}</p>
                  </div>
                </div>

                {/* Right: Features */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Module Features
                  </p>
                  <ul className="space-y-2">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={module.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Explore {module.name} module <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See all modules working together"
        description="The modules don't operate in isolation. They feed into a single CEI score — your Composite Effectiveness Index."
        primaryCTA={{ label: "Try the Demo", href: "/demo/" }}
        secondaryCTA={{ label: "Explore the CEI", href: "/cei/" }}
      />
    </>
  );
}
