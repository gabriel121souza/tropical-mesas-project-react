import { FaWhatsapp } from "react-icons/fa";
import { FiSun } from "react-icons/fi"; // Using a sun icon as example logo

export default function Header() {
  return (
    <header className="bg-primary-500 shadow-sm py-4 px-6 flex justify-between items-center">
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        {/* Example logo - replace with your actual logo */}
        <FiSun className="text-3xl text-white" />
        {/* Text */}
        <div className="text-2xl font-bold text-white">Tropical Mesas</div>
      </div>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5561991163414"
        className="bg-white hover:bg-gray-100 text-primary-500 px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
      >
        <FaWhatsapp className="text-lg" /> Reserve Agora
      </a>
    </header>
  );
}