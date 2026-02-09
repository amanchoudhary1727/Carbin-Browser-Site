import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center border-b-4 border-slateGray overflow-hidden bg-[#0f0f0f]">
      {/* Retro Grid Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #31383f 1px, transparent 1px), linear-gradient(to bottom, #31383f 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Starfield-ish overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="mb-8 animate-pulse">
           <span className="bg-retroYellow text-black font-bold px-2 py-1 text-sm font-mono border-2 border-white shadow-retro">
             V1.0.0 STABLE
           </span>
        </div>
        
        <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-[4px_4px_0px_#000]">
          BROWSE LIKE IT'S <span className="text-retroYellow">1999</span>
        </h1>
        
        <p className="font-mono text-bone text-lg md:text-xl mb-10 max-w-2xl mx-auto border-l-4 border-cosmic pl-4 bg-shark/50 py-2">
          The retro-styled privacy browser with built-in AI superpowers.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button className="text-xl px-8 py-4">
            DOWNLOAD NOW
          </Button>
          <div className="font-mono text-sm text-cadetBlue">
            <span className="block">&gt; OS: Windows 10/11</span>
            <span className="block">&gt; SIZE: 42MB</span>
          </div>
        </div>
      </div>
    </section>
  );
};