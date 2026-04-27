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
function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <p className="uppercase text-sm font-bold tracking-widest text-slate-500 mb-2">
        AI INCIDENT RESOLUTION PORTFOLIO PROJECT
      </p>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-slate-600 mt-3 text-lg max-w-5xl leading-8">{subtitle}</p>
    </div>
  );
}

function HealthMonitor() {
  return (
    <div className="bg-[#020826] text-white rounded-2xl px-6 py-5 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <Activity size={22} />
        <span className="font-bold text-lg">AI HEALTH MONITOR</span>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span>Model Uptime</span><span>99.2%</span></div>
        <div className="flex justify-between"><span>Prompt Success</span><span>89%</span></div>
        <div className="flex justify-between"><span>Retrieval Health</span><span>Stable</span></div>
        <div className="flex justify-between"><span>API Queue</span><span>Normal</span></div>
      </div>
    </div>
  );
}

function IncidentIntake() {
  return (
    <>
      <div className="flex justify-between gap-6 items-start mb-8">
        <PageHeader
          title="Incident Intake"
          subtitle="Enterprise AI incident response platform for triaging customer issues, surfacing root causes, generating remediation steps, monitoring SLA exposure, and producing executive-ready communication."
        />
        <div className="w-96"><HealthMonitor /></div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <CommandCard icon={<ShieldAlert />} title="Severity" value="High" dark />
        <CommandCard icon={<Clock />} title="SLA Risk" value="Medium" />
        <CommandCard icon={<Users />} title="Users Impacted" value="1,240" />
        <CommandCard icon={<Target />} title="Business Impact" value="$48K" />
      </div>

      <section className="bg-white rounded-3xl shadow-md p-6 mb-6 border border-slate-200">
        <p className="text-slate-500 font-bold">INC-AI-0427</p>
        <h2 className="text-3xl font-bold mt-2">Enterprise Logistics Co.</h2>
        <p className="text-slate-600 text-base mt-3">
          Customer reports degraded AI workflow recommendations and delayed assistant responses across operations support teams.
        </p>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <InfoCard title="Product Area" value="AI Workflow Assistant" />
          <InfoCard title="Reported By" value="Customer Success Team" />
          <InfoCard title="Time Open" value="47 minutes" />
          <InfoCard title="Affected Users" value="1,240" />
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <ChartCard />
        <RootCauseChart />
      </div>
    </>
  );
}

