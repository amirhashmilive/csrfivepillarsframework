import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/section-components";

interface UserTypePageProps {
  icon: string;
  title: string;
  headline: string;
  painPoints: { title: string; description: string }[];
  solution: string;
  features: string[];
  useCase: { title: string; description: string };
  ctaLabel: string;
}

export function UserTypePageTemplate({
  icon,
  title,
  headline,
  painPoints,
  solution,
  features,
  useCase,
  ctaLabel,
}: UserTypePageProps) {
  return (
    <>
      <section className="border-b py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/users/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All User Types
          </Link>
          <div className="flex items-start gap-6">
            <div className="text-6xl">{icon}</div>
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{headline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold">The problems you face</h2>
              <div className="space-y-6">
                {painPoints.map((point) => (
                  <div key={point.title} className="rounded-xl border bg-card p-6">
                    <h3 className="mb-2 font-semibold">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold">The solution</h2>
              <div className="rounded-xl border-2 border-foreground bg-card p-6">
                <p className="text-lg">{solution}</p>
              </div>
              <div className="mt-6 rounded-xl bg-muted/30 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What you get
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border bg-card p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Use Case
            </p>
            <h3 className="mb-4 font-serif text-2xl font-bold">{useCase.title}</h3>
            <p className="text-muted-foreground">{useCase.description}</p>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to see how it works for ${title.toLowerCase()}?`}
        primaryCTA={{ label: ctaLabel, href: "/contact/" }}
        secondaryCTA={{ label: "Try the Demo", href: "/demo/" }}
      />
    </>
  );
}
