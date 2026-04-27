import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  Gauge,
  Lightbulb,
  Mail,
  MessageSquare,
  Server,
  ShieldAlert,
  Siren,
  Target,
  Terminal,
  Users,
  Workflow,
  Zap,
  TrendingUp,
  Radio,
  Database,
} from "lucide-react";

const navItems = [
  "Incident Intake",
  "Agent Analysis",
  "Root Cause Engine",
  "AI Recommendations",
  "Executive Summary",
  "Resolution Timeline",
  "Escalation Matrix",
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
  slaRisk: "Medium",
  businessImpact: "$48K",
  confidence: "87%",
  summary:
    "Customer reports degraded AI workflow recommendations and delayed assistant responses across operations support teams.",
};

const signals = [
  { label: "Latency Spike", value: "2.8s", status: "High", icon: Clock },
  { label: "Prompt Failure Rate", value: "11%", status: "Elevated", icon: AlertTriangle },
  { label: "Affected Users", value: "1.2K", status: "Wide Impact", icon: Users },
  { label: "AI Confidence", value: "87%", status: "Strong", icon: Gauge },
];

const rootCauses = [
  {
    title: "Knowledge base retrieval mismatch",
    confidence: 87,
    risk: "High",
    detail:
      "Recent policy content update may have reduced retrieval precision for logistics workflow prompts.",
  },
  {
    title: "Prompt template regression",
    confidence: 72,
    risk: "Medium",
    detail:
      "Support workflow prompts may be missing required customer context variables after latest release.",
  },
  {
    title: "Rate limiting during peak usage",
    confidence: 64,
    risk: "Medium",
    detail:
      "Usage volume exceeded expected operating range during customer support surge window.",
  },
];

const recommendations = [
  {
    action: "Rollback latest prompt template changes",
    owner: "AI Engineering",
    impact: "High",
    eta: "30 min",
  },
  {
    action: "Run retrieval validation against updated knowledge base",
    owner: "Solutions Architecture",
    impact: "High",
    eta: "45 min",
  },
  {
    action: "Increase queue capacity during peak usage window",
    owner: "Platform Operations",
    impact: "Medium",
    eta: "20 min",
  },
  {
    action: "Send customer-facing incident update",
    owner: "Customer Success",
    impact: "High",
    eta: "15 min",
  },
];

const timeline = [
  { time: "09:12", status: "Complete", event: "Customer reported degraded AI recommendations." },
  { time: "09:18", status: "Complete", event: "Incident classified as High severity due to broad user impact." },
  { time: "09:31", status: "Complete", event: "Root cause analysis identified retrieval mismatch as primary suspect." },
  { time: "09:44", status: "Complete", event: "AI recommendation engine generated remediation plan." },
  { time: "09:59", status: "In Progress", event: "Customer-facing summary drafted for success team review." },
  { time: "10:15", status: "Pending", event: "Post-remediation validation and customer confirmation." },
];

const escalationItems = [
  {
    level: "Critical",
    owner: "Engineering + Customer Success",
    trigger: "Major customer impact, security event, or production outage.",
    response: "Immediate executive escalation and 15-minute status updates.",
  },
  {
    level: "High",
    owner: "Technical Success",
    trigger: "Degraded AI output quality or adoption-impacting workflow failure.",
    response: "Root cause triage, remediation plan, and customer update within 60 minutes.",
  },
  {
    level: "Medium",
    owner: "Support + Solutions",
    trigger: "Localized issue affecting limited users or one workflow.",
    response: "Investigate, document workaround, and monitor for recurring pattern.",
  },
];

const agentSteps = [
  {
    label: "Signal detected",
    detail: "Latency and prompt failure rate exceeded normal operating threshold.",
    confidence: 92,
  },
  {
    label: "Evidence retrieved",
    detail: "Recent knowledge-base update overlaps with affected logistics workflow prompts.",
    confidence: 87,
  },
  {
    label: "Failure vector ranked",
    detail: "Retrieval quality drift ranked above rate-limit and prompt regression scenarios.",
    confidence: 84,
  },
  {
    label: "Remediation selected",
    detail: "Validate retrieval, rollback prompt template, and send customer update.",
    confidence: 89,
  },
];

const messageThread = [
  {
    sender: "Customer Success",
    message: "Customer reports recommendations are slower and less relevant for operations teams.",
    time: "09:12",
  },
  {
    sender: "AI Incident Coach",
    message: "High-severity incident created. Retrieval mismatch is the leading suspected cause.",
    time: "09:31",
  },
  {
    sender: "AI Engineering",
    message: "Reviewing latest prompt template and retrieval changes for logistics workflows.",
    time: "09:42",
  },
  {
    sender: "Customer Success",
    message: "Need executive-ready summary and next update language for customer call.",
    time: "09:58",
  },
];

