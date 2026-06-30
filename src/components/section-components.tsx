import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

interface FeatureCardProps {
  letter?: string;
  letterIndex?: number;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export function FeatureCard({
  letter,
  letterIndex = 0,
  title,
  description,
  features,
  href,
}: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
      {letter && (
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg font-serif text-xl font-bold text-white"
          style={{
            backgroundColor: `hsl(0, 0%, ${10 + letterIndex * 18}%)`,
          }}
        >
          {letter}
        </div>
      )}
      <h3 className="mb-2 font-serif text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      {features && (
        <ul className="space-y-1.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {href && (
        <a
          href={href}
          className="mt-4 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Learn more →
        </a>
      )}
    </Card>
  );
}

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-background px-8 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              {primaryCTA.label}
            </a>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-background/30 px-8 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
