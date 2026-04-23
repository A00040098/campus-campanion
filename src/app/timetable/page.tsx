import { timetable } from "@/data/mock";
import { MapPin, Clock } from "lucide-react";

export default function TimetablePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="space-y-10 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
          My Timetable
        </h1>
        <p className="text-xl" style={{ color: "var(--text-muted)" }}>
          Your weekly class schedule at a glance.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {days.map(day => {
          const dayClasses = timetable.filter(c => c.day === day).sort((a, b) => a.time.localeCompare(b.time));
          return (
            <div key={day} className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold text-center py-3 rounded-2xl glass border-b-4 border-indigo-500 shadow-sm uppercase tracking-wider" style={{ color: "var(--text)", backgroundColor: "var(--surface)" }}>
                {day}
              </h2>
              <div className="flex-1 space-y-4">
                {dayClasses.length > 0 ? (
                  dayClasses.map(cls => (
                    <div key={cls.class_id} className="p-5 rounded-2xl glass shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "var(--surface)" }}>
                      <div className="text-xs font-extrabold text-indigo-600 mb-2 flex items-center bg-indigo-50 w-max px-2 py-1 rounded-lg" style={{ color: "var(--primary)" }}>
                        <Clock size={12} className="mr-1" /> {cls.time}
                      </div>
                      <h3 className="font-bold text-base mb-3 leading-tight" style={{ color: "var(--text)" }}>{cls.module_name}</h3>
                      <div className="text-sm font-medium flex items-center" style={{ color: "var(--text-muted)" }}>
                        <MapPin size={14} className="mr-1.5 text-emerald-500" /> {cls.room}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-32 rounded-2xl glass border-2 border-dashed border-gray-200 flex items-center justify-center text-sm font-medium text-gray-400" style={{ backgroundColor: "transparent" }}>
                    No classes
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
