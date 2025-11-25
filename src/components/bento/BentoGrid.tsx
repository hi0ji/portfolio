import { motion } from 'framer-motion';
import { BentoCard } from './BentoCard';
import type { GridItem } from '../../types/types';

interface BentoGridProps {
  onAnimationComplete?: () => void;
  onHover: (text: string) => void;
  onLeave: () => void;
}

// Layout Calculation for 4-column x 2-row grid (Total 8 units):
// Row 1: About Me (1) + Projects (2) + Experience (1) = 4 units
// Row 2: Education (2) + Skills (1) + Contacts (1) = 4 units

const items: GridItem[] = [
  { id: '1', title: 'About Me', size: 'small', link: '/about'},
  { id: '4', title: 'Projects', size: 'wide'},
  { id: '3', title: 'Experience', size: 'small'},
  { id: '2', title: 'Education', size: 'wide'},
  { id: '5', title: 'Skills', size: 'small'},
  { id: '6', title: 'Contacts', size: 'small'},
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const BentoGrid: React.FC<BentoGridProps> = ({ onAnimationComplete, onHover, onLeave }) => {
  return (
    <div className="relative z-10 w-full h-screen p-2 box-border overflow-hidden">
       <motion.div 
        className="w-full h-full grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-2 gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => {
           if (onAnimationComplete) onAnimationComplete();
        }}
      >
        {items.map((item, index) => (
          <BentoCard 
            key={item.id} 
            item={item} 
            index={index} 
            onHover={onHover} 
            onLeave={onLeave}
          />
        ))}
      </motion.div>
    </div>
  );
};