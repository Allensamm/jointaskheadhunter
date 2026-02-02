
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Alignment",
      desc: "We don't start with a job description. We start with a conversation. We learn your business goals, team dynamics, and the specific challenges this hire must solve."
    },
    {
      number: "02",
      title: "Market Mapping",
      desc: "Our research team maps out the relevant talent landscape, identifying target companies and high-performing individuals who meet your criteria."
    },
    {
      number: "03",
      title: "Precision Sourcing",
      desc: "We engage candidates through personalized, peer-level outreach. We sell your vision, not just a role, capturing the interest of elite passive talent."
    },
    {
      number: "04",
      title: "Rigorous Evaluation",
      desc: "Each candidate undergoes a multi-stage vetting process. We evaluate technical skill, leadership aptitude, and cultural alignment before you ever see a resume."
    },
    {
      number: "05",
      title: "Presentation & Interviewing",
      desc: "You receive a curated shortlist of candidates. We coordinate all logistics and provide detailed debriefs after every round of interviews."
    },
    {
      number: "06",
      title: "Placement & Follow-up",
      desc: "We assist with offer negotiation, background checks, and resignation advisory. Post-hire, we stay in touch for 6 months to ensure a smooth transition."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-5xl font-bold mb-6">Our Methodology</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A research-driven, high-touch process that eliminates guesswork and maximizes quality of hire.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100"></div>
          
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:items-end' : 'lg:items-start'} items-center`}>
                    <span className="text-6xl font-black text-slate-100 mb-4">{step.number}</span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className={`text-slate-600 leading-relaxed max-w-md ${idx % 2 === 1 ? 'lg:text-right' : ''}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-slate-900 relative z-10 hidden lg:block">
                    <div className="absolute inset-0 bg-slate-900 rounded-full animate-ping opacity-25"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
