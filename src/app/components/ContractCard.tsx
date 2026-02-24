import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, MessageCircle } from 'lucide-react'; // আপনি চাইলে lucide-react বা অন্য SVG ব্যবহার করতে পারেন

const ProfileContactCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden font-sans">
      
      {/* Top Section: Logo and Name */}
      <div className="p-5 flex items-center gap-4">
        <div className="relative w-14 h-14 flex-shrink-0 border border-gray-100 rounded-full overflow-hidden p-1">
          <Image 
            src="/infotech-logo.png" // আপনার লোগো পাথ
            alt="Infotech Logo"
            width={56}
            height={56}
            className="rounded-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Infotech</h2>
          <p className="text-gray-500 text-sm">Member since Dec 2023</p>
        </div>
      </div>

      {/* Bottom Section: 3 Columns (Call, Chat, WhatsApp) */}
      <div className="grid grid-cols-3 border-t border-gray-100">
        
        {/* Call Column */}
        <Link href="tel:01897000000" className="flex flex-col items-center justify-center py-4 border-r border-gray-100 hover:bg-gray-50 transition-colors group">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.1 15.1 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A15 15 0 013 6a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.11 2.08z"/>
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-700">Call</span>
        </Link>

        {/* Chat Column */}
        <Link href="/chat" className="flex flex-col items-center justify-center py-4 border-r border-gray-100 hover:bg-gray-50 transition-colors group">
          <div className="relative w-10 h-10 mb-2 group-hover:scale-110 transition-transform">
             {/* Simple Chat Icon Illustration */}
             <div className="absolute top-1 left-0 w-7 h-7 bg-amber-400 rounded-full border-2 border-white z-10"></div>
             <div className="absolute top-0 left-3 w-7 h-7 bg-teal-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-sm font-bold text-gray-700">Chat</span>
        </Link>

        {/* WhatsApp Column */}
        <Link href="https://wa.me/01897000000" target="_blank" className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 transition-colors group">
          <div className="w-10 h-10 text-green-500 mb-2 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12.012 2.25c-5.376 0-9.75 4.374-9.75 9.75 0 1.718.447 3.332 1.232 4.737L2.25 21.75l5.147-1.35a9.687 9.687 0 004.615 1.163c5.376 0 9.75-4.374 9.75-9.75s-4.374-9.75-9.75-9.75zm5.904 13.762c-.244.688-1.21 1.253-1.666 1.332-.456.079-.925.143-3.13-.746-2.652-1.072-4.364-3.763-4.496-3.94-.132-.177-1.077-1.432-1.077-2.73 0-1.298.678-1.935.92-2.193.241-.258.524-.323.7-.323.175 0 .35 0 .502.007.16.008.375-.06.587.452.212.512.723 1.758.786 1.887.063.13.106.279.02.45-.086.171-.129.278-.255.425-.126.147-.265.328-.378.441-.126.126-.258.263-.111.516.147.253.654 1.078 1.403 1.745.966.86 1.777 1.127 2.03 1.254.253.126.401.106.551-.066.15-.171.644-.75.815-1.006.171-.256.342-.214.577-.128.235.086 1.492.704 1.748.832.256.129.426.193.49.3.064.106.064.615-.18 1.303z"/>
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-700">WhatsApp</span>
        </Link>

      </div>
    </div>
  );
};

export default ProfileContactCard;