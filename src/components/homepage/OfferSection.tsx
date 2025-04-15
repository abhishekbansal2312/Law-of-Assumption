import { offerData } from "../../library/offer";
export default function WhatWeOfferSection() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 bg-yellow-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-flex items-center justify-center">
          <span className="w-12 h-1 bg-orange-500 hidden md:block mr-4"></span>
          WHAT WE OFFER
          <span className="w-12 h-1 bg-orange-500 hidden md:block ml-4"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mt-4 max-w-3xl mx-auto">
          Our programs are designed to make manifestation simple and practical
          for everyone
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offerData.map((offer, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden shadow-md mb-4 w-full h-64">
              <img
                src={offer.image}
                alt={offer.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {offer.title}
            </h3>
            <p className="text-center text-gray-800">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
