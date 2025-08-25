import React from 'react';

const Explore = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 p-8 rounded-xl shadow-lg">
    <h1 className="text-4xl font-extrabold text-green-800 mb-4 animate-pulse">Explore Experiences</h1>
    <p className="text-lg text-gray-700 mb-6">Browse all experiences, filter by location, category, or date.</p>
    <input className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4 w-full max-w-md" placeholder="Search for an experience..." />
    <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition">Search</button>
    <div className="mt-8 text-gray-500">(Feature coming soon!)</div>
  </div>
);

export default Explore;
