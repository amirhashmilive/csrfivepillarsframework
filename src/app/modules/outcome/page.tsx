import { ModulePageTemplate } from "@/components/module-page-template";

export default function OutcomeModule() {
  return (
    <ModulePageTemplate
      letter="O"
      letterIndex={3}
      name="Outcome"
      tagline="Demonstrable, attributable change. The core module."
      failureMode="The Output Illusion"
      verificationDemand="Can the institution demonstrate, with evidence that would convince a skeptical observer, that a measurable change occurred in the world, and that this change is attributable to its action?"
      description="The Outcome module is the core of the platform — the module that converts activity reporting into evidence-based betterment verification. Build activity→output→outcome→betterment chains. Upload Betterment Evidence that meets the Skeptical Observer Standard. Track Outcome Verifiability. Detect the Output Illusion where activities are reported as if they were outcomes. Calculate the Betterment Index — your community-level verified betterment score."
      features={[
        { title: "Outcome Chain Builder", description: "Build the complete chain: Activity → Output → Outcome → Betterment. Every link must be verified." },
        { title: "Betterment Evidence Library", description: "Upload, organize, and verify evidence. The Skeptical Observer Standard built into every assessment." },
        { title: "Outcome Verifiability Scoring", description: "Score every claimed outcome on verifiability — can a skeptical observer independently confirm this?" },
        { title: "Output Illusion Detection", description: "Automatic detection of outputs reported as outcomes. The most common Proclamation Trap pattern." },
        { title: "Betterment Index Calculation", description: "Calculate the Betterment Index — verified betterment at the community level, distinct from institutional effectiveness." },
        { title: "Attribution Analysis", description: "Establish causal attribution between intervention and outcome. The hardest part of verification, made structured." },
      ]}
      screenshots={[
        { title: "Outcome Chain", description: "Visual chain from activity through output to outcome and betterment." },
        { title: "Evidence Library", description: "Organized library of all Betterment Evidence, with verifiability scores." },
        { title: "Verification Dashboard", description: "Overview of all outcomes, their verification status, and gaps." },
      ]}
    />
  );
}
