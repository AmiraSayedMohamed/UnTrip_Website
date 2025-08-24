import React from 'react';
import { Heart, MapPin, Clock, Users } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface ExperienceCardProps {
  title: string;
  location: string;
  duration: string;
  price: number;
  currency: string;
  image: string;
  rating?: number;
  reviewCount?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  location,
  duration,
  price,
  currency,
  image,
  rating,
  reviewCount
}) => {
  const { t } = useLanguage();

  return (
    <div className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
          <Clock className="h-3 w-3 ml-2" />
          <span>{duration}</span>
        </div>
        
        {rating && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <span className="text-yellow-500">★</span>
            <span>{rating}</span>
            {reviewCount && (
              <span>({reviewCount} reviews)</span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-foreground">{currency}{price}.00</span>
            <span className="text-sm text-muted-foreground"> / {t('bookings')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;