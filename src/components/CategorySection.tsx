import React from 'react';
import { useLanguage } from './LanguageProvider';
import foodiesImg from '@/assets/category-foodies.jpg';
import outdoorsyImg from '@/assets/category-outdoorsy.jpg';
import artisticImg from '@/assets/category-artistic.jpg';
import sightseeingImg from '@/assets/category-sightseeing.jpg';

const CategorySection = () => {
  const { t } = useLanguage();

  const categories = [
    { key: 'foodies', image: foodiesImg },
    { key: 'outdoorsy', image: outdoorsyImg },
    { key: 'artistic', image: artisticImg },
    { key: 'city_sightseeing', image: sightseeingImg },
    { key: 'edutainment', image: sightseeingImg }, // reuse for now
    { key: 'spiritual_religious', image: artisticImg }, // reuse for now
    { key: 'health_wellness', image: outdoorsyImg }, // reuse for now
    { key: 'adventurous', image: outdoorsyImg }, // reuse for now
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('explore_by_category')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('select_experience')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div 
              key={category.key}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={category.image} 
                  alt={t(category.key)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="text-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {t(category.key)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;