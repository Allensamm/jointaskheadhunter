
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, TrendingUp, ArrowRight, Award, Search, Globe, ChevronRight } from 'lucide-react';

interface HomeProps {
  onBook: () => void;
}

const Home: React.FC<HomeProps> = ({ onBook }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-slate-100 text-slate-600 rounded-full">
              Independent Headhunters • Talent Specialists • Top 1%
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Precision Talent Acquisition for the <span className="text-slate-500">Global Economy.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Jointask Independent is a premier US-based headhunting firm dedicated to sourcing high-impact leadership and specialists for startups, scale-ups, and established enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center"
              >
                Book a Talent Strategy Call <ArrowRight className="ml-2" size={18} />
              </button>
              <Link to="/services" className="border border-slate-200 text-slate-700 px-8 py-4 rounded-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-2/3 h-full bg-slate-50 -z-0 rounded-full opacity-50 blur-3xl"></div>
      </section>

      {/* Trust Stats */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">Candidate Retainment</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24 Days</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">Avg. Time to Shortlist</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Top 1%</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">Talent Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Global</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">Sourcing Capability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Talent Solutions</h2>
            <p className="text-slate-600">We don't just fill seats. We identify the catalyst individuals who drive revenue, innovation, and operational excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 hover:border-slate-900 transition-all group">
              <Target className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors" size={40} />
              <h3 className="text-xl font-bold mb-4">Executive Search</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">C-Suite and VP-level search focused on strategic alignment and long-term organizational impact.</p>
              <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center">
                Learn More <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="p-8 border border-slate-100 hover:border-slate-900 transition-all group">
              <ShieldCheck className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors" size={40} />
              <h3 className="text-xl font-bold mb-4">Confidential Hiring</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Discrete replacement or strategic new-headcount sourcing protected by strict NDA protocols.</p>
              <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center">
                Learn More <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="p-8 border border-slate-100 hover:border-slate-900 transition-all group">
              <Search className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors" size={40} />
              <h3 className="text-xl font-bold mb-4">Talent Mapping</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Deep market intelligence to understand the talent landscape before you make your first hire.</p>
              <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center">
                Learn More <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jointask Independent */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Jointask Independent?</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-slate-900"><Award size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Independent & Agile</h4>
                    <p className="text-slate-600 text-sm">Free from the bureaucracy of major global conglomerates, we move faster and offer personalized, high-touch consultation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-slate-900"><Globe size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Domestic Hub, Global Reach</h4>
                    <p className="text-slate-600 text-sm">US-based expertise that understands the American market's nuances, while maintaining a sourcing network that spans EMEA and APAC.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-slate-900"><TrendingUp size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Success-Driven Partnership</h4>
                    <p className="text-slate-600 text-sm">We don't transactionalize hiring. We build relationships with our clients to serve as an extension of their leadership team.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/600/800" alt="Executive Meeting" className="rounded shadow-xl" />
              <img src="https://picsum.photos/seed/office2/600/800" alt="Workspace" className="rounded shadow-xl mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-900 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to secure your next high-impact hire?</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Schedule a confidential talent strategy session with our lead consultants today. No sales pitch—just strategic market insights.
          </p>
          <button 
            onClick={onBook}
            className="inline-flex items-center bg-slate-900 text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-slate-800 transition-all"
          >
            Book My Strategy Call <ArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
