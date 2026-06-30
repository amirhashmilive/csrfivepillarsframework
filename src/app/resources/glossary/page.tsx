import { SectionHeading } from "@/components/section-components";

const glossaryTerms = [
  { term: "Accountability Asymmetry", definition: "The structural condition in which accountability demands flow downward while verification flows nowhere." },
  { term: "The A-E-I-O-M Sequence", definition: "The canonical order of the Five Pillars: Accountability, Execution, Initiative, Outcome, Meaning. A chain of dependency." },
  { term: "Alignment Equation", definition: "The mathematical expression of the degree to which initiative, execution, and outcome are mutually aligned." },
  { term: "Betterment Evidence", definition: "Evidence of outcome that meets the Skeptical Observer Standard. The only evidence that satisfies the Outcome pillar." },
  { term: "Betterment Index", definition: "A composite measure of verified outcomes at the community level. Distinct from the CEI." },
  { term: "Betterment of Society", definition: "The cumulative, verifiable improvement in the condition of communities and systems affected by institutional action." },
  { term: "The Betterment Question", definition: "Can this institution demonstrate — with evidence that would convince a skeptical observer — that society is measurably better because of its presence?" },
  { term: "The Beneficiary Inversion", definition: "The structural error of positioning communities as passive recipients rather than participants." },
  { term: "CEI — Composite Effectiveness Index", definition: "CEI = [β·WDC + (1-β)·SAI] × L^γ. The composite diagnostic measuring institutional effectiveness." },
  { term: "The Compliance-Betterment Distinction", definition: "Compliance (satisfaction of rules) is not equivalent to betterment (verified improvement)." },
  { term: "The Compliance Theater", definition: "The performance of accountability through elaborate reporting that documents activity while obscuring the absence of outcomes." },
  { term: "Communication Usability", definition: "The degree to which institutional communication is legible, verifiable, and actionable by stakeholders." },
  { term: "The Compliance-Betterment Paradox", definition: "Countries with sophisticated CSR regulations do not necessarily produce more demonstrable betterment." },
  { term: "The Cultural Betterment Mechanism", definition: "Betterment produced through cultural, religious, or community-driven channels that regulatory frameworks don't capture." },
  { term: "Execution Architecture", definition: "The structural design of governance, capability, systems, and delivery mechanisms by which intent is converted into implementation." },
  { term: "The Expenditure Fallacy", definition: "The false equivalence between money spent and value created." },
  { term: "The Imposed Imperative", definition: "Initiatives that originate from institutional preference rather than participatory identification of need." },
  { term: "The Implementing Agency Variable", definition: "The capability of the implementing agency is the decisive variable in whether a framework produces outcomes." },
  { term: "Initiative Authenticity", definition: "The degree to which an institutional initiative originates from participatory identification of need." },
  { term: "L — Legitimacy Factor", definition: "A multiplicative component of the CEI reflecting the institution's Trust Layer Maturity." },
  { term: "The Legitimacy Gap", definition: "The distance between an institution's claimed legitimacy and its demonstrable legitimacy." },
  { term: "Legitimacy Migration", definition: "The institutional journey from expenditure-based legitimacy to evidence-based legitimacy." },
  { term: "Meaning Correspondence", definition: "The alignment between institutional narrative and institutional reality." },
  { term: "The Meta-Framework Positioning", definition: "The Five Pillars Framework is positioned as necessary but insufficient — not a replacement for existing frameworks." },
  { term: "Outcome Verifiability", definition: "The degree to which a claimed outcome can be independently confirmed by a skeptical observer." },
  { term: "The Output Illusion", definition: "The reporting of activities and outputs as if they constituted evidence of outcome." },
  { term: "Participatory Engagement", definition: "Authentic involvement of stakeholders in identification of need, design of initiative, and verification of outcome." },
  { term: "Pillar Coherence", definition: "The condition in which all five pillars are present, aligned, and mutually reinforcing." },
  { term: "Pillar Deficiency", definition: "The condition in which one or more pillars are absent or weak." },
  { term: "The Policy-Practice Chasm", definition: "The gap between designed intent and implemented reality, caused by insufficient execution architecture." },
  { term: "The Proclamation Trap", definition: "The systemic institutional failure of conflating proclamation with proof." },
  { term: "The Proclamation-Proof Gradient", definition: "The spectrum from pure proclamation (claims with no evidence) to verified proof (independently verifiable evidence)." },
  { term: "SAI — Stakeholder Alignment Index", definition: "A component of the CEI measuring stakeholder alignment. Captures Initiative and Meaning dimensions." },
  { term: "The Skeptical Observer Standard", definition: "The evidentiary bar that institutional claims must clear: sufficient to convince a skeptical, informed, independent observer." },
  { term: "Trust Capital", definition: "The accumulated reserve of institutional credibility built through verified outcomes over time." },
  { term: "The Trust Layer", definition: "The verification infrastructure — human, procedural, and technological — that makes institutional claims credible." },
  { term: "Trust Layer Maturity", definition: "The developmental stage of an institution's verification infrastructure." },
  { term: "The Transparency Trap", description: "The production of voluminous communication that no stakeholder can actually use to verify anything.", definition: "The production of voluminous communication that no stakeholder can actually use to verify anything." },
  { term: "Verification Debt", definition: "The accumulated mass of unverified claims an institution carries." },
  { term: "WDC — Weighted Delivery Composite", definition: "A component of the CEI measuring weighted delivery performance. Captures Execution and Outcome dimensions." },
];

export default function GlossaryPage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <>
      <section className="border-b py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Glossary
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            The Framework's Vocabulary
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {sorted.length} canonical doctrinal concepts — the terms that make up the Five
            Pillars Framework.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-4">
            {sorted.map((item) => (
              <div key={item.term} className="rounded-xl border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold">{item.term}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
