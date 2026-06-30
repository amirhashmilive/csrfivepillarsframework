"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  pillar: string;
  question: string;
  options: { value: number; label: string }[];
}

const questions: Question[] = [
  // Accountability (3 questions)
  {
    pillar: "Accountability",
    question: "Can your institution specify, in advance, what outcomes it is accountable for?",
    options: [
      { value: 0, label: "No — we report activities, not outcome commitments" },
      { value: 1, label: "Partially — some programs have outcome commitments" },
      { value: 2, label: "Yes — all major programs have defined outcome commitments" },
    ],
  },
  {
    pillar: "Accountability",
    question: "Does your board review outcome evidence (not just expenditure reports)?",
    options: [
      { value: 0, label: "No — board reviews expenditure and activity only" },
      { value: 1, label: "Sometimes — outcome reviews occur for some programs" },
      { value: 2, label: "Yes — board regularly reviews verified outcome evidence" },
    ],
  },
  {
    pillar: "Accountability",
    question: "Can you produce evidence of outcomes on demand?",
    options: [
      { value: 0, label: "No — we would need to compile it" },
      { value: 1, label: "Partially — for some programs" },
      { value: 2, label: "Yes — evidence is organized and readily available" },
    ],
  },
  // Execution (3 questions)
  {
    pillar: "Execution",
    question: "Do you assess the capability of your implementing agencies?",
    options: [
      { value: 0, label: "No — we don't track implementing agency capability" },
      { value: 1, label: "Informally — we know which agencies are better" },
      { value: 2, label: "Yes — we have formal capability assessments" },
    ],
  },
  {
    pillar: "Execution",
    question: "Can you track execution status from design through implementation?",
    options: [
      { value: 0, label: "No — execution data is scattered" },
      { value: 1, label: "Partially — some tracking exists" },
      { value: 2, label: "Yes — comprehensive execution tracking" },
    ],
  },
  {
    pillar: "Execution",
    question: "Do you know which implementing agencies produce outcomes and which don't?",
    options: [
      { value: 0, label: "No — we don't track this" },
      { value: 1, label: "Informally — we have a sense" },
      { value: 2, label: "Yes — we track the Implementing Agency Variable" },
    ],
  },
  // Initiative (3 questions)
  {
    pillar: "Initiative",
    question: "Do your initiatives originate from participatory engagement with communities?",
    options: [
      { value: 0, label: "No — initiatives are designed internally" },
      { value: 1, label: "Sometimes — some initiatives involve stakeholders" },
      { value: 2, label: "Yes — all initiatives involve participatory need identification" },
    ],
  },
  {
    pillar: "Initiative",
    question: "Do you record community endorsement of initiatives?",
    options: [
      { value: 0, label: "No — we don't formally record endorsement" },
      { value: 1, label: "Sometimes — for major initiatives" },
      { value: 2, label: "Yes — community endorsement is documented for all initiatives" },
    ],
  },
  {
    pillar: "Initiative",
    question: "Can stakeholders recognize your initiatives as responsive to their needs?",
    options: [
      { value: 0, label: "No — we don't verify this" },
      { value: 1, label: "Partially — we get informal feedback" },
      { value: 2, label: "Yes — we formally verify stakeholder recognition" },
    ],
  },
  // Outcome (3 questions)
  {
    pillar: "Outcome",
    question: "Can you demonstrate outcomes (not just outputs) with evidence?",
    options: [
      { value: 0, label: "No — we report activities and outputs only" },
      { value: 1, label: "Partially — for some programs" },
      { value: 2, label: "Yes — all major programs have verified outcome evidence" },
    ],
  },
  {
    pillar: "Outcome",
    question: "Would your evidence convince a skeptical, independent observer?",
    options: [
      { value: 0, label: "No — our evidence is mostly internal narrative" },
      { value: 1, label: "Partially — some independent verification exists" },
      { value: 2, label: "Yes — our evidence meets the Skeptical Observer Standard" },
    ],
  },
  {
    pillar: "Outcome",
    question: "Can you establish attribution — that outcomes are caused by your intervention?",
    options: [
      { value: 0, label: "No — we claim attribution without evidence" },
      { value: 1, label: "Partially — for some programs" },
      { value: 2, label: "Yes — attribution is established through methodology" },
    ],
  },
  // Meaning (3 questions)
  {
    pillar: "Meaning",
    question: "Is your communication legible to all stakeholders (not just specialists)?",
    options: [
      { value: 0, label: "No — reports are technical and dense" },
      { value: 1, label: "Partially — some communications are simplified" },
      { value: 2, label: "Yes — all communications are tested for legibility" },
    ],
  },
  {
    pillar: "Meaning",
    question: "Can stakeholders verify your claims independently?",
    options: [
      { value: 0, label: "No — claims are not independently verifiable" },
      { value: 1, label: "Partially — some claims can be verified" },
      { value: 2, label: "Yes — all major claims are independently verifiable" },
    ],
  },
  {
    pillar: "Meaning",
    question: "Does your communication correspond to verifiable reality (not just narrative)?",
    options: [
      { value: 0, label: "No — communication is narrative-driven" },
      { value: 1, label: "Partially — some communication is evidence-based" },
      { value: 2, label: "Yes — all communication is evidence-anchored" },
    ],
  },
];

