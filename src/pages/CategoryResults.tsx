import React from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for demonstration
const experiences = [
  { id: 1, title: 'Food Tour in Cairo', category: 'foodies', image: '/src/assets/category-foodies.jpg' },
  { id: 2, title: 'Mountain Hike', category: 'outdoorsy', image: '/src/assets/category-outdoorsy.jpg' },
  { id: 3, title: 'Art Workshop', category: 'artistic', image: '/src/assets/category-artistic.jpg' },
  { id: 4, title: 'Street Food Night', category: 'foodies', image: '/src/assets/category-foodies.jpg' },
  // ...add more as needed
];

const CategoryResults = () => {
  const { category } = useParams();
  const filtered = experiences.filter(e => e.category === category);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 capitalize">{category} Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 && <div>No experiences found for this category.</div>}
        {filtered.map(exp => (
          <div key={exp.id} className="bg-white rounded shadow p-4 flex items-center gap-4">
            <img src={exp.image} alt={exp.title} className="w-24 h-24 object-cover rounded" />
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <div className="text-gray-500 capitalize">{exp.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryResults;
