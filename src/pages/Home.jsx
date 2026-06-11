import { plans, planOrder } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const colorConfig = {
  blue: {
    gradientBar: "linear-gradient(135deg, #3b82f6, #2563eb)",
    badgeBg: "#dbeafe",
    badgeText: "#1d4ed8",
    taglineColor: "#2563eb",
    dotColor: "#93c5fd",
    arrowColor: "#3b82f6",
    borderHover: "#93c5fd",
  },
  emerald: {
    gradientBar: "linear-gradient(135deg, #10b981, #059669)",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
    taglineColor: "#059669",
    dotColor: "#6ee7b7",
    arrowColor: "#10b981",
    borderHover: "#6ee7b7",
  },
  violet: {
    gradientBar: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    badgeBg: "#ede9fe",
    badgeText: "#5b21b6",
    taglineColor: "#7c3aed",
    dotColor: "#c4b5fd",
    arrowColor: "#8b5cf6",
    borderHover: "#c4b5fd",
  },
};

function PlanCard({ plan }) {
  const c = colorConfig[plan.color];

  return (
    <Link
      to={`/plan/${plan.id}`}
      style={{ textDecoration: "none" }}
      className="group block"
    >
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

        <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Badge + arrow */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
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
            <ArrowRight size={18} style={{ color: c.arrowColor, opacity: 0.5, transition: "opacity 0.2s" }} />
          </div>

          {/* Title */}
          <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px", lineHeight: 1.2 }}>
            {plan.title}
          </h2>
          <p style={{ fontSize: "14px", fontWeight: 600, color: c.taglineColor, margin: "0 0 16px" }}>
            {plan.tagline}
          </p>
          <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, flex: 1, margin: 0 }}>
            {plan.description}
          </p>

          {/* Footer */}
          <div style={{
            marginTop: "28px",
            paddingTop: "20px",
            borderTop: "1px solid #f1f5f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>
              {plan.options.length} options
            </span>
            <div style={{ display: "flex", gap: "6px" }}>
              {plan.options.map((_, i) => (
                <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c.dotColor }} />
              ))}
            </div>
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
          <span style={{
            display: "inline-block",
            background: "#f1f5f9",
            color: "#64748b",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 18px",
            borderRadius: "999px",
            marginBottom: "28px",
          }}>
            Career Planning
          </span>

          <h1 style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 900,
            color: "#0f172a",
            margin: "0 0 12px",
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}>
            What comes<br />
            <span style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              next?
            </span>
          </h1>

          <p style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.7, margin: "24px 0 0" }}>
            Three paths — from the familiar to the fully authentic.<br />
            Each one is worth exploring.
          </p>
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
