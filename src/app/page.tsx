import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Shield } from "lucide-react";
import { SectionHeading, FeatureCard, CTASection } from "@/components/section-components";

const pillars = [
  {
    letter: "A",
    name: "Accountability",
    description: "Answerable for outcomes — not activities, not expenditures.",
    failure: "The Compliance Theater",
    href: "/modules/accountability/",
  },
  {
    letter: "E",
    name: "Execution",
    description: "The operational architecture that converts intent to reality.",
    failure: "The Policy-Practice Chasm",
    href: "/modules/execution/",
  },
  {
    letter: "I",
    name: "Initiative",
    description: "Participatory origin — not imposed institutional preference.",
    failure: "The Imposed Imperative",
    href: "/modules/initiative/",
  },
  {
    letter: "O",
    name: "Outcome",
    description: "Demonstrable, attributable change — not just output counts.",
    failure: "The Output Illusion",
    href: "/modules/outcome/",
  },
  {
    letter: "M",
    name: "Meaning",
    description: "Communication that is legible, verifiable, and actionable.",
    failure: "The Transparency Trap",
    href: "/modules/meaning/",
  },
];

const userTypes = [
  { label: "Corporate CSR", href: "/users/corporate/", icon: "🏢" },
  { label: "Implementing Agency", href: "/users/implementing-agency/", icon: "⚙️" },
  { label: "Foundations", href: "/users/foundation/", icon: "🤝" },
  { label: "Government", href: "/users/government/", icon: "🏛️" },
  { label: "NGOs", href: "/users/ngo/", icon: "🌍" },
  { label: "Auditors", href: "/users/auditor/", icon: "✓" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
              The world's first meta-framework SaaS for institutional legitimacy
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Stop Proclaiming.
              <br />
              <span className="text-muted-foreground">Start Proving.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
              The first SaaS platform that helps institutions demonstrate — with evidence
              that would convince a skeptical observer — that they produce the{" "}
              <strong className="text-foreground">Betterment of Society</strong>.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo/"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Start Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/product/"
                className="inline-flex h-12 items-center justify-center rounded-lg border px-8 text-sm font-medium transition-colors hover:bg-muted"
              >
                Explore the Platform
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required · Free Starter tier · 15-minute self-assessment
            </p>
          </div>
        </div>

        {/* Decorative pillar bar */}
        <div className="flex h-2 w-full">
          {pillars.map((p, i) => (
            <div
              key={p.letter}
              className="flex-1"
              style={{ backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)` }}
            />
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="The Problem"
                title="You're trapped in the Proclamation Trap"
                center={false}
              />
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Your reports are thicker than ever. Your evidence is thinner than ever.
                  Your stakeholders are more skeptical than ever.
                </p>
                <p>
                  Institutions report <strong className="text-foreground">300% more</strong>{" "}
                  than a decade ago. Public trust has declined{" "}
                  <strong className="text-foreground">40%</strong>. The gap between what
                  you proclaim and what you can prove is widening — and it's costing you
                  legitimacy.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <div>
                    <p className="font-medium">The Expenditure Fallacy</p>
                    <p className="text-sm text-muted-foreground">
                      Money spent is treated as evidence of value created.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <div>
                    <p className="font-medium">The Output Illusion</p>
                    <p className="text-sm text-muted-foreground">
                      Activities and outputs are reported as if they were outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <div>
                    <p className="font-medium">The Compliance Theater</p>
                    <p className="text-sm text-muted-foreground">
                      Elaborate reporting documents activity while obscuring the absence of outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-muted/30 p-8">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  The Proclamation-Proof Gradient
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { pos: 1, label: "Proclamation Only", pct: "10%", color: "bg-red-200" },
                  { pos: 2, label: "Activity Documentation", pct: "25%", color: "bg-orange-200" },
                  {
                    pos: 3,
                    label: "Output Metrics ← Most institutions here",
                    pct: "50%",
                    color: "bg-yellow-200",
                    highlight: true,
                  },
                  { pos: 4, label: "Outcome Indicators", pct: "75%", color: "bg-green-200" },
                  { pos: 5, label: "Verified Proof ← The Skeptical Observer Standard", pct: "100%", color: "bg-green-500" },
                ].map((item) => (
                  <div key={item.pos} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className={item.highlight ? "font-bold" : ""}>{item.label}</span>
                    </div>
                    <div className="h-6 w-full overflow-hidden rounded bg-muted">
                      <div
                        className={`flex h-full items-center justify-end pr-2 text-[10px] font-bold ${item.color}`}
                        style={{ width: item.pct }}
                      >
                        {item.pct}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-muted-foreground">
                Where does your institution sit?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Solution"
            title="A meta-framework, not a replacement"
            description="Existing frameworks — Carroll's Pyramid, GRI, ESG, BRSR — answer legitimate questions. We ask a different one: Can you demonstrate Betterment of Society?"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted font-mono text-sm font-bold">
                ✓
              </div>
              <h3 className="mb-2 font-semibold">Necessary</h3>
              <p className="text-sm text-muted-foreground">
                Existing frameworks are necessary for what they do — compliance, reporting,
                governance. We don't replace them.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted font-mono text-sm font-bold">
                ✗
              </div>
              <h3 className="mb-2 font-semibold">Insufficient</h3>
              <p className="text-sm text-muted-foreground">
                None of them answer the Betterment Question. None verify that your
                interventions actually produced betterment.
              </p>
            </div>
            <div className="rounded-xl border-2 border-foreground bg-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground font-mono text-sm font-bold text-background">
                +
              </div>
              <h3 className="mb-2 font-semibold">The Missing Piece</h3>
              <p className="text-sm text-muted-foreground">
                The Five Pillars Framework provides the dimension they collectively lack:
                Betterment Verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Pillars */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Architecture"
            title="The Five Pillars Framework"
            description="Five conditions — each presupposing the previous — that together form a complete circuit of institutional legitimacy."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar, i) => (
              <FeatureCard
                key={pillar.letter}
                letter={pillar.letter}
                letterIndex={i}
                title={pillar.name}
                description={pillar.description}
                features={[`Fails as: ${pillar.failure}`]}
                href={pillar.href}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/modules/"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              Explore all modules <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CEI Dashboard Preview */}
      <section className="border-b bg-foreground py-20 text-background">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-background/60">
                The CEI Dashboard
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Your Composite Effectiveness Index — in real time
              </h2>
              <p className="mt-4 text-lg text-background/70">
                CEI = [β · WDC + (1-β) · SAI] × L^γ. One score that tells you whether
                your institution produces verified betterment — or just reports activity.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "WDC — Weighted Delivery Composite (Execution + Outcome)",
                  "SAI — Stakeholder Alignment Index (Initiative + Meaning)",
                  "L — Legitimacy Factor (Trust Layer Maturity)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-background/60" />
                    <span className="text-sm text-background/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/cei/"
                className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-background px-8 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Try the CEI Calculator
              </Link>
            </div>
            <div className="rounded-xl border border-background/20 bg-background/5 p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-background/60">CEI Score</span>
                <span className="text-xs text-background/40">Q4 2024</span>
              </div>
              <div className="text-center">
                <div className="font-serif text-7xl font-bold">68.4</div>
                <div className="mt-2 text-sm text-background/60">out of 100</div>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  { label: "Pillar A — Accountability", value: 72, status: "Partial" },
                  { label: "Pillar E — Execution", value: 85, status: "Strong" },
                  { label: "Pillar I — Initiative", value: 54, status: "Variable" },
                  { label: "Pillar O — Outcome", value: 41, status: "Deficient" },
                  { label: "Pillar M — Meaning", value: 78, status: "Partial" },
                ].map((pillar) => (
                  <div key={pillar.label}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-background/70">{pillar.label}</span>
                      <span className="text-background/50">{pillar.status}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-background/10">
                      <div
                        className="h-full rounded-full bg-background/60"
                        style={{ width: `${pillar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-background/10 pt-4 text-center">
                <p className="text-xs text-background/50">
                  Position 3 on the Proclamation-Proof Gradient
                </p>
                <p className="text-xs text-yellow-400">
                  ⚠ Pillar Deficiency detected in Outcome
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Your User Type */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Built For You"
            title="The platform adapts to your role"
            description="Whether you're a corporate CSR team, an implementing agency, a foundation, or a regulator — the Five Pillars Framework meets you where you are."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {userTypes.map((user) => (
              <Link
                key={user.href}
                href={user.href}
                className="group rounded-xl border bg-card p-6 text-center transition-all hover:border-foreground/20 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{user.icon}</div>
                <p className="text-sm font-medium">{user.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How It Works"
            title="Three steps to Legitimacy Migration"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Assess",
                description:
                  "Complete the Five Pillars diagnostic. Get your CEI score, Pillar Coherence analysis, and Trust Layer Maturity assessment.",
                icon: <TrendingUp className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Verify",
                description:
                  "Upload Betterment Evidence. Track outcomes. Build your Trust Layer. Move from proclamation to proof.",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Demonstrate",
                description:
                  "Generate reports that meet the Skeptical Observer Standard. Show boards, investors, and regulators that society is measurably better.",
                icon: <CheckCircle2 className="h-8 w-8" />,
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground text-background">
                    {item.icon}
                  </div>
                  <span className="font-serif text-4xl font-bold text-muted-foreground/30">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority / Social Proof */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Grounded in Research"
            title="Validated. Universal. Enduring."
            description="The Five Pillars Framework is not opinion. It is architecture — grounded in years of field observation, validated through empirical research, and tested across 10 countries."
          />
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { stat: "10", label: "Countries analyzed" },
              { stat: "40+", label: "Original doctrinal concepts" },
              { stat: "55", label: "Framework diagrams" },
              { stat: "270", label: "Page reference work" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-serif text-5xl font-bold">{item.stat}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Pricing"
            title="Scales with your verification needs"
            description="From self-assessment to enterprise-wide deployment."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                name: "Starter",
                price: "Free",
                desc: "For small orgs and pilots",
                features: ["1 user", "Self-assessment", "CEI calculator", "Basic dashboard"],
              },
              {
                name: "Professional",
                price: "$499",
                period: "/mo",
                desc: "For mid-size organizations",
                features: ["5 users", "All 5 modules", "1 implementing agency", "Quarterly assessments", "Report generation"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$2,499",
                period: "/mo",
                desc: "For large organizations",
                features: ["25 users", "10 implementing agencies", "Benchmarking", "API access", "Dedicated support"],
              },
              {
                name: "Institutional",
                price: "Custom",
                desc: "For governments & multinationals",
                features: ["Unlimited users", "White-label", "Custom integrations", "Certification workflow"],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border bg-card p-6 ${
                  tier.popular ? "border-foreground shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{tier.desc}</p>
                <div className="mt-4">
                  <span className="font-serif text-3xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              See full pricing comparison <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Begin your Legitimacy Migration today"
        description="Join the institutions moving from proclaimed impact to verified betterment. Start with a free assessment."
        primaryCTA={{ label: "Start Free Assessment", href: "/demo/" }}
        secondaryCTA={{ label: "Talk to Sales", href: "/contact/" }}
      />
    </>
  );
}
