import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Banknote, Lightbulb, AlertTriangle, Briefcase, ChevronRight, ArrowRight, Sun, Moon, NotebookPen } from "lucide-react";
import { plans } from "../data";
import { useTheme } from "../ThemeContext";

function BulletList({ text, color, textColor }) {
  const items = text.split(". ").map(s => s.replace(/\.$/, "").trim()).filter(Boolean);
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: textColor, lineHeight: 1.6 }}>
          <span style={{ marginTop: "6px", width: "6px", height: "6px", borderRadius: "50%", background: color, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

const colorConfig = {
  blue: {
    gradientHeader: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    badgeBg: "#dbeafe",
    badgeText: "#1d4ed8",
    backColor: "#3b82f6",
    tabActiveColor: "#1d4ed8",
    tabActiveBorder: "#bfdbfe",
    tabHoverBg: "#eff6ff",
    tabHoverBgDark: "#1e3a5f",
    dotActive: "#3b82f6",
    iconBg: "#dbeafe",
    iconBgDark: "#1e3a5f",
    iconColor: "#2563eb",
  },
  emerald: {
    gradientHeader: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    badgeBg: "#d1fae5",
    badgeText: "#065f46",
    backColor: "#10b981",
    tabActiveColor: "#065f46",
    tabActiveBorder: "#a7f3d0",
    tabHoverBg: "#f0fdf4",
    tabHoverBgDark: "#052e16",
    dotActive: "#10b981",
    iconBg: "#d1fae5",
    iconBgDark: "#052e16",
    iconColor: "#059669",
  },
  violet: {
    gradientHeader: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    badgeBg: "#ede9fe",
    badgeText: "#5b21b6",
    backColor: "#8b5cf6",
    tabActiveColor: "#5b21b6",
    tabActiveBorder: "#ddd6fe",
    tabHoverBg: "#faf5ff",
    tabHoverBgDark: "#2e1065",
    dotActive: "#8b5cf6",
    iconBg: "#ede9fe",
    iconBgDark: "#2e1065",
    iconColor: "#7c3aed",
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

function OptionCard({ option, plan }) {
  const { theme, mode } = useTheme();
  const c = colorConfig[plan.color];
  const iconBg = mode === "dark" ? c.iconBgDark : c.iconBg;

  return (
    <div style={{
      background: theme.cardBg,
      borderRadius: "20px",
      border: `1px solid ${theme.cardBorder}`,
      overflow: "hidden",
      boxShadow: mode === "dark" ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.06)",
    }}>
      {/* Gradient header */}
      <div style={{ background: c.gradientHeader, padding: "36px 40px" }}>
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
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(255,255,255,0.15)", color: "white",
            fontSize: "12px", fontWeight: 600, padding: "8px 16px",
            borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
          }}>
            <Briefcase size={13} />
            {option.sector}
          </span>
        </div>
      </div>

      {/* Meta row */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "24px",
        padding: "20px 40px",
        background: theme.metaRowBg,
        borderBottom: `1px solid ${theme.metaRowBorder}`,
      }}>
        {[
          { icon: <Banknote size={16} style={{ color: c.iconColor }} />, label: "Salary range", value: option.salaryRange },
          { icon: <Clock size={16} style={{ color: c.iconColor }} />, label: "Time to entry", value: option.timeToEntry },
          ...(option.nextSteps ? [{ icon: <ArrowRight size={16} style={{ color: c.iconColor }} />, label: "Next steps", value: option.nextSteps }] : []),
        ].map((item, i, arr) => (
          <>
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: "10px", color: theme.textSecondary, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" }}>{item.label}</p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: theme.textPrimary, margin: 0 }}>{item.value}</p>
              </div>
            </div>
            {i < arr.length - 1 && <div key={`div-${i}`} style={{ width: "1px", background: theme.metaRowBorder, alignSelf: "stretch" }} />}
          </>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: "36px 40px" }}>
        <p style={{ fontSize: "16px", color: theme.summaryText, lineHeight: 1.8, marginBottom: "32px" }}>
          {option.summary}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          <div style={{ background: theme.greenCardBg, border: `1px solid ${theme.greenCardBorder}`, borderRadius: "16px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: theme.greenCardBorder, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Lightbulb size={15} style={{ color: "#16a34a" }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: theme.greenCardText, textTransform: "uppercase", letterSpacing: "0.1em" }}>Why it works</span>
            </div>
            <BulletList text={option.whyIt} color="#16a34a" textColor={theme.textMuted} />
          </div>

          <div style={{ background: theme.amberCardBg, border: `1px solid ${theme.amberCardBorder}`, borderRadius: "16px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: theme.amberCardBorder, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AlertTriangle size={15} style={{ color: "#d97706" }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: theme.amberCardText, textTransform: "uppercase", letterSpacing: "0.1em" }}>Considerations</span>
            </div>
            <BulletList text={option.considerations} color="#d97706" textColor={theme.textMuted} />
          </div>
        </div>

        {/* Reflections and Conclusions */}
        {option.reflections && (
          <div style={{
            marginTop: "16px",
            background: theme.reflectionsCardBg,
            border: `1px solid ${theme.reflectionsCardBorder}`,
            borderRadius: "16px",
            padding: "24px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: theme.reflectionsIconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <NotebookPen size={15} style={{ color: theme.reflectionsIconColor }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: theme.reflectionsText, textTransform: "uppercase", letterSpacing: "0.1em" }}>Reflections & Conclusions</span>
            </div>
            <BulletList text={option.reflections} color={theme.reflectionsIconColor} textColor={theme.textMuted} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlanPage() {
  const { id } = useParams();
  const plan = plans[id];
  const [active, setActive] = useState(0);
  const { theme, mode } = useTheme();

  if (!plan) {
    return (
      <div style={{ minHeight: "100vh", background: theme.pageBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: theme.textSecondary }}>Plan not found.</p>
      </div>
    );
  }

  const c = colorConfig[plan.color];
  const tabHoverBg = mode === "dark" ? c.tabHoverBgDark : c.tabHoverBg;
  const tabActiveBg = mode === "dark" ? (c.tabHoverBgDark) : "white";

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg }}>
      {/* Top nav */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: theme.navBg,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.navBorder}`,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "14px", fontWeight: 600, color: c.backColor,
              textDecoration: "none", padding: "6px 14px", borderRadius: "10px", transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = tabHoverBg}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <ArrowLeft size={16} />
            All plans
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px" }}>
        {/* Page header */}
        <div style={{ marginBottom: "48px" }}>
          <span style={{
            display: "inline-block", background: c.badgeBg, color: c.badgeText,
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: "999px", marginBottom: "16px",
          }}>
            {plan.label}
          </span>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900,
            color: theme.textPrimary, margin: "0 0 8px",
            letterSpacing: "-1.5px", lineHeight: 1.1,
          }}>
            {plan.title}
          </h1>
          <p style={{ fontSize: "14px", fontWeight: 600, color: c.backColor, margin: 0 }}>
            {plan.tagline}
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "32px", alignItems: "start" }}>

          {/* Sidebar */}
          <div style={{
            background: theme.sidebarBg, borderRadius: "20px",
            border: `1px solid ${theme.sidebarBorder}`, overflow: "hidden",
            boxShadow: mode === "dark" ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.04)",
            position: "sticky", top: "80px",
          }}>
            <div style={{ padding: "8px" }}>
              {plan.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "14px 18px", borderRadius: "12px",
                    border: active === i ? `1px solid ${c.tabActiveBorder}` : "1px solid transparent",
                    background: active === i ? tabActiveBg : "transparent",
                    cursor: "pointer", textAlign: "left",
                    marginBottom: i < plan.options.length - 1 ? "4px" : 0,
                    transition: "all 0.15s ease",
                    boxShadow: active === i ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  }}
                  onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = tabHoverBg; }}
                  onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
                >
                  <div>
                    <div style={{
                      fontSize: "10px", fontWeight: 700,
                      color: active === i ? c.tabActiveColor : theme.textSecondary,
                      textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px",
                    }}>
                      Option {i + 1}
                    </div>
                    <div style={{
                      fontSize: "13px", fontWeight: 700, lineHeight: 1.3,
                      color: active === i ? c.tabActiveColor : theme.textSecondary,
                    }}>
                      {opt.title}
                    </div>
                  </div>
                  {active === i && <ChevronRight size={14} style={{ color: c.tabActiveColor, flexShrink: 0 }} />}
                </button>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${theme.divider}`, padding: "16px", display: "flex", justifyContent: "center", gap: "8px" }}>
              {plan.options.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    height: "6px", width: active === i ? "20px" : "6px",
                    borderRadius: "999px",
                    background: active === i ? c.dotActive : theme.sidebarDotInactive,
                    border: "none", cursor: "pointer", padding: 0,
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
