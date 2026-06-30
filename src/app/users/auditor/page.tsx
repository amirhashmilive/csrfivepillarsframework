import { UserTypePageTemplate } from "@/components/user-type-page-template";

export default function AuditorUserPage() {
  return (
    <UserTypePageTemplate
      icon="✓"
      title="For Auditors & Verifiers"
      headline="Use the Five Pillars standard. Conduct third-party verification. Issue certifications."
      painPoints={[
        { title: "No standard for betterment verification", description: "Audit standards exist for financial reporting and compliance. No standard exists for verifying Betterment of Society — until now." },
        { title: "Client reporting inconsistency", description: "Every client reports differently. You spend more time normalizing data than conducting verification." },
      ]}
      solution="The Five Pillars Framework Platform gives auditors and verifiers a standard for betterment verification. Use the Five Pillars standard. Conduct third-party verification with structured methodology. Issue Five Pillars Certifications that are recognized across sectors."
      features={[
        "Standardized Five Pillars verification methodology",
        "Client data normalization — all clients on the same framework",
        "Betterment Evidence review tools",
        "CEI verification and certification",
        "Five Pillars Certification issuance",
        "Audit trail for every verification decision",
      ]}
      useCase={{
        title: "An audit firm offering betterment verification services",
        description: "An audit firm uses the platform to offer Five Pillars Verification services. Clients are assessed on the Five Pillars — the same standard, every time. The firm conducts independent verification of Betterment Evidence, calculates the CEI, and issues Five Pillars Certifications. The firm has built a new practice line — betterment verification — that didn't exist before. Clients use the certification in their annual reports, ESG disclosures, and funder communications. The firm's verification methodology is consistent, defensible, and based on a validated framework.",
      }}
      ctaLabel="Become a Verified Auditor"
    />
  );
}