function AgentAnalysis() {
  return (
    <>
      <PageHeader
        title="Agent Analysis"
        subtitle="Diagnostic workspace for evaluating prompt quality, retrieval behavior, latency signals, and AI system confidence."
      />

      <div className="grid grid-cols-4 gap-4 mb-6">
        {agentHealth.map((item) => (
          <CommandCard key={item.metric} icon={<Brain />} title={item.metric} value={item.score} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ChartCard />
        <div className="bg-[#020826] text-white rounded-3xl p-6 shadow-md">
          <h3 className="font-bold text-2xl mb-4">Agent Reasoning Trace</h3>
          <ul className="space-y-4 text-slate-300 leading-7">
            <li>• Prompt success degraded during customer peak load.</li>
            <li>• Retrieval latency increased before customer-facing failures.</li>
            <li>• Fallback usage increased but model uptime remained stable.</li>
            <li>• Likely issue: infrastructure bottleneck, not model outage.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function RootCauseEngine() {
  return (
    <>
      <PageHeader
        title="Root Cause Engine"
        subtitle="AI-assisted root cause ranking for incident diagnosis, retrieval inspection, and failure vector prioritization."
      />

      <div className="grid grid-cols-2 gap-6">
        <RootCauseChart />
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
          <h3 className="font-bold text-2xl mb-4">Root Cause Findings</h3>
          <ul className="space-y-4 text-slate-700 leading-7">
            {rootCauseFindings.map((finding) => (
              <li key={finding}>• {finding}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function AIRecommendations() {
  return (
    <>
      <PageHeader
        title="AI Recommendations"
        subtitle="Recommended remediation sequence for engineering, customer success, and executive stakeholder alignment."
      />

      <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
        <h3 className="font-bold text-2xl mb-4">Prioritized Recovery Actions</h3>
        <ul className="space-y-4 text-lg text-slate-700 leading-8">
          {aiActions.map((action) => (
            <li key={action}>• {action}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ExecutiveSummary() {
  return (
    <>
      <PageHeader
        title="Executive Summary"
        subtitle="Leadership-ready incident brief translating technical failure signals into customer risk, business impact, and recovery status."
      />

      <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
        <h3 className="font-bold text-2xl mb-4">Executive Incident Brief</h3>
        <p className="text-slate-700 leading-8 text-lg">
          Enterprise Logistics Co. is experiencing elevated latency and degraded recommendation quality in its AI Workflow Assistant.
          Current analysis indicates retrieval latency and prompt routing pressure as the primary contributors. Model uptime remains stable,
          and the recommended recovery plan is to reroute traffic, stabilize vector retrieval, and provide customer updates every 30 minutes.
        </p>
      </div>
    </>
  );
}

function ResolutionTimeline() {
  return (
    <>
      <PageHeader
        title="Resolution Timeline"
        subtitle="Chronological incident timeline showing detection, diagnosis, remediation planning, and customer communication milestones."
      />

      <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
        <h3 className="font-bold text-2xl mb-4">Incident Timeline</h3>
        <div className="space-y-4">
          {timelineEvents.map((event) => (
            <div key={event} className="bg-slate-100 rounded-2xl p-4 font-semibold text-slate-700">
              {event}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function EscalationMatrix() {
  return (
    <>
      <PageHeader
        title="Escalation Matrix"
        subtitle="Ownership routing for technical response, customer communication, SLA protection, and executive escalation."
      />

      <div className="grid grid-cols-4 gap-4">
        {escalationOwners.map((item) => (
          <div key={item.owner} className="bg-white rounded-3xl p-5 shadow-md border border-slate-200">
            <p className="text-slate-500 text-sm">Owner</p>
            <h3 className="font-bold text-xl">{item.owner}</h3>
            <p className="text-slate-500 text-sm mt-4">SLA</p>
            <p className="font-bold">{item.sla}</p>
            <p className="text-slate-500 text-sm mt-4">Level</p>
            <p className="font-bold">{item.level}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CustomerCommsAI() {
  return (
    <>
      <PageHeader
        title="Customer Comms AI"
        subtitle="AI-generated customer communication package for executive updates, trust recovery, and incident transparency."
      />

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#020826] text-white rounded-3xl p-6 shadow-md">
          <h3 className="font-bold text-2xl mb-4">Generated Customer Update</h3>
          <p className="text-slate-300 leading-8">
            Our engineering team has identified elevated latency affecting AI workflow recommendations.
            We have isolated the likely issue to retrieval infrastructure and are actively applying remediation.
            Current SLA risk is moderate, and the next customer update is scheduled in 30 minutes.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
          <h3 className="font-bold text-2xl mb-4">Internal Engineering Note</h3>
          <p className="text-slate-700 leading-8">
            Focus response on retrieval queue saturation, vector timeout concentration, and prompt routing stability.
            Maintain customer update cadence while engineering validates traffic reroute and retrieval recovery.
          </p>
        </div>
      </div>
    </>
  );
}

function ChartCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 size={20} />
        <h3 className="font-bold text-2xl">Latency / Failure Trend</h3>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={trendData}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Area type="monotone" dataKey="latency" stroke="#111827" fill="#cbd5e1" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function RootCauseChart() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle size={20} />
        <h3 className="font-bold text-2xl">Root Cause Confidence Ranking</h3>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={confidenceData} layout="vertical">
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={140} />
          <Tooltip />
          <Bar dataKey="value" fill="#020826" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}