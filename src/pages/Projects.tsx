import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { Project } from '@/types/types';
import { projects } from '@/constants/constants';
import BackButton from '@/components/BackButton';

const Projects = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [isDetailView, setIsDetailView] = useState(false);
    const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleProjectHover = (project: Project | null) => {
        if (!isDetailView) {
        setHoveredProjectId(project ? project.id : null);
        if (project) {
            setActiveProject(project);
        }
        }
    };

    const handleProjectClick = (project: Project) => {
        setActiveProject(project);
        setIsDetailView(true);
    };

    const handleClose = () => {
        setIsDetailView(false);
        // Optional: Reset active project if you want the BG to go black immediately
        // setActiveProject(null); 
    };
    
    const currentImage = activeProject?.image;
    const isBackgroundVisible = (hoveredProjectId !== null) || isDetailView;

    return (
        <section className='relative w-full h-screen overflow-hidden bg-[#050505]'>
            
            {/* bg layer */}
            <div className="absolute inset-0 w-full h-full transition-colors duration-700 bg-[#050505] z-0">
                {projects.map((project) => (
                <div
                    key={project.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    activeProject?.id === project.id && isBackgroundVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
                ))}
            </div>
            
            {/* back/close button visible on detail view */}
            <div className="absolute top-24 md:top-32 left-6 md:left-12 z-50">
                {!isDetailView ? (
                    <BackButton />
                ) : (
                    <button 
                        onClick={handleClose}
                        className="flex items-center gap-2 text-white/80 hover:text-white group"
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        <span className="text-sm font-mono tracking-widest uppercase">(CLOSE)</span>
                    </button>
                )}
            </div>

            {/* main content */}
            <div className={`relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                {/* project list */}
                <div 
                    className={`transition-all duration-500 ease-in-out transform ${
                        isDetailView ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
                    }`}
                >
                    <div className="flex flex-col gap-1 md:gap-2 max-w-md">
                        {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => handleProjectHover(project)}
                            onMouseLeave={() => handleProjectHover(null)}
                            onClick={() => handleProjectClick(project)}
                            className="group flex justify-between items-baseline cursor-pointer py-2 border-b border-white/10 hover:border-white/50 transition-colors duration-300"
                        >
                            <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-300 ${
                                hoveredProjectId === project.id ? 'text-white translate-x-4' : 'text-gray-500'
                                }`}>
                                {project.name}
                            </h3>
                            <span className={`font-mono text-sm md:text-base transition-colors duration-300 ${
                                hoveredProjectId === project.id ? 'text-white' : 'text-gray-600'
                                }`}>
                                {project.date}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* project detail view */}
                <div 
                    className={`absolute bottom-20 right-6 md:right-12 md:bottom-24 max-w-xl text-right transition-all duration-700 delay-100 transform ${
                        isDetailView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
                    }`}
                >
                    {activeProject && (
                        <>
                        <div className="mb-6 flex justify-end gap-4 items-center">
                            <a 
                                href="#" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                                title="View Project Website"
                            >
                                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded text-white/60">
                                {activeProject.date}
                            </span>
                            <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded text-white/60">
                                {activeProject.role}
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tighter">
                            {activeProject.name}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                            {activeProject.description}
                        </p>
                        </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Projects