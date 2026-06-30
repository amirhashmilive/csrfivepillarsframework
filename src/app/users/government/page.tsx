import { UserTypePageTemplate } from "@/components/user-type-page-template";

export default function GovernmentUserPage() {
  return (
    <UserTypePageTemplate
      icon="🏛️"
      title="For Government Departments"
      headline="Verify that public programs produce betterment. Report to parliament with evidence."
      painPoints={[
        { title: "Public spending accountability", description: "Parliament and the public want to know whether public spending is producing results — not just whether it was spent as budgeted." },
        { title: "Parliamentary scrutiny", description: "Ministers must answer questions about program effectiveness. Current reporting doesn't support evidence-based answers." },
        { title: "Program evaluation", description: "Program evaluations are expensive, infrequent, and often methodologically weak. You need continuous verification, not periodic evaluation." },
      ]}
      solution="The Five Pillars Framework Platform helps government departments verify that public programs produce Betterment of Society. Report to parliament with verified evidence, not expenditure summaries. Track program effectiveness continuously — not just through periodic evaluations."
      features={[
        "Program-level CEI dashboards for every department initiative",
        "Parliamentary reporting with Betterment Evidence",
        "Continuous verification — no more waiting for periodic evaluations",
        "Implementing department performance tracking",
        "Public-facing dashboards for transparency (Communication Usability)",
        "Cross-department benchmarking",
      ]}
      useCase={{
        title: "A welfare authority managing 30+ social programs",
        description: "A welfare authority manages 30+ social programs — livelihoods, food security, housing, education, health. Previously, the authority could report expenditure and output, but not outcome. With the platform, every program has an outcome chain and Betterment Evidence. The authority reports to parliament quarterly with a CEI dashboard showing program-level and portfolio-level betterment. The authority's Beneficiary Inversion has been addressed — program participants are now involved in verifying outcomes. Public-facing dashboards provide transparency. The authority's budget allocation has shifted toward programs with verified betterment.",
      }}
      ctaLabel="Request Government Demo"
    />
  );
}
