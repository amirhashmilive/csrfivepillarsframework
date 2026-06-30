import { UserTypePageTemplate } from "@/components/user-type-page-template";

export default function CorporateUserPage() {
  return (
    <UserTypePageTemplate
      icon="🏢"
      title="For Corporate CSR Teams"
      headline="Track outcomes, not activities. Generate board-ready evidence reports."
      painPoints={[
        { title: "Board pressure for evidence", description: "Your board wants proof that CSR spending is producing results — not just reports of activities completed." },
        { title: "ESG rating anxiety", description: "ESG ratings are opaque and don't actually measure betterment. You need a score that reflects real impact." },
        { title: "Regulatory reporting burden", description: "BRSR, ESG disclosures, CSR reports — the compliance burden is enormous, and none of it actually demonstrates betterment." },
      ]}
      solution="The Five Pillars Framework Platform helps you track outcomes across your entire CSR portfolio. Generate board reports that show verified betterment, not just expenditure. Move from ESG reporting anxiety to evidence-based confidence."
      features={[
        "Portfolio-wide CEI dashboard — see all CSR initiatives in one score",
        "Board-ready reports with Betterment Evidence, not activity counts",
        "Implementing agency performance tracking — see which partners deliver",
        "BRSR-aligned reporting with actual outcome verification",
        "Stakeholder-specific communication — boards, communities, regulators",
        "Benchmark against industry peers (anonymized)",
      ]}
      useCase={{
        title: "A multinational tracking 200+ CSR initiatives across 15 countries",
        description: "A global corporation uses the platform to track 200+ CSR initiatives across 15 countries. Each initiative has its own outcome chain and Betterment Evidence. The board receives a quarterly CEI dashboard showing portfolio-wide Pillar Coherence. Implementing agencies are assessed on capability — the corporation can see which agencies produce outcomes and which don't. Annual reports include verified Betterment Evidence, not just expenditure summaries. The CEI score has moved from 52 to 71 over three years — documented Legitimacy Migration.",
      }}
      ctaLabel="Start Corporate Trial"
    />
  );
}
