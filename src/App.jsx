import { useState } from "react";
import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  Gauge,
  MessageSquare,
  ShieldAlert,
  Siren,
  Users,
  Workflow,
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
  { name: "Prompt Routing Failure", value: 87 },
  { name: "Retrieval Latency", value: 76 },
  { name: "Vector Timeout", value: 64 },
  { name: "Model Saturation", value: 58 },
];

export default function App() {
  const [active, setActive] = useState("Incident Intake");

  return (
    <div className="min-h-screen bg-slate-100 flex text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#020826] text-white min-h-screen px-5 py-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-white text-black p-3 rounded-2xl">
            <Brain size={26} />
          </div>
          <div>
            <h1 className="font-bold text-3xl leading-none">AI Incident Coach</h1>
            <p className="text-slate-300 text-lg mt-1">Enterprise Resolution System</p>
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

        <div className="mt-10 bg-[#09123d] rounded-2xl p-4 text-slate-200 text-sm leading-7">
          <div className="font-bold mb-2">PORTFOLIO DEMO</div>
          React + Tailwind + Recharts + Vercel SaaS simulation of AI incident triage,
          observability monitoring, customer communication generation, and executive
          response workflows.
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 px-8 py-8">
        <p className="uppercase text-sm font-bold tracking-widest text-slate-500 mb-2">
          AI INCIDENT RESOLUTION PORTFOLIO PROJECT
        </p>

        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-6xl font-bold">{active}</h1>
            <p className="text-slate-600 mt-3 text-2xl max-w-5xl leading-10">
              Enterprise AI incident response platform for triaging customer issues,
              surfacing root causes, generating remediation steps, monitoring SLA exposure,
              and producing executive-ready communication.
            </p>
          </div>

          <div className="bg-[#020826] text-white rounded-2xl px-6 py-5 w-96 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Activity size={22} />
              <span className="font-bold text-xl">AI HEALTH MONITOR</span>
            </div>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between"><span>Model Uptime</span><span>99.2%</span></div>
              <div className="flex justify-between"><span>Prompt Success</span><span>89%</span></div>
              <div className="flex justify-between"><span>Retrieval Health</span><span>Stable</span></div>
              <div className="flex justify-between"><span>API Queue</span><span>Normal</span></div>
            </div>
          </div>
        </div>

        {/* Top command cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <CommandCard icon={<ShieldAlert />} title="Severity" value="High" dark />
          <CommandCard icon={<Clock3 />} title="SLA Risk" value="Medium" />
          <CommandCard icon={<Users />} title="Users Impacted" value="1,240" />
          <CommandCard icon={<Target />} title="Business Impact" value="$48K" />
        </div>

        {/* Incident Card */}
        <section className="bg-white rounded-3xl shadow-md p-6 mb-6 border border-slate-200">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500 font-bold">INC-AI-0427</p>
              <h2 className="text-5xl font-bold mt-2">Enterprise Logistics Co.</h2>
              <p className="text-slate-600 text-2xl mt-3">
                Customer reports degraded AI workflow recommendations and delayed assistant
                responses across operations support teams.
              </p>
            </div>
            <div className="flex gap-3 h-fit">
              <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full font-bold">High</span>
              <span className="bg-blue-100 text-blue-500 px-4 py-1 rounded-full font-bold">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <InfoCard title="Product Area" value="AI Workflow Assistant" />
            <InfoCard title="Reported By" value="Customer Success Team" />
            <InfoCard title="Time Open" value="47 minutes" />
            <InfoCard title="Affected Users" value="1,240" />
          </div>
        </section>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
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

          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={20} />
              <h3 className="font-bold text-2xl">Root Cause Confidence Ranking</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={confidenceData} layout="vertical">
                <XAxis type="number" hide />
                <Tooltip />
                <Bar dataKey="value" fill="#020826" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Recommendation + Customer Comms */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} />
              <h3 className="font-bold text-2xl">AI Recommended Actions</h3>
            </div>
            <ul className="space-y-4 text-xl text-slate-700 leading-9">
              <li>• Reroute prompt traffic to backup inference pool</li>
              <li>• Flush delayed retrieval queue and restart vector worker</li>
              <li>• Trigger customer-facing SLA communication package</li>
              <li>• Escalate to engineering reliability lead</li>
            </ul>
          </div>

          <div className="bg-[#020826] text-white rounded-3xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} />
              <h3 className="font-bold text-2xl">Customer Communication Generator</h3>
            </div>
            <p className="text-slate-300 text-lg leading-8">
              Executive Summary Generated:
              <br /><br />
              "Our engineering teams have identified elevated latency in AI workflow
              recommendation services. Active remediation is underway with current SLA risk
              classified as moderate. Next customer update scheduled in 30 minutes."
            </p>
          </div>
        </div>

        <footer className="text-slate-500 text-lg">
          Built with React, Vite, Tailwind CSS, Recharts, GitHub, and Vercel.
        </footer>
      </main>
    </div>
  );
}

function CommandCard({ icon, title, value, dark }) {
  return (
    <div className={`${dark ? "bg-[#020826] text-white" : "bg-white"} rounded-3xl shadow-md p-5 border border-slate-200`}>
      <div className="mb-3">{icon}</div>
      <p className="text-slate-500 text-lg">{title}</p>
      <h3 className="text-5xl font-bold">{value}</h3>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-slate-100 rounded-2xl p-4">
      <p className="text-slate-500 text-lg">{title}</p>
      <h3 className="font-bold text-3xl">{value}</h3>
    </div>
  );
}