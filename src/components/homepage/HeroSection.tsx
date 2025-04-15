import banner from "../../assets/banner1.png";
export default function HeroSection() {
  return (
    <div className="relative w-full h-96 md:h-screen md:max-h-[600px]">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={banner}
          alt="Woman focused on work"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Manifest Your Dream Life with the Law of Assumption
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Create Your Reality with the Law of Assumption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
