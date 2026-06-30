import Link from "next/link";
import { CTASection } from "@/components/section-components";

export default function AboutPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            About
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            The Five Pillars Framework Institute
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The institutional home of the Five Pillars Framework — the meta-framework for
            institutional legitimacy and the Betterment of Society.
          </p>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                The Five Pillars Framework Institute exists to help institutions move from
                proclaimed impact to verified betterment. We provide the architecture —
                through our SaaS platform, our advisory services, and our research — that
                makes the Betterment Question answerable.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">What We Believe</h2>
              <div className="space-y-4">
                <div className="rounded-xl border bg-card p-6">
                  <p className="font-medium">Betterment must be demonstrated, not proclaimed.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The world has enough reporting. It needs verification.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <p className="font-medium">Legitimacy is architectural, not aspirational.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Institutions don't become legitimate by trying harder. They become
                    legitimate by building the architecture that produces and verifies
                    betterment.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <p className="font-medium">The framework is universal.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    It applies across sectors — corporate, government, NGO, foundation,
                    healthcare, education. CSR is one application, not the definition.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">What We Offer</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">SaaS Platform</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The Five Pillars Framework Platform — software that operationalizes the
                    framework for institutions worldwide.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">The Book</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The 270-page definitive reference work by Dr. Sayed Amir Mustafa Hashmi.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">Research</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ongoing empirical validation and comparative analysis across countries
                    and sectors.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold">Certification</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Five Pillars Certification — independent verification that your institution
                    meets the standard.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-foreground p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold">The Betterment Question</h2>
              <blockquote className="text-lg italic text-muted-foreground">
                "Can this institution demonstrate — with evidence that would convince a skeptical
                observer — that society is measurably better because of its presence?"
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                This is the question we exist to make answerable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-2xl font-bold">The Founder</h2>
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="font-serif text-xl font-semibold">Dr. Sayed Amir Mustafa Hashmi</h3>
              <p className="mt-1 text-sm text-muted-foreground">Ph.D. in Mass Communication</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Dr. Hashmi is the author of the Five Pillars Framework — a universal
                meta-framework for institutional legitimacy and the Betterment of Society.
                His work draws on years of field observation in implementation landscapes,
                doctoral research empirically validating the framework, and comparative
                analysis across 10 countries.
              </p>
              <Link
                href="/about/hashmi/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                Learn more about Dr. Hashmi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work with us"
        description="Whether you're an institution seeking assessment or a partner seeking collaboration — we'd like to hear from you."
        primaryCTA={{ label: "Contact Us", href: "/contact/" }}
        secondaryCTA={{ label: "Try the Demo", href: "/demo/" }}
      />
    </>
  );
}
