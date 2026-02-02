import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModalWrapper from '../components/BookingModalWrapper';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Jointask Independent | Precision Headhunting & Executive Search',
  description: 'A premium US-based recruitment agency for high-impact talent. Sourcing the top 1% for startups and global enterprises.',
};

// Added React import to correctly type 'children' and nested components.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-slate-900 font-sans antialiased">
        <BookingModalWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </BookingModalWrapper>
      </body>
    </html>
  );
}
