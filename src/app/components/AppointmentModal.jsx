
import React from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] p-8 md:p-16 text-center shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl hover:opacity-60"
        >
          ✕
        </button>

        <h2 className="font-serif text-2xl tracking-widest mb-8">BOOK AN APPOINTMENT</h2>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-8 gap-8 pb-4 text-sm tracking-wide">
          <button className="border-b border-black font-medium">Appoitment form</button>
          {/* <button className="text-gray-400">Zenoti</button> */}
        </div>

        <p className="text-xs text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
          This reservation is not guaranteed on the selected day and time. 
          We will contact you by phone as soon as possible to confirm your time.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
            <input type="tel" placeholder="Phone number" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email address" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Date" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
              <input type="text" placeholder="Time" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
            </div>
          </div>
          <button className="mt-6 bg-[#1A1A1A] text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-black transition-colors">
            Book an appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;