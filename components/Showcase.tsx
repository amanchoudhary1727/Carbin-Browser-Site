import React from 'react';

export const Showcase: React.FC = () => {
  return (
    <section className="py-20 bg-outerSpace border-b-4 border-slateGray overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-retro text-3xl text-center mb-12 text-white drop-shadow-[3px_3px_0px_#000]">
          THE LOOK
        </h2>

        <div className="max-w-6xl mx-auto flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}background.png`}
            alt="Browser Look"
            className="w-full h-auto border-4 border-white shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>
    </section>
  );
};