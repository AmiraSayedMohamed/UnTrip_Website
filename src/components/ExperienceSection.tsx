import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import ExperienceCard from './ExperienceCard';
import pyramidsImg from '@/assets/experience-pyramids.jpg';
import bazaarImg from '@/assets/experience-bazaar.jpg';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: "Desert Safari by Quad Bike around Pyramids (Sunset or Sunrise)",
      location: "Cairo, Egypt",
      duration: "4H",
      price: 40,
      currency: "$",
      image: pyramidsImg,
      rating: 4.9,
      reviewCount: 125
    },
    {
      title: "Half Day Tour To Abdeen Palace in Cairo",
      location: "Cairo, Egypt", 
      duration: "4H",
      price: 36,
      currency: "$",
      image: bazaarImg,
      rating: 4.7,
      reviewCount: 89
    },
    {
      title: "El-Moez Street and Khan Khalili Bazaar",
      location: "Cairo, Egypt",
      duration: "4H", 
      price: 40,
      currency: "$",
      image: bazaarImg,
      rating: 4.8,
      reviewCount: 156
    },
    {
      title: "Old Cairo and Khan El Khalili Bazaar",
      location: "Cairo, Egypt",
      duration: "4H",
      price: 40,
      currency: "$", 
      image: pyramidsImg,
      rating: 4.6,
      reviewCount: 203
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {t('what_to_do_egypt')}
            </h2>
            <p className="text-muted-foreground">
              {t('book_private_tour')}
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
            <span className="font-medium">{t('show_all')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;