
import React from 'react';
import { Target, Search, Lock, Briefcase, BarChart, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Target className="text-slate-900" />,
      title: "Headhunting & Executive Search",
      desc: "Retained search for C-Suite, SVP, and Board positions. We conduct exhaustive market research to identify leaders who align with your long-term roadmap and culture.",
      features: ["Culture-matching assessment", "Compensation benchmarking", "Strategic onboarding support"]
    },
    {
      icon: <Users className="text-slate-900" />,
      title: "Talent Specialization",
      desc: "Deep-dive sourcing for highly technical or specialized roles where generalist agencies fail. We maintain vertical-specific networks in Tech, Finance, and Ops.",
      features: ["Deep technical screening", "Passive candidate engagement", "Niche network access"]
    },
    {
      icon: <Lock className="text-slate-900" />,
      title: "Confidential Hiring",
      desc: "Managing high-stakes replacements or expansion plans that require absolute discretion. We handle the process externally to protect your internal morale and market positioning.",
      features: ["Strict NDA management", "Secure candidate vetting", "Off-site interview coordination"]
    },
    {
      icon: <Briefcase className="text-slate-900" />,
      title: "Contract & Permanent Placement",
      desc: "Flexible solutions for both long-term growth and immediate project-based needs. We ensure quality remains consistent regardless of the engagement type.",
      features: ["Interim leadership", "Full-time headhunting", "Project-based scaling"]
    },
    {
      icon: <BarChart className="text-slate-900" />,
      title: "Talent Advisory & Intelligence",
      desc: "Data-backed insights into the talent landscape. We provide market mapping, salary reports, and competitor analysis to inform your hiring strategy.",
      features: ["Market mapping reports", "Salary trend analysis", "Competitor talent audits"]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tailored search strategies designed for the complexity of the modern workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((s, idx) => (
            <div key={idx} className="p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="mb-6">{s.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {s.desc}
              </p>
              <div className="pt-6 border-t border-slate-50">
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">Core Focus Areas</h4>
                <ul className="space-y-3">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
