
import React from 'react';
import { Shield, Lightbulb, Users, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-8">Who We Are</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Jointask Independent was founded on a simple principle: high-impact talent is the only true competitive advantage in the modern economy.
          </p>
          <p className="text-slate-600 leading-relaxed">
            As a boutique, independent firm based in the United States, we operate with a level of focus and speed that larger agencies cannot match. We don't rely on massive, outdated databases; we engage in active, precision headhunting to find candidates who aren't looking, but are ready to make a move for the right opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="p-10 bg-slate-50">
            <Eye className="text-slate-900 mb-6" size={32} />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the definitive talent partner for high-growth organizations by setting a global standard for executive search through intelligence, integrity, and independence.
            </p>
          </div>
          <div className="p-10 bg-slate-900 text-white">
            <Lightbulb className="text-slate-300 mb-6" size={32} />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To bridge the gap between world-class organizations and the top 1% of talent through a rigorous, research-driven process that ensures cultural and strategic alignment.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold text-xl mb-4 text-slate-900">Radical Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We provide direct, unfiltered feedback to both clients and candidates. Clarity is the foundation of trust.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-slate-900">Precision Over Volume</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We would rather present three perfect candidates than thirty "good enough" profiles. Your time is our most respected asset.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-slate-900">Absolute Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We maintain the highest standards of confidentiality. In executive search, discretion isn't a feature; it's a requirement.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-12 lg:p-20 rounded-sm">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Why we are Independent</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In the recruitment world, "Big Agency" often means "Big Conflict." Large firms are often blocked from headhunting from their own massive client lists, limiting your talent pool.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Being independent means we have fewer "off-limits" restrictions. It means we can hunt anywhere, for anyone, without corporate red tape. It means when you call us, you speak to a partner, not a junior account manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
