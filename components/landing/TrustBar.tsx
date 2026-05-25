const items = [
  { icon: '⭐', label: '12+ Years Experience' },
  { icon: '✅', label: '100+ Projects Supported' },
  { icon: '🌍', label: 'Global Client Experience' },
  { icon: '🤖', label: 'AI + Web Development Expertise' },
]

export default function TrustBar() {
  return (
    <div className="bg-blue-600/5 border-y border-blue-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
