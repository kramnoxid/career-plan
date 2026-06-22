import { plans, planOrder } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

const colorConfig = {
  blue: {
    gradientBar: "linear-gradient(135deg, #3b82f6, #2563eb)",
    badgeBg: "#dbeafe",
    badgeText: "#1d4ed8",
    taglineColor: "#3b82f6",
    dotColor: "#93c5fd",
    arrowColor: "#3b82f6",
    borderHover: "#3b82f6",
    jobBullet: "#3b82f6",
  },
  emerald: {
    gradientBar: "linear-gradient(135deg, #10b981, #059669)",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
    taglineColor: "#10b981",
    dotColor: "#6ee7b7",
    arrowColor: "#10b981",
    borderHover: "#10b981",
    jobBullet: "#10b981",
  },
  violet: {
    gradientBar: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    badgeBg: "#ede9fe",
    badgeText: "#5b21b6",
    taglineColor: "#8b5cf6",
    dotColor: "#c4b5fd",
    arrowColor: "#8b5cf6",
    borderHover: "#8b5cf6",
    jobBullet: "#8b5cf6",
  },
  amber: {
    gradientBar: "linear-gradient(135deg, #f59e0b, #d97706)",
    badgeBg: "#fef3c7",
    badgeText: "#92400e",
    taglineColor: "#d97706",
    dotColor: "#fcd34d",
    arrowColor: "#f59e0b",
    borderHover: "#f59e0b",
    jobBullet: "#f59e0b",
  },
};

function ThemeToggle() {
  const { mode, toggle, theme } = useTheme();
  return (
    <button
      onClick={toggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        borderRadius: "999px",
        border: `1px solid ${theme.cardBorder}`,
        background: theme.cardBg,
        color: theme.textSecondary,
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 600,
        transition: "all 0.2s",
      }}
    >
      {mode === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}

function PlanCard({ plan }) {
  const { theme } = useTheme();
  const c = colorConfig[plan.color];
  const activeOptions = plan.options.filter(o => !o._hidden);

  return (
    <Link to={`/plan/${plan.id}`} style={{ textDecoration: "none" }} className="group block">
      <div
        style={{
          background: theme.cardBg,
          borderRadius: "20px",
          border: `2px solid ${theme.cardBorder}`,
          transition: "all 0.25s ease",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = c.borderHover;
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.20)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = theme.cardBorder;
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ height: "6px", background: c.gradientBar }} />

        <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
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

          <h2 style={{ fontSize: "20px", fontWeight: 800, color: theme.textPrimary, margin: "0 0 6px", lineHeight: 1.25 }}>
            {plan.title}
          </h2>
          <p style={{ fontSize: "13px", fontWeight: 600, color: c.taglineColor, margin: "0 0 20px", lineHeight: 1.5 }}>
            {plan.tagline}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
            {activeOptions.map((opt, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "7px 10px",
                borderRadius: "10px",
              }}>
                <div style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: c.jobBullet,
                  flexShrink: 0,
                  opacity: 0.7,
                }} />
                <span style={{ fontSize: "13px", color: theme.textMuted, fontWeight: 500 }}>
                  {opt.title}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: `1px solid ${theme.divider}`,
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
  const { theme } = useTheme();

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg }}>
      {/* Hero */}
      <div style={{
        background: theme.heroBg,
        borderBottom: `1px solid ${theme.heroBorder}`,
        padding: "20px 24px 16px",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Toggle top-right */}
        <div style={{ position: "absolute", top: "20px", right: "24px" }}>
          <ThemeToggle />
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 900,
          margin: 0,
          lineHeight: 1.05,
          letterSpacing: "-3px",
          paddingBottom: "0.15em",
          background: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Career Design
        </h1>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "28px",
        }}>
          {planOrder.map((key) => (
            <PlanCard key={key} plan={plans[key]} />
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: theme.footerText, marginTop: "48px" }}>
          Click any plan to explore its options
        </p>
      </div>
    </div>
  );
}
