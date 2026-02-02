
import React from 'react';
import { Laptop, Landmark, HeartPulse, PieChart, Truck, Scale } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Laptop size={40} />,
      title: "Technology & SaaS",
      desc: "From seed-stage startups to public cloud companies. We source Engineering Leadership, Product Visionaries, and GTM specialists."
    },
    {
      icon: <Landmark size={40} />,
      title: "Finance & FinTech",
      desc: "Bridging traditional banking with the digital future. Expert search for Asset Management, Payments, and Crypto-native firms."
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Healthcare & Life Sciences",
      desc: "Specialized search for HealthTech, BioPharma, and Clinical Operations where regulatory understanding is paramount."
    },
    {
      icon: <PieChart size={40} />,
      title: "Marketing & Sales",
      desc: "Revenue-generating talent for global brands. CMOs, CROs, and high-impact Growth Marketing leadership."
    },
    {
      icon: <Truck size={40} />,
      title: "Operations & Supply Chain",
      desc: "The backbone of the global economy. Sourcing COOs and Logistics experts for manufacturing and logistics firms."
    },
    {
      icon: <Scale size={40} />,
      title: "Professional Services",
      desc: "Strategic hires for Consulting, Legal, and Advisory firms. We find the rainmakers and practice leaders."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Vertical Expertise</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We operate at the intersection of industry knowledge and human capital, serving the most demanding sectors in the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="p-12 border border-slate-50 bg-slate-50 hover:bg-slate-900 hover:text-white transition-all duration-300 group rounded-sm">
              <div className="mb-8 text-slate-400 group-hover:text-slate-200 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
