
// "use client";
// import React, { useState } from "react";

// const AppointmentModal = ({ isOpen, onClose }) => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [step, setStep] = useState(1); // 1: Form, 2: Payment
//   const [receipt, setReceipt] = useState(null);

//   const whatsappNumber = "2348104505065";
//   const accountDetails = {
//     bank: "Opay",
//     number: "9076516441",
//     name: "Monisola Adeboye A.",
//   };

//   const serviceCategories = {
//     general: [
//       { name: "Makeup for film and TV", price: "Consultation" },
//       { name: "DIY Makeup class (4 Hours)", price: 60000 },
//       { name: "Walk-in Session (75 Minutes)", price: 35000 },
//       { name: "Walk-in Session + Gele (by the makeup artist) (90 Minutes)", price: 40000 },
//       { name: "Walk-in Session + Gele (professional Gele artist) (90 Minutes)", price: 50000 },
//       { name: "Home Session - Yaba (90 Minutes)", price: 55000 },
//       { name: "Home Session - Surulere (90 Minutes)", price: 60000 },
//       { name: "Home Session - Ikeja (90 Minutes)", price: 65000 },
//       { name: "Home Session - Maryland (90 Minutes)", price: 65000 },
//       { name: "Home Session - Lekki 1 (90 Minutes)", price: 80000 },
//       { name: "Home Session - Ikate / Osapa London (90 Minutes)", price: 90000 },
//       { name: "Home Session - Chevron / Lekki 2 (90 Minutes)", price: 100000 },
//       { name: "Home Session - VGC (90 Minutes)", price: 100000 },
//       { name: "Home Session - Ago (90 Minutes)", price: 70000 },
//       { name: "Home Session - FESTAC (90 Minutes)", price: 70000 },
//       { name: "Home Session - Ojodu Berger (90 Minutes)", price: 70000 },
//       { name: "Home Session - Ilupeju (90 Minutes)", price: 65000 },
//       { name: "Home Session - Gbagada (90 Minutes)", price: 60000 },
//       { name: "Home Session - Agege (90 Minutes)", price: 100000 },
//       { name: "Home Session - Ebute Meta (90 Minutes)", price: 60000 },
//       { name: "Home Session - Magodo (90 Minutes)", price: 70000 },
//       { name: "Home Session - Ogudu (90 Minutes)", price: 70000 },
//     ],
//     bridal: [{ name: "Bridal makeup", price: 30000 }],
//     training: [{ name: "Makeup Training", price: 120000 }],
//   };


//   const handleNextStep = (e) => {
//     e.preventDefault();
//     if (!selectedService) return alert("Please select a service");
//     setStep(2); // Move to payment display
//   };

//   // 2. FIXED: Use double optional chaining to prevent 'Cannot read property of undefined'
//   const isHomeService = selectedService?.name?.toLowerCase().includes("home session");

//   const handleServiceChange = (e) => {
//     const allServices = Object.values(serviceCategories).flat();
//     const service = allServices.find((p) => p.name === e.target.value);
//     setSelectedService(service || null);
//   };

//   const handleSubmitFinal = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const details = Object.fromEntries(formData);

//     let messageBody = `NEW BOOKING REQUEST\n` +
//                       `------------------\n` +
//                       `Service: ${selectedService.name}\n` +
//                       `Name: ${details.name}\n` +
//                       `Phone: ${details.phone}\n` +
//                       `Date/Time: ${details.date} at ${details.time}\n` +
//                       `Payment: Paid to ${accountDetails.bank} (Receipt Uploaded)`;

//     const finalMessage = encodeURIComponent(messageBody);
//     window.open(`https://wa.me/${whatsappNumber}?text=${finalMessage}`, "_blank");
//     onClose();
//     setStep(1); // Reset for next time
//   };

//   const renderPrice = () => {
//     if (!selectedService) return "₦0.00";
//     if (typeof selectedService.price === "string") return selectedService.price;
//     return "₦" + selectedService.price.toLocaleString();
//   };

//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//       <div className="relative w-full max-w-2xl bg-[#FDFBF7] p-8 md:p-12 text-center shadow-2xl overflow-y-auto max-h-[95vh]">
// <button onClick={() => { onClose(); setStep(1); }} className="absolute top-6 right-6 text-2xl hover:opacity-60">✕</button>
// <h2 className="font-serif text-2xl tracking-widest mb-6 uppercase">
//           {step === 1 ? "Book an Appointment" : "Complete Payment"}
//         </h2>
//         <div className="flex justify-center border-b border-gray-200 mb-6 gap-8 pb-4 text-sm tracking-wide">
//           {/* <button type="button" className="border-b border-black font-medium">Appointment Form</button> */}
//         </div>
//         <p className="text-xs text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
//            This reservation is not guaranteed on the selected day and time. We
//            will contact you by phone as soon as possible to confirm your time.
//          </p>

