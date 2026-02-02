
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Mail, CheckCircle, Loader2, MessageSquare, Sparkles } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const PRIVATE_EMAIL = "allensamuel569@gmail.com";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ 
        role: 'assistant', 
        content: "Welcome to the Jointask Strategy Hub. I am here to facilitate your elite talent acquisition or career transition.\n\nTo ensure I route you to the correct partner, are you looking to discuss a personal career transition, or are you looking to hire and scale a technical team for your organization?" 
      }]);
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isOpen, messages]);

  // Utility to clean AI output from asterisks and other markdown artifacts
  const cleanText = (text: string) => {
    return text.replace(/\*/g, '').trim();
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `You are the Jointask Independent Senior Strategy Partner. You are an expert in high-impact talent acquisition.
          
          CONSTRAINTS:
          1. DO NOT use asterisks (*) for emphasis or lists. Use plain text or standard line breaks.
          2. NEVER mention the email address "allensamuel569@gmail.com" in your chat messages. Refer only to "our partners" or "the executive team".
          3. Follow this specific qualification sequence:
             - Step 1 (Focus): Career transition vs. Hiring/Scaling.
             - Step 2 (Specialization): Role title and core expertise (e.g., AI Infra, Frontend Arch).
             - Step 3 (Urgency): Timeline for the move or hiring process.
          
          GOALS:
          1. Answer questions with authoritative, strategic insight.
          2. Once you have the Focus, Specialization, and Urgency, you MUST call the 'generate_executive_brief' tool.
          3. Inform the user that a formal brief is being generated for the executive team and they will reach out directly.
          
          TONE: Professional, modern, elite, and consultative.`,
          tools: [{
            functionDeclarations: [{
              name: 'generate_executive_brief',
              description: 'Generates a formal summary of the client needs and dispatches it to the human partners.',
              parameters: {
                type: Type.OBJECT,
                properties: {
                  clientName: { type: Type.STRING },
                  needSummary: { type: Type.STRING, description: 'A 2-3 paragraph professional brief for the human team. Do not include asterisks.' },
                  estimatedUrgency: { type: Type.STRING }
                },
                required: ['clientName', 'needSummary']
              }
            }]
          }]
        }
      });

      const parts = response.candidates?.[0]?.content?.parts || [];
      const functionCall = parts.find(p => p.functionCall);
      const textResponse = parts.find(p => p.text)?.text;
      
      if (functionCall) {
        const { needSummary } = functionCall.functionCall.args as any;
        setSummary(cleanText(needSummary));
        setIsSent(true);
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Excellent. I have formatted our discussion into an executive brief and dispatched it to our human partners. You can expect a direct follow-up shortly." 
        }]);
      } else if (textResponse) {
        setMessages(prev => [...prev, { role: 'assistant', content: cleanText(textResponse) }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Our secure infrastructure is currently under heavy load. Please reach out to our team via the contact form on our main site." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const openEmail = () => {
    const subject = encodeURIComponent("New Executive Brief: Jointask Independent Engagement");
    const body = encodeURIComponent(`Executive Summary Generated by Strategic Concierge:\n\n${summary}\n\n--- End of Brief ---`);
    window.location.href = `mailto:${PRIVATE_EMAIL}?subject=${subject}&body=${body}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-500 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-800 rounded-lg">
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase">Strategy Partner</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Private Intelligence Hub</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-xl ${
                m.role === 'user' 
                ? 'bg-slate-900 text-white shadow-lg rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-tl-none'
              }`}>
                {m.role === 'assistant' && <Bot size={14} className="mb-2 text-slate-400" />}
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 border border-slate-200 rounded-xl shadow-sm flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}

          {isSent && summary && (
            <div className="p-6 bg-white border border-slate-200 shadow-2xl rounded-xl space-y-4 animate-in zoom-in-95 duration-700">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle size={20} />
                <h3 className="font-bold text-xs uppercase tracking-widest">Executive Brief Prepared</h3>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-slate-600 text-sm leading-relaxed">
                {summary}
              </div>
              <div className="flex flex-col space-y-3 pt-4">
                <button 
                  onClick={openEmail}
                  className="w-full bg-slate-900 text-white py-4 rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all shadow-md"
                >
                  <Mail size={16} />
                  <span>Finalize & Dispatch Brief</span>
                </button>
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest leading-relaxed">
                  Your brief will be securely transmitted to our lead consultants.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Input */}
        {!isSent && (
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 mb-4">
               <MessageSquare size={12} className="text-slate-400" />
               <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Encrypted Engagement Line</span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Response here..."
                className="w-full bg-slate-50 border border-slate-200 px-5 py-4 pr-14 focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-sm rounded-lg"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all disabled:opacity-20"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
