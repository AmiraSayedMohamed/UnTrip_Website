import React from 'react';

const BecomeCurator = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-8 rounded-xl shadow-lg">
    <h1 className="text-4xl font-extrabold text-orange-800 mb-4 animate-bounce">Become a Curator</h1>
    <p className="text-lg text-gray-700 mb-6">Apply to become a curator and create/manage experiences.</p>
    <form className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow">
      <input className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your Name" />
      <input className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Email" />
      <textarea className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Why do you want to be a curator?" />
      <button className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold shadow hover:bg-orange-700 transition">Apply</button>
    </form>
    <div className="mt-8 text-gray-500">(Form not yet functional)</div>
  </div>
);

export default BecomeCurator;
