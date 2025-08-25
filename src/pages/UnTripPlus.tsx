import React from 'react';

const UnTripPlus = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-300 p-8 rounded-xl shadow-lg">
    <h1 className="text-4xl font-extrabold text-indigo-800 mb-4 animate-bounce">Join UnTrip Plus</h1>
    <p className="text-lg text-gray-700 mb-6">Unlock premium benefits and exclusive experiences with UnTrip Plus!</p>
    <ul className="mb-6 text-left text-gray-700">
      <li className="mb-2">✔️ Early access to new experiences</li>
      <li className="mb-2">✔️ Special discounts</li>
      <li className="mb-2">✔️ Members-only events</li>
    </ul>
    <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700 transition">Join Now</button>
    <div className="mt-8 text-gray-500">(Membership feature coming soon!)</div>
  </div>
);

export default UnTripPlus;