//         <form className="space-y-4" onSubmit={step === 1 ? handleNextStep : handleSubmitFinal}>
//           {step === 1 ? (
//             /* --- STEP 1: SERVICE DETAILS --- */
//             <div className="space-y-4 animate-in fade-in duration-500">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input name="name" type="text" placeholder="Name" required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
//                 <input name="phone" type="tel" placeholder="Phone number" required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input name="email" type="email" placeholder="Email address" required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
//                 <div className="grid grid-cols-2 gap-2">
//                   <input name="date" type="date" required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
//                   <input name="time" type="time" required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <select onChange={handleServiceChange} name="service" className="w-full outline-none border border-gray-300 p-3 bg-white" required>
//                   <option value="">Select a service</option>
//                   {Object.entries(serviceCategories).map(([key, services]) => (
//                     <optgroup key={key} label={key.toUpperCase()}>
//                       {services.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
//                     </optgroup>
//                   ))}
//                 </select>
//                 <input type="text" className="p-3 outline-none border border-gray-300 bg-gray-50 font-bold" readOnly value={renderPrice()} />
//               </div>

//               {isHomeService && (
//                 <textarea name="address" placeholder="Full Address" required className="w-full border border-gray-300 p-3 h-20" />
//               )}

//               <button type="submit" className="w-full bg-black text-white py-4 uppercase tracking-widest">
//                 Continue to Payment
//               </button>
//             </div>
//           ) : (
//             /* --- STEP 2: PAYMENT SESSION --- */
//             <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
//               <div className="bg-gray-100 p-6 rounded-lg text-left border-l-4 border-black">
//                 <p className="text-xs uppercase text-gray-500 mb-2">Transfer to the details below:</p>
//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm">Bank:</span>
//                     <span className="font-bold">{accountDetails.bank}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm">Account Number:</span>
//                     <span className="font-mono font-bold text-lg text-green-700">{accountDetails.number}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm">Account Name:</span>
//                     <span className="font-bold">{accountDetails.name}</span>
//                   </div>
//                   <div className="flex justify-between items-center border-t pt-2 mt-2">
//                     <span className="text-sm">Amount to Pay:</span>
//                     <span className="font-bold text-xl">{renderPrice()}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-left">
//                 <label className="block text-xs font-medium uppercase mb-2">Upload Receipt (Image/PDF)</label>
//                 <input 
//                   type="file" 
//                   accept="image/*" 
//                   required 
//                   onChange={(e) => setReceipt(e.target.files[0])}
//                   className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
//                 />
//               </div>

