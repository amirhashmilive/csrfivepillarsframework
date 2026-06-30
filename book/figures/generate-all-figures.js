// generate-all-figures.js
// Produces 50 framework figures for The Five Pillars Framework book.
// All figures conform to the Visual Communication Constitution:
//   - Black-and-white only (grayscale hierarchy)
//   - Times New Roman font
//   - Passes 30-Second, Stand-Alone, and Photocopy Tests
//   - No decorative elements; every element serves a teaching function

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// =====================================================================
// HTML WRAPPERS
// =====================================================================

const LANDSCAPE_HEAD = (title) => `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page { size: 1280px 720px; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    font-family: 'Times New Roman', Georgia, serif;
    background: #FFFFFF;
    color: #1a1a1a;
    width: 1280px;
    height: 720px;
    overflow: hidden;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px 36px;
  }
  .container {
    width: 1208px;
    max-height: 664px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }
  .subtitle {
    text-align: center;
    font-size: 13px;
    color: #555;
    font-style: italic;
    margin-bottom: 18px;
  }
  .caption {
    text-align: center;
    margin-top: 14px;
    font-size: 11px;
    color: #555;
    font-style: italic;
    line-height: 1.45;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
</head>
<body>
<div class="container">`;

const PORTRAIT_HEAD = (title) => `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page { size: 720px 1280px; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    font-family: 'Times New Roman', Georgia, serif;
    background: #FFFFFF;
    color: #1a1a1a;
    width: 720px;
    height: 1280px;
    overflow: hidden;
  }
  body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 36px 36px;
  }
  .container {
    width: 648px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }
  .subtitle {
    text-align: center;
    font-size: 13px;
    color: #555;
    font-style: italic;
    margin-bottom: 18px;
  }
  .caption {
    text-align: center;
    margin-top: 14px;
    font-size: 11px;
    color: #555;
    font-style: italic;
    line-height: 1.45;
  }
</style>
</head>
<body>
<div class="container">`;

const FOOT = `</div>
</body>
</html>`;

// =====================================================================
// SHARED COMPONENT BUILDERS
// =====================================================================

function tableStyle(extra = '') {
  return `
  table.cmp { width: 100%; border-collapse: collapse; font-size: 12px; }
  table.cmp th, table.cmp td {
    border: 1px solid #1a1a1a;
    padding: 9px 8px;
    text-align: left;
    vertical-align: top;
    line-height: 1.35;
  }
  table.cmp th {
    background: #1a1a1a;
    color: #FFFFFF;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 11px;
    text-align: center;
  }
  table.cmp td.rowlabel {
    background: #f0f0f0;
    font-weight: bold;
    text-align: left;
    width: 18%;
  }
  table.cmp td.cell { text-align: left; }
  table.cmp tr.alt td { background: #fafafa; }
  table.cmp tr.alt td.rowlabel { background: #ececec; }
  ${extra}
  `;
}

// =====================================================================
// FIGURE DEFINITIONS
// Each entry: { id, orientation ('L'|'P'), title, subtitle, bodyHTML, captionHTML }
// =====================================================================

const FIGURES = [];

// ---------------------------------------------------------------------
// FPF-003 — Reporting vs. Verification (Ch1, Comparison Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-003', orient: 'L',
  title: 'Reporting vs. Verification',
  subtitle: 'The distinction the Proclamation Trap obscures',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 22%; }
    table.cmp th { font-size: 13px; }
    table.cmp td { font-size: 12px; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th style="width:22%">Dimension</th>
        <th style="width:39%">Reporting</th>
        <th style="width:39%">Verification</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">Question answered</td>
        <td class="cell">"What did the institution do?"</td>
        <td class="cell">"What changed because of what the institution did?"</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Evidence type</td>
        <td class="cell">Activity records, output counts, disclosure volume</td>
        <td class="cell">Outcome measurement, attribution analysis, independent verification</td>
      </tr>
      <tr>
        <td class="rowlabel">Direction of flow</td>
        <td class="cell">Institution → Stakeholder (one-directional)</td>
        <td class="cell">Institution ↔ Independent Observer (examinable)</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Consequence of failure</td>
        <td class="cell">Reputational risk; remediated by more reporting</td>
        <td class="cell">Legitimacy loss; remediated only by architectural change</td>
      </tr>
      <tr>
        <td class="rowlabel">Relationship to outcome</td>
        <td class="cell">Implies outcome; does not establish it</td>
        <td class="cell">Establishes outcome; implication replaced by evidence</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Who performs it</td>
        <td class="cell">The institution (communications, compliance, audit functions)</td>
        <td class="cell">Independent observers (auditors, monitors, stakeholders, evaluators)</td>
      </tr>
      <tr>
        <td class="rowlabel">What it establishes</td>
        <td class="cell">Claimed legitimacy</td>
        <td class="cell">Demonstrable legitimacy</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    Reporting and verification are often treated as equivalent. They are not. Reporting documents what an institution did; verification establishes what changed. The Proclamation Trap persists because institutions have built sophisticated reporting architectures without building verification architectures.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-004 — Activities vs. Outcomes: A Comparison Across Archetypes (Ch1, Comparison Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-004', orient: 'L',
  title: 'Activities vs. Outcomes: A Comparison Across Archetypes',
  subtitle: 'The Proclamation Trap manifests across sectors with identical architecture',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 22%; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Dimension</th>
        <th>Multinational Extractive Enterprise</th>
        <th>Sovereign Development Fund</th>
        <th>What the Skeptical Observer Requires</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">What is reported (Activity)</td>
        <td class="cell">Schools built, health camps conducted, training delivered, local procurement achieved</td>
        <td class="cell">Capital committed, programs approved, partnerships formed, disbursements executed</td>
        <td class="cell">Activity framed as <em>input</em> to outcome, not as outcome itself</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">What is counted (Output)</td>
        <td class="cell">Number of beneficiaries reached; facilities operational; hours of training</td>
        <td class="cell">Dollars disbursed; number of programs; partners onboarded</td>
        <td class="cell">Outputs as <em>intermediate</em> products, accompanied by outcome measures</td>
      </tr>
      <tr>
        <td class="rowlabel">What is implied (Outcome)</td>
        <td class="cell">"Children are learning; livelihoods improved; health indicators rose"</td>
        <td class="cell">"Landscapes transformed; capacities built; well-being advanced"</td>
        <td class="cell">Outcomes <em>demonstrated</em> with evidence, not implied by proximity</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">What is established (Betterment)</td>
        <td class="cell">Communities <em>assumed</em> better off; no attributable evidence</td>
        <td class="cell">Landscapes <em>assumed</em> improved; implementing agency variable unexamined</td>
        <td class="cell">Measurable, attributable, independently verifiable improvement</td>
      </tr>
      <tr>
        <td class="rowlabel">Verification Threshold crossed?</td>
        <td class="cell" style="text-align:center; font-weight:bold;">✗ No</td>
        <td class="cell" style="text-align:center; font-weight:bold;">✗ No</td>
        <td class="cell" style="text-align:center; font-weight:bold;">✓ Required</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    The same Proclamation Trap manifests across sectors. Both archetypes report activities with sophistication and imply outcomes without establishing them. Neither crosses the Verification Threshold. The Skeptical Observer requires what neither provides.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-005 — Chapter 1 Executive Summary (Portrait, ES Graphic)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-005', orient: 'P',
  title: 'CHAPTER 1 — THE PROCLAMATION TRAP',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'PROBLEM', text: 'Institutions report more than ever. Evidence of betterment is scarce.' },
    { label: 'FRAMEWORK RESPONSE', text: 'The Proclamation Trap: conflating proclamation with proof.' },
    { label: 'FOUR COMPONENTS', text: 'The Expenditure Fallacy · The Output Illusion · The Compliance Theater · The Skeptical Observer Standard' },
    { label: 'RESULT', text: 'Reporting without verification. Activity without outcome. Legitimacy without evidence.' },
    { label: 'KEY TAKEAWAY', text: 'The Proclamation Trap is not solved by more reporting. It is solved only by the architecture that makes proclamation unnecessary because proof is available.', highlight: true }
  ])
});

