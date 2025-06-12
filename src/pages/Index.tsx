
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import StonesGallery from '../components/StonesGallery';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BlogSection />
      <StonesGallery />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
