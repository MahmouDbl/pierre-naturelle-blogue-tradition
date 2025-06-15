
import React from 'react';
import Navigation from '../components/Navigation';
import BraceletGalleryHeader from '../components/BraceletGalleryHeader';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import StonesGallery from '../components/StonesGallery';
// import PhotoGallery from '../components/PhotoGallery';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BraceletGalleryHeader />
      <HeroSection />
      <BlogSection />
      <StonesGallery />
      {/* <PhotoGallery /> */}
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
