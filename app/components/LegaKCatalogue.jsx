import React from "react";

// ─── CSS vars injected via style tag ───
const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

.lk-root {
  --void: #04080F;
  --depth: #07101E;
  --surface: #0A1628;
  --card: #0F1E36;
  --lift: #162540;
  --ice: #00C2FF;
  --ice-dim: rgba(0,194,255,0.18);
  --ice-glow: rgba(0,194,255,0.08);
  --frost: #7EE8FA;
  --slate: #94A3B8;
  --mist: #64748B;
  --text: #E2EAF4;
  --text-sub: #B0C4DC;
  --line: rgba(0,194,255,0.12);
  --line-strong: rgba(0,194,255,0.25);

  background: #02060E;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  padding: 48px 20px;
}

.lk-page {
  width: 794px;
  min-height: 1123px;
  margin: 0 auto 56px;
  position: relative;
  overflow: hidden;
  background: var(--surface);
}

.lk-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='none'/%3E%3Cpath d='M0 0h40v40' fill='none' stroke='%2300C2FF' stroke-width='0.4' opacity='0.06'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.lk-page > * { position: relative; z-index: 1; }

.lk-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 36px;
  background: var(--void);
  border-bottom: 1px solid var(--line-strong);
}
.lk-strip-brand {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--ice);
}
.lk-strip-doc {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--mist);
  letter-spacing: 2px;
}

.lk-pg-num {
  position: absolute;
  bottom: 24px;
  right: 36px;
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--mist);
  letter-spacing: 3px;
}

.lk-foot-bar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  display: flex;
  align-items: center;
  padding: 14px 36px;
  background: var(--void);
  border-top: 1px solid var(--line-strong);
}
.lk-foot-contact {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 1px;
}
.lk-foot-contact a {
  color: var(--text-sub);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.15s ease;
}
.lk-foot-contact a:hover { color: var(--ice); }
.lk-foot-contact .sep { color: var(--mist); opacity: 0.35; }

/* ── COVER ── */
.lk-cover {
  background: var(--void);
  display: flex;
  flex-direction: column;
  min-height: 1123px;
}
.lk-cover-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 65% 55% at 72% 35%, rgba(0,194,255,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 45% 45% at 20% 70%, rgba(126,232,250,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 55% 40% at 50% 100%, rgba(0,60,100,0.3) 0%, transparent 70%);
  pointer-events: none;
}
.lk-cover-circuit {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.lk-cover-circuit svg {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
.lk-cover-body {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 52px 56px 40px;
}
.lk-cover-body::before,
.lk-cover-body::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border-color: rgba(0,194,255,0.4);
  border-style: solid;
}
.lk-cover-body::before { top: 44px; left: 48px; border-width: 2px 0 0 2px; }
.lk-cover-body::after  { bottom: 44px; right: 48px; border-width: 0 2px 2px 0; }

.lk-cover-klass {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 4px;
  color: var(--ice);
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: 0.8;
}
.lk-cover-company {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 7px;
  text-transform: uppercase;
  color: var(--slate);
  margin-bottom: 52px;
}
.lk-cover-product-line {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: var(--slate);
  margin-bottom: 6px;
}
.lk-cover-h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 106px;
  line-height: 0.9;
  letter-spacing: -4px;
  color: var(--text);
  margin-bottom: 10px;
}
.lk-cover-h1 span { color: var(--ice); }
.lk-cover-rule {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--ice), rgba(0,194,255,0.3) 40%, transparent);
  margin: 28px 0 24px;
}
.lk-cover-desc {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-sub);
  max-width: 440px;
  margin-bottom: 44px;
}
.lk-vessel-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 52px;
}
.lk-v-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: var(--ice-glow);
  border: 1px solid var(--line-strong);
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--frost);
}
.lk-v-tag-dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--ice);
  flex-shrink: 0;
}
.lk-cover-specs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line-strong);
  margin-top: auto;
}
.lk-cspec {
  padding: 18px 20px;
  border-right: 1px solid var(--line-strong);
}
.lk-cspec:last-child { border-right: none; }
.lk-cspec-val {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--ice);
  line-height: 1;
  margin-bottom: 4px;
}
.lk-cspec-lbl {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--mist);
}
.lk-cover-mfr {
  background: rgba(0,0,0,0.5);
  border-top: 1px solid var(--line-strong);
  padding: 18px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lk-mfr-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-sub);
}
.lk-mfr-addr {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--mist);
  text-align: right;
  line-height: 1.7;
}
.lk-mfr-addr a { color: inherit; text-decoration: none; }
.lk-mfr-addr a:hover { color: var(--ice); }

