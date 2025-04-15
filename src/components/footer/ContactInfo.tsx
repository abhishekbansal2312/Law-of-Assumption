import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
export const ContactInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 py-3 md:border-none md:py-0 md:mt-0">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer md:cursor-default"
      >
        <h3 className="text-white text-lg font-semibold">Contact</h3>
        <div className="md:hidden">
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-400" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </div>
      <div
        className={`text-gray-400 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 mt-2" : "max-h-0 md:max-h-full md:mt-2"
        }`}
      >
        <div className="flex items-center mb-2">
          <span>+012 3456789</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="break-all">lawofassumptioncoaching@gmail.com</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <Youtube size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
