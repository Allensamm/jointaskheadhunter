
import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Clients: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h1 className="text-5xl font-bold mb-6">Our Client Partnerships</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We partner with organizations that demand excellence. From boutique firms to the Fortune 500.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="p-10 border border-slate-100">
            <h3 className="text-2xl font-bold mb-4">Hyper-Growth Startups</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Serving VC-backed firms from Seed to Series C. We help founders build their first executive leadership team and scale their engineering and product cores.
            </p>
          </div>
          <div className="p-10 border border-slate-100">
            <h3 className="text-2xl font-bold mb-4">Mid-Market Leaders</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Supporting established companies with $100M+ revenue in modernizing their talent stack and executing strategic market pivots.
            </p>
          </div>
          <div className="p-10 border border-slate-100">
            <h3 className="text-2xl font-bold mb-4">Global Enterprises</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Navigating the complexity of large-scale organizations. We specialize in confidential replacements and specialized roles within global conglomerates.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-12 lg:p-24 rounded-sm relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center mb-8 text-slate-400">
              <ShieldCheck size={32} className="mr-4" />
              <span className="uppercase tracking-[0.2em] font-bold text-sm">Discretion Guaranteed</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Our clients value confidentiality as much as results.
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Due to the sensitive nature of our executive search and headhunting engagements, we maintain strict non-disclosure agreements with 90% of our client base. While we don't display logos on our public-facing site, we are happy to provide anonymized references and deep-dive case studies during our initial consultation.
            </p>
            <Link to="/contact" className="inline-flex items-center text-white border-b-2 border-white pb-2 hover:text-slate-300 hover:border-slate-300 transition-all font-bold tracking-widest text-sm uppercase">
              Inquire about a partnership <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          {/* Abstract background */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="100" cy="0" r="100" fill="white" />
             </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
