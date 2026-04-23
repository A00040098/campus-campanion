import { timetable } from "@/data/mock";

export default function TimetablePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          My Timetable
        </h1>
        <p className="text-lg" style={{ color: "var(--text-muted)" }}>
          Your weekly class schedule at a glance.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {days.map(day => {
          const dayClasses = timetable.filter(c => c.day === day).sort((a, b) => a.time.localeCompare(b.time));
          return (
            <div key={day} className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold text-center py-2 rounded-t-xl glass border-b-4 border-indigo-500" style={{ color: "var(--text)", backgroundColor: "var(--surface)" }}>
                {day}
              </h2>
              <div className="flex-1 space-y-3">
                {dayClasses.length > 0 ? (
                  dayClasses.map(cls => (
                    <div key={cls.class_id} className="p-4 rounded-xl glass shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: "var(--surface)" }}>
                      <div className="text-xs font-bold text-indigo-600 mb-1" style={{ color: "var(--primary)" }}>{cls.time}</div>
                      <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--text)" }}>{cls.module_name}</h3>
                      <div className="text-xs flex items-center" style={{ color: "var(--text-muted)" }}>
                        <span className="mr-1" aria-hidden="true">📍</span> {cls.room}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-24 rounded-xl glass border border-dashed border-gray-300 flex items-center justify-center text-sm" style={{ backgroundColor: "transparent", color: "var(--text-muted)" }}>
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
