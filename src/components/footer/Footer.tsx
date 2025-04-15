import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import logoWhite from "../../assets/logo/logowhite.png";

// Logo Component with image
const Logo = () => (
  <div className="flex flex-col items-center md:items-start">
    <img
      src={logoWhite}
      alt="Law of Assumption Logo"
      className="w-16 h-16 md:w-24 md:h-24 mb-2"
    />
    <h3 className="text-white text-lg font-bold">LAW OF ASSUMPTION</h3>
    <div className="w-12 h-px bg-gray-600 my-2"></div>
    <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
      The best NFT marketplace website in the world and feel your experience in
      selling or buy our work
    </p>
  </div>
);

const CollapsibleFooterColumn: React.FC<{ title: string; links: string[] }> = ({
  title,
  links,
}) => {
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

// Contact Info Component
const ContactInfo = () => {
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

// Main Footer Component
export default function Footer() {
  const aboutLinks = ["Resource", "Term & Condition", "FAQ"];
  const companyLinks = [
    "Our Team",
    "Partner With Us",
    "Privacy & Policy",
    "Features",
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
              <CollapsibleFooterColumn title="About" links={aboutLinks} />
              <CollapsibleFooterColumn title="Company" links={companyLinks} />
              <ContactInfo />
            </div>
          </div>
        </div>

        <div className="border-t w-full border-gray-800 mt-8 flex justify-center pt-6 text-center md:text-left">
          <div className="text-gray-400 text-sm">
            Created by{" "}
            <span className="text-white">lawofassumptioncoaching</span> | All
            Rights Reserved!
          </div>
        </div>
      </div>
    </footer>
  );
}
