'use client'

import { FileText, FlaskConical, ShieldCheck, MapPin } from 'lucide-react'

export default function FluidAnalysis() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">
      {/* ── HUMAN-FACING UI ── */}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-[22px] bg-slate-700 rounded-full flex-shrink-0" />
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Thermic Fluid Analysis & Testing Services</h2>
          </div>
          {/* Description - Localized for Indian Market */}
          <p className="text-gray-500 text-sm max-w-3xl leading-relaxed">
            NABL-accredited <strong className="font-semibold text-gray-700">heat transfer oil analysis</strong> for industrial processing plants across India. Our Ahmedabad-based testing facility delivers precise diagnostic tracking to eliminate thermal system downtime.
          </p>
        </div>
      </div>

      {/* Laboratory Diagnostic Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-slate-700 rounded-lg text-white">
            <FlaskConical size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-600">Testing Spectrum</p>
            <p className="text-base font-bold text-gray-900">9 Core Parameters</p>
          </div>
        </div>
        <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <ShieldCheck size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-blue-600">Accreditation Benchmark</p>
            <p className="text-base font-bold text-gray-900">NABL / ISO 17025</p>
          </div>
        </div>
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-indigo-600">Regional Footprint</p>
            <p className="text-base font-bold text-gray-900">Ahmedabad Hub, GJ</p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-2">

        {/* Card 1: Technical Testing Scope */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Comprehensive Fluid Testing</h4>
            <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Parameters</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Nine parameters, one report.</strong> 
                  A full <strong className="font-medium text-gray-800">thermic fluid analysis</strong> measures flash point, kinematic viscosity, pentane/toluene insolubles, sediment, moisture content, TAN, color, and density in a single diagnostic window.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Identifies the exact failure mode.</strong> 
                  Isolates structural cracking from chemical oxidation. The resulting <strong className="font-medium text-gray-800">thermic fluid lab report</strong> provides an exact molecular signature of your system's core vulnerabilities.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Prevents wrong service actions.</strong> 
                  Eliminate guesswork. Solid analytical data blocks facilities from mistakenly deploying expensive chemical flushing loops when simple targeted particulate filtration is all that is required.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: NABL & Indian Standards Context */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">NABL Laboratory Standards</h4>
            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Compliance</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">What NABL accreditation means.</strong> 
                  Fully complies with ISO/IEC 17025 international protocols. Overseen by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India, ensuring legally defensible data.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Required for insurance &amp; warranties.</strong> 
                  Non-accredited lab metrics are instantly rejected in Indian corporate insurance disputes, equipment warranty challenges, and statutory environmental state audits.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Live operational sampling.</strong> 
                  Samples must be drawn hot (60°C–80°C) from an active circulation loop. Proper collection prevents environmental contamination, securing a clear baseline for <strong className="font-medium text-gray-800">thermal oil quality test India</strong> parameters.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Regional Footprint & Actions (Strong Geo-SEO) */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">QUICKPETRO Regional Solutions</h4>
            <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Gujarat</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Ahmedabad Hub Coordination.</strong> 
                  Samples submitted via QUICKPETRO are routed immediately to our primary <strong className="font-medium text-gray-800">NABL accredited oil testing lab</strong> network based right here in Ahmedabad, Gujarat.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Expert Engineering Oversight.</strong> 
                  Senior engineering specialist Dhaval Gandhi provides custom, design-level diagnostic interpretations, mapping your report metrics directly to local field solutions.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Verified System Performance.</strong> 
                  Combining laboratory metrics with real-time field data (Delta P, Delta T) allows Indian manufacturing units to achieve an 85–95% thermal efficiency recovery.
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* ── AI / CRAWLER-FACING CONTENT ── Visually hidden, preserved strictly for crawling indexing */}
      <article
        aria-label="Thermic Fluid Analysis — Technical Reference"
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
        <h1>Thermic Fluid Analysis: Why NABL-Accredited Testing Is the Starting Point for Every Heat Transfer System Decision</h1>

        <h2>What Is Thermic Fluid Analysis?</h2>
        <p>
          Thermic fluid analysis is a comprehensive laboratory diagnostic process that measures the chemical and physical degradation of heat transfer oils in service. By evaluating properties such as viscosity, flash point, acid number, insoluble content, and water presence, the test identifies specific failure modes — thermal cracking, oxidation, moisture ingress, and carbon formation — before they cause system damage. This predictive data allows plant engineers to implement precisely matched maintenance actions rather than responding to failures after the fact. Thermic fluid analysis is not a periodic formality; it is the primary decision-making tool for any thermic fluid system operating under thermal stress across industrial zones in India.
        </p>

        <h2>Why Guessing the Problem Costs More Than Testing</h2>
        <p>
          Every thermic fluid contamination type demands a different service response. High pentane insolubles call for filtration. Baked-on carbon requires targeted chemical flushing. A flash point drop from thermal cracking demands a customized flushing fluid and a root-cause investigation of the overheating event. Applying the wrong intervention — for example, running standard flushing chemistry through a system contaminated by a different mechanism — can cause precipitate formation, seal damage, or accelerated corrosion of system metals.
        </p>
        <p>
          Replacing degraded fluid without first identifying and eliminating the contamination source guarantees that the new fluid degrades at the same accelerated rate. The replacement cost is wasted. Filtration applied to a system that needs flushing buys time but does not address the fouled pipe walls and heater surfaces driving the problem. A thermic fluid lab report costs a fraction of any of these interventions and removes all ambiguity before a single maintenance decision is made.
        </p>

        <h2>The Nine Parameters Measured in a Thermic Fluid Lab Report</h2>

        <h3>Flash Point</h3>
        <p>
          The thermic oil flash point test measures the lowest temperature at which the fluid produces ignitable vapour. In thermic fluid analysis, a drop in flash point below the manufacturer's minimum specification confirms that thermal cracking has occurred — the oil molecule has broken down into shorter, more volatile fractions due to overheating. This result is a critical safety and performance alert requiring immediate investigation of the root overheating cause, not just fluid replacement.
        </p>

        <h3>Kinematic Viscosity</h3>
        <p>
          The thermic fluid viscosity test measures the fluid's resistance to flow at a specified temperature. Increasing viscosity in a used thermic fluid indicates the formation of oil-soluble polymerized degradation compounds. Thickened oil increases differential pressure across the system, overloads circulation pumps, and creates uneven heating distribution across production zones. A viscosity reading significantly above the fresh fluid specification triggers a service response targeting the removal of these polymerized compounds.
        </p>

        <h3>Pentane Insolubles</h3>
        <p>
          The pentane insoluble thermic fluid test quantifies the mass of solid oxidation and degradation products suspended in the oil that are insoluble in pentane solvent. Elevated pentane insoluble levels confirm that the fluid has undergone active chemical breakdown and that solid contaminants are circulating through the system loop. The corresponding service action is fine filtration combined with chemical treatment to suspend and remove these particles before they deposit on heated surfaces.
        </p>

        <h3>Toluene Insolubles</h3>
        <p>
          The toluene insoluble thermic oil components represent a more severe contamination state than pentane insolubles. Particles insoluble in toluene — an aromatic solvent — are inorganic or heavily carbonaceous in nature, indicating advanced degradation. High toluene insoluble readings require aggressive flushing chemistry and typically necessitate an offline cleaning protocol where the flushing fluid can be circulated at elevated temperatures without production time constraints.
        </p>

        <h3>Sediment Content</h3>
        <p>
          The thermic oil sediment and water test measures the mass of physically settled solid particles in the fluid. These particles are the primary cause of pump filter clogging and contribute directly to mechanical seal abrasion and pump wear. High sediment levels combined with elevated insoluble readings confirm that the system's particulate load has exceeded what in-service filtration can manage, requiring intervention.
        </p>

        <h3>Water Content</h3>
        <p>
          Water content detects moisture ingress from system leaks, incomplete fluid changeouts, or atmospheric condensation in low-temperature zones. Water in thermic fluid causes emulsification, accelerates internal corrosion, and triggers precipitate formation that clogs filters and restricts flow. Even small water concentrations — fractions of a percent — are significant in high-temperature thermic fluid systems and require immediate source identification and removal.
        </p>

        <h3>Total Acid Number</h3>
        <p>
          Total Acid Number (TAN) measures the concentration of acidic degradation compounds in the fluid, expressed as milligrams of potassium hydroxide required to neutralize one gram of fluid. Rising TAN indicates progressive oxidative degradation and the accumulation of organic acids that corrode system metals — particularly copper alloys in pump components and heat exchanger tubes. A TAN reading significantly above the fresh fluid baseline triggers a fluid change or chemical treatment recommendation.
        </p>

        <h3>Colour and Appearance</h3>
        <p>
          Colour and appearance provide a rapid visual indicator of oxidation severity and contamination level. Fresh thermic fluid is typically pale yellow to amber. Progressive darkening toward brown and black indicates advancing oxidation and carbon formation. Haziness or cloudiness indicates water contamination or emulsification. While not a standalone diagnostic parameter, colour change in combination with other parameter deviations confirms the diagnosis and severity assessment.
        </p>

        <h3>Density</h3>
        <p>
          Density cross-checks fluid identity and detects contamination from foreign fluids — such as accidental mixing with a different oil type or hydraulic fluid. Density deviation from the fresh fluid specification that cannot be explained by temperature or degradation products indicates fluid cross-contamination, which requires full system drain and recharge with the correct fluid chemistry.
        </p>

        <h2>What NABL Accreditation Means and Why It Matters for Industrial Plants</h2>
        <p>
          NABL — the National Accreditation Board for Testing and Calibration Laboratories — is India's national accreditation body operating under the Department for Promotion of Industry and Internal Trade (DPIIT). NABL accreditation certifies that a laboratory complies with ISO/IEC 17025 international standards, covering calibration of test equipment, documented test methodology, staff technical competency, and result reproducibility. Accreditation is not self-declared; it requires independent assessment and periodic re-evaluation by NABL auditors.
        </p>
        <p>
          For plant engineers, a NABL-accredited thermic fluid analysis report provides defensible, internationally recognized data. The accuracy of results is independently verified, meaning maintenance decisions based on that data are grounded in reliable measurement — not the unverified claims of a non-accredited facility. For plant management and procurement teams, NABL accreditation is objective proof that the lab's results are trustworthy enough to base capital maintenance decisions on. For legal and insurance purposes, NABL-certified reports are the only form of laboratory evidence accepted in equipment warranty disputes, regulatory compliance audits, and industrial insurance claim substantiation across manufacturing sectors in Gujarat and wider India. Results from non-accredited laboratories hold no standing in any of these contexts.
        </p>

        <h2>How to Draw a Thermic Fluid Sample Correctly</h2>
        <p>
          Valid sampling requires the system to be actively circulating at normal operating temperature — a minimum of 60°C to 80°C — at the time of collection. Cold samples drawn from drain points do not represent the fluid's actual in-service condition; settled contaminants in low-flow zones will be underrepresented, and dissolved degradation products will behave differently at lower temperatures.
        </p>
        <p>
          The sample point must be on a main circulation line, not a stagnant branch or low-point drain. Before collecting, purge the sampling valve by flushing two to three litres of fluid into a waste container to remove any localized contamination at the valve itself. Collect 500 mL to 1000 mL of live fluid into a clean, dry, high-density polyethylene container. Seal tightly to prevent moisture ingress during transport. Label the container with system name, operating temperature, date of collection, approximate fluid age, and any observed symptoms — temperature variation, filter pressure trends, or visible contamination. Ship to the laboratory promptly; extended storage before analysis can alter certain parameters.
        </p>

        <h2>How to Read Your Thermic Fluid Lab Report</h2>
        <p>
          A healthy thermic fluid report shows flash point at or above the manufacturer's fresh fluid specification, kinematic viscosity within 10–15% of the original value, pentane and toluene insolubles below 0.1% by weight, water content below 0.05%, TAN below 1.0 mg KOH/g, and sediment below 0.01%. These are general reference thresholds; always cross-reference against the specific fluid manufacturer's limits for the product in use.
        </p>
        <p>
          Read pentane and toluene insolubles together. Elevated pentane insolubles with low toluene insolubles indicate soft sludge — addressable by filtration. Elevated toluene insolubles confirm hard carbonaceous deposits requiring chemical flushing. A combined flash point drop and rising TAN indicates both thermal cracking and oxidative acid formation — a severe condition requiring full fluid replacement and root-cause correction of the overheating source. Colour darkening alone, without parameter deviations, warrants monitoring but not immediate action.
        </p>

        <h2>From Lab Report to Service Action: How the Diagnosis Works</h2>
        <p>
          With a lab report in hand, the service decision follows a structured path. Identify which parameters deviate from specification and by how much. Match the deviation pattern to the contamination type: flash point drop maps to thermal cracking; high insolubles map to oxidative degradation; high water maps to moisture ingress; high TAN maps to acid accumulation. Each contamination type has a corresponding first-line service action — filtration, targeted cleaning, full flush, fluid replacement, or system design modification.
        </p>
        <p>
          Leaning on engineering insights alongside operational readings—specifically tracking delta P trends across filters and delta T across the heat exchanger—enables precise diagnostics. Plants in industrial sectors that implement the correctly matched service action based on precise NABL lab data consistently achieve 85–95% recovery of heat transfer system performance.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What is thermic fluid analysis?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Thermic fluid analysis is a comprehensive laboratory diagnostic process that measures the chemical and physical degradation of heat transfer oils. By evaluating properties such as viscosity, flash point, acid number, and insolubles, the test identifies specific failure modes like thermal cracking and oxidation. This predictive data allows plant engineers to implement targeted maintenance actions before catastrophic system failure occurs.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">Why must a thermic fluid testing lab be NABL accredited?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">NABL accreditation confirms that a laboratory complies with ISO/IEC 17025 international standards for calibration, equipment accuracy, and technical testing competency. Results from a NABL-accredited facility provide plant management with reliable, accurate data necessary for precise engineering decisions. NABL-certified reports are legally recognized documents required to validate equipment warranties, satisfy regulatory audits, and substantiate industrial insurance claims.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">How often should thermic fluid be tested?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Industrial heat transfer fluids should undergo comprehensive laboratory testing at least once every twelve months under standard operating conditions to track progressive degradation trends. For systems operating continuously near maximum thermal limits or showing erratic pressure readings, testing frequency should increase to a semi-annual or quarterly schedule. Consistent scheduled analysis ensures early detection of oxidation and thermal cracking before sludge or carbon deposits form.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What parameters are tested in a thermic fluid analysis report?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">A standard analysis report evaluates nine core parameters: flash point, kinematic viscosity, pentane insolubles, toluene insolubles, sediment content, water content, Total Acid Number (TAN), colour and appearance, and density. Together these metrics identify volatile light ends, suspended carbon sludge, abrasive particulates, moisture contamination, and corrosive organic acids. Monitoring this complete parameter suite eliminates guesswork and isolates the root cause of thermal system inefficiencies.</p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">How do I collect a thermic fluid sample for lab testing?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">Draw the fluid while the system is actively circulating at a normal operating temperature of at least 60°C to 80°C from a main flow line rather than a stagnant drain point. Purge the sampling valve by flushing two to three litres of fluid into a waste container first to remove localized contaminants. Fill a clean, dry, high-density polyethylene container with 500 mL to 1000 mL of live fluid, seal tightly against moisture ingress, and label it with system metadata before prompt shipment to the lab.</p>
            </div>
          </div>
        </div>
      </article>

      {/* JSON-LD Schema - Preserved with Localized Business Properties */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'QUICKPETRO',
            'image': 'https://www.quickpetro.com/assets/logo.png',
            'url': 'https://www.quickpetro.com',
            'telephone': '',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Ahmedabad',
              'addressRegion': 'Gujarat',
              'addressCountry': 'IN'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '23.0225',
              'longitude': '72.5714'
            },
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Industrial Solutions',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Thermic Fluid Analysis',
                    'description': 'NABL accredited heat transfer oil analysis and condition monitoring services in Ahmedabad, India.'
                  }
                }
              ]
            }
          }),
        }}
      />
    </div>
  )
}