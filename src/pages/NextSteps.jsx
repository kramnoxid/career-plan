import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, GripVertical, Sun, Moon } from "lucide-react";
import { plans, planOrder } from "../data";
import { useTheme } from "../ThemeContext";

const planColors = {
  blue:   { bg: "#3b82f6", light: "#dbeafe", text: "#1d4ed8", dark: "#1e3a5f" },
  emerald:{ bg: "#10b981", light: "#d1fae5", text: "#065f46", dark: "#052e16" },
  violet: { bg: "#8b5cf6", light: "#ede9fe", text: "#5b21b6", dark: "#2e1065" },
  amber:  { bg: "#f59e0b", light: "#fef3c7", text: "#92400e", dark: "#1c1003" },
};

function buildSteps() {
  const steps = [];
  planOrder.forEach(planId => {
    const plan = plans[planId];
    plan.options.forEach(option => {
      if (!option.nextSteps) return;
      const items = option.nextSteps
        .split(". ")
        .map(s => s.replace(/\.$/, "").trim())
        .filter(Boolean);
      items.forEach((text, i) => {
        steps.push({
          id: `${planId}-${option.title}-${i}`,
          planId,
          planLabel: plan.label,
          planTitle: plan.title,
          planColor: plan.color,
          optionTitle: option.title,
          text,
        });
      });
    });
  });
  return steps;
}

function ThemeToggle() {
  const { mode, toggle, theme } = useTheme();
  return (
    <button
      onClick={toggle}
      style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "8px 16px", borderRadius: "999px",
        border: `1px solid ${theme.cardBorder}`,
        background: theme.cardBg, color: theme.textSecondary,
        cursor: "pointer", fontSize: "13px", fontWeight: 600,
      }}
    >
      {mode === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export default function NextSteps() {
  const { theme, mode } = useTheme();
  const defaultSteps = buildSteps();

  const [steps, setSteps] = useState(() => {
    try {
      const saved = localStorage.getItem("nextStepsOrder");
      if (saved) {
        const savedIds = JSON.parse(saved);
        const stepMap = Object.fromEntries(defaultSteps.map(s => [s.id, s]));
        const ordered = savedIds.map(id => stepMap[id]).filter(Boolean);
        const newSteps = defaultSteps.filter(s => !savedIds.includes(s.id));
        return [...ordered, ...newSteps];
      }
    } catch {}
    return defaultSteps;
  });

  useEffect(() => {
    localStorage.setItem("nextStepsOrder", JSON.stringify(steps.map(s => s.id)));
  }, [steps]);

  const dragIndex = useRef(null);
  const dragOverIndex = useRef(null);

  function onDragStart(i) {
    dragIndex.current = i;
  }

  function onDragOver(e, i) {
    e.preventDefault();
    dragOverIndex.current = i;
  }

  function onDrop() {
    const from = dragIndex.current;
    const to = dragOverIndex.current;
    if (from === null || to === null || from === to) return;
    const updated = [...steps];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setSteps(updated);
    dragIndex.current = null;
    dragOverIndex.current = null;
  }

  return (
    <div style={{ minHeight: "100vh", background: theme.pageBg }}>
      {/* Nav */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: theme.navBg, backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.navBorder}`,
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            fontSize: "14px", fontWeight: 600, color: theme.textSecondary,
            textDecoration: "none", padding: "6px 14px", borderRadius: "10px",
          }}>
            <ArrowLeft size={16} />
            All plans
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 32px" }}>
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
            color: theme.textPrimary, margin: "0 0 8px",
            letterSpacing: "-1.5px", lineHeight: 1.1,
          }}>
            Next Steps
          </h1>
          <p style={{ fontSize: "14px", color: theme.textSecondary, margin: 0 }}>
            Drag to reorder by priority. Your order is saved automatically.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
          {planOrder.map(planId => {
            const plan = plans[planId];
            const c = planColors[plan.color];
            return (
              <span key={planId} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "5px 12px", borderRadius: "999px",
                background: mode === "dark" ? c.dark : c.light,
                color: mode === "dark" ? c.bg : c.text,
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: c.bg }} />
                {plan.label} — {plan.title}
              </span>
            );
          })}
        </div>

        {/* Steps list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {steps.map((step, i) => {
            const c = planColors[step.planColor];
            const bgColor = mode === "dark" ? c.dark : c.light;
            const textColor = mode === "dark" ? c.bg : c.text;
            const borderColor = mode === "dark" ? c.bg + "40" : c.bg + "60";

            return (
              <div
                key={step.id}
                draggable
                onDragStart={() => onDragStart(i)}
                onDragOver={e => onDragOver(e, i)}
                onDrop={onDrop}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                  cursor: "grab",
                  transition: "box-shadow 0.15s, transform 0.15s",
                  userSelect: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <GripVertical size={16} style={{ color: textColor, opacity: 0.4, flexShrink: 0 }} />

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                    <span style={{
                      fontSize: "10px", fontWeight: 800,
                      color: textColor, textTransform: "uppercase",
                      letterSpacing: "0.08em", opacity: 0.7,
                    }}>
                      {step.planLabel}
                    </span>
                    <span style={{ fontSize: "10px", color: textColor, opacity: 0.5 }}>·</span>
                    <span style={{
                      fontSize: "10px", fontWeight: 600,
                      color: textColor, opacity: 0.7,
                    }}>
                      {step.optionTitle}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: textColor, lineHeight: 1.5 }}>
                    {step.text}
                  </p>
                </div>

                <span style={{
                  width: "10px", height: "10px", borderRadius: "50%",
                  background: c.bg, flexShrink: 0, opacity: 0.6,
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
