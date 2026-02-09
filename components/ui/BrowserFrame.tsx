import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Star, 
  Clock, 
  Crosshair, 
  VenetianMask, 
  Bug, 
  Bot, 
  Joystick,
  Plus, 
  Minus, 
  Square, 
  X
} from 'lucide-react';

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  activeTab?: string;
  className?: string;
  highlightIcon?: 'ai' | 'tor' | 'scraper' | 'retro' | 'focus' | null;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ 
  children, 
  url = 'browser://home', 
  activeTab = 'Home',
  className = '',
  highlightIcon = null
}) => {
  return (
    <div className={`bg-shark border-4 border-slateGray shadow-[8px_8px_0px_#000] relative flex flex-col ${className}`}>
      
      {/* Row 1: Tab Bar & Window Controls */}
      <div className="bg-shark flex items-end justify-between px-2 pt-2 border-b border-black select-none">
        
        {/* Tabs */}
        <div className="flex items-end space-x-1">
          {/* Active Tab */}
          <div className="bg-outerSpace text-bone px-4 py-2 font-mono text-xs border-t-2 border-l-2 border-r-2 border-slateGray rounded-t-sm relative top-[1px] z-10 flex items-center gap-2">
            <span>{activeTab}</span>
          </div>
          
          {/* New Tab Button */}
          <button className="p-1 mb-1 text-slateGray hover:text-white hover:bg-outerSpace/50 transition-colors">
            <Plus size={16} />
          </button>
        </div>

        {/* Window Controls */}
        <div className="flex items-center pb-2 gap-4 text-slateGray">
          <button className="hover:text-white transition-colors"><Minus size={16} /></button>
          <button className="hover:text-white transition-colors"><Square size={14} /></button>
          <button className="hover:text-red-500 transition-colors"><X size={16} /></button>
        </div>
      </div>

      {/* Row 2: Navigation & Address Bar */}
      <div className="bg-outerSpace p-2 border-b-2 border-black flex gap-2 items-center shadow-lg z-20">
         {/* Nav Buttons */}
         <div className="flex gap-1">
            <button className="p-2 border border-slateGray bg-shark text-slateGray hover:text-white hover:border-bone transition-all shadow-retro active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              <ArrowLeft size={16} />
            </button>
            <button className="p-2 border border-slateGray bg-shark text-slateGray hover:text-white hover:border-bone transition-all shadow-retro active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              <ArrowRight size={16} />
            </button>
            <button className="p-2 border border-slateGray bg-shark text-bone hover:text-retroYellow hover:border-bone transition-all shadow-retro active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              <RotateCw size={16} />
            </button>
         </div>

         {/* Address Input */}
         <div className="flex-grow bg-[#2a2a2a] border border-slateGray p-2 font-mono text-sm flex items-center shadow-inner h-10">
            <span className="text-retroYellow select-all truncate">{url}</span>
         </div>

         {/* Toolbar Icons */}
         <div className="flex gap-1 ml-2 text-bone hidden sm:flex">
            <ToolbarIcon icon={<Star size={18} />} />
            <ToolbarIcon icon={<Clock size={18} />} />
            <div className="w-[1px] bg-slateGray mx-1 h-6 self-center opacity-50"></div>
            <ToolbarIcon icon={<Joystick size={18} />} highlight={highlightIcon === 'retro'} />
            <ToolbarIcon icon={<Crosshair size={18} />} highlight={highlightIcon === 'focus'} />
            <ToolbarIcon icon={<VenetianMask size={18} />} highlight={highlightIcon === 'tor'} />
            <ToolbarIcon icon={<Bug size={18} />} highlight={highlightIcon === 'scraper'} />
            <ToolbarIcon icon={<Bot size={18} />} highlight={highlightIcon === 'ai'} />
         </div>
      </div>

      {/* Viewport Content */}
      <div className="flex-grow relative overflow-hidden bg-black">
         {children}
      </div>
    </div>
  );
};

const ToolbarIcon: React.FC<{ icon: React.ReactNode; highlight?: boolean }> = ({ icon, highlight }) => (
  <button className={`p-2 border border-transparent hover:border-slateGray hover:bg-outerSpace rounded-sm transition-all ${highlight ? 'text-retroYellow bg-shark border-slateGray' : 'text-slateGray hover:text-bone'}`}>
    {icon}
  </button>
);