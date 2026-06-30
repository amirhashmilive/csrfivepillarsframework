import { UserTypePageTemplate } from "@/components/user-type-page-template";

export default function ImplementingAgencyUserPage() {
  return (
    <UserTypePageTemplate
      icon="⚙️"
      title="For Implementing Agencies"
      headline="Log execution data, report verified outcomes, demonstrate your capability."
      painPoints={[
        { title: "Funders demand proof", description: "Every funder wants different reports, different metrics, different evidence. The reporting burden is enormous and produces no learning." },
        { title: "Execution data scattered", description: "Your execution data lives across spreadsheets, emails, and reports. You can't see your own performance patterns." },
        { title: "Outcome attribution unclear", description: "You know you're producing outcomes, but you can't prove attribution. Funders question whether the betterment is yours." },
      ]}
      solution="The Five Pillars Framework Platform gives implementing agencies a single system to log execution data, track outcomes, and demonstrate capability. Generate verified outcome reports for any funder. Show your Implementing Agency Variable — the capability that makes you the decisive variable in betterment production."
      features={[
        "Single execution data system — no more scattered spreadsheets",
        "Outcome chain builder with Betterment Evidence",
        "Funder-specific report generation from one data source",
        "Capability assessment — prove your Implementing Agency Variable",
        "Performance analytics — see your patterns across all projects",
        "Verification-ready audit trail for every outcome claim",
      ]}
      useCase={{
        title: "An NGO implementing 50+ projects for 10 different funders",
        description: "An implementing agency runs 50+ projects for 10 different funders. Previously, each funder required different reports — 50+ hours per month on reporting alone. With the platform, all execution data is logged once. Funder reports are generated automatically, each formatted to the funder's requirements but drawing from the same verified outcome data. The agency's capability assessment is documented — they can prove they're a high-capability implementing agency. New funders can see the agency's verified track record. The agency has won three new contracts by demonstrating its Implementing Agency Variable.",
      }}
      ctaLabel="Join as Implementing Agency"
    />
  );
}
