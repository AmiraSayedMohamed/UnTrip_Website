import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ExperienceSection from '@/components/ExperienceSection';
import AuthenticActivitiesSection from '@/components/AuthenticActivitiesSection';
import DestinationsSection from '@/components/DestinationsSection';
import BecomeCuratorSection from '@/components/BecomeCuratorSection';


import pyramidsImg from '@/assets/experience-pyramids.jpg';
import bazaarImg from '@/assets/experience-bazaar.jpg';
import Footer from '@/components/Footer';
import PayPalButton from '@/components/PayPalButton';

const experiences = [
  {
    title: "Desert Safari by Quad Bike around Pyramids (Sunset or Sunrise)",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 40,
    currency: "$",
  image: pyramidsImg,
    rating: 4.9,
    reviewCount: 125,
    category: 'outdoorsy',
  },
  {
    title: "Half Day Tour To Abdeen Palace in Cairo",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 36,
    currency: "$",
  image: bazaarImg,
    rating: 4.7,
    reviewCount: 89,
    category: 'artistic',
  },
  {
    title: "El-Moez Street and Khan Khalili Bazaar",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 40,
    currency: "$",
  image: bazaarImg,
    rating: 4.8,
    reviewCount: 156,
    category: 'foodies',
  },
  {
    title: "Old Cairo and Khan El Khalili Bazaar",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 40,
    currency: "$",
  image: pyramidsImg,
    rating: 4.6,
    reviewCount: 203,
    category: 'foodies',
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredExperiences = selectedCategory
    ? experiences.filter(e => e.category === selectedCategory)
    : experiences;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection setSelectedCategory={setSelectedCategory} />
      <CategorySection setSelectedCategory={setSelectedCategory} />
      <ExperienceSection experiences={filteredExperiences} />
      <AuthenticActivitiesSection />
      <DestinationsSection />
      <BecomeCuratorSection />
      {/* PayPal payment button for users */}
      <div className="flex justify-center my-8">
        <PayPalButton />
      </div>
      <Footer />
    </div>
  );
};


export { experiences };
export default Index;
