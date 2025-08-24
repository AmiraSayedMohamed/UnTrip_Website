import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ExperienceSection from '@/components/ExperienceSection';
import AuthenticActivitiesSection from '@/components/AuthenticActivitiesSection';
import DestinationsSection from '@/components/DestinationsSection';
import BecomeCuratorSection from '@/components/BecomeCuratorSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategorySection />
      <ExperienceSection />
      <AuthenticActivitiesSection />
      <DestinationsSection />
      <BecomeCuratorSection />
      <Footer />
    </div>
  );
};

export default Index;