function Pill({ value }) {
  const styles = {
    High: "bg-red-100 text-red-700",
    Critical: "bg-red-100 text-red-700",
    Elevated: "bg-amber-100 text-amber-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-emerald-100 text-emerald-700",
    Strong: "bg-emerald-100 text-emerald-700",
    Active: "bg-blue-100 text-blue-700",
    Complete: "bg-emerald-100 text-emerald-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Pending: "bg-slate-100 text-slate-700",
    "Wide Impact": "bg-red-100 text-red-700",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles[value] || "bg-slate-100 text-slate-700"}`}>
      {value}
    </span>
  );
}

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
                active ? "bg-white text-slate-950" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item}
            </button>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-xs font-semibold uppercase text-slate-400">Portfolio Demo</p>
        <p className="mt-2 text-sm text-slate-300">
          AI incident triage, root-cause analysis, remediation planning, SLA intelligence,
          and executive customer communication.
        </p>
      </div>
    </aside>
  );
}

function ConfidenceBar({ value }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm font-semibold">
        <span>AI Confidence</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-3 rounded-full bg-slate-950 transition-all duration-700" style={{ width: `${value}%` }} />
      </div>
    </div>
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
        <Pill value={item.status} />
      </div>
      <p className="mt-5 text-sm text-slate-500">{item.label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-950">{item.value}</p>
    </div>
  );
}

function ExecutiveBanner() {
  const cards = [
    { title: "Severity", value: incident.severity, icon: Siren, dark: true },
    { title: "SLA Risk", value: incident.slaRisk, icon: Clock },
    { title: "Users Impacted", value: incident.affectedUsers, icon: Users },
    { title: "Business Impact", value: incident.businessImpact, icon: Target },
    { title: "Model Confidence", value: incident.confidence, icon: Brain },
  ];

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className={`rounded-2xl p-5 shadow-sm ${
              card.dark ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-950"
            }`}
          >
            <Icon size={22} />
            <p className={`mt-3 text-sm ${card.dark ? "text-slate-400" : "text-slate-500"}`}>{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}

function IncidentIntake() {
  return (
    <>
      <ExecutiveBanner />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{incident.id}</p>
            <h2 className="mt-2 text-3xl font-bold">{incident.customer}</h2>
            <p className="mt-2 max-w-4xl text-slate-600">{incident.summary}</p>
          </div>

          <div className="flex gap-3">
            <Pill value={incident.severity} />
            <Pill value="Active" />
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

function AgentAnalysis() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
        <div className="flex items-center gap-3">
          <Brain />
          <h2 className="text-2xl font-bold">AI Agent Analysis Stream</h2>
        </div>

        <div className="mt-6 space-y-4">
          {agentSteps.map((step) => (
            <div key={step.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="font-bold">{step.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
                </div>
                <div className="min-w-[220px]">
                  <ConfidenceBar value={step.confidence} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
        <Terminal />
        <h2 className="mt-4 text-2xl font-bold">Retrieved Evidence</h2>

        <div className="mt-5 space-y-4 text-sm text-slate-300">
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="font-bold text-white">Evidence 01</p>
            <p className="mt-1">Policy content update shipped 42 minutes before incident report.</p>
          </div>
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="font-bold text-white">Evidence 02</p>
            <p className="mt-1">Failed prompts share missing logistics workflow context variables.</p>
          </div>
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="font-bold text-white">Evidence 03</p>
            <p className="mt-1">Latency increased during same period as retrieval precision drop.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootCauseEngine() {
  return (
    <div className="grid gap-6">
      {rootCauses.map((cause) => (
        <div key={cause.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <Terminal />
                <h2 className="text-2xl font-bold">{cause.title}</h2>
              </div>
              <p className="mt-3 max-w-4xl text-slate-600">{cause.detail}</p>
              <div className="mt-5 max-w-xl">
                <ConfidenceBar value={cause.confidence} />
              </div>
            </div>
            <Pill value={cause.risk} />
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
          <h2 className="text-2xl font-bold">AI Recommendation Decision Matrix</h2>
        </div>

        <div className="mt-6 space-y-4">
          {recommendations.map((item) => (
            <div key={item.action} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h3 className="font-bold">{item.action}</h3>
                  <p className="text-sm text-slate-600">Owner: {item.owner} | ETA: {item.eta}</p>
                </div>
                <Pill value={item.impact} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
        <Zap size={28} />
        <h2 className="mt-4 text-2xl font-bold">AI Action Priority</h2>
        <p className="mt-2 text-slate-300">
          Prioritize retrieval validation first because it has the highest confidence score
          and broadest user impact.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Primary Failure Vector</p>
            <p className="text-xl font-bold">Retrieval Quality Drift</p>
          </div>
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Recommended First Action</p>
            <p className="text-xl font-bold">Run validation test set</p>
          </div>
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Expected Resolution Window</p>
            <p className="text-xl font-bold">45–60 minutes</p>
          </div>
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

        <p className="mt-5 text-slate-700 leading-relaxed">
          Enterprise Logistics Co. experienced degraded AI workflow recommendations and delayed
          assistant responses impacting approximately 1,240 users. Initial analysis indicates
          a likely knowledge base retrieval mismatch following a recent content update. The
          recommended remediation plan is to validate retrieval quality, rollback impacted
          prompt templates, monitor latency, and provide customer-facing updates through the
          success team.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-100 p-4">
            <Activity />
            <p className="mt-3 text-sm text-slate-500">Business Impact</p>
            <p className="font-bold">High</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <Target />
            <p className="mt-3 text-sm text-slate-500">Next Milestone</p>
            <p className="font-bold">Validation</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <Server />
            <p className="mt-3 text-sm text-slate-500">System Area</p>
            <p className="font-bold">Retrieval</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Mail />
          <h2 className="text-2xl font-bold">Generated Customer Email</h2>
        </div>

        <div className="mt-5 rounded-xl bg-slate-100 p-5 text-slate-700 leading-relaxed">
          <p className="font-bold">Subject: Update on AI Workflow Assistant Performance</p>
          <p className="mt-4">
            Our team has identified the likely source of the degraded recommendations and is
            actively validating the affected workflow. We are applying a remediation plan focused
            on retrieval quality, response latency, and prompt consistency. We will provide the next
            update after validation is complete.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
        <div className="flex items-center gap-3">
          <MessageSquare />
          <h2 className="text-2xl font-bold">Incident Communication Thread</h2>
        </div>

        <div className="mt-6 grid gap-4">
          {messageThread.map((msg) => (
            <div key={`${msg.sender}-${msg.time}`} className="rounded-xl bg-slate-100 p-4">
              <div className="flex justify-between gap-4">
                <p className="font-bold">{msg.sender}</p>
                <p className="text-sm text-slate-500">{msg.time}</p>
              </div>
              <p className="mt-2 text-slate-700">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResolutionTimeline() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Workflow />
        <h2 className="text-2xl font-bold">Resolution Timeline Tracker</h2>
      </div>

      <div className="mt-6 space-y-4">
        {timeline.map((item) => (
          <div key={item.time} className="grid gap-4 rounded-xl bg-slate-100 p-4 md:grid-cols-4 md:items-center">
            <div className="font-bold text-slate-950">{item.time}</div>
            <div className="md:col-span-2 text-slate-700">{item.event}</div>
            <div><Pill value={item.status} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EscalationMatrix() {
  return (
    <div className="grid gap-6">
      {escalationItems.map((item) => (
        <div key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <div className="mb-3">
                <Pill value={item.level} />
              </div>
              <h2 className="text-2xl font-bold">{item.owner}</h2>
              <p className="mt-3 text-slate-600">
                <strong>Trigger:</strong> {item.trigger}
              </p>
              <p className="mt-2 text-slate-600">
                <strong>Response:</strong> {item.response}
              </p>
            </div>
            <ShieldAlert size={34} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Incident Intake");

  const renderPage = () => {
    if (activePage === "Agent Analysis") return <AgentAnalysis />;
    if (activePage === "Root Cause Engine") return <RootCauseEngine />;
    if (activePage === "AI Recommendations") return <AIRecommendations />;
    if (activePage === "Executive Summary") return <ExecutiveSummary />;
    if (activePage === "Resolution Timeline") return <ResolutionTimeline />;
    if (activePage === "Escalation Matrix") return <EscalationMatrix />;
    return <IncidentIntake />;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 lg:flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 p-6 md:p-10">
        <div className="mb-8 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              AI Incident Resolution Portfolio Project
            </p>

            <h1 className="mt-2 text-4xl font-bold md:text-5xl">{activePage}</h1>

            <p className="mt-3 max-w-4xl text-slate-600">
              Enterprise AI incident response platform for triaging customer issues,
              surfacing root causes, generating remediation steps, tracking escalation paths,
              managing SLA risk, and producing executive-ready customer communication.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Radio size={20} />
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">System Status</p>
                <p className="font-bold text-slate-950">Live Monitoring Active</p>
              </div>
            </div>
          </div>
        </div>

        {renderPage()}

        <footer className="mt-10 text-sm text-slate-500">
          Built with React, Vite, Tailwind CSS, GitHub, and Vercel.
        </footer>
      </main>
    </div>
  );
}