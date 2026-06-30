import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/section-components";

interface ModulePageProps {
  letter: string;
  letterIndex: number;
  name: string;
  tagline: string;
  failureMode: string;
  verificationDemand: string;
  description: string;
  features: { title: string; description: string }[];
  screenshots: { title: string; description: string }[];
}

export function ModulePageTemplate({
  letter,
  letterIndex,
  name,
  tagline,
  failureMode,
  verificationDemand,
  description,
  features,
  screenshots,
}: ModulePageProps) {
  return (
    <>
      {/* Header */}
      <section className="border-b py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/modules/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All Modules
          </Link>
          <div className="flex items-start gap-6">
            <div
              className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl font-serif text-4xl font-bold text-white"
              style={{ backgroundColor: `hsl(0, 0%, ${10 + letterIndex * 18}%)` }}
            >
              {letter}
            </div>
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Module {letter} — {name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">What this module does</h2>
              <p className="text-muted-foreground">{description}</p>

              <div className="mt-8 rounded-xl border-l-4 border-foreground bg-muted/30 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Verification Demand
                </p>
                <p className="mt-2 text-lg italic">{verificationDemand}</p>
              </div>
            </div>
            <div className="rounded-xl border bg-muted/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h3 className="font-serif text-xl font-semibold">Failure Mode</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                When this pillar is absent or weak, the institution falls into:
              </p>
              <div className="rounded-lg bg-background p-4">
                <p className="font-serif text-lg font-bold">{failureMode}</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                The {name} module is designed to detect, flag, and help you close this failure mode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold">
            Module Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border bg-card p-6">
                <CheckCircle2 className="mb-4 h-6 w-6 text-muted-foreground" />
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots/Mockups */}
      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold">
            What you'll see
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {screenshots.map((screenshot) => (
              <div key={screenshot.title} className="rounded-xl border bg-card overflow-hidden">
                <div className="flex h-40 items-center justify-center bg-muted/50">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-xl font-serif text-3xl font-bold text-white"
                    style={{ backgroundColor: `hsl(0, 0%, ${10 + letterIndex * 18}%)` }}
                  >
                    {letter}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{screenshot.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to strengthen your ${name} pillar?`}
        description="Start with a free assessment. See exactly where your institution stands."
        primaryCTA={{ label: "Start Free Assessment", href: "/demo/" }}
        secondaryCTA={{ label: "View All Modules", href: "/modules/" }}
      />
    </>
  );
}
