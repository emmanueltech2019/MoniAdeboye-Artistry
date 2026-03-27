"use client";

import React, { useState } from "react";
import Image from "next/image";
import GlobalContainer from "../components/GlobalContainer";
import bridal1 from "@/images/bridal1.jpeg";

const BridalPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GlobalContainer className="py-20 flex flex-col gap-16 font-inter">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-full">
            <Image
              src={bridal1}
              alt="Bridal"
              className="w-full h-[1000px] object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-philosopher">
              BRIDAL PACKAGES
            </h1>

            <p className="text-black leading-relaxed font-sans">
              Designed for the modern bride who values elegance, precision, and
              a seamless beauty experience. Each bridal service is tailored to
              enhance your natural beauty while ensuring a flawless finish that
              lasts throughout your special day.
            </p>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold font-philosopher">
                Within Lagos
              </h2>

              <div className="border rounded-lg p-4 space-y-4 text-sm font-sans">
                <div>
                  <p className="font-semibold">One-Day Event</p>
                  <p>Court Wedding — ₦150,000</p>
                  <p>White Wedding & Reception — ₦250,000</p>
                  <p>Traditional Wedding & Reception — ₦250,000</p>
                </div>

                <div>
                  <p className="font-semibold">Same Day Event</p>
                  <p>Traditional + White Wedding — ₦400,000</p>
                </div>

                <div>
                  <p className="font-semibold">Two-Day Event</p>
                  <p>Complete Bridal Package — ₦600,000</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold font-philosopher">
                Outside Lagos
              </h2>

              <div className="border rounded-lg p-4 space-y-4 text-sm font-sans">
                <div>
                  <p className="font-semibold">Same Day Event</p>
                  <p>₦500,000</p>
                </div>

                <div>
                  <p className="font-semibold">Two-Day Event</p>
                  <p>₦800,000</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpenModal(true)}
              className="mt-4 bg-black text-white py-3 rounded-md hover:opacity-80 transition font-sans"
            >
              Proceed to Book
            </button>
          </div>
        </div>
      </GlobalContainer>

      {openModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-lg w-full rounded-xl p-6 relative animate-fadeIn">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 font-philosopher">
              Important Information
            </h2>

            <div className="space-y-4 text-sm text-gray-600 font-sans">
              {/* CONSULTATION */}
              <div>
                <p className="font-semibold text-black">Bridal Consultation</p>
                <p>
                  We offer a 45-minute consultation via WhatsApp to discuss your
                  desired bridal look in detail.
                </p>

                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Explore your preferred makeup style and wedding vision
                  </li>
                  <li>Assess your skin type for the best product selection</li>
                  <li>Curate a personalized bridal look tailored to you</li>
                </ul>
              </div>

              {/* TRIAL */}
              <div>
                <p className="font-semibold text-black">Bridal Trials</p>
                <p>Complimentary for brides who book our services.</p>
                <p>
                  If you’d like a trial before booking, the cost is ₦60,000
                  (in-studio session or home service with additional fee).
                </p>
              </div>

              {/* TRAVEL */}
              <div>
                <p className="font-semibold text-black">
                  Travel & Accommodation
                </p>
                <p>
                  Clients are responsible for transportation and accommodation
                  for bookings outside Lagos.
                </p>
              </div>

              {/* GELE */}
              <div>
                <p className="font-semibold text-black">Gele Services</p>
                <p>
                  We do not offer gele tying for brides, but we can recommend
                  trusted vendors.
                </p>
              </div>

              {/* NOTE */}
              <div>
                <p className="font-semibold text-black">Please Note</p>
                <p>
                  Any changes to the agreed look after consultation will attract
                  an additional fee.
                </p>
                <p>
                  A 50–70% non-refundable retainer fee is required to secure
                  your booking.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/2348104505065"
              target="_blank"
              className="block mt-6 text-center bg-black text-white py-3 rounded-md hover:opacity-90 transition font-sans"
            >
              Continue Conversation on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default BridalPage;
