import { canteenMenu } from "@/data/mock";

export default function CanteenPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          Canteen Menu
        </h1>
        <p className="text-lg" style={{ color: "var(--text-muted)" }}>
          What's cooking this week? Check out the daily specials.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {canteenMenu.map((menu) => (
          <div key={menu.day} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "var(--surface)" }}>
            <div className="bg-indigo-600 text-white font-bold text-lg py-3 px-6" style={{ backgroundColor: "var(--primary)" }}>
              {menu.day}
            </div>
            <div className="p-6 space-y-4">
              {menu.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: "var(--text)" }}>{item.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.dietary.map(d => (
                        <span key={d} className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 font-medium border border-green-200">
                          {d === 'V' ? 'Vegetarian' : d === 'VG' ? 'Vegan' : d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-bold text-lg" style={{ color: "var(--text)" }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
