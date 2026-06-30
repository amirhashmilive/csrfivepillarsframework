import { ModulePageTemplate } from "@/components/module-page-template";

export default function MeaningModule() {
  return (
    <ModulePageTemplate
      letter="M"
      letterIndex={4}
      name="Meaning"
      tagline="Communication that is legible, verifiable, and actionable."
      failureMode="The Transparency Trap"
      verificationDemand="Can the institution demonstrate that its communication is legible to its intended stakeholders, that it corresponds to verifiable reality, and that stakeholders can act on it?"
      description="The Meaning module ensures your communication serves legitimacy, not just disclosure. Generate stakeholder-specific reports optimized for Communication Usability. Test every communication for legibility, verifiability, and actionability. Track Meaning Correspondence — the alignment between narrative and reality. Flag Transparency Trap risks where voluminous disclosure produces no usable information."
      features={[
        { title: "Stakeholder-Specific Report Generator", description: "Generate reports for boards, regulators, communities, investors — each optimized for its audience." },
        { title: "Communication Usability Testing", description: "Test every communication on three dimensions: legibility, verifiability, actionability. The Meaning pillar operationalized." },
        { title: "Meaning Correspondence Tracker", description: "Track the alignment between institutional narrative and institutional reality. High correspondence builds trust; low correspondence consumes it." },
        { title: "Transparency Trap Detection", description: "Automatic detection of voluminous disclosure that no stakeholder can actually use. Transparency without usability." },
        { title: "Plain-Language Community Summaries", description: "Auto-generate plain-language summaries of institutional activity for community stakeholders. Communication they can use." },
        { title: "Communication Audit Trail", description: "Every communication, every report, every claim — logged and traceable to underlying evidence." },
      ]}
      screenshots={[
        { title: "Report Builder", description: "Generate stakeholder-specific reports with usability testing." },
        { title: "Usability Test Results", description: "Legibility, verifiability, and actionability scores for every communication." },
        { title: "Correspondence Dashboard", description: "Track alignment between narrative and reality over time." },
      ]}
    />
  );
}
