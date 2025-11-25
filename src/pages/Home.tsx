import { IntroBackground } from "@/components/IntroBackground";
import { useEffect, useState } from "react";
import { BentoGrid } from '@/components/bento/BentoGrid';
import { AnimatePresence } from 'framer-motion';

type AnimationState = 'intro' | 'bento-enter' | 'outro';

const Home = () => {
  const [animationState, setAnimationState] = useState<AnimationState>('intro');
  const [showGrid, setShowGrid] = useState(false);
  const [backgroundText, setBackgroundText] = useState('pj allen figuracion');

  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setAnimationState('bento-enter');
      setShowGrid(true);
    }, 1000);

    return () => clearTimeout(introTimer);
  }, []);

  const handleGridAnimationComplete = () => {
    setTimeout(() => {
      setAnimationState('outro');
      setBackgroundText("");        
      setHasPlayedIntro(true);      
    }, 200);
  };

  const handleHover = (text: string) => {
    if (animationState === 'outro') {
      setBackgroundText(text);
    }
  };

  const handleHoverLeave = () => {
    if (animationState === 'outro') {
      setBackgroundText("");        
    }
  };

  return (
    <main className="relative h-screen w-screen bg-[#050505] text-white overflow-hidden">
      <IntroBackground 
        text={backgroundText} 
        animationState={animationState} 
        hasPlayedIntro={hasPlayedIntro}  
      />

      <div className="relative z-10 w-full h-full pointer-events-none">
        <div className="pointer-events-auto h-full w-full">
          <AnimatePresence>
            {showGrid && (
              <BentoGrid 
                onAnimationComplete={handleGridAnimationComplete} 
                onHover={handleHover}
                onLeave={handleHoverLeave}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Home;