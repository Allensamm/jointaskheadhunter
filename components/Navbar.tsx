
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useBooking } from './BookingModalWrapper';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/process' },
  { name: 'Industries', path: '/industries' },
  { name: 'Success', path: '/success' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tighter text-slate-900 group-hover:text-slate-700 transition-colors">
              JOINTASK <span className="font-light text-slate-500 italic">INDEPENDENT</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={openBooking}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
            >
              Book Strategy Call
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block text-lg font-medium text-slate-600 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={openBooking}
            className="w-full text-center bg-slate-900 text-white py-4 rounded-sm font-medium"
          >
            Book Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
}
