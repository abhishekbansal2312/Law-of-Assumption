import aboutus from "../../assets/aboutus.png";
export default function AboutUsSection() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-flex items-center">
          <span className="w-12 h-1 bg-orange-500 hidden md:block mr-4"></span>
          ABOUT US
          <span className="w-12 h-1 bg-orange-500 hidden md:block ml-4"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={aboutus}
            alt="Light bulb representing ideas"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-lg">
              At <span className="font-bold">Law of Assumption</span>, we guide
              individuals in transforming their lives using the powerful
              principles of <span className="font-bold">Neville Goddard</span>{" "}
              and the <span className="font-bold">Law of Assumption</span>. With
              over <span className="font-bold">5 years of experience</span>, we
              have helped <span className="font-bold">5,000+ people</span> apply
              these teachings to achieve their personal and professional goals.
            </p>
          </div>

          <div>
            <p className="text-lg">
              Our{" "}
              <span className="font-bold">structured coaching programs</span>{" "}
              are designed for easy learning, allowing clients to integrate
              these concepts into daily life. Whether it's attracting success,
              building better relationships, or creating financial abundance,
              our approach provides clear, practical steps to reshape your
              reality.
            </p>
          </div>

          <div>
            <p className="text-lg">
              The impact of our coaching is reflected in the{" "}
              <span className="font-bold">
                many success stories and testimonials
              </span>{" "}
              from those who have embraced this journey. We believe that{" "}
              <span className="font-bold">
                your assumptions shape your world
              </span>
              , and with the right mindset, you can create the life you truly
              desire.
            </p>
          </div>

          <div>
            <p className="text-lg font-bold">
              Start your transformation today—your future is in your hands!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