/* ── INNER PAGES ── */
.lk-inner-body { padding: 36px 44px 80px; }

.lk-sec-intro {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 20px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line-strong);
  margin-bottom: 36px;
}
.lk-sec-tag {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ice);
  margin-bottom: 8px;
  opacity: 0.8;
}
.lk-sec-h {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.05;
  color: var(--text);
}
.lk-sec-h em { font-style: normal; color: var(--ice); }
.lk-sec-pg {
  font-family: 'Space Mono', monospace;
  font-size: 60px;
  font-weight: 700;
  color: rgba(0,194,255,0.07);
  line-height: 1;
  letter-spacing: -3px;
}

/* ── PAGE 2: OVERVIEW ── */
.lk-overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 28px;
}
.lk-ov-card {
  background: var(--card);
  border: 1px solid var(--line);
  padding: 24px;
}
.lk-ov-card.wide { grid-column: span 2; }
.lk-ov-icon { font-size: 20px; margin-bottom: 12px; }
.lk-ov-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}
.lk-ov-text {
  font-size: 12.5px;
  line-height: 1.75;
  color: var(--text-sub);
}
.lk-ov-text strong { color: var(--frost); font-weight: 500; }

.lk-vs-label {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--mist);
  margin-bottom: 10px;
}
.lk-target-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 28px;
}
.lk-target-item {
  background: var(--ice-glow);
  border: 1px solid var(--line-strong);
  padding: 12px 10px;
  text-align: center;
}
.lk-target-icon { font-size: 18px; margin-bottom: 6px; }
.lk-target-lbl {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--frost);
  line-height: 1.5;
}
.lk-vessel-showcase {
  background: var(--card);
  border: 1px solid var(--line-strong);
  padding: 20px 24px;
}
.lk-vessel-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.lk-vl-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  background: var(--surface);
  border: 1px solid var(--line);
}
.lk-vl-icon { font-size: 22px; }
.lk-vl-name {
  font-size: 10px;
  font-weight: 500;
  color: var(--text-sub);
  text-align: center;
  line-height: 1.4;
}

/* ── PAGE 3: PROPERTIES ── */
.lk-prop-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 28px;
}
.lk-prop-table th {
  background: var(--void);
  padding: 10px 16px;
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ice);
  text-align: left;
  border-bottom: 2px solid var(--ice);
}
.lk-prop-table th:last-child { text-align: right; }
.lk-prop-table td {
  padding: 10px 16px;
  font-size: 12px;
  color: var(--text-sub);
  border-bottom: 1px solid var(--line);
  vertical-align: middle;
}
.lk-prop-table td:first-child {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: var(--text);
  font-size: 12.5px;
}
.lk-prop-table td:nth-child(2) {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: var(--mist);
}
.lk-prop-table td:nth-child(3) {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: var(--slate);
}
.lk-prop-table td:last-child {
  text-align: right;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: var(--ice);
}
.lk-prop-table tr:nth-child(odd) td { background: rgba(0,194,255,0.02); }
.lk-prop-table tr:hover td { background: rgba(0,194,255,0.05); }

.lk-alert-banner {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 20px;
  background: rgba(255,80,80,0.06);
  border: 1px solid rgba(255,80,80,0.2);
  margin-bottom: 20px;
}
.lk-alert-icon { font-size: 16px; flex-shrink: 0; margin-top: 2px; }
.lk-alert-text { font-size: 12px; line-height: 1.7; color: var(--text-sub); }
.lk-alert-text strong { color: #FCA5A5; font-weight: 600; }

.lk-footnote {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  line-height: 1.8;
  color: var(--mist);
  padding: 16px;
  border: 1px solid var(--line);
  background: var(--card);
}
.lk-abbrev-row { display: flex; gap: 24px; margin-top: 12px; }
.lk-abbrev { font-family: 'Space Mono', monospace; font-size: 9px; color: var(--mist); }
.lk-abbrev strong { color: var(--slate); }

/* ── PAGE 4: APPLICATIONS ── */
.lk-app-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}
.lk-app-block {
  background: var(--card);
  border: 1px solid var(--line);
  padding: 22px;
}
.lk-app-block-tag {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ice);
  margin-bottom: 10px;
}
.lk-app-block-h {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 12px;
}
.lk-app-block-body { font-size: 12px; line-height: 1.75; color: var(--text-sub); }
.lk-app-block-body strong { color: var(--frost); }

