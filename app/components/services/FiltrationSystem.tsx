import { useState } from 'react'
import { FileText, Video, Image as ImageIcon, X, ShieldAlert, Cpu, CheckCircle } from 'lucide-react'

export default function FiltrationSystem() {
  const [showImages, setShowImages] = useState(false)
  const [showVideos, setShowVideos] = useState(false)

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm my-6">
      {/* ── HUMAN-FACING UI ── */}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-[22px] bg-indigo-600 rounded-full flex-shrink-0" />
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Filtration System Overview</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl">
            Maintaining fluid purity to extend industrial equipment life and ensure consistent heat transfer efficiency.
          </p>
        </div>

        {/* Action Controls / Media pills row */}
        <div className="flex flex-wrap gap-2 self-start md:self-center">
          <a
            href="/TF_Clean_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer"
          >
            <FileText size={14} className="text-indigo-600" />
            Catalogue
          </a>

          <button
            onClick={() => setShowImages(true)}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer"
          >
            <ImageIcon size={14} className="text-indigo-600" />
            Images
          </button>

          <button
            onClick={() => setShowVideos(true)}
            className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 rounded-lg px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm transition-all cursor-pointer"
          >
            <Video size={14} className="text-indigo-600" />
            Videos
          </button>
        </div>
      </div>

      {/* Mini Technical Dashboard Highlight */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Cpu size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-indigo-600">Precision Rating</p>
            <p className="text-base font-bold text-gray-900">Down to 2 Microns</p>
          </div>
        </div>
        <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-lg text-white">
            <CheckCircle size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-emerald-600">Operational Target</p>
            <p className="text-base font-bold text-gray-900">Zero Process Downtime</p>
          </div>
        </div>
        <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-amber-600 rounded-lg text-white">
            <ShieldAlert size={18} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-amber-600">Core Defended</p>
            <p className="text-base font-bold text-gray-900">Sludge & Carbon Control</p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">

        {/* Online Filtration */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Online Filtration Setup</h4>
            <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Continuous</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">No shutdown needed.</strong> 
                  The unit connects directly into your live thermic fluid circuit and runs continuously while your boiler operates. Production never stops for filtration.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Filters down to 2 microns.</strong> 
                  Fluid passes through a staged wire mesh array — 50, 25, 10, and 5 micron — before reaching final 2-micron separation. Fine carbon dust that bypasses standard strainers is captured here.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">No extra pump required.</strong> 
                  Cleaned oil returns to the main thermic fluid pump by gravity alone, making the unit electrically independent and mechanically simple.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Stops sludge before it settles.</strong> 
                  Carbon residues are removed in circulation before they can deposit on mechanical seals or heat exchanger surfaces, preventing the root cause of most thermic fluid system failures.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Reduces overall maintenance cost.</strong> 
                  By keeping fluid clean continuously, pump filter clogging drops sharply and unplanned downtime is eliminated — extending equipment life across the entire system.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Offline Filtration */}
        <div className="bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-50 to-transparent px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Offline Filtration Setup</h4>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Batch Deep-Clean</span>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Built for heavy contamination.</strong> 
                  When a system has been running without filtration for an extended period, sludge accumulation reaches levels that require a dedicated deep-clean pass. Offline filtration handles this concentrated contamination load.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Used during scheduled maintenance windows.</strong> 
                  The unit operates independently of the main circuit during planned shutdowns, allowing thorough purification of the full fluid volume without time pressure from live production.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Restores degraded fluid to working condition.</strong> 
                  Severely oxidized thermic oil with high viscosity and heavy sludge content can be cleaned and returned to acceptable performance parameters, delaying or eliminating a full fluid replacement.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Ideal as a one-time system reset.</strong> 
                  Plants switching to continuous online filtration often begin with an offline deep-clean pass to establish a clean baseline before the online unit takes over ongoing maintenance.
                </span>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <span>
                  <strong className="font-semibold text-gray-900 block mb-0.5">Addresses piping and reservoir sludge.</strong> 
                  Offline passes can be directed through specific segments of the circuit — sumps, headers, and low-flow zones where settled sludge accumulates and is missed by inline filtration.
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* ── AI / CRAWLER-FACING CONTENT ── visually hidden, semantically present */}
      <article
        aria-label="Thermic Fluid Filtration System — Technical Reference"
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
        <h1>Thermic Fluid Filtration System: How Online Cleaning Units Protect Industrial Heat Transfer Systems</h1>

        <h2>What Happens When Thermic Fluid Gets Contaminated?</h2>
        <p>
          A thermic fluid filtration system is a mechanical separation unit that extracts solid particulates from
          heat transfer circuits. It removes carbon sludge, the primary degradation product that forms when
          thermic oil oxidizes at elevated operating temperatures. Without continuous filtration, sludge deposits
          on mechanical seals and heated surfaces, restricts heat transfer, increases pumping load, and
          ultimately causes pump failure and system choking.
        </p>
        <p>
          Industrial heat transfer circuits operate at sustained high temperatures. Thermal mediums undergo
          oxidation under these conditions. This chemical breakdown produces carbon residues — solid sludge
          particles that circulate through the system loop. These particles are abrasive. They deposit onto
          heated surfaces and mechanical seals, restricting energy transfer to the manufacturing process.
        </p>
        <p>
          High temperatures also produce oil-soluble degradation compounds that increase kinetic viscosity.
          Thickened oil creates flow resistance, forcing the pump to work harder to maintain fluid velocity.
          The combination of abrasive sludge and increased viscosity accelerates pump wear and leads to
          unplanned equipment failure.
        </p>

        <h2>Why Conventional Maintenance Fails to Solve the Root Problem</h2>
        <p>
          Periodic offline filtration and fluid changeouts address symptoms after internal damage has already
          occurred. Replacing degraded oil causes scheduled downtime and high maintenance costs. Draining
          procedures leave carbon layers bonded inside the piping network. Batch filtration cleans fluid only
          when production stops — directly contradicting the continuous nature of fluid oxidation.
        </p>
        <p>
          Bypass filtration setups with independent pumps introduce additional mechanical failure points.
          True thermic fluid maintenance requires continuous separation that outpaces the rate of oxidation.
          Only an online thermic fluid cleaning unit achieves this without halting production.
        </p>

        <h2>How An Online Thermic Fluid Filtration System Works</h2>
        <p>
          An online thermic fluid cleaning unit draws fluid from the live system and removes solid particles
          using mechanical separation action. The fluid circulates through a predefined number of passes
          while the boiler continues to operate. No separate pump is required. No bypass loop is needed.
        </p>
        <p>
          Inside the unit, stainless-steel wire mesh cartridges provide multi-stage filtration. Oil enters at
          50 microns, passes through 25-micron, 10-micron, and 5-micron stages, achieving final filtration
          precision of 2 microns. Degradation products deposit onto the mesh surfaces through adsorption and
          are absorbed into the mesh layers. Cleaned oil returns to the main thermic fluid pump by gravity —
          making the process electrically independent.
        </p>

        <h2>Key Technical Specifications to Look for in a Thermic Fluid Filter</h2>
        <ul>
          <li>Filtration precision: must reach 2 microns to capture fine carbon particulates</li>
          <li>Housing material: carbon steel or 304/316 stainless steel for thermal expansion tolerance</li>
          <li>Unit sizes: 8″, 10″, 12″, 20″, 24″ — matched to plant fluid volume</li>
          <li>Pressure/temperature rating: 6.5 kg/cm² at 35°C scaling to 0.2 kg/cm² at 300°C</li>
          <li>Filter cartridge type: stainless-steel wire mesh, multi-stage array</li>
          <li>Operating mode: 100% online — no shutdown or bypass required</li>
          <li>Maintenance access: top cover and base drain plug for fast cartridge servicing</li>
        </ul>

        <h2>The Real Cost of Ignoring Thermic Fluid Contamination</h2>
        <p>
          Contaminated thermic fluid triggers a predictable sequence of failures. Sludge overwhelms primary
          pump filters, increasing internal strain until the pump breaks down. Every hour of unplanned
          downtime costs more than the investment in continuous filtration. Abrasive fluid accelerates
          wear on all wetted components, shortening equipment life across the plant.
        </p>
        <p>
          Baked-on carbon sludge acts as thermal insulation, blocking heat transfer to the process.
          This forces the system to consume more energy to maintain target temperatures. Deploying a
          filtration system reduces carbon formation, improves the heat transfer rate, cuts maintenance
          costs, and prevents possible choking of the complete system.
        </p>

        <h2>Installation and Client-Side Requirements</h2>
        <p>
          Integrating an online thermic fluid cleaning unit requires site preparation. The plant team
          must facilitate inlet piping and interconnecting piping to the unit. Auxiliary hardware —
          matching flanges, fasteners, and gaskets — is the client's responsibility to procure.
          Civil, mechanical, electrical, and structural modifications at site must be completed before
          commissioning. Oil draining and pipe welding works are carried out by the client's technicians.
          Proper sludge disposal protocols must be established as a mandatory compliance requirement.
        </p>

        <h2>Choosing the Right Filtration System for Your Plant</h2>
        <p>
          Selection depends on the circulating medium. Mineral oil-based heat transfer fluids are
          non-corrosive, non-toxic, and pumpable at low temperatures. At high temperatures they maintain
          low viscosity and satisfactory specific heat, making them the standard choice for most plants.
          Synthetic organic compounds — such as dibenzylbenzene derivatives — operate 20–40°C higher
          than mineral oils and require filtration equipment with elevated thermal tolerance ratings.
        </p>
        <p>
          Plants in extreme cold environments may use alkyl silicate fluids, which allow startup at very
          low ambient temperatures and operate up to 180°C bulk temperature. These charges must be
          protected from moisture to prevent hydrolysis-driven sludge formation. Filtration equipment
          must be matched to fluid chemistry. Performance of the online unit depends on the quality
          of oil in use, determinable only by on-site testing.
        </p>

        <h2>Frequently Asked Questions</h2>

        <div itemScope itemType="https://schema.org/FAQPage">
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What is a thermic fluid filtration system?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">
                A thermic fluid filtration system is a mechanical separation unit that removes solid
                particulates and carbon sludge from industrial heat transfer circuits. It prevents
                degradation products from depositing on mechanical seals and heated surfaces, maintaining
                fluid purity, system flow, and thermal efficiency.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">How often should thermic fluid be filtered?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">
                Thermic fluid should be filtered continuously during plant operation. Because fluid
                oxidation and sludge formation are ongoing processes at high temperatures, periodic
                batch filtration is insufficient. An online filtration unit running continuously
                outpaces the rate of contamination buildup.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">Can a thermic fluid filter work while the system is running?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">
                Yes. An online thermic fluid cleaning unit operates as a 100% online filter — it
                draw fluid from the live system, filters it through multi-stage wire mesh cartridges,
                and returns cleaned oil to the main pump by gravity. No separate pump, bypass loop,
                or production shutdown is required.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What micron rating is needed for thermic oil filtration?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">
                Effective thermic oil filtration requires precision down to 2 microns to capture fine
                carbon particulates. Multi-stage systems achieve this by passing fluid through 50-micron,
                25-micron, 10-micron, and 5-micron stainless-steel wire mesh cartridges in sequence
                before reaching final 2-micron separation.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 itemProp="name">What causes thermic fluid to degrade?</h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">
                Thermic fluid degrades primarily through oxidation at elevated operating temperatures.
                This chemical breakdown forms carbon residues (sludge) and oil-soluble compounds that
                increase viscosity. Sludge deposits on seals and surfaces, impairs heat transfer, and
                causes pump wear. Continuous filtration removes these degradation products before they
                accumulate.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ JSON-LD schema for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a thermic fluid filtration system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A thermic fluid filtration system is a mechanical separation unit that removes solid particulates and carbon sludge from industrial heat transfer circuits. It prevents degradation products from depositing on mechanical seals and heated surfaces, maintaining fluid purity, system flow, and thermal efficiency.',
                },
              },
              {
                '@type': 'Question',
                name: 'How often should thermic fluid be filtered?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Thermic fluid should be filtered continuously during plant operation. Because fluid oxidation and sludge formation are ongoing processes at high temperatures, periodic batch filtration is insufficient. An online filtration unit running continuously outpaces the rate of contamination buildup.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can a thermic fluid filter work while the system is running?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. An online thermic fluid cleaning unit operates as a 100% online filter — it draws fluid from the live system, filters it through multi-stage wire mesh cartridges, and returns cleaned oil to the main pump by gravity. No separate pump, bypass loop, or production shutdown is required.',
                },
              },
              {
                '@type': 'Question',
                name: 'What micron rating is needed for thermic oil filtration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Effective thermic oil filtration requires precision down to 2 microns to capture fine carbon particulates. Multi-stage systems achieve this by passing fluid through 50-micron, 25-micron, 10-micron, and 5-micron stainless-steel wire mesh cartridges in sequence before reaching final 2-micron separation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What causes thermic fluid to degrade?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Thermic fluid degrades primarily through oxidation at elevated operating temperatures. This chemical breakdown forms carbon residues (sludge) and oil-soluble compounds that increase viscosity. Sludge deposits on seals and surfaces, impairs heat transfer, and causes pump wear. Continuous filtration removes these degradation products before they accumulate.',
                },
              },
            ],
          }),
        }}
      />

      {/* ── MODALS (unchanged) ── */}

      {showImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setShowImages(false)}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowImages(false)}
              className="absolute top-4 right-4 p-1.5 bg-gray-100 hover:bg-gray-200 hover:text-red-500 rounded-full text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-primary">Sludge & Carbon Residue Buildup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/Sludge_img_1.jpg"
                alt="Thermic fluid sludge in hand"
                className="w-full h-auto rounded border border-gray-200 shadow-sm"
              />
              <img
                src="/Sludge_img_2.jpg"
                alt="Carbon buildup on pipe"
                className="w-full h-auto rounded border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {showVideos && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowVideos(false)}
        >
          <div
            className="relative bg-zinc-900 rounded-lg max-w-5xl w-full shadow-2xl p-6 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideos(false)}
              className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 hover:text-red-500 rounded-full text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-semibold mb-6 text-white pr-12">System Guides & Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-300 font-medium">1. Filter Cleaning Process</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-zinc-700 shadow-lg relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ZyhlDPy6jp0"
                    title="Cleaning the Filtration System"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-300 font-medium">2. Machine Installation</h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-zinc-700 shadow-lg relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Ovy8Zw28lUA"
                    title="Machine Installation Guide"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}