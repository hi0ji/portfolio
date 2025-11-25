import { Download } from 'lucide-react';
const TextInfo = () => {
  return (
    <div className='flex-1 space-y-8 text-center lg:text-left'>
        <div>
            <span className="text-pink-500 font-mono text-sm tracking-widest uppercase mb-2 block">Thesis Project</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Evolution of Haptic<br/>Feedback in Interfaces
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            An in-depth exploration of how tactile responses in digital environments influence user trust and retention rates. Awarded Distinction for technical innovation.
            </p>
        </div>

        <button className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-pink-500 hover:text-white transition-all duration-300 rounded-sm">
            <span>Download Paper</span>
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
    </div>
  )
}

export default TextInfo