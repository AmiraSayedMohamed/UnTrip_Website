import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import destinationsImg from '@/assets/destinations-collage.jpg';

const DestinationsSection = () => {
  const { t } = useLanguage();

  const destinations = [
    {
      name: 'Doha',
      country: 'Qatar',
      bgPosition: 'bg-center'
    },
    {
      name: 'Amman',
      country: 'Jordan', 
      bgPosition: 'bg-left-top'
    },
    {
      name: 'Al Ula',
      country: 'Saudi Arabia',
      bgPosition: 'bg-right-top'
    },
    {
      name: 'Muscat', 
      country: 'Oman',
      bgPosition: 'bg-right-bottom'
    },
    {
      name: 'Wadi Rum',
      country: 'Jordan',
      bgPosition: 'bg-left-bottom'
    },
    {
      name: 'Al Khawr',
      country: 'Qatar',
      bgPosition: 'bg-center-bottom'
    },
    {
      name: 'Riyadh',
      country: 'Saudi Arabia',
      bgPosition: 'bg-center-top'
    },
    {
      name: 'Salalah',
      country: 'Oman',
      bgPosition: 'bg-left-center'
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {t('untrip_top_destinations')}
            </h2>
            <p className="text-muted-foreground">
              {t('explore_hidden_gems')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className={`relative h-48 rounded-lg overflow-hidden bg-cover bg-no-repeat ${destination.bgPosition} group cursor-pointer hover:scale-105 transition-transform duration-300`}
              style={{ backgroundImage: `url(${destinationsImg})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1">
                  {destination.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {destination.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;