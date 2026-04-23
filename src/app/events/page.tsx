"use client";

import { useState, useEffect, useMemo } from "react";
import { events } from "@/data/mock";
import { EventCard } from "@/components/EventCard";

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const [recommendedEvents, setRecommendedEvents] = useState<any[]>([]);
  const [isLoadingRecs, setIsLoadingRecs] = useState(true);

  // Fetch ML recommendations from Serverless API Endpoint
  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const response = await fetch('/api/recommend');
        const result = await response.json();
        if (result.success) {
          setRecommendedEvents(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      } finally {
        setIsLoadingRecs(false);
      }
    }
    fetchRecommendations();
  }, []);

  const filteredEvents = useMemo(() => {
    if (filter === "All") return events;
    return events.filter(e => e.category === filter);
  }, [filter]);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          Society & Campus Events
        </h1>
        <p className="text-lg" style={{ color: "var(--text-muted)" }}>
          Discover what's happening around campus.
        </p>
      </header>

      {/* Recommendations Section (KNN via API Route) */}
      <section className="mb-12">
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-2xl" aria-hidden="true">✨</span>
          <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Recommended for You</h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
          Based on your past interactions, our smart engine suggests these events:
        </p>
        
        {isLoadingRecs ? (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedEvents.map(event => (
              <EventCard key={`rec-${event.id}`} event={event} isRecommendation={true} />
            ))}
          </div>
        )}
      </section>

      <hr className="border-gray-200" style={{ borderColor: "var(--border)" }} />

      {/* All Events Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0" style={{ color: "var(--text)" }}>All Upcoming Events</h2>
          <div className="flex space-x-2">
            {["All", "Tech", "Sports", "Social"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                style={{
                  backgroundColor: filter === cat ? "var(--primary)" : "var(--surface)",
                  color: filter === cat ? "white" : "var(--text)",
                  border: filter === cat ? "none" : "1px solid var(--border)"
                }}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 glass rounded-xl">
            <p className="text-lg" style={{ color: "var(--text-muted)" }}>No events found for this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
