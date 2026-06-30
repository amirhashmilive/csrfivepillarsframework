import { UserTypePageTemplate } from "@/components/user-type-page-template";

export default function NgoUserPage() {
  return (
    <UserTypePageTemplate
      icon="🌍"
      title="For NGOs"
      headline="Demonstrate betterment to funders. Account to communities. Reduce reporting burden."
      painPoints={[
        { title: "Funder reporting burden", description: "Multiple funders, multiple formats, multiple deadlines. Reporting consumes time that should go to program delivery." },
        { title: "Community accountability", description: "You're accountable to the communities you serve — but current reporting is designed for funders, not communities." },
        { title: "Impact demonstration", description: "You know your programs work. You can't prove it with evidence that meets the Skeptical Observer Standard." },
      ]}
      solution="The Five Pillars Framework Platform helps NGOs demonstrate betterment to funders with one verified data source. Generate community-friendly reports that account to the people you serve. Prove impact with Betterment Evidence that meets the Skeptical Observer Standard."
      features={[
        "Single data source for all funder reports",
        "Community-friendly reports (Communication Usability optimized)",
        "Betterment Evidence library — proof, not narrative",
        "Participatory engagement tracking (addresses Beneficiary Inversion)",
        "Capability assessment — prove your Implementing Agency Variable",
        "Reduced reporting burden — log once, report many ways",
      ]}
      useCase={{
        title: "A community development NGO with 100+ active projects",
        description: "A community development NGO runs 100+ active projects across multiple regions. Previously, reporting consumed 40% of staff time. With the platform, execution data is logged once — funder reports are generated automatically. Community reports are produced in plain language, reviewed by community representatives. The NGO's Participatory Engagement processes are documented — the Beneficiary Inversion has been addressed. Betterment Evidence is organized and verification-ready. The NGO has won two major grants by demonstrating verified betterment — not just narrative impact. Reporting burden has dropped to 15% of staff time.",
      }}
      ctaLabel="Start NGO Trial"
    />
  );
}
