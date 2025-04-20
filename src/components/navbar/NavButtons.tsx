import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

export const ButtonOutline = ({ text, href, onClick }: ButtonProps) => {
  const className =
    "px-4 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-50 transition-colors";

  if (href) {
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export const ButtonFilled = ({ text, href, onClick }: ButtonProps) => {
  const className =
    "px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors";

  if (href) {
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
