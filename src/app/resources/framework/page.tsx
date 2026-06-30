import { CTASection } from "@/components/section-components";

const pillars = [
  { letter: "A", name: "Accountability", description: "Answerable for outcomes — not activities, not expenditures, not intentions." },
  { letter: "E", name: "Execution", description: "The operational architecture that converts intent to reality." },
  { letter: "I", name: "Initiative", description: "Participatory origin — not imposed institutional preference." },
  { letter: "O", name: "Outcome", description: "Demonstrable, attributable change — not just output counts." },
  { letter: "M", name: "Meaning", description: "Communication that is legible, verifiable, and actionable." },
];

export default function FrameworkPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The Framework
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            The Five Pillars Framework
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A universal meta-framework for institutional legitimacy and the Betterment of Society.
          </p>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">The Betterment Question</h2>
              <blockquote className="border-l-4 border-foreground bg-muted/30 p-6 text-lg italic">
                "Can this institution demonstrate — with evidence that would convince a skeptical
                observer — that society is measurably better because of its presence?"
              </blockquote>
              <p className="mt-4 text-muted-foreground">
                This is the question every institution must answer. The Five Pillars Framework
                is the architecture that makes it answerable.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">The Five Pillars</h2>
              <p className="mb-6 text-muted-foreground">
                Five conditions — each presupposing the previous — that together form a complete
                circuit of institutional legitimacy.
              </p>
              <div className="space-y-4">
                {pillars.map((pillar, i) => (
                  <div key={pillar.letter} className="flex items-start gap-4 rounded-xl border bg-card p-6">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg font-serif text-xl font-bold text-white"
                      style={{ backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)` }}
                    >
                      {pillar.letter}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">{pillar.name}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">The Trust Layer</h2>
              <p className="text-muted-foreground">
                The verification infrastructure — human, procedural, and technological — that
                makes institutional claims credible by enabling independent verification.
                Technology (AI, satellite, IoT, blockchain) enables it; it does not define it.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">Meta-Framework Positioning</h2>
              <p className="text-muted-foreground">
                The Five Pillars Framework is not a replacement for Carroll's Pyramid, GRI, ESG,
                or BRSR. It is a meta-framework that asks a different question: Can you
                demonstrate Betterment of Society? Existing frameworks are necessary for their
                purposes but insufficient for this one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the framework as software"
        primaryCTA={{ label: "Try the Demo", href: "/demo/" }}
        secondaryCTA={{ label: "Read the Book", href: "/resources/book/" }}
      />
    </>
  );
}