export default function DemoPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
  };

  // Calculate pillar scores
  const pillarScores: Record<string, { score: number; max: number }> = {};
  questions.forEach((q, i) => {
    if (!pillarScores[q.pillar]) {
      pillarScores[q.pillar] = { score: 0, max: 0 };
    }
    pillarScores[q.pillar].score += answers[i] || 0;
    pillarScores[q.pillar].max += 2; // max per question is 2
  });

  const totalScore = Object.values(pillarScores).reduce((sum, p) => sum + p.score, 0);
  const totalMax = Object.values(pillarScores).reduce((sum, p) => sum + p.max, 0);
  const ceiEstimate = Math.round((totalScore / totalMax) * 100);

  const gradientPosition =
    ceiEstimate >= 80 ? 5 : ceiEstimate >= 60 ? 4 : ceiEstimate >= 40 ? 3 : ceiEstimate >= 20 ? 2 : 1;

  const allAnswered = Object.keys(answers).length === questions.length;

  if (showResults && allAnswered) {
    return (
      <>
        <section className="border-b py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Assessment Results
                </p>
                <div className="font-serif text-7xl font-bold">{ceiEstimate}</div>
                <p className="mt-2 text-sm text-muted-foreground">Estimated CEI Score (out of 100)</p>
                <p className="mt-4 text-lg">
                  Position {gradientPosition} on the Proclamation-Proof Gradient
                </p>
              </div>

              {/* Pillar Breakdown */}
              <div className="mt-12 space-y-4">
                <h2 className="font-serif text-2xl font-bold">Pillar Breakdown</h2>
                {Object.entries(pillarScores).map(([pillar, { score, max }], i) => {
                  const pct = Math.round((score / max) * 100);
                  const status = pct >= 67 ? "Strong" : pct >= 34 ? "Partial" : "Deficient";
                  const statusColor = pct >= 67 ? "text-green-600" : pct >= 34 ? "text-yellow-600" : "text-red-600";
                  return (
                    <div key={pillar} className="rounded-xl border bg-card p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg font-serif text-sm font-bold text-white"
                            style={{ backgroundColor: `hsl(0, 0%, ${10 + i * 18}%)` }}
                          >
                            {pillar[0]}
                          </div>
                          <span className="font-medium">{pillar}</span>
                        </div>
                        <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-foreground"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Score: {score}/{max} ({pct}%)
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Deficiency Alert */}
              {Object.entries(pillarScores).some(([, { score, max }]) => score / max < 0.34) && (
                <div className="mt-8 rounded-xl border-2 border-yellow-400 bg-yellow-50 p-6 dark:bg-yellow-950/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
                    <div>
                      <h3 className="font-semibold">Pillar Deficiency Detected</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        One or more pillars are deficient. Remember: Pillar Coherence requires
                        all five pillars. Weakness in any one is weakness in the whole. The
                        full platform provides detailed recommendations for closing these gaps.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl border-2 border-foreground bg-card p-8 text-center">
                <h3 className="font-serif text-2xl font-bold">
                  This is what your institution looks like.
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The full platform provides a comprehensive assessment with 75+ questions,
                  continuous CEI tracking, Betterment Evidence management, and AI-powered
                  recommendations.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact/"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Get Full Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <button
                    onClick={resetAssessment}
                    className="inline-flex h-11 items-center justify-center rounded-lg border px-8 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Retake Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Interactive Demo
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Five Pillars Self-Assessment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Answer 15 questions to get your estimated CEI score and see which pillars are
            strong — and which need work. No signup required.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                <span>
                  Question {Object.keys(answers).length + (allAnswered ? 0 : 1)} of {questions.length}
                </span>
                <span>{Math.round((Object.keys(answers).length / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-foreground transition-all"
                  style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-8">
              {questions.map((q, i) => (
                <div key={i} className="rounded-xl border bg-card p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                      Pillar {q.pillar[0]} — {q.pillar}
                    </span>
                  </div>
                  <h3 className="mb-4 font-medium">{q.question}</h3>
                  <div className="space-y-2">
                    {q.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(i, option.value)}
                        className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors ${
                          answers[i] === option.value
                            ? "border-foreground bg-muted"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div
                          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                            answers[i] === option.value
                              ? "border-foreground bg-foreground"
                              : "border-muted-foreground/40"
                          }`}
                        >
                          {answers[i] === option.value && (
                            <CheckCircle2 className="h-3 w-3 text-background" />
                          )}
                        </div>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowResults(true)}
                disabled={!allAnswered}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                See My Results <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              {!allAnswered && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Answer all {questions.length} questions to see your results
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
