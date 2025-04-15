import logoWhite from "../../assets/logo/logowhite.png";
export const Logo = () => (
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
