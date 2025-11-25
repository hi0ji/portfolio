import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface IntroBackgroundProps {
  text: string;
  animationState: 'intro' | 'bento-enter' | 'outro';
  hasPlayedIntro: boolean;
}

export const IntroBackground: React.FC<IntroBackgroundProps> = ({
  text,
  animationState,
  hasPlayedIntro
}) => {

  const isInteractive = animationState === 'outro' && text.trim() !== "";

  if (hasPlayedIntro && text.toLowerCase() === "pj allen figuracion") {
    return null;
  }

  const variants: Variants = {
  introInitial: { y: "100%", opacity: 0 },
  introAnimate: { y: 0, opacity: 1 },
  introExit: { opacity: 0, y: -100 },
  slideInitial: { y: "100%", opacity: 0 },
  slideAnimate: { y: 0, opacity: 1 },
  slideExit: { y: "-100%", opacity: 0 },
};
    const isIntroText = text.toLowerCase() === "pj allen figuracion" && animationState === "intro";


  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <div className="relative flex flex-col items-center justify-center overflow-hidden h-[40vw] w-full">
        <AnimatePresence mode="wait">
          {text.trim() !== "" && (
            <motion.h1
              key={text}
              className="absolute text-[8vw] md:text-[10vw] font-bold tracking-tighter text-white text-center mix-blend-difference leading-none"
              variants={variants}
              initial={isInteractive ? "slideInitial" : "introInitial"}
              animate={isInteractive ? "slideAnimate" : "introAnimate"}
              exit={isInteractive ? "slideExit" : "introExit"}
              transition={{
                duration: isIntroText ? 1.5 : 0.1,
                ease: [0.22, 1, 0.36, 1],
                }}
            >
              {text.toLowerCase() === "pj allen figuracion" ? (
                <>
                  <span className="block mb-[2vw] md:mb-[1vw]">pj allen</span>
                  <span className="block">figuracion</span>
                </>
              ) : (
                <span className="block">{text.toLowerCase()}</span>
              )}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
