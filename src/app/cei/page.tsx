"use client";

import { useState } from "react";
import { SectionHeading, CTASection } from "@/components/section-components";

function CEICalculator() {
  const [wdc, setWdc] = useState(65);
  const [sai, setSai] = useState(55);
  const [l, setL] = useState(0.5);
  const [beta, setBeta] = useState(0.5);
  const [gamma, setGamma] = useState(1.0);

  const cei = ((beta * wdc + (1 - beta) * sai) * Math.pow(l, gamma)).toFixed(1);

  const gradientPosition = Math.min(5, Math.max(1, Math.ceil(cei / 20)));

  const interpretation =
    cei >= 80
      ? "Position 5 — Verified Proof. Your institution meets the Skeptical Observer Standard."
      : cei >= 60
      ? "Position 4 — Outcome Indicators. Strong, but verification architecture needs strengthening."
      : cei >= 40
      ? "Position 3 — Output Metrics. Where most institutions sit. Betterment verification is insufficient."
      : cei >= 20
      ? "Position 2 — Activity Documentation. The Proclamation Trap is active. Significant work needed."
      : "Position 1 — Proclamation Only. The institution cannot demonstrate betterment.";

  return (
    <div className="rounded-2xl border bg-card p-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Your CEI Score
        </p>
        <div className="mt-2 font-serif text-6xl font-bold">{cei}</div>
        <p className="mt-2 text-sm text-muted-foreground">out of 100</p>
      </div>

      <div className="space-y-6">
        {/* WDC */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              WDC — Weighted Delivery Composite
            </label>
            <span className="text-sm font-bold">{wdc}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={wdc}
            onChange={(e) => setWdc(Number(e.target.value))}
            className="w-full accent-foreground"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Captures Execution and Outcome dimensions
          </p>
        </div>

        {/* SAI */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              SAI — Stakeholder Alignment Index
            </label>
            <span className="text-sm font-bold">{sai}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sai}
            onChange={(e) => setSai(Number(e.target.value))}
            className="w-full accent-foreground"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Captures Initiative and Meaning dimensions
          </p>
        </div>

        {/* L */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              L — Legitimacy Factor (Trust Layer Maturity)
            </label>
            <span className="text-sm font-bold">{l.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={l}
            onChange={(e) => setL(Number(e.target.value))}
            className="w-full accent-foreground"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Multiplicative — institutions with low legitimacy cannot achieve high CEI
          </p>
        </div>

        {/* Beta */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              β — Weighting Parameter
            </label>
            <span className="text-sm font-bold">{beta.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={beta}
            onChange={(e) => setBeta(Number(e.target.value))}
            className="w-full accent-foreground"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Balances delivery (WDC) vs. alignment (SAI)
          </p>
        </div>

        {/* Gamma */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-sm font-medium">
              γ — Legitimacy Exponent
            </label>
            <span className="text-sm font-bold">{gamma.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={gamma}
            onChange={(e) => setGamma(Number(e.target.value))}
            className="w-full accent-foreground"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Governs how strongly legitimacy affects the score
          </p>
        </div>
      </div>

      {/* Interpretation */}
      <div className="mt-8 rounded-xl bg-muted/50 p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Interpretation
          </p>
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            Position {gradientPosition} on the Gradient
          </span>
        </div>
        <p className="text-sm">{interpretation}</p>
      </div>

      {/* Formula */}
      <div className="mt-6 rounded-lg border bg-background p-4 text-center">
        <p className="font-mono text-sm">
          CEI = [{beta.toFixed(1)} × {wdc} + {(1 - beta).toFixed(1)} × {sai}] × {l.toFixed(2)}
          <sup>{gamma.toFixed(1)}</sup> = <span className="font-bold">{cei}</span>
        </p>
      </div>
    </div>
  );
}

export default function CEIPage() {
  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The CEI
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            The Composite Effectiveness Index
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            One score that tells you whether your institution produces verified betterment —
            or just reports activity.
          </p>
          <div className="mt-8 inline-block rounded-lg border bg-muted/50 px-6 py-3 font-mono text-sm">
            CEI = [β · WDC + (1-β) · SAI] × L<sup>γ</sup>
          </div>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="How It Works"
                title="The formula explained"
                center={false}
              />
              <div className="mt-6 space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-2 font-serif text-lg font-semibold">WDC — Weighted Delivery Composite</h3>
                  <p className="text-sm text-muted-foreground">
                    Captures the Execution and Outcome dimensions. Measures whether your
                    institution actually delivers what it promises — and whether delivery
                    produces outcomes.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-2 font-serif text-lg font-semibold">SAI — Stakeholder Alignment Index</h3>
                  <p className="text-sm text-muted-foreground">
                    Captures the Initiative and Meaning dimensions. Measures whether your
                    initiatives are participatory and whether your communication is usable.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-2 font-serif text-lg font-semibold">L — Legitimacy Factor</h3>
                  <p className="text-sm text-muted-foreground">
                    A multiplicative factor (0-1) reflecting your Trust Layer Maturity.
                    Institutions with low legitimacy <strong>cannot</strong> achieve high CEI —
                    the formula enforces that legitimacy is foundational, not additive.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-foreground bg-card p-6">
                  <h3 className="mb-2 font-serif text-lg font-semibold">Why it matters</h3>
                  <p className="text-sm text-muted-foreground">
                    The CEI is transparent. Every component is measurable. Every parameter is
                    adjustable. Unlike opaque ESG ratings, you can see exactly what drives your
                    score — and exactly what to improve.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Live Calculator
              </p>
              <CEICalculator />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Adjust the sliders to see how each component affects your CEI. This is a
                simplified preview — the full platform tracks all components continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Track your CEI over time"
        description="The full platform calculates your CEI continuously — not just as a snapshot. Watch your Legitimacy Migration happen in real time."
        primaryCTA={{ label: "Start Free Assessment", href: "/demo/" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing/" }}
      />
    </>
  );
}
