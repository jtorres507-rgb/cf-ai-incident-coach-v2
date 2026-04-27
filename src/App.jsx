import { useState } from "react";
import {
  AlertTriangle,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  Gauge,
  Lightbulb,
  MessageSquare,
  ShieldAlert,
  Siren,
  Terminal,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const navItems = [
  "Incident Intake",
  "Root Cause Engine",
  "AI Recommendations",
  "Executive Summary",
  "Resolution Timeline",
];

const incident = {
  id: "INC-AI-0427",
  customer: "Enterprise Logistics Co.",
  severity: "High",
  status: "Active Investigation",
  productArea: "AI Workflow Assistant",
  reportedBy: "Customer Success Team",
  timeOpen: "47 minutes",
  affectedUsers: "1,240",
  summary:
    "Customer reports degraded AI workflow recommendations and delayed assistant responses across operations support teams.",
};

const signals = [
  { label: "Latency Spike", value: "2.8s", status: "High", icon: Clock },
  { label: "Prompt Failure Rate", value: "11%", status: "Elevated", icon: AlertTriangle },
  { label: "Affected Users", value: "1.2K", status: "Wide Impact", icon: Users },
  { label: "Confidence Score", value: "87%", status: "Strong", icon: Gauge },
];

const rootCauses = [
  {
    title: "Knowledge base retrieval mismatch",
    confidence: "87%",
    detail:
      "Recent policy content update may have reduced retrieval precision for logistics workflow prompts.",
  },
  {
    title: "Prompt template regression",
    confidence: "72%",
    detail:
      "Support workflow prompts may be missing required customer context variables after latest release.",
  },
  {
    title: "Rate limiting during peak usage",
    confidence: "64%",
    detail:
      "Usage volume exceeded expected operating range during customer support surge window.",
  },
];

const recommendations = [
  "Rollback latest prompt template changes for logistics workflow assistant.",
  "Run retrieval test set against updated knowledge base documents.",
  "Temporarily increase request queue capacity during peak support hours.",
  "Notify customer success owner with executive-ready incident summary.",
  "Schedule post-incident review to improve monitoring and release validation.",
];

const timeline = [
  { time: "09:12", event: "Customer reported degraded AI recommendations." },
  { time: "09:18", event: "Incident classified as High severity due to broad user impact." },
  { time: "09:31", event: "Root cause analysis identified retrieval mismatch as primary suspect." },
  { time: "09:44", event: "AI recommendation engine generated remediation plan." },
  { time: "09:59", event: "Customer-facing summary drafted for success team review." },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="hidden min-h-screen w-72 bg-slate-950 p-6 text-white lg:block">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-white p-3 text-slate-950">
          <Brain size={26} />
        </div>
        <div>
          <h1 className="text-xl font-bold">AI Incident Coach</h1>
          <p className="text-sm text-slate-400">Enterprise Resolution System</p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {navItems.map((item) => {
          const active = activePage === item;

          return (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                active
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item}
            </button>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-xs font-semibold uppercase text-slate-400">
          Portfolio Demo
        </p>
        <p className="mt-2 text-sm text-slate-300">
          Simulates AI incident triage, root cause analysis, remediation planning,
          and customer communication workflows.
        </p>
      </div>
    </aside>
  );
}

function StatusPill({ value }) {
  const styles = {
    High: "bg-red-100 text-red-700",
    Elevated: "bg-amber-100 text-amber-700",
    "Wide Impact": "bg-red-100 text-red-700",
    Strong: "bg-emerald-100 text-emerald-700",
    Active: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${
        styles[value] || "bg-slate-100 text-slate-700"
      }`}
    >
      {value}
    </span>
  );
}

function SignalCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-slate-100 p-3">
          <Icon size={23} />
        </div>
        <StatusPill value={item.status} />
      </div>
      <p className="mt-5 text-sm text-slate-500">{item.label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-950">{item.value}</p>
    </div>
  );
}

function IncidentIntake() {
  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              {incident.id}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{incident.customer}</h2>
            <p className="mt-2 max-w-4xl text-slate-600">{incident.summary}</p>
          </div>

          <div className="flex gap-3">
            <StatusPill value={incident.severity} />
            <StatusPill value="Active" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Product Area</p>
            <p className="font-bold">{incident.productArea}</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Reported By</p>
            <p className="font-bold">{incident.reportedBy}</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Time Open</p>
            <p className="font-bold">{incident.timeOpen}</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Affected Users</p>
            <p className="font-bold">{incident.affectedUsers}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {signals.map((item) => (
          <SignalCard key={item.label} item={item} />
        ))}
      </div>
    </>
  );
}

function RootCauseEngine() {
  return (
    <div className="grid gap-6">
      {rootCauses.map((cause) => (
        <div
          key={cause.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">{cause.title}</h2>
              <p className="mt-2 text-slate-600">{cause.detail}</p>
            </div>

            <div className="rounded-xl bg-slate-950 px-5 py-3 text-white">
              Confidence: {cause.confidence}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AIRecommendations() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Lightbulb />
          <h2 className="text-2xl font-bold">Recommended Remediation Plan</h2>
        </div>

        <div className="mt-5 space-y-4">
          {recommendations.map((item) => (
            <div key={item} className="rounded-xl bg-slate-100 p-4 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
        <Zap size={28} />
        <h2 className="mt-4 text-2xl font-bold">AI Action Priority</h2>
        <p className="mt-2 text-slate-300">
          The system recommends prioritizing retrieval validation first because
          it has the highest confidence score and broadest user impact.
        </p>

        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <p>✅ Validate knowledge base retrieval quality</p>
          <p>✅ Compare prompt template versions</p>
          <p>✅ Monitor latency after rollback</p>
          <p>✅ Draft customer communication</p>
        </div>
      </div>
    </div>
  );
}

function ExecutiveSummary() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <FileText />
          <h2 className="text-2xl font-bold">Executive Incident Summary</h2>
        </div>

        <p className="mt-5 text-slate-700">
          Enterprise Logistics Co. experienced degraded AI workflow recommendations
          and delayed assistant responses impacting approximately 1,240 users.
          Initial analysis indicates a likely knowledge base retrieval mismatch
          following a recent content update. The recommended remediation plan is to
          validate retrieval quality, rollback impacted prompt templates, monitor
          latency, and provide customer-facing updates through the success team.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <MessageSquare />
          <h2 className="text-2xl font-bold">Customer Communication Draft</h2>
        </div>

        <p className="mt-5 text-slate-700">
          Our team has identified the likely source of the degraded recommendations
          and is actively validating the affected workflow. We are applying a
          remediation plan focused on retrieval quality, response latency, and prompt
          consistency. We will provide the next update after validation is complete.
        </p>
      </div>
    </div>
  );
}

function ResolutionTimeline() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Workflow />
        <h2 className="text-2xl font-bold">Resolution Timeline</h2>
      </div>

      <div className="mt-6 space-y-4">
        {timeline.map((item) => (
          <div key={item.time} className="flex gap-4 rounded-xl bg-slate-100 p-4">
            <div className="font-bold text-slate-950">{item.time}</div>
            <div className="text-slate-700">{item.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Incident Intake");

  const renderPage = () => {
    if (activePage === "Root Cause Engine") return <RootCauseEngine />;
    if (activePage === "AI Recommendations") return <AIRecommendations />;
    if (activePage === "Executive Summary") return <ExecutiveSummary />;
    if (activePage === "Resolution Timeline") return <ResolutionTimeline />;
    return <IncidentIntake />;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 lg:flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 p-6 md:p-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            AI Incident Resolution Portfolio Project
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{activePage}</h1>

          <p className="mt-3 max-w-4xl text-slate-600">
            Enterprise AI incident response platform for triaging customer issues,
            surfacing root causes, generating remediation steps, and producing
            executive-ready customer communication.
          </p>
        </div>

        {renderPage()}

        <footer className="mt-10 text-sm text-slate-500">
          Built with React, Vite, Tailwind CSS, GitHub, and Vercel.
        </footer>
      </main>
    </div>
  );
}