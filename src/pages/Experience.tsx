import BackButton from '@/components/BackButton';
import { experiences } from '@/constants/constants';
import { useState, useEffect } from 'react';

const Experience = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className='w-full min-h-screen pt-32 pb-20 px-6 lg:px-12 flex flex-col relative overflow-hidden bg-[#050505]'>
            
            {/* back button */}
            <BackButton />
            
            {/* bg ambience */}
            <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                {/* header */}
                <div className="mb-16 md:mb-24 border-b border-white/20 pb-6">
                    <span className="text-sm md:text-base font-mono text-gray-400 uppercase tracking-widest block mb-2">
                        Career History
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white uppercase leading-[0.85]">
                        Experience
                    </h1>
                </div>

                {/* list of experience */}
                <div className="flex flex-col">
                    {experiences.map((exp) => (
                        <div 
                        key={exp.id}
                        className="group border-b border-white/20 last:border-b-0"
                        onMouseEnter={() => setHoveredId(exp.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        >
                        {/* main row */}
                        <div className="py-8 md:py-10 cursor-pointer flex flex-col md:flex-row md:items-baseline justify-between gap-4 relative z-10">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                            <h2 className="text-3xl md:text-5xl font-medium text-white group-hover:text-pink-500 transition-colors duration-300">
                                {exp.role}
                            </h2>
                            <span className="text-xl md:text-2xl text-gray-500 font-light group-hover:text-white transition-colors duration-300">
                                {exp.company}
                            </span>
                            </div>
                            <span className="font-mono text-sm md:text-base text-gray-400 group-hover:text-white transition-colors duration-300">
                            {exp.period}
                            </span>
                        </div>

                        {/* expandable details */}
                        <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            hoveredId === exp.id ? 'max-h-[300px] opacity-100 pb-8 md:pb-10' : 'max-h-0 opacity-0 pb-0'
                            }`}
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                            {/* Spacers to align with content if needed, or just full width */}
                            <div className="w-full max-w-3xl">
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6">
                                    {exp.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-3">
                                    {exp.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="text-xs md:text-sm font-mono border border-white/30 px-2 py-1 text-gray-400 uppercase tracking-wider"
                                    >
                                        [ {tag} ]
                                    </span>
                                    ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        
        </section>
    )
}

export default Experience