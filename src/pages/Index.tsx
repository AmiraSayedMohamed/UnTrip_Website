import cookingImg from '@/assets/Traditional Eastern Cooking Workshop.png';
import jewelryImg from '@/assets/Simple Jewelry Making Workshop.png';
import recyclingImg from '@/assets/Recycling Workshop.png';
import potteryImg from '@/assets/Pottery Workshop.png';
import naturePhotoImg from '@/assets/Nature Photography Workshop.png';
import handEmbroideryImg from '@/assets/Hand Embroidery Workshop.png';
import glassPaintingImg from '@/assets/Glass Painting Workshop.png';
import calligraphyImg from '@/assets/Arabic Calligraphy Workshop.png';
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
import art1Img from '@/assets/Art1 WorkShop.jpg';
import art2Img from '@/assets/Art2 Workshop.jpg';
import art3Img from '@/assets/Art3 WorkShop.jpg';
import fabricImg from '@/assets/Fabric Workshop.jpg';
import fashionImg from '@/assets/Fashion WorkShop.jpg';
import flowersImg from '@/assets/Flowers Making Workshop.jpg';
import paintingBeachImg from '@/assets/image.png';
import lampshadeImg from '@/assets/Lampshade painting workshop.jpg';
import mugImg from '@/assets/Mug Making workshop.jpg';
import rural1Img from '@/assets/Rural Trip1.jpg';
import rural2Img from '@/assets/Rural Trip2.jpg';
import rural3Img from '@/assets/Rural Trip3.jpg';
import rural4Img from '@/assets/Rural Trip4.jpg';
import rural5Img from '@/assets/Rural Trip5.jpg';
import rural6Img from '@/assets/Rural Trip6.jpg';
import rural7Img from '@/assets/Rural Trip7.jpg';
import rural8Img from '@/assets/Rural Trip8.jpg';
import Footer from '@/components/Footer';
import PayPalButton from '@/components/PayPalButton';

const experiences = [
  {
    title: "Traditional Eastern Cooking Workshop",
    location: "Cairo, Egypt",
    duration: "2.5H",
    price: 27,
    currency: "$",
    image: cookingImg,
    rating: 4.8,
    reviewCount: 14,
    category: 'foodies',
  },
  {
    title: "Simple Jewelry Making Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 21,
    currency: "$",
    image: jewelryImg,
    rating: 4.6,
    reviewCount: 10,
    category: 'artistic',
  },
  {
    title: "Recycling Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 19,
    currency: "$",
    image: recyclingImg,
    rating: 4.5,
    reviewCount: 8,
    category: 'artistic',
  },
  {
    title: "Pottery Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 24,
    currency: "$",
    image: potteryImg,
    rating: 4.8,
    reviewCount: 13,
    category: 'artistic',
  },
  {
    title: "Nature Photography Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 22,
    currency: "$",
    image: naturePhotoImg,
    rating: 4.7,
    reviewCount: 11,
    category: 'artistic',
  },
  {
    title: "Hand Embroidery Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 18,
    currency: "$",
    image: handEmbroideryImg,
    rating: 4.6,
    reviewCount: 9,
    category: 'artistic',
  },
  {
    title: "Glass Painting Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 20,
    currency: "$",
    image: glassPaintingImg,
    rating: 4.7,
    reviewCount: 10,
    category: 'artistic',
  },
  {
    title: "Arabic Calligraphy Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 15,
    currency: "$",
    image: calligraphyImg,
    rating: 4.8,
    reviewCount: 17,
    category: 'artistic',
  },
  {
    title: "ART3 Workshop",
    location: "Cairo, Egypt",
    duration: "3H",
    price: 23,
    currency: "$",
    image: art3Img,
    rating: 4.6,
    reviewCount: 15,
    category: 'artistic',
  },
  {
    title: "ART2 Workshop",
    location: "Cairo, Egypt",
    duration: "3H",
    price: 42,
    currency: "$",
    image: art2Img,
    rating: 4.7,
    reviewCount: 20,
    category: 'artistic',
  },
  {
    title: "Rural Trip8",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 31,
    currency: "$",
    image: rural8Img,
    rating: 4.4,
    reviewCount: 6,
    category: 'outdoorsy',
  },
  {
    title: "Rural Trip7",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 33,
    currency: "$",
    image: rural7Img,
    rating: 4.5,
    reviewCount: 7,
    category: 'outdoorsy',
  },
  {
    title: "Rural Trip6",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 46,
    currency: "$",
    image: rural6Img,
    rating: 4.6,
    reviewCount: 8,
    category: 'outdoorsy',
  },
  {
    title: "Rural Trip5",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 32,
    currency: "$",
    image: rural5Img,
    rating: 4.6,
    reviewCount: 9,
    category: 'outdoorsy',
  },
  {
    title: "Rural Trip4",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 54,
    currency: "$",
    image: rural4Img,
    rating: 4.7,
    reviewCount: 13,
    category: 'outdoorsy',
  },
  {
    title: "Rural Trip3",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 44,
    currency: "$",
    image: rural3Img,
    rating: 4.7,
    reviewCount: 11,
    category: 'outdoorsy',
  },
  {
    title: "Rural Trip2",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 55,
    currency: "$",
    image: rural2Img,
    rating: 4.8,
    reviewCount: 15,
    category: 'outdoorsy',
  },
  // Art Workshop Experience (all images in one card)
  {
    title: "Art WorkShop",
    location: "Cairo, Egypt",
    duration: "3H",
    price: 42,
    currency: "$",
    image: art1Img,
    images: [art1Img, art2Img, art3Img],
    rating: 4.8,
    reviewCount: 113,
    category: 'artistic',
  },
  {
    title: "Fabric Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 34,
    currency: "$",
    image: fabricImg,
    rating: 4.6,
    reviewCount: 22,
    category: 'artistic',
  },
  {
    title: "Fashion Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 38,
    currency: "$",
    image: fashionImg,
    rating: 4.7,
    reviewCount: 18,
    category: 'artistic',
  },
  {
    title: "Flowers Making",
    location: "Cairo, Egypt",
    duration: "1.5H",
    price: 22,
    currency: "$",
    image: flowersImg,
    rating: 4.5,
    reviewCount: 10,
    category: 'artistic',
  },
  {
    title: "Painting by Beach Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 30,
    currency: "$",
    image: paintingBeachImg,
    rating: 4.6,
    reviewCount: 12,
    category: 'artistic',
  },
  {
    title: "Lampshade Painting Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 28,
    currency: "$",
    image: lampshadeImg,
    rating: 4.4,
    reviewCount: 8,
    category: 'artistic',
  },
  {
    title: "Mug Making Workshop",
    location: "Cairo, Egypt",
    duration: "2H",
    price: 25,
    currency: "$",
    image: mugImg,
    rating: 4.5,
    reviewCount: 14,
    category: 'artistic',
  },
  {
    title: "Rural Trip1 Workshop",
    location: "Cairo, Egypt",
    duration: "4H",
    price: 50,
    currency: "$",
    image: rural1Img,
    images: [rural1Img, rural2Img, rural3Img, rural4Img, rural5Img, rural6Img, rural7Img, rural8Img],
    rating: 4.9,
    reviewCount: 30,
    category: 'outdoorsy',
  },
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
  <PayPalButton amount={10} />
      </div>
      <Footer />
    </div>
  );
};


export { experiences };
export default Index;
