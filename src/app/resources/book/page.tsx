import { CTASection } from "@/components/section-components";

const chapters = [
  { part: "Part I: Diagnosis", items: ["Chapter 1: The Proclamation Trap", "Chapter 2: The Legitimacy Gap", "Chapter 3: Comparative Review of CSR Frameworks"] },
  { part: "Part II: The Framework", items: ["Chapter 4: The Framework Architecture", "Chapter 5: The Five Pillars in Depth", "Chapter 6: The Trust Layer"] },
  { part: "Part III: Application", items: ["Chapter 7: The Institutional Operating System", "Chapter 8: Comparative International Analysis", "Chapter 9: The New Legitimacy"] },
  { part: "Part IV: Specialized", items: ["Chapter 10: Empirical Validation", "Chapter 11: Mathematical Foundations"] },
];

export default function BookPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                The Definitive Reference
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                The Five Pillars Framework
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A Universal Framework for Communication Usability, Institutional Accountability,
                and the Betterment of Society
              </p>
              <p className="mt-6 text-muted-foreground">
                By Dr. Sayed Amir Mustafa Hashmi
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-muted px-4 py-2 text-center">
                    <div className="font-serif text-2xl font-bold">270</div>
                    <div className="text-xs text-muted-foreground">Pages</div>
                  </div>
                  <div className="flex-shrink-0 rounded-lg bg-muted px-4 py-2 text-center">
                    <div className="font-serif text-2xl font-bold">11</div>
                    <div className="text-xs text-muted-foreground">Chapters</div>
                  </div>
                  <div className="flex-shrink-0 rounded-lg bg-muted px-4 py-2 text-center">
                    <div className="font-serif text-2xl font-bold">55</div>
                    <div className="text-xs text-muted-foreground">Figures</div>
                  </div>
                  <div className="flex-shrink-0 rounded-lg bg-muted px-4 py-2 text-center">
                    <div className="font-serif text-2xl font-bold">40+</div>
                    <div className="text-xs text-muted-foreground">Concepts</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border-2 border-foreground p-6">
                <p className="text-sm font-medium">
                  The book is the definitive reference for the framework. The SaaS platform
                  operationalizes it.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Available for download as part of Professional, Enterprise, and Institutional
                  subscriptions. Starter tier includes sample chapters.
                </p>
              </div>
            </div>

            {/* Book Cover Mockup */}
            <div className="flex items-center justify-center">
              <div className="aspect-[3/4] w-full max-w-xs rounded-lg border-2 border-foreground bg-gradient-to-b from-muted to-background p-8 shadow-2xl">
                <div className="flex h-full flex-col">
                  <div className="flex gap-1">
                    {["A", "E", "I", "O", "M"].map((letter, i) => (
                      <div
                        key={letter}
                        className="flex h-10 flex-1 items-center justify-center font-serif text-lg font-bold text-white"
                        style={{ backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)` }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex-1">
                    <h2 className="font-serif text-2xl font-bold leading-tight">
                      The Five Pillars Framework
                    </h2>
                    <p className="mt-4 text-xs text-muted-foreground">
                      A Universal Framework for Communication Usability, Institutional
                      Accountability, and the Betterment of Society
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium">Dr. Sayed Amir Mustafa Hashmi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold">Table of Contents</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {chapters.map((section) => (
              <div key={section.part}>
                <h3 className="mb-3 font-serif text-lg font-semibold text-muted-foreground">
                  {section.part}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-lg border bg-card px-4 py-3 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get the book. Use the platform."
        description="The book gives you the theory. The platform gives you the practice."
        primaryCTA={{ label: "View Pricing", href: "/pricing/" }}
        secondaryCTA={{ label: "Try the Demo", href: "/demo/" }}
      />
    </>
  );
}
