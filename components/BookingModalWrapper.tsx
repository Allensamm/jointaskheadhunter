
'use client';

import React, { useState, createContext, useContext } from 'react';
import BookingModal from './BookingModal';

const BookingContext = createContext<{ openBooking: () => void }>({ openBooking: () => {} });

export const useBooking = () => useContext(BookingContext);

export default function BookingModalWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}
