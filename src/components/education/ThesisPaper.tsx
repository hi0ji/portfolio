import { FileText } from 'lucide-react';

const ThesisPaper = () => {
  return (
    <div className='relative group perspective-1000'>
        {/* decorative bg */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-600/20 to-blue-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* paper graphics */}
        <div className="relative w-[300px] h-[420px] bg-[#f5f5f5] text-black p-8 shadow-2xl transition-all duration-500 transform rotate-2 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-pink-900/20 cursor-pointer overflow-hidden rounded-sm">

            {/* paper texture/gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f0f0] to-[#e0e0e0] opacity-50"></div>
            
            {/* content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center">
                        <span className="font-bold text-xs">VS</span>
                        </div>
                        <span className="font-mono text-[10px] tracking-widest text-gray-500">MAY 2024</span>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="h-1 w-full bg-black"></div>
                        <h4 className="font-serif text-2xl font-bold leading-none italic">The Evolution of Haptic Feedback</h4>
                        <div className="h-[1px] w-1/2 bg-black mt-2"></div>
                    </div>

                    <div className="space-y-2 opacity-40">
                        <div className="h-2 w-full bg-black rounded-full"></div>
                        <div className="h-2 w-full bg-black rounded-full"></div>
                        <div className="h-2 w-5/6 bg-black rounded-full"></div>
                        <div className="h-2 w-full bg-black rounded-full"></div>
                        <div className="h-2 w-4/5 bg-black rounded-full"></div>
                    </div>
                </div>

                <div className="flex justify-between items-end border-t border-black/10 pt-4">
                    <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500">Format</span>
                        <span className="text-xs font-bold">PDF / 4.2MB</span>
                    </div>
                    <FileText className="w-6 h-6 text-pink-600" />
                </div>
            </div>

            {/* fold corner */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white border-r-[#050505]/5 shadow-sm group-hover:border-t-[#fafafa] transition-colors"></div>
        
        </div>

        <div className="absolute top-2 left-2 w-[300px] h-[420px] bg-gray-800 -z-10 rotate-[-3deg] rounded-sm border border-white/5"></div>
    </div>
  )
}

export default ThesisPaper