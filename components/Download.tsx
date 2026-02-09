import React from 'react';
import { Button } from './ui/Button';

export const Download: React.FC = () => {
  return (
    <section className="py-24 bg-shark relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-black border-2 border-slateGray p-6 shadow-retro-xl relative">
          
          {/* Terminal Header */}
          <div className="absolute -top-3 left-4 bg-shark px-2 font-retro text-sm text-cadetBlue border border-slateGray">
            DOWNLOAD_MANAGER.EXE
          </div>

          <div className="font-mono text-bone space-y-2 mb-8 mt-2">
            <p className="typing-effect">
              <span className="text-retroYellow">&gt;</span> Checking system compatibility... <span className="text-green-500">OK</span>
            </p>
            <p>
              <span className="text-retroYellow">&gt;</span> Latest Version: <span className="text-white">v1.0.0</span>
            </p>
            <p>
              <span className="text-retroYellow">&gt;</span> OS: <span className="text-white">Windows 10/11</span>
            </p>
            <p>
              <span className="text-retroYellow">&gt;</span> Status: <span className="text-green-500">Stable</span>
            </p>
             <p>
              <span className="text-retroYellow">&gt;</span> Package Size: <span className="text-white">42.8 MB</span>
            </p>
            <p className="animate-pulse">
              <span className="text-retroYellow">&gt;</span> Awaiting user input_
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center border-t-2 border-dashed border-slateGray pt-6">
            <Button className="w-full sm:w-auto text-lg">
              DOWNLOAD .EXE
            </Button>
            <span className="text-xs text-slateGray font-mono text-center sm:text-left">
              *By downloading, you agree to become a 1337 h4x0r.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};