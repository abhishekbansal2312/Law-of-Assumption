export default function WhyTrustUsSection() {
  const trustPoints = [
    "5+ YEARS OF EXPERIENCE",
    "5,000+ PEOPLE COACHED",
    "EASY-TO-FOLLOW METHODS",
    "PROVEN SUCCESS STORIES",
  ];

  return (
    <section
      className="py-16 px-4 md:px-10 lg:px-16"
      style={{
        background: "linear-gradient(180deg, #f97316 0%, #fbbf24 100%)",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white inline-flex items-center justify-center">
          <span className="w-12 h-1 bg-white hidden md:block mr-4"></span>
          WHY PEOPLE TRUST US
          <span className="w-12 h-1 bg-white hidden md:block ml-4"></span>
        </h2>
        <p className="text-lg md:text-xl text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-yellow-50 flex items-center justify-center p-4"
            >
              <p className="font-bold text-lg md:text-xl text-center">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
