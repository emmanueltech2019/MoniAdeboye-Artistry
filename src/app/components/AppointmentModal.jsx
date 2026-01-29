
// "use client"
// import React, { useState } from 'react';

// const AppointmentModal = ({ isOpen, onClose }) => {
//   const [getPrice, setGetPrice] = useState(0)
//   const prices = [
//     { name: "Bridal makeup", price: 30000 },
//     { name: "Editorial and photoshoot makeup", price: 30000 },
//     { name: "Event and party makeup", price: 30000 },
//     { name: "Makeup for film and TV", price: 30000 },
//     { name: "Personal makeup classes (self-application)", price: 70000 },
//     { name: "Makeup Training", price: 120000 },
//     { name: "DIY Makeup class (4 Hours)", price: 60000 },
//     { name: "Walk-in Session (75 Minutes)", price: 35000 },
//     { name: "Walk-in Session + Gele (by the makeup artist) (90 Minutes)", price: 40000 },
//     { name: "Walk-in Session + Gele (professional Gele artist) (90 Minutes)", price: 50000 },
//     { name: "Home Session - Yaba (90 Minutes)", price: 55000 },
//     { name: "Home Session - Surulere (90 Minutes)", price: 60000 },
//     { name: "Home Session - Ikeja (90 Minutes)", price: 65000 },
//     { name: "Home Session - Maryland (90 Minutes)", price: 65000 },
//     { name: "Home Session - Lekki 1 (90 Minutes)", price: 80000 },
//     { name: "Home Session - Ikate / Osapa London (90 Minutes)", price: 90000 },
//     { name: "Home Session - Chevron / Lekki 2 (90 Minutes)", price: 100000 },
//     { name: "Home Session - VGC (90 Minutes)", price: 100000 },
//     { name: "Home Session - Ago (90 Minutes)", price: 70000 },
//     { name: "Home Session - FESTAC (90 Minutes)", price: 70000 },
//     { name: "Home Session - Ojodu Berger (90 Minutes)", price: 70000 },
//     { name: "Home Session - Ilupeju (90 Minutes)", price: 65000 },
//     { name: "Home Session - Gbagada (90 Minutes)", price: 60000 },
//     { name: "Home Session - Agege (90 Minutes)", price: 100000 },
//     { name: "Home Session - Ebute Meta (90 Minutes)", price: 60000 },
//     { name: "Home Session - Magodo (90 Minutes)", price: 70000 },
//     { name: "Home Session - Ogudu (90 Minutes)", price: 70000 }
//   ];
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//       <div className="relative w-full max-w-2xl bg-[#FDFBF7] p-8 md:p-16 text-center shadow-2xl">
//         {/* Close Button */}
//         <button 
//           onClick={onClose}
//           className="absolute top-6 right-6 text-2xl hover:opacity-60"
//         >
//           ✕
//         </button>

//         <h2 className="font-serif text-2xl tracking-widest mb-8">BOOK AN APPOINTMENT</h2>

//         {/* Tabs */}
//         <div className="flex justify-center border-b border-gray-200 mb-8 gap-8 pb-4 text-sm tracking-wide">
//           <button className="border-b border-black font-medium">Appoitment form</button>
//           {/* <button className="text-gray-400">Zenoti</button> */}
//         </div>

//         <p className="text-xs text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
//           This reservation is not guaranteed on the selected day and time. 
//           We will contact you by phone as soon as possible to confirm your time.
//         </p>

