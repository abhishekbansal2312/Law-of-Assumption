import { useState } from "react";
import { Menu } from "lucide-react";
import { ButtonOutline, ButtonFilled } from "./NavButtons";
import { CustomLink } from "./CustomLink";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { to: "/about", text: "About Us" },
    { to: "/coaching", text: "Coaching" },
    { to: "/course", text: "Course" },
    { to: "/resources", text: "Free Resource" },
    { to: "/testimonial", text: "Testimonial" },
    { to: "/blog", text: "Blog" },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Assumption Logo" className="h-12 w-12" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <CustomLink
              key={link.to}
              to={link.to}
              text={link.text}
              isMobile={false}
              isActive={location.pathname === link.to}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ButtonOutline text="Contact us" href="/contact" />
          <ButtonOutline text="Sign up" href="/signup" />
          <ButtonFilled text="Log in" href="/login" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <CustomLink
                key={link.to}
                to={link.to}
                text={link.text}
                isMobile={true}
                isActive={location.pathname === link.to}
              />
            ))}

            <div className="flex flex-col space-y-3 pt-4">
              <ButtonOutline text="Contact us" href="/contact" />
              <ButtonOutline text="Sign up" href="/signup" />
              <ButtonFilled text="Log in" href="/login" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
