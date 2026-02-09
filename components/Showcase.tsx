import React from 'react';
import { BrowserFrame } from './ui/BrowserFrame';
import { 
  Youtube,
  Github,
  Globe,
  MessageSquare
} from 'lucide-react';

export const Showcase: React.FC = () => {
  return (
    <section className="py-20 bg-outerSpace border-b-4 border-slateGray overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-retro text-3xl text-center mb-12 text-white drop-shadow-[3px_3px_0px_#000]">
          THE LOOK
        </h2>

        <BrowserFrame className="max-w-6xl mx-auto h-[600px] md:h-[700px]" activeTab="Home" url="browser://home" highlightIcon="ai">
           {/* Background Image - Cyberpunk/Pixel Art Style */}
           <div 
             className="absolute inset-0 bg-cover bg-center opacity-80"
             style={{ 
               backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`,
               filter: 'contrast(1.2) brightness(0.7) pixelate(4px)'
             }}
           />
           
           {/* Pixel Overlay Effect */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

           {/* Center Widget Content */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-4 border-white p-8 md:p-12 bg-black/40 backdrop-blur-sm max-w-2xl w-full mx-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                
                {/* Clock & Greeting */}
                <div className="text-center mb-12">
                  <h1 className="font-retro text-6xl md:text-8xl text-white mb-4 drop-shadow-[4px_4px_0px_#000]">
                    18:28
                  </h1>
                  <h2 className="font-retro text-xl md:text-2xl text-retroYellow tracking-widest uppercase drop-shadow-[2px_2px_0px_#000]">
                    Good Evening
                  </h2>
                </div>

                {/* Speed Dial Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SpeedDialItem icon={<Youtube size={32} />} label="YouTube" />
                  <SpeedDialItem icon={<Github size={32} />} label="GitHub" />
                  <SpeedDialItem icon={<Globe size={32} />} label="Google" />
                  <SpeedDialItem icon={<MessageSquare size={32} />} label="ChatGPT" />
                </div>

              </div>
           </div>
        </BrowserFrame>

      </div>
    </section>
  );
};

const SpeedDialItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer">
    <div className="w-20 h-20 border-2 border-white bg-black/50 flex items-center justify-center text-white group-hover:bg-retroYellow group-hover:text-black group-hover:border-retroYellow transition-all duration-200 shadow-[4px_4px_0px_#000] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
      {icon}
    </div>
    <span className="font-retro text-[10px] md:text-xs text-white uppercase tracking-wider bg-black px-2 py-1">
      {label}
    </span>
  </div>
);