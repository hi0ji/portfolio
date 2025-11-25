export type GridItemSize = 'small' | 'wide' | 'tall' | 'large';

export interface GridItem {
  id: string;
  title: string;
  description?: string;
  size: GridItemSize;
  color?: string; 
  link?: string;
}
