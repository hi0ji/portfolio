export type GridItemSize = 'small' | 'wide' | 'tall' | 'large';

export interface GridItem {
  id: string;
  title: string;
  description?: string;
  size: GridItemSize;
  color?: string; 
  link?: string;
}

export interface Project {
  id: string;
  name: string;
  date: string;
  image: string;
  description: string;
  role: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}