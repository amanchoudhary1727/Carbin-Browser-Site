import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Showcase } from '../components/Showcase';
import { Download } from '../components/Download';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <Download />
    </>
  );
};