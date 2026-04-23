"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccessibility } from "./AccessibilityProvider";

export function Sidebar() {
  const pathname = usePathname();
  const { highContrast, setHighContrast, largeText, setLargeText } = useAccessibility();

  const links = [
    { href: "/", label: "Dashboard", icon: "📊" },
    { href: "/events", label: "Events", icon: "📅" },
    { href: "/timetable", label: "Timetable", icon: "🕒" },
    { href: "/canteen", label: "Canteen", icon: "🍔" },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 glass shadow-lg flex flex-col z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
          Campus Companion
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-semibold border-l-4 border-indigo-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              style={{
                backgroundColor: isActive ? "var(--border)" : "transparent",
                color: isActive ? "var(--primary)" : "var(--text-muted)",
                borderLeftColor: isActive ? "var(--primary)" : "transparent",
              }}
            >
              <span aria-hidden="true">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--text-muted)" }}>
          Accessibility
        </h2>
        <div className="space-y-3">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm" style={{ color: "var(--text)" }}>High Contrast</span>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              aria-label="Toggle High Contrast Mode"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm" style={{ color: "var(--text)" }}>Large Text</span>
            <input
              type="checkbox"
              checked={largeText}
              onChange={(e) => setLargeText(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              aria-label="Toggle Large Text Mode"
            />
          </label>
        </div>
      </div>
    </aside>
  );
}
