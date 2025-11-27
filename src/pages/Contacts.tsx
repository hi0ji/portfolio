import { useState, useEffect } from 'react';
import Footer from '@/components/contacts/ContactsFooter';
import Links from '@/components/contacts/ContactsLinks';
import BackButton from '@/components/BackButton';

const Contacts = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden py-24 px-4">
            {/* back button */}
            <BackButton />
            
            <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className={`relative z-10 w-full max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                
                {/* stacked card effect */}
                <div className='relative mx-auto w-full max-w-2xl group perspective-1000'>
                    {/* back card deco */}
                    <div className='absolute top-4 left-4 w-full h-full bg-gray-200 rounded-[32px] transform rotate-[-4deg] group-hover:rotate-[-2deg] transition-all duration-500 ease-out -z-10 shadow-lg'></div>

                    {/* main card */}
                    <div className='relative w-full bg-white rounded-[32px] p-8 md:p-12 text-black shadow-2xl transform rotate-[-1deg] group-hover:rotate-0 transition-all duration-500 ease-out cursor-default overflow-hidden'>
                        {/* content */}
                        <div className='relative z-10 flex flex-col h-full justify-between min-h-[400px]'>
                            {/* header row */}
                            <div className="flex justify-between items-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter uppercase leading-none">
                                    My Personal
                                </h2>
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter uppercase leading-none text-right">
                                    Contacts
                                </h2>
                            </div>

                            {/* middle section */}
                            <div className='flex flex-row justify-between items-start gap-4 flex-1'>
                                {/* photo */}
                                <div className="w-32 h-40 md:w-40 md:h-48 bg-gray-100 rounded-sm relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img 
                                    src="src/assets/profile.jpg" 
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* links */}
                                <Links />
                            </div>

                            {/* footer */}
                            <Footer />
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default Contacts