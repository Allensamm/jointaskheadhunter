
'use client';

import React, { useState } from 'react';
import { Mail, Calendar, MapPin, CheckCircle, ArrowRight, Loader2, MessageSquare } from 'lucide-react';
import { useBooking } from '../../components/BookingModalWrapper';

export default function ContactPage() {
  const { openBooking } = useBooking();
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
    const body = `New Inquiry: ${formData.name} at ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n--- Jointask Independent Portal ---`;

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
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-8 font-serif">Strategic Correspondence</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              We operate with high-level discretion. Reach out to discuss a confidential search or institutional partnership.
            </p>
            <div className="space-y-12">
              <div className="flex items-start cursor-pointer group" onClick={openBooking}>
                <div className="p-3 bg-slate-900 text-white rounded-lg mr-6 transition-transform group-hover:scale-105">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">AI Strategy Concierge</h4>
                  <p className="text-slate-600 text-sm mb-2">Instant assessment for high-impact hires.</p>
                  <button className="text-slate-900 font-bold text-xs uppercase tracking-widest border-b border-slate-900">Start Session</button>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-slate-100 text-slate-900 rounded-lg mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Direct Partner Line</h4>
                  <span className="text-slate-900 font-medium">partners@jointask.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-sm rounded-sm">
              {!isSent ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white border p-3" placeholder="Full Name" />
                    <input required name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border p-3" placeholder="Work Email" />
                  </div>
                  <input required name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-white border p-3" placeholder="Organization" />
                  <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full bg-white border p-3 resize-none" placeholder="How can we assist?"></textarea>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 text-white font-bold py-4 hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <><span>Dispatch Inquiry</span><ArrowRight size={18} /></>}
                  </button>
                </form>
              ) : (
                <div className="text-center py-20 animate-in fade-in duration-500">
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Inquiry Initiated</h3>
                  <p className="text-slate-600 mb-8">We have formatted your brief. Please confirm the send in your email client.</p>
                  <button onClick={() => setIsSent(false)} className="text-slate-900 font-bold uppercase tracking-widest text-xs border-b border-slate-900">Reset Form</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
