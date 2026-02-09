import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FEATURES } from '../constants';
import { BrowserFrame } from '../components/ui/BrowserFrame';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Check, Terminal } from 'lucide-react';

export const FeatureDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = FEATURES.find(f => f.slug === slug);

  if (!feature) {
    return <Navigate to="/" />;
  }

  // Type guard or check for sections
  const hasSections = (feature as any).sections && (feature as any).sections.length > 0;

  return (
    <div className="min-h-screen bg-shark pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8 flex items-center gap-4">
          <Link to="/">
            <Button className="!py-2 !px-4 flex items-center gap-2 text-sm">
              <ArrowLeft size={16} /> BACK_TO_ROOT
            </Button>
          </Link>
          <div className="font-mono text-slateGray text-sm">
            ROOT &gt; MODULES &gt; <span className="text-retroYellow uppercase">{feature.slug}</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
           <h1 className="font-retro text-4xl md:text-5xl text-white mb-4 drop-shadow-[4px_4px_0px_#000]">
            {feature.title}
           </h1>
           <p className="font-mono text-xl text-bone max-w-2xl mx-auto border-b-2 border-retroYellow pb-4 inline-block">
            {feature.description}
           </p>
        </div>

        {/* Placeholder Image Visual */}
        <div className="mb-16">
          <BrowserFrame 
            url={feature.mockUrl} 
            activeTab={feature.title} 
            className="max-w-5xl mx-auto h-[500px] md:h-[600px]"
            highlightIcon={feature.id as any}
          >
             <img 
              src={(feature as any).placeholderImage} 
              alt={`${feature.title} interface`} 
              className="w-full h-full object-cover"
             />
          </BrowserFrame>
        </div>

        {/* Details Content */}
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-black border-2 border-slateGray p-8 shadow-retro relative mb-8">
             <div className="absolute -top-3 left-4 bg-shark px-2 font-retro text-xs text-cadetBlue border border-slateGray">
              DOCUMENTATION.MAN
             </div>

             {/* Dynamic Content Rendering */}
             {hasSections ? (
               <div className="space-y-8 font-mono text-bone">
                 {(feature as any).sections.map((section: any, idx: number) => (
                   <div key={idx}>
                     <h3 className="text-retroYellow font-bold text-lg mb-3 uppercase border-b border-slateGray/50 pb-1">
                       {section.heading}
                     </h3>
                     
                     {/* Standard Text Content */}
                     {section.content && (
                       <p className="whitespace-pre-line leading-relaxed text-sm md:text-base opacity-90">
                         {section.content}
                       </p>
                     )}

                     {/* Subsections (e.g. for Capabilities) */}
                     {section.subsections && (
                       <div className="space-y-6 mt-4 pl-4 border-l-2 border-slateGray/30">
                         {section.subsections.map((sub: any, sIdx: number) => (
                           <div key={sIdx}>
                             <h4 className="text-white font-bold mb-2">{sub.title}</h4>
                             <p className="whitespace-pre-line leading-relaxed text-sm opacity-90">
                               {sub.content}
                             </p>
                           </div>
                         ))}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             ) : (
               /* Fallback for other features */
               <div>
                  <p className="font-mono text-bone leading-relaxed mb-6 whitespace-pre-line">
                    <span className="text-retroYellow">&gt;</span> {feature.longDescription}
                  </p>
                  <div className="space-y-2 mt-6">
                    {feature.capabilities?.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-cadetBlue">
                        <Check size={14} className="text-green-500" />
                        {cap}
                      </div>
                    ))}
                  </div>
               </div>
             )}
          </div>

          {/* Action Call */}
          <div className="flex flex-col justify-center items-center text-center p-8 border-2 border-dashed border-slateGray bg-outerSpace/20">
             <Terminal size={48} className="text-retroYellow mb-4" />
             <h3 className="font-retro text-white text-lg mb-2">READY TO DEPLOY?</h3>
             <p className="font-mono text-sm text-bone mb-6">
               Experience {feature.title} in the latest build.
             </p>
             <Link to="/#download">
               <Button>INITIALIZE DOWNLOAD</Button>
             </Link>
          </div>

        </div>

      </div>
    </div>
  );
};