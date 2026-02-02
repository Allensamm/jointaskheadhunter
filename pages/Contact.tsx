
import React, { useState } from 'react';
import { Mail, Calendar, MapPin, CheckCircle, ArrowRight, Loader2, MessageSquare } from 'lucide-react';

interface ContactProps {
  onBook: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    focus: 'Executive Search',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const PRIVATE_EMAIL = "allensamuel569@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Inquiry: ${formData.focus} - ${formData.company}`;
    const body = `
New Professional Inquiry from Jointask Independent Website:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Interest: ${formData.focus}

Message Brief:
${formData.message}

---
Dispatched via Jointask Digital Portal
    `.trim();

    const mailtoUrl = `mailto:${PRIVATE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSent(true);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-8">Strategic Correspondence</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              We operate with high-level discretion for both clients and candidates. Reach out to discuss a partnership or a strategic hire.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start cursor-pointer group" onClick={onBook}>
                <div className="p-3 bg-slate-900 text-white rounded-lg mr-6 group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">AI Strategy Concierge</h4>
                  <p className="text-slate-600 text-sm mb-2">Engage our intelligent partner hub for instant qualification.</p>
                  <button className="text-slate-900 font-bold text-xs uppercase tracking-widest border-b border-slate-900 pb-0.5">Start Session</button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-slate-100 text-slate-900 rounded-lg mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Direct Partnership Line</h4>
                  <p className="text-slate-600 text-sm mb-2">For institutional inquiries and complex talent mapping.</p>
                  <span className="text-slate-900 font-medium">partners@jointask.com</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-slate-100 text-slate-900 rounded-lg mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Global Operations</h4>
                  <p className="text-slate-600 text-sm">US-Based Headquarters<br />Serving North America, EMEA, and APAC.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
              {!isSent ? (
                <>
                  <div className="flex items-center space-x-2 mb-8">
                    <MessageSquare size={16} className="text-slate-400" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Formal Inquiry Form</h3>
                  </div>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Full Name</label>
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors text-sm" 
                          placeholder="Your Name" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Professional Email</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors text-sm" 
                          placeholder="email@company.com" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Company / Organization</label>
                      <input 
                        required
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors text-sm" 
                        placeholder="Organization Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Service of Interest</label>
                      <select 
                        name="focus"
                        value={formData.focus}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors appearance-none text-sm"
                      >
                        <option>Executive Search</option>
                        <option>Technical Specialization</option>
                        <option>Confidential Replacement</option>
                        <option>Market Mapping & Intelligence</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Message Brief</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5} 
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors text-sm resize-none" 
                        placeholder="Provide a high-level overview of your requirements..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white font-bold py-4 hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 disabled:opacity-50 shadow-lg"
                    >
                      {isSubmitting ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <>
                          <span className="uppercase tracking-widest text-xs">Dispatch Inquiry</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Inquiry Initiated</h3>
                  <p className="text-slate-600 mb-8 max-w-sm text-sm">
                    Your brief is being routed to our executive partners. Please finalize the transmission in your email client if it has opened.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-slate-900 font-bold uppercase tracking-widest text-[10px] border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-all"
                  >
                    Reset Form
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
