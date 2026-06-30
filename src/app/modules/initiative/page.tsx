import { ModulePageTemplate } from "@/components/module-page-template";

export default function InitiativeModule() {
  return (
    <ModulePageTemplate
      letter="I"
      letterIndex={2}
      name="Initiative"
      tagline="Participatory origin — not imposed institutional preference."
      failureMode="The Imposed Imperative"
      verificationDemand="Can the institution demonstrate that the initiative originated from participatory identification of need, and can it show that stakeholders recognize the initiative as responsive to their reality?"
      description="The Initiative module ensures that your initiatives begin from genuine identification of what matters — not from institutional preference. Log participatory engagement processes. Track initiative origin (participatory vs. imposed). Record community endorsement. The module flags Imposed Imperative risks where initiatives are operationally excellent but substantively disconnected from the communities they claim to serve."
      features={[
        { title: "Participatory Engagement Tracker", description: "Document every stage of stakeholder engagement — from need identification through initiative design." },
        { title: "Initiative Origin Logger", description: "Track whether each initiative originated from participatory engagement or institutional imposition. The distinction that matters." },
        { title: "Community Endorsement Recording", description: "Record formal community endorsement of initiatives. Stakeholder recognition as evidence." },
        { title: "Imposed Imperative Risk Flags", description: "Automatic alerts when initiatives lack participatory origin — before they become legitimacy failures." },
        { title: "Stakeholder Identification Workflow", description: "Structured workflow for participatory identification of need. Distinguished from consultation and notification." },
        { title: "Initiative Authenticity Scoring", description: "Score each initiative on authenticity — the degree to which it responds to stakeholder-identified need." },
      ]}
      screenshots={[
        { title: "Initiative Profile", description: "Full profile including origin, engagement process, and community endorsement." },
        { title: "Participatory Log", description: "Chronological record of every engagement activity." },
        { title: "Risk Dashboard", description: "Initiatives flagged for Imposed Imperative risk." },
      ]}
    />
  );
}
