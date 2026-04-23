import { canteenMenu } from "@/data/mock";

export default function CanteenPage() {
  return (
    <div className="space-y-10 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
          Canteen Menu
        </h1>
        <p className="text-xl" style={{ color: "var(--text-muted)" }}>
          What's cooking this week? Check out the daily specials.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {canteenMenu.map((menu) => (
          <div key={menu.day} className="glass rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100" style={{ backgroundColor: "var(--surface)" }}>
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-extrabold text-xl py-4 px-6 tracking-wider uppercase">
              {menu.day}
            </div>
            <div className="p-8 space-y-6">
              {menu.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-b border-gray-100 pb-5 last:border-0 last:pb-0 group">
                  <div className="flex-1 pr-4">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-indigo-600 transition-colors" style={{ color: "var(--text)" }}>{item.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.dietary.map(d => (
                        <span key={d} className="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold tracking-wide">
                          {d === 'V' ? 'Vegetarian' : d === 'VG' ? 'Vegan' : d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-extrabold text-xl bg-gray-50 px-3 py-1 rounded-xl" style={{ color: "var(--text)" }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
