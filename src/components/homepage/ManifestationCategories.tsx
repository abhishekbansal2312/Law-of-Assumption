import { categories } from "../../library/categories";

export default function ManifestationCategories() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition-transform">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 max-w-xs">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
