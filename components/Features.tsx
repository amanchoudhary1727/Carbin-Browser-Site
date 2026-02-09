import React from 'react';
import { Card } from './ui/Card';
import { Bot, VenetianMask, Database, Joystick, Mail, Target } from 'lucide-react';
import { FEATURES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot size={48} className="text-retroYellow mb-4" />,
  mask: <VenetianMask size={48} className="text-cadetBlue mb-4" />,
  database: <Database size={48} className="text-bone mb-4" />,
  joystick: <Joystick size={48} className="text-cosmic mb-4" />,
  mail: <Mail size={48} className="text-retroYellow mb-4" />,
  target: <Target size={48} className="text-cadetBlue mb-4" />,
};

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-shark border-b-4 border-slateGray">
      <div className="container mx-auto px-4">
        <h2 className="font-retro text-3xl text-center mb-16 text-white drop-shadow-[3px_3px_0px_#000]">
          SYSTEM MODULES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <Link key={feature.id} to={`/feature/${feature.slug}`} className="block h-full">
              <Card className="flex flex-col items-center text-center h-full group cursor-pointer hover:bg-outerSpace transition-colors">
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-retro text-lg mb-3 text-white group-hover:text-retroYellow transition-colors">
                  {feature.title}
                </h3>
                <p className="font-mono text-cadetBlue text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-auto pt-4 text-xs font-mono text-slateGray opacity-0 group-hover:opacity-100 transition-opacity">
                   [ CLICK TO INSPECT ]
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};