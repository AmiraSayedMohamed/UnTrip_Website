import React, { useState } from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = ({ setSelectedCategory }: { setSelectedCategory: (cat: string) => void }) => {
  const { t } = useLanguage();
  const [showCategories, setShowCategories] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [durationFilter, setDurationFilter] = useState<'exact' | '+1' | '+5' | '+15'>('exact');

  const categories = [
    'foodies',
    'outdoorsy', 
    'artistic',
    'city_sightseeing',
    'edutainment',
    'spiritual_religious',
    'health_wellness',
    'adventurous'
  ];

  return (
    <section 
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {t('find_unique_things')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {t('curated_locally')}
        </p>
        
        {/* Search Bar */}
        <div className="bg-white rounded-full p-2 flex items-center gap-2 max-w-4xl mx-auto shadow-lg">
          <div className="flex items-center gap-2 flex-1 px-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder={t('search_placeholder')}
              className="border-none shadow-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="h-8 w-px bg-border"></div>
          

          <div className="flex items-center gap-2 px-4 min-w-[180px] relative">
            <button
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setShowCalendar((v) => !v)}
            >
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span>{selectedDate ? selectedDate.toLocaleDateString() : t('date')}</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
            {showCalendar && (
              <div className="absolute top-10 left-0 z-30 bg-white rounded-lg shadow-lg p-4">
                <div className="text-gray-800">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    onDayClick={() => setShowCalendar(false)}
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => setDurationFilter('exact')} className={`px-2 py-1 rounded ${durationFilter==='exact'?'bg-primary text-white':'bg-gray-200 text-gray-800'}`}>Exact dates</button>
                  <button onClick={() => setDurationFilter('+1')} className={`px-2 py-1 rounded ${durationFilter==='+1'?'bg-primary text-white':'bg-gray-200 text-gray-800'}`}>+1 Day</button>
                  <button onClick={() => setDurationFilter('+5')} className={`px-2 py-1 rounded ${durationFilter==='+5'?'bg-primary text-white':'bg-gray-200 text-gray-800'}`}>+5 Days</button>
                  <button onClick={() => setDurationFilter('+15')} className={`px-2 py-1 rounded ${durationFilter==='+15'?'bg-primary text-white':'bg-gray-200 text-gray-800'}`}>+15 Days</button>
                </div>
                <div className="flex justify-end mt-2">
                  <button onClick={() => setShowCalendar(false)} className="px-3 py-1 bg-primary text-white rounded">Apply</button>
                </div>
              </div>
            )}
          </div>
          
          <div className="h-8 w-px bg-border"></div>
          
          <div className="relative">
            <button 
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 px-4 min-w-[160px] text-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">{t('all_categories')}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {showCategories && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-20">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategories(false);
                    }}
                  >
                    {t(category)}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-8 font-semibold">
            {t('search')}
          </Button>
          {/*
            TODO: On search, filter trips based on durationFilter:
            - If durationFilter is '+5', only show trips with duration > 5 days
            - This requires trip data to have a duration property
          */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;