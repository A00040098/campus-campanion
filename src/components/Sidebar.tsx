"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccessibility } from "./AccessibilityProvider";
import { LayoutDashboard, CalendarDays, Clock, Utensils, Settings2 } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const { highContrast, setHighContrast, largeText, setLargeText } = useAccessibility();

  const links = [
    { href: "/", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/events", label: "Events", icon: <CalendarDays size={20} /> },
    { href: "/timetable", label: "Timetable", icon: <Clock size={20} /> },
    { href: "/canteen", label: "Canteen", icon: <Utensils size={20} /> },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 glass shadow-lg flex flex-col z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105" style={highContrast ? { color: "var(--primary)", background: "none" } : {}}>
          Campus Companion
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-semibold shadow-sm border-l-4 border-indigo-600"
                  : "hover:bg-gray-100 text-gray-700 hover:translate-x-1"
              }`}
              style={{
                backgroundColor: isActive ? "var(--border)" : "transparent",
                color: isActive ? "var(--primary)" : "var(--text-muted)",
                borderLeftColor: isActive ? "var(--primary)" : "transparent",
              }}
            >
              <span className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} aria-hidden="true">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-5 border-t border-gray-200 bg-white/50 backdrop-blur-md" style={{ borderColor: "var(--border)", backgroundColor: highContrast ? "var(--surface)" : "" }}>
        <h2 className="text-sm font-bold flex items-center space-x-2 mb-4 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          <Settings2 size={16} />
          <span>Accessibility</span>
        </h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-medium transition-colors group-hover:text-indigo-600" style={{ color: "var(--text)" }}>High Contrast</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                className="sr-only peer"
                aria-label="Toggle High Contrast Mode"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
            </div>
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-medium transition-colors group-hover:text-indigo-600" style={{ color: "var(--text)" }}>Large Text</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={largeText}
                onChange={(e) => setLargeText(e.target.checked)}
                className="sr-only peer"
                aria-label="Toggle Large Text Mode"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
}