.lk-proc-steps { display: flex; flex-direction: column; margin-bottom: 24px; }
.lk-proc-step {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 16px;
  align-items: start;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}
.lk-proc-step:last-child { border-bottom: none; }
.lk-step-num {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: var(--ice);
  letter-spacing: 1px;
  padding-top: 2px;
}
.lk-step-body-h {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: var(--text);
  margin-bottom: 4px;
}
.lk-step-body-t { font-size: 12px; line-height: 1.7; color: var(--text-sub); }
.lk-step-body-t strong { color: var(--frost); font-weight: 500; }

.lk-lab-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
  background: var(--card);
  border: 1px solid var(--line-strong);
  padding: 20px 24px;
}
.lk-lab-icon-wrap {
  width: 48px; height: 48px;
  background: var(--ice-glow);
  border: 1px solid var(--ice);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.lk-lab-badge {
  display: inline-block;
  padding: 2px 8px;
  background: rgba(0,194,255,0.1);
  border: 1px solid var(--line-strong);
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  color: var(--ice);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.lk-lab-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
  margin-bottom: 3px;
}
.lk-lab-addr {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--mist);
  line-height: 1.7;
}

/* ── PAGE 5: SAFETY ── */
.lk-safety-3col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
  margin-bottom: 24px;
}
.lk-sf-tile {
  background: var(--card);
  border: 1px solid var(--line);
  padding: 20px 18px;
}
.lk-sf-tile.warn { background: rgba(250,100,0,0.04); border-color: rgba(250,150,50,0.2); }
.lk-sf-tile.crit { background: rgba(220,38,38,0.04); border-color: rgba(220,38,38,0.2); }
.lk-sft-icon { font-size: 20px; margin-bottom: 10px; }
.lk-sft-h {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: var(--text);
  margin-bottom: 8px;
}
.lk-sft-b { font-size: 11.5px; line-height: 1.7; color: var(--text-sub); }
.lk-sft-b strong { color: var(--frost); font-weight: 500; }

