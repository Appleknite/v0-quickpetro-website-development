export default function FluidAnalysis() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-0.5 h-[18px] bg-secondary rounded-sm flex-shrink-0" />
        <h2 className="text-lg font-semibold text-primary">Fluid Analysis</h2>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        Laboratory-grade testing of your thermic fluid to detect degradation before it causes failures.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="bg-white border border-gray-200 border-t-2 border-t-secondary rounded p-3.5">
          <h4 className="text-sm font-semibold text-primary mb-1">Fluid Testing</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Acidity, viscosity, flash point, carbon residue — full report with maintenance recommendations.</p>
        </div>
      </div>
    </div>
  )
}
