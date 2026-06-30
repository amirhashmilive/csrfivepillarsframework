import { UserTypePageTemplate } from "@/components/user-type-page-template";

export default function FoundationUserPage() {
  return (
    <UserTypePageTemplate
      icon="🤝"
      title="For Foundations"
      headline="Assess grantees on the Five Pillars. Track portfolio-level betterment."
      painPoints={[
        { title: "Grant portfolio impact unclear", description: "You have 200 grantees. You can see what they spent. You cannot see what they actually changed." },
        { title: "Grantee reporting inconsistent", description: "Every grantee reports differently. There's no way to compare performance or identify patterns across the portfolio." },
        { title: "Betterment verification impossible", description: "Grant reports describe activities. They don't establish betterment. You cannot tell your board whether the foundation is producing the Betterment of Society it claims." },
      ]}
      solution="The Five Pillars Framework Platform gives foundations a standard for grantee assessment. Every grantee is assessed on the same Five Pillars. Portfolio-level betterment becomes visible. You can tell your board — with evidence — whether the foundation is producing verified betterment."
      features={[
        "Standardized grantee assessment on the Five Pillars",
        "Portfolio-level CEI dashboard — aggregate betterment across all grantees",
        "Grantee comparison — see which grantees produce outcomes, which don't",
        "Betterment Evidence library — verified outcomes, not activity reports",
        "Board reports with portfolio-level betterment verification",
        "Grant renewal decisions based on verified betterment, not narrative",
      ]}
      useCase={{
        title: "A foundation managing $500M in grants across 200 grantees",
        description: "A $500M foundation uses the platform to assess all 200 grantees on the Five Pillars. For the first time, the foundation can see portfolio-level betterment — not just grantee-by-grantee activity reports. The board receives a quarterly dashboard showing the foundation's aggregate CEI and Pillar Coherence. Underperforming grantees are identified — not by narrative, but by Pillar Deficiency. High-performing grantees receive multi-year funding based on verified betterment. The foundation has shifted 30% of its portfolio from activity-reporting grantees to betterment-verifying grantees.",
      }}
      ctaLabel="Assess Your Portfolio"
    />
  );
}
