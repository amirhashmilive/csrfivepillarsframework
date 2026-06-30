import { CTASection } from "@/components/section-components";

export default function HashmiPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl border bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-6xl font-bold text-muted-foreground/30">AH</div>
                  <p className="mt-2 text-xs text-muted-foreground">Dr. Sayed Amir Mustafa Hashmi</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                The Author
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Dr. Sayed Amir Mustafa Hashmi
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">Ph.D. in Mass Communication</p>
              <p className="mt-6 text-muted-foreground">
                Author of The Five Pillars Framework — a universal meta-framework for
                institutional legitimacy and the Betterment of Society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">Background</h2>
              <p className="text-muted-foreground">
                Dr. Hashmi's work draws on years of field observation in implementation
                landscapes — regions where institutional presence is heavy and institutional
                outcome is unclear. His doctoral research empirically validated the Five
                Pillars Framework, and his comparative analysis tested the framework across
                10 countries.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">The Betterment Question</h2>
              <blockquote className="border-l-4 border-foreground bg-muted/30 p-6 text-lg italic">
                "Can this institution demonstrate — with evidence that would convince a skeptical
                observer — that society is measurably better because of its presence?"
              </blockquote>
              <p className="mt-4 text-muted-foreground">
                This question — emerged from years of field work — is the question Dr. Hashmi
                exists to make answerable. The Five Pillars Framework is the architecture
                that answers it.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">The Meta-Framework Position</h2>
              <p className="text-muted-foreground">
                Dr. Hashmi positions the Five Pillars Framework not as a replacement for
                existing frameworks — Carroll's Pyramid, GRI, ESG, BRSR — but as a
                meta-framework that asks a different question. Existing frameworks are
                necessary but insufficient. The Five Pillars Framework provides the dimension
                they collectively lack: Betterment Verification.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">The Book</h2>
              <p className="text-muted-foreground">
                Dr. Hashmi is the author of "The Five Pillars Framework: A Universal Framework
                for Communication Usability, Institutional Accountability, and the Betterment
                of Society" — a 270-page definitive reference work with 11 chapters, 55
                framework diagrams, and 40+ original doctrinal concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Explore the framework Dr. Hashmi built"
        primaryCTA={{ label: "Try the Demo", href: "/demo/" }}
        secondaryCTA={{ label: "About the Book", href: "/resources/book/" }}
      />
    </>
  );
}
