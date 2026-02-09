import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-outerSpace border-t-4 border-slateGray py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-retro text-xs md:text-sm text-slateGray mb-4">
          © 1999 - {new Date().getFullYear()} MY BROWSER CORP.
        </p>
        <div className="flex justify-center gap-6 font-mono text-xs text-bone">
          <a href="#" className="hover:text-retroYellow hover:underline decoration-2 underline-offset-4">CHANGELOG</a>
          <a href="#" className="hover:text-retroYellow hover:underline decoration-2 underline-offset-4">SOURCE CODE</a>
          <a href="#" className="hover:text-retroYellow hover:underline decoration-2 underline-offset-4">PRIVACY.TXT</a>
        </div>
      </div>
    </footer>
  );
};