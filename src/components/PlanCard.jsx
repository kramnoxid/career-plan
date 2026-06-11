import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlanCard({ plan }) {
  const colorMap = {
    blue: {
      border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-100 text-blue-700",
      arrow: "text-blue-500",
      accent: "bg-blue-500",
      glow: "hover:shadow-blue-100",
    },
    emerald: {
      border: "border-emerald-200 hover:border-emerald-400",
      badge: "bg-emerald-100 text-emerald-700",
      arrow: "text-emerald-500",
      accent: "bg-emerald-500",
      glow: "hover:shadow-emerald-100",
    },
    violet: {
      border: "border-violet-200 hover:border-violet-400",
      badge: "bg-violet-100 text-violet-700",
      arrow: "text-violet-500",
      accent: "bg-violet-500",
      glow: "hover:shadow-violet-100",
    },
  };

  const c = colorMap[plan.color];

  return (
    <Link
      to={`/plan/${plan.id}`}
      className={`group relative flex flex-col rounded-2xl border-2 ${c.border} bg-white p-8 shadow-sm hover:shadow-xl ${c.glow} transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${c.badge}`}>
          {plan.label}
        </span>
        <ArrowRight className={`w-5 h-5 ${c.arrow} opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1`} />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-1">{plan.title}</h2>
      <p className={`text-sm font-medium mb-4`} style={{ color: plan.accent }}>{plan.tagline}</p>
      <p className="text-slate-500 text-sm leading-relaxed flex-1">{plan.description}</p>

      <div className="mt-6 flex items-center gap-2">
        <span className={`text-xs font-medium ${c.arrow}`}>
          {plan.options.length} options to explore
        </span>
        <div className="flex gap-1">
          {plan.options.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${c.accent} opacity-60`} />
          ))}
        </div>
      </div>
    </Link>
  );
}