// ---------------------------------------------------------------------
// FPF-006 — The Legitimacy Gap (Ch2, Framework Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-006', orient: 'L',
  title: 'The Legitimacy Gap',
  subtitle: 'The distance between claimed legitimacy and demonstrable legitimacy',
  bodyHTML: `
  <style>
    .gap-wrap { display: flex; align-items: stretch; justify-content: space-between; gap: 0; margin-top: 10px; height: 360px; }
    .gap-col { width: 32%; border: 2px solid #1a1a1a; padding: 18px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
    .gap-col.claimed { background: #f0f0f0; }
    .gap-col.gap { border: none; padding: 18px 8px; background: transparent; border-top: 2px dashed #1a1a1a; border-bottom: 2px dashed #1a1a1a; background: #fafafa; }
    .gap-col.demonstrable { background: #1a1a1a; color: #FFFFFF; }
    .gap-col h3 { font-size: 16px; font-weight: bold; letter-spacing: 1px; margin-bottom: 12px; text-transform: uppercase; }
    .gap-col p { font-size: 13px; line-height: 1.5; }
    .gap-col.gap h3 { font-size: 18px; }
    .gap-col.gap .patterns { margin-top: 14px; display: flex; flex-direction: column; gap: 6px; font-size: 11px; font-style: italic; color: #444; }
    .arrow-down { text-align: center; font-size: 13px; font-style: italic; color: #555; margin-top: 16px; }
  </style>
  <div class="gap-wrap">
    <div class="gap-col claimed">
      <h3>Claimed Legitimacy</h3>
      <p>What the institution asserts — the impact it proclaims in reports, disclosures, and communications.</p>
    </div>
    <div class="gap-col gap">
      <h3>The Legitimacy Gap</h3>
      <p style="font-size:12px;">The structural distance between what is claimed and what is demonstrable.</p>
      <div class="patterns">
        <span>· Expenditure Fallacy</span>
        <span>· Output Illusion</span>
        <span>· Compliance Theater</span>
        <span>· Transparency Trap</span>
        <span>· Imposed Imperative</span>
        <span>· Verification Debt</span>
      </div>
    </div>
    <div class="gap-col demonstrable">
      <h3>Demonstrable Legitimacy</h3>
      <p>What the institution can establish with evidence that meets the Skeptical Observer Standard.</p>
    </div>
  </div>
  <div class="arrow-down">The framework exists to close the gap — not by reducing claims, but by increasing demonstrable legitimacy.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-007 — The Theory of Change Migration (Ch2, Process Flow)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-007', orient: 'L',
  title: 'The Theory of Change Migration',
  subtitle: 'From expenditure-based to evidence-based legitimacy',
  bodyHTML: `
  <style>
    .migration { display: flex; align-items: stretch; gap: 0; margin-top: 18px; height: 260px; }
    .endpt { width: 18%; border: 2px solid #1a1a1a; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 12px; }
    .endpt.left { background: #f0f0f0; }
    .endpt.right { background: #1a1a1a; color: #FFFFFF; }
    .endpt h4 { font-size: 13px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase; }
    .stage-col { flex: 1; display: flex; flex-direction: column; align-items: stretch; }
    .stage-arrow { width: 28px; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #1a1a1a; font-weight: bold; }
    .stage { flex: 1; border: 2px solid #1a1a1a; padding: 10px 8px; text-align: center; display: flex; flex-direction: column; justify-content: center; background: #fafafa; }
    .stage .num { font-size: 11px; font-weight: bold; color: #666; letter-spacing: 1px; }
    .stage .name { font-size: 14px; font-weight: bold; margin: 4px 0; }
    .stage .desc { font-size: 11px; color: #333; line-height: 1.35; }
    .feedback { margin-top: 20px; text-align: center; font-size: 12px; font-style: italic; color: #555; padding: 10px; border-top: 1px dashed #1a1a1a; }
    .feedback .rev-arrow { font-weight: bold; color: #1a1a1a; }
  </style>
  <div class="migration">
    <div class="endpt left">
      <h4>Expenditure-Based Legitimacy</h4>
      <p style="font-size:11px; margin-top:6px;">Legitimacy claimed through spending</p>
    </div>
    <div class="stage-arrow">→</div>
    <div class="stage-col" style="flex:1;">
      <div class="stage" style="margin-bottom:8px;">
        <div class="num">STAGE 1</div>
        <div class="name">Recognition</div>
        <div class="desc">The institution acknowledges the gap.</div>
      </div>
      <div class="stage" style="margin-bottom:8px;">
        <div class="num">STAGE 2</div>
        <div class="name">Reconstruction</div>
        <div class="desc">The institution rebuilds architecture around evidence.</div>
      </div>
      <div class="stage">
        <div class="num">STAGE 3</div>
        <div class="name">Demonstration</div>
        <div class="desc">The institution produces verifiable outcome.</div>
      </div>
    </div>
    <div class="stage-arrow">→</div>
    <div class="endpt right">
      <h4>Evidence-Based Legitimacy</h4>
      <p style="font-size:11px; margin-top:6px;">Legitimacy demonstrated through verified outcomes</p>
    </div>
  </div>
  <div class="feedback">
    <span class="rev-arrow">← Slippage:</span> Without architectural vigilance, migration reverses. New leadership, new regulations, or new reporting fads can resurrect the Proclamation Trap.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-008 — The Legitimacy Gap Across Two Archetypes (Ch2, Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-008', orient: 'L',
  title: 'The Legitimacy Gap Across Two Archetypes',
  subtitle: 'The same gap manifests across sectors with similar architecture',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 22%; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Dimension</th>
        <th>Global Health Foundation</th>
        <th>Transitional Welfare Authority</th>
        <th>What Demonstrable Legitimacy Would Require</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">What is claimed</td>
        <td class="cell">Improved health outcomes across funded landscapes; millions of lives touched</td>
        <td class="cell">Improved well-being across served populations; safety net delivered</td>
        <td class="cell">Outcomes specified in advance; claims bounded by what evidence can support</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">What is reported</td>
        <td class="cell">$2B disbursed; 400 programs; 30 countries; glossy retrospective</td>
        <td class="cell">Expenditure against allocation; outputs (rations, houses, enrollments); dashboards</td>
        <td class="cell">Reporting restructured around outcome evidence, not disclosure volume</td>
      </tr>
      <tr>
        <td class="rowlabel">What is verified</td>
        <td class="cell">Disbursement against commitment; implementing agency variable unexamined</td>
        <td class="cell">Compliance with regulatory disclosure; beneficiary counts; audit certificates</td>
        <td class="cell">Outcome verified independently; implementing agency capability disaggregated</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">What is the gap</td>
        <td class="cell">Between celebrated narratives and absent outcome evidence</td>
        <td class="cell">Between elaborate reporting and inability to answer the Betterment Question</td>
        <td class="cell">Closed when the architecture produces evidence, not more reporting</td>
      </tr>
      <tr>
        <td class="rowlabel">Position on the Proclamation-Proof Gradient</td>
        <td class="cell" style="text-align:center;">Position 3 — Output Metrics</td>
        <td class="cell" style="text-align:center;">Position 3 — Output Metrics</td>
        <td class="cell" style="text-align:center;">Position 5 — Verified Proof</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    The Legitimacy Gap manifests across sectors with similar architecture. Both archetypes claim impact, report activity, and verify little. The gap is the same. The architecture that closes it is the same.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-009 — The Six Dimensions of Framework Evaluation (Ch3, Framework Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-009', orient: 'L',
  title: 'The Six Dimensions of Framework Evaluation',
  subtitle: 'Existing frameworks address the first five. The sixth is empty.',
  bodyHTML: `
  <style>
    .dims { display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; margin-top: 30px; height: 280px; padding: 0 10px; }
    .dim { flex: 1; display: flex; flex-direction: column; align-items: center; }
    .bar { width: 100%; border: 2px solid #1a1a1a; padding: 12px 8px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; }
    .bar.solid { background: #c0c0c0; }
    .bar.missing { background: #FFFFFF; border: 2px dashed #1a1a1a; }
    .bar .num { font-size: 12px; font-weight: bold; color: #555; letter-spacing: 1px; }
    .bar .name { font-size: 14px; font-weight: bold; margin: 6px 0; text-transform: uppercase; }
    .bar .q { font-size: 10px; font-style: italic; color: #333; line-height: 1.3; }
    .bar.missing .name, .bar.missing .q { color: #1a1a1a; }
    .missing-label { margin-top: 10px; font-size: 11px; font-style: italic; color: #1a1a1a; font-weight: bold; }
    .dim-label { margin-top: 12px; font-size: 12px; font-weight: bold; text-align: center; }
    .bracket { margin-top: 22px; text-align: center; font-size: 13px; font-style: italic; color: #555; border-top: 1px solid #1a1a1a; padding-top: 10px; }
  </style>
  <div class="dims">
    <div class="dim">
      <div class="bar solid">
        <div class="num">DIM 1</div>
        <div class="name">Compliance</div>
        <div class="q">"What must the organization do?"</div>
      </div>
      <div class="dim-label">Compliance</div>
    </div>
    <div class="dim">
      <div class="bar solid">
        <div class="num">DIM 2</div>
        <div class="name">Governance</div>
        <div class="q">"How should the organization decide?"</div>
      </div>
      <div class="dim-label">Governance</div>
    </div>
    <div class="dim">
      <div class="bar solid">
        <div class="num">DIM 3</div>
        <div class="name">Stakeholders</div>
        <div class="q">"Whose interests should be considered?"</div>
      </div>
      <div class="dim-label">Stakeholders</div>
    </div>
    <div class="dim">
      <div class="bar solid">
        <div class="num">DIM 4</div>
        <div class="name">Reporting</div>
        <div class="q">"How should the organization report?"</div>
      </div>
      <div class="dim-label">Reporting</div>
    </div>
    <div class="dim">
      <div class="bar solid">
        <div class="num">DIM 5</div>
        <div class="name">Impact</div>
        <div class="q">"How should the organization assess its effects?"</div>
      </div>
      <div class="dim-label">Impact</div>
    </div>
    <div class="dim">
      <div class="bar missing">
        <div class="num">DIM 6</div>
        <div class="name">Betterment Verification</div>
        <div class="q">"Can the organization prove that society is better because of its action?"</div>
      </div>
      <div class="missing-label">The Missing Dimension</div>
    </div>
  </div>
  <div class="bracket">— What a complete framework would address: six dimensions. The Five Pillars Framework exists to fill the sixth. —</div>
  `
});

// ---------------------------------------------------------------------
// FPF-011 — The Meta-Framework Positioning (Ch3, Concentric Architecture)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-011', orient: 'L',
  title: 'The Meta-Framework Positioning',
  subtitle: 'The Five Pillars Framework completes existing frameworks; it does not replace them',
  bodyHTML: `
  <style>
    .meta-wrap { display: flex; align-items: center; justify-content: center; gap: 30px; margin-top: 14px; height: 380px; }
    .concentric { position: relative; width: 360px; height: 360px; display: flex; align-items: center; justify-content: center; }
    .outer { position: absolute; top: 0; left: 0; width: 360px; height: 360px; border: 2px solid #1a1a1a; border-radius: 50%; background: #f0f0f0; display: flex; align-items: flex-start; justify-content: center; padding-top: 10px; }
    .outer-label { font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; background: #FFFFFF; padding: 0 8px; }
    .frameworks-list { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 320px; text-align: center; font-size: 11px; color: #333; line-height: 1.7; font-style: italic; }
    .inner { position: relative; width: 180px; height: 180px; border: 2px solid #1a1a1a; border-radius: 50%; background: #1a1a1a; color: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 14px; z-index: 2; }
    .inner .title-i { font-size: 13px; font-weight: bold; line-height: 1.3; }
    .inner .sub-i { font-size: 11px; margin-top: 6px; font-style: italic; }
    .text-side { flex: 1; max-width: 360px; }
    .text-side h4 { font-size: 14px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .arrow-block { font-size: 28px; color: #1a1a1a; text-align: center; margin: 14px 0; font-weight: bold; }
    .principle { font-size: 12px; line-height: 1.6; color: #333; padding: 12px; border-left: 3px solid #1a1a1a; background: #fafafa; }
    .principle strong { color: #1a1a1a; }
    .principle.foot { margin-top: 14px; text-align: center; font-style: italic; border-left: none; background: transparent; padding: 8px; }
  </style>
  <div class="meta-wrap">
    <div class="concentric">
      <div class="outer">
        <div class="outer-label">Existing Frameworks</div>
        <div class="frameworks-list">
          Carroll's Pyramid · Triple Bottom Line · Stakeholder Theory · Creating Shared Value · ESG · GRI · ISO 26000 · SDGs · BRSR
        </div>
      </div>
      <div class="inner">
        <div class="title-i">The Five Pillars Framework</div>
        <div class="sub-i">Betterment Verification</div>
      </div>
    </div>
    <div class="text-side">
      <h4>Positioning</h4>
      <div class="principle">
        <strong>Necessary but insufficient.</strong> Existing frameworks are necessary for their purposes (compliance, reporting, stakeholder identification). They are insufficient for demonstrating betterment.
      </div>
      <div class="arrow-block">↑</div>
      <div class="principle">
        <strong>Completes, does not replace.</strong> The Five Pillars Framework does not compete with existing frameworks. It adds the dimension they collectively lack.
      </div>
      <div class="principle foot">
        Existing frameworks are necessary but insufficient. The Five Pillars Framework provides the dimension they collectively lack.
      </div>
    </div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-013 — Pillar Coherence vs. Pillar Deficiency (Ch4, Comparison Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-013', orient: 'L',
  title: 'Pillar Coherence vs. Pillar Deficiency',
  subtitle: 'The strength of the strongest pillar cannot compensate for the weakness of the weakest',
  bodyHTML: `
  <style>
    .compare { display: flex; gap: 28px; justify-content: space-between; margin-top: 16px; height: 340px; }
    .panel { flex: 1; border: 2px solid #1a1a1a; padding: 16px 14px; display: flex; flex-direction: column; align-items: center; }
    .panel h3 { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
    .pillars-row { display: flex; align-items: flex-end; justify-content: center; gap: 8px; height: 220px; margin-bottom: 12px; }
    .pillar { width: 38px; border: 2px solid #1a1a1a; border-bottom: none; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 4px; font-size: 14px; font-weight: bold; color: #1a1a1a; }
    .pillar.full { background: #c0c0c0; height: 180px; }
    .pillar.short { background: #c0c0c0; height: 180px; }
    .pillar.collapsed { background: #f0f0f0; height: 60px; border-top: 2px dashed #1a1a1a; }
    .arc { width: 220px; height: 22px; border: 2px solid #1a1a1a; border-bottom: none; border-radius: 110px 110px 0 0; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
    .arc.legit { background: #1a1a1a; color: #FFFFFF; }
    .arc.illegit { background: #f0f0f0; color: #1a1a1a; border-style: dashed; }
    .panel .label-row { font-size: 11px; color: #555; font-style: italic; text-align: center; margin-top: 4px; }
    .principle { text-align: center; margin-top: 16px; font-size: 13px; font-style: italic; color: #1a1a1a; font-weight: bold; padding: 10px; border-top: 1px solid #1a1a1a; }
  </style>
  <div class="compare">
    <div class="panel">
      <h3>Pillar Coherence</h3>
      <div class="arc legit">Legitimacy</div>
      <div class="pillars-row">
        <div class="pillar full">A</div>
        <div class="pillar full">E</div>
        <div class="pillar full">I</div>
        <div class="pillar full">O</div>
        <div class="pillar full">M</div>
      </div>
      <div class="label-row">All five pillars present and aligned</div>
    </div>
    <div class="panel">
      <h3>Pillar Deficiency</h3>
      <div class="arc illegit">Illegitimacy</div>
      <div class="pillars-row">
        <div class="pillar full">A</div>
        <div class="pillar full">E</div>
        <div class="pillar short">I</div>
        <div class="pillar collapsed">O</div>
        <div class="pillar full">M</div>
      </div>
      <div class="label-row">Outcome (O) collapsed — the structure fails</div>
    </div>
  </div>
  <div class="principle">The strength of the strongest pillar cannot compensate for the weakness of the weakest. Legitimacy requires coherence.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-014 — The Comparative Architecture Analysis (Ch4, 2x2 Grid)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-014', orient: 'L',
  title: 'The Comparative Architecture Analysis',
  subtitle: 'Three alternative architectures considered and rejected',
  bodyHTML: `
  <style>
    .grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 16px; margin-top: 14px; height: 420px; }
    .cell { border: 2px solid #1a1a1a; padding: 12px 12px 10px; display: flex; flex-direction: column; align-items: center; }
    .cell.chosen { background: #1a1a1a; color: #FFFFFF; }
    .cell.rejected { background: #fafafa; }
    .cell h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; text-align: center; }
    .cell .pillars { display: flex; align-items: flex-end; justify-content: center; gap: 4px; height: 110px; margin: 8px 0; }
    .cell .pillars .p { width: 22px; border: 2px solid currentColor; border-bottom: none; height: 90px; display: flex; align-items: flex-end; justify-content: center; font-size: 11px; font-weight: bold; padding-bottom: 2px; }
    .cell .pillars .p.tall { height: 90px; }
    .cell .pillars .p.short { height: 60px; }
    .cell .pillars .network { display: flex; align-items: center; justify-content: center; height: 90px; width: 100%; font-size: 10px; font-style: italic; }
    .cell .verdict { font-size: 11px; font-weight: bold; margin-top: 6px; padding: 4px 8px; text-transform: uppercase; letter-spacing: 0.5px; text-align: center; }
    .cell.chosen .verdict { background: #FFFFFF; color: #1a1a1a; }
    .cell.rejected .verdict { background: #1a1a1a; color: #FFFFFF; }
    .cell .label { font-size: 10px; font-style: italic; text-align: center; margin-top: 6px; line-height: 1.3; }
  </style>
  <div class="grid">
    <div class="cell chosen">
      <h3>The Five Pillars Framework</h3>
      <div class="pillars">
        <div class="p tall">A</div>
        <div class="p tall">E</div>
        <div class="p tall">I</div>
        <div class="p tall">O</div>
        <div class="p tall">M</div>
      </div>
      <div class="label">Five distinct pillars; sequence enforced</div>
      <div class="verdict">The architecture the problem requires</div>
    </div>
    <div class="cell rejected">
      <h3>Four-Pillar Alternative</h3>
      <div class="pillars">
        <div class="p tall">A/E</div>
        <div class="p tall">I</div>
        <div class="p tall">O</div>
        <div class="p tall">M</div>
      </div>
      <div class="label">Two pillars collapsed into one</div>
      <div class="verdict">Rejected — collapses necessary distinctions</div>
    </div>
    <div class="cell rejected">
      <h3>Six-Pillar Alternative</h3>
      <div class="pillars">
        <div class="p short">A</div>
        <div class="p short">E</div>
        <div class="p short">I</div>
        <div class="p short">O</div>
        <div class="p short">M</div>
        <div class="p short">+1</div>
      </div>
      <div class="label">Sixth pillar duplicates an existing one</div>
      <div class="verdict">Rejected — elevates supporting concepts to pillar status</div>
    </div>
    <div class="cell rejected">
      <h3>Parallel-Network Alternative</h3>
      <div class="pillars">
        <div class="network">A ⇄ E ⇄ I ⇄ O ⇄ M<br>(no enforced sequence)</div>
      </div>
      <div class="label">Capabilities configured without sequence</div>
      <div class="verdict">Rejected — does not enforce the required sequence</div>
    </div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-015 — Five Pillars Application Across Two Archetypes (Ch4, Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-015', orient: 'L',
  title: 'Five Pillars Application Across Two Archetypes',
  subtitle: 'The framework applies across sectors without modification',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 16%; }
    table.cmp td.cell { text-align: center; }
    .present { font-weight: bold; }
    .partial { font-style: italic; color: #555; }
    .deficient { font-weight: bold; color: #1a1a1a; text-decoration: underline; }
    .variable { font-style: italic; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Pillar</th>
        <th>Multinational Extractive Enterprise</th>
        <th>Educational Transformation Initiative</th>
        <th>What Coherence Would Require</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">A — Accountability</td>
        <td class="cell partial">Partially Present</td>
        <td class="cell present">Present</td>
        <td class="cell">Specified outcomes; answerable for results</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">E — Execution</td>
        <td class="cell present">Present</td>
        <td class="cell variable">Variable (by context)</td>
        <td class="cell">Operational architecture across all contexts</td>
      </tr>
      <tr>
        <td class="rowlabel">I — Initiative</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell present">Present</td>
        <td class="cell">Participatory Engagement; community-recognized design</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">O — Outcome</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell partial">Partially Present</td>
        <td class="cell">Betterment Evidence meeting the Skeptical Observer Standard</td>
      </tr>
      <tr>
        <td class="rowlabel">M — Meaning</td>
        <td class="cell partial">Partially Present</td>
        <td class="cell present">Present</td>
        <td class="cell">Communication Usability — legible, verifiable, actionable</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Pillar Coherence</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell partial">Partial (context-dependent)</td>
        <td class="cell">All five pillars present, aligned, mutually reinforcing</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    The Five Pillars Framework applies across sectors without modification. Both archetypes have Pillar Deficiency, but in different pillars and for different architectural reasons. The framework's universality is not a claim; it is a demonstration.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-016 — Activity-Output-Outcome-Betterment Hierarchy (Expanded) (Ch5)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-016', orient: 'L',
  title: 'The Activity-Output-Outcome-Betterment Hierarchy (Expanded)',
  subtitle: 'Each level requires structurally different evidence',
  bodyHTML: `
  <style>
    .hier { display: flex; flex-direction: column; align-items: center; gap: 0; margin: 16px auto; width: 100%; }
    .lvl { display: flex; width: 90%; border: 2px solid #1a1a1a; }
    .lvl.left { flex: 1.4; padding: 14px 16px; border-right: none; }
    .lvl.right { flex: 1; padding: 14px 16px; background: #f0f0f0; border-left: 2px solid #1a1a1a; }
    .lvl-1 { width: 90%; }
    .lvl-2 { width: 84%; }
    .lvl-3 { width: 78%; }
    .lvl-4 { width: 72%; background: #1a1a1a; color: #FFFFFF; }
    .lvl-4 .lvl.right { background: #404040; color: #FFFFFF; border-left-color: #FFFFFF; }
    .lvl-label { font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
    .lvl-desc { font-size: 11px; line-height: 1.4; }
    .lvl-ev-label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; color: #1a1a1a; }
    .lvl-4 .lvl-ev-label { color: #FFFFFF; }
    .lvl-ev { font-size: 11px; line-height: 1.4; font-style: italic; }
    .arrow-d { width: 2px; height: 14px; background: #1a1a1a; margin: 0 auto; position: relative; }
    .arrow-d::after { content:''; position:absolute; bottom:-2px; left:-4px; width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent; border-top:7px solid #1a1a1a; }
    .threshold { width: 84%; border-top: 2px dashed #1a1a1a; margin: 8px auto; padding-top: 6px; text-align: center; font-size: 11px; font-weight: bold; font-style: italic; }
    .anno { position: relative; margin-top: 14px; text-align: center; font-size: 12px; color: #555; font-style: italic; }
  </style>
  <div class="hier">
    <div class="lvl lvl-4">
      <div class="left"><div class="lvl-label">Betterment</div><div class="lvl-desc">Verified improvement in the condition of the community or system</div></div>
      <div class="right"><div class="lvl-ev-label">Evidence Required</div><div class="lvl-ev">Betterment Evidence meeting the Skeptical Observer Standard</div></div>
    </div>
    <div class="arrow-d"></div>
    <div class="lvl lvl-3">
      <div class="left"><div class="lvl-label">Outcome</div><div class="lvl-desc">What changed in the world</div></div>
      <div class="right"><div class="lvl-ev-label">Evidence Required</div><div class="lvl-ev">Measurement of change with attribution</div></div>
    </div>
    <div class="threshold">— The Verification Threshold — The Outcome pillar operates at these top two levels —</div>
    <div class="arrow-d"></div>
    <div class="lvl lvl-2">
      <div class="left"><div class="lvl-label">Output</div><div class="lvl-desc">What was produced</div></div>
      <div class="right"><div class="lvl-ev-label">Evidence Required</div><div class="lvl-ev">Counts of outputs (people trained, facilities built)</div></div>
    </div>
    <div class="arrow-d"></div>
    <div class="lvl lvl-1">
      <div class="left"><div class="lvl-label">Activity</div><div class="lvl-desc">What was done</div></div>
      <div class="right"><div class="lvl-ev-label">Evidence Required</div><div class="lvl-ev">Documentation of activity</div></div>
    </div>
  </div>
  <div class="anno">Most institutions have architecture for the bottom two levels. The Outcome pillar demands architecture for the top two.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-017 — Four Archetype Pillar Profiles (Ch5, Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-017', orient: 'L',
  title: 'Four Archetype Pillar Profiles',
  subtitle: 'The framework applies across four archetypes without modification',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 14%; }
    table.cmp td.cell { text-align: center; font-size: 11px; }
    table.cmp th { font-size: 10px; }
    .present { font-weight: bold; }
    .partial { font-style: italic; color: #555; }
    .deficient { font-weight: bold; text-decoration: underline; }
    .variable { font-style: italic; }
    .challenging { font-style: italic; color: #444; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Pillar</th>
        <th>Multinational Extractive Enterprise</th>
        <th>Sovereign Development Fund</th>
        <th>Environmental Restoration Consortium</th>
        <th>Global Health Foundation</th>
        <th>Coherence Diagnostic</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">A — Accountability</td>
        <td class="cell partial">Partial</td>
        <td class="cell present">Present</td>
        <td class="cell partial">Partial (diffusion)</td>
        <td class="cell partial">Partial</td>
        <td class="cell">Locate the demand-side gap</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">E — Execution</td>
        <td class="cell present">Present</td>
        <td class="cell present">Present</td>
        <td class="cell variable">Variable</td>
        <td class="cell present">Present</td>
        <td class="cell">Locate the capability gap</td>
      </tr>
      <tr>
        <td class="rowlabel">I — Initiative</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell partial">Partial</td>
        <td class="cell partial">Partial</td>
        <td class="cell">Locate the authenticity gap</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">O — Outcome</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell challenging">Challenging</td>
        <td class="cell partial">Partial</td>
        <td class="cell">Locate the evidence gap</td>
      </tr>
      <tr>
        <td class="rowlabel">M — Meaning</td>
        <td class="cell partial">Partial</td>
        <td class="cell partial">Partial</td>
        <td class="cell partial">Partial (dense)</td>
        <td class="cell partial">Partial</td>
        <td class="cell">Locate the usability gap</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Pillar Coherence</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell deficient">Deficient</td>
        <td class="cell partial">Partial</td>
        <td class="cell">Identify the architectural work required</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    The Five Pillars Framework applies across four archetypes without modification. Each archetype has Pillar Deficiency, but in different pillars and for different architectural reasons. The framework's diagnostic power is in identifying the specific deficiency.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-018 — The Trust Layer (Ch6, Architecture Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-018', orient: 'L',
  title: 'The Trust Layer',
  subtitle: 'Verification infrastructure beneath the Five Pillars',
  bodyHTML: `
  <style>
    .pillars-mini { display: flex; justify-content: center; align-items: flex-end; gap: 12px; margin: 16px auto 0; }
    .pillars-mini .p { width: 90px; height: 130px; border: 2px solid #1a1a1a; border-bottom: none; background: #f0f0f0; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 6px; }
    .pillars-mini .p .letter { font-size: 26px; font-weight: bold; }
    .pillars-mini .p .name { font-size: 11px; font-weight: bold; text-transform: uppercase; margin-top: 4px; letter-spacing: 0.5px; }
    .arrow-up-group { display: flex; justify-content: space-around; padding: 0 50px; margin: 2px 0; }
    .arrow-up { font-size: 18px; color: #1a1a1a; font-weight: bold; text-align: center; }
    .verif-label { text-align: center; font-size: 10px; font-style: italic; color: #555; margin-bottom: 4px; }
    .trust-layer { background: #1a1a1a; color: #FFFFFF; padding: 14px; margin-top: 4px; }
    .trust-layer .trust-title { text-align: center; font-size: 14px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
    .trust-components { display: flex; gap: 12px; }
    .trust-comp { flex: 1; border: 1px solid #FFFFFF; padding: 10px; text-align: center; }
    .trust-comp .comp-name { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .trust-comp .comp-desc { font-size: 10px; font-style: italic; color: #ddd; line-height: 1.3; }
    .anno { text-align: center; margin-top: 12px; font-size: 12px; color: #555; font-style: italic; }
  </style>
  <div class="pillars-mini">
    <div class="p"><div class="letter">A</div><div class="name">Accountability</div></div>
    <div class="p"><div class="letter">E</div><div class="name">Execution</div></div>
    <div class="p"><div class="letter">I</div><div class="name">Initiative</div></div>
    <div class="p"><div class="letter">O</div><div class="name">Outcome</div></div>
    <div class="p"><div class="letter">M</div><div class="name">Meaning</div></div>
  </div>
  <div class="arrow-up-group">
    <div class="arrow-up">↑</div>
    <div class="arrow-up">↑</div>
    <div class="arrow-up">↑</div>
    <div class="arrow-up">↑</div>
    <div class="arrow-up">↑</div>
  </div>
  <div class="verif-label">Verification flows upward to each pillar</div>
  <div class="trust-layer">
    <div class="trust-title">The Trust Layer</div>
    <div class="trust-components">
      <div class="trust-comp">
        <div class="comp-name">Human</div>
        <div class="comp-desc">Independent auditors · Community monitors · Stakeholder panels · Third-party evaluators</div>
      </div>
      <div class="trust-comp">
        <div class="comp-name">Procedural</div>
        <div class="comp-desc">Audit protocols · Evaluation methodologies · Data access standards · Conflict-of-interest rules</div>
      </div>
      <div class="trust-comp">
        <div class="comp-name">Technological</div>
        <div class="comp-desc">Satellite · Sensors · Distributed ledgers · AI · Mobile data collection</div>
      </div>
    </div>
  </div>
  <div class="anno">The pillars describe what institutions must be. The Trust Layer describes how their claims become verifiable.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-019 — Trust Layer Maturity Stages (Ch6, Maturity Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-019', orient: 'L',
  title: 'Trust Layer Maturity Stages',
  subtitle: 'Developmental progression from Absent to Embedded',
  bodyHTML: `
  <style>
    .stages { display: flex; gap: 0; margin-top: 20px; align-items: stretch; }
    .stage { flex: 1; border: 2px solid #1a1a1a; padding: 14px 10px; text-align: center; border-right: none; display: flex; flex-direction: column; }
    .stage:last-child { border-right: 2px solid #1a1a1a; }
    .stage.s1 { background: #FFFFFF; }
    .stage.s2 { background: #e8e8e8; }
    .stage.s3 { background: #c0c0c0; }
    .stage.s4 { background: #808080; color: #FFFFFF; }
    .stage.s5 { background: #1a1a1a; color: #FFFFFF; }
    .stage .num { font-size: 11px; font-weight: bold; letter-spacing: 1px; opacity: 0.8; }
    .stage .name { font-size: 16px; font-weight: bold; margin: 6px 0 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .stage .desc { font-size: 10px; line-height: 1.4; font-style: italic; }
    .progression { text-align: center; margin-top: 16px; font-size: 12px; color: #555; font-style: italic; }
    .progression .arrow { display: block; font-size: 18px; color: #1a1a1a; margin-top: 4px; }
    .annotations { display: flex; justify-content: space-between; margin-top: 16px; padding: 0 10px; font-size: 11px; color: #1a1a1a; font-style: italic; }
    .annotations .anno-l { width: 30%; text-align: left; }
    .annotations .anno-r { width: 30%; text-align: right; }
  </style>
  <div class="stages">
    <div class="stage s1">
      <div class="num">STAGE 1</div>
      <div class="name">Absent</div>
      <div class="desc">No verification architecture. Claims taken on trust.</div>
    </div>
    <div class="stage s2">
      <div class="num">STAGE 2</div>
      <div class="name">Emergent</div>
      <div class="desc">Ad hoc independent review. Procedural standards forming.</div>
    </div>
    <div class="stage s3">
      <div class="num">STAGE 3</div>
      <div class="name">Operational</div>
      <div class="desc">Independent auditors review major claims. Some technology deployed.</div>
    </div>
    <div class="stage s4">
      <div class="num">STAGE 4</div>
      <div class="name">Systematic</div>
      <div class="desc">Integrated verification across most material claims. Procedural standards robust.</div>
    </div>
    <div class="stage s5">
      <div class="num">STAGE 5</div>
      <div class="name">Embedded</div>
      <div class="desc">All material claims independently verified. Verification is structural and cultural.</div>
    </div>
  </div>
  <div class="progression">
    Developmental Progression
    <span class="arrow">→ → → → →</span>
  </div>
  <div class="annotations">
    <div class="anno-l">↤ Position 1–2 on the<br>Proclamation-Proof Gradient</div>
    <div></div>
    <div class="anno-r">Position 5 — Verified Proof ↦</div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-020 — Proclamation-Proof Gradient Expanded with Trust Layer (Ch6)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-020', orient: 'L',
  title: 'The Proclamation-Proof Gradient Expanded with Trust Layer',
  subtitle: 'Trust Layer Maturity determines position on the gradient',
  bodyHTML: `
  <style>
    .grad-wrap { margin-top: 20px; padding: 0 20px; }
    .grad-bar { position: relative; width: 100%; height: 30px; background: linear-gradient(to right, #f5f5f5, #d4d4d4, #a0a0a0, #606060, #1a1a1a); border: 1px solid #1a1a1a; margin-bottom: 36px; }
    .pos { position: absolute; top: -4px; width: 2px; height: 38px; background: #1a1a1a; }
    .pos-label { position: absolute; top: -22px; left: 50%; transform: translateX(-50%); font-size: 13px; font-weight: bold; color: #1a1a1a; }
    .pos-desc { position: absolute; top: 40px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #444; text-align: center; white-space: nowrap; font-style: italic; }
    .trust-row { display: flex; justify-content: space-between; margin-top: 70px; }
    .trust-cell { flex: 1; text-align: center; padding: 10px 4px; border: 1px solid #1a1a1a; border-right: none; background: #f0f0f0; }
    .trust-cell:last-child { border-right: 1px solid #1a1a1a; }
    .trust-cell.embedded { background: #1a1a1a; color: #FFFFFF; }
    .trust-cell .num { font-size: 10px; font-weight: bold; letter-spacing: 1px; opacity: 0.8; }
    .trust-cell .stage-name { font-size: 13px; font-weight: bold; text-transform: uppercase; margin-top: 2px; }
    .anno-bottom { text-align: center; margin-top: 20px; font-size: 13px; color: #1a1a1a; font-weight: bold; font-style: italic; }
    .endpoints { display: flex; justify-content: space-between; margin-top: 14px; padding: 0 8px; font-size: 12px; font-weight: bold; }
  </style>
  <div class="grad-wrap">
    <div class="grad-bar">
      <div class="pos" style="left:5%;"><div class="pos-label">1</div><div class="pos-desc">Proclamation<br>Only</div></div>
      <div class="pos" style="left:27%;"><div class="pos-label">2</div><div class="pos-desc">Activity<br>Documentation</div></div>
      <div class="pos" style="left:50%;"><div class="pos-label">3</div><div class="pos-desc">Output<br>Metrics</div></div>
      <div class="pos" style="left:73%;"><div class="pos-label">4</div><div class="pos-desc">Outcome<br>Indicators</div></div>
      <div class="pos" style="left:95%;"><div class="pos-label">5</div><div class="pos-desc">Verified<br>Proof</div></div>
    </div>
    <div class="trust-row">
      <div class="trust-cell"><div class="num">STAGE 1</div><div class="stage-name">Absent</div></div>
      <div class="trust-cell"><div class="num">STAGE 2</div><div class="stage-name">Emergent</div></div>
      <div class="trust-cell"><div class="num">STAGE 3</div><div class="stage-name">Operational</div></div>
      <div class="trust-cell"><div class="num">STAGE 4</div><div class="stage-name">Systematic</div></div>
      <div class="trust-cell embedded"><div class="num">STAGE 5</div><div class="stage-name">Embedded</div></div>
    </div>
    <div class="anno-bottom">↓ Trust Layer Maturity determines position on the gradient ↓</div>
    <div class="endpoints">
      <span>← Expenditure-Based Legitimacy</span>
      <span>Evidence-Based Legitimacy →</span>
    </div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-021 — Trust Layer Application Across Three Archetypes (Ch6, Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-021', orient: 'L',
  title: 'Trust Layer Application Across Three Archetypes',
  subtitle: 'The components are the same; the composition differs',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 18%; }
    table.cmp td.cell { font-size: 11px; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Trust Layer Component</th>
        <th>Multinational Extractive Enterprise</th>
        <th>Global Health Foundation</th>
        <th>Environmental Restoration Consortium</th>
        <th>Verification Challenge</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">Human component</td>
        <td class="cell">Independent community-based monitors; external assurance firms</td>
        <td class="cell">Scientific advisory bodies; independent evaluators; peer review</td>
        <td class="cell">Multi-party stakeholder panels; community representatives</td>
        <td class="cell">Coordination across multiple parties with divergent interests</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Procedural component</td>
        <td class="cell">BRSR assurance protocols; site-level audit standards</td>
        <td class="cell">Health-outcome evaluation methodologies; attribution protocols</td>
        <td class="cell">Multi-party data-sharing protocols; joint attribution standards</td>
        <td class="cell">Standards that hold across diverse methodological contexts</td>
      </tr>
      <tr>
        <td class="rowlabel">Technological component</td>
        <td class="cell">Satellite for land-use claims; sensors for operational emissions</td>
        <td class="cell">Mobile data collection; longitudinal health-data platforms</td>
        <td class="cell">Remote sensing for biodiversity; sensor networks for water/soil</td>
        <td class="cell">Slow, multi-causal outcomes resist real-time verification</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Current Maturity</td>
        <td class="cell" style="text-align:center;">Operational</td>
        <td class="cell" style="text-align:center;">Emergent → Operational</td>
        <td class="cell" style="text-align:center;">Emergent</td>
        <td class="cell">Each archetype must reach Embedded to fully answer the Betterment Question</td>
      </tr>
      <tr>
        <td class="rowlabel">Position on Gradient</td>
        <td class="cell" style="text-align:center;">Position 3</td>
        <td class="cell" style="text-align:center;">Position 3</td>
        <td class="cell" style="text-align:center;">Position 2–3</td>
        <td class="cell">Position 5 requires Embedded Trust Layer</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    The Trust Layer applies across sectors with different configurations. The components are the same — human, procedural, technological. The specific composition differs. The architecture is universal. The implementation is particular.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-022 — The CEI Diagnostic Dashboard (Ch7, Radar Chart Concept)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-022', orient: 'L',
  title: 'The CEI Diagnostic Dashboard',
  subtitle: 'A diagnostic instrument, not a scorecard',
  bodyHTML: `
  <style>
    .dash { display: flex; gap: 24px; margin-top: 12px; align-items: stretch; }
    .radar { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px; border: 1px solid #1a1a1a; background: #fafafa; }
    .scorecard { flex: 0.8; border: 2px solid #1a1a1a; padding: 14px; background: #FFFFFF; }
    .scorecard h4 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 2px solid #1a1a1a; }
    .score-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #ccc; font-size: 12px; }
    .score-row .lbl { font-weight: bold; }
    .score-row .val { font-family: 'Courier New', monospace; font-weight: bold; }
    .score-row.diag { background: #f0f0f0; padding: 10px 6px; font-style: italic; margin-top: 6px; border-bottom: none; }
    .anno { text-align: center; margin-top: 14px; font-size: 13px; font-style: italic; color: #1a1a1a; font-weight: bold; }
    svg .axis { stroke: #1a1a1a; stroke-width: 1; }
    svg .grid { stroke: #c0c0c0; stroke-width: 0.5; fill: none; }
    svg .polygon { fill: #1a1a1a; fill-opacity: 0.3; stroke: #1a1a1a; stroke-width: 2; }
    svg .marker { fill: #1a1a1a; }
    svg text { font-family: 'Times New Roman', serif; font-size: 11px; fill: #1a1a1a; font-weight: bold; }
  </style>
  <div class="dash">
    <div class="radar">
      <svg width="380" height="320" viewBox="0 0 380 320">
        <!-- Grid pentagons -->
        <polygon class="grid" points="190,40 333,144 278,254 102,254 47,144"/>
        <polygon class="grid" points="190,80 299,154 256,238 124,238 81,154"/>
        <polygon class="grid" points="190,120 264,164 234,223 146,223 116,164"/>
        <polygon class="grid" points="190,160 230,174 213,207 167,207 150,174"/>
        <!-- Axes -->
        <line class="axis" x1="190" y1="160" x2="190" y2="40"/>
        <line class="axis" x1="190" y1="160" x2="333" y2="144"/>
        <line class="axis" x1="190" y1="160" x2="278" y2="254"/>
        <line class="axis" x1="190" y1="160" x2="102" y2="254"/>
        <line class="axis" x1="190" y1="160" x2="47" y2="144"/>
        <!-- Sample polygon (institution's profile) -->
        <polygon class="polygon" points="190,70 295,150 230,225 130,220 95,150"/>
        <!-- Markers -->
        <circle class="marker" cx="190" cy="70" r="3"/>
        <circle class="marker" cx="295" cy="150" r="3"/>
        <circle class="marker" cx="230" cy="225" r="3"/>
        <circle class="marker" cx="130" cy="220" r="3"/>
        <circle class="marker" cx="95" cy="150" r="3"/>
        <!-- Labels -->
        <text x="190" y="30" text-anchor="middle">A — Accountability</text>
        <text x="345" y="144" text-anchor="start">E — Execution</text>
        <text x="280" y="275" text-anchor="middle">O — Outcome</text>
        <text x="100" y="275" text-anchor="middle">M — Meaning</text>
        <text x="35" y="144" text-anchor="end">I — Initiative</text>
      </svg>
    </div>
    <div class="scorecard">
      <h4>CEI Diagnostic Output</h4>
      <div class="score-row"><span class="lbl">CEI Score</span><span class="val">0.62</span></div>
      <div class="score-row"><span class="lbl">WDC</span><span class="val">0.71</span></div>
      <div class="score-row"><span class="lbl">SAI</span><span class="val">0.48</span></div>
      <div class="score-row"><span class="lbl">L (Legitimacy)</span><span class="val">0.55</span></div>
      <div class="score-row"><span class="lbl">Alignment</span><span class="val">0.67</span></div>
      <div class="score-row diag">Diagnosis: Pillar I deficiency (Initiative). Trust Layer at Operational stage.</div>
      <div style="margin-top:12px; font-size:11px; line-height:1.5; color:#333;">
        The institution is performing on Execution and Meaning, but Pillar I (Initiative) is deficient. Trust Layer is at Operational maturity. The work remaining: rebuild Initiative through Participatory Engagement; extend Trust Layer toward Systematic.
      </div>
    </div>
  </div>
  <div class="anno">The CEI diagnoses Pillar Coherence. The diagnosis locates the work.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-023 — The Institutional Operating System (Ch7, Architecture Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-023', orient: 'L',
  title: 'The Institutional Operating System',
  subtitle: 'Five Pillars above, Trust Layer beneath, governance surrounding, CEI as diagnostic',
  bodyHTML: `
  <style>
    .os-wrap { position: relative; margin-top: 12px; padding: 0 0; }
    .pillars-row { display: flex; justify-content: center; gap: 8px; margin-bottom: 0; }
    .pillars-row .p { width: 80px; height: 110px; border: 2px solid #1a1a1a; border-bottom: none; background: #f0f0f0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .pillars-row .p .l { font-size: 22px; font-weight: bold; }
    .pillars-row .p .n { font-size: 10px; font-weight: bold; text-transform: uppercase; }
    .trust-foundation { background: #1a1a1a; color: #FFFFFF; padding: 10px; text-align: center; font-size: 13px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; }
    .surround { display: flex; gap: 10px; margin-top: 14px; }
    .surround-box { flex: 1; border: 2px solid #1a1a1a; padding: 10px 8px; text-align: center; background: #fafafa; }
    .surround-box .h { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .surround-box .d { font-size: 10px; font-style: italic; color: #333; line-height: 1.4; }
    .vigilance { margin-top: 14px; border: 2px dashed #1a1a1a; padding: 10px; text-align: center; font-size: 12px; font-style: italic; color: #1a1a1a; font-weight: bold; }
    .vigilance .arrow { font-size: 16px; margin-right: 6px; }
  </style>
  <div class="os-wrap">
    <div class="pillars-row">
      <div class="p"><div class="l">A</div><div class="n">Account.</div></div>
      <div class="p"><div class="l">E</div><div class="n">Execution</div></div>
      <div class="p"><div class="l">I</div><div class="n">Initiative</div></div>
      <div class="p"><div class="l">O</div><div class="n">Outcome</div></div>
      <div class="p"><div class="l">M</div><div class="n">Meaning</div></div>
    </div>
    <div class="trust-foundation">The Trust Layer — Verification Infrastructure</div>
    <div class="surround">
      <div class="surround-box">
        <div class="h">Governance Redesign</div>
        <div class="d">Board outcome committee · Chief Accountability Officer · Outcome-based compensation</div>
      </div>
      <div class="surround-box">
        <div class="h">Execution Architecture</div>
        <div class="d">Implementing agency selection · Support · Verification against the Five Pillars</div>
      </div>
      <div class="surround-box">
        <div class="h">CEI as Diagnostic</div>
        <div class="d">Regular assessment · Honest reporting · Architectural response</div>
      </div>
      <div class="surround-box">
        <div class="h">Legitimacy Migration</div>
        <div class="d">Recognition → Reconstruction → Demonstration</div>
      </div>
    </div>
    <div class="vigilance"><span class="arrow">↻</span>Architectural Vigilance — the ongoing work of maintaining the architecture</div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-024 — Operationalization Across Three Archetypes (Ch7, Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-024', orient: 'L',
  title: 'Operationalization Across Three Archetypes',
  subtitle: 'The operational discipline is the same; the specific architecture differs',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 18%; }
    table.cmp td.cell { font-size: 11px; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Operational Element</th>
        <th>Transitional Welfare Authority</th>
        <th>Multinational Extractive Enterprise</th>
        <th>Educational Transformation Initiative</th>
        <th>Reconstruction Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="rowlabel">Governance redesign</td>
        <td class="cell">Board outcome committee; CAO separate from CCO; outcome-based executive pay</td>
        <td class="cell">Sustainability committee → outcome committee; CSO → CAO; site-level outcome pay</td>
        <td class="cell">Multi-stakeholder governance reconfigured for outcome oversight</td>
        <td class="cell">Shift oversight from reporting to verified outcome</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Execution architecture</td>
        <td class="cell">Departments, contractors, partners assessed against Five Pillars</td>
        <td class="cell">Community investment partners assessed; poorly-scoring partners replaced</td>
        <td class="cell">Schools, providers, platforms assessed; shared capacity building</td>
        <td class="cell">Implementing Agency Variable made visible; support targeted</td>
      </tr>
      <tr>
        <td class="rowlabel">CEI as diagnostic</td>
        <td class="cell">Annual assessment; honest reporting; architectural response</td>
        <td class="cell">Annual assessment at enterprise and site level</td>
        <td class="cell">Annual assessment across institutional contexts</td>
        <td class="cell">Diagnose Pillar Coherence; locate work; respond architecturally</td>
      </tr>
      <tr class="alt">
        <td class="rowlabel">Trust Layer operationalization</td>
        <td class="cell">Independent audit; procedural standards; verification technology</td>
        <td class="cell">Satellite verification; sensor networks; ledgers; community monitors</td>
        <td class="cell">Independent evaluation; educational outcome protocols; verification tech</td>
        <td class="cell">Integrate human + procedural + technological components</td>
      </tr>
      <tr>
        <td class="rowlabel">Legitimacy Migration stage</td>
        <td class="cell" style="text-align:center;">Recognition → Reconstruction</td>
        <td class="cell" style="text-align:center;">Reconstruction → Demonstration</td>
        <td class="cell" style="text-align:center;">Uneven across contexts</td>
        <td class="cell">Reach Demonstration; maintain through Architectural Vigilance</td>
      </tr>
    </tbody>
  </table>
  <div class="caption">
    The operationalization applies across sectors without modification. The specific architecture differs. The operational discipline is the same. The framework's universality is not a claim — it is a demonstration.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-025 — The Compliance-Betterment Paradox (Ch8, Scatter Plot)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-025', orient: 'L',
  title: 'The Compliance-Betterment Paradox',
  subtitle: 'Regulatory sophistication and demonstrable betterment do not move together',
  bodyHTML: `
  <style>
    .scatter-wrap { display: flex; gap: 20px; margin-top: 10px; align-items: stretch; }
    .scatter { flex: 1.6; border: 1px solid #1a1a1a; padding: 14px; background: #fafafa; }
    .legend-side { flex: 1; padding: 14px; border: 1px solid #1a1a1a; background: #FFFFFF; }
    .legend-side h4 { font-size: 13px; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px; }
    .legend-side p { font-size: 11px; line-height: 1.5; margin-bottom: 8px; }
    .legend-side .assumed { font-weight: bold; }
    svg .axis-line { stroke: #1a1a1a; stroke-width: 1.5; }
    svg .axis-label { font-family: 'Times New Roman', serif; font-size: 11px; fill: #1a1a1a; font-weight: bold; }
    svg .tick { stroke: #1a1a1a; stroke-width: 0.5; }
    svg .grid-l { stroke: #e0e0e0; stroke-width: 0.5; }
    svg .assumed-line { stroke: #1a1a1a; stroke-width: 1.5; stroke-dasharray: 6 4; }
    svg .country-dot { fill: #1a1a1a; }
    svg .country-label { font-family: 'Times New Roman', serif; font-size: 10px; fill: #1a1a1a; }
  </style>
  <div class="scatter-wrap">
    <div class="scatter">
      <svg width="540" height="320" viewBox="0 0 540 320">
        <!-- Grid lines -->
        <line class="grid-l" x1="60" y1="80" x2="500" y2="80"/>
        <line class="grid-l" x1="60" y1="160" x2="500" y2="160"/>
        <line class="grid-l" x1="60" y1="240" x2="500" y2="240"/>
        <line class="grid-l" x1="160" y1="20" x2="160" y2="280"/>
        <line class="grid-l" x1="280" y1="20" x2="280" y2="280"/>
        <line class="grid-l" x1="400" y1="20" x2="400" y2="280"/>
        <!-- Axes -->
        <line class="axis-line" x1="60" y1="280" x2="500" y2="280"/>
        <line class="axis-line" x1="60" y1="280" x2="60" y2="20"/>
        <!-- Axis labels -->
        <text class="axis-label" x="280" y="305" text-anchor="middle">REGULATORY SOPHISTICATION →</text>
        <text class="axis-label" x="20" y="150" text-anchor="middle" transform="rotate(-90 20 150)">DEMONSTRABLE BETTERMENT →</text>
        <!-- Assumed linear relationship (dashed) -->
        <line class="assumed-line" x1="60" y1="280" x2="500" y2="40"/>
        <text class="country-label" x="350" y="100" font-style="italic">What compliance assumes</text>
        <!-- Country dots (positions approximate; not linear) -->
        <circle class="country-dot" cx="440" cy="180" r="5"/><text class="country-label" x="450" y="184">India</text>
        <circle class="country-dot" cx="420" cy="130" r="5"/><text class="country-label" x="430" y="134">UK</text>
        <circle class="country-dot" cx="400" cy="160" r="5"/><text class="country-label" x="410" y="164">Germany</text>
        <circle class="country-dot" cx="350" cy="200" r="5"/><text class="country-label" x="360" y="204">South Africa</text>
        <circle class="country-dot" cx="280" cy="180" r="5"/><text class="country-label" x="290" y="184">USA</text>
        <circle class="country-dot" cx="320" cy="220" r="5"/><text class="country-label" x="330" y="224">China</text>
        <circle class="country-dot" cx="240" cy="170" r="5"/><text class="country-label" x="250" y="174">Brazil</text>
        <circle class="country-dot" cx="120" cy="210" r="5"/><text class="country-label" x="100" y="226">Russia</text>
        <circle class="country-dot" cx="140" cy="120" r="5"/><text class="country-label" x="100" y="116">Iran</text>
        <circle class="country-dot" cx="200" cy="190" r="5"/><text class="country-label" x="210" y="194">Kenya</text>
        <text class="country-label" x="80" y="40" font-style="italic">What the data show</text>
      </svg>
    </div>
    <div class="legend-side">
      <h4>Reading the Plot</h4>
      <p class="assumed">Compliance assumes:</p>
      <p>More sophisticated regulation → more demonstrable betterment. The dashed line.</p>
      <p class="assumed">What the data show:</p>
      <p>The points do not form a linear pattern. Some countries with high sophistication (India, UK, Germany) show moderate betterment. Some countries with low sophistication (Iran, Kenya) show moderate betterment through non-regulatory mechanisms.</p>
      <p style="margin-top:14px; border-top:1px solid #1a1a1a; padding-top:10px; font-style:italic;">The decisive variable is not the strength of the compliance regime but the presence of the Five Pillars.</p>
    </div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-026 — India's CSR Regulatory Architecture (Ch8, Layered Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-026', orient: 'L',
  title: "India's CSR Regulatory Architecture",
  subtitle: 'Five layers, from doctrinal to reporting',
  bodyHTML: `
  <style>
    .layers-wrap { display: flex; gap: 14px; margin-top: 16px; align-items: stretch; }
    .layers { flex: 1; display: flex; flex-direction: column; gap: 6px; }
    .layer { display: flex; align-items: stretch; border: 2px solid #1a1a1a; }
    .layer .num { width: 50px; background: #1a1a1a; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold; }
    .layer .body { flex: 1; padding: 10px 14px; display: flex; flex-direction: column; justify-content: center; }
    .layer .name { font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; }
    .layer .desc { font-size: 11px; color: #333; font-style: italic; margin-top: 2px; }
    .layer:nth-child(1) .body { background: #1a1a1a; color: #FFFFFF; }
    .layer:nth-child(1) .name { color: #FFFFFF; }
    .layer:nth-child(1) .desc { color: #ddd; }
    .layer:nth-child(2) .body { background: #404040; color: #FFFFFF; }
    .layer:nth-child(2) .name { color: #FFFFFF; }
    .layer:nth-child(2) .desc { color: #ddd; }
    .layer:nth-child(3) .body { background: #808080; color: #FFFFFF; }
    .layer:nth-child(3) .name { color: #FFFFFF; }
    .layer:nth-child(3) .desc { color: #f0f0f0; }
    .layer:nth-child(4) .body { background: #c0c0c0; }
    .layer:nth-child(5) .body { background: #f0f0f0; }
    .tag-col { width: 200px; border: 2px solid #1a1a1a; background: #1a1a1a; color: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 14px; }
    .tag-col .tag-h { font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; line-height: 1.4; }
    .tag-col .tag-arrow { font-size: 24px; margin-top: 10px; font-weight: bold; }
    .anno { text-align: center; margin-top: 14px; font-size: 12px; font-style: italic; color: #1a1a1a; font-weight: bold; }
  </style>
  <div class="layers-wrap">
    <div class="layers">
      <div class="layer">
        <div class="num">1</div>
        <div class="body"><div class="name">Doctrinal Layer</div><div class="desc">National Guidelines on Responsible Business Conduct (NGRBC)</div></div>
      </div>
      <div class="layer">
        <div class="num">2</div>
        <div class="body"><div class="name">Statutory Layer</div><div class="desc">Companies Act 2013, Section 135 — CSR mandate</div></div>
      </div>
      <div class="layer">
        <div class="num">3</div>
        <div class="body"><div class="name">Operational Layer</div><div class="desc">CSR Rules · Schedule VII · MCA Amendments (2019, 2021)</div></div>
      </div>
      <div class="layer">
        <div class="num">4</div>
        <div class="body"><div class="name">Impact Layer</div><div class="desc">Impact Assessment Rules (2019) — for larger projects</div></div>
      </div>
      <div class="layer">
        <div class="num">5</div>
        <div class="body"><div class="name">Reporting Layer</div><div class="desc">BRSR (2021) — Business Responsibility and Sustainability Report</div></div>
      </div>
    </div>
    <div class="tag-col">
      <div class="tag-h">Mandatory /<br>Compliance-Heavy</div>
      <div class="tag-arrow">→</div>
    </div>
  </div>
  <div class="anno">Sophisticated regulatory architecture. Compliance is high. Betterment verification is variable.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-027 — The Ten-Country Comparative Matrix (Ch8, Comparison Table)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-027', orient: 'L',
  title: 'The Ten-Country Comparative Matrix',
  subtitle: 'No country produces betterment verification at scale',
  bodyHTML: `
  <style>${tableStyle(`
    table.cmp td.rowlabel { width: 22%; font-size: 11px; }
    table.cmp td { text-align: center; font-size: 14px; padding: 6px 4px; }
    table.cmp th { font-size: 10px; padding: 8px 4px; }
    .full { font-weight: bold; }
    .half { font-style: italic; color: #555; }
    .empty { font-weight: bold; color: #1a1a1a; }
    .cat-row td.rowlabel { background: #1a1a1a; color: #FFFFFF; font-style: italic; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px; }
    .fpf-row td { background: #1a1a1a; color: #FFFFFF; font-weight: bold; }
    .fpf-row td.rowlabel { background: #1a1a1a; color: #FFFFFF; }
  `)}</style>
  <table class="cmp">
    <thead>
      <tr>
        <th>Country</th>
        <th>A — Accountability</th>
        <th>E — Execution</th>
        <th>I — Initiative</th>
        <th>O — Outcome</th>
        <th>M — Meaning</th>
        <th>Betterment Verification</th>
      </tr>
    </thead>
    <tbody>
      <tr class="cat-row"><td class="rowlabel" colspan="7">Mandatory / Compliance-Heavy</td></tr>
      <tr><td class="rowlabel">India</td><td class="full">●</td><td class="full">●</td><td class="half">◐</td><td class="half">◐</td><td class="full">●</td><td class="half">◐</td></tr>
      <tr class="alt"><td class="rowlabel">United Kingdom</td><td class="full">●</td><td class="full">●</td><td class="half">◐</td><td class="half">◐</td><td class="full">●</td><td class="empty">○</td></tr>
      <tr><td class="rowlabel">Germany</td><td class="full">●</td><td class="full">●</td><td class="half">◐</td><td class="half">◐</td><td class="full">●</td><td class="empty">○</td></tr>
      <tr class="alt"><td class="rowlabel">South Africa</td><td class="full">●</td><td class="full">●</td><td class="half">◐</td><td class="half">◐</td><td class="full">●</td><td class="half">◐</td></tr>
      <tr class="cat-row"><td class="rowlabel" colspan="7">Mixed Regimes</td></tr>
      <tr><td class="rowlabel">United States</td><td class="half">◐</td><td class="full">●</td><td class="half">◐</td><td class="half">◐</td><td class="full">●</td><td class="empty">○</td></tr>
      <tr class="alt"><td class="rowlabel">China</td><td class="full">●</td><td class="full">●</td><td class="empty">○</td><td class="half">◐</td><td class="half">◐</td><td class="empty">○</td></tr>
      <tr><td class="rowlabel">Brazil</td><td class="half">◐</td><td class="full">●</td><td class="half">◐</td><td class="half">◐</td><td class="full">●</td><td class="empty">○</td></tr>
      <tr class="cat-row"><td class="rowlabel" colspan="7">Low / No Compliance</td></tr>
      <tr><td class="rowlabel">Russia</td><td class="half">◐</td><td class="half">◐</td><td class="empty">○</td><td class="empty">○</td><td class="half">◐</td><td class="empty">○</td></tr>
      <tr class="alt"><td class="rowlabel">Iran</td><td class="empty">○</td><td class="half">◐</td><td class="half">◐</td><td class="half">◐</td><td class="half">◐</td><td class="empty">○</td></tr>
      <tr class="cat-row"><td class="rowlabel" colspan="7">Emerging Economy</td></tr>
      <tr><td class="rowlabel">Kenya</td><td class="half">◐</td><td class="half">◐</td><td class="half">◐</td><td class="half">◐</td><td class="half">◐</td><td class="empty">○</td></tr>
      <tr class="fpf-row"><td class="rowlabel">The Five Pillars Framework</td><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td></tr>
    </tbody>
  </table>
  <div style="text-align:center; margin-top:10px; font-size:11px; color:#555; font-style:italic;">
    ● Present &nbsp;&nbsp; ◐ Partially Present &nbsp;&nbsp; ○ Deficient or Absent &nbsp;&nbsp;|&nbsp;&nbsp; The Five Pillars Framework provides the architecture no country's regulatory regime has yet built.
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-028 — The Regulatory Diversity Map (Ch8, 2x2 Concept Map)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-028', orient: 'L',
  title: 'The Regulatory Diversity Map',
  subtitle: 'Four categories of regulatory regimes',
  bodyHTML: `
  <style>
    .quad { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 14px; margin-top: 14px; height: 380px; }
    .qbox { border: 2px solid #1a1a1a; padding: 14px; display: flex; flex-direction: column; }
    .qbox.tl { background: #f0f0f0; }
    .qbox.tr { background: #fafafa; }
    .qbox.bl { background: #fafafa; }
    .qbox.br { background: #f0f0f0; }
    .qbox h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #1a1a1a; }
    .countries { font-size: 14px; font-weight: bold; margin-bottom: 8px; }
    .desc { font-size: 11px; line-height: 1.5; color: #333; font-style: italic; }
    .univ-bar { margin-top: 14px; background: #1a1a1a; color: #FFFFFF; padding: 10px; text-align: center; font-size: 13px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
  </style>
  <div class="quad">
    <div class="qbox tl">
      <h3>Mandatory / Compliance-Heavy</h3>
      <div class="countries">India · UK · Germany · South Africa</div>
      <div class="desc">Statutory mandates on CSR disclosure and expenditure. Sophisticated compliance architecture. Betterment verification variable.</div>
    </div>
    <div class="qbox tr">
      <h3>Mixed</h3>
      <div class="countries">USA · China · Brazil</div>
      <div class="desc">Combination of mandatory and voluntary elements. Some sectoral mandates. Strong voluntary frameworks alongside.</div>
    </div>
    <div class="qbox bl">
      <h3>Low / No Compliance</h3>
      <div class="countries">Russia · Iran</div>
      <div class="desc">Minimal formal CSR regulation. Betterment may flow through cultural, religious, or community channels invisible to the regulatory frame.</div>
    </div>
    <div class="qbox br">
      <h3>Emerging Economy</h3>
      <div class="countries">Kenya</div>
      <div class="desc">Developing regulatory architecture. Strong informal ecosystem. Tests the framework against capacity and resource constraints.</div>
    </div>
  </div>
  <div class="univ-bar">The Five Pillars Framework applies across all four categories</div>
  `
});

// ---------------------------------------------------------------------
// FPF-029 — The New Social Contract (Ch9, Comparison Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-029', orient: 'L',
  title: 'The New Social Contract',
  subtitle: 'A different architecture, not a higher standard of the old accountability',
  bodyHTML: `
  <style>
    .contract { display: flex; align-items: stretch; gap: 0; margin-top: 16px; height: 360px; }
    .side { flex: 1; border: 2px solid #1a1a1a; padding: 16px; }
    .side.old { background: #f0f0f0; }
    .side.new { background: #1a1a1a; color: #FFFFFF; }
    .side h3 { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; padding-bottom: 6px; }
    .side.old h3 { border-bottom: 1px solid #1a1a1a; }
    .side.new h3 { border-bottom: 1px solid #FFFFFF; }
    .side ul { list-style: none; padding: 0; }
    .side ul li { font-size: 12px; line-height: 1.6; padding: 5px 0; border-bottom: 1px dashed #999; }
    .side.new ul li { border-bottom: 1px dashed #555; }
    .side ul li:last-child { border-bottom: none; }
    .arrow-mid { width: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFFFFF; }
    .arrow-mid .lbl { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; text-align: center; color: #1a1a1a; }
    .arrow-mid .ar { font-size: 30px; color: #1a1a1a; font-weight: bold; }
    .foot { text-align: center; margin-top: 14px; font-size: 13px; font-style: italic; color: #1a1a1a; font-weight: bold; }
  </style>
  <div class="contract">
    <div class="side old">
      <h3>Old Accountability — Expenditure-Based</h3>
      <ul>
        <li>· Reports on activity</li>
        <li>· Counts outputs</li>
        <li>· Earns compliance certificates</li>
        <li>· Optimizes disclosure volume</li>
        <li>· Audience: the institution itself</li>
        <li>· Question answered: "What did you do?"</li>
        <li>· Standard met: compliance with regulation</li>
      </ul>
    </div>
    <div class="arrow-mid">
      <div class="lbl">Legitimacy<br>Migration</div>
      <div class="ar">→</div>
    </div>
    <div class="side new">
      <h3>New Legitimacy — Evidence-Based</h3>
      <ul>
        <li>· Five Pillars architecture</li>
        <li>· Trust Layer verification</li>
        <li>· Produces Betterment Evidence</li>
        <li>· Optimizes Communication Usability</li>
        <li>· Audience: the skeptical observer</li>
        <li>· Question answered: "What changed?"</li>
        <li>· Standard met: the Skeptical Observer Standard</li>
      </ul>
    </div>
  </div>
  <div class="foot">The new legitimacy is not a higher standard of the old accountability. It is a different architecture.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-030 — The Framework's Limits (Ch9, Concentric Circles)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-030', orient: 'L',
  title: "The Framework's Limits",
  subtitle: 'Powerful for its purpose. Not omnipotent.',
  bodyHTML: `
  <style>
    .limits-wrap { display: flex; gap: 30px; align-items: center; justify-content: center; margin-top: 16px; height: 360px; }
    .concentric { position: relative; width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; }
    .outer-c { position: absolute; top: 0; left: 0; width: 380px; height: 380px; border: 2px solid #1a1a1a; border-radius: 50%; background: #f0f0f0; display: flex; align-items: flex-start; justify-content: center; padding-top: 16px; }
    .outer-label { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; background: #FFFFFF; padding: 0 10px; }
    .outer-list { position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); width: 320px; text-align: center; font-size: 11px; color: #333; line-height: 1.8; }
    .inner-c { position: relative; width: 200px; height: 200px; border: 2px solid #1a1a1a; border-radius: 50%; background: #1a1a1a; color: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 18px; z-index: 2; }
    .inner-c .it { font-size: 13px; font-weight: bold; line-height: 1.4; }
    .inner-c .is { font-size: 11px; margin-top: 8px; font-style: italic; }
    .text-side { flex: 1; max-width: 320px; }
    .text-side h4 { font-size: 14px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .text-side .p { font-size: 11px; line-height: 1.6; color: #333; padding: 10px; border-left: 3px solid #1a1a1a; background: #fafafa; margin-bottom: 10px; }
    .text-side .p strong { color: #1a1a1a; }
    .text-side .p.foot { text-align: center; font-style: italic; border-left: none; background: transparent; font-weight: bold; color: #1a1a1a; }
  </style>
  <div class="limits-wrap">
    <div class="concentric">
      <div class="outer-c">
        <div class="outer-label">The Framework Does NOT Address</div>
        <div class="outer-list">
          · Institutional purpose<br>· Institutional ethics<br>· Institutional culture<br>· Institutional power
        </div>
      </div>
      <div class="inner-c">
        <div class="it">The Framework Addresses</div>
        <div class="is">Institutional legitimacy — the conditions under which an institution can demonstrate Betterment of Society.</div>
      </div>
    </div>
    <div class="text-side">
      <h4>The Limits Are Deliberate</h4>
      <div class="p">
        <strong>Inside the inner circle:</strong> what the framework addresses — institutional legitimacy.
      </div>
      <div class="p">
        <strong>Outside the inner circle:</strong> what the framework does not address — purpose, ethics, culture, power. Institutions still need other frameworks, disciplines, and conversations for these.
      </div>
      <div class="p foot">
        The framework is powerful for its purpose. It is not omnipotent.
      </div>
    </div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-031 — The Research Design (Ch10, Flow Diagram)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-031', orient: 'L',
  title: 'The Research Design',
  subtitle: 'Mixed-methods: qualitative doctrine development, quantitative validation',
  bodyHTML: `
  <style>
    .research { display: flex; flex-direction: column; align-items: center; gap: 0; margin-top: 12px; }
    .q-box { width: 70%; border: 2px solid #1a1a1a; background: #1a1a1a; color: #FFFFFF; padding: 10px; text-align: center; font-size: 13px; font-weight: bold; font-style: italic; }
    .arr { font-size: 18px; color: #1a1a1a; font-weight: bold; }
    .two-col { display: flex; gap: 14px; width: 90%; }
    .phase { flex: 1; border: 2px solid #1a1a1a; padding: 10px; background: #fafafa; }
    .phase h4 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid #1a1a1a; }
    .phase ul { list-style: none; padding: 0; font-size: 11px; line-height: 1.6; }
    .phase .out { margin-top: 6px; padding: 6px; background: #1a1a1a; color: #FFFFFF; font-size: 11px; font-weight: bold; text-align: center; font-style: italic; }
    .synthesis { width: 70%; border: 2px solid #1a1a1a; background: #1a1a1a; color: #FFFFFF; padding: 10px; text-align: center; font-size: 13px; font-weight: bold; }
    .synthesis .em { font-style: italic; }
    .stats { width: 90%; border: 2px solid #1a1a1a; padding: 10px; text-align: center; font-size: 12px; background: #f0f0f0; }
    .stats .em { font-weight: bold; }
  </style>
  <div class="research">
    <div class="q-box">Research Question: Does the framework's architecture correspond to institutional outcomes?</div>
    <div class="arr">↓</div>
    <div class="two-col">
      <div class="phase">
        <h4>Qualitative Phase</h4>
        <ul>
          <li>· Field observation across sectors</li>
          <li>· Interviews with institutional leaders</li>
          <li>· Document analysis of reports</li>
          <li>· Case studies of archetypes</li>
        </ul>
        <div class="out">Output: Doctrinal Architecture</div>
      </div>
      <div class="phase">
        <h4>Quantitative Phase</h4>
        <ul>
          <li>· Survey research</li>
          <li>· Cross-sectional design</li>
          <li>· Longitudinal follow-up</li>
          <li>· Two-source: institutional + stakeholder</li>
        </ul>
        <div class="out">Output: Empirical Validation</div>
      </div>
    </div>
    <div class="arr">↓</div>
    <div class="synthesis">Mixed-Methods Synthesis — <span class="em">Architecture validated</span></div>
    <div class="arr">↓</div>
    <div class="stats"><span class="em">Statistical Analyses:</span> Descriptive · Correlation · Regression · ANOVA · Reliability</div>
  </div>
  `
});

// ---------------------------------------------------------------------
// FPF-032 — The Statistical Findings (Ch10, Bar Chart)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-032', orient: 'L',
  title: 'The Statistical Findings',
  subtitle: 'Pillar Coherence is the strongest predictor of betterment outcomes',
  bodyHTML: `
  <style>
    .stats-wrap { display: flex; gap: 20px; margin-top: 10px; align-items: stretch; }
    .chart { flex: 1.5; border: 1px solid #1a1a1a; padding: 14px 8px 8px; background: #fafafa; }
    .findings { flex: 1; border: 2px solid #1a1a1a; padding: 14px; background: #FFFFFF; }
    .findings h4 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 2px solid #1a1a1a; }
    .findings ol { padding-left: 18px; font-size: 11px; line-height: 1.6; }
    .findings ol li { margin-bottom: 6px; }
    .stats-foot { text-align: center; margin-top: 10px; font-size: 11px; color: #333; font-style: italic; }
    svg .axis { stroke: #1a1a1a; stroke-width: 1.5; }
    svg .bar { fill: #808080; stroke: #1a1a1a; stroke-width: 1; }
    svg .bar.strong { fill: #1a1a1a; }
    svg text { font-family: 'Times New Roman', serif; fill: #1a1a1a; }
    svg .bar-label { font-size: 10px; font-weight: bold; }
    svg .value { font-size: 10px; font-weight: bold; }
  </style>
  <div class="stats-wrap">
    <div class="chart">
      <svg width="540" height="300" viewBox="0 0 540 300">
        <line class="axis" x1="50" y1="260" x2="520" y2="260"/>
        <line class="axis" x1="50" y1="20" x2="50" y2="260"/>
        <text x="20" y="140" font-size="11" font-weight="bold" transform="rotate(-90 20 140)" text-anchor="middle">REGRESSION COEFFICIENT (β)</text>
        <!-- Bars: Pillar A=0.18, E=0.21, I=0.24, O=0.27, M=0.19, L=0.32, Coherence=0.55 -->
        <g>
          <rect class="bar" x="70" y="178" width="48" height="82"/>
          <text class="bar-label" x="94" y="275" text-anchor="middle">Pillar A</text>
          <text class="value" x="94" y="172" text-anchor="middle">0.18***</text>
        </g>
        <g>
          <rect class="bar" x="135" y="165" width="48" height="95"/>
          <text class="bar-label" x="159" y="275" text-anchor="middle">Pillar E</text>
          <text class="value" x="159" y="159" text-anchor="middle">0.21***</text>
        </g>
        <g>
          <rect class="bar" x="200" y="151" width="48" height="109"/>
          <text class="bar-label" x="224" y="275" text-anchor="middle">Pillar I</text>
          <text class="value" x="224" y="145" text-anchor="middle">0.24***</text>
        </g>
        <g>
          <rect class="bar" x="265" y="137" width="48" height="123"/>
          <text class="bar-label" x="289" y="275" text-anchor="middle">Pillar O</text>
          <text class="value" x="289" y="131" text-anchor="middle">0.27***</text>
        </g>
        <g>
          <rect class="bar" x="330" y="173" width="48" height="87"/>
          <text class="bar-label" x="354" y="275" text-anchor="middle">Pillar M</text>
          <text class="value" x="354" y="167" text-anchor="middle">0.19***</text>
        </g>
        <g>
          <rect class="bar" x="395" y="114" width="48" height="146"/>
          <text class="bar-label" x="419" y="275" text-anchor="middle">L (Trust)</text>
          <text class="value" x="419" y="108" text-anchor="middle">0.32***</text>
        </g>
        <g>
          <rect class="bar strong" x="460" y="20" width="48" height="240"/>
          <text class="bar-label" x="484" y="275" text-anchor="middle">Pillar</text>
          <text class="bar-label" x="484" y="287" text-anchor="middle">Coherence</text>
          <text class="value" x="484" y="14" text-anchor="middle">0.55***</text>
        </g>
        <text x="280" y="297" font-size="10" font-style="italic" text-anchor="middle">*** p &lt; 0.001 &nbsp;&nbsp;|&nbsp;&nbsp; R² = 0.68 &nbsp;&nbsp;|&nbsp;&nbsp; F significant</text>
      </svg>
    </div>
    <div class="findings">
      <h4>Key Findings</h4>
      <ol>
        <li>Framework architecture is a <strong>significant predictor</strong> of betterment outcomes (R² = 0.68, p &lt; 0.001).</li>
        <li><strong>Pillar Coherence</strong> (combined) is a stronger predictor than any individual pillar.</li>
        <li>The <strong>L component</strong> (Trust Layer Maturity) has a multiplicative effect — it amplifies when high, attenuates when low.</li>
        <li>The <strong>Implementing Agency Variable</strong> is significant even after controlling for sector, scale, and regulatory context.</li>
      </ol>
    </div>
  </div>
  <div class="stats-foot">The regression analysis confirms the framework's predictive architecture. The doctrine and the data converge.</div>
  `
});

// ---------------------------------------------------------------------
// FPF-034 — The Mathematical Architecture (Ch11)
// ---------------------------------------------------------------------
FIGURES.push({
  id: 'fpf-034', orient: 'L',
  title: 'The Mathematical Architecture',
  subtitle: 'Seven components, integrated — operationalizing the doctrine without replacing it',
  bodyHTML: `
  <style>
    .math { position: relative; margin-top: 10px; height: 410px; }
    .cei-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 340px; border: 3px solid #1a1a1a; background: #1a1a1a; color: #FFFFFF; padding: 16px; text-align: center; }
    .cei-center .formula { font-size: 20px; font-weight: bold; letter-spacing: 1px; margin-bottom: 4px; }
    .cei-center .lbl { font-size: 12px; font-style: italic; }
    .comp-box { position: absolute; border: 2px solid #1a1a1a; padding: 10px; background: #fafafa; }
    .comp-box .h { font-size: 13px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; }
    .comp-box .f { font-size: 13px; font-family: 'Courier New', monospace; font-weight: bold; }
    .comp-box .d { font-size: 10px; font-style: italic; color: #444; margin-top: 4px; line-height: 1.4; }
    .wdc { top: 20px; left: 20px; width: 230px; }
    .sai { top: 20px; right: 20px; width: 230px; }
    .l { bottom: 20px; left: 50%; transform: translateX(-50%); width: 230px; }
    .bidx { bottom: 100px; right: 20px; width: 230px; }
    .align { top: 50%; left: 20px; transform: translateY(-50%); width: 200px; }
    .relation { position: absolute; font-size: 9px; font-style: italic; color: #555; }
    .foot { position: absolute; bottom: -28px; left: 0; right: 0; text-align: center; font-size: 12px; font-style: italic; color: #1a1a1a; font-weight: bold; }
  </style>
  <div class="math">
    <div class="cei-center">
      <div class="formula">CEI = [β·WDC + (1−β)·SAI] × L<sup>γ</sup></div>
      <div class="lbl">Composite Effectiveness Index — the primary diagnostic</div>
    </div>
    <div class="comp-box wdc">
      <div class="h">WDC</div>
      <div class="f">= w₁·E + w₂·O</div>
      <div class="d">Weighted Delivery Composite — captures Execution and Outcome pillars.</div>
    </div>
    <div class="comp-box sai">
      <div class="h">SAI</div>
      <div class="f">= a₁·I + a₂·M</div>
      <div class="d">Stakeholder Alignment Index — captures Initiative and Meaning pillars.</div>
    </div>
    <div class="comp-box l">
      <div class="h">L = T<sup>α</sup></div>
      <div class="f">T = f(H, P, TC)</div>
      <div class="d">Legitimacy Factor — derived from Trust Layer Maturity (Human, Procedural, Tech Capital).</div>
    </div>
    <div class="comp-box bidx">
      <div class="h">Betterment Index</div>
      <div class="f">= Σᵢ(vᵢ·bᵢ) / Σᵢ vᵢ</div>
      <div class="d">Measures actual community betterment. Distinct from CEI's institutional effectiveness.</div>
    </div>
    <div class="comp-box align">
      <div class="h">Alignment Equation</div>
      <div class="f">= 1 − [(σ(I,E) + σ(E,O) + σ(I,O))/3]</div>
      <div class="d">Measures pillar alignment — Pillar Coherence operationalized.</div>
    </div>
    <div class="foot">Seven components, integrated. The mathematics operationalize the doctrine, with precision, internal consistency, and empirical calibration.</div>
  </div>
  `
});

// =====================================================================
// CHAPTER MAPS — FPF-CM-01 through FPF-CM-11
// =====================================================================
function chapterMap(id, currentChapter, completedList, currentLabel) {
  // Each row: { status: 'done'|'current'|'pending', label }
  const rows = [];
  rows.push({ status: completedList.includes('intro') ? 'done' : (currentChapter === 'intro' ? 'current' : 'pending'), label: 'Introduction & Prologue' });
  if (completedList.includes('ch1') || currentChapter === 'ch1') rows.push({ status: currentChapter === 'ch1' ? 'current' : 'done', label: 'Chapter 1: The Proclamation Trap' });
  if (completedList.includes('ch2') || currentChapter === 'ch2') rows.push({ status: currentChapter === 'ch2' ? 'current' : 'done', label: 'Chapter 2: The Legitimacy Gap' });
  if (completedList.includes('ch3') || currentChapter === 'ch3') rows.push({ status: currentChapter === 'ch3' ? 'current' : 'done', label: 'Chapter 3: Comparative Review' });
  // For chapters 4+, group as Parts
  if (currentChapter === 'ch4' || currentChapter === 'ch5' || currentChapter === 'ch6' || completedList.includes('ch6')) {
    const isCurrent = ['ch4','ch5','ch6'].includes(currentChapter);
    const partLabel = currentChapter === 'ch4' ? 'Part II: The Framework — Chapter 4: The Framework Architecture'
                   : currentChapter === 'ch5' ? 'Part II: The Framework — Chapter 5: The Five Pillars in Depth'
                   : currentChapter === 'ch6' ? 'Part II: The Framework — Chapter 6: The Trust Layer'
                   : 'Part II: The Framework (Chapters 4–6)';
    rows.push({ status: isCurrent ? 'current' : 'done', label: partLabel });
  }
  if (currentChapter === 'ch7' || currentChapter === 'ch8' || currentChapter === 'ch9' || completedList.includes('ch9')) {
    const isCurrent = ['ch7','ch8','ch9'].includes(currentChapter);
    const partLabel = currentChapter === 'ch7' ? 'Part III: Application — Chapter 7: The Institutional Operating System'
                   : currentChapter === 'ch8' ? 'Part III: Application — Chapter 8: Comparative International Analysis'
                   : currentChapter === 'ch9' ? 'Part III: Application — Chapter 9: The New Legitimacy'
                   : 'Part III: Application (Chapters 7–9)';
    rows.push({ status: isCurrent ? 'current' : 'done', label: partLabel });
  }
  if (currentChapter === 'ch10' || currentChapter === 'ch11' || completedList.includes('ch11')) {
    const isCurrent = ['ch10','ch11'].includes(currentChapter);
    const partLabel = currentChapter === 'ch10' ? 'Part IV: Specialized — Chapter 10: Empirical Validation'
                   : currentChapter === 'ch11' ? 'Part IV: Specialized — Chapter 11: Mathematical Foundations'
                   : 'Part IV: Specialized (Chapters 10–11)';
    rows.push({ status: isCurrent ? 'current' : 'done', label: partLabel });
  }
  rows.push({ status: 'pending', label: 'Epilogue' });

  const rowsHTML = rows.map(r => {
    const sym = r.status === 'done' ? '✓' : (r.status === 'current' ? '■' : '□');
    const cls = r.status === 'current' ? 'cm-row current' : (r.status === 'done' ? 'cm-row done' : 'cm-row pending');
    const label = r.status === 'current' ? `${r.label}  ←  You are here` : r.label;
    return `<div class="${cls}"><span class="sym">${sym}</span><span class="lbl">${label}</span></div>`;
  }).join('');

  return {
    id, orient: 'L',
    title: `Chapter ${currentChapter.replace('ch','')} Map — Book Journey`,
    subtitle: currentLabel,
    bodyHTML: `
    <style>
      .cm-list { border: 2px solid #1a1a1a; padding: 14px 18px; background: #FFFFFF; max-width: 760px; margin: 0 auto; }
      .cm-row { display: flex; align-items: center; padding: 8px 4px; border-bottom: 1px solid #e0e0e0; font-size: 13px; }
      .cm-row:last-child { border-bottom: none; }
      .cm-row .sym { width: 28px; font-size: 16px; font-weight: bold; text-align: center; color: #1a1a1a; }
      .cm-row .lbl { flex: 1; padding-left: 6px; }
      .cm-row.done .lbl { color: #555; }
      .cm-row.done .sym { color: #1a1a1a; }
      .cm-row.pending .lbl { color: #555; }
      .cm-row.pending .sym { color: #808080; }
      .cm-row.current { background: #1a1a1a; color: #FFFFFF; padding: 12px 4px; margin: 4px -8px; }
      .cm-row.current .lbl { color: #FFFFFF; font-weight: bold; }
      .cm-row.current .sym { color: #FFFFFF; }
      .cm-title { text-align: center; font-size: 14px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 2px solid #1a1a1a; }
    </style>
    <div class="cm-list">
      <div class="cm-title">Book Journey</div>
      ${rowsHTML}
    </div>
    `
  };
}

FIGURES.push(chapterMap('fpf-cm-01', 'ch1', [], 'Book Journey — Chapter 1'));
FIGURES.push(chapterMap('fpf-cm-02', 'ch2', ['ch1'], 'Book Journey — Chapter 2'));
FIGURES.push(chapterMap('fpf-cm-03', 'ch3', ['ch1','ch2'], 'Book Journey — Chapter 3'));
FIGURES.push(chapterMap('fpf-cm-04', 'ch4', ['ch1','ch2','ch3'], 'Book Journey — Chapter 4, opening Part II'));
FIGURES.push(chapterMap('fpf-cm-05', 'ch5', ['ch1','ch2','ch3','ch4'], 'Book Journey — Chapter 5'));
FIGURES.push(chapterMap('fpf-cm-06', 'ch6', ['ch1','ch2','ch3','ch4','ch5'], 'Book Journey — Chapter 6'));
FIGURES.push(chapterMap('fpf-cm-07', 'ch7', ['ch1','ch2','ch3','ch4','ch5','ch6'], 'Book Journey — Chapter 7, opening Part III'));
FIGURES.push(chapterMap('fpf-cm-08', 'ch8', ['ch1','ch2','ch3','ch4','ch5','ch6','ch7'], 'Book Journey — Chapter 8'));
FIGURES.push(chapterMap('fpf-cm-09', 'ch9', ['ch1','ch2','ch3','ch4','ch5','ch6','ch7','ch8'], 'Book Journey — Chapter 9'));
FIGURES.push(chapterMap('fpf-cm-10', 'ch10', ['ch1','ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9'], 'Book Journey — Chapter 10. Specialized chapter.'));
FIGURES.push(chapterMap('fpf-cm-11', 'ch11', ['ch1','ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9','ch10'], 'Book Journey — Chapter 11. Specialized chapter.'));

// =====================================================================
// EXECUTIVE SUMMARY GRAPHICS — FPF-ES-02 through FPF-ES-11 (plus FPF-005 already done)
// =====================================================================
function esGraphic(rows) {
  // rows: array of { label, text, highlight? }
  const rowsHTML = rows.map((r, idx) => {
    const isLast = idx === rows.length - 1;
    const cls = r.highlight ? 'es-row highlight' : 'es-row';
    return `
      <div class="${cls}">
        <div class="es-label">${r.label}</div>
        <div class="es-text">${r.text}</div>
      </div>
      ${isLast ? '' : '<div class="es-arrow">↓</div>'}
    `;
  }).join('');
  return `
  <style>
    .es-graphic { display: flex; flex-direction: column; align-items: stretch; gap: 0; margin-top: 6px; }
    .es-row { padding: 14px 16px; border: 2px solid #1a1a1a; margin-bottom: 0; background: #fafafa; }
    .es-row.highlight { background: #1a1a1a; color: #FFFFFF; }
    .es-label { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; color: #1a1a1a; }
    .es-row.highlight .es-label { color: #FFFFFF; }
    .es-text { font-size: 13px; line-height: 1.5; color: #1a1a1a; }
    .es-row.highlight .es-text { color: #FFFFFF; font-weight: bold; }
    .es-arrow { text-align: center; font-size: 18px; color: #1a1a1a; font-weight: bold; margin: 4px 0; }
  </style>
  <div class="es-graphic">
    ${rowsHTML}
  </div>
  `;
}

// FPF-ES-02 — Chapter 2 Executive Summary
FIGURES.push({
  id: 'fpf-es-02', orient: 'P',
  title: 'CHAPTER 2 — THE LEGITIMACY GAP',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'PARADOX', text: 'More accountability on paper. Less trust in practice.' },
    { label: 'CENTRAL CONCEPT', text: 'The Legitimacy Gap — the distance between claimed and demonstrable legitimacy.' },
    { label: 'PATTERNS THAT WIDEN THE GAP', text: 'Verification Debt · The Beneficiary Inversion · The Transparency Trap · The Imposed Imperative' },
    { label: 'THE JOURNEY', text: 'Legitimacy Migration — from expenditure-based to evidence-based legitimacy, along the Proclamation-Proof Gradient.' },
    { label: 'KEY TAKEAWAY', text: 'The Legitimacy Gap cannot be closed by better communication. It can be closed only by better evidence — and better evidence requires architecture.', highlight: true }
  ])
});

// FPF-ES-03 — Chapter 3 Executive Summary
FIGURES.push({
  id: 'fpf-es-03', orient: 'P',
  title: 'CHAPTER 3 — COMPARATIVE REVIEW OF CSR FRAMEWORKS',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'DISTINCTION', text: 'Existing frameworks answer different questions. None answers the Betterment Question.' },
    { label: 'SIX DIMENSIONS', text: 'Compliance · Governance · Stakeholders · Reporting · Impact · Betterment Verification' },
    { label: 'THE GAP', text: 'The sixth dimension — Betterment Verification — is empty in the existing landscape.' },
    { label: 'POSITIONING', text: 'The Five Pillars Framework is a meta-framework — necessary but insufficient positioning. It completes, not replaces.' },
    { label: 'KEY TAKEAWAY', text: 'Existing frameworks are not failing. They are answering different questions. The Five Pillars Framework asks the question they collectively do not — and that is why it is needed.', highlight: true }
  ])
});

// FPF-ES-04 — Chapter 4 Executive Summary
FIGURES.push({
  id: 'fpf-es-04', orient: 'P',
  title: 'CHAPTER 4 — THE FRAMEWORK ARCHITECTURE',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'QUESTION', text: 'If the Betterment Question cannot be answered from within existing architectures, what architecture is required?' },
    { label: 'THE ARCHITECTURE', text: 'Five Pillars in A-E-I-O-M sequence: Accountability, Execution, Initiative, Outcome, Meaning.' },
    { label: 'THE SEQUENCE', text: 'Each pillar presupposes the previous. The sequence is a chain of dependency.' },
    { label: 'COHERENCE', text: 'Pillar Coherence, not individual pillar strength, is the condition for legitimacy.' },
    { label: 'KEY TAKEAWAY', text: 'The Five Pillars are not one architecture among many. They are the architecture the problem requires — and once the problem is understood, no other architecture seems possible.', highlight: true }
  ])
});

// FPF-ES-05 — Chapter 5 Executive Summary
FIGURES.push({
  id: 'fpf-es-05', orient: 'P',
  title: 'CHAPTER 5 — THE FIVE PILLARS IN DEPTH',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'ARCHITECTURE', text: 'Five Pillars in A-E-I-O-M sequence — Accountability, Execution, Initiative, Outcome, Meaning.' },
    { label: 'PILLAR LOGIC', text: 'Each pillar has a definition, a function, a failure mode, a verification demand, tensions, and synergies.' },
    { label: 'FAILURE MODES', text: 'Compliance Theater · Policy-Practice Chasm · Imposed Imperative · Output Illusion · Transparency Trap' },
    { label: 'COHERENCE', text: 'Pillar Coherence, not individual pillar strength, is the condition for legitimacy.' },
    { label: 'DIAGNOSTICS', text: 'The CEI measures institutional effectiveness. The Betterment Index measures actual betterment. Together they diagnose Pillar Coherence.' },
    { label: 'KEY TAKEAWAY', text: 'Legitimacy is not the sum of pillar strengths. It is the condition of pillar coherence. Weakness in any one pillar is weakness in the whole.', highlight: true }
  ])
});

// FPF-ES-06 — Chapter 6 Executive Summary
FIGURES.push({
  id: 'fpf-es-06', orient: 'P',
  title: 'CHAPTER 6 — THE TRUST LAYER',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'PARADOX', text: 'Technologies more powerful than ever. Claims less verifiable than ever.' },
    { label: 'THE LAYER', text: 'The Trust Layer — verification infrastructure: human, procedural, technological.' },
    { label: 'TECHNOLOGY', text: 'Technology is enabling infrastructure within the Trust Layer, not a doctrinal pillar.' },
    { label: 'MATURITY', text: 'Trust Layer Maturity develops through five stages, from Absent to Embedded.' },
    { label: 'CAPITAL', text: 'Trust Capital is built slowly through verified claims, depleted quickly through unverified ones.' },
    { label: 'KEY TAKEAWAY', text: 'The Trust Layer is not a technology. It is the architectural condition in which verification is possible, routine, and structurally embedded. Technology enables it; doctrine defines it.', highlight: true }
  ])
});

// FPF-ES-07 — Chapter 7 Executive Summary
FIGURES.push({
  id: 'fpf-es-07', orient: 'P',
  title: 'CHAPTER 7 — THE INSTITUTIONAL OPERATING SYSTEM',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'QUESTION', text: 'What does an institution that has built the Five Pillars and the Trust Layer look like?' },
    { label: 'ANSWER', text: 'Different from any institution that exists today — structurally, not cosmetically.' },
    { label: 'FIVE RECONSTRUCTIONS', text: 'Governance Redesign · Execution Architecture · CEI as Diagnostic · Trust Layer as Operational Infrastructure · Legitimacy Migration as Institutional Journey' },
    { label: 'THE DISCIPLINE', text: 'Architectural Vigilance — the ongoing work of maintaining the architecture.' },
    { label: 'IMPLEMENTING AGENCY VARIABLE', text: 'Operationalized through selection, support, and verification of implementing agencies against the Five Pillars.' },
    { label: 'KEY TAKEAWAY', text: 'Operationalizing the Five Pillars is not implementing a framework. It is reconstructing an institution around an architecture — and the institution that emerges is structurally different from the one that began.', highlight: true }
  ])
});

// FPF-ES-08 — Chapter 8 Executive Summary
FIGURES.push({
  id: 'fpf-es-08', orient: 'P',
  title: 'CHAPTER 8 — COMPARATIVE INTERNATIONAL ANALYSIS OF CSR REGIMES',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'QUESTION', text: 'Do mandatory CSR regimes produce more demonstrable Betterment of Society than voluntary or low-compliance regimes?' },
    { label: 'THE PARADOX', text: 'The compliance-betterment paradox — compliance does not automatically produce betterment.' },
    { label: 'THE TEN COUNTRIES', text: 'India · UK · Germany · South Africa · USA · China · Brazil · Russia · Iran · Kenya' },
    { label: 'THE PATTERNS', text: 'Regulatory sophistication and demonstrable betterment do not move together. The Implementing Agency Variable is decisive. The Five Pillars apply universally. No country has built the verification architecture.' },
    { label: 'CULTURAL BETTERMENT MECHANISM', text: 'Betterment can be produced through cultural, religious, or community channels that the regulatory framework does not capture.' },
    { label: 'KEY TAKEAWAY', text: 'Regulatory sophistication produces reporting. It does not automatically produce betterment. The decisive variable is not the strength of the compliance regime but the presence of the Five Pillars — and the Five Pillars can be present or absent in any regulatory context.', highlight: true }
  ])
});

// FPF-ES-09 — Chapter 9 Executive Summary
FIGURES.push({
  id: 'fpf-es-09', orient: 'P',
  title: 'CHAPTER 9 — THE NEW LEGITIMACY',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'THE FUTURE', text: 'The change will be drift or migration. The framework is the architecture for migration.' },
    { label: 'THE NEW LEGITIMACY', text: 'Evidence-based, not expenditure-based. Built on the Five Pillars and the Trust Layer.' },
    { label: 'IMPLICATIONS', text: 'Policy: require evidence, not only disclosure. Governance: oversight of outcome. Capital: allocate to Pillar Coherence. Ecosystem: rebuild norms around the Betterment Question.' },
    { label: 'ANTICIPATING CRITICISM', text: 'Measurable when architecture is built. Attribution through Trust Layer. Not every project produces betterment — institutional honesty required. Graduated application for scale equity. Causality through methodological rigor. Limits are deliberate.' },
    { label: 'THE LEGACY TEST', text: 'The doctrine is durable. The architecture remains meaningful in fifty years.' },
    { label: 'KEY TAKEAWAY', text: 'The new legitimacy is not a higher standard of the old accountability. It is a different architecture — one in which the Betterment Question is not evaded but answered, because the architecture exists to answer it. And the architecture is honest about its own limits, because honesty is the foundation of legitimacy.', highlight: true }
  ])
});

// FPF-ES-10 — Chapter 10 Executive Summary
FIGURES.push({
  id: 'fpf-es-10', orient: 'P',
  title: 'CHAPTER 10 — EMPIRICAL VALIDATION OF THE FRAMEWORK',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'STATEMENT', text: 'The framework is not presented as opinion. It is presented as architecture that bears weight.' },
    { label: 'METHODOLOGY', text: 'Mixed-methods: qualitative doctrine development, quantitative validation. Cross-sectional with longitudinal follow-up.' },
    { label: 'KEY FINDINGS', text: 'Framework architecture is significant predictor of betterment outcomes. Pillar Coherence > individual pillars. L has multiplicative effect. Implementing Agency Variable is significant.' },
    { label: 'UNIVERSALITY', text: 'Constructs do not vary significantly across sectors. Constructs vary across regulatory contexts consistent with the compliance-betterment paradox.' },
    { label: 'LIMITATIONS', text: 'Correlational, not experimental. Sample not universally representative. Self-report biases. Regional context. Limited longitudinal period.' },
    { label: 'KEY TAKEAWAY', text: 'The Five Pillars Framework is not a proposal. It is a validated architecture — and the validation is repeatable.', highlight: true }
  ])
});

// FPF-ES-11 — Chapter 11 Executive Summary
FIGURES.push({
  id: 'fpf-es-11', orient: 'P',
  title: 'CHAPTER 11 — MATHEMATICAL FOUNDATIONS OF THE FRAMEWORK',
  subtitle: 'Executive Summary',
  bodyHTML: esGraphic([
    { label: 'PRINCIPLE', text: 'The framework is doctrinal first, mathematical second. The mathematics operationalize the doctrine.' },
    { label: 'THE CEI', text: 'CEI = [β · WDC + (1 − β) · SAI] × L^γ — the primary diagnostic instrument.' },
    { label: 'THE COMPONENTS', text: 'WDC captures Execution and Outcome. SAI captures Initiative and Meaning. L captures Trust Layer Maturity, derived from T.' },
    { label: 'THE BETTERMENT INDEX', text: 'Measures actual community betterment, distinct from the CEI\'s measurement of institutional effectiveness.' },
    { label: 'THE ALIGNMENT EQUATION', text: 'Measures pillar alignment — Pillar Coherence operationalized.' },
    { label: 'KEY TAKEAWAY', text: 'The mathematics are tools for accountability, not academic exercises. They exist to make the Betterment Question answerable with precision — but the question is doctrinal, and the doctrine stands without the mathematics.', highlight: true }
  ])
});

// =====================================================================
// RENDER ENGINE
// =====================================================================

function buildHTML(fig) {
  const head = fig.orient === 'P' ? PORTRAIT_HEAD(fig.title) : LANDSCAPE_HEAD(fig.title);
  const titleHTML = `<div class="title">${fig.title}</div>${fig.subtitle ? `<div class="subtitle">${fig.subtitle}</div>` : ''}`;
  return head + titleHTML + fig.bodyHTML + FOOT;
}

async function renderFigure(browser, fig) {
  const html = buildHTML(fig);
  const page = await browser.newPage();
  const dims = fig.orient === 'P' ? { width: 720, height: 1280 } : { width: 1280, height: 720 };
  await page.setViewportSize(dims);
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const outPath = path.join(__dirname, `${fig.id}.png`);
  await page.screenshot({ path: outPath, type: 'png', fullPage: false, clip: { x: 0, y: 0, width: dims.width, height: dims.height } });
  await page.close();
  return fig.id;
}

async function main() {
  console.log(`Generating ${FIGURES.length} figures...`);
  const browser = await chromium.launch();

  // Render in batches of 5 in parallel
  const BATCH = 5;
  const results = [];
  for (let i = 0; i < FIGURES.length; i += BATCH) {
    const batch = FIGURES.slice(i, i + BATCH);
    console.log(`  Batch ${Math.floor(i/BATCH)+1}/${Math.ceil(FIGURES.length/BATCH)}: ${batch.map(f=>f.id).join(', ')}`);
    const batchResults = await Promise.all(batch.map(fig => renderFigure(browser, fig).catch(err => {
      console.error(`  ERR on ${fig.id}: ${err.message}`);
      return `${fig.id} FAILED`;
    })));
    results.push(...batchResults);
  }

  await browser.close();
  console.log(`\nDone. Rendered ${results.length} figures.`);
  console.log('Sample IDs:', results.slice(0, 10).join(', '), '...');
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
