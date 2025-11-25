import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import TextType from '../components/TextType';
import { Separator } from '../components/ui/separator';

const AboutMe = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='relative w-full min-h-screen lg:h-screen flex items-center justify-center px-6 lg:px-12 py-12 lg:py-0 overflow-hidden bg-[#050505]'>
        <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between'>
          
          {/* image */}
          <div className={`w-full lg:w-[40%] relative group order-2 lg:order-1 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5]">
                  
                  <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none transition-colors duration-500 group-hover:border-white/20"></div>
                  
                  <img 
                      src="src/assets/profile.jpg" 
                      alt="Profile Image" 
                      className="object-cover w-full h-full grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
              </div>
          </div>

          {/* content */}
          <div className={`w-full lg:flex-1 flex flex-col justify-center order-1 lg:order-2 lg:pl-10 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <TextType 
              text={["Software Developer", "Data Analyst"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|" 
              className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]'
            />

            <div className="space-y-6 max-w-lg mb-12">
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                PJ Allen Figuracion
                <Separator className="my-4 bg-zinc-600" />
                I build practical software and use data to understand problems, guide decisions, and create solutions that truly make a difference.
              </p>
            </div>

            

          </div>
            
        </div>

    </section>
  )
}

export default AboutMe