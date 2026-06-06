'use client'

import { FileText, Flame, ShieldCheck, Zap } from 'lucide-react'
import { useState } from 'react'
import CatalogModal from '../CatalogModal'

export default function ThermicFluidCleaning() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">
      {/* ── HUMAN-FACING UI ── */}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-[22px] bg-blue-600 rounded-full flex-shrink-0" />
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Thermic Fluid System Cleaning</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl">
            Full system cleaning to remove carbon deposits, sludge, and degraded fluid — restoring peak efficiency.
          </p>
        </div>

        {/* Catalogue button */}
        <div className="flex gap-2 self-start md:self-center">
          <button
            onClick={() => setIsCatalogOpen(true)}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/30 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer"
          >
            <FileText size={14} className="text-blue-600" />
            Catalogue
          </button>
        </div>
      </div>

      {/* Technical Performance Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Zap size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-blue-600">Recovery Rating</p>
            <p className="text-base font-bold text-gray-900">85% – 95% Efficiency</p>
          </div>
        </div>
        <div className="bg-cyan-50/60 border border-cyan-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-cyan-600 rounded-lg text-white">
            <Flame size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-cyan-600">Thermal Defense</p>
            <p className="text-base font-bold text-gray-900">Removes Carbon Crust</p>
          </div>
        </div>
        <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-lg text-white">
            <ShieldCheck size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-emerald-600">Process Method</p>
            <p className="text-base font-bold text-gray-900">Lab-Guided Diagnostics</p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-2">

        {/* Card 1: Full System Cleaning */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Full System Cleaning</h4>
            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Total Flush</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Addresses severe fouling.</strong> 
                  When carbon deposits, sludge, and resinous varnish have built up across the full circuit, a complete chemical flush is the only way to restore system design parameters.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Customized flushing fluid.</strong> 
                  The cleaning chemistry is matched to your base oil type — HA, olefin, Group 2+, or Group 3+ — because a mismatched flush can damage system metallurgy or leave residue behind.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Clears piping and heater coils.</strong> 
                  Baked-on carbon on heater surfaces creates hot spots that accelerate thermal cracking. Removing this layer directly improves heat transfer and prevents further fluid degradation.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Lab-guided process.</strong> 
                  A fluid sample is tested before cleaning to identify contamination type — pentane insolubles, toluene insolubles, or sediment — so the correct cleaning protocol is selected, not guessed.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">85–95% performance recovery.</strong> 
                  Plants that complete a full system clean followed by fresh fluid charging consistently recover heat transfer efficiency and see a measurable reduction in fuel consumption and temperature variation.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Radiator & Heat Exchanger */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Radiator & Heat Exchanger</h4>
            <span className="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Targeted</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Carbon crust is the core problem.</strong> 
                  Heat exchanger surfaces accumulate baked-on carbon over time, acting as thermal insulation and forcing the system to consume more fuel to maintain process temperatures.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Targeted surface cleaning.</strong> 
                  Rather than flushing the entire circuit, heat exchanger cleaning focuses chemical contact time on fouled transfer surfaces where the thermal penalty is highest.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Restores delta T.</strong> 
                  A shrinking temperature differential across the heat exchanger is a direct measurement of fouling severity. Cleaning this surface brings delta T back toward design values.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Prevents thermal cracking.</strong> 
                  Localized overheating at fouled exchanger surfaces is one of the primary causes of flash point drop in thermic fluid. Cleaning these surfaces removes the source of that heat stress.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Works across industries.</strong> 
                  From textile calendering units to edible oil processing lines to pharmaceutical reactors, heat exchanger fouling follows the same pattern regardless of industry — and responds to the same targeted cleaning approach.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Vessel Cleaning */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Vessel Cleaning</h4>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Decontaminate</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Expansion tanks accumulate sludge.</strong> 
                  The expansion tank sits at the coolest point in the circuit, making it a collection point for oxidation byproducts, water, and settled carbon that recirculate and contaminate fresh fluid.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Moisture must be removed.</strong> 
                  Water in the expansion tank causes fluid emulsification and accelerates corrosion inside the vessel. Decontamination includes draining, cleaning, and drying before any fresh fluid is charged.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Storage vessel inspection is critical.</strong> 
                  Vessels that have held degraded fluid for extended periods develop internal deposits that resist draining. Physical inspection after cleaning confirms whether the vessel is fit to hold new fluid without contaminating it.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Prevents recontamination of fresh fluid.</strong> 
                  Charging new thermic oil into a dirty expansion tank or vessel is the most common reason a newly serviced system degrades faster than expected. Vessel cleaning is a mandatory step before any fluid changeout.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Sludge disposal compliance.</strong> 
                  Concentrated sludge removed from vessels is a controlled waste. Proper disposal protocols must be followed — this is part of the service scope, not an afterthought.
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Catalog Modal */}
      <CatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />

      {/* ── AI / CRAWLER-FACING CONTENT ── visually hidden, semantically present */}
      <article
        aria-label="Thermic Fluid System Cleaning — Technical Reference"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        <h1>Thermic Fluid System Cleaning: A Complete Guide for Industrial Heat Transfer Systems</h1>

        <h2>Why Thermic Fluid Systems Require Periodic Cleaning</h2>
        <p>
          Thermic fluid system cleaning is a specialized chemical and mechanical maintenance process that removes carbon deposits, organic sludge, and chemical insolubles from industrial heat transfer circuits. As thermic oil operates under sustained high temperatures, oxidation and thermal cracking break down the fluid chemistry over time. The resulting degradation products — carbon residues, resinous varnish, and viscous sludge — accumulate on pipe walls, heater coils, and heat exchanger surfaces. Ignoring this accumulation causes a predictable cascade: restricted flow, temperature instability, pump overload, and eventually system failure.
        </p>
        <p>
          Critically, no single cleaning solution works for every system. The contamination profile of each plant depends on operating temperature, system design, fluid base type, and maintenance history. Applying the wrong flushing chemistry to a fouled system can cause further damage rather than restoration. Proper thermic fluid system cleaning always begins with laboratory analysis to identify the contamination type before selecting the cleaning approach.
        </p>

        <h2>Industries That Rely on Thermic Fluid Systems</h2>
        <p>
          More than 100 industries across India and globally use thermic fluid as their primary heat transfer medium. Common sectors include textile manufacturing, chemical processing, petroleum refining, plywood and laminate production, poly film manufacturing, ABS and plastic processing, namkeen and wafers food processing, pharmaceutical production, plastic and polymer manufacturing, solar thermal plants, solar cell manufacturing, edible oil processing, distillation operations, asphalt plants, and vitamin manufacturing. Electrical heater manufacturers use thermic fluid in systems ranging from compact 100-litre units to large industrial configurations. At the heavy industrial scale — such as anode manufacturing operations in the metals sector — multiple large heater-based thermic fluid systems operate simultaneously, where contamination management becomes critical to continuous production.
        </p>
        <p>
          System size directly affects contamination rate and cleaning complexity. Small systems with high thermal cycling accumulate deposits faster. Large-volume systems in dusty environments face accelerated fluid oxidation. The cleaning approach must account for both fluid chemistry and system scale.
        </p>

        <h2>The Six Types of Thermic Fluid Contamination and What Each Means</h2>

        <h3>Flash Point Drop from Thermal Cracking</h3>
        <p>
          <strong>Flash point drop</strong> occurs when sustained overheating causes thermal cracking of the oil molecule, breaking long hydrocarbon chains into shorter, more volatile fractions. A flash point below the safe operating threshold is a critical safety indicator — it signals that the system has experienced a significant overheating event. Standard flushing fluid is ineffective here; the cleaning chemistry must be specifically formulated for post-cracking remediation. The root cause — system overheating — must also be diagnosed and corrected before fresh fluid is charged.
        </p>

        <h3>Carbon Formation</h3>
        <p>
          <strong>Carbon deposits</strong> form through high-temperature oxidation of the thermic fluid on heated surfaces. These solid deposits act as thermal insulators on heater coils and heat exchanger walls, creating localized hot spots that further accelerate fluid degradation. The result is progressive temperature variation across production loops, increased fuel consumption, and eventual thermal cracking. Carbon removal requires targeted flushing with chemistry capable of dissolving or suspending the carbonaceous layer for removal from the circuit.
        </p>

        <h3>High Pentane Insolubles</h3>
        <p>
          <strong>Pentane insolubles</strong> measured in a fluid analysis report indicate the presence of solid oxidation and degradation products suspended in the oil. Elevated pentane insoluble levels confirm that the fluid has undergone significant degradation and that solid contaminants are actively circulating through the system. The cleaning protocol for this condition targets suspension and removal of these particles, typically through a combination of chemical flushing and fine filtration.
        </p>

        <h3>High Toluene Insolubles</h3>
        <p>
          <strong>Toluene insolubles</strong> represent a more severe contamination state than pentane insolubles, indicating the presence of inorganic or heavily carbonaceous particles that are insoluble even in aromatic solvents. High toluene insoluble readings require aggressive flushing chemistry and, in severe cases, an offline cleaning protocol where the flushing fluid can be circulated at elevated temperatures without production constraints.
        </p>

        <h3>High Sediment and Water Content</h3>
        <p>
          <strong>Sediment and water contamination</strong> enters thermic fluid systems through moisture ingress, incomplete fluid changeouts, or system leaks. Water causes fluid emulsification, accelerates internal corrosion, and triggers precipitate formation that clogs filters and restricts flow. Cleaning protocols for this condition combine moisture removal with sediment flushing, and must include decontamination of expansion tanks and vessels where water accumulates preferentially.
        </p>

        <h3>High Viscosity and MVI Issues</h3>
        <p>
          <strong>Viscosity increase</strong> results from oil-soluble degradation compounds that form as the fluid breaks down. Thickened thermic oil flows poorly through the circuit, increasing differential pressure across filters, overloading circulation pumps, and creating uneven heating distribution across production zones. Viscosity-related cleaning focuses on removing the polymerized compounds responsible for thickening, restoring the fluid's flow characteristics to within design parameters.
        </p>

        <h2>Why One Cleaning Solution Does Not Work for Every System</h2>
        <p>
          Thermic fluid base oil chemistry determines how the fluid degrades and, therefore, what chemistry is required to clean it. Systems running <strong>HA base</strong> (high aromatic) oils produce different degradation products than those using <strong>olefin base</strong>, <strong>Group 2+ mineral</strong>, or <strong>Group 3+ semi-synthetic</strong> fluids. A flushing fluid formulated for one base type may be incompatible with another — potentially causing precipitation, emulsification, or seal damage if applied incorrectly.
        </p>
        <p>
          This incompatibility risk is the primary reason lab testing must precede any cleaning intervention. A fluid sample analyzed at an accredited laboratory identifies not only the contamination type and severity but also the base oil chemistry, allowing the service team to select a flushing fluid that is chemically compatible with the system and effective against the specific contaminants present.
        </p>

        <h2>The Correct Process for Thermic Fluid System Cleaning</h2>
        <p>
          The correct thermic fluid system cleaning process follows a defined sequence. First, a representative oil sample is drawn from the circulating system and submitted to an NABL-accredited laboratory for full analysis. The lab report identifies flash point, pentane and toluene insolubles, sediment content, water content, and viscosity profile. This data determines the contamination diagnosis. Based on the diagnosis, a customized flushing fluid is selected and procured. The cleaning is then executed — online for lighter contamination, offline for severe fouling. After cleaning, the circuit is flushed with a compatible carrier fluid to remove cleaning chemistry residue. Fresh thermic fluid matched to the system's operating parameters is then charged, and system performance is verified through temperature differential and differential pressure monitoring.
        </p>

        <h2>How to Read Your System Data Before Calling a Service Provider</h2>
        <p>
          <strong>Delta P (ΔP)</strong> is the differential pressure across the system's primary filter. A rising ΔP indicates increasing particulate load in the fluid — the filter is working harder because more solid contamination is present. A sudden spike in ΔP indicates a blockage event. <strong>Delta T (ΔT)</strong> is the temperature differential between the heater outlet and the process inlet. A shrinking ΔT means the system is transferring less heat per unit of fluid volume — a direct indicator of fouling on heat transfer surfaces.
        </p>
        <p>
          Temperature variation across production loops — where different zones run at different actual temperatures despite the same setpoint — indicates uneven flow caused by partial blockages or viscosity increase. A flash point test result below the fluid manufacturer's minimum specification is a critical alert requiring immediate investigation. Sharing these four data points — ΔP trend, ΔT trend, temperature distribution map, and flash point reading — with a qualified service provider before any intervention enables accurate diagnosis without unnecessary system access.
        </p>

        <h2>What to Expect from a Professional Thermic Fluid Cleaning Service</h2>
        <p>
          A properly executed thermic fluid system cleaning restores 85–95% of the system's original heat transfer performance. This translates to measurable reductions in fuel consumption, stabilized production temperatures, and elimination of the unplanned downtime caused by pump failures and filter blockages. Fluid life after a proper clean and fresh charge is extended significantly compared to simply replacing fluid in a dirty system. Reputable service providers — such as QUICKPETRO in Ahmedabad — base their cleaning recommendation on actual lab data, not visual inspection alone, and offer design-level diagnosis for systems with recurring contamination problems.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What is thermic fluid system cleaning?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Thermic fluid system cleaning is a specialized chemical and mechanical maintenance process designed to remove carbon deposits, organic sludge, and chemical insolubles from the internal surfaces of industrial heat transfer loops. This process uses targeted flushing fluids and filtration technologies to clean system piping, heaters, and user loops without damaging system metallurgy. Regular cleaning restores optimal heat transfer efficiency and eliminates operational hazards like localized hot spots.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">How do I know if my thermic fluid system needs cleaning?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">A system typically requires cleaning when differential pressure across filters is rising, temperature differential is decreasing, or temperature variation is observed across production loops. Physical indicators like a significant thermic fluid flash point drop or high levels of pentane and toluene insolubles in lab reports also signal critical contamination. Left unchecked, these issues lead to increased fuel consumption and reduced manufacturing throughput.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What is the difference between flushing and filtration for thermic fluid systems?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Filtration is a continuous or batch maintenance process that removes suspended solid particles, moisture, and loose sediments from circulating thermal oil using mechanical elements. Thermic fluid flushing involves circulating specialized chemical fluids through the system to actively dissolve and strip baked-on carbon crusts and resinous varnishes from internal pipe walls. While filtration keeps healthy oil clean, flushing is required to remediate fouled internal surfaces and restore system design parameters.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">Can thermic fluid be cleaned without shutting down the system?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Yes, certain contamination profiles can be addressed using online filtration and chemical cleaning techniques that operate at normal process temperatures without interrupting production. This method gradually removes suspended solids, light ends, and soft sludge during live operation. However, severe carbonization or heavy toluene insoluble blockages may require a planned shutdown for aggressive offline flushing to work effectively.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">How often should thermic fluid systems be cleaned?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">The ideal frequency depends on operating temperatures, system design, and fluid quality. Plants should conduct detailed fluid analysis at an accredited laboratory at least once a year to monitor degradation trends. A complete system flush or targeted cleaning is typically recommended every three to five years, or immediately when laboratory metrics reveal a significant flash point drop or elevated insoluble content.</p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is thermic fluid system cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Thermic fluid system cleaning is a specialized chemical and mechanical maintenance process designed to remove carbon deposits, organic sludge, and chemical insolubles from the internal surfaces of industrial heat transfer loops. This process uses targeted flushing fluids and filtration technologies to clean system piping, heaters, and user loops without damaging system metallurgy. Regular cleaning restores optimal heat transfer efficiency and eliminates operational hazards like localized hot spots.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know if my thermic fluid system needs cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A system typically requires cleaning when differential pressure across filters is rising, temperature differential is decreasing, or temperature variation is observed across production loops. Physical indicators like a significant thermic fluid flash point drop or high levels of pentane and toluene insolubles in lab reports also signal critical contamination. Left unchecked, these issues lead to increased fuel consumption and reduced manufacturing throughput.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between flushing and filtration for thermic fluid systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Filtration is a continuous or batch maintenance process that removes suspended solid particles, moisture, and loose sediments from circulating thermal oil using mechanical elements. Thermic fluid flushing involves circulating specialized chemical fluids through the system to actively dissolve and strip baked-on carbon crusts and resinous varnishes from internal pipe walls. While filtration keeps healthy oil clean, flushing is required to remediate fouled internal surfaces and restore system design parameters.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can thermic fluid be cleaned without shutting down the system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, certain contamination profiles can be addressed using online filtration and chemical cleaning techniques that operate at normal process temperatures without interrupting production. This method gradually removes suspended solids, light ends, and soft sludge during live operation. However, severe carbonization or heavy toluene insoluble blockages may require a planned shutdown for aggressive offline flushing to work effectively.',
                },
              },
              {
                '@type': 'Question',
                name: 'How often should thermic fluid systems be cleaned?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The ideal frequency depends on operating temperatures, system design, and fluid quality. Plants should conduct detailed fluid analysis at an accredited laboratory at least once a year to monitor degradation trends. A complete system flush or targeted cleaning is typically recommended every three to five years, or immediately when laboratory metrics reveal a significant flash point drop or elevated insoluble content.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}