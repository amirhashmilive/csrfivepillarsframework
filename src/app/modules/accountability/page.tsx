import { ModulePageTemplate } from "@/components/module-page-template";

export default function AccountabilityModule() {
  return (
    <ModulePageTemplate
      letter="A"
      letterIndex={0}
      name="Accountability"
      tagline="Answerable for outcomes — not activities, not expenditures, not intentions."
      failureMode="The Compliance Theater"
      verificationDemand="Can the institution specify, in advance, what outcomes it is answerable for, and can it produce evidence of those outcomes on demand?"
      description="The Accountability module tracks whether your institution is genuinely answerable for the outcomes it produces. Define outcome commitments, assign accountability owners at the board and executive level, schedule and track accountability reviews, and generate a complete audit trail. The module flags accountability gaps — areas where no one is answerable for outcomes — and helps you close them before they become legitimacy gaps."
      features={[
        { title: "Outcome Commitment Tracker", description: "Define specific outcomes your institution commits to producing, with measurable criteria and timelines." },
        { title: "Accountability Owner Assignment", description: "Assign accountability at the board, executive, and operational levels. Clear ownership for every commitment." },
        { title: "Board Review Scheduler", description: "Schedule accountability reviews with automated reminders. Track completed, upcoming, and overdue reviews." },
        { title: "Accountability Gap Analysis", description: "Identify areas where no one is accountable for outcomes — the structural condition that produces the Compliance Theater." },
        { title: "Audit Trail Generation", description: "Every commitment, review, and evidence upload logged with timestamps. Ready for board, regulator, or auditor review." },
        { title: "Accountability Asymmetry Detection", description: "Flag conditions where accountability flows downward but verification flows nowhere — the structural failure the module exists to close." },
      ]}
      screenshots={[
        { title: "Accountability Dashboard", description: "Overview of all commitments, their owners, and review status." },
        { title: "Commitment Form", description: "Define new outcome commitments with measurable criteria." },
        { title: "Audit Log", description: "Complete chronological record of all accountability actions." },
      ]}
    />
  );
}
