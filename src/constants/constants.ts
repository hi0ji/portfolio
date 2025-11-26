import type { ExperienceItem, Project } from "@/types/types";

export const projects: Project[] = [
  {
    id: '01',
    name: 'GARDS',
    date: '2025',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2560&auto=format&fit=crop',
    description: 'A sustainable living platform connecting urban communities with local agriculture. Features real-time harvest tracking and community workshops.',
    role: 'Frontend Developer'
  },
  {
    id: '02',
    name: 'Dengue Dashboard',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2568&auto=format&fit=crop',
    description: 'Minimalist architecture portfolio for an award-winning firm. Focusing on negative space and fluid typography to highlight structural elegance.',
    role: 'Backend Developer'
  },
  {
    id: '03',
    name: 'Vehicle Sticker Pass Management System',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2574&auto=format&fit=crop',
    description: 'Interactive abstract art installation interface. Allows users to manipulate sound and visual waves through gesture control.',
    role: 'Frontend Developer'
  },
  {
    id: '04',
    name: 'UNDP Waste Tracker',
    date: '2025',
    image: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2670&auto=format&fit=crop',
    description: 'Immersive storytelling experience for a nature conservation charity. Blends parallax scrolling with ambient audio to narrate forest growth.',
    role: 'Data Scientist'
  },
  {
    id: '05',
    name: 'License Plate Extractor',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop',
    description: 'High-fidelity music streaming visualizer for jazz enthusiasts. Dark mode first design with gold accents and smooth transitions.',
    role: 'Full-stack Developer'
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "University of Southeastern Philippines",
    period: "2025",
    description: "Assisted in data collection, analysis, and visualization for academic research. Helped create interactive dashboards to present findings. Collaborated with staff during events to analyze data and provide insights for decision-making. Utilized tools like Excel, Google Sheets, and Power BI to support data-driven initiatives.",
    tags: ["DATA ANALYSIS", "DATA VISUALIZATION", "DASHBOARD CREATION", "COLLABORATION"]
  },
  {
    id: 2,
    role: "Data Entry",
    company: "Rufiji",
    period: "2022",
    description: "Designed core features for the issue tracking system. Focused on keyboard-first interactions, dark mode optimization, and reducing friction in high-volume developer workflows.",
    tags: ["DATA ENTRY", "IMAGE DATA", "DATA INTEGRITY", "ACCURACY"]
  },
  {
    id: 3,
    role: "UI/UX Designer DUMMMYYY",
    company: "Fantasy",
    period: "2019 — 2021",
    description: "Collaborated with automotive clients to design next-gen dashboard interfaces. Created immersive web experiences and conceptual prototypes for autonomous driving systems.",
    tags: ["UI/UX", "AUTOMOTIVE", "WEBGL", "3D INTERFACES"]
  },
  {
    id: 4,
    role: "Visual Designer DUMMMYYY",
    company: "Freelance",
    period: "2017 — 2019",
    description: "Worked with early-stage startups to define their visual language. Delivered logos, marketing websites, and pitch decks that helped clients secure seed funding.",
    tags: ["BRANDING", "WEB DESIGN", "GRAPHIC DESIGN"]
  }
];