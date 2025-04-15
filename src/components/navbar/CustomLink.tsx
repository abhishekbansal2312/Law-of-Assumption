import { Link } from "react-router-dom";
export const CustomLink = ({
  to,
  text,
  isActive,
  isMobile,
}: {
  to: string;
  text: string;
  isActive: boolean;
  isMobile: boolean;
}) => {
  const baseClasses = "text-base font-medium";
  const activeClasses = isMobile
    ? "text-amber-500"
    : "text-amber-500 border-b-2 border-amber-500 pb-1";
  const inactiveClasses = isMobile
    ? "text-gray-700"
    : "text-gray-700 hover:text-amber-500";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {text}
    </Link>
  );
};
