export const ButtonOutline = ({ text }: { text: string }) => (
  <button className="px-4 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-50 transition-colors">
    {text}
  </button>
);

export const ButtonFilled = ({ text }: { text: string }) => (
  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
    {text}
  </button>
);
