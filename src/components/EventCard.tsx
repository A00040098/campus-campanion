import { Calendar, MapPin } from "lucide-react";

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
    <article className={`rounded-2xl overflow-hidden glass shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col h-full ${isRecommendation ? 'border-2 border-emerald-400 ring-4 ring-emerald-500/20' : 'border border-gray-200'}`} style={{ backgroundColor: "var(--surface)" }}>
      <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
        {/* We use standard img for simplicity here to avoid next/image domain configuration issues for mock data */}
        <img src={event.image} alt={event.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        {isRecommendation && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1 animate-pulse">
            <span className="text-sm">✨</span>
            <span>Recommended</span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
          {event.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors" style={{ color: "var(--text)" }}>{event.title}</h3>
        <p className="text-sm mb-5 line-clamp-2 leading-relaxed flex-grow" style={{ color: "var(--text-muted)" }}>
          {event.description}
        </p>
        <div className="flex flex-col space-y-2 text-sm font-medium mb-6 bg-gray-50 p-3 rounded-xl" style={{ color: "var(--text-muted)", backgroundColor: "var(--background)" }}>
          <div className="flex items-center">
            <Calendar size={16} className="mr-3 text-indigo-500" aria-hidden="true" />
            <time dateTime={event.date}>{formattedDate} at {formattedTime}</time>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-3 text-emerald-500" aria-hidden="true" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
        <button 
          className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 hover:shadow-lg transform active:scale-95 flex justify-center items-center space-x-2"
          style={{ backgroundColor: "var(--primary)" }}
          aria-label={`Register for ${event.title}`}
        >
          <span>Register Now</span>
        </button>
      </div>
    </article>
  );
}
