import { testimonials } from "../../library/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-flex items-center justify-center">
          <span className="w-12 h-1 bg-orange-500 hidden md:block mr-4"></span>
          REAL PEOPLE, REAL RESULTS
          <span className="w-12 h-1 bg-orange-500 hidden md:block ml-4"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-6xl text-yellow-400 font-serif leading-none mb-6">
                &ldquo;&rdquo;
              </div>
              <p className="text-2xl md:text-3xl font-medium italic mb-6">
                {testimonial.quote}
              </p>
              <p className="text-gray-500 text-lg">– {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
