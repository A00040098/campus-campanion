import { timetable, events, canteenMenu } from "@/data/mock";
import { EventCard } from "@/components/EventCard";
import Link from "next/link";
import { MapPin, HandMetal, ChevronRight } from "lucide-react";

export default function Dashboard() {
  const todayClasses = timetable.filter(c => c.day === "Monday"); // Mock today as Monday
  const todayMenu = canteenMenu.find(m => m.day === "Monday");
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="space-y-10 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3 flex items-center gap-3" style={{ color: "var(--text)" }}>
          Welcome back, Liam! <HandMetal size={40} className="text-yellow-500 animate-bounce" />
        </h1>
        <p className="text-xl" style={{ color: "var(--text-muted)" }}>
          Here is your overview for today. Let's make it a great one.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Timetable & Menu */}
        <div className="lg:col-span-2 space-y-8">
          <section className="glass rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100" style={{ backgroundColor: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-3xl font-bold" style={{ color: "var(--text)" }}>Today's Classes</h2>
              <Link href="/timetable" className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center group">
                View Full Timetable <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {todayClasses.length > 0 ? (
              <ul className="space-y-4">
                {todayClasses.map(cls => (
                  <li key={cls.class_id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 border-l-4 border-indigo-500 shadow-sm hover:shadow-md">
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>{cls.module_name}</h3>
                      <p className="text-sm flex items-center mt-2 font-medium" style={{ color: "var(--text-muted)" }}>
                        <MapPin size={16} className="mr-2 text-indigo-400" /> {cls.room}
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0 font-bold px-4 py-2 rounded-xl bg-indigo-100 text-indigo-800 tracking-wide border border-indigo-200" style={{ backgroundColor: "var(--border)", color: "var(--primary)" }}>
                      {cls.time}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-8 text-center text-lg italic" style={{ color: "var(--text-muted)" }}>No classes today. Enjoy your day off!</p>
            )}
          </section>

          <section className="glass rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100" style={{ backgroundColor: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-3xl font-bold" style={{ color: "var(--text)" }}>Today's Canteen Menu</h2>
              <Link href="/canteen" className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center group">
                View Weekly Menu <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {todayMenu?.items.map((item, idx) => (
                <li key={idx} className="p-5 rounded-2xl bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-emerald-100 hover:shadow-md transition-shadow flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight" style={{ color: "var(--text)" }}>{item.name}</h3>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {item.dietary.map(d => (
                        <span key={d} className="text-xs font-bold bg-emerald-200 text-emerald-900 px-2 py-1 rounded-lg uppercase tracking-wider">{d}</span>
                      ))}
                    </div>
                  </div>
                  <span className="font-extrabold text-xl ml-4 bg-white px-3 py-1 rounded-xl shadow-sm text-emerald-700">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column - Upcoming Events */}
        <div className="space-y-8">
          <section className="glass rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100" style={{ backgroundColor: "var(--surface)" }}>
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-3xl font-bold" style={{ color: "var(--text)" }}>Upcoming Events</h2>
              <Link href="/events" className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center group">
                View All <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
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
