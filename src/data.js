export const plans = {
  a: {
    id: "a",
    label: "Plan A",
    title: "Business as Usual",
    tagline: "Familiar paths, proven tracks to burnout and poor health.",
    color: "blue",
    accent: "#3b82f6",
    bg: "from-blue-50 to-slate-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    description:
      "Conventional roles that leverage existing skills and experience. Lower risk, well-defined trajectories, and clear market demand.",
    options: [
      {
        title: "Senior Project Manager",
        sector: "Corporate / Consulting",
        summary:
          "Lead cross-functional teams to deliver complex projects on time and on budget. A natural evolution for anyone with coordination and stakeholder management experience.",
        whyIt: "High demand, strong salaries, remote-friendly, transferable across industries.",
        considerations: "Can feel process-heavy; success depends heavily on organisational culture.",
        timeToEntry: "0–6 months",
        salaryRange: "£50k–£85k",
        nextSteps: "Refresh CV, contact recruiters, review PM certifications",
      },
      {
        title: "Business Analyst",
        sector: "Tech / Finance / Public Sector",
        summary:
          "Bridge the gap between business needs and technical solutions. Involves requirements gathering, process mapping, and stakeholder communication.",
        whyIt: "Broad applicability, good entry into tech without deep coding skills.",
        considerations: "Role scope varies wildly — can be limiting in bureaucratic environments.",
        timeToEntry: "0–3 months",
        salaryRange: "£40k–£70k",
        nextSteps: "Target job boards, tailor CV to sector, practice SQL basics",
      },
      /*{
        title: "Operations Manager",
        sector: "Retail / Logistics / Healthcare",
        summary:
          "Oversee day-to-day operations, optimise processes, and manage teams to hit organisational goals.",
        whyIt: "Consistent demand, clear progression path to Director level.",
        considerations: "Often office or site-based; high accountability pressure.",
        timeToEntry: "0–6 months",
        salaryRange: "£45k–£75k",
        nextSteps: "Network in target sector, highlight process improvement wins on CV",
      },*/
    ],
  },
  b: {
    id: "b",
    label: "Plan B",
    title: "Aligned Options",
    tagline: "Work that fits who you actually are",
    color: "emerald",
    accent: "#10b981",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    description:
      "Roles that align more closely with personal values, working style, and strengths — without requiring a full reinvention.",
    options: [
      {
        title: "Vessel Traffic Services (VTS) Officer",
        sector: "Spatial / Logistics / Emergency Management",
        summary:
          "A great opportunity has arisen to join Ports Victoria as a casual Vessel Traffic Services (VTS) Officer. The positions (x2) are located at the Port Operations Control Centre (Lorimer Street, Port Melbourne). You will utilise modern technology to monitor, communicate and coordinate the day-to-day movement of vessels, whilst also providing a support function in emergency response arrangements.",
        whyIt: "Karlie said they are looking for peoplle with excellent spatail awaremenss and love to learn. Is in an interest area. Is a casual role.",
        considerations: "How much stakehoolder management is there, and can seensory needs be met. Is the communication of vessels verbal / in person or is it mostly tech based.",
        timeToEntry: "3–9 months",
        salaryRange: "Unknown",
        nextSteps: "Ideally ask if I can shadow a shift to make sure it is a good fit - discuss with Karlie",
      },
      {
        title: "GIS / Geospatial Analyst",
        sector: "Spatial / Environment / Government",
        summary: "Details to come.",
        whyIt: "Details to come.",
        considerations: "Details to come.",
        timeToEntry: "TBC",
        salaryRange: "TBC",
      },
      {
        title: "Learning & Development Specialist",
        sector: "Corporate / Education / Non-profit",
        summary:
          "Design and deliver training programmes that genuinely help people grow. Blends facilitation, curriculum design, and coaching.",
        whyIt: "Directly impactful; suits people who enjoy teaching and seeing others develop.",
        considerations: "Can be under-resourced in some organisations.",
        timeToEntry: "3–6 months",
        salaryRange: "£38k–£65k",
        nextSteps: "Look at CIPD qualifications, volunteer to run internal training",
      },
      {
        title: "Autistic Tour Guide",
        sector: "Tourism / Education / Culture",
        summary: "Details to come.",
        whyIt: "Details to come.",
        considerations: "Details to come.",
        timeToEntry: "TBC",
        salaryRange: "TBC",
      },
      {
        title: "Environmental Water Sampler",
        sector: "Environment / Science / Fieldwork",
        summary: "Details to come.",
        whyIt: "Details to come.",
        considerations: "Details to come.",
        timeToEntry: "TBC",
        salaryRange: "TBC",
      },
      {
        title: "Online Data Analyst (Telus / Peroptyx)",
        sector: "Remote / Tech / Evaluation",
        summary: "Details to come.",
        whyIt: "Details to come.",
        considerations: "Details to come.",
        timeToEntry: "TBC",
        salaryRange: "TBC",
      },
    ],
  },
  c: {
    id: "c",
    label: "Plan C",
    title: "Fully Unmasked",
    tagline: "Built around you, not a job description",
    color: "violet",
    accent: "#8b5cf6",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    description:
      "Paths that prioritise authenticity, deep interest, and personal meaning over convention. May require more courage — but offer the greatest alignment.",
    options: [
      {
        title: "Writer / Content Creator",
        sector: "Independent / Media",
        summary:
          "Build an audience and income around your ideas, experiences, and perspective. Can span newsletters, books, podcasts, or video.",
        whyIt: "Complete creative control; can evolve into speaking, consulting, or products.",
        considerations: "Takes time to build; requires consistency and comfort with visibility.",
        timeToEntry: "6–18 months to sustainability",
        salaryRange: "Variable — £0 to £100k+",
        nextSteps: "Start writing publicly, pick one platform, publish consistently",
      },
      {
        title: "Neurodiversity Advocate / Coach",
        sector: "Education / Healthcare / Corporate",
        summary:
          "Support neurodivergent individuals or organisations in understanding and embracing different ways of thinking and working.",
        whyIt: "Highly meaningful; lived experience is a genuine asset rather than a liability.",
        considerations: "Requires certification/training; emotionally demanding at times.",
        timeToEntry: "6–12 months",
        salaryRange: "£35k–£65k employed; higher self-employed",
        nextSteps: "Research coaching certifications, connect with neurodiversity orgs",
      },
      {
        title: "Solopreneur / Niche Business Owner",
        sector: "Self-directed",
        summary:
          "Build something small, intentional, and entirely yours. Could be a product, service, or community around a specific passion or skill.",
        whyIt: "Radical autonomy; work shaped entirely around your strengths and values.",
        considerations: "Highest risk, highest reward. Requires financial runway and resilience.",
        timeToEntry: "6–24 months",
        salaryRange: "Variable — loss to £200k+",
        nextSteps: "Validate idea with 10 people, build an audience before building a product",
      },
    ],
  },
};

export const planOrder = ["a", "b", "c"];
