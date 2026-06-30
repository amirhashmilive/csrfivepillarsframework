import Link from "next/link";
import { SectionHeading, CTASection } from "@/components/section-components";

const resources = [
  {
    title: "The Framework",
    description: "Understand the Five Pillars Framework — the A-E-I-O-M architecture, the Trust Layer, and the meta-framework positioning.",
    href: "/resources/framework/",
    icon: "🏛️",
  },
  {
    title: "The Book",
    description: "The 270-page definitive reference work by Dr. Sayed Amir Mustafa Hashmi. The complete framework, in depth.",
    href: "/resources/book/",
    icon: "📖",
  },
  {
    title: "Glossary",
    description: "40+ canonical doctrinal concepts — from the Proclamation Trap to the Betterment Index. The framework's vocabulary, defined.",
    href: "/resources/glossary/",
    icon: "📚",
  },
  {
    title: "Research",
    description: "The empirical validation. The mathematical foundations. The compliance-betterment paradox tested across 10 countries.",
    href: "/resources/research/",
    icon: "🔬",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Resources
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to understand the framework
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From the 270-page reference work to the interactive glossary, the resources to
            go deep.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group rounded-2xl border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{resource.icon}</div>
                <h3 className="mb-3 font-serif text-xl font-semibold">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <p className="mt-6 text-sm font-medium">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to put the framework into practice?"
        primaryCTA={{ label: "Try the Demo", href: "/demo/" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing/" }}
      />
    </>
  );
}
