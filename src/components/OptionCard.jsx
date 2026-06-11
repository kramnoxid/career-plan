import { Clock, DollarSign, Lightbulb, AlertCircle } from "lucide-react";

export default function OptionCard({ option, plan, isActive }) {
  const colorMap = {
    blue: { tag: "bg-blue-100 text-blue-700", icon: "text-blue-500", bar: "bg-blue-500" },
    emerald: { tag: "bg-emerald-100 text-emerald-700", icon: "text-emerald-500", bar: "bg-emerald-500" },
    violet: { tag: "bg-violet-100 text-violet-700", icon: "text-violet-500", bar: "bg-violet-500" },
  };

  const c = colorMap[plan.color];

  return (
    <div className={`transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none absolute"}`}>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className={`h-1 w-full ${c.bar}`} />
        <div className="p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{option.title}</h3>
              <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${c.tag}`}>
                {option.sector}
              </span>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-slate-400">Salary</span>
                <span className="text-sm font-semibold text-slate-700">{option.salaryRange}</span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-slate-400">Entry time</span>
                <span className="text-sm font-semibold text-slate-700">{option.timeToEntry}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">{option.summary}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className={`w-4 h-4 ${c.icon}`} />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Why it works</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{option.whyIt}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className={`w-4 h-4 text-amber-500`} />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Considerations</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{option.considerations}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
