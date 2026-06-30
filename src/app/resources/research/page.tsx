import { CTASection } from "@/components/section-components";

export default function ResearchPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Research
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Validated. Universal. Enduring.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The Five Pillars Framework is not opinion. It is architecture — grounded in years
            of field observation, validated through empirical research, and tested across
            10 countries.
          </p>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-8">
              <h2 className="mb-4 font-serif text-xl font-semibold">Empirical Validation</h2>
              <p className="text-sm text-muted-foreground">
                The framework was validated through a multi-year empirical field investigation.
                The research confirmed that the Five Pillars architecture corresponds to what
                institutions actually do when they produce — or fail to produce — demonstrable
                betterment.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>• Research design and methodology</p>
                <p>• Statistical findings (regression, ANOVA)</p>
                <p>• Reliability and validity</p>
                <p>• Limitations acknowledged honestly</p>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-8">
              <h2 className="mb-4 font-serif text-xl font-semibold">Mathematical Foundations</h2>
              <p className="text-sm text-muted-foreground">
                The framework's quantitative architecture — the CEI, Betterment Index, Trust
                Layer Maturity Score, and Alignment Equation — is mathematically derived and
                empirically calibrated.
              </p>
              <div className="mt-6 rounded-lg bg-muted/50 p-4 font-mono text-sm">
                CEI = [β·WDC + (1-β)·SAI] × L^γ
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Full derivations in Chapter 11 of the book.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-8">
              <h2 className="mb-4 font-serif text-xl font-semibold">Comparative International Analysis</h2>
              <p className="text-sm text-muted-foreground">
                The framework was tested across 10 countries: India, USA, Germany, UK, China,
                Russia, Iran, South Africa, Kenya, and Brazil.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>• The compliance-betterment paradox</p>
                <p>• The Cultural Betterment Mechanism</p>
                <p>• The Implementing Agency Variable confirmed across contexts</p>
                <p>• No country has yet built the verification architecture</p>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-8">
              <h2 className="mb-4 font-serif text-xl font-semibold">Anticipating Criticism</h2>
              <p className="text-sm text-muted-foreground">
                The framework anticipates and addresses six major criticisms — from measurability
                and attribution to scale equity and the framework's own limits.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p>• Is betterment measurable?</p>
                <p>• Is betterment always attributable?</p>
                <p>• Does the framework disadvantage small organizations?</p>
                <p>• What are the framework's limits?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Read the full research in the book"
        description="Chapters 10 and 11 provide the complete empirical validation and mathematical foundations."
        primaryCTA={{ label: "About the Book", href: "/resources/book/" }}
        secondaryCTA={{ label: "View Glossary", href: "/resources/glossary/" }}
      />
    </>
  );
}
