import { useEffect, useState } from 'react';
import TextInfo from '@/components/education/TextInfo';
import ThesisPaper from '@/components/education/ThesisPaper';
import BackButton from '@/components/BackButton';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    return (
        <section className='w-full min-h-screen pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-center relative overflow-hidden bg-[#050505]'>
            {/* back button */}
            <BackButton />
            
            <div className={`max-w-7xl mx-auto w-full flex flex-col gap-1 md:gap-4 select-none transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                <div>

                    {/* first row  */}
                    <div className="flex flex-wrap items-baseline gap-2 md:gap-8">
                        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-white leading-[0.85]">
                        Bachelor
                        </h2>
                        <div className="flex flex-col justify-end pb-2 md:pb-6">
                        <span className="text-white/60 text-sm md:text-xl font-medium tracking-wide">
                            (2022 — 2026)
                        </span>
                        </div>
                    </div>
                    
                    {/* row 2 */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="order-2 md:order-1 bg-white text-black px-4 py-1 self-start transform -rotate-2">
                        <span className="text-xl md:text-3xl font-bold uppercase tracking-widest">Of Science</span>
                        </div>
                        <h2 className="order-1 md:order-2 text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-white leading-[0.85] text-right">
                        In Computer
                        </h2>
                    </div>
                    
                    {/* row 3 */}
                    <div className="flex justify-end relative">
                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 z-10 leading-[0.85]">
                        Science
                        </h2>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-pink-600/50 hidden md:block"></div>
                    </div>

                    {/* row  4 */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4 md:mt-0">
                        <div className="max-w-md text-gray-400 text-lg leading-relaxed font-light order-2 md:order-1">
                        Specialized in user-centric design systems and advanced interaction patterns at the Royal College of Art, London.
                        </div>
                        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-pink-600 leading-[0.85] order-1 md:order-2 text-right">
                        (BSCS)
                        </h2>
                    </div>
                </div>

                {/* thesis section */}
                <div className={`max-w-7xl mx-auto w-full mt-24 md:mt-32 border-t border-white/10 pt-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>

                        {/* text info */}
                        <TextInfo />


                        {/* right paper visual */}
                        <ThesisPaper />
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Education