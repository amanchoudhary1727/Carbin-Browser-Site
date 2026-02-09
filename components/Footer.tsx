import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-outerSpace border-t-4 border-slateGray py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-retro text-xs md:text-sm text-slateGray mb-4">
          © 1999 - {new Date().getFullYear()} CARBIN CORP.
        </p>
        <div className="flex flex-col items-center gap-2 font-mono text-xs text-bone">
          <div>MY FOOT!</div>
          <div className="text-slateGray">
            I would love to know your feedback: <a href="mailto:aman.1727.2706@gmail.com" className="text-retroYellow hover:underline">aman.1727.2706@gmail.com</a>
          </div>
          <div className="text-slateGray/60 mt-2">
            Browser Background GIF by <a href="https://www.reddit.com/user/sturo/" target="_blank" rel="noreferrer" className="text-retroYellow hover:underline">u/sturo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};