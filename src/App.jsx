import { useState } from "react";
import {
  AlertTriangle,
  Brain,
  Clock,
  Gauge,
  MessageSquare,
  ShieldAlert,
  Siren,
  Users,
  Zap,
  Activity,
  BarChart3,
  Target,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
  YAxis,
} from "recharts";

const navItems = [
  "Incident Intake",
  "Agent Analysis",
  "Root Cause Engine",
  "AI Recommendations",
  "Executive Summary",
  "Resolution Timeline",
  "Escalation Matrix",
  "Customer Comms AI",
];

const trendData = [
  { day: "Mon", latency: 2.1, fail: 6 },
  { day: "Tue", latency: 2.5, fail: 7 },
  { day: "Wed", latency: 2.8, fail: 11 },
  { day: "Thu", latency: 2.4, fail: 8 },
  { day: "Fri", latency: 2.0, fail: 5 },
];

const confidenceData = [
  { name: "Prompt Routing", value: 87 },
  { name: "Retrieval Latency", value: 76 },
  { name: "Vector Timeout", value: 64 },
  { name: "Model Saturation", value: 58 },
];
const agentHealth = [
  { metric: "Prompt Accuracy", score: "91%" },
  { metric: "Avg Token Delay", score: "1.8s" },
  { metric: "Fallback Usage", score: "12%" },
  { metric: "Embedding Recall", score: "88%" },
];

const rootCauseFindings = [
  "Primary failure source traced to retrieval latency spike in vector database cluster.",
  "Secondary degradation caused by prompt queue saturation during customer peak load.",
  "No evidence of core model outage; inference nodes remain stable.",
  "AI confidence indicates infrastructure bottleneck rather than model hallucination.",
];

const aiActions = [
  "Shift customer prompt traffic to low-latency backup retrieval region.",
  "Temporarily reduce embedding refresh intervals to stabilize search throughput.",
  "Trigger reliability engineering escalation and SLA protection workflow.",
  "Issue customer-facing executive communication with 30-minute update cadence.",
];

const timelineEvents = [
  "08:42 AM — Customer Success reports abnormal AI assistant delays.",
  "08:51 AM — Monitoring agent flags retrieval latency above SLA threshold.",
  "09:03 AM — Root Cause Engine identifies vector timeout concentration.",
  "09:14 AM — AI Recommendations generated remediation sequence.",
  "09:20 AM — Customer Comms AI drafts executive status update.",
];

const escalationOwners = [
  { owner: "Reliability Lead", sla: "15 min", level: "Critical" },
  { owner: "AI Platform Engineer", sla: "30 min", level: "High" },
  { owner: "Customer Success Director", sla: "45 min", level: "Moderate" },
  { owner: "Executive Sponsor", sla: "60 min", level: "Standby" },
];
export default function App() {
  const [active, setActive] = useState("Incident Intake");
const renderWorkspace = () => {
    if (active === "Agent Analysis") return <AgentAnalysis />;
    if (active === "Root Cause Engine") return <RootCauseEngine />;
    if (active === "AI Recommendations") return <AIRecommendations />;
    if (active === "Executive Summary") return <ExecutiveSummary />;
    if (active === "Resolution Timeline") return <ResolutionTimeline />;
    if (active === "Escalation Matrix") return <EscalationMatrix />;
    if (active === "Customer Comms AI") return <CustomerCommsAI />;
    return <IncidentIntake />;
  };

  return (
    <div className="min-h-screen bg-slate-100 flex text-slate-900">
      <aside className="w-72 bg-[#020826] text-white min-h-screen px-5 py-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-white text-black p-3 rounded-2xl">
            <Brain size={26} />
          </div>
          <div>
            <h1 className="font-bold text-2xl leading-tight">AI Incident Coach</h1>
            <p className="text-slate-300 text-sm mt-1">Enterprise Resolution System</p>
          </div>
        </div>

        <div className="space-y-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition ${
                active === item
                  ? "bg-white text-black"
                  : "hover:bg-slate-800 text-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 bg-[#09123d] rounded-2xl p-4 text-slate-200 text-sm leading-6">
          <div className="font-bold mb-2">PORTFOLIO DEMO</div>
          React + Tailwind + Recharts + Vercel SaaS simulation of AI incident triage,
          observability monitoring, customer communication generation, and executive response workflows.
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {renderWorkspace()}
      </main>
    </div>      
  );
}

function CommandCard({ icon, title, value, dark }) {
  return (
    <div
      className={`${
        dark ? "bg-[#020826] text-white" : "bg-white"
      } rounded-3xl shadow-md p-5 border border-slate-200`}
    >
      <div className="mb-3">{icon}</div>
      <p className="text-slate-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-slate-100 rounded-2xl p-4">
      <p className="text-slate-500 text-sm">{title}</p>
      <h3 className="font-bold text-base">{value}</h3>
    </div>
  );
}