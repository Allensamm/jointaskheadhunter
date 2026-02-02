
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Target, 
  Search, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  MapPin, 
  ArrowRight,
  Award,
  BarChart3,
  Mail,
  Linkedin,
  Globe
} from 'lucide-react';

// --- Page Components ---
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Industries from './pages/Industries';
import Success from './pages/Success';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import BookingModal from './BookingModal';

// --- Global Components ---
const Navbar: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Industries', path: '/industries' },
    { name: 'Success', path: '/success' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              JOINTASK <span className="font-light text-slate-500 italic">INDEPENDENT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={onBook}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { setIsOpen(false); onBook(); }}
            className="block w-full text-center bg-slate-900 text-white px-3 py-4 rounded-md text-base font-medium"
          >
            Book Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white block mb-6">
            JOINTASK <span className="font-light text-slate-400 italic">INDEPENDENT</span>
          </Link>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
            A premium executive search and talent specialization firm. We represent the top 1% of impact talent for high-growth companies across the United States and globally.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Firm</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">Methodology</Link></li>
            <li><Link to="/success" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Executive Search</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Confidential Hiring</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Market Intelligence</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Direct Inquiry</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-slate-500">
        <p>&copy; {new Date().getFullYear()} Jointask Independent. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Engagement</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onBook={() => setIsBookingOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBook={() => setIsBookingOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/success" element={<Success />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact onBook={() => setIsBookingOpen(true)} />} />
          </Routes>
        </main>
        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
