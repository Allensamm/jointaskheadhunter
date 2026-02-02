
import React from 'react';

const Success: React.FC = () => {
  const cases = [
    {
      tag: "Scale-up",
      title: "Series B Fintech: Head of Product",
      challenge: "A rapidly growing Fintech needed a Head of Product to transition from a founder-led roadmap to a scalable product organization. The candidate required deep regulatory knowledge and a pedigree in high-growth scaling.",
      solution: "Jointask mapped 45 rival firms and identified a passive candidate at a Tier 1 global bank who was looking for an entrepreneurial move. We handled the entire negotiation and onboarding.",
      results: [
        { label: "Time to Shortlist", val: "18 Days" },
        { label: "Candidates Presented", val: "3" },
        { label: "Status", val: "Hired & Promoted to VP within 12mo" }
      ]
    },
    {
      tag: "Enterprise",
      title: "Global SaaS: Confidential CEO Replacement",
      challenge: "A public-market SaaS firm required a confidential CEO search while the incumbent was still in place. Discretion was the absolute priority to prevent stock price volatility and internal unrest.",
      solution: "We conducted a strictly off-site, off-record search. Communication was handled through secure, non-corporate channels. We vetted 12 international leaders and narrowed it down to 2 final finalists.",
      results: [
        { label: "Confidentiality", val: "100% Maintained" },
        { label: "Global Reach", val: "Candidates from 4 continents" },
        { label: "Outcome", val: "Successful transition with 0 market leak" }
      ]
    },
    {
      tag: "Stealth Startup",
      title: "AI Startup: Lead ML Engineer #1",
      challenge: "An AI startup in stealth mode needed a foundational Machine Learning Lead with a background in Large Language Models. Competition for this talent was at an all-time high with massive counter-offers.",
      solution: "Using our deep technical network, we identified a researcher at a major tech lab. We focused the value proposition on technical autonomy and equity upside rather than just base compensation.",
      results: [
        { label: "Network Access", val: "Top 0.5% Research Labs" },
        { label: "Interview to Offer", val: "10 Days" },
        { label: "Equity Buy-in", val: "Successfully Negotiated" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real outcomes. Real results. Our work is defined by the impact our placements have on our clients' bottom lines.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white p-10 lg:p-16 border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">{c.tag}</span>
                <h2 className="text-3xl font-bold mb-8">{c.title}</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">The Jointask Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 bg-slate-50 p-8 rounded-sm">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider border-b border-slate-200 pb-4">Outcome Metrics</h4>
                <div className="space-y-6">
                  {c.results.map((r, i) => (
                    <div key={i}>
                      <div className="text-sm text-slate-500 mb-1">{r.label}</div>
                      <div className="text-lg font-bold text-slate-900">{r.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
