'use client';
import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';

export default function BookingWidget() {
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* The White Floating Card */}
      {isWidgetVisible && (
        <div className="fixed bottom-8 right-8 z-40 w-64 bg-white p-8 shadow-xl text-center border border-gray-100">
          <button 
            onClick={() => setIsWidgetVisible(false)}
            className="absolute top-2 right-3 text-gray-400 hover:text-black"
          >
            ✕
          </button>
          
          <h3 className="font-serif text-xl tracking-widest mb-2">BOOK NOW</h3>
          <p className="text-sm text-gray-500 mb-4">Takes 2 minutes to complete.</p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-semibold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
          >
            Book
          </button>
        </div>
      )}

      {/* The Modal */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}