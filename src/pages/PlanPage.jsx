import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Banknote, Lightbulb, AlertTriangle, Briefcase, ChevronRight } from "lucide-react";
import { plans } from "../data";

const colorConfig = {
  blue: {
    gradientBar: "linear-gradient(135deg, #3b82f6, #2563eb)",
    gradientHeader: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    badgeBg: "#dbeafe",
    badgeText: "#1d4ed8",
    backColor: "#2563eb",
    tabActiveBg: "white",
    tabActiveColor: "#1d4ed8",
    tabActiveBorder: "#bfdbfe",
    tabInactiveColor: "#64748b",
    tabHoverBg: "#f0f9ff",
    dotActive: "#3b82f6",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
  },
  emerald: {
    gradientBar: "linear-gradient(135deg, #10b981, #059669)",
    gradientHeader: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
    backColor: "#059669",
    tabActiveBg: "white",
    tabActiveColor: "#065f46",
    tabActiveBorder: "#a7f3d0",
    tabInactiveColor: "#64748b",
    tabHoverBg: "#f0fdf4",
    dotActive: "#10b981",
    iconBg: "#d1fae5",
    iconColor: "#059669",
  },
  violet: {
    gradientBar: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    gradientHeader: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    badgeBg: "#ede9fe",
    badgeText: "#5b21b6",
    backColor: "#7c3aed",
    tabActiveBg: "white",
    tabActiveColor: "#5b21b6",
    tabActiveBorder: "#ddd6fe",
    tabInactiveColor: "#64748b",
    tabHoverBg: "#faf5ff",
    dotActive: "#8b5cf6",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
  },
};

function OptionCard({ option, plan }) {
  const c = colorConfig[plan.color];

  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      border: "1px solid #e2e8f0",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    }}>
      {/* Gradient header */}
      <div style={{
        background: c.gradientHeader,
        padding: "36px 40px",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 8px" }}>
              Role
            </p>
            <h3 style={{ color: "white", fontSize: "28px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
              {option.title}
            </h3>
          </div>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            fontSize: "12px",
            fontWeight: 600,
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
          }}>
            <Briefcase size={13} />
            {option.sector}
          </span>
        </div>
      </div>

      {/* Meta row */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        padding: "20px 40px",
        background: "#f8fafc",
        borderBottom: "1px solid #e2e8f0",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: c.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Banknote size={16} style={{ color: c.iconColor }} />
          </div>
          <div>
            <p style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" }}>Salary range</p>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#1e293b", margin: 0 }}>{option.salaryRange}</p>
          </div>
        </div>
        <div style={{ width: "1px", background: "#e2e8f0", alignSelf: "stretch" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: c.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Clock size={16} style={{ color: c.iconColor }} />
          </div>
          <div>
            <p style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" }}>Time to entry</p>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#1e293b", margin: 0 }}>{option.timeToEntry}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "36px 40px" }}>
        <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "32px" }}>
          {option.summary}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          <div style={{
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "16px",
            padding: "24px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Lightbulb size={15} style={{ color: "#16a34a" }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#15803d", textTransform: "uppercase", letterSpacing: "0.1em" }}>Why it works</span>
            </div>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, margin: 0 }}>{option.whyIt}</p>
          </div>

          <div style={{
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "16px",
            padding: "24px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AlertTriangle size={15} style={{ color: "#d97706" }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#b45309", textTransform: "uppercase", letterSpacing: "0.1em" }}>Considerations</span>
            </div>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, margin: 0 }}>{option.considerations}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlanPage() {
  const { id } = useParams();
  const plan = plans[id];
  const [active, setActive] = useState(0);

  if (!plan) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#94a3b8" }}>Plan not found.</p>
      </div>
    );
  }

  const c = colorConfig[plan.color];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Top nav */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e2e8f0",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", height: "60px", display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 600,
              color: c.backColor,
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: "10px",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f1f5f9"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <ArrowLeft size={16} />
            All plans
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px" }}>
        {/* Page header */}
        <div style={{ marginBottom: "48px" }}>
          <span style={{
            display: "inline-block",
            background: c.badgeBg,
            color: c.badgeText,
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: "999px",
            marginBottom: "16px",
          }}>
            {plan.label}
          </span>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900,
            color: "#0f172a",
            margin: "0 0 12px",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
          }}>
            {plan.title}
          </h1>
          <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
            {plan.description}
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "32px", alignItems: "start" }}>

          {/* Sidebar tabs */}
          <div style={{
            background: "white",
            borderRadius: "20px",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            position: "sticky",
            top: "80px",
          }}>
            <div style={{ padding: "8px" }}>
              {plan.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    border: active === i ? `1px solid ${c.tabActiveBorder}` : "1px solid transparent",
                    background: active === i ? c.tabActiveBg : "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    marginBottom: i < plan.options.length - 1 ? "4px" : 0,
                    transition: "all 0.15s ease",
                    boxShadow: active === i ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  }}
                  onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = c.tabHoverBg; }}
                  onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
                >
                  <div>
                    <div style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: active === i ? c.tabActiveColor : "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "3px",
                    }}>
                      Option {i + 1}
                    </div>
                    <div style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: active === i ? c.tabActiveColor : c.tabInactiveColor,
                      lineHeight: 1.3,
                    }}>
                      {opt.title}
                    </div>
                  </div>
                  {active === i && <ChevronRight size={14} style={{ color: c.tabActiveColor, flexShrink: 0 }} />}
                </button>
              ))}
            </div>

            {/* Progress dots */}
            <div style={{
              borderTop: "1px solid #f1f5f9",
              padding: "16px",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}>
              {plan.options.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    height: "6px",
                    width: active === i ? "20px" : "6px",
                    borderRadius: "999px",
                    background: active === i ? c.dotActive : "#e2e8f0",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main content */}
          <div>
            {plan.options.map((option, i) => (
              <div key={i} style={{ display: active === i ? "block" : "none" }}>
                <OptionCard option={option} plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
