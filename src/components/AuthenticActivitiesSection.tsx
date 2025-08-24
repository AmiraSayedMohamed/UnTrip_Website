import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const AuthenticActivitiesSection = () => {
  const { t } = useLanguage();

  const activities = [
    {
      title: t('experiences'),
      subtitle: "Explore",
      description: t('explore'),
      bgColor: 'from-amber-500/80 to-orange-600/80',
      textColor: 'text-white'
    },
    {
      title: t('online_experiences_sub'), 
      subtitle: "Stay at home",
      description: t('online_experiences'),
      bgColor: 'from-blue-400/80 to-cyan-500/80',
      textColor: 'text-white'
    },
    {
      title: t('staycations'),
      subtitle: "Local + International", 
      description: t('staycations'),
      bgColor: 'from-yellow-500/80 to-amber-600/80',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('authentic_activities')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className={`relative h-64 rounded-lg overflow-hidden bg-gradient-to-br ${activity.bgColor} group cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="text-sm font-medium text-white/80 mb-2">
                  {activity.subtitle}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${activity.textColor} mb-2`}>
                    {activity.title}
                  </h3>
                </div>
                <div className="flex justify-end">
                  <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                    <span className="text-white text-sm font-medium px-2">{t('show_all')}</span>
                    <ArrowRight className="h-4 w-4 text-white inline-block ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthenticActivitiesSection;