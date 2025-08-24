import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'online_experiences': 'Online Experiences',
    'explore': 'Explore',
    'become_curator_nav': 'Become a Curator',
    'blog': 'Blog',
    'join_untrip_plus': 'Join UnTrip Plus',
    'login': 'Login',
    'english': 'English (USD)',
    
    // Hero
    'find_unique_things': 'Find unique things to do',
    'curated_locally': 'Curated locally by awesome people',
    'search_placeholder': 'Search by country or activity',
    'date': 'Date',
    'all_categories': 'All Categories',
    'search': 'SEARCH',
    
    // Categories
    'explore_by_category': 'Explore by category',
    'select_experience': 'Select an experience category to start browsing',
    'foodies': 'Foodies',
    'outdoorsy': 'Outdoorsy',
    'artistic': 'Artistic',
    'city_sightseeing': 'City Sightseeing',
    'edutainment': 'Edutainment',
    'spiritual_religious': 'Spiritual & Religious',
    'health_wellness': 'Health & Wellness',
    'adventurous': 'Adventurous',
    
    // What to do section
    'what_to_do_egypt': 'What to do in Egypt',
    'book_private_tour': 'Book your private tour and locally-led experience at any time',
    'show_all': 'Show all',
    
    // Authentic activities
    'authentic_activities': 'Authentic activities and getaways',
    'experiences': 'Experiences',
    'online_experiences_sub': 'Online Experiences',
    'staycations': 'Staycations',
    
    // Top destinations
    'untrip_top_destinations': 'UnTrip top destinations',
    'explore_hidden_gems': 'Explore the hidden gems of your next vacation',
    
    // Happening this week
    'happening_this_week': 'Happening this week',
    'be_first_to_try': 'Be the first to try out these new experiences',
    
    // Become curator
    'earn_money_sharing': 'Earn money by sharing your talent and passion with the world',
    'share_cultural_experiences': '✓ Share your cultural experiences, tours, and activities',
    'meet_wonderful_people': '✓ Meet wonderful people and build long-lasting friendships',
    'pass_knowledge': '✓ Pass the knowledge and earn money doing something you enjoy',
    'become_curator': 'Become a curator',
    
    // Footer
    'about_us': 'About Us',
    'who_we_are': 'Who we are',
    'locations': 'Locations',
    'sitemap': 'Sitemap',
    'faqs': 'FAQs',
    'terms_of_use': 'Terms of Use',
    'terms_conditions': 'Terms and conditions',
    'service_providers': 'Service Providers',
    'privacy_policy': 'Privacy Policy',
    'contact_us': 'Contact us',
    'general_inquiries': 'for general inquiries',
    'reservation_inquiries': 'for reservation inquiries',
    'qatar_office': 'Qatar Office',
    'jordan_office': 'Jordan Office',
    'saudi_arabia_office': 'Saudi Arabia Office',
    'usa_office': 'USA Office',
    
    // Experience details
    'difficulty_level': 'Difficulty Level',
    'easy': 'Easy',
    'duration_time': 'Duration Time',
    'hours': 'Hours',
    'number_of_person': 'Number of Person',
    'person': 'Person',
    'send_enquiry': 'Send an enquiry',
    'what_youre_going_to_do': "What you're going to do",
    'categories': 'Categories:',
    'cancellation_policy': 'Cancellation Policy:',
    'book_now': 'Book Now',
    'add_to_cart': 'Add to cart',
    'per_person': 'Per Person',
    'total': 'Total',
    'tickets_available': 'tickets type available for',
    'ticket': 'Ticket',
    'bookings': 'Booking(s)',
  },
  ar: {
    // Header
    'online_experiences': 'التجارب الافتراضية',
    'explore': 'استكشف',
    'become_curator_nav': 'كن مرشداً',
    'blog': 'المدونة',
    'join_untrip_plus': 'انضم لـ UnTrip Plus',
    'login': 'تسجيل الدخول',
    'english': 'العربية (ريال)',
    
    // Hero
    'find_unique_things': 'اكتشف أنشطة فريدة للقيام بها',
    'curated_locally': 'منسقة محلياً من قبل أشخاص رائعين',
    'search_placeholder': 'ابحث بالدولة أو النشاط',
    'date': 'التاريخ',
    'all_categories': 'جميع الفئات',
    'search': 'بحث',
    
    // Categories
    'explore_by_category': 'استكشف حسب الفئة',
    'select_experience': 'اختر فئة تجربة لبدء التصفح',
    'foodies': 'عشاق الطعام',
    'outdoorsy': 'الأنشطة الخارجية',
    'artistic': 'فنية',
    'city_sightseeing': 'جولات المدينة',
    'edutainment': 'تعليمية ترفيهية',
    'spiritual_religious': 'روحانية ودينية',
    'health_wellness': 'الصحة والعافية',
    'adventurous': 'مغامرة',
    
    // What to do section
    'what_to_do_egypt': 'ما يمكن فعله في مصر',
    'book_private_tour': 'احجز جولتك الخاصة والتجربة المحلية في أي وقت',
    'show_all': 'عرض الكل',
    
    // Authentic activities
    'authentic_activities': 'أنشطة وإجازات أصيلة',
    'experiences': 'التجارب',
    'online_experiences_sub': 'التجارب الافتراضية',
    'staycations': 'إقامات محلية',
    
    // Top destinations
    'untrip_top_destinations': 'أفضل وجهات UnTrip',
    'explore_hidden_gems': 'استكشف الجواهر المخفية لعطلتك القادمة',
    
    // Happening this week
    'happening_this_week': 'يحدث هذا الأسبوع',
    'be_first_to_try': 'كن أول من يجرب هذه التجارب الجديدة',
    
    // Become curator
    'earn_money_sharing': 'احصل على المال من خلال مشاركة موهبتك وشغفك مع العالم',
    'share_cultural_experiences': '✓ شارك تجاربك الثقافية والجولات والأنشطة',
    'meet_wonderful_people': '✓ التق بأشخاص رائعين وابنِ صداقات دائمة',
    'pass_knowledge': '✓ انقل المعرفة واحصل على المال من خلال فعل شيء تستمتع به',
    'become_curator': 'كن مرشداً',
    
    // Footer
    'about_us': 'من نحن',
    'who_we_are': 'من نحن',
    'locations': 'المواقع',
    'sitemap': 'خريطة الموقع',
    'faqs': 'الأسئلة الشائعة',
    'terms_of_use': 'شروط الاستخدام',
    'terms_conditions': 'الشروط والأحكام',
    'service_providers': 'مقدمو الخدمات',
    'privacy_policy': 'سياسة الخصوصية',
    'contact_us': 'اتصل بنا',
    'general_inquiries': 'للاستفسارات العامة',
    'reservation_inquiries': 'لاستفسارات الحجز',
    'qatar_office': 'مكتب قطر',
    'jordan_office': 'مكتب الأردن',
    'saudi_arabia_office': 'مكتب السعودية',
    'usa_office': 'مكتب الولايات المتحدة',
    
    // Experience details
    'difficulty_level': 'مستوى الصعوبة',
    'easy': 'سهل',
    'duration_time': 'مدة التجربة',
    'hours': 'ساعات',
    'number_of_person': 'عدد الأشخاص',
    'person': 'شخص',
    'send_enquiry': 'أرسل استفساراً',
    'what_youre_going_to_do': 'ما ستقوم بفعله',
    'categories': 'الفئات:',
    'cancellation_policy': 'سياسة الإلغاء:',
    'book_now': 'احجز الآن',
    'add_to_cart': 'أضف للسلة',
    'per_person': 'للشخص الواحد',
    'total': 'المجموع',
    'tickets_available': 'نوع تذاكر متاح لـ',
    'ticket': 'تذكرة',
    'bookings': 'حجز',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};