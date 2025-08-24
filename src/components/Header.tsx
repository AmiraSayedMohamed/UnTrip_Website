import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, ShoppingCart } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full bg-white border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">UnTrip</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            {t('online_experiences')}
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            {t('explore')}
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            {t('become_curator_nav')}
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            {t('blog')}
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            {t('join_untrip_plus')}
            <span className="ml-1 text-xs bg-white/20 px-1 rounded">New</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="text-sm hover:text-primary transition-colors"
            >
              {t('english')}
            </button>
          </div>
          
          <Button variant="ghost" className="text-primary">
            {t('login')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;