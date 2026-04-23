import { timetable, events, canteenMenu } from "@/data/mock";
import { EventCard } from "@/components/EventCard";
import Link from "next/link";

export default function Dashboard() {
  const todayClasses = timetable.filter(c => c.day === "Monday"); // Mock today as Monday
  const todayMenu = canteenMenu.find(m => m.day === "Monday");
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          Welcome back, Liam! 👋
        </h1>
        <p className="text-lg" style={{ color: "var(--text-muted)" }}>
          Here is your overview for today.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Timetable & Menu */}
        <div className="lg:col-span-2 space-y-8">
          <section className="glass rounded-2xl p-6 shadow-sm" style={{ backgroundColor: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Today's Classes</h2>
              <Link href="/timetable" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
                View Full Timetable &rarr;
              </Link>
            </div>
            {todayClasses.length > 0 ? (
              <ul className="space-y-4">
                {todayClasses.map(cls => (
                  <li key={cls.class_id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div>
                      <h3 className="font-semibold text-lg" style={{ color: "var(--text)" }}>{cls.module_name}</h3>
                      <p className="text-sm flex items-center mt-1" style={{ color: "var(--text-muted)" }}>
                        <span className="mr-2" aria-hidden="true">📍</span> {cls.room}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 font-bold px-3 py-1 rounded-lg bg-indigo-100 text-indigo-800" style={{ backgroundColor: "var(--border)", color: "var(--primary)" }}>
                      {cls.time}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: "var(--text-muted)" }}>No classes today. Enjoy your day off!</p>
            )}
          </section>

          <section className="glass rounded-2xl p-6 shadow-sm" style={{ backgroundColor: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Today's Canteen Menu</h2>
              <Link href="/canteen" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
                View Weekly Menu &rarr;
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {todayMenu?.items.map((item, idx) => (
                <li key={idx} className="p-4 rounded-xl bg-green-50/50 border border-green-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold" style={{ color: "var(--text)" }}>{item.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {item.dietary.map(d => (
                        <span key={d} className="text-xs bg-green-200 text-green-800 px-1.5 rounded">{d}</span>
                      ))}
                    </div>
                  </div>
                  <span className="font-bold" style={{ color: "var(--text)" }}>{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column - Upcoming Events */}
        <div className="space-y-8">
          <section className="glass rounded-2xl p-6 shadow-sm" style={{ backgroundColor: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Upcoming Events</h2>
              <Link href="/events" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
                View All &rarr;
              </Link>
            </div>
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
