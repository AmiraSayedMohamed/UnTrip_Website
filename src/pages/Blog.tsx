import React from 'react';

const Blog = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-red-200 p-8 rounded-xl shadow-lg">
    <h1 className="text-4xl font-extrabold text-red-800 mb-4 animate-pulse">Travel Blog</h1>
    <p className="text-lg text-gray-700 mb-6">Read travel tips, stories, and news from our community.</p>
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">How to Make the Most of Your Trip</h2>
      <p className="text-gray-600 mb-2">Plan ahead, stay flexible, and enjoy every moment. (More articles coming soon!)</p>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Read More</button>
    </div>
    <div className="mt-8 text-gray-500">(Blog feature coming soon!)</div>
  </div>
);

export default Blog;
