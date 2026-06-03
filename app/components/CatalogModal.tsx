'use client'

import { X } from 'lucide-react'

interface CatalogModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-gradient-to-r from-primary to-secondary/20">
          <h2 className="text-xl font-semibold text-primary">QUICKPETRO — LEGA-R Product Catalog</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close catalog"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto bg-[#050A14]">
          <iframe
            srcDoc={catalogHTML}
            className="w-full h-full border-none"
            title="Product Catalog"
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  )
}

// Catalog HTML content
const catalogHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QUICKPETRO — LEGA-R Product Catalog</title>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800;900&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<style>
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

* { margin:0; padding:0; box-sizing:border-box; }

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  padding: 40px 20px;
}

.catalog-wrapper {
  background: #050A14;
  max-width: 900px;
  margin: 0 auto;
}

.page {
  width: 100%;
  min-height: auto;
  margin: 0 auto 48px;
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border);
}

.cover {
  background: var(--bg-deep);
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  min-height: 400px;
  justify-content: center;
}

.brand-name {
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 20px;
}

.product-name {
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 0.88;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 45%, #F97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.product-subtitle {
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.engineered-for {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
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
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--amber-light);
}

.cover-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid var(--border);
}

.stat-val {
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 4px;
  color: var(--amber);
}

.stat-lbl {
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--text-muted);
  text-transform: uppercase;
  line-height: 1.4;
}

.section-header {
  padding: 30px 40px 20px;
  background: var(--bg-primary);
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
  font-size: 28px;
  line-height: 1.08;
  color: var(--text-primary);
}

.section-title span { color: var(--amber); }

.title-underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--amber), var(--teal));
  margin-top: 10px;
  border-radius: 2px;
}

.section-body {
  padding: 0 40px 30px;
}

.intro-text {
  font-size: 13px;
  line-height: 1.85;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.intro-text strong { color: var(--amber); }

.formula-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--teal);
  border-radius: 8px;
  padding: 20px;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-top: 15px;
}

.formula-card strong { color: var(--teal-light); }

.elim-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 15px;
}

.elim-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 12px;
}

.elim-icon {
  width: 24px;
  height: 24px;
  background: rgba(245,158,11,0.14);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
  color: var(--amber-light);
}

.elim-content {
  flex: 1;
}

.elim-title {
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: var(--amber-light);
  margin-bottom: 4px;
}

.elim-advantage {
  font-size: 11px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.contact-item {
  margin-bottom: 12px;
}

.contact-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
  margin-bottom: 3px;
}

.contact-value {
  font-family: 'Exo 2', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--amber);
}
</style>
</head>
<body>
<div class="catalog-wrapper">
  <!-- COVER PAGE -->
  <div class="page">
    <div class="cover">
      <div class="brand-name">QUICKPETRO</div>
      <div class="product-name">LEGA-R</div>
      <div class="product-subtitle">THERMIC FLUID SYSTEM CATALYST</div>
      
      <div class="engineered-for">
        <span style="color: var(--text-muted); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Engineered For</span>
        <div class="engineered-pill">🔥 Heat Transfer Systems</div>
        <div class="engineered-pill">⚙️ Industrial Equipment</div>
      </div>

      <div class="cover-stats">
        <div>
          <div class="stat-val">26+</div>
          <div class="stat-lbl">Years Experience</div>
        </div>
        <div>
          <div class="stat-val">900+</div>
          <div class="stat-lbl">Companies Served</div>
        </div>
      </div>
    </div>
  </div>

  <!-- WHAT IT DOES PAGE -->
  <div class="page">
    <div class="section-header">
      <div class="eyebrow">Overview</div>
      <div class="section-title">What <span>LEGA-R</span> Does</div>
      <div class="title-underline"></div>
    </div>

    <div class="section-body">
      <div class="intro-text">
        LEGA-R is an <strong>advanced thermic fluid restoration catalyst</strong> designed to eliminate carbon deposits, oxidation products, and sludge from heat transfer systems. It works at molecular level to <strong>restore fluid efficiency, extend system life</strong>, and <strong>prevent catastrophic equipment failure</strong>.
      </div>

      <div class="formula-card">
        <strong>Proprietary Formula:</strong> Engineered blend of oxidation inhibitors, deposit solvents, and thermal stabilizers that target degraded fluid byproducts while protecting base oil chemistry.
      </div>

      <div style="margin-top: 20px;">
        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--amber); margin-bottom: 12px; font-weight: 700;">Key Benefits</div>
        <div class="elim-grid">
          <div class="elim-card">
            <div class="elim-icon">✓</div>
            <div class="elim-content">
              <div class="elim-title">Carbon Elimination</div>
              <div class="elim-advantage">Breaks down hard carbon deposits and varnish on equipment surfaces</div>
            </div>
          </div>
          <div class="elim-card">
            <div class="elim-icon">✓</div>
            <div class="elim-content">
              <div class="elim-title">Oxidation Control</div>
              <div class="elim-advantage">Prevents fluid degradation and extends oil life by 2-3x</div>
            </div>
          </div>
          <div class="elim-card">
            <div class="elim-icon">✓</div>
            <div class="elim-content">
              <div class="elim-title">Thermal Performance</div>
              <div class="elim-advantage">Restores heat transfer efficiency to near-new levels</div>
            </div>
          </div>
          <div class="elim-card">
            <div class="elim-icon">✓</div>
            <div class="elim-content">
              <div class="elim-title">Equipment Protection</div>
              <div class="elim-advantage">Reduces downtime and prevents costly emergency repairs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CONTACT PAGE -->
  <div class="page">
    <div class="section-header">
      <div class="eyebrow">Get Started</div>
      <div class="section-title">Contact <span>QuickPetro</span></div>
      <div class="title-underline"></div>
    </div>

    <div class="section-body">
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 24px;">
        <div class="contact-item">
          <span class="contact-label">Founder & Specialist</span>
          <span class="contact-value">Mr. Dhavalkumar Gandhi</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Phone</span>
          <span class="contact-value">+91 98250 44917</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Email</span>
          <span class="contact-value">quickpetro@gmail.com</span>
        </div>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); font-size: 11px; color: var(--text-secondary);">
          Available for consultation on system cleaning, fluid analysis, and LEGA-R application. 26+ years of industry expertise in thermic fluid system restoration.
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>`
