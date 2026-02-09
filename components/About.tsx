import React from 'react';
import { Terminal, User, Code2, Github, Linkedin, Globe, Mail } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-shark relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #6d7a8c 1px, transparent 1px), linear-gradient(to bottom, #6d7a8c 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* Main Content Card */}
        <div className="bg-black border-4 border-white shadow-retro-xl p-8 md:p-12 relative group">
          <div className="absolute top-0 right-0 p-2 bg-white text-black font-retro text-xs border-b-4 border-l-4 border-black">
            READ_ONLY_ACCESS
          </div>

          <h2 className="font-retro text-3xl text-white mb-6 flex items-center gap-4">
            <User className="w-8 h-8 text-retroYellow" />
            IDENTIFICATION
          </h2>
          <div className="h-1 w-full bg-slateGray mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-retroYellow w-1/3 animate-[shimmer_2s_infinite]"></div>
          </div>

          <div className="font-mono text-bone leading-relaxed text-sm md:text-base border-l-2 border-slateGray pl-6 mb-8">
            <p className="mb-4">
              Hey there, Aman here. I build stuff for fun and fame (got none of it lol).
            </p>
            <p className="mb-4">
              I built this browser as a fun project, from adding a basic address bar to more complex features like a DOM scraper or an AI explainer. It took me about two and a half months of procrastination and a lot of cussing (lol, bugs). Endured a lot just for the love of the game (inserts meme), and finally shot my shot (KOBE!).
            </p>
            <p className="mb-4">
              Download the browser and explore it for yourself. It might crash or be slow on some devices, as I have full confidence in my abilities (cries in bad code). Suggest changes, and build something for yourself too.
            </p>
            <p className="text-retroYellow">
              Adios, amigos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-dashed border-slateGray pt-6 gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/amanchoudhary1727" className="p-2 border-2 border-slateGray hover:border-retroYellow hover:bg-white/5 text-slateGray hover:text-retroYellow transition-all group/icon" title="GitHub" target="_blank" rel="noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aman-choudhary-5656a72a1/" className="p-2 border-2 border-slateGray hover:border-retroYellow hover:bg-white/5 text-slateGray hover:text-retroYellow transition-all group/icon" title="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://amanchoudhary-portfolio.vercel.app/" className="p-2 border-2 border-slateGray hover:border-retroYellow hover:bg-white/5 text-slateGray hover:text-retroYellow transition-all group/icon" title="Portfolio" target="_blank" rel="noreferrer">
                <Globe size={24} />
              </a>
              <a href="mailto:aman.1727.2706@gmail.com" className="p-2 border-2 border-slateGray hover:border-retroYellow hover:bg-white/5 text-slateGray hover:text-retroYellow transition-all group/icon" title="Email">
                <Mail size={24} />
              </a>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-cadetBlue">
              <Terminal size={14} />
              <span className="animate-pulse">_END_OF_FILE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};