//         {/* Form */}
//         <form className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="text" placeholder="Name" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
//             <input type="tel" placeholder="Phone number" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="email" placeholder="Email address" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
//             <div className="grid grid-cols-2 gap-2">
//               <input type="text" placeholder="Date" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
//               <input type="text" placeholder="Time" className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 gap-5">
//             <select onChange={(e) => {
//               const filteredValue = prices.find(p => p.name === e.target.value);
//               setGetPrice(filteredValue ? filteredValue.price : 0)
//             }} name="services" id="services" className='w-full outline-none border border-gray-300 p-3'>
//               <option value="">Select a service</option>
//               {prices.map((price, index) => (
//                 <option key={index} value={price.name}>{price.name}</option>
//               ))}
//             </select>
//             <input type="text" className='p-3 outline-none border border-gray-300' readOnly value={'₦'+getPrice.toLocaleString(undefined, {
//               maximumFractionDigits: 2, 
//               minimumFractionDigits: 2
//             })} />
//           </div>
//           <button className="mt-6 bg-[#1A1A1A] text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-black transition-colors">
//             Book an appointment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentModal;
"use client"
import React, { useState } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(null);

  // Update this with your actual WhatsApp phone number (include country code, no '+')
  const whatsappNumber = "+2348104505065"; 
  const contactEmail = "hello@moniadeboyeartistry.com";

  const serviceCategories = {
    general: [
      { name: "Makeup for film and TV", price: "Consultation" },
      { name: "DIY Makeup class (4 Hours)", price: 60000 },
      { name: "Walk-in Session (75 Minutes)", price: 35000 },
      { name: "Walk-in Session + Gele (by the makeup artist) (90 Minutes)", price: 40000 },
      { name: "Walk-in Session + Gele (professional Gele artist) (90 Minutes)", price: 50000 },
      { name: "Home Session - Yaba (90 Minutes)", price: 55000 },
      { name: "Home Session - Surulere (90 Minutes)", price: 60000 },
      { name: "Home Session - Ikeja (90 Minutes)", price: 65000 },
      { name: "Home Session - Maryland (90 Minutes)", price: 65000 },
      { name: "Home Session - Lekki 1 (90 Minutes)", price: 80000 },
      { name: "Home Session - Ikate / Osapa London (90 Minutes)", price: 90000 },
      { name: "Home Session - Chevron / Lekki 2 (90 Minutes)", price: 100000 },
      { name: "Home Session - VGC (90 Minutes)", price: 100000 },
      { name: "Home Session - Ago (90 Minutes)", price: 70000 },
      { name: "Home Session - FESTAC (90 Minutes)", price: 70000 },
      { name: "Home Session - Ojodu Berger (90 Minutes)", price: 70000 },
      { name: "Home Session - Ilupeju (90 Minutes)", price: 65000 },
      { name: "Home Session - Gbagada (90 Minutes)", price: 60000 },
      { name: "Home Session - Agege (90 Minutes)", price: 100000 },
      { name: "Home Session - Ebute Meta (90 Minutes)", price: 60000 },
      { name: "Home Session - Magodo (90 Minutes)", price: 70000 },
      { name: "Home Session - Ogudu (90 Minutes)", price: 70000 }
    ],
    bridal: [
      { name: "Bridal makeup", price: 30000 }
    ],
    training: [
      { name: "Makeup Training", price: 120000 }
    ]
  };

  const handleServiceChange = (e) => {
    const allServices = Object.values(serviceCategories).flat();
    const service = allServices.find(p => p.name === e.target.value);
    setSelectedService(service || null);
  };

  const handleSubmit = (e) => {
    if (selectedService?.name === "Makeup for film and TV") {
      e.preventDefault();
      const message = encodeURIComponent("Hello! I am interested in a consultation for Makeup for Film and TV.");
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
    // Handle standard form submission logic here for other services
  };

  const renderPrice = () => {
    if (!selectedService) return "₦0.00";
    if (selectedService.name === "Makeup for film and TV") return "Contact for Quote";
    return '₦' + selectedService.price.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] p-8 md:p-16 text-center shadow-2xl overflow-y-auto max-h-[95vh]">
        <button onClick={onClose} className="absolute top-6 right-6 text-2xl hover:opacity-60">✕</button>

        <h2 className="font-serif text-2xl tracking-widest mb-8">BOOK AN APPOINTMENT</h2>

        <div className="flex justify-center border-b border-gray-200 mb-8 gap-8 pb-4 text-sm tracking-wide">
          <button className="border-b border-black font-medium">Appointment form</button>
        </div>

        <p className="text-xs text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
          Selected services may require a deposit. Film & TV inquiries are handled via direct consultation.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" required className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
            <input type="tel" placeholder="Phone number" required className="w-full border border-gray-300 p-3 outline-none focus:border-black" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <select 
              onChange={handleServiceChange} 
              name="services" 
              className='w-full outline-none border border-gray-300 p-3 bg-white'
              required
            >
              <option value="">Select a service</option>
              <optgroup label="General Services">
                {serviceCategories.general.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
              </optgroup>
              <optgroup label="Bridal Services">
                {serviceCategories.bridal.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
              </optgroup>
              <optgroup label="Professional Training">
                {serviceCategories.training.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
              </optgroup>
            </select>

            <input 
              type="text" 
              className='p-3 outline-none border border-gray-300 bg-gray-50' 
              readOnly 
              value={renderPrice()} 
            />
          </div>

          <button 
            type="submit"
            className="mt-6 w-full md:w-auto bg-[#1A1A1A] text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-black transition-colors"
          >
            {selectedService?.name === "Makeup for film and TV" ? "Contact via WhatsApp" : "Book an appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;