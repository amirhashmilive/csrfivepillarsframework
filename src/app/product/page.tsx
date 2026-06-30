import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading, CTASection } from "@/components/section-components";

const platformFeatures = [
  {
    title: "Five Functional Modules",
    description: "One module per pillar — Accountability, Execution, Initiative, Outcome, Meaning. Each tracks what matters, flags what's missing.",
  },
  {
    title: "Real-Time CEI Dashboard",
    description: "Your Composite Effectiveness Index, calculated live. See where you stand on the Proclamation-Proof Gradient and what's driving your score.",
  },
  {
    title: "Betterment Evidence Library",
    description: "Upload, organize, and verify evidence. The Skeptical Observer Standard built into every assessment.",
  },
  {
    title: "Stakeholder-Specific Reports",
    description: "Generate board reports, regulator reports, community reports, investor reports — each optimized for Communication Usability.",
  },
  {
    title: "Implementing Agency Management",
    description: "Track which agencies produce outcomes and which don't. The Implementing Agency Variable made visible.",
  },
  {
    title: "Benchmarking",
    description: "Compare your CEI against peer institutions. See where you stand — and where you could be.",
  },
  {
    title: "AI-Powered Recommendations",
    description: "Get specific, actionable recommendations to improve Pillar Coherence and close Pillar Deficiencies.",
  },
  {
    title: "Audit Trail",
    description: "Every assessment, every evidence upload, every report — logged, timestamped, and auditable.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The Platform
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Not another reporting tool.
            <br />
            A verification platform.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Most platforms help you report what you did. The Five Pillars Framework Platform
            helps you prove what you changed.
          </p>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Platform Features"
            title="Everything you need to demonstrate Betterment of Society"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border bg-card p-6">
                <CheckCircle2 className="mb-4 h-6 w-6 text-muted-foreground" />
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Modules"
            title="One platform. Five specialized modules."
            description="Each pillar gets its own dedicated module — tracking what matters, flagging what's missing, and feeding into your unified CEI score."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { letter: "A", name: "Accountability", desc: "Track outcome commitments and accountability owners.", href: "/modules/accountability/" },
              { letter: "E", name: "Execution", desc: "Manage implementing agencies and execution architecture.", href: "/modules/execution/" },
              { letter: "I", name: "Initiative", desc: "Ensure initiatives originate from participatory engagement.", href: "/modules/initiative/" },
              { letter: "O", name: "Outcome", desc: "Verify outcomes with Betterment Evidence. The core module.", href: "/modules/outcome/" },
              { letter: "M", name: "Meaning", desc: "Generate usable communication for every stakeholder.", href: "/modules/meaning/" },
            ].map((m, i) => (
              <Link
                key={m.letter}
                href={m.href}
                className="group rounded-xl border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg font-serif text-xl font-bold text-white"
                  style={{ backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)` }}
                >
                  {m.letter}
                </div>
                <h3 className="mb-2 font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
                <p className="mt-4 text-sm font-medium">Explore module →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to stop proclaiming and start proving?"
        description="Start with a free assessment. No credit card required."
        primaryCTA={{ label: "Start Free Assessment", href: "/demo/" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing/" }}
      />
    </>
  );
}
