import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="absolute top-24 md:top-32 left-6 md:left-12 z-40">
            <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-mono tracking-widest uppercase">(BACK)</span>
            </button>
        </div>
    );
};

export default BackButton;
