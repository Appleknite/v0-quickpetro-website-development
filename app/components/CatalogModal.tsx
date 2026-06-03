'use client'

import { X } from 'lucide-react'

interface CatalogModalProps {
  isOpen: boolean
  onClose: () => void
}

// Full HTML catalog content - keeping the original catalog HTML unchanged
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
}

.catalog-wrapper {
  background: #050A14;
  padding: 40px 20px;
  min-height: 100vh;
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
  min-height: 100%;
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

.page-num {
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 2px;
  font-family: 'Exo 2', sans-serif;
}
</style>
</head>
<body>
<div class="catalog-wrapper">
  <div class="page cover">
    <div class="cover-hero">
      <div class="cover-content">
        <div class="brand-name">QUICKPETRO</div>
        <div class="brand-tagline">26+ Years of Expertise</div>
        <div class="cover-divider"></div>
        <div class="product-name">LEGA-R</div>
        <div class="product-subtitle">Premium Thermic Fluid System Care</div>
        <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.8; margin-bottom: 40px;">
          Experience industrial-grade thermal fluid maintenance with LEGA-R. Our specialized formulation eliminates system degradation, restores efficiency, and extends equipment lifespan. Trusted by 900+ industrial leaders across India.
        </p>
        <p style="color: var(--text-muted); font-size: 12px; line-height: 1.6;">
          <strong style="color: var(--amber);">LEGA-R</strong> is engineered for precision. Every molecule works to restore your systems to peak performance.
        </p>
      </div>
    </div>
  </div>
</div>
</body>
</html>`

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4 bg-gradient-to-r from-primary to-secondary/20 flex-shrink-0">
        <h2 className="text-xl font-semibold text-primary">QUICKPETRO — LEGA-R Product Catalog</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close catalog"
        >
          <X size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Content - Fullscreen */}
      <div className="flex-1 overflow-auto bg-[#050A14] w-full">
        <iframe
          srcDoc={catalogHTML}
          className="w-full h-full border-none"
          title="Product Catalog"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  )
}
