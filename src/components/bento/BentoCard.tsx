import React from 'react';
import { motion, type Variants } from 'framer-motion';
import type { GridItem } from "../../types/types";
import { ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  item: GridItem;
  index: number;
  onHover: (text: string) => void;
  onLeave: () => void;
}

const cardVariants: Variants = {
  hidden: { 
    y: '100%', 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



export const BentoCard: React.FC<BentoCardProps> = ({ item, index, onHover, onLeave }) => {
  
    const getSpanClasses = (size: string) => {
    switch (size) {
      case 'wide':
        return 'col-span-1 md:col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 md:col-span-1 row-span-2';
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };
  
  return (
    <motion.div
      className={`relative group bg-zinc-900/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 overflow-hidden flex flex-col justify-between ${getSpanClasses(item.size)}`}
      variants={cardVariants}
      onMouseEnter={() => onHover(item.title)}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 h-full flex flex-col justify-end pointer-events-none">
        <div className="absolute top-0 right-0">
             <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
        </div>

        <div>
          <h3 className="text-xs md:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-zinc-500 mt-1 group-hover:text-zinc-300 transition-colors">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};