import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';

const BecomeCuratorSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t('earn_money_sharing')}
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-foreground flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                {t('share_cultural_experiences')}
              </p>
              <p className="text-foreground flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                {t('meet_wonderful_people')}
              </p>
              <p className="text-foreground flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                {t('pass_knowledge')}
              </p>
            </div>
            
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full">
              {t('become_curator')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right side - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-96 flex items-center justify-center">
              {/* Network illustration with circles and connections */}
              <div className="relative w-full h-full">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                
                {/* Surrounding circles */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div key={i}>
                      {/* Connection line */}
                      <div 
                        className="absolute top-1/2 left-1/2 origin-left bg-primary/30 h-0.5"
                        style={{
                          width: `${radius}px`,
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                        }}
                      />
                      {/* Circle */}
                      <div
                        className="absolute w-12 h-12 bg-primary/20 rounded-full border-2 border-primary/40"
                        style={{
                          top: `calc(50% + ${y}px)`,
                          left: `calc(50% + ${x}px)`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeCuratorSection;