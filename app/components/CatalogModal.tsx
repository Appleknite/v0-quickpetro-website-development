import React from 'react';

const ProductCatalog = () => {
  // Injecting the exact CSS styles provided in the original HTML file
  const cssStyles = `
    :root {
      --bg-deep: #070C18;
      --bg-primary: #0C1220;
      --bg-card: #121B2E;
      --bg-surface: #1A2540;
      --amber: #F59E0B;
      --amber-light: #FCD34D;
      --orange: #EF6C00;
      --teal: #0D9488;
      --teal-light: #5EEAD4;
      --text-primary: #F1F5F9;
      --text-secondary: #CBD5E1;
      --text-muted: #64748B;
      --border: rgba(241,245,249,0.08);
      --border-amber: rgba(245,158,11,0.3);
    }

    .catalog-wrapper {
      background: #050A14;
      padding: 40px 20px;
      min-height: 100vh;
      color: var(--text-primary);
      font-family: 'Nunito Sans', sans-serif;
      font-size: 14px;
      line-height: 1.6;
    }

    .page {
      width: 794px;
      min-height: 1123px;
      margin: 0 auto 48px;
      position: relative;
      overflow: hidden;
      background: var(--bg-primary);
    }

    .cover {
      background: var(--bg-deep);
      display: flex;
      flex-direction: column;
    }

    .cover-hero {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 56px 60px 40px;
      min-height: 820px;
    }

    .cover-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 70% 60% at 65% 40%, rgba(239,108,0,0.20) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 15% 80%, rgba(245,158,11,0.12) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 50% 100%, rgba(13,148,136,0.09) 0%, transparent 70%);
      pointer-events: none;
    }

    .cover-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66zm0-5.7L52 47.7V19.3L28 5.7 4 19.3v28.4L28 60.3z' fill='none' stroke='%23F59E0B' stroke-width='0.5' opacity='0.07'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .cover-content {
      position: relative;
      z-index: 1;
    }

    .brand-name {
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      font-size: 13px;
      letter-spacing: 8px;
      text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 6px;
    }

    .brand-tagline {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 44px;
    }

    .cover-divider {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, var(--amber), transparent);
      margin-bottom: 20px;
    }

    .product-name {
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      font-size: 118px;
      line-height: 0.88;
      letter-spacing: -5px;
      background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 45%, #F97316 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 12px;
    }

    .product-subtitle {
      font-family: 'Exo 2', sans-serif;
      font-weight: 600;
      font-size: 21px;
      letter-spacing: 2px;
      color: var(--text-secondary);
      margin-bottom: 46px;
    }

    .engineered-for {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 52px;
      flex-wrap: wrap;
    }

    .engineered-label {
      font-size: 10px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .engineered-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(245,158,11,0.10);
      border: 1px solid var(--border-amber);
      border-radius: 4px;
      padding: 9px 18px;
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--amber-light);
    }

    .engineered-plus {
      font-size: 20px;
      color: var(--text-muted);
    }

    .cover-stats {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 36px;
      max-width: 500px;
    }

    .stat-val {
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      font-size: 30px;
      line-height: 1;
      margin-bottom: 4px;
    }

    .stat-lbl {
      font-size: 9px;
      letter-spacing: 2px;
      color: var(--text-muted);
      text-transform: uppercase;
      line-height: 1.4;
    }

    .watermark-svg {
      position: absolute;
      right: -30px;
      bottom: 70px;
      width: 380px;
      height: 300px;
      opacity: 0.04;
      z-index: 0;
    }

    .cover-footer {
      background: rgba(245,158,11,0.06);
      border-top: 1px solid var(--border-amber);
      padding: 22px 60px;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 24px;
      position: relative;
      z-index: 1;
    }

    .contact-item label {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-muted);
      display: block;
      margin-bottom: 4px;
    }

    .contact-item span {
      font-family: 'Exo 2', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: var(--amber);
    }

    .page-header-bar {
      background: var(--bg-deep);
      border-bottom: 1px solid var(--border);
      padding: 13px 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .page-brand {
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      font-size: 12px;
      letter-spacing: 4px;
      color: var(--amber);
    }

    .page-product-label {
      font-size: 10px;
      letter-spacing: 2px;
      color: var(--text-muted);
      text-transform: uppercase;
    }

    .section-header {
      padding: 40px 60px 28px;
    }

    .eyebrow {
      font-size: 10px;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 10px;
    }

    .section-title {
      font-family: 'Exo 2', sans-serif;
      font-weight: 800;
      font-size: 36px;
      line-height: 1.08;
      color: var(--text-primary);
    }

    .section-title span { color: var(--amber); }

    .title-underline {
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, var(--amber), var(--teal));
      margin-top: 14px;
      border-radius: 2px;
    }

    .section-body {
      padding: 0 60px 52px;
    }

    .page-num {
      position: absolute;
      bottom: 20px;
      right: 30px;
      font-size: 10px;
      color: var(--text-muted);
      letter-spacing: 2px;
      font-family: 'Exo 2', sans-serif;
    }

    .intro-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 36px;
    }

    .intro-text {
      font-size: 13.5px;
      line-height: 1.85;
      color: var(--text-secondary);
    }
    .intro-text strong { color: var(--amber); }

    .formula-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-left: 3px solid var(--teal);
      border-radius: 8px;
      padding: 22px;
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.8;
      position: relative;
      overflow: hidden;
    }

    .formula-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 80% 80% at 110% 110%, rgba(13,148,136,0.09) 0%, transparent 70%);
      pointer-events: none;
    }

    .formula-card strong { color: var(--teal-light); }

    .elim-section-label {
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }

    .elim-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .elim-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 20px 22px;
      position: relative;
      overflow: hidden;
    }

    .elim-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--amber), transparent);
    }

    .elim-card-hexbg {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66zm0-5.7L52 47.7V19.3L28 5.7 4 19.3v28.4L28 60.3z' fill='none' stroke='%23F59E0B' stroke-width='0.4' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .elim-title {
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 13.5px;
      color: var(--amber-light);
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .elim-icon {
      width: 26px;
      height: 26px;
      background: rgba(245,158,11,0.14);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      flex-shrink: 0;
    }

    .elim-advantage {
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.65;
      position: relative;
      z-index: 1;
    }

    .usage-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 28px;
    }

    .temp-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 24px;
      position: relative;
      overflow: hidden;
    }

    .temp-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at -10% 110%, rgba(239,108,0,0.15) 0%, transparent 60%);
      pointer-events: none;
    }

    .temp-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66zm0-5.7L52 47.7V19.3L28 5.7 4 19.3v28.4L28 60.3z' fill='none' stroke='%23EF6C00' stroke-width='0.4' opacity='0.06'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .temp-label {
      font-size: 9px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }

    .temp-range {
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      font-size: 42px;
      background: linear-gradient(135deg, var(--orange), var(--amber));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }

    .temp-desc {
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.65;
      position: relative;
      z-index: 1;
    }

    .financial-card {
      background: linear-gradient(135deg, rgba(13,148,136,0.14) 0%, rgba(13,148,136,0.04) 100%);
      border: 1px solid rgba(13,148,136,0.28);
      border-radius: 10px;
      padding: 24px;
    }

    .financial-title {
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: var(--teal-light);
      margin-bottom: 14px;
      letter-spacing: 0.5px;
    }

    .fin-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 9px;
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .fin-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--teal);
      flex-shrink: 0;
      margin-top: 6px;
    }

    .lifecycle-label {
      font-size: 9px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--text-muted);
      text-align: center;
      margin-bottom: 18px;
    }

    .lifecycle-track {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 30px 36px 24px;
      position: relative;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .lifecycle-track::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66zm0-5.7L52 47.7V19.3L28 5.7 4 19.3v28.4L28 60.3z' fill='none' stroke='%230D9488' stroke-width='0.4' opacity='0.06'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .lifecycle-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      position: relative;
      z-index: 1;
    }

    .lifecycle-steps::before {
      content: '';
      position: absolute;
      top: 31px;
      left: 12.5%;
      right: 12.5%;
      height: 2px;
      background: linear-gradient(90deg, var(--amber) 0%, var(--teal) 100%);
      z-index: 0;
    }

    .lc-step {
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .lc-circle {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      border: 2px solid var(--amber);
      background: var(--bg-deep);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
    }

    .lc-num {
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      font-size: 11px;
      letter-spacing: 1px;
      color: var(--amber);
    }

    .lc-name {
      font-family: 'Exo 2', sans-serif;
      font-weight: 800;
      font-size: 12px;
      color: var(--text-primary);
      margin-bottom: 5px;
      letter-spacing: 0.5px;
    }

    .lc-desc {
      font-size: 10.5px;
      color: var(--text-muted);
      line-height: 1.4;
    }

    .vuln-gap {
      background: rgba(239,68,68,0.07);
      border: 1px solid rgba(239,68,68,0.18);
      border-radius: 6px;
      padding: 10px 16px;
      margin-top: 22px;
      font-size: 11px;
      color: #FCA5A5;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    .vuln-gap strong { color: #F87171; }

    .new-build-info {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-left: 3px solid var(--amber);
      border-radius: 8px;
      padding: 18px 22px;
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.75;
    }
    .new-build-info strong { color: var(--amber-light); }

    .prop-note {
      background: rgba(13,148,136,0.07);
      border: 1px solid rgba(13,148,136,0.2);
      border-radius: 8px;
      padding: 13px 18px;
      font-size: 12px;
      color: var(--text-secondary);
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .prop-note strong { color: var(--teal-light); }

    .prop-table {
      width: 100%;
      border-collapse: collapse;
      border-radius: 10px;
      overflow: hidden;
    }

    .prop-table th {
      background: var(--teal);
      color: #fff;
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 13px 18px;
      text-align: left;
    }
    .prop-table th:last-child { text-align: right; }

    .prop-table td {
      padding: 11px 18px;
      font-size: 12px;
      color: var(--text-secondary);
      border-bottom: 1px solid var(--border);
    }
    .prop-table td:last-child {
      text-align: right;
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      color: var(--amber-light);
    }
    .prop-table td:nth-child(2),
    .prop-table td:nth-child(3) {
      color: var(--text-muted);
      font-size: 11px;
    }
    .prop-table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }

    .prop-table tbody tr:first-child td {
      background: rgba(13,148,136,0.10);
      color: var(--teal-light);
    }
    .prop-table tbody tr:first-child td:last-child { color: var(--teal-light); }

    .abbrev-row {
      display: flex;
      gap: 32px;
      margin-top: 18px;
      font-size: 11px;
      color: var(--text-muted);
    }
    .abbrev-row strong { color: var(--amber); }

    .safety-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 14px;
      margin-bottom: 26px;
    }

    .safety-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 20px;
      position: relative;
      overflow: hidden;
    }
    .safety-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66zm0-5.7L52 47.7V19.3L28 5.7 4 19.3v28.4L28 60.3z' fill='none' stroke='%23F59E0B' stroke-width='0.4' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
    }
    .safety-card.client  { border-top: 2px solid var(--teal); }
    .safety-card.warning { border-top: 2px solid #F87171; }
    .safety-card.disposal{ border-top: 2px solid var(--amber); }

    .sc-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }
    .client  .sc-icon { background: rgba(13,148,136,0.14); }
    .warning .sc-icon { background: rgba(239,68,68,0.14); }
    .disposal .sc-icon { background: rgba(245,158,11,0.14); }

    .sc-title {
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 11.5px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    }
    .client  .sc-title { color: var(--teal-light); }
    .warning .sc-title { color: #FCA5A5; }
    .disposal .sc-title { color: var(--amber-light); }

    .sc-text {
      font-size: 11.5px;
      color: var(--text-secondary);
      line-height: 1.65;
      position: relative;
      z-index: 1;
    }
    .sc-text strong { color: var(--text-primary); }

    .reaction-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .reaction-box {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 20px;
      overflow: hidden;
      position: relative;
    }
    .reaction-box::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66zm0-5.7L52 47.7V19.3L28 5.7 4 19.3v28.4L28 60.3z' fill='none' stroke='%23F59E0B' stroke-width='0.4' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .rx-title {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 14px;
      position: relative;
      z-index: 1;
    }

    .rx-formula {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
    }

    .rx-el {
      text-align: center;
      flex: 1;
    }

    .rx-el-icon {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 1.5px solid var(--border-amber);
      background: rgba(245,158,11,0.07);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 6px;
      font-size: 20px;
      font-family: 'Exo 2', sans-serif;
      font-weight: 900;
      color: var(--amber-light);
    }

    .rx-el-name {
      font-family: 'Exo 2', sans-serif;
      font-weight: 700;
      font-size: 9.5px;
      color: var(--text-secondary);
      line-height: 1.3;
    }

    .rx-op {
      font-family: 'Exo 2', sans-serif;
      font-size: 24px;
      font-weight: 900;
      color: var(--text-muted);
    }

    .rx-result {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      background: rgba(239,68,68,0.07);
      border: 1px solid rgba(239,68,68,0.15);
      border-radius: 6px;
      padding: 10px 12px;
      position: relative;
      z-index: 1;
    }
    .rx-result-icon { font-size: 18px; flex-shrink: 0; }
    .rx-result-text { font-size: 11px; color: #FCA5A5; line-height: 1.5; }
    .rx-result-text strong { color: #F87171; }

    .rx-note {
      font-size: 10px;
      color: var(--text-muted);
      margin-top: 8px;
      font-style: italic;
      position: relative;
      z-index: 1;
    }

    .page5-footer {
      background: rgba(245,158,11,0.05);
      border-top: 1px solid var(--border-amber);
      padding: 15px 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0; left: 0; right: 0;
    }

    .cover-footer a, 
    .page5-footer a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease-in-out;
    }

    .cover-footer a:hover, 
    .page5-footer a:hover {
      color: var(--amber-light) !important;
    }

    @media print {
      .catalog-wrapper { padding: 0; background: var(--bg-deep); }
      .page { margin: 0; page-break-after: always; width: 100%; }
    }
  `;

  return (
    <div className="catalog-wrapper">
      {/* Scoped CSS delivery without requiring external style sheet setup */}
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      {/* ======================== PAGE 1: COVER ======================== */}
      <div className="page cover">
        {/* Ghost watermark: abstract heat exchanger */}
        <svg className="watermark-svg" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="90" width="320" height="140" rx="14" stroke="#F59E0B" strokeWidth="3.5" />
          <rect x="20" y="112" width="380" height="22" rx="5" stroke="#F59E0B" strokeWidth="2" />
          <rect x="20" y="186" width="380" height="22" rx="5" stroke="#F59E0B" strokeWidth="2" />
          <line x1="110" y1="112" x2="110" y2="186" stroke="#F59E0B" strokeWidth="2" />
          <line x1="150" y1="112" x2="150" y2="186" stroke="#F59E0B" strokeWidth="2" />
          <line x1="190" y1="112" x2="190" y2="186" stroke="#F59E0B" strokeWidth="2" />
          <line x1="230" y1="112" x2="230" y2="186" stroke="#F59E0B" strokeWidth="2" />
          <line x1="270" y1="112" x2="270" y2="186" stroke="#F59E0B" strokeWidth="2" />
          <line x1="310" y1="112" x2="310" y2="186" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="50" cy="160" r="22" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="370" cy="160" r="22" stroke="#F59E0B" strokeWidth="2" />
          <line x1="28" y1="155" x2="0" y2="145" stroke="#F59E0B" strokeWidth="2" />
          <line x1="28" y1="165" x2="0" y2="175" stroke="#F59E0B" strokeWidth="2" />
          <line x1="392" y1="155" x2="420" y2="145" stroke="#F59E0B" strokeWidth="2" />
          <line x1="392" y1="165" x2="420" y2="175" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="110" cy="149" r="5" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="150" cy="149" r="5" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="190" cy="149" r="5" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="230" cy="149" r="5" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="270" cy="149" r="5" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="310" cy="149" r="5" stroke="#F59E0B" strokeWidth="1.5" />
        </svg>

        <div className="cover-hero">
          <div className="cover-content">
            <div className="brand-name">QUICKPETRO</div>
            <div className="brand-tagline">High-Performance Industrial Fluid Solutions</div>
            <div className="cover-divider"></div>
            <div className="product-name">LEGA-R</div>
            <div className="product-subtitle">Dual-Action System Cleaner & Flushing Fluid</div>

            <div className="engineered-for">
              <span className="engineered-label">Engineered for</span>
              <span className="engineered-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="7" width="20" height="14" rx="3" />
                  <path d="M16 7V5a4 4 0 00-8 0v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                </svg>
                Heat Exchangers
              </span>
              <span className="engineered-plus">+</span>
              <span className="engineered-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 12h3M17 12h3M12 4v3M12 17v3" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
                Radiators
              </span>
            </div>

            {/* Stats row */}
            <div className="cover-stats">
              <div>
                <div className="stat-val" style={{ color: 'var(--amber)' }}>4</div>
                <div className="stat-lbl">Contaminants<br />Eliminated</div>
              </div>
              <div>
                <div className="stat-val" style={{ color: 'var(--teal-light)', fontSize: '22px' }}>–10 → 60°C</div>
                <div className="stat-lbl">Operating<br />Range</div>
              </div>
              <div>
                <div className="stat-val" style={{ color: 'var(--amber)' }}>{"<100 ppm"}</div>
                <div className="stat-lbl">Moisture<br />Content</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cover-footer">
          <div className="contact-item">
            <label>Address</label>
            <span>
              <a href="https://maps.google.com/?q=Pushkar+Industrial+Estate,+Phase-1,+GIDC,+Vatva,+Ahmedabad+382445,+Gujarat,+India" target="_blank" rel="noopener noreferrer">
                Pushkar Industrial Estate, Phase-1, GIDC, Vatva, Ahmedabad – 382445, Gujarat, India
              </a>
            </span>
          </div>
          <div className="contact-item">
            <label>Contact</label>
            <span><a href="tel:+919825044917">+91 9825044917</a></span>
          </div>
          <div className="contact-item">
            <label>Website</label>
            <span><a href="https://www.quickpetro.in" target="_blank" rel="noopener noreferrer">www.quickpetro.in</a></span>
          </div>
        </div>

        <div className="page-num">01 / 05</div>
      </div>

      {/* ======================== PAGE 2: OVERVIEW ======================== */}
      <div className="page">
        <div className="page-header-bar">
          <span className="page-brand">QUICKPETRO</span>
          <span className="page-product-label">LEGA-R — Product Overview</span>
        </div>

        <div className="section-header">
          <div className="eyebrow">01 — Product Overview</div>
          <div className="section-title">The Ultimate Dual-Action Solution<br />for <span>Thermal Efficiency</span></div>
          <div className="title-underline"></div>
        </div>

        <div className="section-body">
          <div className="intro-grid">
            <div className="intro-text">
              <strong>LEGA-R</strong> is a high-performance, dual-action system cleaner and flushing fluid specifically engineered to maintain and restore the peak efficiency of all types of Radiators and Heat Exchangers.<br /><br />
              Formulated for demanding industrial environments, LEGA-R addresses the full spectrum of system contamination that degrades thermal performance over time — from new-build commissioning to scheduled lifecycle maintenance.
            </div>
            <div className="formula-card">
              This advanced formula works quickly and aggressively to <strong>displace, dissolve, and completely flush</strong> out accumulated waste materials, leaving behind a pristine system perfectly prepared for a fresh charge of heat transfer fluid.
            </div>
          </div>

          <div className="elim-section-label">What LEGA-R Eliminates — & Why It Matters</div>

          <div className="elim-grid">
            <div className="elim-card">
              <div className="elim-card-hexbg"></div>
              <div className="elim-title"><div className="elim-icon">🔥</div>Carbon Deposits & Sludge</div>
              <div className="elim-advantage">Restores peak heat transfer efficiency and prevents component wear. Sludge buildup is the primary cause of thermal degradation in closed-loop systems, reducing efficiency by up to 30%.</div>
            </div>
            <div className="elim-card">
              <div className="elim-card-hexbg"></div>
              <div className="elim-title"><div className="elim-icon">💧</div>Oxidized Residual Fluids</div>
              <div className="elim-advantage">Prevents immediate cross-contamination and maximizes the lifespan of your fresh fluid charge. Oxidized remnants act as catalysts that accelerate new fluid degradation from day one.</div>
            </div>
            <div className="elim-card">
              <div className="elim-card-hexbg"></div>
              <div className="elim-title"><div className="elim-icon">⚡</div>Volatile Light Ends</div>
              <div className="elim-advantage">Enhances plant safety by removing highly flammable, low-boiling hazards. Critical for facilities with open flame or high-temperature processes in proximity to the system.</div>
            </div>
            <div className="elim-card">
              <div className="elim-card-hexbg"></div>
              <div className="elim-title"><div className="elim-icon">🌊</div>Moisture & Debris</div>
              <div className="elim-advantage">Prevents erratic system performance, internal fluid degradation, and mechanical pump damage. Even trace moisture causes cavitation, accelerated oxidation, and pump seal failure.</div>
            </div>
          </div>
        </div>

        <div className="page-num">02 / 05</div>
      </div>

      {/* ======================== PAGE 3: USAGE GUIDE ======================== */}
      <div className="page">
        <div className="page-header-bar">
          <span className="page-brand">QUICKPETRO</span>
          <span className="page-product-label">LEGA-R — Usage Guide</span>
        </div>

        <div className="section-header">
          <div className="eyebrow">02 — Application Guide</div>
          <div className="section-title">LEGA-R <span>Usage</span> Guide</div>
          <div className="title-underline"></div>
        </div>

        <div className="section-body">
          <div className="usage-two-col">
            <div className="temp-card">
              <div className="temp-label">Application & Operating Range</div>
              <div className="temp-range">–10°C → 60°C</div>
              <div className="temp-desc">Works best from ten below freezing up to warm operating conditions, keeping flow smooth even during cold starts. Maintains optimal viscosity across the full temperature envelope, ensuring effective cleaning regardless of ambient conditions.</div>
            </div>
            <div className="financial-card">
              <div className="financial-title">↑ Financial & Operational Gains</div>
              <div className="fin-item"><div className="fin-dot"></div>Longer fluid life & reduced top-up frequency</div>
              <div className="fin-item"><div className="fin-dot"></div>Fewer unplanned service calls & engineer visits</div>
              <div className="fin-item"><div className="fin-dot"></div>Steady, uninterrupted production throughput</div>
              <div className="fin-item"><div className="fin-dot"></div>Reduced downtime from unexpected system failures</div>
              <div className="fin-item"><div className="fin-dot"></div>Extended equipment service life & ROI</div>
            </div>
          </div>

          <div className="lifecycle-label">System Lifecycle — Vulnerability Window & LEGA-R Application Points</div>
          <div className="lifecycle-track">
            <div className="lifecycle-steps">
              <div className="lc-step">
                <div className="lc-circle">
                  <div className="lc-num">01</div>
                </div>
                <div className="lc-name">BUILD</div>
                <div className="lc-desc">Assembly, welding & fabrication</div>
              </div>
              <div className="lc-step">
                <div className="lc-circle" style={{ borderColor: 'var(--orange)' }}>
                  <div className="lc-num" style={{ color: 'var(--orange)' }}>02</div>
                </div>
                <div className="lc-name">COMMISSION</div>
                <div className="lc-desc">First fluid fill & pressure testing</div>
              </div>
              <div className="lc-step">
                <div className="lc-circle" style={{ borderColor: 'var(--teal)' }}>
                  <div className="lc-num" style={{ color: 'var(--teal-light)' }}>03</div>
                </div>
                <div className="lc-name">OPERATE</div>
                <div className="lc-desc">Thermal transfer & steady production</div>
              </div>
              <div className="lc-step">
                <div className="lc-circle" style={{ borderColor: 'var(--teal)' }}>
                  <div className="lc-num" style={{ color: 'var(--teal-light)' }}>04</div>
                </div>
                <div className="lc-name">MAINTAIN</div>
                <div className="lc-desc">Lifecycle servicing & fluid change</div>
              </div>
            </div>
            <div className="vuln-gap">
              <strong>⚠ The Vulnerability Gap:</strong> When the system sits empty between stages, leftover metals, dust, and storage residues accumulate. A single LEGA-R pre-charge flush completely eliminates this risk.
            </div>
          </div>

          <div className="new-build-info">
            <strong>New Build Applications:</strong> LEGA-R clears new builds of leftover metals, dust, and storage residues before the first fill — addressing the critical vulnerability gap that standard commissioning misses. High-efficiency shell-and-tube designs with intricate baffling and narrow tube pathways are prime traps for microscopic manufacturing debris, welding slag, and environmental dust.
          </div>
        </div>

        <div className="page-num">03 / 05</div>
      </div>

      {/* ======================== PAGE 4: PROPERTIES ======================== */}
      <div className="page">
        <div className="page-header-bar">
          <span className="page-brand">QUICKPETRO</span>
          <span className="page-product-label">LEGA-R — Technical Data Sheet</span>
        </div>

        <div className="section-header">
          <div className="eyebrow">03 — Technical Data</div>
          <div className="section-title">Typical Physical &<br /><span>Chemical Properties</span></div>
          <div className="title-underline"></div>
        </div>

        <div className="section-body">
          <div className="prop-note">
            The following matrix represents typical laboratory analysis data for LEGA-R System Cleaner and Flushing Fluid. These values serve as <strong>general operational guidelines</strong> based on current production and may be influenced by allowable production tolerances. Values are not specifications and should not be interpreted as guaranteed analyses for any specific lot.
          </div>

          <table className="prop-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Unit</th>
                <th>Test Code (ASTM / ISO)</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Appearance</td><td>N/A</td><td>N/A</td><td>Colorless transparent, no odour</td></tr>
              <tr><td>Operating Range</td><td>°C (°F)</td><td>N/A</td><td>–10 to 60</td></tr>
              <tr><td>Density @ 25°C</td><td>kg/m³</td><td>ASTM D4052</td><td>0.820 – 0.850</td></tr>
              <tr><td>Kinematic Viscosity @ 40°C</td><td>mm²/s (cSt)</td><td>ASTM D445</td><td>1.0 – 6.0</td></tr>
              <tr><td>Kinematic Viscosity @ 100°C</td><td>mm²/s (cSt)</td><td>ASTM D445</td><td>NTR</td></tr>
              <tr><td>Flash Point (COC)</td><td>°C</td><td>ASTM D92</td><td>{"<20"}</td></tr>
              <tr><td>Coefficient of Thermal Expansion</td><td>°C</td><td>NTR</td><td>0.00077 / °C</td></tr>
              <tr><td>Autoignition Point</td><td>°C</td><td>ASTM E659</td><td>300</td></tr>
              <tr><td>Pour Point</td><td>°C</td><td>ISO 3016</td><td>–12</td></tr>
              <tr><td>Neutralization Nr. (acid) — TAN</td><td>mgKOH/g</td><td>ASTM D974</td><td>{"<0.05"}</td></tr>
              <tr><td>Maximum Bulk Temperature</td><td>°C</td><td>NTR</td><td>45</td></tr>
              <tr><td>Maximum Film Temperature</td><td>°C</td><td>NTR</td><td>50</td></tr>
              <tr><td>Boiling Point at 1013 mbar</td><td>°C</td><td>NTR</td><td>60</td></tr>
              <tr><td>Average Molecular Weight</td><td>—</td><td>NTR</td><td>400</td></tr>
              <tr><td>Moisture Content</td><td>PPM</td><td>ASTM D6304</td><td>{"<100"}</td></tr>
            </tbody>
          </table>

          <div className="abbrev-row">
            <div><strong>COC</strong> — Cleveland Open Cup Test</div>
            <div><strong>NTR</strong> — No Test Reported</div>
          </div>
        </div>

        <div className="page-num">04 / 05</div>
      </div>

      {/* ======================== PAGE 5: OPERATIONAL SCOPE ======================== */}
      <div className="page" style={{ paddingBottom: '60px' }}>
        <div className="page-header-bar">
          <span className="page-brand">QUICKPETRO</span>
          <span className="page-product-label">LEGA-R — Operational Scope & Safety</span>
        </div>

        <div className="section-header">
          <div className="eyebrow">04 — Safety & Operations</div>
          <div className="section-title">Operational Scope &<br /><span>Safety Guidelines</span></div>
          <div className="title-underline"></div>
        </div>

        <div className="section-body">
          <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--teal-light)', marginBottom: '14px' }}>
            Site Readiness: Requirement of Party Scope
          </div>

          <div className="safety-grid">
            <div className="safety-card client">
              <div className="sc-icon">🔧</div>
              <div className="sc-title">Client Site Scope</div>
              <div className="sc-text">Provide a high-pressure <strong>air compressor (Minimum 150 CFM, 5 Kg/cm²)</strong> to completely purge residual fluid after cleaning is complete.</div>
            </div>
            <div className="safety-card warning">
              <div className="sc-icon">⚠️</div>
              <div className="sc-title">Critical Precautions</div>
              <div className="sc-text">Vent all <strong>air and moisture completely before heating</strong>. Avoid copper components. Check pumps regularly to prevent air ingress and fluid degradation.</div>
            </div>
            <div className="safety-card disposal">
              <div className="sc-icon">♻️</div>
              <div className="sc-title">Fluid Disposal</div>
              <div className="sc-text">Recycle via <strong>filtration or distillation</strong>, or burn for <strong>industrial energy recovery</strong>. Never discharge untreated fluid to drains or waterways.</div>
            </div>
          </div>

          <div className="reaction-grid">
            <div className="reaction-box">
              <div className="rx-title">⚗  The Sludge Catalyst — Why Air Is Dangerous</div>
              <div className="rx-formula">
                <div className="rx-el">
                  <div className="rx-el-icon">🌡️</div>
                  <div className="rx-el-name">Hot Oil</div>
                </div>
                <div className="rx-op">+</div>
                <div className="rx-el">
                  <div className="rx-el-icon" style={{ fontSize: '14px' }}>O₂</div>
                  <div className="rx-el-name">Air Exposure</div>
                </div>
                <div className="rx-op">=</div>
                <div className="rx-el">
                  <div className="rx-el-icon">⚙️</div>
                  <div className="rx-el-name">Fluid Thickening & Sludge</div>
                </div>
              </div>
              <div className="rx-result">
                <div className="rx-result-icon">🔴</div>
                <div className="rx-result-text"><strong>Risk:</strong> Hot oil oxidizes rapidly on contact with air, causing fatal fluid thickening and system blockage.</div>
              </div>
              <div className="rx-note">→ Purge all air completely before heating the system.</div>
            </div>

            <div className="reaction-box">
              <div className="rx-title">⚗  The Chemical Accelerator — Why Copper Is Incompatible</div>
              <div className="rx-formula">
                <div className="rx-el">
                  <div className="rx-el-icon">🔥</div>
                  <div className="rx-el-name">High Heat</div>
                </div>
                <div className="rx-op">+</div>
                <div className="rx-el">
                  <div className="rx-el-icon" style={{ borderColor: 'rgba(180,140,60,0.4)', fontSize: '14px' }}>Cu</div>
                  <div className="rx-el-name">Copper Alloys</div>
                </div>
                <div className="rx-op">=</div>
                <div className="rx-el">
                  <div className="rx-el-icon">💀</div>
                  <div className="rx-el-name">Accelerated Oil Degradation</div>
                </div>
              </div>
              <div className="rx-result">
                <div className="rx-result-icon">🔴</div>
                <div className="rx-result-text"><strong>Risk:</strong> Copper acts as a severe catalyst, compounding oil breakdown at operational temperatures.</div>
              </div>
              <div className="rx-note">→ Replace copper alloy components with steel or compatible alternatives.</div>
            </div>
          </div>
        </div>

        <div className="page5-footer">
          <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: '11px', color: 'var(--amber)', letterSpacing: '3px' }}>QUICKPETRO</span>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
            <a href="https://www.quickpetro.in" target="_blank" rel="noopener noreferrer">www.quickpetro.in</a> 
            {"\u00A0"}·{"\u00A0"} 
            <a href="tel:+919825044917">+91 9825044917</a> 
            {"\u00A0"}·{"\u00A0"} 
            <a href="https://maps.google.com/?q=GIDC+Vatva,+Ahmedabad+382445" target="_blank" rel="noopener noreferrer">GIDC Vatva, Ahmedabad – 382445</a>
          </span>
        </div>

        <div className="page-num" style={{ bottom: '24px' }}>05 / 05</div>
      </div>
    </div>
  );
};

export default ProductCatalog;