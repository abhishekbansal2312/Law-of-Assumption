import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const CollapsibleFooterColumn: React.FC<{
  title: string;
  links: string[];
}> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 py-3 md:border-none md:py-0 md:mt-0">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer md:cursor-default"
      >
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <div className="md:hidden">
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-400" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </div>
      <ul
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0 md:max-h-full"
        }`}
      >
        {links.map((link, index: number) => (
          <li key={index} className="mb-2">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