//               <div className="flex gap-4">
//                 <button type="button" onClick={() => setStep(1)} className="w-1/3 border border-black py-4 uppercase text-xs">Back</button>
//                 <button type="submit" className="w-2/3 bg-green-700 text-white py-4 uppercase text-xs tracking-widest font-bold">Confirm & Book</button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentModal;
"use client";
import { Dot } from "lucide-react";
import React, { useState } from "react";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [step, setStep] = useState(1); 
  // 1. ADDED: State to hold form data between steps
  const [formData, setFormData] = useState({});
  const [receipt, setReceipt] = useState(null);

  const whatsappNumber = "2348104505065";
  const accountDetails = {
    bank: "Opay",
    number: "9076516441",
    name: "Monisola Adeboye A.",
  };

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
      { name: "Home Session - Ogudu (90 Minutes)", price: 70000 },
    ],
    bridal: [{ name: "Bridal makeup", price: "Consultation" }],
    training: [{ name: "Makeup Training", price: 120000 }],
  };

  const isHomeService = selectedService?.name?.toLowerCase().includes("home session");

  const handleServiceChange = (e) => {
    const allServices = Object.values(serviceCategories).flat();
    const service = allServices.find((p) => p.name === e.target.value);
    setSelectedService(service || null);
  };

  // 2. FIXED: Capture data here before the inputs disappear
  const handleNextStep = (e) => {
    e.preventDefault();
    if (!selectedService) return alert("Please select a service");
    
    const data = new FormData(e.currentTarget);
    setFormData(Object.fromEntries(data)); // Save inputs to state
    setStep(prev => prev + 1);
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    
    // 3. FIXED: Use the formData from state instead of e.target
    let messageBody = `NEW BOOKING REQUEST\n` +
                      `------------------\n` +
                      `Service: ${selectedService.name}\n` +
                      `Name: ${formData.name}\n` +
                      `Phone: ${formData.phone}\n` +
                      `Date/Time: ${formData.date} at ${formData.time}\n` +
                      `Payment: Paid to ${accountDetails.bank} (Receipt Uploaded)`;

    if (formData.address) {
        messageBody += `\nAddress: ${formData.address}`;
    }

    const finalMessage = encodeURIComponent(messageBody);
    window.open(`https://wa.me/${whatsappNumber}?text=${finalMessage}`, "_blank");
    onClose();
    setStep(1);
    setFormData({}); // Clear data
  };

  const renderPrice = () => {
    if (!selectedService) return "₦0.00";
    if (typeof selectedService.price === "string") return selectedService.price;
    return "₦" + selectedService.price.toLocaleString();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] p-8 md:p-12 text-center shadow-2xl overflow-y-auto max-h-[95vh]">
        <button onClick={() => { onClose(); setStep(1); }} className="absolute top-6 right-6 text-2xl hover:opacity-60">✕</button>
        
        <h2 className="font-serif text-2xl tracking-widest mb-6 uppercase">
          {step === 1 ? "Book an Appointment" : "Complete Payment"}
        </h2>
                <p className="text-xs text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
            Your booking request has been received. We will contact you shortly after payment confirmation to confirm your appointment time.
          </p>

        <form className="space-y-4" onSubmit={step === 1 ? handleNextStep : step === 2 ? handleNextStep : handleSubmitFinal}>
          {step === 1 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" type="text" placeholder="Name" defaultValue={formData.name} required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
                <input name="phone" type="tel" placeholder="Phone number" defaultValue={formData.phone} required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="Email address" defaultValue={formData.email} required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
                <div className="grid grid-cols-2 gap-2">
                  <input name="date" type="date" placeholder="date" defaultValue={formData.date} required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
                  <input name="time" type="time" placeholder="time" defaultValue={formData.time} required className="w-full border border-gray-300 p-3 outline-none focus:border-black bg-transparent" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select onChange={handleServiceChange} name="service" defaultValue={selectedService?.name} className="w-full outline-none border border-gray-300 p-3 bg-white" required>
                  <option value="">Select a service</option>
                  {Object.entries(serviceCategories).map(([key, services]) => (
                    <optgroup key={key} label={key.toUpperCase()}>
                      {services.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)}
                    </optgroup>
                  ))}
                </select>
                <input type="text" className="p-3 outline-none border border-gray-300 bg-gray-50 font-bold" readOnly value={renderPrice()} />
              </div>

              {isHomeService && (
                <textarea name="address" placeholder="Full Address" defaultValue={formData.address} required className="w-full border border-gray-300 p-3 h-20" />
              )}

              <button type="submit" className="w-full bg-black text-white py-4 uppercase tracking-widest">
                View Payment Policy
              </button>
            </div>
          ) : step === 2 ? (
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg text-left border-l-4 border-black">
                <p className="text-xs uppercase text-gray-500 mb-2">WALK-IN BOOKING POLICY</p>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>To complete your booking, a 50% deposit is required to secure your date and time.</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Deposit must be paid at least 48 hours before your appointment.</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>All payments are non-refundable.</p>
                </div>
                <p className="font-bold text-xl mt-5">Punctuality</p>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Please arrive exactly at your booked time.</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>A 15-minute grace period applies.</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>After the grace period, 50% of your deposit will be forfeited and the balance must be paid before service commences.</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Lateness of over 1 hour may result in cancellation with no refund. Cancellation / Rescheduling</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Cancellations or rescheduling within 24 hours of the appointment will result in loss of deposit</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Rescheduling earlier than 24 hours may be considered once, subject to availability.</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Rescheduling earlier than 24 hours may be considered once, subject to availability.</p>
                </div>
                <p className="font-bold text-xl mt-5">Guests</p>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>One client per appointment</p>
                </div>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>Only one additional person is allowed when necessary</p>
                </div>
                <p className="font-bold text-xl mt-5">Content Usage</p>
                <div className="flex items-center">
                  <Dot fill="black" />
                  <p>By booking, clients cconsent to photos and videos being taken and used for promotional purposes, unless stated otherwise before the session.</p>
                </div>
                <p className="mt-5">Thank you for your undetstanding <br /> See you at your appointment time.</p>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 border border-black py-4 uppercase text-xs">Back</button>
                <button type="submit" className="w-2/3 bg-green-700 text-white py-4 uppercase text-xs tracking-widest font-bold">I Agree</button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg text-left border-l-4 border-black">
                <p className="text-xs uppercase text-gray-500 mb-2">Transfer to the details below:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm"><span>Bank:</span><span className="font-bold">{accountDetails.bank}</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm">Account Number:</span><span className="font-mono font-bold text-lg text-green-700">{accountDetails.number}</span></div>
                  <div className="flex justify-between items-center text-sm"><span>Account Name:</span><span className="font-bold">{accountDetails.name}</span></div>
                  <div className="flex justify-between items-center border-t pt-2 mt-2 font-bold text-lg"><span>Total:</span><span>{renderPrice()}</span></div>
                </div>
              </div>

              <div className="text-left">
                <label className="block text-xs font-medium uppercase mb-2">Upload Receipt</label>
                <input type="file" accept="image/*" required onChange={(e) => setReceipt(e.target.files[0])} className="w-full text-sm" />
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(2)} className="w-1/3 border border-black py-4 uppercase text-xs">Back</button>
                <button type="submit" className="w-2/3 bg-green-700 text-white py-4 uppercase text-xs tracking-widest font-bold">Confirm & Book</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;