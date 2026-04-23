import Image from "next/image";

interface EventProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    category: string;
    description: string;
    image: string;
  };
  isRecommendation?: boolean;
}

export function EventCard({ event, isRecommendation }: EventProps) {
  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("en-GB", { weekday: 'short', month: 'short', day: 'numeric' });
  const formattedTime = dateObj.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' });

  return (
    <article className={`rounded-xl overflow-hidden glass shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl ${isRecommendation ? 'border-2 border-green-500' : ''}`} style={{ backgroundColor: "var(--surface)" }}>
      <div className="relative h-48 w-full bg-gray-200">
        {/* We use standard img for simplicity here to avoid next/image domain configuration issues for mock data */}
        <img src={event.image} alt={event.title} className="object-cover w-full h-full" />
        {isRecommendation && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
            Recommended
          </div>
        )}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-indigo-700 text-xs font-bold px-2 py-1 rounded-full shadow">
          {event.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1" style={{ color: "var(--text)" }}>{event.title}</h3>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>
          {event.description}
        </p>
        <div className="flex flex-col space-y-1 text-sm font-medium mb-4" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center">
            <span className="mr-2" aria-hidden="true">📅</span>
            <time dateTime={event.date}>{formattedDate} at {formattedTime}</time>
          </div>
          <div className="flex items-center">
            <span className="mr-2" aria-hidden="true">📍</span>
            <span>{event.location}</span>
          </div>
        </div>
        <button 
          className="w-full py-2 rounded-lg font-semibold text-white transition-colors hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
          style={{ backgroundColor: "var(--primary)" }}
          aria-label={`Register for ${event.title}`}
        >
          Register
        </button>
      </div>
    </article>
  );
}
