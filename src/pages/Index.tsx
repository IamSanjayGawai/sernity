
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import FloorPlans from '../components/FloorPlans';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Family from '@/components/Family';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Family/>
      <FloorPlans />
      <Features />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
