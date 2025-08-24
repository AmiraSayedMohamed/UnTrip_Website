import React from 'react';
import { useLanguage } from './LanguageProvider';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">UnTrip</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover authentic travel experiences curated by local experts.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('about_us')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('who_we_are')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('blog')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('locations')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('sitemap')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('faqs')}</a></li>
            </ul>
          </div>

          {/* Terms of Use */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('terms_of_use')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('terms_conditions')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('service_providers')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('privacy_policy')}</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('contact_us')}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Contact@untrip.com - {t('general_inquiries')}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Booking@untrip.com - {t('reservation_inquiries')}</p>
              </div>
              
              <div className="pt-4 space-y-2">
                <p className="text-foreground font-medium">{t('qatar_office')}: +974 3379 9115</p>
                <p className="text-foreground font-medium">{t('jordan_office')}: +962 79200 0131</p>
                <p className="text-foreground font-medium">{t('saudi_arabia_office')}: +966 50 731 7959</p>
                <p className="text-foreground font-medium">{t('usa_office')}: +1 415 800 3987</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-muted-foreground text-sm">
            © 2024 UnTrip. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;