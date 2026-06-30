import { ModulePageTemplate } from "@/components/module-page-template";

export default function ExecutionModule() {
  return (
    <ModulePageTemplate
      letter="E"
      letterIndex={1}
      name="Execution"
      tagline="The operational architecture that converts intent to reality."
      failureMode="The Policy-Practice Chasm"
      verificationDemand="Can the institution demonstrate the operational architecture by which intent becomes reality, and can it show that this architecture actually functions?"
      description="The Execution module manages the architecture that carries intent into implementation. Register implementing agencies with capability assessments. Track initiative execution status. Monitor the Implementing Agency Variable — the decisive variable that determines whether a framework produces outcomes. The module flags Policy-Practice Chasm risks where elegant designs fail to materialize in implementation."
      features={[
        { title: "Implementing Agency Registry", description: "Register and profile every implementing agency — departments, contractors, partners — with capability assessments." },
        { title: "Agency Capability Assessment", description: "Assess each agency's execution architecture, community embeddedness, and accountability discipline." },
        { title: "Execution Status Tracker", description: "Track every initiative from design through implementation to outcome. Real-time status visibility." },
        { title: "Implementing Agency Variable Analytics", description: "See which agencies produce outcomes and which don't. The decisive variable, made visible for the first time." },
        { title: "Policy-Practice Chasm Alerts", description: "Automatic alerts when execution diverges from design — before the gap becomes a legitimacy failure." },
        { title: "Execution Architecture Mapping", description: "Map governance structures, delivery systems, and institutional capability for every initiative." },
      ]}
      screenshots={[
        { title: "Agency Dashboard", description: "Profile and capability assessment for each implementing agency." },
        { title: "Execution Timeline", description: "Track initiative progress from design through implementation." },
        { title: "Capability Matrix", description: "Compare agency capabilities across execution dimensions." },
      ]}
    />
  );
}