.lk-chem-panel {
  background: var(--card);
  border: 1px solid var(--line-strong);
  padding: 22px 24px;
  margin-bottom: 16px;
}
.lk-chem-title {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ice);
  margin-bottom: 14px;
}
.lk-chem-eq {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.lk-chem-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  min-width: 70px;
}
.lk-chem-node.danger { border-color: rgba(220,38,38,0.3); }
.lk-cn-sym {
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: var(--ice);
}
.lk-cn-lbl { font-size: 9px; color: var(--mist); text-align: center; line-height: 1.4; }
.lk-chem-op { font-family: 'Space Mono', monospace; font-size: 18px; color: var(--slate); }
.lk-chem-result {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px 14px;
  background: rgba(220,38,38,0.06);
  border: 1px solid rgba(220,38,38,0.15);
}
.lk-chem-result-icon { font-size: 14px; flex-shrink: 0; }
.lk-chem-result-text { font-size: 11.5px; line-height: 1.6; color: var(--text-sub); }
.lk-chem-result-text strong { color: #FCA5A5; font-weight: 500; }
.lk-chem-directive {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: var(--ice);
  letter-spacing: 1px;
  margin-top: 10px;
}

.lk-scope-box {
  background: var(--void);
  border: 1px solid var(--line-strong);
  padding: 18px 22px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.lk-scope-label {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--mist);
  white-space: nowrap;
  margin-top: 2px;
  flex-shrink: 0;
}
.lk-scope-content { flex: 1; }
.lk-scope-h {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
  margin-bottom: 6px;
}
.lk-scope-vals { display: flex; gap: 24px; }
.lk-sv-num {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--ice);
  line-height: 1;
}
.lk-sv-unit {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--mist);
  margin-top: 2px;
}
`;

// ─── Shared sub-components ───────────────────────────────────────────────────

function Strip({ doc }) {
  return (
    <div className="lk-strip">
      <span className="lk-strip-brand">QUICKPETRO</span>
      <span className="lk-strip-doc">{doc}</span>
    </div>
  );
}

function FootBar() {
  return (
    <div className="lk-foot-bar">
      <div className="lk-foot-contact">
        <a href="tel:+919825044917">📞 +91 98250 44917</a>
        <span className="sep">|</span>
        <a href="mailto:quickpetro@gmail.com">✉️ quickpetro@gmail.com</a>
        <span className="sep">|</span>
        <a href="https://maps.google.com/?q=Narol+-+Vatva+Rd,+Phase+I,+Vatva+GIDC,+Ahmedabad,+Gujarat+382445" target="_blank" rel="noopener noreferrer">
          📍 Narol-Vatva Rd, Phase I, Vatva GIDC
        </a>
      </div>
    </div>
  );
}

function SecIntro({ tag, title, pg }) {
  // title supports <em> via dangerouslySetInnerHTML
  return (
    <div className="lk-sec-intro">
      <div>
        <div className="lk-sec-tag">{tag}</div>
        <div className="lk-sec-h" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="lk-sec-pg">{pg}</div>
    </div>
  );
}

// ─── Page 1: Cover ───────────────────────────────────────────────────────────

function CoverPage() {
  return (
    <div className="lk-page lk-cover">
      <div className="lk-cover-glow" />
      <div className="lk-cover-circuit">
        <svg viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice">
          <g stroke="#00C2FF" fill="none" strokeWidth="0.8" opacity="0.12">
            <polyline points="680,0 680,180 720,180 720,280 760,280 760,400" />
            <polyline points="760,400 760,440 794,440" />
            <circle cx="720" cy="180" r="4" fill="#00C2FF" opacity="0.5" />
            <circle cx="760" cy="280" r="4" fill="#00C2FF" opacity="0.5" />
            <polyline points="794,600 740,600 740,700 680,700 680,800" />
            <circle cx="740" cy="600" r="3" fill="#00C2FF" opacity="0.4" />
            <line x1="600" y1="220" x2="794" y2="220" opacity="0.4" />
            <line x1="620" y1="230" x2="794" y2="230" opacity="0.2" />
            <polyline points="580,1000 620,1000 620,1040 680,1040 680,1123" opacity="0.3" />
            <polyline points="0,860 60,860 60,920 0,920" opacity="0.2" />
          </g>
          <g stroke="#00C2FF" fill="none" opacity="0.2">
            <circle cx="700" cy="200" r="24" strokeWidth="0.6" />
            <circle cx="700" cy="200" r="6" strokeWidth="0.6" />
            <line x1="700" y1="170" x2="700" y2="186" strokeWidth="0.6" />
            <line x1="700" y1="214" x2="700" y2="230" strokeWidth="0.6" />
            <line x1="670" y1="200" x2="686" y2="200" strokeWidth="0.6" />
            <line x1="714" y1="200" x2="730" y2="200" strokeWidth="0.6" />
          </g>
        </svg>
      </div>

      <Strip doc="TECHNICAL PRODUCT CATALOG · REV 01" />

      <div className="lk-cover-body">
        <div>
          <div className="lk-cover-klass">VESSEL CLEANING FLUID · TDS-QP-LK-01</div>
          <div className="lk-cover-company">QUICKPETRO · AHMEDABAD · INDIA</div>
        </div>
        <div>
          <div className="lk-cover-product-line">LEGA SERIES</div>
          <div className="lk-cover-h1">LEGA-<span>K</span></div>
        </div>
        <div className="lk-cover-rule" />
        <p className="lk-cover-desc">
          Precision dual-action cleaner and flushing fluid engineered for vessel heat transfer systems.
          Removes carbon deposits, oxidized fluids, sludge, and volatile contaminants
          from enclosed vessel geometries where conventional cleaners cannot reach.
        </p>
        <div className="lk-vessel-tags">
          {["Lim-Peck Coil Vessel","Jacket Vessel","Inner Coil Vessel","Glass Line Reactor"].map(t => (
            <div className="lk-v-tag" key={t}>
              <div className="lk-v-tag-dot" />{t}
            </div>
          ))}
        </div>
        <div className="lk-cover-specs">
          {[{val:"-10°C",lbl:"Pour Point"},{val:"60°C",lbl:"Max Operating"},{val:"<20°C",lbl:"Flash Point COC"},{val:"300°C",lbl:"Autoignition"}].map(s => (
            <div className="lk-cspec" key={s.lbl}>
              <div className="lk-cspec-val">{s.val}</div>
              <div className="lk-cspec-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lk-cover-mfr">
        <div className="lk-mfr-name">QUICKPETRO</div>
        <div className="lk-mfr-addr">
          <a href="https://maps.google.com/?q=Narol+-+Vatva+Rd,+Phase+I,+Vatva+GIDC,+Ahmedabad,+Gujarat+382445" target="_blank" rel="noopener noreferrer">
            📍 Narol - Vatva Rd, Phase I, Vatva GIDC, Ahmedabad, Gujarat 382445
          </a><br />
          <a href="mailto:quickpetro@gmail.com">✉️ quickpetro@gmail.com</a>
          {" · "}
          <a href="tel:+919825044917">📞 +91 98250 44917</a>
        </div>
      </div>

      <div className="lk-pg-num">01 / 05</div>
    </div>
  );
}

// ─── Page 2: Overview ────────────────────────────────────────────────────────

function OverviewPage() {
  return (
    <div className="lk-page">
      <Strip doc="LEGA-K · PRODUCT OVERVIEW" />
      <div className="lk-inner-body">
        <SecIntro tag="01 · Overview" title="What LEGA-K<br/><em>Does</em>" pg="02" />

        <div className="lk-overview-grid">
          <div className="lk-ov-card">
            <div className="lk-ov-icon">🧪</div>
            <div className="lk-ov-title">Dual-Action Chemistry</div>
            <div className="lk-ov-text">
              LEGA-K operates simultaneously as a <strong>system cleaner</strong> and a <strong>flushing carrier fluid</strong> in
              a single formulation. It dissolves bound contaminants while carrying displaced material out of
              complex vessel geometries — no two-step process required.
            </div>
          </div>
          <div className="lk-ov-card">
            <div className="lk-ov-icon">⚗️</div>
            <div className="lk-ov-title">Wide Fluid Compatibility</div>
            <div className="lk-ov-text">
              Formulated to be compatible with <strong>both synthetic and mineral-based</strong> heat transfer oils.
              Before deployment in unfamiliar systems, laboratory compatibility testing is recommended.
              QUICKPETRO provides this service on request.
            </div>
          </div>
          <div className="lk-ov-card wide">
            <div className="lk-ov-icon">🔄</div>
            <div className="lk-ov-title">When to Use LEGA-K</div>
            <div className="lk-ov-text">
              Use prior to introducing new heat transfer fluid into a vessel, during routine maintenance intervals,
              or when commissioning brand-new systems. New vessels frequently contain residual metals, minerals,
              and manufacturing lacquers — LEGA-K purges these before first fill, protecting the primary fluid from day one.
              It is also indicated when <strong>fluid sampling shows early degradation signs</strong> but full fluid replacement
              has not yet been scheduled.
            </div>
          </div>
        </div>

        <div className="lk-vs-label">Targeted Contaminants</div>
        <div className="lk-target-list">
          {[
            {icon:"🟤",lbl:"Carbon\nDeposits"},
            {icon:"🪨",lbl:"Oxidized\nResidual Oil"},
            {icon:"💧",lbl:"Water\nContamination"},
            {icon:"🌫️",lbl:"Volatile\nLight Ends"},
            {icon:"🧲",lbl:"Loose\nDebris"},
          ].map(t => (
            <div className="lk-target-item" key={t.lbl}>
              <div className="lk-target-icon">{t.icon}</div>
              <div className="lk-target-lbl" style={{whiteSpace:"pre-line"}}>{t.lbl}</div>
            </div>
          ))}
        </div>

        <div className="lk-vessel-showcase">
          <div className="lk-vs-label">Certified Vessel Applications</div>
          <div className="lk-vessel-list">
            {[
              {icon:"🌀",name:"Lim-Peck\nCoil Vessel"},
              {icon:"🏺",name:"Jacket\nVessel"},
              {icon:"⭕",name:"Inner Coil\nType Vessel"},
              {icon:"🔬",name:"Glass Line\nReactor"},
            ].map(v => (
              <div className="lk-vl-item" key={v.name}>
                <div className="lk-vl-icon">{v.icon}</div>
                <div className="lk-vl-name" style={{whiteSpace:"pre-line"}}>{v.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FootBar />
      <div className="lk-pg-num">02 / 05</div>
    </div>
  );
}

// ─── Page 3: Properties ──────────────────────────────────────────────────────

const PROPS = [
  ["Appearance","—","Visual",<span style={{fontSize:11,color:"var(--text-sub)"}}>Colorless transparent liquid, no odour</span>],
  ["Operating Range","°C","—","−10 to 60"],
  ["Density @ 25°C","kg/m³","ASTM D4052","0.820 – 0.850"],
  ["Kinematic Viscosity @ 40°C","mm²/s (cSt)","ASTM D445","1.0 – 6.0"],
  ["Kinematic Viscosity @ 100°C","mm²/s (cSt)","ASTM D445",<span style={{color:"var(--mist)",fontSize:11}}>NTR</span>],
  ["Flash Point (COC)","°C","ASTM D92",<span style={{color:"#FCA5A5"}}>&lt; 20</span>],
  ["Pour Point","°C","ISO 3016","−12"],
  ["Autoignition Point","°C","ASTM E659","300"],
  ["Coeff. of Thermal Expansion","per °C","NTR","0.00077"],
  ["Neutralization No. (TAN)","mgKOH/g","ASTM D974","< 0.05"],
  ["Max Bulk Temperature","°C","NTR","45"],
  ["Max Film Temperature","°C","NTR","50"],
  ["Boiling Point @ 1013 mbar","°C","NTR","60"],
  ["Average Molecular Weight","—","NTR","400"],
  ["Moisture Content","PPM","ASTM D6304","< 100"],
];

function PropertiesPage() {
  return (
    <div className="lk-page">
      <Strip doc="LEGA-K · PHYSICAL & CHEMICAL PROPERTIES" />
      <div className="lk-inner-body">
        <SecIntro tag="02 · Technical Data" title="Physical &amp; Chemical<br/><em>Properties</em>" pg="03" />

        <div className="lk-alert-banner">
          <div className="lk-alert-icon">⚠️</div>
          <div className="lk-alert-text">
            <strong>Low Flash Point Warning:</strong> LEGA-K has a flash point below 20°C. Store away from ignition sources
            in a well-ventilated area. Do not use in systems exceeding the maximum bulk temperature of 45°C
            without consulting a technical advisor. Handle per MSDS guidelines.
          </div>
        </div>

        <table className="lk-prop-table">
          <thead>
            <tr>
              <th style={{width:"32%"}}>Parameter</th>
              <th style={{width:"12%"}}>Unit</th>
              <th style={{width:"18%"}}>Test Method</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {PROPS.map(([param, unit, method, result], i) => (
              <tr key={i}>
                <td>{param}</td>
                <td>{unit}</td>
                <td>{method}</td>
                <td>{result}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lk-footnote">
          <strong style={{color:"var(--slate)"}}>Note:</strong> Values above reflect typical production data and are subject to allowable manufacturing tolerances.
          These are not guaranteed specifications for any specific lot. QUICKPETRO reserves the right to revise without prior notice.
          For comprehensive safety information, refer to the Material Safety Data Sheet (MSDS) — contact +91 98250 44917.
          <div className="lk-abbrev-row">
            <span className="lk-abbrev"><strong>COC</strong> — Cleveland Open Cup Test</span>
            <span className="lk-abbrev"><strong>NTR</strong> — No Test Reported</span>
            <span className="lk-abbrev"><strong>TAN</strong> — Total Acid Number</span>
          </div>
        </div>
      </div>
      <FootBar />
      <div className="lk-pg-num">03 / 05</div>
    </div>
  );
}

// ─── Page 4: Applications ────────────────────────────────────────────────────

const STEPS = [
  {num:"S·01",h:"Vent Air and Moisture",t:<>Before applying heat, ensure all <strong>air and water are completely vented</strong> from the system. Residual air or moisture leads to erratic performance and accelerated fluid degradation.</>},
  {num:"S·02",h:"Circulate LEGA-K at Temperature",t:<>Circulate fluid at operating temperature within the <strong>−10°C to 55°C</strong> range. Do not exceed maximum bulk temperature of 45°C. Monitor pump operation throughout.</>},
  {num:"S·03",h:"Drain and Purge",t:<>Drain hot fluid with standard safety precautions. After draining, client must provide a <strong>high-pressure air compressor (min. 150 CFM, 5 Kg/cm²)</strong> to fully purge residual fluid from all vessel passages.</>},
  {num:"S·04",h:"Responsible Disposal",t:<>Dispose of used LEGA-K via <strong>oil recycling</strong> (filtration, dehydration, distillation) or <strong>industrial energy recovery</strong> (burning in furnaces or kilns meeting contaminant thresholds). Never drain to waterways.</>},
  {num:"S·05",h:"Recharge with Primary Fluid",t:<>Refill with a high-performance heat transfer fluid compatible with your vessel application. Consult QUICKPETRO for fluid selection guidance based on your operating parameters.</>},
];

function ApplicationsPage() {
  return (
    <div className="lk-page">
      <Strip doc="LEGA-K · APPLICATIONS & SERVICE" />
      <div className="lk-inner-body">
        <SecIntro tag="03 · Service" title="Applications &amp;<br/><em>Service Guidance</em>" pg="04" />

        <div className="lk-app-split">
          <div className="lk-app-block">
            <div className="lk-app-block-tag">Operating Range</div>
            <div className="lk-app-block-h">Recommended Conditions</div>
            <div className="lk-app-block-body">
              LEGA-K is formulated for cleaning vessel heat transfer systems within a temperature range of{" "}
              <strong style={{color:"var(--frost)"}}>−10°C to 55°C bulk</strong>, with a maximum film temperature of 60°C.
              Particularly suited for mild-temperature environments where low-temperature fluidity is critical for adequate flow during start-up.
            </div>
          </div>
          <div className="lk-app-block">
            <div className="lk-app-block-tag">Best Practice</div>
            <div className="lk-app-block-h">Pre-Charge Cleaning</div>
            <div className="lk-app-block-body">
              Use LEGA-K <strong style={{color:"var(--frost)"}}>before charging new heat transfer fluid</strong> into any vessel.
              New systems often contain residual construction contaminants — metals, mineral films, lacquers — that degrade
              primary fluid from the first day of operation. LEGA-K removes these before they cause harm.
            </div>
          </div>
        </div>

        <div className="lk-vs-label" style={{marginBottom:12}}>General Cleaning Procedure</div>
        <div className="lk-proc-steps">
          {STEPS.map(s => (
            <div className="lk-proc-step" key={s.num}>
              <div className="lk-step-num">{s.num}</div>
              <div>
                <div className="lk-step-body-h">{s.h}</div>
                <div className="lk-step-body-t">{s.t}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lk-lab-card">
          <div className="lk-lab-icon-wrap">🔬</div>
          <div>
            <div className="lk-lab-badge">NABL Accredited Lab</div>
            <div className="lk-lab-name">DEV PETROLEUM LABORATORY (OPC) PVT LTD</div>
            <div className="lk-lab-addr">
              83, Pushpak Industrial Estate, Nika Tube Compound, Phase I, GIDC Vatva, Ahmedabad – 382445, Gujarat<br />
              Phone: 7859850199 · www.devpetrochem.com · Fluid sampling: 3–4 times annually while hot and circulating
            </div>
          </div>
        </div>
      </div>
      <FootBar />
      <div className="lk-pg-num">04 / 05</div>
    </div>
  );
}

// ─── Page 5: Safety ──────────────────────────────────────────────────────────

const SAFETY_TILES = [
  {cls:"crit",icon:"🔥",h:"Flash Point Hazard",b:<>LEGA-K has a flash point below 20°C. Keep away from open flames, sparks, and hot surfaces. Store in sealed containers in a cool, ventilated area. Do not smoke near handling zones.</>},
  {cls:"warn",icon:"🌬️",h:"Air and Moisture Control",b:<>Always vent air and moisture <strong>fully</strong> before heating. Air exposure causes rapid oil oxidation, fluid thickening, and carbonaceous deposits. Keep expansion tank temperatures below 80°C.</>},
  {cls:"warn",icon:"🔩",h:"Pump Integrity",b:<>Inspect circulating pumps regularly. Pump seal failure allows air ingress into the circuit — this is the most common root cause of <strong>unexpected fluid degradation</strong> in vessel systems.</>},
  {cls:"",icon:"🧱",h:"No Copper Components",b:"Copper and copper alloys act as catalysts that accelerate oil breakdown, especially at elevated temperatures. Replace copper fittings with steel or other compatible alternatives in all contact zones."},
  {cls:"",icon:"🧤",h:"Personal Protection",b:"Handle per industrial hygiene standards. Wear appropriate PPE when draining hot fluid. Full health, first-aid, and disposal guidance is in the product MSDS — obtain from QUICKPETRO."},
  {cls:"",icon:"📋",h:"Compatibility Testing",b:"LEGA-K is generally compatible with most organic heat transfer oils. Where system fluid is unknown or non-standard, conduct laboratory testing prior to use. QUICKPETRO offers this service."},
];

function SafetyPage() {
  return (
    <div className="lk-page">
      <Strip doc="LEGA-K · SAFETY & OPERATIONAL SCOPE" />
      <div className="lk-inner-body">
        <SecIntro tag="04 · Safety" title="Safety &amp;<br/><em>Operational Scope</em>" pg="05" />

        <div className="lk-safety-3col">
          {SAFETY_TILES.map(t => (
            <div className={`lk-sf-tile ${t.cls}`} key={t.h}>
              <div className="lk-sft-icon">{t.icon}</div>
              <div className="lk-sft-h">{t.h}</div>
              <div className="lk-sft-b">{t.b}</div>
            </div>
          ))}
        </div>

        <div className="lk-chem-panel">
          <div className="lk-chem-title">System Chemistry · Why Air Is the Primary Risk</div>
          <div className="lk-chem-eq">
            <div className="lk-chem-node">
              <div className="lk-cn-sym">🌡️</div>
              <div className="lk-cn-lbl">Hot Oil</div>
            </div>
            <div className="lk-chem-op">+</div>
            <div className="lk-chem-node">
              <div className="lk-cn-sym">O₂</div>
              <div className="lk-cn-lbl">Air Exposure</div>
            </div>
            <div className="lk-chem-op">=</div>
            <div className="lk-chem-node danger">
              <div className="lk-cn-sym">⚙️</div>
              <div className="lk-cn-lbl">Sludge &amp; Blockage</div>
            </div>
          </div>
          <div className="lk-chem-result">
            <div className="lk-chem-result-icon">🔴</div>
            <div className="lk-chem-result-text">
              <strong>Risk:</strong> Hot oil oxidizes on air contact, causing fluid thickening and system-blocking carbon deposits inside vessel passages.
            </div>
          </div>
          <div className="lk-chem-directive">→ Purge all air completely before heating the system to operating temperature.</div>
        </div>

        <div className="lk-scope-box">
          <div className="lk-scope-label">Client Scope</div>
          <div className="lk-scope-content">
            <div className="lk-scope-h">Required Equipment — Party Scope (Post-Cleaning Purge)</div>
            <div className="lk-scope-vals">
              <div>
                <div className="lk-sv-num">150</div>
                <div className="lk-sv-unit">CFM · Minimum Air Compressor Capacity</div>
              </div>
              <div>
                <div className="lk-sv-num">5</div>
                <div className="lk-sv-unit">Kg/cm² · Operating Pressure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FootBar />
      <div className="lk-pg-num">05 / 05</div>
    </div>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────

export default function LegaKCatalogue() {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="lk-root">
        <CoverPage />
        <OverviewPage />
        <PropertiesPage />
        <ApplicationsPage />
        <SafetyPage />
      </div>
    </>
  );
}
