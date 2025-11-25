import { Twitter, Instagram, Send, Mail } from 'lucide-react';

const Links = () => {
  return (
    <div className="flex flex-col items-end gap-4 text-lg md:text-xl font-medium tracking-tight">
        <a href="#" className="group flex items-center gap-3 hover:text-pink-600 transition-colors">
            <span>twitter | X</span>
            <Twitter className="w-5 h-5 text-gray-800 group-hover:text-pink-600 transition-colors" />
        </a>
        <a href="#" className="group flex items-center gap-3 hover:text-pink-600 transition-colors">
            <span>instagram</span>
            <Instagram className="w-5 h-5 text-gray-800 group-hover:text-pink-600 transition-colors" />
        </a>
        <a href="#" className="group flex items-center gap-3 hover:text-pink-600 transition-colors">
            <span>telegram</span>
            <Send className="w-5 h-5 text-gray-800 group-hover:text-pink-600 transition-colors" />
        </a>
            <a href="mailto:hello@valeriia.design" className="mt-4 group flex items-center gap-3 hover:text-pink-600 transition-colors">
            <span>pacfiguracion.work@gmail.com</span>
            <Mail className="w-5 h-5 text-gray-800 group-hover:text-pink-600 transition-colors" />
        </a>
    </div>
  )
}

export default Links