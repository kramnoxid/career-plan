import { plans, planOrder } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const colorConfig = {
  blue: {
    gradientBar: "linear-gradient(135deg, #3b82f6, #2563eb)",
    badgeBg: "#dbeafe",
    badgeText: "#1d4ed8",
    taglineColor: "#2563eb",
    dotColor: "#93c5fd",
    arrowColor: "#3b82f6",
    borderHover: "#93c5fd",
    jobBullet: "#3b82f6",
    jobHoverBg: "#eff6ff",
  },
  emerald: {
    gradientBar: "linear-gradient(135deg, #10b981, #059669)",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
    taglineColor: "#059669",
    dotColor: "#6ee7b7",
    arrowColor: "#10b981",
    borderHover: "#6ee7b7",
    jobBullet: "#10b981",
    jobHoverBg: "#f0fdf4",
  },
  violet: {
    gradientBar: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    badgeBg: "#ede9fe",
    badgeText: "#5b21b6",
    taglineColor: "#7c3aed",
    dotColor: "#c4b5fd",
    arrowColor: "#8b5cf6",
    borderHover: "#c4b5fd",
    jobBullet: "#8b5cf6",
    jobHoverBg: "#faf5ff",
  },
};

function PlanCard({ plan }) {
  const c = colorConfig[plan.color];
  const activeOptions = plan.options.filter(o => !o._hidden);

  return (
    <Link to={`/plan/${plan.id}`} style={{ textDecoration: "none" }} className="group block">
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          border: "2px solid #e2e8f0",
          transition: "all 0.25s ease",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = c.borderHover;
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.10)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#e2e8f0";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Gradient top bar */}
        <div style={{ height: "6px", background: c.gradientBar }} />

        <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Badge + arrow */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <span style={{
              background: c.badgeBg,
              color: c.badgeText,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "999px",
            }}>
              {plan.label}
            </span>
            <ArrowRight size={18} style={{ color: c.arrowColor, opacity: 0.5 }} />
          </div>

          {/* Title */}
          <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px", lineHeight: 1.25 }}>
            {plan.title}
          </h2>

          {/* Tagline in accent colour */}
          <p style={{ fontSize: "13px", fontWeight: 600, color: c.taglineColor, margin: "0 0 20px", lineHeight: 1.5 }}>
            {plan.tagline}
          </p>

          {/* Job list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
            {activeOptions.map((opt, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 10px",
                borderRadius: "10px",
                transition: "background 0.15s",
              }}>
                <div style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: c.jobBullet,
                  flexShrink: 0,
                  opacity: 0.7,
                }} />
                <span style={{ fontSize: "13px", color: "#374151", fontWeight: 500 }}>
                  {opt.title}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid #f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "4px",
          }}>
            <span style={{ fontSize: "12px", color: c.taglineColor, fontWeight: 600 }}>Explore all options</span>
            <ChevronRight size={13} style={{ color: c.taglineColor }} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Hero */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        padding: "80px 24px 72px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(52px, 9vw, 96px)",
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-3px",
            background: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Career Design
          </h1>
        </div>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "28px",
        }}>
          {planOrder.map((key) => (
            <PlanCard key={key} plan={plans[key]} />
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: "#cbd5e1", marginTop: "48px" }}>
          Click any plan to explore its options
        </p>
      </div>
    </div>
  );
}
