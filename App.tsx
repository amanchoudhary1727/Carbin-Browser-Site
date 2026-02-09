import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { FeatureDetail } from './pages/FeatureDetail';
import { Footer } from './components/Footer';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <main className="min-h-screen bg-shark text-bone selection:bg-cosmic selection:text-white">
        
        {/* Global Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-shark/90 backdrop-blur-sm border-b-2 border-slateGray py-3 px-4 md:px-8 flex justify-between items-center">
          <a href="#/" className="font-retro text-white text-sm md:text-base cursor-pointer hover:text-retroYellow transition-colors">
            MY_BROWSER
          </a>
          <div className="flex gap-4">
             <a href="#/feature/ai-assistant" className="hidden md:block font-mono text-xs text-slateGray hover:text-white">MODULES</a>
             <a href="#/" className="font-mono text-xs md:text-sm text-bone hover:text-retroYellow hover:underline decoration-2">HOME</a>
          </div>
        </nav>

        <div className="pt-14"> {/* Offset for fixed nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature/:slug" element={<FeatureDetail />} />
            {/* Fallback for unknown routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        
        <Footer />
      </main>
    </HashRouter>
  );
};

export default App;